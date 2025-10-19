import React from 'react';
import swimmingImage from '../assets/swimming.png';
import playgroundImage from '../assets/playground.png';
import classroomImage from "../assets/class.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-5 '>
            <h2 className='font-bold mb-5' >Qzone</h2>
            <div className='space-y-5  mx-15' >
                        <img src={swimmingImage} alt="" />
                        <img src={classroomImage} alt="" />
                        <img src={playgroundImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;