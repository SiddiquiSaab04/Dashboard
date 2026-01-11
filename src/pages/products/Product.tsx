import PageTitle from "../../components/title/PageTitle";
import Template from "../../components/layout/Template";
import Table from "../../components/table/Table";
import { products } from "../../utils/products";
import type { TableColumn } from "react-data-table-component";

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  rating: number;
  image: string;
}

const Product = () => {
  const columns: TableColumn<ProductData>[] = [
    {
      name: "Product",
      selector: (row: ProductData) => row.name,
      sortable: true,
      cell: (row: ProductData) => (
        <div className="flex items-center gap-3 py-2">
          <img
            src={row.image}
            alt={row.name}
            className="w-10 h-10 rounded-lg object-cover shadow-sm"
          />
          <span className="font-medium text-slate-700">{row.name}</span>
        </div>
      ),
      grow: 2,
    },
    {
      name: "Category",
      selector: (row: ProductData) => row.category,
      sortable: true,
      cell: (row: ProductData) => (
        <span className="text-slate-500">{row.category}</span>
      ),
    },
    {
      name: "Price",
      selector: (row: ProductData) => row.price,
      sortable: true,
      cell: (row: ProductData) => (
        <span className="font-semibold text-slate-900">
          ${row.price.toFixed(2)}
        </span>
      ),
    },
    {
      name: "Stock",
      selector: (row: ProductData) => row.stock,
      sortable: true,
      cell: (row: ProductData) => (
        <span
          className={`${
            row.stock < 20 ? "text-amber-600 font-medium" : "text-slate-600"
          }`}
        >
          {row.stock} units
        </span>
      ),
    },
    {
      name: "Rating",
      selector: (row: ProductData) => row.rating,
      sortable: true,
      cell: (row: ProductData) => (
        <div className="flex items-center gap-1">
          <span className="text-amber-400">★</span>
          <span className="text-slate-600">{row.rating}</span>
        </div>
      ),
    },
    {
      name: "Status",
      selector: (row: ProductData) => row.status,
      sortable: true,
      cell: (row: ProductData) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <Template>
      <div className="p-6">
        <PageTitle
          title="Product Inventory"
          titleStyleClass="text-3xl font-bold text-slate-800 mb-6"
        />
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <Table
            columns={columns}
            data={products}
            customStyles={{
              header: {
                style: {
                  display: "none",
                },
              },
              headRow: {
                style: {
                  backgroundColor: "#f8fafc",
                  borderBottomColor: "#f1f5f9",
                  minHeight: "56px",
                },
              },
              headCells: {
                style: {
                  color: "#64748b",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                },
              },
              rows: {
                style: {
                  minHeight: "72px",
                  "&:not(:last-of-type)": {
                    borderBottomColor: "#f1f5f9",
                  },
                  "&:hover": {
                    backgroundColor: "#f8fafc",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </Template>
  );
};

export default Product;
