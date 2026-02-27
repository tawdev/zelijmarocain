import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next"; // Zid hada

// 1. Metadata specifique l-Sur Mesure
export const metadata: Metadata = {
  title: "Zellige Sur Mesure pour Architectes | Villas & Projets de Luxe",
  description: "Solutions de zellige personnalisées pour villas, appartements et cafés modernes. Export international et accompagnement technique pour vos projets d'architecture les plus audacieux.",
  keywords: ["Zellige sur mesure", "Architecture marocaine moderne", "Décoration café moderne", "Export zellige USA Europe", "Bejmat traditionnel"],
};
export default function Bespoke() {
    const sectors = [
        {
            title: "Villas & Duplex de Luxe",
            desc: "Donnez vie à vos espaces avec une matière qui respire. Des patios qui capturent la lumière aux intérieurs qui célèbrent le luxe organique.",
        },
        {
            title: "Appartements & Lofts",
            desc: "La singularité au cœur de la ville. Une touche de terre et d&apos;émail pour briser la monotonie urbaine avec élégance et caractère.",
        },
        {
            title: "Cafés & Restaurants Modernes",
            desc: "Conception d'identités visuelles uniques pour le secteur de l'hospitalité, créant des ambiances chaleureuses et instagrammables.",
        },
    ];

    return (
        <>
            <section className="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-8">
                        Sur Mesure
                    </span>
                    <h1 className="text-white italic font-light">
                        L&apos;Architecture de la Singularité
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 space-y-10">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                                Partenariat Architectural
                            </span>
                            <h2 className="text-primary leading-[1.1]">
                                Du Projet au Chef-d&apos;œuvre Émotionnel.
                            </h2>
                            <div className="space-y-6 text-xl text-text-muted font-light leading-relaxed">
                                <p>
                                    Nous créons des solutions pour que les architectes et interioristes puissent concevoir des projets uniques et exclusifs. Le zellige devient un outil d&apos;expression, une matière première malléable qui s&apos;adapte aux visions les plus audacieuses.
                                </p>
                                <p>
                                    De la détection des tendances à la réalisation technique, nous transformons la pierre, l&apos;argile et l&apos;émail en expériences visuelles et tactiles, où la lumière et la texture se fondent en équilibre parfait.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-7 fadeIn stagger-2">
                            <div className="relative aspect-[16/10] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/assets/images/15 Elegant Hacienda Staircase Interior Designs to Elevate Your Home’s Charm.jpg"
                                    alt="Escalier Hacienda en Bejmat"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-bg-light">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 fadeIn">
                            <div className="relative aspect-square overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/assets/images/cafe modern.jpg"
                                    alt="Concept Café Moderne"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 space-y-12 fadeIn stagger-1">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                                Hospitalité
                            </span>
                            <h2 className="text-primary leading-tight font-light italic">Identités Visuelles Uniques.</h2>
                            <p className="text-xl text-text-muted font-light leading-relaxed">
                                Nous accompagnons les restaurateurs et hôteliers dans la création d&apos;espaces singuliers. Du sol graphique aux murs texturés, nous transformons chaque lieu en une destination design.
                            </p>
                            <div className="grid grid-cols-1 gap-6 pt-4 border-t border-gray-100">
                                {[
                                    "Ambiances Instagrammables",
                                    "Résistance aux passages intensifs",
                                    "Facilité d&apos;entretien",
                                ].map((adv, i) => (
                                    <div key={i} className="flex items-center gap-4 text-xs uppercase tracking-widest text-primary font-bold">
                                        <Check size={14} className="text-secondary" />
                                        {adv}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="max-w-4xl mb-24">
                        <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
                            Savoir-faire
                        </span>
                        <h2 className="text-primary mb-8">Sublimer Chaque Espace.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {sectors.map((sector, i) => (
                            <div key={i} className="space-y-8 group">
                                <div className="h-[2px] w-12 bg-secondary transition-all group-hover:w-24" />
                                <h3 className="text-2xl font-light tracking-wide text-primary italic">
                                    {sector.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed font-light text-lg">
                                    {sector.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
                <div className="container relative z-10 space-y-12">
                    <h2 className="text-white italic font-light">
                        Export International & Suivi.
                    </h2>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        Grâce à notre réseau logistique, nous livrons nos créations dans le
                        monde entier (Europe, USA, Moyen-Orient) avec un conditionnement
                        sécurisé garantissant l&apos;intégrité de chaque fragment.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="btn bg-white text-primary hover:bg-secondary hover:text-white transition-all lowercase tracking-[0.2em] font-medium">
                            Démarrer une consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
