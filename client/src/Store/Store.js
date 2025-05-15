import { create } from "zustand";
import { updateStructure as updateRequest } from "../API/costStructure";

export const useUpdateCostStructureStore = create((set) => ({
  loading: false,
  error: null,
  status: null,
  updateStructure: async (data) => {
    set({ loading: true });
    const response = await updateRequest(data);
    set({ status: response.status });
  },
  resetStatus: () => set({ status: null, loading: false }),
}));
