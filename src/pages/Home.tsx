import React, { useState } from 'react';
import List from './../components/List';
import Button from './../components/Button';
import useLoading from './../hooks/useLoading';

const Home: React.FC = () => {
    const [showPosts, setShowPosts] = useState(false);
    const { loading, executeWithLoading } = useLoading();
    const handleButtonClick = () => {
        executeWithLoading(async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            setShowPosts(prev => !prev);
        });
    };

    return (
        <div className="max-w-screen-md mx-auto px-4 mt-4">
            <h1 className="text-3xl font-bold">Hello world!</h1>
            <Button
                onClick={handleButtonClick}
                variant="primary"
                className="font-bold py-2 px-4 rounded-full cursor-pointer"
                loading={loading}
            >
                {showPosts ? 'Hide Posts' : 'Load Posts'}
            </Button>
            <List showPosts={showPosts} />
        </div>
    );
};

export default Home;
