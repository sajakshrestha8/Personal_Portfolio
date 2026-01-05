import clsx from "clsx";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  variant: string;
  size?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: buttonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    hero: "bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105",
    glow: "bg-purple-600/10 text-purple-600 border border-purple-600/50 hover:bg-purple-600/20 hover:shadow-lg hover:shadow-purple-600/20",

    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
