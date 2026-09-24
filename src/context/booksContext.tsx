'use client'
import React, { createContext, useState } from 'react';

export const bookContext = createContext<any>(null);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [savedList, setSavedList] = useState<any[]>([]);
    const [readBooks, setReadBooks] = useState<any[]>([]);

    const sharedData = {
        wishlist,
        setWishlist,
        savedList,
        setSavedList,
        readBooks,
        setReadBooks,
    };

    return (
        <bookContext.Provider value={sharedData}>
            {children}
        </bookContext.Provider>
    );
};