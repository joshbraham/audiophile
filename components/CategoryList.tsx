import Image from "next/image";
import Link from "next/link";

const categoryData = [
  {
    src: "/img/category/headphones.png",
    maxWidth: 123,
    maxHeight: 160,
    class: "w-20 lg:w-[123px] mb-9",
    title: "HEADPHONES",
    href: "/headphones",
  },
  {
    src: "/img/category/speakers.png",
    maxWidth: 121,
    maxHeight: 146,
    class: "w-[84px] lg:w-[121px] mb-[39px]",
    title: "SPEAKERS",
    href: "/speakers",
  },
  {
    src: "/img/category/earphones.png",
    maxWidth: 125,
    maxHeight: 126,
    class: "w-[103px] lg:w-[125px] mb-9 lg:mt-3",
    title: "EARPHONES",
    href: "/earphones",
  },
] as const;

export default function CategoryList({ className }: { className?: string }) {
  return (
    <ul
      className={`${
        className ?? ""
      } list-none flex flex-col gap-4 sm:flex-row sm:gap-[10px] xl:gap-[30px]`}
    >
      {categoryData.map((data) => (
        <li
          key={data.title}
          className="flex-1 flex justify-center items-end isolate relative before:absolute before:-z-10 before:inset-[52px_0_0] before:bg-neutral-150 before:rounded-lg"
        >
          <Link
            href={data.href}
            className="group w-full focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline pb-6 flex flex-col items-center"
          >
            <div
              className={`${data.class} relative after:absolute after:bottom-0 after:w-[95px] after:h-[14px] after:bg-black after:blur-[22px]`}
            >
              <Image
                src={data.src}
                width={data.maxWidth}
                height={data.maxHeight}
                alt=""
              />
            </div>
            <p className="md:mt-auto mb-[17px] font-bold text-[15px] lg:text-[18px] tracking-[1.07px]">
              {data.title}
            </p>
            <p className="group-hover:text-primary font-bold text-[13px] tracking-[1px] text-neutral-500 flex gap-3 items-center">
              SHOP
              <svg className="w-2 h-3 transition-transform group-hover:translate-x-1">
                <use href="#arrow-right"></use>
              </svg>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
