import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { BsDash, BsPlus } from "react-icons/bs";

interface CartItemProps {
  product: {
    id: string;
    product: any;
    customerId: string;
    quantity: number;
  };
}

const CartItem = ({ product }: CartItemProps) => {
  console.log(product);
  return (
    <>
      <div className="items">
        <Image src={product.product.imageUrl} width={80} height={60} alt="p" />
        <div>
          <p>{product.product.name}</p>
          <span>${product.product.price}</span>
          <div className="btn">
            <button>
              <BsDash />
            </button>
            <span>{product.quantity}</span>
            <button>
              <BsPlus />
            </button>
          </div>
        </div>
        <button className="btn-primary">Remove</button>
      </div>
    </>
  );
};

export default CartItem;
