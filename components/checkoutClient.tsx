"use client";
import Image from "next/image";
import RemoveFromCart from "./button/removeFromCart";
import Qty from "./button/qty";

interface CartClientProps {
  cart: {
    id: string;
    quantity: number;
    customerId: string;
    productId: string;
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
  }[];
}

const CheckoutClient = ({ cart }: CartClientProps) => {
  return (
    <div className="checkout-client">
      {cart.length > 0 ? (
        <>
          <div className="body">
            {cart.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.product.imageUrl}
                  width={80}
                  height={60}
                  alt={item.product.name}
                />
                <div>
                  <p>{item.product.name}</p>
                  <RemoveFromCart id={item.id} />
                </div>
                <div>
                  <span>${item.product.price * item.quantity}</span>
                  <div className="btn">
                    <Qty qty={item.quantity} product={item.product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CheckoutClient;
