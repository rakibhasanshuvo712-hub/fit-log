'use client'
import React, { useContext } from 'react';
import { bookContext } from '@/context/booksContext';
import { Workout } from "@/app/types/workout";

interface SavedButtonProps {
    workout: Workout;
}

const SavedButton = ({ workout }: SavedButtonProps) => {
    const { savedList, setSavedList } = useContext(bookContext);

    const handleSaveForLater = () => {
        if (!savedList.some((item: any) => item.id === workout.id)) {
            setSavedList([...savedList, workout]);
        }
    };

    return (
        <button 
            onClick={handleSaveForLater}
            className="flex-1 bg-[#1a1d24] text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition border border-gray-700"
        >
            Saved for later
        </button>
    );
};

export default SavedButton;