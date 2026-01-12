import { useProducts } from "../hooks/useProduct";
import Table from "../table/Table";
import type { Product } from "../interface/Product";
export default function OverviewProductList() {
  const { data } = useProducts();
  const showProducts = data?.products.slice(0, 7);
  const columns = [
    {
      id: "id",
      name:"ID",
      field: "id",
      selector: (row: Product) => row.id,
    },
        {
      id: "image",
      name:"Image",
      field: "image",
      cell: (row: Product) => (
        <img
          className="w-10 h-10 rounded-full bg-accent p-1"
          src={row.images?.[0] || ""}
          alt={row.title}
        />
      ),
    },
    {
      id: "title",
      name:"Title",
      field: "title",
      selector: (row: Product) => row.title,
    },
  ];

  return (
    <div className="">
        <h3 className="text-xl font-semibold p-2 text-left">Our Top Products</h3>
      <Table columns={columns} data={showProducts} />
    </div>

  );
}
