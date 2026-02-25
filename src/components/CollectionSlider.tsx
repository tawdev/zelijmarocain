"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CollectionSliderProps {
    images: string[];
    title: string;
}

export default function CollectionSlider({ images, title }: CollectionSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    if (images.length === 0) return null;
    if (images.length === 1) {
        return (
            <Image
                src={images[0]}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
        );
    }

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - image ${currentIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
