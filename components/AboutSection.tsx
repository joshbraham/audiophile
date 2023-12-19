import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-neutral-50 flex flex-col lg:flex-row-reverse gap-10 md:gap-16 lg:gap-0 pt-10 md:pt-4 lg:pt-[120px] pb-[120px] md:pb-24 lg:pb-[200px] px-6 md:px-10 xl:px-[165px]">
      <picture className="lg:flex-1">
        <source
          srcSet="/img/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/img/shared/tablet/image-best-gear.jpg"
          media="(min-width: 768px)"
        />
        <Image
          src="/img/shared/mobile/image-best-gear.jpg"
          alt=""
          width={654}
          height={600}
          className="rounded-lg w-full"
        />
      </picture>
      <div className="text-center lg:text-start sm:px-[58px] lg:pl-0 lg:pr-[55px] xl:pr-[125px] lg:flex-1 lg:flex lg:flex-col lg:justify-center">
        <h2 className="uppercase font-bold text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] tracking-[1px] md:tracking-[1.43px] mb-8">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
