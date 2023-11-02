import Image from "next/image";
import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

interface CartItemProps {
  quantity: number;

  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    status: string;
    imageUrl: string;
    sellerId: string;
  };
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="items">
        <div>
          <Image
            src={product.imageUrl}
            width={80}
            height={60}
            alt={product.name}
          />
          <div>
            <p>{product.name}</p>
            <span>${product.price * quantity}</span>
            <div className="btn">
              <button disabled={isLoading}>
                <BsDash onclick={() => {}} />
              </button>
              <span>
                {isLoading ? (
                  <Image
                    src="/loader2.gif"
                    height={20}
                    width={20}
                    alt="loading"
                  />
                ) : (
                  <>{quantity}</>
                )}
              </span>
              <button disabled={isLoading}>
                <BsPlus onclick={() => {}} />
              </button>
            </div>
          </div>
        </div>
        <button className="btn-primary">Remove</button>
      </div>
    </>
  );
};

export default CartItem;
