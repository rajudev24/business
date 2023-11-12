import React from "react";

export default function Feedback() {
  return (
    <div>
      <div className="text-center py-10 ">
        <h1 className="text-4xl">Feedback from our clients </h1>
        <p className="mt-6">
          Our WORK speaks louder than our WORD. Find out how we helped clients
          overcome <br />
          challenges and succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-sm:mx-10 md:mx-60 mt-5 mb-10">
        <div className=" bg-slate-100 rounded-md shadow-xl p-5 ">
          <div className="flex justify-start">
            <img
              src="/img/jhony.png"
              alt="jfkdjf"
              width={50}
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
        </div>
        <div className=" bg-slate-100 rounded-md shadow-xl p-5 ">
          <div className="flex justify-start">
            <img
              src="/img/jhony.png"
              alt="jfkdjf"
              width={50}
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
        </div>
      </div>
    </div>
  );
}
