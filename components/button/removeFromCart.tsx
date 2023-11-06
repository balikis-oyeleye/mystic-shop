import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RemoveFromCart = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const removeFromCart = () => {
    setIsLoading(true);

    axios
      .delete(`/api/cart/remove/${id}`)
      .then(() => {
        toast.success("Product removed from cart");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went Wrong");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      className="btn-primary"
      onClick={removeFromCart}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;
