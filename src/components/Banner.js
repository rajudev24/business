import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs'

export default function Banner() {
  return (
    <div className="bg-slate-800 p-4 max-sm:p-1 text-white py-20">
      <div className="flex justify-between items-center max-sm:flex-col mx-20 max-sm:mx-8 mt-8 ">
        <div>

          <h1 className="text-[64px] font-bold"> Investing Made easy</h1>
          <p className="text-[24px] my-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex max-sm:flex-col">
            <button className="border-2 text-white p-3 rounded-lg my-2 flex items-center ">
              View All Services <BsArrowRight size={28} className="ml-2" />
            </button>
            <button className="border-2 text-white p-3 rounded-lg my-2 flex items-center md:ml-8">
              Get In Touch <BsArrowRight size={28} className="ml-2" />
            </button>
          </div>

        </div>
        <div className="w-2/3 relative">

        </div>
        <Image
          src={"/img/banner-1.png"}
          alt="logo"
          width={400}
          height={400}
          loading="lazy"
          className="absolute top-72 right-24 bg-slate-600 rounded-xl"
        />
      </div>
    </div>
  );
}
