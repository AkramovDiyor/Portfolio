import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const variants = {
    primary: 'bg-gradient-primary text-black hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,212,255,0.3)]',
    outline: 'border border-white/20 text-text-primary hover:border-accent hover:text-accent hover:-translate-y-0.5',
  };

  const classes = `px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
};

export default Button;