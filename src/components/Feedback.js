
import Image from "next/image";
import React from "react";
import { BsArrowRight } from 'react-icons/bs'
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Feedback() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="md:flex justify-between  items-center max-sm:mx-4 md:mx-20 mt-5 mb-10 py-32">

        <div className="md:w-2/4">
          <Carousel autoplay>
            <div style={contentStyle} className="w-2/3 bg-slate-100 rounded-md shadow-xl p-12 text-black">
              <div className="flex items-center">
                <Image
                  src="/img/jhony.png"
                  alt="client image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <h2 className="">Jhony D</h2>
                  <p className="text-xs">@jhony_D</p>
                </div>
              </div>
              <p className="text-sm p-2">
                {" "}
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                voluptate aute id deserunt nisi.
              </p>
              <strong className="ml-2">Clay Jhonson</strong>
              <h5 className="text-sm ml-2"> Busniess Director</h5>
            </div>
            <div style={contentStyle} className="w-2/3 bg-slate-100 rounded-md shadow-xl p-12 text-black">
              <div className="flex items-center">
                <Image
                  src="/img/jhony.png"
                  alt="client image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <h2 className="">Jhony D</h2>
                  <p className="text-xs">@jhony_D</p>
                </div>
              </div>
              <p className="text-sm p-2">
                {" "}
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                voluptate aute id deserunt nisi.
              </p>
              <strong className="ml-2">Clay Jhonson</strong>
              <h5 className="text-sm ml-2"> Busniess Director</h5>
            </div>
            <div style={contentStyle} className="w-2/3 bg-slate-100 rounded-md shadow-xl p-12 text-black">
              <div className="flex items-center">
                <Image
                  src="/img/jhony.png"
                  alt="client image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <h2 className="">Jhony D</h2>
                  <p className="text-xs">@jhony_D</p>
                </div>
              </div>
              <p className="text-sm p-2">
                {" "}
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                voluptate aute id deserunt nisi.
              </p>
              <strong className="ml-2">Clay Jhonson</strong>
              <h5 className="text-sm ml-2"> Busniess Director</h5>
            </div>

          </Carousel>
        </div>


        <div className="md:ml-8 max-sm:my-4">
          <h1 className="text-5xl max-sm:text-4xl font-bold">Let's Get Started!</h1>
          <p className="my-4">Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result.</p>
          <button className="border-2 text-white p-3 rounded-lg my-2 flex items-center">
            Get In Touch <BsArrowRight size={28} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
