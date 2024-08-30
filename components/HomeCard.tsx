"use client"
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

interface HomeCardProps {
    title: string;
    description: string;
    image: string;
    handleClick: () => void;
    className?: string;
}

const HomeCard = ({title, description, image, handleClick, className} : HomeCardProps) => {
  return (
    <div className={cn("flex flex-col justify-between px-4 py-6 w-full xl:max-w-[260px] min-h-[360px] rounded-md",className)} onClick={handleClick}>
            <div className="flex-center glassmorphism size-12 rounded-md">
                <Image src={image} width={24} height={24} alt='meeting'/>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="text-lg text-white font-normal">{description}</p>
            </div>
    </div>
  )
}

export default HomeCard