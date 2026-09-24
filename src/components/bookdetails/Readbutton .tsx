'use client'
import React from 'react';
import { Workout } from "@/app/types/workout";

interface ReadbuttonProps {
    workouts: Workout | null;
}

const Readbutton = ({ workouts }: ReadbuttonProps) => {
    const handleReadClick = () => {
        console.log("Workout details action triggered", workouts);
    };

    return (
        <button 
            onClick={handleReadClick}
            className="flex-1 bg-[#1a1d24] text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition border border-gray-700"
        >
            Workout Info
        </button>
    );
};

export default Readbutton;