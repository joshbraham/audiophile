const { db } = require("@vercel/postgres");
const { products, contents } = require("./data");

async function seedProducts(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id SMALLINT PRIMARY KEY,
        title VARCHAR(31) NOT NULL,
        category VARCHAR(15) NOT NULL,
        desc1 TEXT NOT NULL,
        desc2 TEXT NOT NULL,
        desc3 TEXT NOT NULL,
        price SMALLINT NOT NULL,
        created_at TIMESTAMP DEFAULT now()
      );
    `;

    console.log('Created "products" table');

    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products
        VALUES (${product.id}, ${product.title}, ${product.category}, ${product.description}, ${product.desc2}, ${product.desc3}, ${product.price}, DEFAULT)
        ON CONFLICT DO NOTHING;`
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function seedContents(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS contents (
        id SMALLINT PRIMARY KEY,
        title VARCHAR(31) NOT NULL
      );
    `;

    console.log('Created "contents" table');

    const insertedContents = await Promise.all(
      contents.map(
        (content) =>
          client.sql`INSERT INTO contents VALUES (${content.id}, ${content.title}) ON CONFLICT DO NOTHING;`
      )
    );

    console.log(`Seeded ${insertedContents.length} contents`);
  } catch (error) {
    console.error("Error seeding contents:", error);
    throw error;
  }
}

async function seedProductContents(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS product_contents (
        product_id SMALLINT REFERENCES products,
        content_id SMALLINT REFERENCES contents,
        quantity SMALLINT NOT NULL,
        PRIMARY KEY (product_id, content_id)
      );
    `;

    console.log(`Created "product_contents" table`);

    let amountSeeded = 0;
    for (const product of products) {
      const { id: productId, contents } = product;
      const contentArr = Object.entries(contents);
      const insertedRows = await Promise.all(
        contentArr.map(
          ([contentId, quantity]) => client.sql`
        INSERT INTO product_contents
        VALUES (${productId}, ${contentId}, ${quantity})
        ON CONFLICT DO NOTHING;`
        )
      );
      amountSeeded += insertedRows.length;
    }

    console.log(`Seeded ${amountSeeded} product contents`);
  } catch (error) {
    console.error("Error seeding product contents:", error);
    throw error;
  }
}

async function seedPictures(client) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS pictures (
        product_id SMALLINT REFERENCES products UNIQUE,
        src VARCHAR(127) NOT NULL,
        type VARCHAR(15) NOT NULL,
        width SMALLINT NOT NULL,
        height SMALLINT NOT NULL
      );`;

    console.log('Created "pictures" table');

    let amountSeeded = 0;
    for (const product of products) {
      const { id: productId, preview, gallery } = product;
      const picturesToSeed = [
        client.sql`
        INSERT INTO pictures
        VALUES (${productId}, ${preview.src}, 'preview', ${preview.width}, ${preview.height})
        ON CONFLICT DO NOTHING;`,
      ];

      for (const item of gallery) {
        picturesToSeed.push(client.sql`
          INSERT INTO pictures
          VALUES (${productId}, ${item.src}, 'gallery', ${item.width}, ${item.height})
          ON CONFLICT DO NOTHING;
        `);
      }

      const insertedPictures = await Promise.all(picturesToSeed);
      amountSeeded += insertedPictures.length;
    }

    console.log(`Seeded ${amountSeeded} pictures`);
  } catch (error) {
    console.error("Error seeding pictures", error);
    throw error;
  }
}

async function dropAll(client) {
  try {
    await client.sql`
    DROP TABLE IF EXISTS pictures;
    DROP TABLE IF EXISTS product_contents;
    DROP TABLE IF EXISTS contents;
    DROP TABLE IF EXISTS products;`;

    console.log("Dropped all (4) tables.");
  } catch (error) {
    console.error("Error dropping tables:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await dropAll(client);
  await seedProducts(client);
  await seedContents(client);
  await seedProductContents(client);
  await seedPictures(client);

  await client.end();
}

main();
