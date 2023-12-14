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
      <section className="bg-neutral-50 px-6 py-10 md:px-10 md:py-24 xl:pt-[120px] xl:pb-[168px] xl:px-[165px]">
        <CategoryList />
      </section>
    </>
  );
}

