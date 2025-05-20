import React from 'react';
import { Post } from '../types/Post';

const ListItem: React.FC<Post> = ({ title, body }) => {
    return (
        <div className="bg-blue-100 shadow-md rounded-lg p-4 m-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{body}</p>
        </div>
    );
};

export default ListItem;