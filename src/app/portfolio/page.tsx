import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    const projects = [
        {
            title: "Hotel Mamounia",
            location: "Marrakech, Maroc",
            sector: "Hôtellerie",
            focus: "Authenticité Clé-en-main",
            img: "/assets/images/zellige-tradition.jpg",
        },
        {
            title: "Cuisine Contemporaine",
            location: "Marrakech, Maroc",
            sector: "Rénovation de Luxe",
            focus: "Luminosité & Texture",
            img: "/assets/images/cuisine.jpeg",
        },
        {
            title: "Spa de Luxe",
            location: "Casablanca, Maroc",
            sector: "Hôtellerie",
            focus: "Résistance & Bien-être",
            img: "/assets/images/spa de luxe.jpg",
        },
        {
            title: "Salle de Bain Royale",
            location: "Rabat, Maroc",
            sector: "Résidentiel",
            focus: "Contraste & Éclat",
            img: "/assets/images/zellige-colors.png",
        },
        {
            title: "Hammam Privé",
            location: "Tanger, Maroc",
            sector: "Wellness Privé",
            focus: "Argile Naturelle Bejmat",
            img: "/assets/images/hamam.jpg",
        },
        {
            title: "Lobby d'Hôtel",
            location: "Marrakech, Maroc",
            sector: "Hospitality",
            focus: "Format Grandeur Nature",
            img: "/assets/images/salon-hall.jpg",
        },
    ];

    return (
        <>
            <section className="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-8">
                        Portfolio
                    </span>
                    <h1 className="text-white italic font-light">
                        Galerie d&apos;Exception
                    </h1>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="max-w-4xl mb-24">
                        <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
                            Nos Réalisations
                        </span>
                        <h2 className="text-primary mb-8">L&apos;Émotion par la Matière.</h2>
                        <p className="text-xl text-text-muted font-light max-w-2xl">
                            Chaque projet est une collaboration unique entre l&apos;artisanat de Marrakech et l&apos;imaginaire de nos clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, i) => (
                            <div key={i} className="group space-y-8">
                                <div className="relative aspect-video overflow-hidden grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-2">
                                            <span className="text-secondary text-[10px] uppercase tracking-[3px] font-bold">
                                                {project.sector}
                                            </span>
                                            <h3 className="text-3xl font-light text-primary italic">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <span className="text-text-muted uppercase tracking-widest text-[10px]">
                                            {project.location}
                                        </span>
                                    </div>
                                    <p className="text-text-muted font-light text-lg italic">
                                        &quot;{project.focus}&quot;
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary text-white text-center">
                <div className="container space-y-12">
                    <h2 className="text-white italic font-light">Votre projet mérite l&apos;excellence.</h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Confiez-nous la réalisation de vos surfaces en zellige pour un résultat intemporel et singulier.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="btn bg-white text-primary hover:bg-secondary hover:text-white transition-all lowercase tracking-[0.2em] font-medium">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
