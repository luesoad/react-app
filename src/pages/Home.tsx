import React from 'react';
import List from './../components/List';

const Home: React.FC = () => {
    return <>
        <div className="max-w-screen-md mx-auto px-4 mt-4">
            <h1 className="text-3xl font-bold">Hello world!</h1>
            <List />
        </div>
    </>;
};

export default Home;