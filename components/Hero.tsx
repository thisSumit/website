"use client";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import Image from "next/image";

 
export const Hero = () => {
  return (
<div className="w-full">
    <div className="relative flex w-full items-center justify-center overflow-hidden md:p-20 h-screen">
        <div className="flex flex-col items-center">
        <Image alt="bulb" src='/bridge.webp' height={100} width={180} className="md:absolute w-[20vh]"></Image>
           <h2 className="md:pt-[15vh] whitespace-pre-wrap text-center text-5xl md:text-8xl font-medium tracking-tighter text-black dark:text-white">
             Bridging the Gap Between Education and Industry!
            </h2> 
            <p className="text-sm my-2 md:text-xl tracking-tight leading-[20px]">START YOUR CAREER WITH INTERNPRO !!!</p>
            <a className="hover:bg-yellow-300 transition duration-200 py-2 px-4 font-semibold rounded-full light:bg-black dark:bg-white light:text-white dark:text-black my-1 text-lg md:text-xl" href="https://docs.google.com/forms/d/e/1FAIpQLSez4WUhG__Biy7ldYhc8Dzke9pqoQ92KVBH--aHxMzTV4mPmA/viewform">Join Now</a>
        </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
        />
    </div>
    {/* <div className="border-y-2 border-black  py-1">
    <VelocityScroll
      text="Join Now"
      default_velocity={2}
      className="w-full font-display text-center text-xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white mt-1 md:text-4xl"
    />
    </div> */}
  </div>
  );
};
