"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src={"/icons/hamburger.svg"}
                        alt='hamburger icon'
                        width={36}
                        height={36}
                        className='cursor-pointer sm:hidden'
                    />
                </SheetTrigger>
                <SheetContent side={"left"} className='bg-dark-1 border-none w-[300px]' aria-describedby='sheet content'>
                    <SheetTitle>
                        <Link href={"/"} className='flex items-center gap-2'>
                            <Image
                            src={"/icons/logo.svg"}
                            width={32}
                            height={32}
                            alt='Yoom Logo'
                            className='max-sm:size-10'
                            />
                            <p className='text-[26px] font-extrabold text-white'>Yoom</p>
                        </Link>
                    </SheetTitle>
                    <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className='flex flex-col h-full gap-6 pt-16 text-white'>
                            {sidebarLinks.map((link) => {
                                const isActive = pathname == link.route;
                                return (
                                    <SheetClose asChild key={link.label}>
                                        <Link 
                                            href={link.route} 
                                            key={link.label}
                                            className={
                                                cn("flex gap-4 max-w-60 items-center p-4 rounded-lg",
                                                { "bg-blue-1": isActive}
                                            )}
                                        >
                                            <Image
                                                src={link.imgUrl}
                                                alt={link.label}
                                                width={28}
                                                height={28}
                                            />
                                            <p className='font-semibold '>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                    
                                )
                            })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav