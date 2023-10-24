interface BadgeProps {
  text: number | string;
}

const Badge = ({ text }: BadgeProps) => {
  return <span className="badge">{text}</span>;
};

export default Badge;
