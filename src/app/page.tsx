import Blog from "@/components/blog";
import Blog2 from "@/components/blog2";
import { SheetSide } from "@/components/hamburger";
import Hero from "@/components/hero";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <section className="bg-bannerImage bg-repeat bg-cover bg-bottom w-full h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] text-white ">
      {/* navbar */}
    <section className="flex justify-start md:justify-between text-white items-center  bg-black bg-opacity-30 h-10 md:h-12 lg:h-16 xl:h-20 pl-1 md:pl-12 md:pr-16">
    <div className="block md:hidden"><SheetSide /></div>
     <div className="font-semibold text-lg md:text-2xl">RUNO</div>
     <div className="hidden md:block">
        <ul className="flex text-sm md:text-base gap-8">
        <li> <Link href={"/"}>Home </Link></li>
               <li> <Link href={"/about"}>About </Link></li>
               <li> <Link href={"/articles"}>Articles </Link></li>
               <li> <Link href={"/contact"}>Contact us </Link></li>
        </ul>
     </div>
{/* Hero */}
</section >
<section  className="flex flex-col justify-center pl-4 pr-3 sm:pl-8 md:pl-10 lg:pl-16 xl:pl-20 h-full pb-24 " >
    <p className="text-[7px] h-5 w-16 flex items-center justify-center rounded-xl sm:text-[9px] sm:h-7 sm:w-20  lg:text-[11px] lg:h-8 lg:w-24 bg-gray-200  text-gray-500 font-bold  ">ADVENTURE</p>
 <h1 className="font-bold font-serif  pt-2 pb-2 leading-4 text-lg sm:text-xl sm:leading-5 md:text-2xl md:leading-6 md:pt-3  md:pb-3 lg:text-3xl  lg:leading-8 lg:pt-4  lg:pb-4 xl:text-4xl xl:leading-9 xl:pt-5  xl:pb-5">Richird Norton photorealistic <br />rendering as real photos</h1>
 <div className="flex-wrap justify items-center md:flex">
  <p className="text-[10px] md:text-[12px] pb-1 lg:text-[14px] xl:text-[16px]">08.08.2021 &nbsp; &nbsp;</p> <hr className="w-[50px] border-white"/>
  <p className="text-[10px] pt-1 w-72  sm:text-[11px] sm:leading-3 sm:w-80 md:w-[450px] md:leading-4 lg:w-[500px] lg:text-[14px] lg:leading-4 xl:text-[15px] xl:leading-5 xl:w-[600px] leading-none md:text-sm md:pl-4">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p></div>
 </section>
   </section>   
   <Blog />
   <Hero />
   <Blog2 />
    </>
  );
}
