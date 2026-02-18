import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, PinIcon as Pinterest, ChevronRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Notre Histoire", href: "/about" },
        { name: "Nos Collections", href: "/collections" },
        { name: "Artisanat", href: "/craftsmanship" },
        { name: "Projets Sur Mesure", href: "/bespoke" },
        { name: "Réalisations", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-text-dark text-white pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo-header.png"
                                alt="Zlij Moroccan Logo"
                                width={200}
                                height={70}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-white/70 leading-relaxed max-w-sm">
                            Maîtres Artisans du Zellige à Marrakech. Nous perpétuons un savoir-faire
                            millénaire pour sublimer les architectures les plus prestigieuses à
                            travers le monde.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                aria-label="Pinterest"
                            >
                                <Pinterest size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-playfair text-lg opacity-50 uppercase tracking-widest mb-8">
                            Navigation
                        </h4>
                        <ul className="grid grid-cols-2 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[13px] uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-playfair text-lg opacity-50 uppercase tracking-widest mb-8">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4 text-white/70">
                            <li>contact@zlijmoroccan.com</li>
                            <li>+212 661 690 413</li>
                            <li>Marrakech, Maroc</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
                    <p>&copy; {currentYear} Zlij Moroccan. Design d'Excellence.</p>
                    <div className="flex gap-8">
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
