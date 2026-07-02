import type { WorkMetadata } from '~/types/work'
import { ImageWithPreview } from '~/components/image-with-preview'
import browseImg from './assets/browse.png'
import previewImg from './assets/preview.png'

export const metadata: WorkMetadata = {
    title: "Section6: Semantic Segmentation Data Service",
    tags: ["Fullstack", "Next.js", "Flask", "Computer Vision", "College"],
    description: "ระบบวิเคราะห์และให้บริการข้อมูลจากการทำ Semantic Segmentation เพื่อระบุวัตถุในภาพสำหรับงานวางแผนและวิเคราะห์พื้นที่",
    shortDescription: "Semantic Segmentation Analysis & Data Distribution System",
    previewImage: previewImg,
    date: "2024-05-15",
    techStack: [
        "Next.js",
        "Flask",
        "MMSegmentation",
        "PyTorch",
        "PostgreSQL",
        "Stripe API",
        "Docker"
    ]
}


const CmpWork = () => {
    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Overview</h3>
                <p className="text-lg leading-relaxed text-white/90 italic">
                    "พัฒนาระบบให้บริการข้อมูลเชิงลึกจากการประมวลผลภาพถ่ายด้วย AI เพื่อตอบโจทย์งานวิเคราะห์โครงสร้างพื้นฐานและผังเมือง"
                </p>
            </section>

            <section className="space-y-6">
                <h3 className="text-primary font-black uppercase italic tracking-tighter text-xl border-l-4 border-primary pl-4">Core Responsibilities</h3>

                <div className="grid grid-cols-1 gap-12 text-white/80">
                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Semantic Segmentation Analysis
                        </h4>
                        <p>
                            ประยุกต์ใช้ <strong>MMSegmentation (PyTorch)</strong> ในการวิเคราะห์และจำแนกวัตถุในภาพ (อาคาร, ถนน, รถยนต์) จากชุดข้อมูล Cityscapes โดยมีการจัดการผลลัพธ์ในรูปแบบไฟล์ <strong>.npz (Numpy Zip)</strong> เพื่อลดพื้นที่จัดเก็บข้อมูลและเพิ่มประสิทธิภาพในการส่งต่อข้อมูล
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Data Marketplace & Payment
                        </h4>
                        <p>
                            ออกแบบและพัฒนาระบบ Marketplace ที่อนุญาตให้ผู้ใช้เลือกซื้อข้อมูลเฉพาะส่วนที่ต้องการ (Cluster) โดยเชื่อมต่อกับ <strong>Stripe API</strong> เพื่อรองรับการชำระเงินผ่านบัตรเครดิต พร้อมระบบจัดการประวัติการซื้อและดาวน์โหลดข้อมูลในรูปแบบ CSV หรือ KML
                        </p>
                        <ImageWithPreview src={browseImg} alt="Data Browsing & Selection Interface" className="rounded-lg border border-white/5 shadow-lg w-full max-w-3xl" />
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase flex items-center gap-2 tracking-wider">
                            <span className="w-2 h-2 bg-primary rotate-45" />
                            Hybrid Architecture Design
                        </h4>
                        <p>
                            วางโครงสร้างระบบแบบ <strong>Decoupled Architecture</strong> โดยใช้ <strong>Next.js</strong> เป็น Frontend/Backend หลัก และแยก <strong>Flask</strong> สำหรับงาน Model Inference โดยเฉพาะ เพื่อความยืดหยุ่นในการสเกลทรัพยากรสำหรับการประมวลผลโมเดล AI ที่มีความซับซ้อน
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

export default CmpWork
