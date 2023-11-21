import React from 'react'
import { BsArrowRight, BsFillRecordCircleFill } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineAppstore } from 'react-icons/ai'

export default function MissionVission() {
    return (
        <div className=' m-20 max-sm:m-4 py-20'>
            <div className='md:w-2/3'>
                <h1 className='text-[48px] max-sm:text-4xl font-bold'>Misson & Vission</h1>
                <p className='text-base my-4 w-2/3'>Empower and innovate for a sustainable future, striving to enrich lives and foster global harmony.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4   ">
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <CgWebsite size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">Empowering Your Digital Journey</h3>
                    <p className="text-xs my-2">Navigate the future with our IT expertise—where innovation meets reliability to accelerate your business's growth.
                    </p>
                </div>
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <AiOutlineAppstore size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">Innovating IT Solutions</h3>
                    <p className="text-xs my-2">Crafting cutting-edge IT services to streamline operations, safeguard data, and drive your business's efficiency.
                    </p>

                </div>
                <div className="rounded-lg hover:shadow-lg duration-500 bg-slate-100 px-3 py-8">
                    <BsFillRecordCircleFill size={28} style={{
                        color: '#33D3D4',
                        marginTop: '-15px'
                    }} />
                    <h3 className="text-2xl font-semibold my-2">Technology for Tomorrow</h3>
                    <p className="text-xs my-2">Shaping the future with transformative IT services that redefine the way businesses connect, operate, and thrive.
                    </p>

                </div>

            </div>
        </div>
    )
}
