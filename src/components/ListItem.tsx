import React from 'react';
import { Post } from '../types/Post';
import { Link } from 'react-router-dom';
import Button from './Button';

const ListItem: React.FC<Post & { image: string }> = ({ title, id, image }) => {
    return (
        <div className="w-full max-w-xs overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            <img src={image} className='w-full h-48 object-cover' alt={title} />
            <p className='m-4'> {title}</p>
            <div className='w-full rounded px-3 pb-3 pt-1.5'>
                <Button variant="secondary" onClick={() => { }}>
                    <Link to={`/post/${id}`} className="block text-slate-50">
                        More
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ListItem;