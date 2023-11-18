import Image from 'next/image'

export default function Clients() {
    return (
        <div className='bg-slate-800 p-10 max-sm:p-4'>
            <h1 className='text-center text-white text-[18px]'> Media Coverage</h1>
            <div className='grid grid-cols-5 max-sm:grid-cols-3 max-sm:gap-2 md:m-10 justify-items-center'>
                <Image
                    src={"/img/logo.webp"}
                    alt="logo"
                    width={80}
                    height={60}
                    loading="lazy"
                />
                <Image
                    src={"/img/logo.webp"}
                    alt="logo"
                    width={80}
                    height={60}
                    loading="lazy"
                />
                <Image
                    src={"/img/logo.webp"}
                    alt="logo"
                    width={80}
                    height={60}
                    loading="lazy"
                />
                <Image
                    src={"/img/logo.webp"}
                    alt="logo"
                    width={80}
                    height={60}
                    loading="lazy"
                />
                <Image
                    src={"/img/logo.webp"}
                    alt="logo"
                    width={80}
                    height={60}
                    loading="lazy"
                />
            </div>
        </div>
    )
}
