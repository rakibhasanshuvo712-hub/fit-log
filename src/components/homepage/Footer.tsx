
 import footer from "@/assets/logo.png"
 import Image from "next/image";
 export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0b0c0f]">
      <div className="container mx-auto flex min-h-[100px] items-center justify-between px-5">
        
    
        <div className="flex items-center gap-2">
        <Image src={footer}
 height="60px" 
 width="50px"
  alt="Logo" />

          <span className="text-sm font-bold tracking-wider text-white">
            FITLOG
          </span>
        </div>


        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Built with Next.js.
        </p>

      </div>

      <div className="relative h-1 bg-[#18191d]">
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </footer>
  );
}