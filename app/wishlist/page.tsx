import { getWishlist } from "@/actions/getWishlist";
import Select from "@/components/general/select";
import Products from "@/components/shop/products";
import { categories, price } from "@/constants/random";

const Wishlist = async () => {
  const products = await getWishlist();

  return (
    <main className="wishlist">
      <h1>Wishlist</h1>
      <section>
        <div className="filter">
          <span>Filter by:</span>
          <div>
            <Select name="category" options={categories} />
            <Select name="price" options={price} />
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
