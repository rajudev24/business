import React from 'react'
import { BsArrowRight, BsFillRecordCircleFill } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineAppstore } from 'react-icons/ai'

export default function MissionVission() {
    return (
        <div className=' m-20 max-sm:m-4 py-20'>
            <div className='md:w-1/3'>
                <h1 className='text-[48px] max-sm:text-4xl font-bold'>Misson & Vission</h1>
                <p className='text-base my-4'>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry dummy text ever since.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4   ">
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <CgWebsite size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">Web Development</h3>
                    <p className="text-xs my-2">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the Industry's standard dummy text.
                    </p>
                    <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
                        size={24} className="ml-2" /> </button>
                </div>
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <AiOutlineAppstore size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">App Development</h3>
                    <p className="text-xs my-2">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text.
                    </p>
                    <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
                        size={24} className="ml-2" /> </button>
                </div>
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <BsFillRecordCircleFill size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">AR/VR Development</h3>
                    <p className="text-xs my-2">
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text.
                    </p>
                    <button className="text-blue-500 text-sm flex items-center">Learn More <BsArrowRight
                        size={24} className="ml-2" /> </button>
                </div>

            </div>
        </div>
    )
}
