import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contactez Zlij Moroccan | Devis & Consultation Zellige",
    description: "Prêt pour votre projet ? Contactez Zlij Moroccan à Marrakech pour des devis sur mesure, consultations techniques et solutions d'exportation internationale de zellige.",
};

export default function Contact() {
    return <ContactClient />;
}
