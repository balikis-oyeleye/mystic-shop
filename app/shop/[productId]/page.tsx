import { getCart } from "@/actions/getCart";
import { getProductById } from "@/actions/getProductById";
import AddToCart from "@/components/button/addToCart";
import Qty from "@/components/button/qty";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ProductProps {
  params: {
    productId: string;
  };
}

const Product = async ({ params }: ProductProps) => {
  const product = (await getProductById(params.productId)) as ProductType;
  const cart = await getCart();
  const cartQty = cart.find((item) => item.productId === product.id);

  return (
    <main className="product-id">
      {product ? (
        <div className="product-item">
          <div className="product-item__img">
            <Image src={product.imageUrl} alt={product.name} fill />
          </div>
          <div className="product-item__info">
            <span className="product-item__info-category">
              {product.category}
            </span>
            <h4 className="product-item__info-name">{product.name}</h4>
            <p className="product-item__info-price">${product.price}</p>
            <p className="product-item__info-description">
              {product.description}
            </p>
            <div className="product-item__info-cta">
              <div className="product-item__info-qty">
                <Qty qty={cartQty?.quantity || 1} product={product} />
              </div>
              <button className="product-item__info-wishlist">
                {!true ? (
                  <Image
                    src={"/loader2.gif"}
                    width={30}
                    height={30}
                    alt="loader"
                  />
                ) : (
                  <>{true ? <AiFillHeart /> : <AiOutlineHeart />}</>
                )}
              </button>
            </div>
            <AddToCart product={product} className="btn-main" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Product;
