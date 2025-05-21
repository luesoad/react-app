import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import ListItem from './ListItem';

interface ListProps {
    showPosts: boolean;
}

const List: React.FC<ListProps> = ({ showPosts }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        if (showPosts) {
            fetchPosts();
        } else {
            setPosts([]);
            setVisibleCount(10);
        }
    }, [showPosts]);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

            const postsWithImages = response.data.map((post) => ({
                ...post,
                image: `https://picsum.photos/400/600?random=${post.id}&auto=format&fit=crop`,
            }));
            setPosts(postsWithImages);
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    const loadMorePosts = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='mt-4'>
            {showPosts && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {posts.slice(0, visibleCount).map(post => (
                            <ListItem key={post.id} {...post} image={post.image} />
                        ))}
                    </div>
                    {visibleCount < posts.length && (
                        <button
                            onClick={loadMorePosts}
                            className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                        >
                            Load More
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default List;