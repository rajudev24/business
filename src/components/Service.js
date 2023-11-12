import React from "react";
import { FaSpotify, FaSlack, FaDropbox } from 'react-icons/fa'
import { BsArrowRight, BsFillRecordCircleFill } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineAppstore } from 'react-icons/ai'
import { SiBlockchaindotcom } from 'react-icons/si'
import Image from "next/image";

export default function Service() {
  return (
    <div>
      <p className=" flex justify-center mt-10">Trusted by 4,000+ companies</p>

      <div class="flex justify-around items-center my-4">
        <h3 class="text-3xl font-semibold flex  items-center"> <FaSpotify className="mr-2" /> Spotify</h3>
        <h3 class="text-3xl font-semibold flex  items-center"> <FaSlack className="mr-2" /> Slack</h3>
        <h3 class="text-3xl font-semibold flex  items-center"><FaDropbox className="mr-2" /> Dropbox</h3>
        <h3 class="text-3xl font-semibold">Zoom</h3>
      </div>

      <div className="grid md:grid-cols-4 gap-4 max-sm:mx-10 mx-20  ">
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <CgWebsite size={28} style={{
            color: '#33D3D4',
            marginTop: '-15px'
          }} />
          <h3 className="text-xl font-medium">Web Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
            size={24} className="ml-2" /> </button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <AiOutlineAppstore size={28} style={{
            color: '#33D3D4',
            marginTop: '-15px'
          }} />
          <h3 className="text-xl font-medium">App Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
            size={24} className="ml-2" /> </button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <BsFillRecordCircleFill size={28} style={{
            color: '#33D3D4',
            marginTop: '-15px'
          }} />
          <h3 className="text-xl font-medium">AR/VR Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
            size={24} className="ml-2" /> </button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <SiBlockchaindotcom size={28} style={{
            color: '#33D3D4',
            marginTop: '-15px'
          }} />

          <h3 className="text-xl font-medium">BlockChain Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
            size={24} className="ml-2" /> </button>
        </div>
      </div>

      <div className=" text-center mt-20">
        <h1 className=" md:text-3xl  font-semibold">
          End-To-End Development Services
        </h1>
        <p className=" text-base mx-14 mt-7">
          Sometimes, we need to check the time, wondering when our work or
          meeting will finish, without <br /> getting caught by others.
        </p>
        <Image
          src={"/img/service.png"}
          alt="image"
          width={400}
          height={400}
          loading="lazy"
          className="mx-auto mt-4"
        />
      </div>
    </div>
  );
}
