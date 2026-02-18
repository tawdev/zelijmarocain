import Image from "next/image";
import Link from "next/link";
import { Hammer, Scissors, LayoutGrid } from "lucide-react";

export default function Craftsmanship() {
    const steps = [
        {
            icon: <Hammer className="w-8 h-8 text-secondary" />,
            title: "Le Pointage (Le Traçage)",
            desc: "Le Maâlem trace les motifs géométriques sur les carreaux émaillés avec une précision mathématique, utilisant des compas et des règles traditionnelles.",
        },
        {
            icon: <Scissors className="w-8 h-8 text-secondary" />,
            title: "Le Nquach (Le Taillage)",
            desc: "À l'aide du 'Menkach', un marteau à deux tranchants, l'artisan taille chaque pièce à la main pour lui donner sa forme finale (ferma).",
        },
        {
            icon: <LayoutGrid className="w-8 h-8 text-secondary" />,
            title: "Le Khalla (L'Assemblage)",
            desc: "Les pièces sont posées à l'envers sur un sol lisse selon le motif dessiné, créant ainsi des mosaïques d'une complexité époustouflante.",
        },
    ];

    return (
        <>
            <section className="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-8">
                        Savoir-faire
                    </span>
                    <h1 className="text-white italic font-light">
                        L&apos;Art de la Géométrie Sacrée
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-6 relative aspect-[4/3] grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="/assets/images/zellige-craft.png"
                                alt="Histoire du Zellij"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:col-span-5 lg:col-start-8 space-y-12">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                                Héritage Millénaire
                            </span>
                            <h2 className="text-primary leading-[1.1]">
                                Une Chronologie de Terre et d&apos;Email.
                            </h2>
                            <div className="space-y-6 text-xl text-text-muted font-light leading-relaxed">
                                <p>
                                    Apparu au Maroc au Xème siècle, le zellige a connu son apogée
                                    historique à Fès, mais c'est à Marrakech que notre atelier
                                    perpétue aujourd'hui cette excellence. Plus qu&apos;une simple
                                    technique de revêtement, il s&apos;agit d&apos;une expression spirituelle
                                    transcrite en motifs géométriques complexes.
                                </p>
                                <p>
                                    Notre zellige se distingue par la qualité exceptionnelle de son
                                    argile, offrant une malléabilité parfaite pour les coupes les plus fines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-bg-light">
                <div className="container">
                    <div className="max-w-4xl mb-24">
                        <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
                            La Fabrication
                        </span>
                        <h2 className="text-primary mb-8">Les Secrets des Maîtres Artisans.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {steps.map((step, i) => (
                            <div key={i} className="space-y-8 group">
                                <div className="h-[2px] w-12 bg-secondary transition-all group-hover:w-24" />
                                <h3 className="text-2xl font-light tracking-wide text-primary italic">
                                    {step.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed font-light text-lg">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container text-center space-y-12">
                    <h2 className="text-primary italic font-light">Préserver l&apos;Authenticité.</h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        Chaque projet que nous réalisons contribue à la survie de cet artisanat d&apos;exception.
                    </p>
                    <div className="pt-8 text-center">
                        <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2">
                            Découvrir nos réalisations
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
