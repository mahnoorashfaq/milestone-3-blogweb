"use client"
import CommentSection from "@/components/comment";
import { SheetSide } from "@/components/hamburger";
import Link from "next/link";
import { useParams } from "next/navigation"
interface Iposts{
    date:string,
    title: string,
    description1 :string,
    description2 :string,
    heading : string,
    id:number,
    img_url:string
  }
  const posts:Iposts[]=[
    {
      date: "08.08.2024",
      title :"Dream destinations to visit this year in Paris",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      id:1,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product1.png"
    },
    {
      date: "08.08.2024",
      title :"Breathtaking first-person photos around Europe",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",      
      id:2,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product2.png"
    },
    {
      date: "08.08.2024",
      title :"What collectors need to know about authenticity",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",      
      id:3,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",

      img_url:"/product3.png"
    },
    {
      date: "08.08.2024",
      title :"Instagram artists with great photography skills",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",     
       id:4,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product4.png"
    },
    {
      date: "08.08.2024",
      title :"Thins to know before visiting Cave in Germany",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",     
       id:5,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product5.png"
    },
     {
      date: "08.08.2024",
      title :"Nina Smith vibrant work collab with Nike Dunk",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",     
       id:6,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product6.png"
    },
    {
      date: "08.08.2024",
      title :"Richard Norton photorealistic rendering as real photos",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",      
      id:7,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product7.png"
    },
    {
      date: "08.08.2024",
      title :"25 quality collectors toys inspired by famous films",
      description1 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",
      description2 : "Paris, the City of Light, is a treasure trove of unforgettable experiences. This year, make your dreams come true by exploring its iconic landmarks and hidden gems. Start at the Eiffel Tower, a global symbol of romance. Climb to the top or enjoy a picnic in the surrounding Champ de Mars gardens for a perfect Parisian moment. Art lovers will revel in the Louvre Museum home to masterpieces like the Mona Lisa and the Venus de Milo. Nearby, the historic Notre-Dame Cathedral offers awe-inspiring Gothic architecture and breathtaking views from its towers. For a more contemporary vibe, head to the vibrant Montmartre district. This bohemian hub is famous for its artistic heritage, cobblestone streets, and the majestic Sacré-Cœur Basilica. Dont miss a leisurely stroll along the Seine River where charming bookstalls and picturesque bridges invite exploration. Dive into Parisian culture in the Le Marais neighborhood, renowned for its stylish boutiques, art galleries, and mouthwatering cuisine. End your day at the Musée d Orsay or with a sunset cruise on the Seine. Whether youre seeking history, art, or romance Paris offers a magical journey through its timeless beauty. Let this year be the one you fulfill your Parisian dream!",     
      id:8,
      heading: "“ Monotonectally seize superior mindshare rather than efficient technology. ”",
      img_url:"/product8.png"
    }
  ]
export default function Post() {
    const params = useParams();
    const id = params.id
    const item = posts.find((item)=> item.id === Number(id))
    if (!item){
      <h1>Blog Post Not Find</h1>
    }
    return (
     <>
<section className="bg-bannerImage bg-repeat bg-cover bg-bottom w-full h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px] text-white ">
      {/* navbar */}
    <section className="flex justify-between md:justify-between text-white items-center  bg-black bg-opacity-30 h-10 md:h-12 lg:h-16 xl:h-20 pl-1 md:pl-12 md:pr-16">
    <div className="block md:hidden"><SheetSide /></div>
    <div className="font-semibold pr-5 text-xl md:text-2xl lg:text-3xl"><Link href={"/"}>RUNO</Link></div>
    <div className="hidden md:block">
        <ul className="flex text-sm md:text-base gap-8">
        <li> <Link href={"/"}>Home </Link></li>
               <li> <Link href={"/about"}>About </Link></li>
               <li> <Link href={"/article"}>Articles </Link></li>
               <li> <Link href={"/contact"}>Contact us </Link></li>
        </ul>
     </div>
{/* Hero */}
</section >
<section  className="flex flex-col justify-center pl-4 pr-3 sm:pl-8 md:pl-10 lg:pl-16 xl:pl-20 h-full pb-16 " >
<p className="text-[6px] h-4 w-14 flex items-center justify-center rounded-xl sm:text-[8px] sm:h-6 sm:w-20  lg:text-[10px] lg:h-8 lg:w-24 bg-gray-200  text-gray-500 font-bold  ">ADVENTURE</p>
<h1 className="font-bold font-serif  pt-2 pb-2 leading-4 text-lg sm:text-xl sm:leading-5 md:text-2xl md:leading-6 md:pt-3  md:pb-3 lg:text-3xl  lg:leading-8 lg:pt-4  lg:pb-4 xl:text-4xl xl:leading-9 xl:pt-5  xl:pb-5">Richird Norton photorealistic <br />rendering as real photos</h1>
 <div className="flex-wrap justify items-center md:flex">
  <p className="text-[10px] md:text-[12px] pb-1 lg:text-[14px] xl:text-[16px]">08.08.2021 &nbsp; &nbsp;</p> <hr className="w-[50px] border-white"/>
  <p className="text-[10px] pt-1 w-72  sm:text-[11px] sm:leading-3 sm:w-80 md:w-[450px] md:leading-4 lg:w-[500px] lg:text-[14px] lg:leading-4 xl:text-[15px] xl:leading-5 xl:w-[600px] leading-none md:text-sm md:pl-4">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p></div>
 </section>
   </section>  




   <section className="w-full h-fit p-9 flex flex-col justify-center items-center text-gray-500">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif pb-3 text-center">{item?.title}</h1>
        <div className="pb-3">
          {item?.img_url && (
 <img src={item?.img_url} alt="post_img"/>
          )}
          </div>               
<div className="blog-width w-[270px] sm:w-[470px] md:w-[670px] lg:w-[800px] xl:w-[1000px] text-justify flex justify-center ">
            <p className="pr-1 sm:pr-2 md:pr-3 lg:pr-4 xl:pr-5 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">{item?.date}</p> 
            <div><p className="pl-1 sm:pl-2 md:pl-3 lg:pl-4 xl:pl-5 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">{item?.description1}</p>
       <h3 className="font-bold font-serif text-lg md:text-xl leading-6 lg:text-2xl xl:text-3xl text-center pt-2 pb-2">{item?.heading} </h3>
       <p className="pl-1 lg:pl-5 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">{item?.description2}</p>
       </div></div>
       </section>
<CommentSection />
</>
    )} 