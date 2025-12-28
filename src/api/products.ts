import axiosInstance from "./AxiosInstance";
import type { ProductResponse } from "../components/interface/Product";

export const getProducts = async (): Promise<ProductResponse> => {
    const response = await axiosInstance.get("/products");
    return response.data;
}