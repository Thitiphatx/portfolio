import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import adminOverviewImg from './assets/admin-overview.png'
import adminProductsImg from './assets/admin-products.png'
import adminTransactionsImg from './assets/admin-transactions.png'
import adminUserImg from './assets/admin-user.png'
import archImg from './assets/arch-diagram.jpg'
import clientCheckoutImg from './assets/client-checkout.png'
import clientMyPurchasedImg from './assets/client-my-purchased.png'
import clientPurchasedDetailImg from './assets/client-purchased-detail.png'
import erImg from './assets/er-diagram.jpg'
import orderDetailImg from './assets/order-detail.png'
import productDetailImg from './assets/product-detail.png'
import productListImg from './assets/product-list.png'
import shopkeeperAddProductImg from './assets/shopkeeper-add-product.png'
import shopkeeperOverviewImg from './assets/shopkeeper-overview.png'

export const metadata = {
    title: "SecondHand: Community Marketplace",
    tags: ["Fullstack", "UX/UI", "Next.js", "MongoDB", "College"],
    description: "แพลตฟอร์มตลาดกลางสำหรับซื้อขายสินค้ามือสองที่อนุญาตให้ผู้ใช้ลงประกาศขายและจัดการสินค้าของตนเองได้อย่างอิสระ",
    shortDescription: "Community-driven Second-hand Goods Marketplace",
    previewImage: productListImg,
    date: "2024-06",
    techStack: [
        "React.js",
        "MongoDB",
        "Redis",
        "Auth.js",
        "Tailwind CSS",
        "Stripe API",
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
                    พัฒนาระบบ Web Application สำหรับการซื้อขายสินค้ามือสอง เน้นการใช้งานที่ง่ายและระบบจัดการสินค้าที่มีประสิทธิภาพ ระยะเวลาพัฒนา 3 เดือน
                </p>
                <ImageWithPreview
                    src={productListImg}
                    alt="SecondHand Marketplace Platform"
                    className="rounded-xl border border-white/10 shadow-2xl"
                />
            </section>

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
                            โครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Relational Database) เพื่อรองรับการจัดการสินค้า การสั่งซื้อ และผู้ใช้งาน
                        </p>
                        <ImageWithPreview src={erImg} alt="Entity-Relationship Diagram" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl bg-white" />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities & Features</h3>

                <div className="space-y-12">
                    {/* Client Side */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Client Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนการใช้งานสำหรับผู้ซื้อสินค้าทั่วไป</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Product List & Filter
                                </h5>
                                <p>
                                    ระบบค้นหาและเลือกดูสินค้า (Product List) ที่รองรับการกรองข้อมูล (Filter) ตามหมวดหมู่และราคา
                                </p>
                                <ImageWithPreview src={productListImg} alt="Product List and Filter" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Product Detail & Checkout
                                </h5>
                                <p>
                                    แสดงรายละเอียดสินค้า รูปภาพหลายมุมมอง และหน้าต่างสรุปการสั่งซื้อสินค้า (Checkout) ก่อนการชำระเงิน
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                                    <ImageWithPreview src={productDetailImg} alt="Product Detail" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={clientCheckoutImg} alt="Checkout Summary" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Purchases & Order Tracking
                                </h5>
                                <p>
                                    ระบบดูรายการสินค้าที่ซื้อแล้ว (My Purchases) พร้อมรายละเอียดคำสั่งซื้อ และติดตามสถานะการจัดส่งสินค้า
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
                                    <ImageWithPreview src={clientMyPurchasedImg} alt="My Purchased List" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={clientPurchasedDetailImg} alt="Purchased Detail" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={orderDetailImg} alt="Order Tracking Status" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shopkeeper Side */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Shopkeeper Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนการจัดการสำหรับผู้ขายสินค้า</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Shopkeeper Dashboard
                                </h5>
                                <p>
                                    หน้ารวมข้อมูลสรุปการขาย ดูข้อมูลสินค้าที่กำลังลงขายและยอดขายได้ในที่เดียว
                                </p>
                                <ImageWithPreview src={shopkeeperOverviewImg} alt="Shopkeeper Dashboard" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Add Product
                                </h5>
                                <p>
                                    ระบบลงประกาศขายสินค้า สามารถอัปโหลดรูปภาพ ระบุรายละเอียดและราคาเพื่อนำสินค้าขึ้นหน้าเว็บไซต์
                                </p>
                                <ImageWithPreview src={shopkeeperAddProductImg} alt="Add Product" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>
                        </div>
                    </div>

                    {/* Admin Side */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Admin Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนการจัดการสำหรับผู้ดูแลระบบ</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    System Dashboard
                                </h5>
                                <p>
                                    Dashboard สำหรับ Admin ดูสถิติภาพรวมทั้งหมดของระบบ
                                </p>
                                <ImageWithPreview src={adminOverviewImg} alt="Admin System Dashboard" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    User Management
                                </h5>
                                <p>
                                    ระบบจัดการผู้ใช้งาน (CRUD User) ควบคุมสิทธิ์และดูแลผู้ใช้ในระบบทั้งหมด
                                </p>
                                <ImageWithPreview src={adminUserImg} alt="User Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Product Management
                                </h5>
                                <p>
                                    ระบบจัดการสินค้า ดูรายการสินค้าที่ถูกโพสต์ขาย และสามารถอนุมัติ (Approve) สินค้าเพื่อให้แสดงบนเว็บไซต์ได้
                                </p>
                                <ImageWithPreview src={adminProductsImg} alt="Product Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Transaction Viewer
                                </h5>
                                <p>
                                    ตรวจสอบรายการคำสั่งซื้อและการทำธุรกรรมทั้งหมดภายในระบบ
                                </p>
                                <ImageWithPreview src={adminTransactionsImg} alt="Transaction Viewer" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
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

export default SecondHandWork
