import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import ListItem from './ListItem';
import Button from './Button';
import useLoading from './../hooks/useLoading';

interface ListProps {
    showPosts: boolean;
}

const List: React.FC<ListProps> = ({ showPosts }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);
    const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const postApiImageUrl = 'https://picsum.photos/400/600?random=';
    const { loading, executeWithLoading } = useLoading();

    useEffect(() => {
        if (showPosts) {
            fetchPosts();
        } else {
            setPosts([]);
            setVisibleCount(10);
        }
    }, [showPosts]);

    const fetchPosts = async () => {
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
        }
    };

    const loadMorePosts = async () => {
        return new Promise<void>((resolve) => {
            setVisibleCount(prevCount => {
                const newCount = prevCount + 10;
                resolve();
                return newCount;
            });
        });
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
                        <Button
                            onClick={() => executeWithLoading(loadMorePosts)}
                            variant="primary"
                            loading={loading}
                        >
                            Load More
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default List;