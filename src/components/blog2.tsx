import Image from "next/image";
import Link from "next/link";

interface Iproducts{
  date:string,
  title: string,
  description :string,
  id:number,
  img_url:string
}
const product:Iproducts[]=[
  {
    date: "08.08.2024",
    title :"Richird Norton photorealistic rendering as real photos",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:9,
    img_url:"/product9.png"
  },
  {
    date: "08.08.2024",
    title :"Richird Norton photorealistic rendering as real photos",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:10,
    img_url:"/product10.png"
  },
  {
    date: "08.08.2024",
    title :"Richird Norton photorealistic rendering as real photos",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:11,
    img_url:"/product11.png"
  },
  {
    date: "08.08.2024",
    title :"Richird Norton photorealistic rendering as real photos",
    description : "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas",
    id:12,
    img_url:"/product4.png"
  }
]

export default function Blog2() {
    return (
     <div className="w-full max-h-fit p-10 md:p-16 lg:p-24">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pb-10 text-gray-500 text-center">Editor’s Pick</h1>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 w-full">
            {
              product.map((data)=>{
                return(
                  <div key={data.id}>
                   <Link href={`/post2/${data.id}`}> <Image src={data.img_url} alt={data.title} width={350} height={350} className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl-h-80"></Image>
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
    )
  }
  