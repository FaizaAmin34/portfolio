// SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 
                  py-10 sm:py-14 md:py-16 lg:py-20 
                  ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
