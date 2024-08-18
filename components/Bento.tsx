import { cn } from "@/lib/utils";
import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { items } from "@/data";

export function Bento() {
  return (
    <div id="internships" className="md:px-10">
      <h1 className='font-bold text-3xl md:text-4xl tracking-tighter items-center flex'>Explore Our Categories</h1>
      <p className='text-lg text-muted-foreground  mb-4 md:my-4 md:w-3/4 w-full'>We envision a future where every student and aspiring professional has the opportunity to gain meaningful experience before they even graduate. By fostering strong partnerships with industry leaders, we aim to become the go-to platform for internships and project-based learning.</p>
      <BentoGrid className="max-w-full">
      {items.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} 
          link={item.link}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
    </div>
  );
}