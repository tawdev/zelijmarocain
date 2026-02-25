import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, PinIcon as Pinterest, ChevronRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const explorationLinks = [
        { name: "Accueil", href: "/" },
        { name: "Notre Histoire", href: "/about" },
        { name: "Artisanat", href: "/craftsmanship" },
        { name: "Contact", href: "/contact" },
    ];

    const collectionLinks = [
        { name: "Nos Collections", href: "/collections" },
        { name: "Projets Sur Mesure", href: "/bespoke" },
        { name: "Portfolio", href: "/portfolio" },
    ];

    return (
        <footer className="bg-text-dark text-white pt-10 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Mission */}
                    <div className="flex flex-col gap-6">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo-header.png"
                                alt="Zlij Moroccan Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-white/60 text-[14px] leading-relaxed max-w-sm">
                            Maîtres Artisans du Zellige à Marrakech. Nous perpétuons un savoir-faire
                            millénaire pour sublimer les architectures les plus prestigieuses.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/50 hover:text-white"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/50 hover:text-white"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/50 hover:text-white"
                                aria-label="Pinterest"
                            >
                                <Pinterest size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Exploration */}
                    <div>
                        <h4 className="font-playfair text-base opacity-40 uppercase tracking-[0.2em] mb-8">
                            Exploration
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {explorationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[13px] uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Collections */}
                    <div>
                        <h4 className="font-playfair text-base opacity-40 uppercase tracking-[0.2em] mb-8">
                            Collections
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {collectionLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[13px] uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-playfair text-base opacity-40 uppercase tracking-[0.2em] mb-8">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-[14px]">
                            <li className="hover:text-white transition-colors cursor-pointer">contact@zlijmoroccan.com</li>
                            <li className="hover:text-white transition-colors cursor-pointer">+212 661 690 413</li>
                            <li>Marrakech, Maroc</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[12px] tracking-wide">
                    <p>&copy; {currentYear} Zlij Moroccan. Artisans d'Excellence.</p>
                    <div className="flex gap-8">
                        <Link href="/mentions-legales" className="hover:text-white transition-colors uppercase">Mentions Légales</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors uppercase">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
