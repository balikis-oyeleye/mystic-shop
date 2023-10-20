import Image from "next/image";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image_link: string;
  };
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="product">
      <div className="product-img">
        {true ? (
          <AiFillHeart className="wishlist" />
        ) : (
          <AiOutlineHeart className="wishlist" />
        )}
        <Link href={`/shop/${product.id}`}>
          <div>
            <Image src={product.image_link} fill alt={product.name} />
          </div>
        </Link>
      </div>
      <div className="product-name">
        <Link href={`/shop/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-price">
        <span>${product.price}</span>
      </div>
      {true ? (
        <button className="btn-secondary">Add to Cart</button>
      ) : (
        <button className="btn-secondary">Remove</button>
      )}
    </div>
  );
};

export default Product;
