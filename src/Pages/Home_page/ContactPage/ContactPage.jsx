// ContactPage.js

import React from 'react';

const ContactPage = () => {
    const backgroundStyle = {
        backgroundImage: `url("https://i.ibb.co/D91vPjQ/manager-verifying-validity-security-approving-600nw-2313278635.webp")`,
    };

    return (
        <div className="object-contain hover:object-scale-down bg-cover bg-center" style={backgroundStyle}>
            <div className="min-h-screen flex items-center justify-center">
                <div className="card glass w-96 p-8 shadow-md rounded-md">
                    <h2 className="text-2xl text-white text-center font-semibold mb-6">Contact Us</h2>
                    <p className="border-2 mb-2"></p>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Your name..."
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Your email..."
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
