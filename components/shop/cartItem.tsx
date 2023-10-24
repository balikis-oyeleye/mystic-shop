import Image from "next/image";
import Link from "next/link";
import { BsDash, BsPlus } from "react-icons/bs";

const CartItem = () => {
  return (
    <>
      <div className="items">
        <Image src={"/pr.webp"} width={80} height={80} alt="p" />
        <div>
          <p>Cool PR</p>
          <span>$181</span>
          <div className="btn">
            <button>
              <BsDash />
            </button>
            <span>5</span>
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
