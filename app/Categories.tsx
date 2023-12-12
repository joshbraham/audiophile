import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categoryData = [
    {
      src: "/img/category/mobile/headphones.png",
      width: 80,
      height: 104,
      mb: "[19px]",
      title: "HEADPHONES",
      href: "/headphones",
    },
    {
      src: "/img/category/mobile/speakers.png",
      width: 84,
      height: 101,
      mb: "[22px]",
      title: "SPEAKERS",
      href: "/speakers",
    },
    {
      src: "/img/category/mobile/earphones.png",
      width: 103,
      height: 104,
      mb: "[19px]",
      title: "EARPHONES",
      href: "/earphones",
    },
  ] as const;

  return (
    <ul className="list-none flex flex-col gap-4">
      {categoryData.map((data) => (
        <li
          key={data.title}
          className="flex flex-col items-center gap-[17px] pb-6"
        >
          <Image
            src={data.src}
            width={data.width}
            height={data.height}
            alt=""
          />
          <p
            className={`pt-${data.mb} font-bold text-[15px] tracking-[1.07px]`}
          >
            {data.title}
          </p>
          <Link
            href={data.href}
            className="interactive font-bold text-[13px] tracking-[1px] text-neutral-500 flex gap-3 items-center"
          >
            SHOP
            <svg className="w-2 h-3">
              <use href="#arrow-right"></use>
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
