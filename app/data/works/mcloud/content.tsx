import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import billingImg from './assets/billing.png'
import paymentImg from './assets/payment.png'
import previewImg from './assets/preview.png'
import projectImg from './assets/project.png'
import rbacImg from './assets/rbac.png'

export const metadata = {
    title: "MCloud: Multi-Cloud Billing System",
    tags: ["Fullstack", "React", "Spring Boot", "MariaDB"],
    description: "ระบบบริหารจัดการโครงการและคิดค่าบริการคลาวด์แบบเติมเครดิต รองรับ OpenStack และ Proxmox",
    shortDescription: "Project Management & Credit Billing System on Cloud Management Platform",
    previewImage: previewImg,
    date: "2026-02-17",
    techStack: [
        "React (Vite)",
        "Kotlin Spring Boot",
        "MariaDB",
        "Tailwind CSS",
        "Omise API",
        "Ant Design",
        "Openstack API",
        "Proxmox API"
    ]
}

const ImageWithPreview = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                onClick={() => setIsOpen(true)}
                className={`cursor-zoom-in overflow-hidden ${className}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
            >
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative z-10 max-w-6xl w-full flex flex-col items-center justify-center pointer-events-none"
                        >
                            <div className="relative group pointer-events-auto">
                                <img
                                    src={src}
                                    alt={alt}
                                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent rounded-b-lg">
                                    <p className="text-white font-black italic uppercase tracking-widest text-sm">{alt}</p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false);
                                    }}
                                    className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-primary text-black rounded-full shadow-xl hover:scale-110 transition-transform font-bold"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

const CmpWork = () => {
    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Overview</h3>
                <p className="text-lg leading-relaxed text-white/90 italic">
                    "พัฒนาระบบ Web Application สำหรับให้บริการคลาวด์แบบครบวงจร รองรับความซับซ้อนของ Multi-Cloud Environment"
                </p>
                <ImageWithPreview
                    src={projectImg}
                    alt="Project Management Terminal Interface"
                    className="rounded-xl border border-white/10 shadow-2xl"
                />
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities</h3>

                <div className="grid grid-cols-1 gap-12 text-white/80">
                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Payment Gateway Integration
                        </h4>
                        <p>
                            การเชื่อมต่อระบบเข้ากับ <strong>Payment Gateway (Omise)</strong> ด้วยการส่งข้อมูลแบบ Payment Tokenization รองรับการชำระผ่านบัตรเครดิต และพร้อมเพย์ รวมถึงมีการออกใบเสร็จ/ใบกำกับภาษี หลังจากชำระค่าบริการสำเร็จ
                        </p>
                        <ImageWithPreview src={paymentImg} alt="Secure Payment Integration" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Billing Module
                        </h4>
                        <p>
                            รับผิดชอบการออกแบบและพัฒนาระบบการเงินทั้งหมด ตั้งแต่การเชื่อมต่อ <strong>Payment Gateway (Omise)</strong> ไปจนถึงระบบคำนวณค่าใช้จ่ายทรัพยากรแบบ Real-time และการสร้างระบบออกใบกำกับภาษีอัตโนมัติ
                        </p>

                        <ImageWithPreview src={billingImg} alt="Resource Usage Billing Dashboard" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Project Management & RBAC
                        </h4>
                        <p>
                            ออกแบบและพัฒนาระบบจัดการโครงการคลาวด์ สามารถเพิ่มสมาชิกและจัดการสิทธิ์สมาชิกในโครงการ <strong>(Role-Based Access Control)</strong> โดยใช้ฐานข้อมูล <strong>MariaDB</strong> ในการจัดเก็บสิทธิ์การเข้าถึง (Permissions) และเขียน Logic ตรวจสอบการเข้าถึงทรัพยากรในระดับ Backend ทั้งหมด
                        </p>
                        <ImageWithPreview src={rbacImg} alt="Database-driven Role Management" className="w-full max-w-3xl rounded-lg border border-white/5 shadow-lg" />
                    </div>
                </div>
            </section>

            <section className="space-y-3">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {metadata.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-white/5 hover:bg-primary hover:text-black rounded-sm text-xs font-bold transition-all duration-300 border border-white/10 uppercase tracking-tighter cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CmpWork
