import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Button from '~/components/button'
import Card from '~/components/card'

const workFiles = import.meta.glob('../../data/works/*.tsx', { eager: true });

interface WorkModule {
    metadata: {
        title: string;
        tags: string[];
        description: string;
        shortDescription?: string;
        previewImage?: string;
        demoUrl?: string;
        date: string;
    };
    default: React.ComponentType;
}

const Home = () => {
    const [activeTag, setActiveTag] = useState('All');
    const [works, setWorks] = useState<{ id: string, data: WorkModule }[]>([]);

    useEffect(() => {
        const loadedWorks = Object.entries(workFiles).map(([path, module]) => ({
            id: path.split('/').pop()?.replace('.tsx', '') || path,
            data: module as WorkModule
        }));
        loadedWorks.sort((a, b) => new Date(b.data.metadata.date).getTime() - new Date(a.data.metadata.date).getTime());
        setWorks(loadedWorks);
    }, []);

    const allTags = ['All', ...new Set(works.flatMap(w => w.data.metadata.tags))];

    const filteredWorks = activeTag === 'All' 
        ? works 
        : works.filter(w => w.data.metadata.tags.includes(activeTag));

    return (
        <div className="flex flex-col items-center min-h-screen gap-12 py-20 px-4">
            {/* Hero Section */}
            <div className='text-center space-y-4'>
                <h1 className="text-7xl font-black italic text-white uppercase tracking-tighter">
                    Port<span className="text-[#CCFF00]">Folio</span>
                </h1>
                <div className="flex flex-col items-center">
                    <span className='text-xl font-black italic text-white/50 uppercase tracking-widest'>Thitiphat Kunrong</span>
                    <div className="h-1 w-20 bg-[#CCFF00] mt-2 skew-x-[-20deg]" />
                </div>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                {allTags.map(tag => (
                    <Button 
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`px-4 py-1 text-sm ${activeTag === tag ? 'scale-105 shadow-[0_0_15px_rgba(204,255,0,0.3)]' : 'opacity-60 hover:opacity-100'}`}
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {filteredWorks.map(({ id, data }) => (
                    <Link key={id} to={`/work/${id}`} className="block group">
                        <Card
                            header={data.metadata.title}
                            image={data.metadata.previewImage}
                            footer={data.metadata.tags.join(' • ')}
                            className="h-full transition-transform duration-300 group-hover:scale-[1.02] group-hover:border-[#CCFF00]/30"
                        >
                            <div className="space-y-2">
                                <p className="text-lg text-white font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#CCFF00] transition-colors">
                                    {data.metadata.shortDescription || data.metadata.title}
                                </p>
                                <p className="text-sm text-white/60 line-clamp-2">
                                    {data.metadata.description}
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            {filteredWorks.length === 0 && (
                <div className="text-white/20 italic uppercase font-black text-2xl py-20">
                    No data found in this hollow...
                </div>
            )}
        </div>
    )
}

export default Home
