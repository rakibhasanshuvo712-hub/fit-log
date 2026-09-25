'use client'
import { bookContext } from '@/context/booksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ workouts }: { workouts: any }) => {
    const { wishlist, setWishlist } = useContext(bookContext);

    const handleAddtoWishList = () => {
        const isAlreadyExists = wishlist.some((item: any) => item.id === workouts.id);
        
        if (isAlreadyExists) {
            toast.warn("This workout is already in your plan!");
            return;
        }

        setWishlist([...wishlist, workouts]);
        toast.success("Added to today's plan successfully!");
    };

    return (
        <button 
            className="flex-1 bg-lime-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-500 transition" 
            onClick={handleAddtoWishList}
        >
            + Add to today's plan
        </button>
    );
};

export default WishlistButton;