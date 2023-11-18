import React from 'react'
import { Carousel } from 'antd';
import Image from 'next/image';
import WebDevelopment from './WebDevelopment';
import MobileDevelopment from './MobileDevelopment';
import CRMDevelopment from './CRMDevelopment';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Features() {
    return (
        <div className="w-full">
            <Carousel autoplay>
                <WebDevelopment />
                <MobileDevelopment />
                <CRMDevelopment />
            </Carousel>
        </div>
    )
}
