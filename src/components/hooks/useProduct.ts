import  {getProducts} from "../../api/products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })
} 