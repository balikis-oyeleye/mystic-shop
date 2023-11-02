"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface WishlistBtnProps {
  id: string;
  isWishlist: boolean;
}

const WishlistBtn = ({ id, isWishlist }: WishlistBtnProps) => {
  const [isLoading, setOsLoading] = useState(false);
  const router = useRouter();

  const addToWishlist = () => {
    setOsLoading(true);

    axios
      .post(`/api/wishlist/${id}`)
      .then(() => {
        toast.success("Product Added to wishlist");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setOsLoading(false);
      });
  };

  const removeFromWishlist = () => {
    setOsLoading(true);

    axios
      .delete(`/api/wishlist/${id}`)
      .then(() => {
        toast.success("Product removed from wishlist");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setOsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <button className="product-item__info-wishlist" disabled={isLoading}>
          <Image src={"/loader2.gif"} width={22} height={22} alt="loader" />
        </button>
      ) : (
        <>
          {isWishlist ? (
            <button
              className="product-item__info-wishlist"
              onClick={removeFromWishlist}
              disabled={isLoading}
            >
              <AiFillHeart />
            </button>
          ) : (
            <button
              className="product-item__info-wishlist"
              onClick={addToWishlist}
              disabled={isLoading}
            >
              <AiOutlineHeart />
            </button>
          )}
        </>
      )}
    </>
  );
};

export default WishlistBtn;
