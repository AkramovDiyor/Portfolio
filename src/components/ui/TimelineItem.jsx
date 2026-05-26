import React from 'react';

const TimelineItem = ({ date, title, company, description }) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0 group">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(0,212,255,0.5)]"></div>
      <div className="text-accent text-sm font-semibold mb-1">{date}</div>
      <h3 className="text-xl font-bold mb-0.5">{title}</h3>
      <div className="text-text-secondary text-sm mb-2">{company}</div>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
};

export default TimelineItem;