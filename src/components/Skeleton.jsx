import React from 'react';

export default function Skeleton({ lines = 3 }) {
  return (
    <div className="skeleton-card" aria-hidden>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeleton skeleton-row" style={{ width: `${80 - i * 10}%` }} />
      ))}
    </div>
  );
}
