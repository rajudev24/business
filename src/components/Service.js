
export default function Service() {
  return (
    <div className="bg-slate-800 text-white pb-20">
      <div className="max-sm:p-4 p-20 md:flex justify-between items-center">
        <h1 className="text-[48px] font-bold">Our Services</h1>
        <p className="md:w-1/3">Lorem Ipsum is simply dummy text of the printing and typesetting
          Our Services industry. Lorem Ipsum has been the</p>
      </div>


      <div className="md:flex justify-between max-sm:mx-4 mx-20">
        <div className="grid md:grid-cols-3 gap-4 text-center ">
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Android Mobile Application </span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">iOS Mobile Application </span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">UI/UX Design </span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">React Native Development </span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Next.js Development </span>
          <span className="bg-white text-black text-3xl font-bold p-8  rounded-lg flex items-center">Custom website Development </span>
        </div>
        <div className="bg-[#1e4eeb] text-3xl font-extrabold p-8 rounded-lg md:ml-4 text-center md:w-80 flex items-center max-sm:my-4 ">
          <h2> Customer Relationship Management Software </h2>
        </div>
      </div>
    </div >
  );
}
