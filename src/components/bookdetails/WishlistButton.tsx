'use client'
import { bookContext } from '@/context/booksContext';
import React, { useContext } from 'react';

const WishlistButton = ({ workouts }: { workouts: any }) => {
    const { wishlist, setWishlist } = useContext(bookContext);
    
    const handleAddtoWishList = () => {
        console.log("read book triggered", workouts);
        setWishlist([...wishlist, workouts]);
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