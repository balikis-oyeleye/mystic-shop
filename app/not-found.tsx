import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>We couldn't find that page</p>
      <Link href="/" className="btn-secondary">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
