"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Collections", href: "/collections" },
        { name: "Projets", href: "/bespoke" },
        { name: "Artisanat", href: "/craftsmanship" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md h-[70px]"
                : "bg-white/90 backdrop-blur-md h-[90px]"
                }`}
        >
            <div className="container flex items-center justify-between h-full">
                <Link href="/" className="relative group flex items-center h-full">
                    <Image
                        src="/assets/images/logo-header.png"
                        alt="Zlij Moroccan Logo"
                        width={160}
                        height={54}
                        className="transition-all duration-500 group-hover:scale-105"
                        style={{ height: isScrolled ? '45px' : '54px', width: 'auto' }}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] uppercase tracking-[0.2em] font-medium text-text-dark/80 hover:text-secondary transition-colors relative group"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-text-dark hover:bg-black/5 p-2 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-wider font-semibold text-text-dark hover:text-secondary py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
