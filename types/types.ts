type ChildrenTypes = {
  children: React.ReactNode;
};

type ProductType = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
  imageUrl: string;
  sellerId: string;
};

type AuthenticatedType = {
  customer: {
    id: string;
    email: string | null;
    name: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    wishlistId: string[];
  } | null;
};

type CartType = {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    status: string;
    imageUrl: string;
    sellerId: string;
  };
  id: string;
  quantity: number;
  customerId: string;
  productId: string;
};
