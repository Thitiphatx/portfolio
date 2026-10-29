import type { WorkMetadata } from '~/types/work'
import { ImageWithPreview } from '~/components/image-with-preview'
import homeImg from './assets/home.png'
import ArchitectureImg from './assets/Architecture-easyshop.jpg'
import ErImg from './assets/er-easyshop.jpg'
import shopImg from './assets/shop.png'
import truewalletImg from './assets/truewallet.png'
import backoffice1Img from './assets/backoffice-1.png'
import backoffice2Img from './assets/backoffice-2.png'
import backoffice3Img from './assets/backoffice-3.png'
import backoffice31Img from './assets/backoffice-3-1.png'
import backoffice4Img from './assets/backoffice-4.png'
import backoffice5Img from './assets/backoffice-5.png'
import itemImg from './assets/item.png'
import serverImg from './assets/server.png'

export const metadata: WorkMetadata = {
    title: "EasyShop: Multi-Network Minecraft Webshop",
    tags: ["Fullstack", "UX/UI", "Next.js", "Postgresql", "Prisma", "Docker"],
    description: "ระบบร้านค้าเว็บช็อปสำหรับเซิร์ฟเวอร์ Minecraft ออกแบบด้วยธีม Minecraft Pixel/Retro Style รองรับการจัดการแบบ Multi-Network Server เชื่อมต่อกับระบบฐานข้อมูลเกมและ RCON อย่างสมบูรณ์แบบ",
    shortDescription: "Multi-Network Minecraft Webshop & Server Management System",
    demoUrl: "https://easyshop-orpin.vercel.app/",
    repoUrl: "https://github.com/Thitiphatx/easyshop",
    previewImage: homeImg,
    date: "2026-10",
    techStack: [
        "Next.js",
        "TypeScript",
        "Prisma ORM",
        "Postgresql",
        "Tailwind CSS",
        "Docker",
        "EasySlip API",
        "TrueMoney Wallet",
        "RCON Protocol",
        "Cloudflare Turnstile"
    ]
}

const EzShop = () => {
    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Overview</h3>
                <p className="text-lg leading-relaxed text-white/90 italic">
                    พัฒนาระบบร้านค้าเว็บช็อปสำหรับเซิร์ฟเวอร์ Minecraft ที่ออกแบบด้วยธีม Minecraft Pixel/Retro Style สวยงาม ทันสมัย รองรับการจัดการแบบเครือข่าย Multi-Network Server และเชื่อมต่อกับระบบฐานข้อมูลของเกมได้อย่างสมบูรณ์แบบ
                </p>
                <ImageWithPreview
                    src={homeImg}
                    alt="EasyShop Minecraft Webshop Platform"
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
                            ภาพรวมโครงสร้างสถาปัตยกรรมระบบ เชื่อมต่อระหว่างเว็บแอปพลิเคชัน Next.js, ฐานข้อมูล Postgresql, และเซิร์ฟเวอร์ Minecraft หลากหลายโหนดผ่าน RCON Protocol
                        </p>
                        <ImageWithPreview
                            src={ArchitectureImg}
                            alt="EasyShop Minecraft Webshop Platform"
                            className="rounded-xl border border-white/10 shadow-2xl"
                        />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Entity-Relationship & Database Design
                        </h4>
                        <p>
                            โครงสร้างฐานข้อมูล <strong>Prisma ORM (Postgresql)</strong> เชื่อมต่อและแชร์ข้อมูลร่วมกับปลั๊กอิน Minecraft AuthMe (ระบบสมาชิก/รหัสผ่าน) รวมถึงตารางจัดการเซิร์ฟเวอร์, สินค้า, รายการเติมเงิน และประวัติการทำธุรกรรม
                        </p>
                        <ImageWithPreview
                            src={ErImg}
                            alt="EasyShop Minecraft Webshop Platform"
                            className="rounded-xl border border-white/10 shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities & Features</h3>

                <div className="space-y-12">
                    {/* Storefront / Player Portal */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Storefront & Player Portal</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนหน้าเว็บไซต์ร้านค้าและการใช้งานสำหรับผู้เล่น</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Minecraft-Themed Store & Multi-Network Support
                                </h5>
                                <p>
                                    ออกแบบ UI/UX สไตล์ Minecraft Pixel Art รองรับการเลือกสินค้าแยกตามเซิร์ฟเวอร์ในเครือข่าย เมื่อสั่งซื้อระบบจะส่งคำสั่งผ่าน <strong>RCON</strong> ไปยังเซิร์ฟเวอร์ปลายทางทันที
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                                    <ImageWithPreview src={homeImg} alt="EasyShop Home Storefront" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={shopImg} alt="EasyShop Catalog & Server Selector" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Automated Payment Gateways & Topup
                                </h5>
                                <p>
                                    ระบบเติมเงินอัตโนมัติ 2 ช่องทางหลัก: <strong>TrueMoney Wallet</strong> ผ่านลิงก์ซองของขวัญและ <strong>สแกนสลิปธนาคาร</strong> ตรวจสอบสลิปแบบเรียลไทม์ด้วย <strong>EasySlip API</strong> พร้อมระบบตั้งค่าตัวคูณแต้มตามช่วงเวลาโปรโมชั่น (Point Multiplier)
                                </p>
                                <ImageWithPreview src={truewalletImg} alt="Automated Topup System" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>
                        </div>
                    </div>

                    {/* Admin Backoffice */}
                    <div className="space-y-6">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 md:p-6 flex items-center gap-4 mb-8">
                            <div>
                                <h4 className="text-primary font-black italic uppercase text-2xl tracking-tighter">Admin Backoffice</h4>
                                <p className="text-white/60 text-sm mt-1">ส่วนระบบจัดการหลังบ้านสำหรับผู้ดูแลเซิร์ฟเวอร์</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-12 text-white/80">
                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Sales Dashboard & Statistics
                                </h5>
                                <p>
                                    แดชบอร์ดสรุปยอดขาย สถิติการเติมเงิน รายได้รวม และกราฟแนวโน้ม เพื่อการวิเคราะห์ภาพรวมทางธุรกิจของเซิร์ฟเวอร์
                                </p>
                                <ImageWithPreview src={backoffice1Img} alt="Admin Dashboard Overview" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Server & Item Management
                                </h5>
                                <p>
                                    จัดการรายการเซิร์ฟเวอร์ในเครือข่าย พร้อมตั้งค่าการเชื่อมต่อ RCON (Host, Port, Password) และระบบจัดการสินค้า หมวดหมู่ ราคา และกำหนด Command ที่จะสั่งรันในเซิร์ฟเวอร์เมื่อผู้เล่นซื้อสำเร็จ
                                </p>
                                <ImageWithPreview src={serverImg} alt="Server Form Modal" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                                <ImageWithPreview src={itemImg} alt="Item Form Modal" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Banner Management
                                </h5>
                                <p>
                                    ระบบจัดการแบนเนอร์ในหน้าแรกสำหรับแสดงโปรโมชั่น ข่าวสาร และกิจกรรมต่าง ๆ พร้อมรองรับการตั้งค่ากำหนดลิงก์เชื่อมต่อไปยังหน้าต่าง ๆ ภายในเว็บไซต์หรือภายนอกได้อย่างสะดวก
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                                    <ImageWithPreview src={backoffice3Img} alt="Banner Management List" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                    <ImageWithPreview src={backoffice31Img} alt="Banner Configuration" className="rounded-lg border border-white/5 shadow-lg w-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Asset & Media Management
                                </h5>
                                <p>
                                    หน้าระบบจัดการรูปภาพและ Assets ทั้งหมดบนเว็บไซต์ โดยจัดหมวดหมู่อย่างเป็นระบบ แบ่งเป็นรูป Server, Item, Banner, Brand และ Others สะดวกต่อการอัปโหลดและเรียกใช้งานในทุกส่วนของเว็บ
                                </p>
                                <ImageWithPreview src={backoffice5Img} alt="Asset and Media Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h5 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                                    <span className="w-2 h-2 bg-primary rotate-45" />
                                    Transaction Logs & System Settings
                                </h5>
                                <p>
                                    ตรวจสอบประวัติการซื้อสินค้าและประวัติการทำรายการเติมเงินย้อนหลัง พร้อมตั้งค่าระบบหลัก เช่น ชื่อเว็บ, คำอธิบาย, และ TrueWallet
                                </p>
                                <ImageWithPreview src={backoffice4Img} alt="Transaction Logs and System Settings" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                                <ImageWithPreview src={backoffice2Img} alt="Server and Item Management" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
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

export default EzShop
