"use client";
import type { RootState } from "@/redux/store";
import { TableProdutos } from "../tables/TableProdutos";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProdutos } from "@/redux/actions/productActions";
export function ListaProdutos() {
  const response = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
  });
  useEffect(() => {
    dispatch(getProdutos());
  }, [dispatch]);
  function ordernacaoProdutos(name: string, ordenacao: string) {
    dispatch(getProdutos(`?_sort=${name}&_order=${ordenacao}`));
  }

  const handleFilter = () => {
    let queryParams = "?";
    if (filters.name) {
      const encodedName = encodeURIComponent(`${filters.name}`);
      queryParams += `name=${encodedName}&`;
    }
    if (filters.minPrice) {
      queryParams += `price_gte=${filters.minPrice}&`;
    }
    if (filters.maxPrice) {
      queryParams += `price_lte=${filters.maxPrice}&`;
    }
    dispatch(getProdutos(queryParams));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Produtos</h2>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={filters.name}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, name: e.target.value }))
        }
        className="w-full pl-10 pr-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      />
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Preço mínimo"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
          }
          className="w-full pl-10 pr-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        />
        <input
          type="number"
          placeholder="Preço máximo"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
          }
          className="w-full pl-10 pr-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        onClick={handleFilter}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mb-4"
      >
        Filtrar
      </button>
      <TableProdutos
        produtos={response?.produtos}
        ordernacaoProdutos={ordernacaoProdutos}
      />{" "}
    </div>
  );
}
