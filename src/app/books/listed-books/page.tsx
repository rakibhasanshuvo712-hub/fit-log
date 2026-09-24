'use client'
import React, { useContext } from 'react';
import { bookContext } from '@/context/booksContext';
import Link from 'next/link';

const ListedBooksPage = () => {
    const { wishlist } = useContext(bookContext);

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
                        <p className="text-4xl font-bold text-lime-400">{wishlist?.length || 0}</p>
                    </div>
                    <div className="bg-[#1a1d24] p-6 rounded-xl">
                        <p className="text-gray-400 text-sm uppercase">Minutes</p>
                        <p className="text-4xl font-bold text-white">
                            {wishlist?.reduce((acc: number, curr: any) => acc + (curr.duration || 0), 0)}
                        </p>
                    </div>
                    <div className="bg-[#1a1d24] p-6 rounded-xl">
                        <p className="text-gray-400 text-sm uppercase">Calories</p>
                        <p className="text-4xl font-bold text-white">
                            {wishlist?.reduce((acc: number, curr: any) => acc + (curr.caloriesBurned || 0), 0)}
                        </p>
                    </div>
                </div>

                <div className="bg-[#1a1d24] p-8 rounded-xl text-center space-y-4">
                    {(!wishlist || wishlist.length === 0) ? (
                        <>
                            <h3 className="text-2xl font-bold uppercase">NOTHING HERE YET</h3>
                            <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
                            <Link href="/" className="inline-block bg-lime-400 text-black font-bold px-6 py-3 rounded-lg">
                                Go to workouts
                            </Link>
                        </>
                    ) : (
                        <div className="text-left space-y-4">
                            <h3 className="text-xl font-bold uppercase">Planned Workouts</h3>
                            {wishlist.map((item: any, index: number) => (
                                <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2">
                                    <span>{item.name}</span>
                                    <span className="text-lime-400">{item.duration} min</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;