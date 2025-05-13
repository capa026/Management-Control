import ReactQueryProvider from "../ReactQueryProvider";
import GetAll from "./GetAll";

const CostStructure = () => {
  return (
    <ReactQueryProvider>
      <GetAll />
    </ReactQueryProvider>
  );
};

export default CostStructure;
