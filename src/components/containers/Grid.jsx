import React from 'react';
import '../../styles/Grid.scss';

export default function Grid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}
