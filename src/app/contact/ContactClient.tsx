"use client";

import { Mail, Phone, MapPin, Send, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactClient() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const whatsappNumber = "212661690413";
        const text = `Bonjour Zlij Moroccan,
*Nouveau Message de Contact*
*Nom:* ${formData.name}
*Email:* ${formData.email}
*Type de Projet:* ${formData.projectType}
*Vision:* ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setStatus("success");
        }, 800);
    };

    return (
        <>
            <section className="bg-zinc-950 pt-32 pb-20 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/assets/images/zellige-hero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                        Begin Your Legacy Project
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-secondary uppercase tracking-[5px] text-sm font-semibold block">
                                    Contact International
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-primary font-playfair leading-tight">
                                    Une Présence Globale, un Cœur à Marrakech.
                                </h2>
                                <p className="text-lg text-text-muted leading-relaxed">
                                    Que vous soyez un architecte à la recherche de spécifications techniques ou un particulier souhaitant sublimer son intérieur, notre équipe est à votre écoute.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Mail className="text-secondary w-6 h-6" />,
                                        title: "Email de Consultation",
                                        val: "contact@zlijmoroccan.com",
                                    },
                                    {
                                        icon: <Phone className="text-secondary w-6 h-6" />,
                                        title: "Ligne Directe (WhatsApp)",
                                        val: "+212 661 690 413",
                                    },
                                    {
                                        icon: <MapPin className="text-secondary w-6 h-6" />,
                                        title: "Nos Ateliers",
                                        val: "Quartier Industriel, Marrakech, Maroc",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-bg-light flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.title}</h4>
                                            <p className="text-text-muted">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-bg-light p-10 rounded-2xl border-l-4 border-secondary space-y-4">
                                <div className="flex items-center gap-3 text-primary font-bold text-xl">
                                    <Truck className="text-secondary" /> Export Certifié
                                </div>
                                <p className="text-text-muted leading-relaxed">
                                    Nous gérons l&apos;ensemble des formalités douanières et l&apos;emballage sécurisé pour des livraisons partout dans le monde.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 relative">
                            <h3 className="text-3xl font-bold text-primary font-playfair mb-10">
                                Formulaire de Demande
                            </h3>

                            {status === "success" ? (
                                <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send />
                                    </div>
                                    <h4 className="text-2xl font-bold">Message Envoyé !</h4>
                                    <p>Vous allez être redirigé vers WhatsApp pour finaliser votre demande.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-sm font-bold uppercase tracking-widest text-green-700 hover:underline"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Nom Complet"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 bg-bg-light border-none rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="Adresse Email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 bg-bg-light border-none rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <select
                                            required
                                            value={formData.projectType}
                                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                            className="w-full px-6 py-4 bg-bg-light border-none rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none"
                                        >
                                            <option value="">Type de Projet</option>
                                            <option value="residentiel">Résidentiel de Luxe</option>
                                            <option value="commercial">Commercial / Hôtel</option>
                                            <option value="restauration">Restauration de Patrimoine</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <textarea
                                            rows={5}
                                            placeholder="Décrivez votre vision..."
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-6 py-4 bg-bg-light border-none rounded-xl focus:ring-2 focus:ring-secondary transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="btn btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-70"
                                    >
                                        {status === "loading" ? "Ouverture de WhatsApp..." : "Envoyer via WhatsApp"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
