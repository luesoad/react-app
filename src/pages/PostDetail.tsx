import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const [post, setPost] = useState<{ title: string; body: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const foundPost = response.data.find((p: { title: string }) => p.title === title);
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                setError('Error fetching post details');
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetails();
    }, [title]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="max-w-screen-md mx-auto px-4 mt-4">
            {post && (
                <>
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <p className="mt-4 text-gray-700">{post.body}</p>
                </>
            )}
        </div>
    );
};

export default PostDetail;