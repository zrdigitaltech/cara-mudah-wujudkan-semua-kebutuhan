import React, { useEffect } from 'react';
import { ChevronRight } from 'react-feather';

const Index = (props) => {
  const { querySelector, scrollContainerRef, setShowScrollIcon, style, setIsLargeScreen } = props;

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollIcon(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const fetchHandleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize state
    }

    return () => container && container.removeEventListener('scroll', handleScroll);
  };

  const handleResize = () => {
    if (setIsLargeScreen) {
      setIsLargeScreen(window.innerWidth <= 768);
    }
  };

  const feetchHandleResize = () => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Clean up
  };

  useEffect(() => {
    fetchHandleScroll();
    feetchHandleResize();
  }, []);

  return (
    <div
      className="scroll-icon"
      style={{
        position: 'absolute',
        right: '10px',
        top: '35%',
        transform: 'translateY(-35%)',
        cursor: 'pointer',
        backgroundColor: '#6952fe',
        color: '#fff',
        height: '44px',
        borderRadius: '8px',
        zIndex: 2,
        ...style
      }}
      onClick={() =>
        document.querySelector(querySelector).scrollBy({ left: 200, behavior: 'smooth' })
      }
    >
      <ChevronRight size={44} />
    </div>
  );
};

export default Index;
