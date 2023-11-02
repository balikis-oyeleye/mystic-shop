import Image from "next/image";
import Qty from "../button/qty";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CartItemProps {
  quantity: number;
  id: string;

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

const CartItem = ({ product, quantity, id }: CartItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const removeFromCart = () => {
    setIsLoading(true);

    axios
      .delete(`/api/cart/remove/${id}`)
      .then(() => {
        toast.success("Product removed from cart");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went Wrong");
      })
      .finally(() => setIsLoading(false));
  };

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
              <Qty qty={quantity} product={product} />
            </div>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="btn-primary"
          onClick={removeFromCart}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
