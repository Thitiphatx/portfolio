import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import billingImg from './assets/billing.png'
import paymentImg from './assets/payment.png'
import previewImg from './assets/preview.png'
import projectImg from './assets/project.png'
import rbacImg from './assets/rbac.png'
import archImg from './assets/arch-diagram.jpg'
import erImg from './assets/er-diagram.jpg'
import adminBilling2Img from './assets/admin-billing-2.png'
import adminBillingImg from './assets/admin-billing.png'
import adminProjectImg from './assets/admin-project-management.png'
import adminTransactionImg from './assets/admin-transaction.png'
import promptpayImg from './assets/promptpay.png'
import taxAddressImg from './assets/tax-address.png'
import topupImg from './assets/topup.png'
export const metadata = {
    title: "MCloud: Multi-Cloud Billing System",
    tags: ["Fullstack", "UX/UI", "React", "Spring Boot", "MariaDB"],
    description: "ระบบบริหารจัดการโครงการและคิดค่าบริการคลาวด์แบบเติมเครดิต รองรับ OpenStack และ Proxmox",
    shortDescription: "Project Management & Credit Billing System on Cloud Management Platform",
    demoUrl: "https://next.mcloud.co.th/app/",
    previewImage: previewImg,
    date: "2026-02-17",
    techStack: [
        "React",
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
            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">System Architecture & Database Design</h3>
                <div className="grid grid-cols-1 gap-12 text-white/80">
                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Architecture Diagram
                        </h4>
                        <p>
                            ภาพรวมโครงสร้างสถาปัตยกรรมระบบ โดยเชื่อมต่อกับบริการต่างๆ เพื่อความเสถียรภาพและความปลอดภัย
                        </p>
                        <ImageWithPreview src={archImg} alt="System Architecture Diagram" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl bg-white" />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Entity-Relationship Diagram
                        </h4>
                        <p>
                            โครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Relational Database) เพื่อรองรับการจัดการสิทธิ์ โครงการ และระบบ Billing
                        </p>
                        <ImageWithPreview src={erImg} alt="Entity-Relationship Diagram" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl bg-white" />
                    </div>
                </div>
            </section>
            <section className="space-y-4">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Overview</h3>
                <p className="text-lg leading-relaxed text-white/90 italic">
                    พัฒนาระบบ Web Application สำหรับให้บริการคลาวด์แบบครบวงจร รองรับความซับซ้อนของ Multi-Cloud Environment ระยะเวลาพัฒนา 10 เดือน (พ.ค. 2025 - ก.พ. 2026)
                </p>
                <ImageWithPreview
                    src={projectImg}
                    alt="Project Management Terminal Interface"
                    className="rounded-xl border border-white/10 shadow-2xl"
                />
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities & Features</h3>

                <div className="space-y-12">
                    {/* Client Side */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Client Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนการใช้งานสำหรับลูกค้าและผู้เช่าบริการคลาวด์</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Project & Member Management
                                </h5>
                                <p>
                                    ระบบจัดการโครงการ สามารถเพิ่ม ลบ และแก้ไขข้อมูลโครงการได้ รวมถึงการจัดการสมาชิกในโครงการ <strong>(Role-Based Access Control)</strong> รองรับการเชิญสมาชิกเข้าโครงการ (Invite), เตะออก (Kick), และกำหนดสิทธิ์แบบเจาะจงได้
                                </p>
                                <ImageWithPreview src={rbacImg} alt="Database-driven Role Management" className="w-full max-w-3xl rounded-lg border border-white/5 shadow-lg" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Credit-Based Billing System
                                </h5>
                                <p>
                                    ระบบคิดค่าบริการทรัพยากรคลาวด์แบบเติมเครดิต คำนวณค่าใช้จ่ายแบบ Real-time
                                </p>
                                <ImageWithPreview src={billingImg} alt="Resource Usage Billing Dashboard" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Payment Gateway & Topup
                                </h5>
                                <p>
                                    ระบบเติมเงินผ่าน <strong>Payment Gateway (Omise)</strong> ด้วยการส่งข้อมูลแบบ Payment Tokenization รองรับการชำระผ่าน PromptPay และ Credit Card พร้อมออกใบเสร็จหลังจากชำระค่าบริการสำเร็จ
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                                    <ImageWithPreview src={promptpayImg} alt="Promptpay Integration" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={topupImg} alt="Topup Integration" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Tax Address Management
                                </h5>
                                <p>
                                    ระบบจัดการข้อมูลที่อยู่สำหรับการออกใบกำกับภาษีและใบเสร็จรับเงินของผู้ใช้งาน
                                </p>
                                <ImageWithPreview src={taxAddressImg} alt="Tax Address Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>
                        </div>
                    </div>

                    {/* Admin Side */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Admin Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนการจัดการสำหรับผู้ดูแลระบบ (Administrator)</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Project & User Management
                                </h5>
                                <p>
                                    ระบบหลังบ้านสำหรับผู้ดูแลเพื่อจัดการข้อมูลผู้ใช้งานและควบคุมโครงการทั้งหมดในระบบ (CRUD Operations)
                                </p>
                                <ImageWithPreview src={adminProjectImg} alt="Admin Project Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Billing & Transaction Dashboard
                                </h5>
                                <p>
                                    Dashboard แสดงสถิติการใช้งานระบบ, สถานะการเติมเงินเครดิต และประวัติการทำธุรกรรม (Transaction Stats) เพื่อให้ผู้ดูแลสามารถติดตามภาพรวมและตรวจสอบได้ง่ายขึ้น
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                                    <ImageWithPreview src={adminBillingImg} alt="Admin Billing Dashboard" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={adminTransactionImg} alt="Admin Transaction Viewer" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>
                        </div>
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
