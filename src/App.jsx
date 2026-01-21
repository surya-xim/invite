import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import VideoIntro from './components/VideoIntro';
import InvitationCard from './components/InvitationCard';
import DesktopBlocker from './components/DesktopBlocker';
import './App.css';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      // Check if width is less than 768px (standard tablet/mobile break)
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return <DesktopBlocker />;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence>
        {!introFinished ? (
          <VideoIntro key="intro" onComplete={() => setIntroFinished(true)} />
        ) : (
          <InvitationCard key="card" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
