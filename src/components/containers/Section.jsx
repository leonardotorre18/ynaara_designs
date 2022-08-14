import React from 'react';
import '../../styles/Section.scss';

export default function Section({children}) {
  return (
    <section className="section">
      {children}
    </section>
  )
};
