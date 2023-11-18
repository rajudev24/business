import Image from 'next/image'
import React from 'react'
import { Button, Input, Typography } from 'antd';
const { TextArea } = Input;


export default function ContactForm() {
    return (
        <div className='bg-slate-800 p-2 md:flex justify-between'>
            <Image
                src={"/img/contact.jpg"}
                alt="logo"
                width={700}
                height={600}
                loading="lazy"
            // className='rounded-xl'
            />
            <div className='bg-white w-full md:m-8 p-8 rounded-lg'>
                <h1 className='text-center text-2xl font-semibold mb-4'>Get In Touch</h1>
                <Typography.Title level={5}>Your Name</Typography.Title>
                <Input placeholder="Type your name" />
                <Typography.Title className='my-4' level={5}>Your Email</Typography.Title>
                <Input placeholder="Type your email" />
                <Typography.Title className='my-4' level={5}>Your Phone</Typography.Title>
                <Input placeholder="Type your phone" />
                <Typography.Title className='my-4' level={5}>Your Message</Typography.Title>
                <TextArea rows={4} placeholder="Type your message" />
                <Button size='large' style={{
                    backgroundColor: '#6e11f0',
                    color: 'white',
                    marginTop: '5px',
                }}>Submit</Button>
            </div>

        </div>
    )
}
