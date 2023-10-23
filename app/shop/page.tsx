import { getProducts } from "@/actions/getProducts";
import Select from "@/components/general/select";
import Products from "@/components/shop/products";
import { categories, price } from "@/constants/random";

const Shop = async () => {
  const products = await getProducts();

  return (
    <main className="shop">
      <h1>Shop</h1>
      <section>
        {products.length !== 0 ? (
          <>
            <div className="filter">
              <span>Filter by:</span>
              <div>
                <Select
                  defaultValue="categories"
                  name="categories"
                  options={categories}
                />
                <Select defaultValue="price" name="price" options={price} />
              </div>
            </div>
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
