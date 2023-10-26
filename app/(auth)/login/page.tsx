import getCustomer from "@/actions/getCustomer";
import LoginClient from "./loginClient";
import Authenticated from "@/components/general/authenticated";

const page = async () => {
  const customer = await getCustomer();

  return (
    <main className="login">
      <h1>{customer ? "My Account" : "Login to Account"} </h1>
      {customer ? <Authenticated customer={customer} /> : <LoginClient />}
    </main>
  );
};

export default page;
