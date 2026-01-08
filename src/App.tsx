import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EntryPortal from './components/EntryPortal';
import StarryBackground from './components/StarryBackground';
import AudioToggle from './components/AudioToggle';
import HiddenTreasure from './components/HiddenTreasure';
import MemoriesGallery from './components/MemoriesGallery';
import Timeline from './components/Timeline';
import LettersChamber from './components/LettersChamber';
import SecretSection from './components/SecretSection';
import FinalReveal from './components/FinalReveal';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarryBackground />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryPortal onEnter={() => setHasEntered(true)} />
        ) : (
          <>
            <AudioToggle />

            <div className="relative z-10">
              <HiddenTreasure />
              <MemoriesGallery />
              <Timeline />
              <LettersChamber />
              <SecretSection />
              <FinalReveal />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
