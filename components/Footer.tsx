import { Separator } from "@/components/ui/separator"

export async function Footer() {
  return (
    <div className="my-10 gap-2 bg-gray-900 text-white text-lg rounded-3xl p-4 md:flex">
        <div className="">
            <img src="/short-logo.svg" alt="" className="w-[500px]" />
        </div>
        <div className="flex flex-col">
            <div>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">InternPro</h1>
            <p className="text-lg text-muted-foreground">At InternPro, we're on a mission to empower the next generation of professionals by offering hands-on internship experiences that truly matter. Our approach is simple but effective: combine academic knowledge with real-world challenges to create a pathway for student success in today's competitive job market.</p>
            </div>
            
            <div className="my-10">
      <div className="space-y-1">
        <h4 className="text-[16px] font-medium leading-none">IT Services and Teaching Platform</h4>
        <p className="text-[16px] text-muted-foreground">
          The Leading Virtual Service and Intership Platform
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-xs md:text-sm">
        <div>Term & Conditions</div>
        <Separator orientation="vertical" />
        <div>Privacy Policy</div>
        <Separator orientation="vertical" />
        <div>Refund policy</div>
      </div>
      <div className="flex gap-5 grayscale items-center mt-5">
        <a href="https://www.instagram.com/internpro.tech/"><img src="/instagram.png" className="w-[28px]" alt="" /></a>
        <a href="https://www.linkedin.com/company/gointernpro/"><img src="/linkedin.png" className="w-[28px]" alt="" /></a>
        <a href="mailto:connect@internpro.tech"><img src="/gmail.png" className="w-[28px]" alt="" /></a>
      </div>
    </div>
        </div>
        
    </div>
  );
}
