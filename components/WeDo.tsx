"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { reviews } from "@/data";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  photo,
  body,
}: {
  img: string;
  name: string;
  photo: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <img className="w-[120px] my-4 grayscale" width="200" height="150" alt="" src={photo} />
    </figure>
  );
};
 
export function MarqueeDemo() {
  return (
    <div id="achieve" className="flex flex-col items-center">
    <div className="relative flex h-[60vh] w-full md:w-10/12 flex-col items-center justify-center overflow-hidden rounded-[45px] my-10">
        <h2 className="text-xl md:text-4xl font-bold mt-2">Our Achivers</h2>
        <p className="text-lg mb-2">Have Cracked Their Dream Careers In...</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-0 md:w-[10vh] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-0 md:w-[10vh] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </div>
  );
}
