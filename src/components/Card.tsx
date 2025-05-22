import React from 'react';
import { Post } from '../types/Post';
import { Link } from 'react-router-dom';
import Button from './Button';

const Card: React.FC<Post & { image: string }> = ({ title, id, image }) => {
    return (
        <div
            className="
                w-full max-w-xs flex flex-col
                bg-[color:var(--nyanza)]/90
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transition-shadow duration-200
                overflow-hidden
                group
                mx-auto
            "
        >
            <img
                src={image}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                alt={title}
            />
            <div className="flex-1 flex flex-col justify-between p-4">
                <p className="text-lg font-semibold text-[color:var(--dark-purple)] mb-4">
                    {title}
                </p>
                <Button variant="secondary" onClick={() => { }}>
                    <Link to={`/post/${id}`} className="block text-slate-50">
                        More
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Card;
