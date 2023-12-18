import Image from "next/image";
import CategoryList from "./CategoryList";

export default function Home() {
  return (
    <>
      <hr className="border-neutral-700 md:mx-10 xl:mx-[165px]" />
      <section className="flex flex-col items-center lg:items-start text-center lg:text-start px-6 py-28 md:px-48 md:pt-32 md:pb-42 lg:px-10 xl:px-[165px] xl:pb-[158px] relative before:absolute before:inset-[-5.5625rem_0_0] before:-z-50 before:bg-no-repeat before:bg-cover before:bg-[center] before:bg-hero-mobile md:before:bg-hero-tablet lg:before:bg-hero-desktop">
        <h2 className="text-neutral-500 text-[14px] tracking-[10px] mb-4 md:mb-6">
          NEW PRODUCT
        </h2>
        <p className="max-w-[12ch] font-bold text-white text-4xl md:text-[56px] md:leading-[58px] tracking-[1.29px] md:tracking-[2px] mb-6">
          XX99 MARK <span aria-hidden="true">II</span>
          <span className="sr-only">2</span> HEADPHONES
        </p>
        <p className="text-neutral-300 font-medium text-[15px] max-w-[40ch] leading-[25px] mb-7 md:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="interactive bg-primary px-8 py-4 text-white font-bold text-[13px] tracking-[1px] hover:bg-primary-light">
          SEE PRODUCT
        </button>
      </section>
      <section
        aria-label="Product categories"
        className="bg-neutral-50 px-6 py-10 md:px-10 md:py-24 xl:pt-[120px] xl:pb-[168px] xl:px-[165px]"
      >
        <CategoryList />
      </section>
      <section
        aria-label="Featured products"
        className="bg-neutral-50 px-6 md:px-10 xl:px-[165px] py-20 flex flex-col gap-6 md:gap-8 xl:gap-12"
      >
        <article
          aria-labelledby="feature-1"
          className="overflow-hidden isolate bg-primary rounded-lg px-6 pt-[60px] pb-[55px] md:px-0 md:py-16 lg:py-12 flex flex-col lg:flex-row lg:justify-evenly"
        >
          <div className="relative mb-9 md:mb-[72px] lg:mb-0 lg:top-[56px] xl:top-[62px]">
            <Image
              src="/svg/pattern-circles.svg"
              alt=""
              width={944}
              height={944}
              className="absolute -z-10 max-w-none w-[558px] md:w-[944px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 md:top-[126px] lg:top-[312px]"
            />
            <Image
              src="/img/home/desktop/image-speaker-zx9.png"
              alt="A black speaker with a large white top cone and a medium black bottom cone"
              width={756}
              height={918}
              className="mx-auto w-40 md:w-[184px] lg:w-72 xl:w-[380px]"
            />
          </div>
          <div className="text-white text-center lg:text-start flex flex-col items-center lg:items-start lg:justify-center">
            <h2
              id="feature-1"
              className="max-w-[8ch] font-bold text-4xl md:text-[56px] leading-10 md:leading-[58px] tracking-[1.29px] md:tracking-[2px] mb-6"
            >
              ZX9 SPEAKER
            </h2>
            <p className="max-w-[35ch] opacity-75 font-medium text-[15px] leading-[25px] mb-6 md:mb-10">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <a
              href="#"
              className="px-8 py-4 bg-black font-bold text-[13px] tracking-[1px] transition-colors hover:bg-neutral-600"
            >
              SEE PRODUCT
            </a>
          </div>
        </article>
        <article aria-labelledby="feature-2" className="rounded-lg">
          <picture>
            <source
              srcSet="/img/home/desktop/image-speaker-zx7.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/img/home/tablet/image-speaker-zx7.jpg"
              media="(min-width: 768px)"
            />
            <Image
              src="/img/home/mobile/image-speaker-zx7.jpg"
              alt="A black speaker with a small black top cone and a large black bottom cone"
              width={654}
              height={640}
            />
          </picture>
          <div className="absolute">
            <h2 id="feature-2">ZX7 SPEAKER</h2>
            <a href="#">SEE PRODUCT</a>
          </div>
        </article>
        <article aria-labelledby="feature-3">
          <picture>
            <source
              srcSet="/img/home/desktop/image-earphones-yx1.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/img/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 768px)"
            />
            <Image
              src="/img/home/mobile/image-earphones-yx1.jpg"
              alt="A plugged-in charging case with truly wireless earbuds inside, all black"
              width={654}
              height={400}
            />
          </picture>
          <div className="rounded-lg bg-neutral-400">
            <h2 id="feature-3">YX1 EARPHONES</h2>
            <a href="#">SEE PRODUCT</a>
          </div>
        </article>
      </section>
    </>
  );
}

