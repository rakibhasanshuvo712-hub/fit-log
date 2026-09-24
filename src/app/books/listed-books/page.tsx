'use client'
import React, { useContext, useState } from 'react';
import { bookContext } from '@/context/booksContext';
import Link from 'next/link';
import Image from 'next/image';

const ListedBooksPage = () => {
    const { wishlist, setWishlist, savedList, setSavedList } = useContext(bookContext);
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [sortBy, setSortBy] = useState<'duration' | 'calories'>('duration');

    const currentList = activeTab === 'today' ? wishlist : savedList;

    const handleRemove = (id: number, type: 'today' | 'saved') => {
        if (type === 'today') {
            setWishlist(wishlist.filter((item: any) => item.id !== id));
        } else {
            setSavedList(savedList.filter((item: any) => item.id !== id));
        }
    };

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') return (a.duration || 0) - (b.duration || 0);
        return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
    });

    const totalMinutes = currentList.reduce((acc: number, curr: any) => acc + (curr.duration || 0), 0);
    const totalCalories = currentList.reduce((acc: number, curr: any) => acc + (curr.caloriesBurned || 0), 0);

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="bg-[#1a1d24] p-6 rounded-xl">
                    <h1 className="text-3xl font-bold uppercase">MY PLAN</h1>
                    <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#1a1d24] p-6 rounded-xl">
                        <p className="text-gray-400 text-sm uppercase">Exercises</p>
                        <p className="text-4xl font-bold text-lime-400">{currentList.length}</p>
                    </div>
                    <div className="bg-[#1a1d24] p-6 rounded-xl">
                        <p className="text-gray-400 text-sm uppercase">Minutes</p>
                        <p className="text-4xl font-bold text-white">{totalMinutes}</p>
                    </div>
                    <div className="bg-[#1a1d24] p-6 rounded-xl">
                        <p className="text-gray-400 text-sm uppercase">Calories</p>
                        <p className="text-4xl font-bold text-white">{totalCalories}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center bg-[#1a1d24] px-6 py-4 rounded-xl">
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setActiveTab('today')}
                            className={`px-4 py-2 rounded-lg font-bold text-sm transition ${activeTab === 'today' ? 'bg-[#2a2e39] text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            Today's Plan
                        </button>
                        <button 
                            onClick={() => setActiveTab('saved')}
                            className={`px-4 py-2 rounded-lg font-bold text-sm transition ${activeTab === 'saved' ? 'bg-[#2a2e39] text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            Saved
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Sort By</span>
                        <select 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="bg-[#1a1d24] border border-gray-700 text-white px-3 py-1.5 rounded-lg focus:outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    {sortedList.length === 0 ? (
                        <div className="bg-[#1a1d24] p-8 rounded-xl text-center space-y-4">
                            <h3 className="text-2xl font-bold uppercase">NOTHING HERE YET</h3>
                            <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
                            <Link href="/" className="inline-block bg-lime-400 text-black font-bold px-6 py-3 rounded-lg">
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        sortedList.map((item: any) => (
                            <div key={item.id} className="bg-[#1a1d24] p-4 rounded-xl flex items-center justify-between gap-4 border border-gray-800">
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={item.image} 
                                        alt={item.name} 
                                        width={80} 
                                        height={80} 
                                        className="rounded-lg object-cover w-20 h-20"
                                    />
                                    <div>
                                        <h3 className="font-bold uppercase text-lg">{item.name}</h3>
                                        <p className="text-xs text-gray-400 uppercase">{item.equipment}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                                            <span>⏱ {item.duration} min</span>
                                            <span>🔥 {item.caloriesBurned} kcal</span>
                                            <span>⭐ {item.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href={`/books/${item.id}`}
                                        className="bg-[#2a2e39] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition"
                                    >
                                        View Details
                                    </Link>
                                    {activeTab === 'today' && (
                                        <button className="bg-lime-400 text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-lime-500 transition">
                                            ✓ Mark as Done
                                        </button>
                                    )}
                                    <button 
                                        onClick={() => handleRemove(item.id, activeTab)}
                                        className="text-gray-400 hover:text-red-500 p-2 font-bold text-lg"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;