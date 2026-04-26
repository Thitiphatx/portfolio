import React from 'react'

const Footer: React.FC = () => {
    const contactInfo = [
        { label: 'Email', value: 'thitiphat.kunrong@gmail.com', href: 'mailto:thitiphat.kunrong@gmail.com' },
        { label: 'Phone', value: '064 019 5292' },
        { label: 'GitHub', value: 'github.com/thitiphatx', href: 'https://github.com/thitiphatx' },
    ]

    return (
        <footer className="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md py-12 px-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">
                                About <span className="text-primary">me</span>
                            </h2>
                            <p className="text-white/40 text-sm font-medium max-w-xs uppercase tracking-tight">
                                Computer Science graduate with experience as a Junior Full-Stack Developer
                            </p>
                        </div>

                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-1 bg-primary" style={{ opacity: 1 - (i - 1) * 0.3 }} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-32">
                        {contactInfo.map((info) => (
                            <div key={info.label} className="group space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors">
                                    {info.label}
                                </span>
                                <a
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-white font-black italic uppercase tracking-tighter text-lg hover:translate-x-1 transition-transform"
                                >
                                    {info.value}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                    <span>© {new Date().getFullYear()} Thitiphat Kunrong</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
