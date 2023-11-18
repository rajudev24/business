import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume, FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <div className='pt-16 mx-20'>
            <div className='md:flex justify-between '>
                <div>
                    <Image
                        src={"/img/logo.webp"}
                        alt="logo"
                        width={80}
                        height={60}
                        loading="lazy"
                        className='mb-2'
                    />
                    <h4 className='flex items-center text-[#666666]'> <IoLocation size={24} /> 8819 Ohio St. South Gate, CA 90280</h4>
                    <h4 className='flex items-center my-4 text-[#666666]'> <FaPhoneVolume size={24} /> +1 386-688-3295</h4>
                    <h4 className='flex items-center text-[#666666]'> <MdEmail size={24} /> Ourstudio@hello.com</h4>
                </div>
                <div className='flex flex-col max-sm:my-4'>
                    <h2 className='text-[16px] font-semibold mb-2'>Service</h2>
                    <Link className='text-[#666666]' href={'/'}> Illustration</Link>
                    <Link className='text-[#666666] my-2' href={'/'}> Mobile Design</Link>
                    <Link className='text-[#666666]' href={'/'}> Motion Graphic</Link>
                    <Link className='text-[#666666] my-2' href={'/'}> Web Design</Link>
                    <Link className='text-[#666666]' href={'/'}> Development</Link>
                    <Link className='text-[#666666] my-2' href={'/'}> SEO</Link>
                </div>
                <div className='flex flex-col '>
                    <h2 className='text-[16px] font-semibold mb-2'>Company</h2>
                    <Link className='text-[#666666]' href={'/'}> Features</Link>
                    <Link className='text-[#666666] my-1' href={'/'}> Our Team</Link>
                    <Link className='text-[#666666] ' href={'/'}>Portfolio</Link>
                    <Link className='text-[#666666] my-1' href={'/'}> Blog</Link>
                    <Link className='text-[#666666] ' href={'/'}> Development</Link>
                    <Link className='text-[#666666] my-1' href={'/'}> Contact Us</Link>
                </div>
                <div className='max-sm:my-4'>
                    <h2 className='text-[16px] font-semibold mb-2'>Our Social Media</h2>
                    <div className='flex items-center'>
                        <FaFacebook size={24} />
                        <FaTwitterSquare className='mx-2' size={24} />
                        <FaInstagramSquare size={24} />
                        <FaLinkedin size={24} className='mx-2' />
                        <FaYoutube size={24} />
                    </div>

                </div>
            </div>
            <h2 className='text-[#666666] my-8'>Copyright Tanah Air Studio</h2>
        </div>
    )
}
