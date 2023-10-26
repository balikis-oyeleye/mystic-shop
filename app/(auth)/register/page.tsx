import getCustomer from "@/actions/getCustomer";
import RegisterClient from "./registerClient";
import Authenticated from "@/components/general/authenticated";

const Register = async () => {
  const customer = await getCustomer();

  return (
    <main className="register">
      <h1>{customer ? "My Account" : "Create an Account"} </h1>
      {customer ? <Authenticated customer={customer} /> : <RegisterClient />}
    </main>
  );
};

export default Register;
