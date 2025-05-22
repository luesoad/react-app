import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import ListItem from './Card';
import useLoading from './../hooks/useLoading';
import { postApiImageUrl, postApiUrl } from '../utils/constants';
import * as Progress from '@radix-ui/react-progress';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showPosts]);

    const fetchPosts = async () => {
        setError(null);
        try {
            const response = await axios.get<Post[]>(postApiUrl);
            const postsWithImages = response.data.map(post => ({
                ...post,
                image: `${postApiImageUrl}${post.id}`
            }));
            setPosts(postsWithImages);
        } catch (err) {
            setError('Error fetching data');
        }
    };

    const loadMorePosts = async () => {
        return new Promise<void>(resolve => {
            setVisibleCount(prev => {
                const next = prev + 10;
                resolve();
                return next;
            });
        });
    };

    useEffect(() => {
        if (!showPosts) return;

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && visibleCount < posts.length && !loading) {
                    executeWithLoading(loadMorePosts);
                }
            },
            { root: null, rootMargin: '0px', threshold: 1.0 }
        );

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };
    }, [visibleCount, posts.length, loading, showPosts, executeWithLoading]);

    if (loading && visibleCount === 10)
        return (
            <div className="p-4">
                <Progress.Root className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <Progress.Indicator
                        className="h-full transition-all"
                        style={{ width: '100%' }}
                    />
                </Progress.Root>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 p-4 w-full">
                        {posts.slice(0, visibleCount).map(post => (
                            <ListItem key={post.id} {...post} image={post.image} />
                        ))}
                        {visibleCount < posts.length && (
                            <div ref={loadMoreRef} />
                        )}
                    </div>

                    {visibleCount < posts.length && !loading && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => executeWithLoading(loadMorePosts)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                disabled={loading}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default List;