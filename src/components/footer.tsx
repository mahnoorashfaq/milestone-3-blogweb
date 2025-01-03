import { FaBehance, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
      <>
     <section className="flex flex-wrap h-fit justify-center p-6 w-full bg-black text-gray-500 gap-x-10 gap-y-10 lg:gap-x-20">
      <div>
        <li className="text-base font-semibold pb-1 md:text-xl lg:text-2xl">Contact the Publisher</li>
        <li className="text-xs pb-1 md:text-sm lg:text-base">mike@runo.com</li>
        <li className="text-xs md:text-sm lg:text-base">+944 450 904 505</li>
      </div>
      <div>
        <li className="text-base font-semibold pb-1 md:text-xl lg:text-2xl">Explorate</li>
        <li  className="text-xs pb-1 md:text-sm lg:text-base">About</li>
        <li  className="text-xs pb-1 md:text-sm lg:text-base">Partners</li>
        <li  className="text-xs pb-1 md:text-sm lg:text-base">Job Opportunities</li>
        <li  className="text-xs pb-1 md:text-sm lg:text-base">Advertise</li>
        <li  className="text-xs md:text-sm lg:text-base">Membership</li>
      </div>
      <div>
        <li className="text-base font-semibold pb-1 md:text-xl lg:text-2xl">Headquarter</li>
        <li  className="text-xs md:text-sm lg:text-base">191 Middleville Road,<br />
            NY 1001, Sydney <br />
            Australia</li>
      </div>
      <div>
        <li className="text-base font-semibold pb-1 md:text-xl lg:text-2xl">Connections</li>
        <li  className="flex gap-4 text-sm md:text-base lg:text-lg"><FaFacebook /> <FaTwitter /> <FaInstagram /> <FaPinterest /> <FaBehance /> </li>
      </div>
     </section>
     <div className="flex items-center justify-center text-xs md:text-sm lg:text-base w-full h-8 p-1 bg-slate-300">
      <p>Design by Mahnoor Ashfaq</p>
     </div>
     </>
    );
  }
  