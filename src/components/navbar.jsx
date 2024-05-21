"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
const links =[
    {url: '/', title: 'Home'},
    {url: '/about', title: 'About'},
    {url: '/portfolio', title: 'Portfolio'},
    {url: '/projects', title: 'Projects Showcase'},
    {url: '/askme', title: 'Ask Me'},
    {url: '/contact', title: 'Contact'},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Nav bar left*/}
            <div className="hidden md:flex gap-4">
                {links.map(link=>(
                    <Link href={link.url} key={link.url}>{link.title}</Link>
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden">
                <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className='text-white mr-1'>Lama</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>                
                </Link>
            </div>

            {/* Social media links */}
            <div className="">
                <Link href="#">
                    <Image src='public/github.svg' alt='github icon' width={24} height={24}/>
                </Link> 
                {/* <Link href="/">
                    <Image src='../../public/github.png' alt='linkedin icon' width={24} height={24}/>
                </Link> 
                <Link href="/">
                    <Image src='../../public/github.png' alt='IG icon' width={24} height={24}/>
                </Link>  */}

            </div>

            {/* RESPONSIVE HAMBURGER MENU */}
            <div className='md:hidden'>

                {/* MENU BUTTONS */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
                    onClick={(()=>setOpen(prev=>!open))}>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                </button>

                {/* MENU LIST */}
                {open && (
                    <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-4 text-2xl'>
                        {links.map(link=>(
                            <Link href={link.url} key={link.url}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;