import ReactQueryProvider from "../ReactQueryProvider";
import GetAll from "./GetAll";

const Invoices = () => {
  return (
    <ReactQueryProvider>
      <GetAll />
    </ReactQueryProvider>
  );
};
export default Invoices;
