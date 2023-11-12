import Image from "next/image";
import React from "react";
import { FaListAlt } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BsFillAwardFill } from 'react-icons/bs'
import { SiGooglemeet } from 'react-icons/si'


export default function Choose() {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl mt-10">Why Choose Us</h1>
        <p className="text-sm my-4">
          Sometimes, we need to check the time, wondering when our work or
          meeting will finish,
          <br /> without getting caught by others.
        </p>
      </div>
      <div className="grid md:grid-cols-2 px-10 mt-10 ">
        <div className="relative -mt-16">
          <Image src={"/img/Vector 1.png"} width={500} height={400} alt="img" />
          <Image
            className="absolute top-8 left-24"
            src={"/img/Vector 2.png"}
            width={450}
            height={400}
            alt="img"
          />
        </div>
        <div>
          <h4 className="text-xl flex items-center">  <FaListAlt className="mr-2" size={24} color="#858585" /> Attention to Details</h4>
          <h5 className="text-xl mt-2 flex items-center"> <BsFillAwardFill className="mr-2" size={28} color="#858585" /> A Plan for Success</h5>
          <p className="mt-1 text-sm">
            You want results. We have found that the best way to get them is
            with up front research – of your company, competitors, target market
            and customer psychographics. Only after we fully understand you and
            your customers, do we recommend a plan of attack.
          </p>
          <h5 className="text-lg mt-2 text-[#484848] flex items-center"> <FaPeopleGroup className="mr-2" size={25} color="#858585" />  Experts Only</h5>
          <h5 className="text-lg mt-2 text-[#484848] flex items-center"> <SiGooglemeet className="mr-2" size={24} color="#858585" /> Meeting Deadlines</h5>
          <h5 className="text-lg mt-2 text-[#484848] flex items-center"><BsFillAwardFill className="mr-2" size={28} color="#858585" /> Award-Winning</h5>
        </div>
      </div>
    </div>
  );
}
