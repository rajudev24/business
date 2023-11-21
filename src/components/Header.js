import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-slate-800 text-white p-4">
      <div className="flex justify-between max-sm:mx-8 mx-20 mt-4 ">
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={80}
          height={60}
          loading="lazy"
        />
        <div className="flex max-sm:flex-col">
          <span className="mr-12 max-sm:mr-4">
            <a href="#service">Product</a>
          </span>
          <span className="mr-12 max-sm:mr-4">
            <a href="#service">Blog</a>
          </span>
          <span className="mr-12 max-sm:mr-4">
            <a href="#service">About Us</a>
          </span>
          <span className="mr-12 max-sm:mr-4">
            <a href="#contact">Contact Us</a>
          </span>
          <span className="mr-12 max-sm:mr-4 border-2 p-2 rounded-md">
            <a href="#contact">Get Started</a>
          </span>
        </div>
      </div>
    </div>
  );
}
