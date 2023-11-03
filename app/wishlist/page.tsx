import { getWishlist } from "@/actions/getWishlist";
import Select from "@/components/general/select";
import Products from "@/components/shop/products";
import { categories, price } from "@/constants/random";

export const metadata = {
  title: "Wishlist",
  description: `Wishlist`,
};

const Wishlist = async ({ searchParams }: any) => {
  const products = await getWishlist(searchParams.category, searchParams.price);

  return (
    <main className="wishlist">
      <h1>Wishlist</h1>
      <section>
        <div className="filter">
          <span>Filter by:</span>
          <div>
            <Select page="wishlist" name="category" options={categories} />
            <Select page="wishlist" name="price" options={price} />
          </div>
        </div>
        {products.length !== 0 ? (
          <>
            <Products products={products} />
          </>
        ) : (
          <>
            <div className="empty-state">
              <h1>No product</h1>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Wishlist;
