import { XCircle } from "lucide-react";

const Window = ({ close, children, title }) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-800 w-[80%] md:w-[60%] lg:w-1/2 overflow-y-auto h-max max-h-[90dvh] bg-gray-950 shadow-lg">
      <h1 className="sticky top-0 left-0 bg-gray-900 border-b border-gray-800 flex justify-between items-center p-2 text-sm ">
        {title}{" "}
        <XCircle
          className="cursor-pointer text-teal-400 hover:text-teal-600"
          onClick={() => close(false)}
        />
      </h1>
      <div className="p-4 ">{children}</div>
    </div>
  );
};

export default Window;
