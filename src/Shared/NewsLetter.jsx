import { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {

        console.log(`Subscribed email: ${email}`);
        setSubscribed(true);
    };

    return (
        <div className="bg-gray-100">


            <div className=" p-8 max-w-md mx-auto rounded-md ">
                <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>

                {subscribed ? (
                    <p className="text-green-600">Thank you for subscribing!</p>
                ) : (
                    <>
                        <p className="mb-4">
                            Stay up-to-date with our latest news and updates. Subscribe to our newsletter.
                        </p>

                        <div className="flex items-center mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                Subscribe
                            </button>
                        </div>

                        {/* Add privacy policy and terms */}
                        <p className="text-sm text-gray-600">
                            By subscribing, you agree to our{' '}
                            <a href="#" className="text-blue-500">
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-blue-500">
                                Terms of Service
                            </a>
                            .
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsLetter;
