export default function Home() {
  return (
    <>
      <section className="px-6 py-28 flex flex-col items-center text-center before:absolute before:inset-0 before:-z-50 before:bg-hero-mobile before:bg-[center_-1rem] before:bg-no-repeat before:bg-cover md:before:bg-hero-tablet xl:before:bg-hero-desktop">
        <h2 className="text-neutral-500 tracking-[10px] mb-4">NEW PRODUCT</h2>
        <p className="font-bold text-white text-4xl tracking-[1.29px] mb-6">
          XX99 MARK <span aria-hidden="true">II</span>
          <span className="sr-only">2</span> HEADPHONES
        </p>
        <p className="text-neutral-300 font-medium text-[15px] leading-[25px] mb-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-primary hover:bg-primary-light px-8 py-4 text-white font-bold text-[13px] tracking-[1px]">
          SEE PRODUCT
        </button>
      </section>
    </>
  );
}

