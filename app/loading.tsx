import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="loading-page">
      <Image alt="loader" src="/loader2.gif" height={50} width={50} />
    </div>
  );
};

export default Loading;
