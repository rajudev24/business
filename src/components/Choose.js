import Image from "next/image";
import React from "react";

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
          <h4 className="text-xl">Attention to Details</h4>
          <h5 className="text-xl mt-2">A Plan for Success</h5>
          <p className="mt-1 text-sm">
            You want results. We have found that the best way to get them is
            with up front research – of your company, competitors, target market
            and customer psychographics. Only after we fully understand you and
            your customers, do we recommend a plan of attack.
          </p>
          <h5 className="text-xl mt-2">Experts Only</h5>
          <h5 className="text-xl mt-2">Meeting Deadlines</h5>
          <h5 className="text-xl mt-2">Award-Winning</h5>
        </div>
      </div>
    </div>
  );
}
