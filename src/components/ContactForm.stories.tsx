import React from "react";
import ContactForm from "./ContactForm";

export default {
    title: "Forms/ContactForm",
    component: ContactForm,
};

export const Default = () => <ContactForm />;
export const Modal = () => (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-6 shadow-xl">
            <ContactForm onClose={() => alert("Closed!")} />
        </div>
    </div>
);
export const Loading = () => (
    <ContactForm />
);