import React from 'react';

const page = async({params}) => {
    const {Workout
    } =await params;

    return (
        <div>
           <h2>Book detail page: {Workout}</h2>
        </div>
    );
};

export default page;