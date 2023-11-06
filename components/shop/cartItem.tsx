import Image from "next/image";
import Qty from "../button/qty";
import RemoveFromCart from "../button/removeFromCart";

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
        <RemoveFromCart id={id} />
      </div>
    </>
  );
};

export default CartItem;
