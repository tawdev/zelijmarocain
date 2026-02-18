import Image from "next/image";
import Link from "next/link";

export default function Process() {
    const steps = [
        {
            num: "01",
            title: "L'Extraction & Le Malaxage",
            desc: "L'argile est extraite de gisements sélectionnés, trempée dans de grands bassins, puis malaxée à la main pour éliminer les impuretés. Cette préparation est cruciale pour la solidité finale du carreau.",
        },
        {
            num: "02",
            title: "Le Façonage & Séchage",
            desc: "Les artisans moulent des carreaux d'environ 10x10cm appelés 'Guebs'. Ces derniers sèchent ensuite sous le soleil brûlant de Marrakech, perdant leur humidité naturellement avant la première cuisson.",
        },
        {
            num: "03",
            title: "L'Émaillage & Cuisson",
            desc: "Les carreaux sont trempés dans des bains d'émail minéral. Ils sont ensuite disposés dans des fours traditionnels alimentés au bois de grignons d'olive. La chaleur, inégale selon la position dans le four, crée les nuances de couleurs tant recherchées.",
        },
        {
            num: "04",
            title: "Le Taillage au Menkach",
            desc: "C'est l'étape la plus technique. À l'aide d'un marteau tranchant, le tailleur découpe chaque carreau pour lui donner ses arêtes biseautées caractéristiques, permettant une pose avec des joints quasi-invisibles.",
        },
    ];

    return (
        <>
            <section className="bg-zinc-950 pt-32 pb-20 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/assets/images/zellige-bejmat.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container relative z-10">
                    <span className="text-accent uppercase tracking-widest text-sm mb-4 block">
                        Accueil / Notre Processus
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                        Né de la Terre et du Feu
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-secondary uppercase tracking-[5px] text-sm font-semibold block">
                            Le Voyage de l&apos;Argile
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-playfair">
                            De la Mine à Votre Architecture
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-10 items-start group">
                                <div className="text-6xl md:text-8xl font-black text-secondary/20 font-playfair leading-none group-hover:text-secondary/40 transition-colors">
                                    {step.num}
                                </div>
                                <div className="space-y-4 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center">
                <div className="container space-y-8">
                    <h2 className="text-4xl font-bold font-playfair">
                        Un Savoir-faire qui ne s&apos;improvise pas
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Faites le choix de l&apos;authenticité pour vos projets les plus ambitieux.
                    </p>
                    <div className="pt-6">
                        <Link href="/contact" className="btn btn-primary bg-accent text-primary">
                            Nous consulter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
