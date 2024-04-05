export const handleMouseDown = (contentRef, setIsDragging, setStartY, setScrollTopStart) => (event) => {
    setIsDragging(true);
    setStartY(event.pageY - contentRef.current.offsetTop);
    setScrollTopStart(contentRef.current.scrollTop);
  };
  
  export const handleMouseMove = (contentRef, isDragging, startY, scrollTopStart) => (event) => {
    if (!isDragging) return;
    const y = event.pageY - contentRef.current.offsetTop;
    const walk = (y - startY) * 1.6; // Hızlı kaydırma için bir katsayı
    contentRef.current.scrollTop = scrollTopStart - walk; 
  };
  
  export const handleMouseUp = (setIsDragging) => () => {
    setIsDragging(false);
  };
  