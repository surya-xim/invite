import React from 'react';
import { motion } from 'framer-motion';

const DesktopBlocker = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden'
        }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ fontSize: '5rem', display: 'block', marginBottom: '20px' }}
                >
                    📱
                </motion.div>

                <h1 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: 'bold' }}>Mobile Only Experience</h1>
                <p style={{ fontSize: '1.1rem', color: '#e0e0e0', maxWidth: '450px', lineHeight: '1.6' }}>
                    This invitation is engineered for the palm of your hand. <br />
                    Please access this link on your mobile device for the full experience.
                </p>
            </motion.div>
        </div>
    );
};

export default DesktopBlocker;
