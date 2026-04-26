import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import browseImg from './assets/browse.png'
import coverImg from './assets/cover.png'

export const metadata = {
    title: "SecondHand: Community Marketplace",
    tags: ["Fullstack", "Next.js", "MongoDB", "College"],
    description: "แพลตฟอร์มตลาดกลางสำหรับซื้อขายสินค้ามือสองที่อนุญาตให้ผู้ใช้ลงประกาศขายและจัดการสินค้าของตนเองได้อย่างอิสระ",
    shortDescription: "Community-driven Second-hand Goods Marketplace",
    previewImage: coverImg,
    date: "2024-06",
    techStack: [
        "Next.js",
        "MongoDB",
        "Auth.js",
        "Tailwind CSS",
        "Stripe API",
        "Daisy UI"
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

const SecondHandWork = () => {
    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Overview</h3>
                <p className="text-lg leading-relaxed text-white/90 italic">
                    "พัฒนาระบบ Web Application สำหรับการซื้อขายสินค้ามือสอง เน้นการใช้งานที่ง่ายและระบบจัดการสินค้าที่มีประสิทธิภาพสำหรับผู้ขาย"
                </p>
                <ImageWithPreview
                    src={coverImg}
                    alt="SecondHand Marketplace Platform"
                    className="rounded-xl border border-white/10 shadow-2xl"
                />
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities</h3>

                <div className="grid grid-cols-1 gap-12 text-white/80">
                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Browse Item Module
                        </h4>
                        <p>
                            ออกแบบและพัฒนาระบบเลือกดูสินค้า (Browse) ที่รองรับการทำ <strong>Filter</strong> ตามหมวดหมู่และราคา พร้อมระบบ <strong>Pagination</strong> เพื่อจัดการการแสดงผลข้อมูลสินค้าจำนวนมากอย่างมีประสิทธิภาพ ช่วยให้ผู้ใช้ค้นหาสินค้าที่ต้องการได้อย่างรวดเร็ว
                        </p>
                        <ImageWithPreview src={browseImg} alt="Product Browsing with Filters" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Product Detail & Management
                        </h4>
                        <p>
                            พัฒนาระบบแสดงรายละเอียดสินค้าแบบเจาะลึก (Product Detail) และระบบจัดการสินค้าสำหรับผู้ขาย (Inventory Management) ที่อนุญาตให้ผู้ใช้ลงประกาศขาย แก้ไขข้อมูล หรือลบสินค้าของตนเองได้แบบ Real-time
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Secure Infrastructure
                        </h4>
                        <p>
                            วางระบบหลังบ้านโดยใช้ <strong>Node.js</strong> และ <strong>MongoDB</strong> พร้อมระบบยืนยันตัวตนด้วย <strong>JWT (JSON Web Token)</strong> เพื่อความปลอดภัยในการจัดการข้อมูลส่วนบุคคลและรายการสินค้าของผู้ใช้
                        </p>
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

export default SecondHandWork
