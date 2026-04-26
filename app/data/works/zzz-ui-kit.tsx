import React from 'react'

export const metadata = {
    title: "ZZZ UI Kit",
    tags: ["Frontend", "React", "Animation"],
    description: "A high-fidelity UI kit inspired by Zenless Zone Zero, built with Framer Motion and Tailwind CSS.",
    shortDescription: "Proxy-grade interface components with industrial aesthetics.",
    previewImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://zzz-ui-kit.example.com",
    date: "2024-04-26"
}

const ZZZWork = () => {
    return (
        <div className="space-y-6">
            <section className="space-y-3">
                <h3 className="text-[#CCFF00] font-black uppercase italic tracking-tighter text-xl">Core Vision</h3>
                <p>This project involved reverse-engineering the motion design language of ZZZ to create web-ready components. The focus was on "sharpness" and "energy" in transitions.</p>
            </section>

            <section className="space-y-3">
                <h3 className="text-[#CCFF00] font-black uppercase italic tracking-tighter text-xl">Technical Stack</h3>
                <ul className="grid grid-cols-2 gap-2 opacity-80">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> Framer Motion</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> Tailwind CSS</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> React 19</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> Vite</li>
                </ul>
            </section>

            <section className="bg-black/30 p-4 border border-white/5 rounded-lg italic text-white/60">
                "The interface must feel like a tactical terminal used by Proxies in the Hollows."
            </section>
        </div>
    )
}

export default ZZZWork
