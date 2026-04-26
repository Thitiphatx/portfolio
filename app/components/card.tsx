import React from "react"

interface CardProps {
    header?: React.ReactNode
    image?: string
    children: React.ReactNode
    footer?: React.ReactNode
    actions?: React.ReactNode
    className?: string
}

const Card = ({ header, image, children, footer, actions, className = "" }: CardProps) => {
    return (
        <div className={`relative overflow-hidden border border-white/10 backdrop-blur-xl bg-black/50 rounded-2xl flex flex-col ${className}`}>
            {/* Header */}
            {header && (
                <div className="relative z-10 px-6 py-4 border-b border-white/5 bg-white/5">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-black uppercase tracking-widest text-[var(--color-primary)] italic">
                            {header}
                        </div>
                    </div>
                </div>
            )}

            {/* Image Section */}
            {image && (
                <div className="relative h-48 overflow-hidden border-b border-white/5">
                    <img src={image} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
            )}

            {/* Content Container */}
            <div className="relative flex-grow">
                {/* Static background lines - only for content */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            #ffffff 10px,
                            #ffffff 16px
                        )`,
                    }}
                />
                
                {/* Content */}
                <div className="relative z-10 px-6 py-6 text-white/80">
                    {children}
                </div>
            </div>

            {/* Actions & Footer */}
            {(footer || actions) && (
                <div className="relative z-10 border-t border-white/5 bg-black/40">
                    {actions && (
                        <div className="px-6 py-4 flex gap-3 border-b border-white/5">
                            {actions}
                        </div>
                    )}
                    {footer && (
                        <div className="px-6 py-3 text-[10px] font-bold uppercase tracking-tighter text-white/40">
                            {footer}
                        </div>
                    )}
                </div>
            )}

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_50%_0%,var(--color-primary-dim,rgba(204,255,0,0.05))_0%,transparent_70%]" />
        </div>
    )
}

export default Card
