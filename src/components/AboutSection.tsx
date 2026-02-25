'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Wallet, CheckCircle2 } from 'lucide-react'

const steps = [
    {
        icon: <MapPin className="w-8 h-8 text-blue-500" />,
        title: "1. Выбирайте удобную локацию",
        description: "В приложении доступны все данные: точный адрес и место проведения работы. Выбирайте то, что ближе к вам."
    },
    {
        icon: <Clock className="w-8 h-8 text-blue-500" />,
        title: "2. Подходящее время",
        description: "Все даты и время начала/окончания смены указаны в заявке. Вы сами планируете свой график."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
        title: "3. Прозрачные задачи",
        description: "Подробное описание того, что нужно сделать. Никаких скрытых условий, только понятная работа."
    },
    {
        icon: <Wallet className="w-8 h-8 text-[#25D366]" />,
        title: "4. Гарантированная оплата",
        description: "После выполнения работы менеджеры платформы оперативно пополняют ваш баланс. Быстро и надежно."
    }
]

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Как работает TEOS?</h2>
                    <p className="text-lg text-slate-600">
                        Платформа создана для тех, кто ищет разовую работу на одну смену. Мы упрощаем процесс поиска и гарантируем выплаты.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
