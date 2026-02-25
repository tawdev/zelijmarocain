import Link from "next/link";
import Image from "next/image";
import { Check, Quote } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/images/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </div>

        <div className="container relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-left duration-1000">
              Créateur de Matière pour Architectures Singulières
            </h1>
            <p className="text-lg md:text-xl text-white/90 animate-in fade-in slide-in-from-right duration-1000 delay-200">
              Pièces sensorielles et authentiques qui impulsent l&apos;auto-expression dans vos villas, duplex et cafés modernes. L&apos;émotion de la terre cuite au service de votre singularité.
            </p>
            <div className="pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Link href="/portfolio" className="btn btn-primary px-10 py-5">
                Explorer nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Style */}
      <section id="pourquoi" className="section-padding bg-white overflow-hidden">
        <div className="container fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                Notre Héritage
              </span>
              <h2 className="text-primary leading-[1.1]">
                La Beauté de l&apos;Imperfection, Habitée.
              </h2>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                Notre matière est vivante. Elle célèbre le geste pur de l&apos;artisan qui façonne la terre, créant des pièces uniques où chaque nuance raconte une histoire d&apos;authenticité.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
                  Découvrir notre histoire
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative aspect-[4/5] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/assets/images/bejmatb.jpg"
                  alt="Zellige Artisanat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections - Asymmetric Editorial Grid */}
      <section id="collections" className="section-padding bg-bg-light">
        <div className="container fadeIn stagger-1">
          <div className="max-w-4xl mb-24">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
              Matières & Textures
            </span>
            <h2 className="text-primary mb-8">L&apos;émotion céramique en état essentiel.</h2>
            <p className="text-xl text-text-muted font-light max-w-2xl">
              Chaque carreau porte l&apos;empreinte unique de Marrakech. Une collection pensée pour les architectures qui respirent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7 space-y-8">
              <div className="relative aspect-[16/9] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/assets/images/Zellige Classique .jpg"
                  alt="Zellige Classique"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light tracking-wide">Zellige Classique 10x10</h3>
                <p className="text-text-muted mt-2 tracking-wide uppercase text-[10px]">L&apos;indémodable format carré</p>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9 space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/assets/images/bejmat Traditionnel.jpg"
                  alt="Bejmat Traditionnel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-light tracking-wide">Bejmat Traditionnel</h3>
                <p className="text-text-muted mt-2 tracking-wide uppercase text-[10px]">Argile brute pour sols intérieurs</p>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center">
            <Link href="/collections" className="text-xs uppercase tracking-[0.3em] font-medium border-b border-primary pb-2">
              Explorer tout le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise - Architectural Focus */}
      <section id="bespoke" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 fadeIn stagger-1">
              <div className="relative aspect-[16/10] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/assets/images/villa modern avec touche marocaine.jpeg"
                  alt="Expertise Architecturale - Villa Moderne"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-12 order-1 lg:order-2 fadeIn stagger-2">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                Expertise
              </span>
              <h2 className="text-primary leading-tight font-light italic">Villas de Prestige & Espaces de Vie.</h2>
              <p className="text-xl text-text-muted font-light leading-relaxed">
                L&apos;équilibre parfait entre la rigueur contemporaine et la poésie de l&apos;arc traditionnel. Nous accompagnons les propriétaires et architectes dans la création de résidences d&apos;exception.
              </p>
              <ul className="space-y-6 pt-4 border-t border-gray-100">
                {[
                  "Études de calepinage personnalisées",
                  "Export international sécurisé",
                  "Standard de luxe absolu",
                ].map((item, i) => (
                  <li key={i} className="text-[12px] uppercase tracking-[0.2em] text-text-dark/70 list-none">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Link href="/bespoke" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2">
                  Nos Services Professionnels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie - Full Width Editorial */}
      <section id="galeries" className="section-padding bg-bg-light">
        <div className="container">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
                Réalisations
              </span>
              <h2 className="text-primary">L&apos;Émotion par la Matière.</h2>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2 whitespace-nowrap">
              Voir tout le portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 fadeIn stagger-1">
              <div className="relative aspect-[16/9] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/assets/images/salle de bain.jpeg"
                  alt="Salle de Bain d'Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-10 pb-12 fadeIn stagger-2">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block">
                Hospitalité
              </span>
              <h2 className="text-primary font-light italic leading-tight">Gastronomie & Design.</h2>
              <p className="text-xl text-text-muted font-light">
                Une atmosphère feutrée où le zellige dialogue avec les matières nobles et la lumière tamisée. Nos solutions habillent les restaurants les plus prestigieux.
              </p>
              <div className="pt-4">
                <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2">
                  Explorer nos réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Quotes */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
              Témoignages
            </span>
            <h2 className="text-primary italic font-light">&quot;Une signature architecturale unique.&quot;</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start max-w-6xl mx-auto">
            {[
              {
                text: "Une qualité de zellige exceptionnelle. Le niveau de détail a transformé notre projet en une véritable œuvre d'art.",
                author: "Marc Lefebvre",
                role: "Architecte, Paris",
              },
              {
                text: "Le professionnalisme de l'équipe Zlij Moroccan est remarquable. Un travail d'une finesse rare.",
                author: "Sarah Alami",
                role: "Designer, Casablanca",
              },
            ].map((t, i) => (
              <div key={i} className="space-y-8">
                <p className="text-2xl font-light text-text-dark leading-relaxed italic border-l-2 border-secondary pl-8">
                  &quot;{t.text}&quot;
                </p>
                <div className="pl-8">
                  <strong className="block text-primary text-sm uppercase tracking-widest">{t.author}</strong>
                  <span className="text-text-muted text-xs uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA - Minimalist & Deep Emerald */}
      <section className="section-padding bg-primary text-white text-center relative overflow-hidden">
        <div className="container relative z-10 space-y-12">
          <h2 className="text-white font-light tracking-tight italic">Commencez Votre Projet d&apos;Héritage</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Nos experts sont à votre disposition pour une consultation personnalisée et accompagner vos visions architecturales les plus exigeantes.
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
