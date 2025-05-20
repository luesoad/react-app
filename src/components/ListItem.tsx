import React from 'react';
import { Post } from '../types/Post';
import { Link } from 'react-router-dom';

const ListItem: React.FC<Post & { image: string }> = ({ title, id, image }) => {
    return (
        <div className="w-full max-w-xs overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            <img src={image} className='w-full h-48 object-cover' alt={title} />
            <p className='m-4'> {title}</p>
            <div className='w-full rounded px-3 pb-3 pt-1.5'>
                <button className='inline-flex rounded-md bg-secondary px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none'>
                    <Link to={`/post/${id}`} className="block">
                        More
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ListItem;