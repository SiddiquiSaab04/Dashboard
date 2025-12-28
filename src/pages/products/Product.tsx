import { useProducts } from "../../components/hooks/useProduct";
const Product = () => {
    const {data } = useProducts();
    console.log(data);
  return (
    <>
    <p>Product</p>
    </>
    
  )
}

export default Product