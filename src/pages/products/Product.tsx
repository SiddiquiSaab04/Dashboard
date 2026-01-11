import PageTitle from "../../components/title/PageTitle";
import Template from "../../components/layout/Template";
import { useProducts } from "../../components/hooks/useProduct";
import type { Product } from "../../components/interface/Product";
import Table from "../../components/table/Table";
import type { TableColumn } from "react-data-table-component";
export const Products = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  const columns: TableColumn<Product>[] = [
    {
      id: "id",
      name: "ID",
      selector: (row: Product) => row.id,
      sortable: false,
    },
    {
      id: "images",
      name: "Image",
      selector: (row: Product) => row.images?.[0] || "",
      cell: (row: Product) => (
        <div className="py-2">
          {row.images?.[0] ? (
            <img
              src={row.images[0]}
              alt={row.title}
              className="w-12 h-12 rounded-lg object-cover shadow-sm border border-slate-100"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 text-[10px]">
              No Image
            </div>
          )}
        </div>
      ),
    },
    {
      id: "title",
      name: "Title",
      selector: (row: Product) => row.title,
      sortable: false,
    },
    {
      id: "category",
      name: "Category",
      selector: (row: Product) => row.category,
      sortable: false,
    },
    {
      id: "price",
      name: "Price",
      selector: (row: Product) => row.price,
      sortable: false,
    },
  ];
  return (
    <Template>
      <div className="p-6">
        <PageTitle
          title="Product Inventory"
          titleStyleClass="text-3xl font-bold text-slate-800 mb-6"
        />
        <div>
          <Table data={data?.products} columns={columns} />
        </div>
      </div>
    </Template>
  );
};

export default Products;
