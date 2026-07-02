import { Link, useLoaderData } from "react-router";
import React from "react";
import Button from "~/components/button";
import Card from "~/components/card";
import type { Route } from "./+types/work-detail";

import type { WorkMetadata } from "~/types/work";

const workFiles = import.meta.glob('../data/works/*/content.tsx', { eager: true });

interface WorkModule {
    metadata: WorkMetadata;
    default: React.ComponentType;
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const { slug } = params;
    const path = `../data/works/${slug}/content.tsx`;
    const module = workFiles[path] as WorkModule | undefined;

    if (!module) {
        throw new Response("Not Found", { status: 404 });
    }

    return { 
        metadata: module.metadata,
        slug 
    };
}

export function meta({ data }: Route.MetaArgs) {
    if (!data) {
        return [{ title: "Entry Not Found | Portfolio" }];
    }

    const { metadata } = data;
    return [
        { title: `${metadata.title} | Thitiphat Portfolio` },
        { name: "description", content: metadata.shortDescription || metadata.description },
        { property: "og:title", content: metadata.title },
        { property: "og:description", content: metadata.description },
        { property: "og:image", content: metadata.previewImage },
        { name: "twitter:card", content: "summary_large_image" },
    ];
}

export default function WorkPage() {
    const data = useLoaderData<typeof clientLoader>();
    if (!data) return null;

    const { metadata, slug } = data;
    
    // Get the component for rendering
    const path = `../data/works/${slug}/content.tsx`;
    const Content = (workFiles[path] as WorkModule).default;

    return (
        <div className="py-12 px-4 space-y-12">
            <Link to="/" className="inline-block">
                <Button className="py-1 px-4 text-xs opacity-50 hover:opacity-100">← Back</Button>
            </Link>

            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-6xl font-black italic text-white uppercase tracking-tighter">
                        {metadata.title}
                    </h1>
                    <div className="grow h-px bg-white/10" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {metadata.tags.map(tag => (
                        <span key={tag} className="text-primary text-xs font-black uppercase italic border border-primary/30 px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {metadata.previewImage && (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={metadata.previewImage} alt={metadata.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xl text-white/90 font-medium italic">{metadata.shortDescription || metadata.description}</p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <article className="prose prose-invert max-w-none 
                        prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-lg
                        prose-headings:text-[var(--color-primary)] prose-headings:uppercase prose-headings:italic prose-headings:font-black
                        prose-strong:text-[var(--color-primary)]
                    ">
                         <Content />
                    </article>
                </div>

                <aside className="space-y-6">
                    <Card header={metadata.demoUrl ? "Deployment" : "Create Date"} className="sticky top-24">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <span className="text-[10px] text-white/40 uppercase font-black">Published</span>
                                <p className="text-white font-mono text-sm">{metadata.date}</p>
                            </div>
                            {metadata.demoUrl && (
                                <a href={metadata.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button className="w-full">Live Demo</Button>
                                </a>
                            )}
                            {metadata.repoUrl && (
                                <a href={metadata.repoUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button className="w-full border-white/10 hover:border-white/30 hover:bg-white/5">View Repository</Button>
                                </a>
                            )}
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
