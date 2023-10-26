import { getProductById } from "@/actions/getProductById";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";

interface ProductProps {
  params: {
    productId: string;
  };
}

const Product = async ({ params }: ProductProps) => {
  const product = (await getProductById(params.productId)) as ProductType;

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
                <button>
                  <BsDash />
                </button>
                <span>{1}</span>
                <button>
                  <BsPlus />
                </button>
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
            <button className="btn-main">
              {!true ? (
                <Image
                  src={"/loader.gif"}
                  width={30}
                  height={30}
                  alt="loader"
                />
              ) : (
                <span>Add to Cart</span>
              )}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Product;
