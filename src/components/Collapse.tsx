import React, { useState } from 'react';

const Collapsible = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleVisibility} className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {isVisible ? '↓' : '→'} {/* Visual indicator: arrow down for open, arrow right for closed */}
        <span className="ml-2">{title}</span>
      </button>
      {isVisible && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible