import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import ListItem from './ListItem';
import Button from './Button';

interface ListProps {
    showPosts: boolean;
}

const List: React.FC<ListProps> = ({ showPosts }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);
    const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const postApiImageUrl = 'https://picsum.photos/400/600?random=';

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
            const response = await axios.get<Post[]>(postsApiUrl);

            const postsWithImages = response.data.map((post) => ({
                ...post,
                image: `${postApiImageUrl}${post.id}&auto=format&fit=crop`,
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
                        <Button onClick={loadMorePosts} variant="primary">
                            Load More
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default List;