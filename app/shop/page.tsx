import { getProducts } from "@/actions/getProducts";
import Select from "@/components/general/select";
import Products from "@/components/shop/products";
import { categories, price } from "@/constants/random";

export const metadata = {
  title: "Shop",
  description: `Shop`,
};

const Shop = async ({ searchParams }: any) => {
  const products = await getProducts(searchParams.category, searchParams.price);

  return (
    <main className="shop">
      <h1>Shop</h1>
      <section>
        <div className="filter">
          <span>Filter by:</span>
          <div>
            <Select page="shop" name="category" options={categories} />
            <Select name="price" options={price} page="shop" />
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

export default Shop;
