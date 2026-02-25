'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import RotatingFeatures from './RotatingFeatures'

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-visible bg-transparent pt-20 pb-10">
            <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8 text-center lg:text-left pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <div className="mb-6 relative w-32 h-12 md:w-48 md:h-16 pointer-events-auto">
                            <Image
                                src="/foreground.svg"
                                alt="TEOS Logo"
                                fill
                                className="object-contain object-center lg:object-left"
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Разовые подработки <br />
                            <span className="text-blue-600">на одну смену</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0"
                    >
                        Удобная платформа для поиска коротких заказов. Откликайтесь, выполняйте работу и гарантированно получайте оплату от менеджеров платформы.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                    >
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5c] text-white w-full sm:w-auto h-14 px-8 text-lg font-semibold shadow-lg shadow-[#25D366]/20 pointer-events-auto transition-all" asChild>
                            <a href="https://wa.me/77715255755" target="_blank" rel="noopener noreferrer">
                                Техподдержка WhatsApp
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-medium pointer-events-auto text-slate-700 border-slate-300 hover:bg-slate-100 transition-all cursor-pointer" asChild>
                            <a href="#about">Как это работает?</a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* 3D Rotating Images Showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex-1 w-full flex justify-center lg:justify-end pointer-events-none"
                >
                    <RotatingFeatures />
                </motion.div>

            </div>
        </section>
    )
}
