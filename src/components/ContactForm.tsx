import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Text } from "@radix-ui/themes";
import Button from "./Button";
import InputField from "./form/InputField";
import TextareaField from "./form/TextareaField";
import { ContactFormValues, FormErrors } from "../types/form";
import { validateContactForm } from "../utils/validateContactForm";

const initialValues: ContactFormValues = {
    name: "",
    email: "",
    message: "",
};

const ContactForm: React.FC = () => {
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateContactForm(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        setLoading(true);
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 1200);
    };

    return (
        <Box
            className="w-full p-8 rounded-2xl shadow-lg"
            style={{
                background: "var(--nyanza)",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
            }}
        >
            {submitted ? (
                <div className="flex flex-col py-16">
                    <Text
                        as="h2"
                        size="5"
                        weight="bold"
                        style={{ color: "var(--dark-purple)" }}

                    >
                        Thank you!
                    </Text>
                    <Text color="green" size="4">
                        Thank you for your message!
                    </Text>
                </div>
            ) : (
                <>
                    <Text
                        as="h2"
                        size="5"
                        weight="bold"
                        mb="6"
                        style={{ color: "var(--dark-purple)" }}
                        className="mb-6"
                    >
                        Contact Us
                    </Text>
                    <form onSubmit={handleSubmit} noValidate>
                        <InputField
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            required
                            value={values.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <InputField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            required
                            value={values.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextareaField
                            id="message"
                            name="message"
                            label="Message"
                            required
                            value={values.message}
                            onChange={handleChange}
                            error={errors.message}
                        />
                        <Button type="submit" variant="primary" loading={loading} className="w-full">
                            Send Message
                        </Button>
                    </form>
                </>
            )}
        </Box>
    );
};

export default ContactForm;
