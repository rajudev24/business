
import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function CRMDevelopment() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>CRM Development</h1>

            <div className='md:flex justify-between m-20 max-sm:m-8'>
                <div>
                    <h1 className='text-4xl font-bold'>One Feature that you'll love</h1>
                    <p className='my-4'>Creating a very beautiful website design in accordance
                        with the fundamental user experience which is
                        examined more deeply by the UX Designers.
                    </p>
                    <Button>Learn more</Button>
                </div>

                <Image
                    className='rounded-xl md:mx-8 max-sm:my-8'
                    src={"/img/web.jpg"}
                    alt="logo"
                    width={300}
                    height={300}
                    loading="lazy"
                />
                <div className='md:mt-56'>
                    <h1 className='text-4xl font-bold'>One Feature that you'll love</h1>
                    <p>Creating a very beautiful website design in accordance
                        with the fundamental user experience which is
                        examined more deeply by the UX Designers.
                    </p>
                    <Button>Learn more</Button>
                </div>
            </div>
        </div>
    )
}
