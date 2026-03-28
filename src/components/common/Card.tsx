import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, glass = false, hover = true, className = "", ...props }, ref) => {
    const baseStyles = `rounded-lg border transition-all duration-300 ${
      glass
        ? "glass"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
    }`;

    const hoverStyles = hover
      ? "hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-0.5"
      : "";

    const classes = `${baseStyles} ${hoverStyles} ${className}`;

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
