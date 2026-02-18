import Image from "next/image";
import Link from "next/link";
import { History, Leaf, Globe } from "lucide-react";

export default function About() {
    return (
        <>
            <section className="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-8">
                        Notre Histoire
                    </span>
                    <h1 className="text-white italic font-light">
                        L&apos;Émotion de la Matière, l&apos;Âme de Marrakech
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 space-y-12">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                                Philosophie
                            </span>
                            <h2 className="text-primary leading-[1.1]">
                                Une Matière qui Respire.
                            </h2>
                            <div className="space-y-6 text-xl text-text-muted font-light leading-relaxed">
                                <p>
                                    Notre siège à Marrakech est bien plus qu&apos;un atelier : c&apos;est un observatoire de tendances où la mode et l&apos;art fusionnent avec l&apos;argile. Nous explorons les possibilités infinies des matériaux pour offrir des solutions uniques.
                                </p>
                                <p>
                                    Chez Zlij Moroccan, nous accompagnons les propriétaires de villas d&apos;exception et les créateurs de lieux de vie uniques. Notre zellige n&apos;est pas qu&apos;un revêtement, c&apos;est une signature architecturale.
                                </p>
                            </div>

                            <div className="space-y-12 pt-12 border-t border-gray-100">
                                {[
                                    {
                                        title: "Savoir-faire Ancestral",
                                        desc: "Nos Maâlems sont les gardiens d&apos;une technique transmise de père en fils, garantissant une authenticité sans compromis.",
                                    },
                                    {
                                        title: "Matières Nobles",
                                        desc: "Utilisation exclusive de l&apos;argile de haute qualité, réputée pour sa résistance et sa finesse incomparable.",
                                    },
                                    {
                                        title: "Auto-Expression & Design",
                                        desc: "Nous fournissons les outils pour que chaque architecte transforme sa vision en une réalité matérielle singulière.",
                                    },
                                ].map((feat, i) => (
                                    <div key={i} className="space-y-4">
                                        <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-primary">
                                            {feat.title}
                                        </h4>
                                        <p className="text-text-muted font-light text-lg">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7">
                            <div className="relative aspect-[4/5] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/assets/images/zellige-hero.png"
                                    alt="Atelier de Zellige"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="values" className="section-padding bg-primary text-white overflow-hidden relative">
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-6">
                            Nos Piliers
                        </span>
                        <h2 className="text-white italic font-light">L&apos;Excellence comme Standard.</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { val: "100%", label: "Fait Main à Marrakech" },
                            { val: "50+", label: "Nuances Émaillées" },
                            { val: "25", label: "Pays Exportés" },
                            { val: "1000+", label: "Projets Réalisés" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-4">
                                <h2 className="text-secondary italic font-light">
                                    {stat.val}
                                </h2>
                                <p className="text-white/40 uppercase tracking-widest text-[10px]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container text-center space-y-12">
                    <h2 className="text-primary italic font-light">Prêt à sublimer votre espace ?</h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        Découvrez comment notre expertise peut transformer votre vision architecturale en une réalité matérielle.
                    </p>
                    <div className="flex flex-wrap gap-8 justify-center pt-8">
                        <Link href="/collections" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2">
                            Voir nos collections
                        </Link>
                        <Link href="/contact" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
