import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import { getProductById } from "@/actions/getProductById";
import AddToCart from "@/components/button/addToCart";
import Qty from "@/components/button/qty";
import WishlistBtn from "@/components/button/wishlist";
import { siteMetadata } from "@/utils/metadata";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
  const product = (await getProductById(params.productId)) as ProductType;

  if (!product) {
    return;
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: siteMetadata.siteUrl + product.id,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      images: [product.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

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
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
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
