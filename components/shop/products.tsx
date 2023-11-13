import Product from "./product";

interface ProductsProps {
  products: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    status: string;
    imageUrl: string;
    sellerId: string;
  }[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
