import Image from "next/image";
import Link from "next/link";

export default function Collections() {
    const collections = [
        {
            title: "Zellige Traditionnel",
            desc: "L'art de l'argile grise de Marrakech. Un matériau vivant avec des variations de nuances (V4) uniques et une noblesse historique pour vos murs d'accent.",
            img: "/assets/images/tradition.jpg",
            specs: [
                { label: "Dimensions", value: "10 x 10 x 1.2 cm" },
                { label: "Variation", value: "V4 (Très Élevée)" },
                { label: "Usage", value: "Mur intérieur / Cuisine / Bain" },
            ]
        },
        {
            title: "Zellige de Fès",
            desc: "L'argile sacrée des ateliers fassis. Reconnue pour sa densité exceptionnelle et sa patine qui s'embellit avec les décennies.",
            img: "/assets/images/zelligefes.jpg",
            specs: [
                { label: "Dimensions", value: "Variées" },
                { label: "Variation", value: "V4 (Artisanale)" },
                { label: "Usage", value: "Hammams / Heritage Restoration" },
            ]
        },
        {
            title: "Zellige Géométrique",
            desc: "La précision mathématique du Maâlem. Étoiles et rosaces taillées à la main (Menkach) for des fresques monumentales.",
            img: "/assets/images/Zellige Géométrique.jpg",
            specs: [
                { label: "Complexité", value: "Haute Précision" },
                { label: "Format", value: "Sur Mesure (Mosaïque)" },
                { label: "Usage", value: "Murs Décoratifs / Fontaines" },
            ]
        },
        {
            title: "Zellige Floral / Végétal",
            desc: "Compositions organiques inspirées des jardins de Marrakech. Une biophilie artisanale for des espaces apaisants.",
            img: "/assets/images/floral.jpg",
            specs: [
                { label: "Motifs", value: "Naturels / Organiques" },
                { label: "Style", value: "Andalou / Botanique" },
                { label: "Usage", value: "Douches / Patios" },
            ]
        },
        {
            title: "Zellige Uni / Monochrome",
            desc: "La simplicité est le luxe suprême. Une vibration textural unique qui apporte de l'âme aux projets minimalistes.",
            img: "/assets/images/monochrome.jpg",
            specs: [
                { label: "Finition", value: "Émaillée Brillante" },
                { label: "Teinte", value: "Saturée / Profonde" },
                { label: "Usage", value: "Architecture Contemporaine" },
            ]
        },
        {
            title: "Zellige Artisanal (Maâlem)",
            desc: "Éditions limitées avec des techniques de cuisson lentes pour obtenir des accidents de couleurs magnifiques et exclusifs.",
            img: "/assets/images/zellige-craft.png",
            specs: [
                { label: "Authenticité", value: "100% Manuel" },
                { label: "Exclusivité", value: "Série Limitée" },
                { label: "Usage", value: "Projets d'Exception" },
            ]
        },
        {
            title: "Bejmat Traditionnel (Vert Tilleul)",
            desc: "Le Vert Tilleul en chevron : un retour à la terre avec une sophistication moderne. Traditionnellement utilisé au sol pour sa résistance et sa fraîcheur naturelle, ici réhaussé par une pose architecturale.",
            img: "/assets/images/bejmat.jpg",
            specs: [
                { label: "Dimensions", value: "5 x 15 x 2 cm" },
                { label: "Variation", value: "V3 (Organique)" },
                { label: "Format", value: "Herringbone / Chevron" },
            ]
        },
        {
            title: "Zellige Contemporain Nacre",
            desc: "La vibration du nacre pour une cuisine d'une pureté absolue. Des formats verticaux qui allongent l'espace et captent la lumière avec une élégance inédite.",
            img: "/assets/images/nacre.jpg",
            specs: [
                { label: "Finition", value: "Nacre Brillante" },
                { label: "Pose", value: "Verticale / Alignée" },
                { label: "Usage", value: "Design Avant-gardiste" },
            ]
        },
    ];

    return (
        <>
            <section className="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-8">
                        Collections
                    </span>
                    <h1 className="text-white italic font-light">
                        Une Palette d&apos;Éternité
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="max-w-4xl mb-24">
                        <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
                            Notre Gamme
                        </span>
                        <h2 className="text-primary mb-8">L&apos;Art de Varier les Formes et les Tons.</h2>
                        <p className="text-xl text-text-muted font-light max-w-2xl">
                            Chaque collection est pensée pour répondre aux exigences des designers et architectes du monde entier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {collections.map((col, i) => (
                            <div key={i} className="group flex flex-col space-y-8">
                                <div className="relative aspect-square overflow-hidden grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000">
                                    <Image
                                        src={col.img}
                                        alt={col.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-light tracking-wide text-primary italic">
                                            {col.title}
                                        </h3>
                                        <p className="text-text-muted leading-relaxed font-light text-lg">
                                            {col.desc}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 space-y-4">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Spécifications</span>
                                        <div className="space-y-2">
                                            {col.specs.map((spec, j) => (
                                                <div key={j} className="flex justify-between text-[11px] uppercase tracking-wider">
                                                    <span className="text-text-muted">{spec.label}</span>
                                                    <span className="text-text-dark">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary text-white overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-12">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                                Le Nuancier
                            </span>
                            <h2 className="text-white italic font-light leading-tight">
                                Plus de 50 Nuances Émaillées.
                            </h2>
                            <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed">
                                <p>
                                    De l&apos;émeraude profond au bleu de cobalt, en passant par des blancs
                                    nacrés et des ocres solaires, nous proposons une gamme de
                                    couleurs obtenues à partir de pigments naturels.
                                </p>
                                <p>
                                    Chaque bain de cuisson produit des variations de tons qui sont la
                                    signature même du véritable zellige fait main.
                                </p>
                            </div>
                            <div className="pt-8">
                                <Link href="/contact" className="btn bg-white text-primary hover:bg-secondary hover:text-white transition-all lowercase tracking-[0.2em] font-medium">
                                    Demander un échantillon
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-7">
                            <div className="relative aspect-video grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/assets/images/zellige-colors.png"
                                    alt="Palette de couleurs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
