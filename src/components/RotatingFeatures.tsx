'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
    { id: 1, src: '/Скрин 1.png', alt: 'Скриншот 1' },
    { id: 2, src: '/Скрин 2.png', alt: 'Скриншот 2' },
    { id: 3, src: '/Скрин 3.png', alt: 'Скриншот 3' },
]

export default function RotatingFeatures() {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center" style={{ perspective: '800px' }}>
            {/* Container holding the rotating elements */}
            <motion.div
                // Reduced container size by 20% compared to original (w-64->~w-52, md:w-80->w-64)
                className="relative w-[205px] h-[360px] md:w-[256px] md:h-[440px]"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {features.map((feature, index) => {
                    // Calculate the rotation angle for each item
                    const rotateY = (360 / features.length) * index

                    return (
                        <div
                            key={feature.id}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                // Reduced translateZ by ~50% (from 250px/280px down to 140px)
                                transform: `rotateY(${rotateY}deg) translateZ(140px)`,
                                backfaceVisibility: 'visible',
                            }}
                        >
                            {/* Reduced radius and borders proportionally */}
                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[4px] border-slate-800 bg-slate-900 pointer-events-auto">
                                <Image
                                    src={feature.src}
                                    alt={feature.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}
