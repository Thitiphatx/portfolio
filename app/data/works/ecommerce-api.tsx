import React from 'react'

export const metadata = {
    title: "E-commerce API",
    tags: ["Backend", "Node.js", "PostgreSQL"],
    description: "A robust, scalable backend for high-traffic e-commerce platforms featuring JWT auth and Stripe integration.",
    shortDescription: "High-performance RESTful API for modern commerce.",
    previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://api-demo.example.com",
    date: "2024-03-15"
}

const EcommerceWork = () => {
    return (
        <div className="space-y-6">
            <section className="space-y-3">
                <h3 className="text-[#CCFF00] font-black uppercase italic tracking-tighter text-xl">System Architecture</h3>
                <p>Designed with horizontal scalability in mind. Uses Redis for caching frequently accessed product data and RabbitMQ for asynchronous order processing.</p>
            </section>

            <section className="space-y-3">
                <h3 className="text-[#CCFF00] font-black uppercase italic tracking-tighter text-xl">Key Features</h3>
                <ul className="space-y-2 opacity-80">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> Real-time Inventory Management</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> Secure Payment Processing (Stripe)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00]" /> RBAC (Role-Based Access Control)</li>
                </ul>
            </section>

            <div className="bg-[#CCFF00]/10 p-4 rounded border border-[#CCFF00]/20 font-mono text-xs">
                <div className="text-[#CCFF00] mb-2 font-bold">// Order Validation Logic</div>
                <div className="text-white/60">if (stock &lt; requested) throw new Error("Hollow-level deficit");</div>
            </div>
        </div>
    )
}

export default EcommerceWork
