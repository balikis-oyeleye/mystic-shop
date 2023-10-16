import React from "react";

interface BadgeProps {
  text: number | string;
}

const Badge = ({ text }: BadgeProps) => {
  return <div className="badge">{text}</div>;
};

export default Badge;
