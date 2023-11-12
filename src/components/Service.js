import React from "react";

export default function Service() {
  return (
    <div>
      <p className=" flex justify-center mt-10">Trusted by 4,000+ companies</p>

      <div class="flex justify-around items-center my-4">
        <h3 class="text-3xl font-semibold">Spotify</h3>
        <h3 class="text-3xl font-semibold">Slack</h3>
        <h3 class="text-3xl font-semibold">Dropbox</h3>
        <h3 class="text-3xl font-semibold">Zoom</h3>
      </div>

      <div className="grid md:grid-cols-4 gap-4 max-sm:mx-10 mx-20  ">
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <h3 className="text-xl font-medium">Web Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm">Learn More</button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <h3 className="text-xl font-medium">App Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm">Learn More</button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <h3 className="text-xl font-medium">AR/VR Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm">Learn More</button>
        </div>
        <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
          <h3 className="text-xl font-medium">BlockChain Development</h3>
          <p className="text-xs my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi.
          </p>
          <button className="text-blue-500 text-sm">Learn More</button>
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
        <img
          src={"/img/service.png"}
          alt=""
          width={400}
          height={400}
          //   loading="lazy"
          className="mx-auto mt-4"
        />
      </div>
    </div>
  );
}
