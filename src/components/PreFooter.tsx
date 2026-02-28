import Image from "next/image";

export default function PreFooter() {
    return (
        <section className="w-full bg-white py-10 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="relative w-full aspect-[21/6] md:aspect-[21/4] overflow-hidden rounded-2xl shadow-sm">
                    <Image
                        src="/assets/images/bfter.jpeg"
                        alt="Zlij Moroccan Selection"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
