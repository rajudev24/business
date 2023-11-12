import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between max-sm:mx-8 mx-20 mt-4">
      <Image
        src={"/img/logo.webp"}
        alt="logo"
        width={80}
        height={60}
        loading="lazy"
      />
      <div>
        <span className="mr-12 max-sm:mr-4">
          <a href="#service">Service</a>
        </span>
        <span className="mr-12 max-sm:mr-4">
          <a href="#contact">Contact Us</a>
        </span>
      </div>
    </div>
  );
}
