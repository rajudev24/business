import React, { useState } from 'react'
import { Steps } from 'antd';
import Image from 'next/image';

export default function Methodology() {
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const description = 'This is a description.';
    return (
        <div className='m-20 max-sm:m-4'>
            <h1 className='text-6xl max-sm:text-4xl font-bold text-center'>Methodology</h1>
            <p className='m-auto text-center my-4 md:w-2/4'>SeaWire Web is a wireframe kit that has more than 15 popular categories and
                more than 200 screens from each category.</p>

            <div className='my-12 '>
                <Steps
                    current={current}
                    onChange={onChange}
                    items={[
                        {
                            title: 'Step 1',
                            description,
                        },
                        {
                            title: 'Step 2',
                            description,
                        },
                        {
                            title: 'Step 3',
                            description,
                        },
                        {
                            title: 'Final Step',
                            description,
                        },
                    ]}
                />

            </div>

            <div className='flex justify-center items-center'>
                <Image
                    src={"/img/service.png"}
                    width={550}
                    height={400}
                    alt="img"
                    loading='lazy'
                />
            </div>
        </div>
    )
}
