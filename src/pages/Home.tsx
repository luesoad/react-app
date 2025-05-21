import React, { useState } from 'react';
import List from './../components/List';

const Home: React.FC = () => {
    const [showPosts, setShowPosts] = useState(false);

    const handleButtonClick = () => {
        setShowPosts(prev => !prev);
    };

    return (
        <div className="max-w-screen-md mx-auto px-4 mt-4">
            <h1 className="text-3xl font-bold">Hello world!</h1>
            <button
                onClick={handleButtonClick}
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full cursor-pointer"
            >
                {showPosts ? 'Hide Posts' : 'Load Posts'}
            </button>
            <List showPosts={showPosts} />
        </div>
    );
};

export default Home;
