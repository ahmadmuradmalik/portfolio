import React, { useEffect, useRef } from 'react';
import katex from 'katex';

const LaTeX = ({ children }) => {
  const outputRef = useRef();

  useEffect(() => {
    console.log("omg");
    if (outputRef.current) {
      try {
        katex.render(children, outputRef.current);
      } catch (e) {
        console.error("Failed to render LaTeX:", e.message);
      }
    }
  }, [children]);

  return <span className="latex-component"ref={outputRef} />;
};

export default LaTeX;
