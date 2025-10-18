import React from 'react';
import { FaGoogle, FaGithub  } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5'>Login With</h2>
            <div className='space-y-5 gap-3'>
                <button className='btn btn-outline btn-secondary w-full'> <FaGoogle size={24} /> Login With Google</button>
                <button className='btn btn-outline btn-primary w-full'> <FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;