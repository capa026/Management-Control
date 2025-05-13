import { TriangleAlert } from "lucide-react";

const InputError = ({ error }) => {
  return (
    <span className="text-xs text-red-700 -mt-3 pl-2 flex items-center gap-1">
      <TriangleAlert size={16} />
      {error}
    </span>
  );
};

export default InputError;
