"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navigation = ({ href = "/" }: { href?: string }) => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 duration-200 ${isIntersecting
                    ? " border-transparent"
                    : " border-border border-b"
                    }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto backdrop-blur">

                    {/* Desktop menu */}
                    <div className="hidden md:flex justify-between gap-8">
                        <Link href="/projects" className="duration-200 hover:text-zinc-100">
                            Projects
                        </Link>
                        <Link href="/contacts" className="duration-200 hover:text-zinc-100">
                            Contacts
                        </Link>
                        {/* <ThemeToggle /> */}
                    </div>


                    {/* Mobile burger button */}
                    <button onClick={() => setOpen(prev => !prev)} className="md:hidden">
                        <div className="relative w-5 h-5 flex items-center justify-center">
                            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-2'}`} />
                            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-2'}`} />
                        </div>
                    </button>

                    <Link
                        href={href}
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <MoveLeft />
                    </Link>
                </div>

                {/* Mobile dropdown */}
                <div className={`md:hidden flex flex-col transition-all duration-500 items-center  gap-4 backdrop-blur ${open
                    ? "opacity-100 translate-y-0 "
                    : "opacity-0 -translate-y-10 pointer-events-none "}`}>
                    <Link href="/projects" onClick={() => setOpen(prev => !prev)} className="text-xl  hover:text-zinc-100">
                        Projects
                    </Link>
                    <Link href="/contact" onClick={() => setOpen(prev => !prev)} className="text-xl hover:text-zinc-100">
                        Contact
                    </Link>
                </div>


            </div>
        </header>
    );
};