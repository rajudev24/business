
export default function Service() {
  return (
    <div className="bg-slate-800 text-white pb-20">
      <div className="max-sm:p-4 p-20 md:flex justify-between items-center">
        <h1 className="text-[48px] font-bold">Our Services</h1>
        <p className="md:w-1/3">Revolutionize your business with cutting-edge IT solutions: Web, App, Cloud, & Data Analytics.</p>
      </div>


      <div className="md:flex justify-between max-sm:mx-4 mx-20">
        <div className="grid md:grid-cols-3 gap-3 text-center ">
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Web Development</span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Application Development</span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Cloud Migration </span>
          <span className="bg-white text-black text-3xl font-bold p-8 rounded-lg flex items-center">Data Analytics </span>
          <span className="bg-white text-black text-3xl font-bold p-8  rounded-lg flex items-center">E-commerce Solutions </span>
          <span className="bg-white text-black text-3xl font-bold p-8  rounded-lg flex items-center">IT Consulting </span>
        </div>
        <div className="bg-[#1e4eeb] text-3xl font-extrabold p-8 rounded-lg md:ml-4 text-center md:w-80 flex items-center max-sm:my-4 ">
          <h2> CRM Development </h2>
        </div>
      </div>
    </div >
  );
}
