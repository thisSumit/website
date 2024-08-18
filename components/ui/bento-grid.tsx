'use client'
import { useState } from "react";

import { cn } from "@/lib/utils";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
  link,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  link?: string;
}) => {
  const leftLists = ["Instagram", "Google", "Facebook"];
  const rightLists = ["LinkedIn", "Twitter", "YouTube"];

  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border-[2px] border-black group/bento hover:shadow-xl transition duration-100 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 text-black",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "white",
      }}
    >
      <div>
      <a href={link}>
        <div className="flex w-full h-full absolute justify-end">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center items-center justify-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 md:-bottom-16 -bottom-5 brightness-95  -rotate-12`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center group-hover/bento:blur-xl transition duration-200 h-full right-0 md:w-[30vh] hover:blur-xl w-[12vh]"
            />
          )}
        </div>

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
            <div className="font-sans max-w-80 md:max-w-[15vw] md:text-xs my-1 lg:text-base text-sm text-neutral-400 z-10">
              {description}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};