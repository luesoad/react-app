import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import ListItem from './Card';
import Button from './Button';
import useLoading from './../hooks/useLoading';
import { postApiImageUrl, postApiUrl } from '../utils/constants';

interface ListProps {
    showPosts: boolean;
}

const List: React.FC<ListProps> = ({ showPosts }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);
    const { loading, executeWithLoading } = useLoading();
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (showPosts) {
            fetchPosts();
        } else {
            setPosts([]);
            setVisibleCount(10);
        }
        // eslint-disable-next-line
    }, [showPosts]);

    const fetchPosts = async () => {
        setError(null);
        try {
            const response = await axios.get<Post[]>(`${postApiUrl}`);
            const postsWithImages = response.data.map((post) => ({
                ...post,
                image: `${postApiImageUrl}${post.id}`,
            }));
            setPosts(postsWithImages);
        } catch (err) {
            setError('Error fetching data');
        }
    };

    // Funktion zum Laden weiterer Cards
    const loadMorePosts = async () => {
        return new Promise<void>((resolve) => {
            setVisibleCount(prevCount => {
                const newCount = prevCount + 10;
                resolve();
                return newCount;
            });
        });
    };

    // Intersection Observer für Auto-Loading beim Scrollen
    useEffect(() => {
        if (!showPosts) return;

        const observer = new window.IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visibleCount < posts.length && !loading) {
                    executeWithLoading(loadMorePosts);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
        // eslint-disable-next-line
    }, [visibleCount, posts.length, loading, showPosts]);

    if (loading && visibleCount === 10)
        return (
            <div className="flex justify-center items-center py-8">
                <span className="text-lg text-[color:var(--primary)] font-semibold animate-pulse">Loading...</span>
            </div>
        );
    if (error)
        return (
            <div className="flex justify-center items-center py-8">
                <span className="text-lg text-red-600 font-semibold">{error}</span>
            </div>
        );

    return (
        <div className="mt-8">
            {showPosts && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {posts.slice(0, visibleCount).map(post => (
                            <ListItem key={post.id} {...post} image={post.image} />
                        ))}
                    </div>
                    {visibleCount < posts.length && (
                        <div ref={loadMoreRef} className="flex justify-center mt-8">
                            <Button variant="primary" loading={loading}>
                                Loading more...
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default List;
