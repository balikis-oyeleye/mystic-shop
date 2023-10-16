"use client";

import { useState, useEffect } from "react";

// components for fixing hydration errors
const Client = ({ children }: ChildrenTypes) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default Client;
