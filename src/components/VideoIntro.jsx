import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoIntro = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Show a play button if needed, but for now we hope for the best or muted
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 50,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        ref={videoRef}
        src="/new_intro.mp4"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover', // Ensures full coverage
          position: 'absolute',
          top: 0,
          left: 0
        }}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
      />
      <button
        onClick={onComplete}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: 'transparent',
          color: 'white',
          border: '1px solid white',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          opacity: 0.5
        }}
      >
        Skip
      </button>
    </motion.div>
  );
};

export default VideoIntro;
