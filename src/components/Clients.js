import React, { useState } from 'react';
import Image from 'next/image';
import { ClientList } from '@/utils';

export default function Clients() {
    const [showAll, setShowAll] = useState(false);
    const clientListToShow = showAll ? ClientList : ClientList.slice(0, 7);

    return (
        <div className='bg-slate-800 p-10 max-sm:p-4'>
            <h1 className='text-center text-white text-[18px]'> Media Coverage</h1>
            <div className='grid grid-cols-7 max-sm:grid-cols-3 max-sm:gap-2 md:m-10 justify-items-center gap-4'>
                {clientListToShow.map((client, index) => (
                    <Image
                        key={index}
                        src={client.url}
                        alt={`logo-${index}`}
                        width={80}
                        height={60}
                        loading='lazy'
                    />
                ))}
            </div>
            <div className='flex justify-center items-center'>
                {!showAll && (
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded mt-4 '
                        onClick={() => setShowAll(true)}
                    >
                        View More
                    </button>
                )}
            </div>
        </div>
    );
}


