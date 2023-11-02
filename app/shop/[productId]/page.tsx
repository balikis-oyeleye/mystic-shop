import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import { getProductById } from "@/actions/getProductById";
import AddToCart from "@/components/button/addToCart";
import Qty from "@/components/button/qty";
import WishlistBtn from "@/components/button/wishlist";
import Image from "next/image";

interface ProductProps {
  params: {
    productId: string;
  };
}

const Product = async ({ params }: ProductProps) => {
  const product = (await getProductById(params.productId)) as ProductType;
  const cart = await getCart();
  const cartQty = cart.find((item) => item.productId === product.id);
  const customer = await getCustomer();

  const isWishlist = customer?.wishlistId.some((item) => item === product.id);

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

              <WishlistBtn id={product.id} isWishlist={isWishlist || false} />
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
