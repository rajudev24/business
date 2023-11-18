import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
export default function Testimonial() {
    return (
        <div className='bg-slate-800 py-20'>
            <h1 className='text-5xl font-bold text-center text-white'>
                What Are People Saying <br /> About Us
            </h1>
            <div className='md:flex justify-between m-20 max-sm:m-4'>
                <div className='bg-white p-8 md:flex justify-between rounded-lg md:w-3/4'>
                    <Image
                        src={"/img/banner-1.png"}
                        alt="logo"
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                    <div className='ml-4'>
                        <div className='flex text-[#1e52eb]'>
                            <FaStar size={20} />
                            <FaStar size={20} className='mx-2' />
                            <FaStar size={20} />
                            <FaStar size={20} className='mx-2' />
                            <FaStar size={20} />
                        </div>
                        <h1 className='text-3xl font-bold pt-4'>Great Design!</h1>
                        <p className='my-4'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
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
                    </div>
                </div>
                <div className='md:w-2/5 bg-white p-8 rounded-lg md:ml-4 text-center max-sm:my-4'>
                    <h1 className='text-3xl font-bold'>Great Design!</h1>
                    <p className='my-4'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
                    <div className='flex text-[#1e52eb] justify-center items-center'>
                        <FaStar size={20} />
                        <FaStar size={20} className='mx-2' />
                        <FaStar size={20} />
                        <FaStar size={20} className='mx-2' />
                        <FaStar size={20} />
                    </div>
                    <div className="flex items-center justify-center py-4">
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
                </div>
                <div className='md:w-2/5 bg-white p-8 rounded-lg md:ml-4 text-center'>
                    <h1 className='text-3xl font-bold'>Great Design!</h1>
                    <p className='my-4'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
                    <div className='flex text-[#1e52eb] justify-center items-center'>
                        <FaStar size={20} />
                        <FaStar size={20} className='mx-2' />
                        <FaStar size={20} />
                        <FaStar size={20} className='mx-2' />
                        <FaStar size={20} />
                    </div>
                    <div className="flex items-center justify-center py-4">
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
                </div>
            </div>
        </div>
    )
}
