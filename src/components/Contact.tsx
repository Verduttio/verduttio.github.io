import React from 'react';
import { Spacer } from '@nextui-org/react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div>
            <h2>Contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaGoogle size={24} />
                    <span>bartlomiej.szwaja20@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaGithub size={24} />
                    <a href="https://github.com/Verduttio" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
            </div>
            <Spacer y={2} />
        </div>
    );
};

export default Contact;