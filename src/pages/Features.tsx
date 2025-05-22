import React from 'react';
import PageContainer from '../components/PageContainer';

const Features: React.FC = () => {
    return (
        <PageContainer>
            <h1 className="text-4xl font-extrabold text-[color:var(--dark-purple)] mb-4">
                Features Page
            </h1>
            <p className="text-lg text-[color:var(--tw-prose-body)]">
                Discover all the amazing features of this React playground!
            </p>
        </PageContainer>
    );
};

export default Features;
