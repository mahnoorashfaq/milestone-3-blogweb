import Image from "next/image";
import Link from "next/link";

interface Iposts{
  date:string,
  title: string,
  description :string,
  id:number,
  img_url:string
}
const posts:Iposts[]=[
  {
    date: "08.08.2024",
    title :"Dream destinations to visit this year in Paris",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:1,
    img_url:"/product1.png"
  },
  {
    date: "08.08.2024",
    title :"Breathtaking first-person photos around Europe",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:2,
    img_url:"/product2.png"
  },
  {
    date: "08.08.2024",
    title :"What collectors need to know about authenticity",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:3,
    img_url:"/product3.png"
  },
  {
    date: "08.08.2024",
    title :"Instagram artists with great photography skills",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:4,
    img_url:"/product4.png"
  },
  {
    date: "08.08.2024",
    title :"Thins to know before visiting Cave in Germany",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:5,
    img_url:"/product5.png"
  },
   {
    date: "08.08.2024",
    title :"Nina Smith vibrant work collab with Nike Dunk",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:6,
    img_url:"/product6.png"
  },
  {
    date: "08.08.2024",
    title :"Richard Norton photorealistic rendering as real photos",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:7,
    img_url:"/product7.png"
  },
  {
    date: "08.08.2024",
    title :"25 quality collectors toys inspired by famous films",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:8,
    img_url:"/product8.png"
  }
]

export default function Blog() {
    return (
     <div className="w-full max-h-fit p-10 md:p-16 lg:p-24">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pb-10 text-gray-500 text-center">Popular Topics</h1>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 w-full">
            {
              posts.map((data)=>{
                return(
                 <div key={data.id}>
                   <Link href={`/post/${data.id}`}> <Image src={data.img_url} alt={data.title} width={350} height={350} className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl-h-80"></Image>
                    <p className="text-xs md:text-sm lg:text-base text-gray-500 pt-2">{data.date}</p>
                    <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-500 pt-2  w-60 md:w-64 lg:w-72">{data.title}</p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-500 w-52 md:w-60 lg:w-72  text-justify pt-2"> {data.description}</p> </Link>
                  </div>
                )
              }
            )
            }
          </div>

     </div>
    );
  }
  