import React from 'react';
import PageContainer from './../components/PageContainer';

const Contact: React.FC = () => {
    return (
        <PageContainer>
            <h1 className="text-4xl font-extrabold text-[color:var(--dark-purple)] mb-2">Contact</h1>
            <p className="text-lg text-[color:var(--tw-prose-body)]">
                You can reach us at <a className="text-[color:var(--coral)] underline" href="mailto:hello@example.com">hello@example.com</a>
            </p>
        </PageContainer>
    );
};

export default Contact;
