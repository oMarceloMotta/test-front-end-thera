import { FormularioProduto } from "@/components/forms/FormularioProduto";
import { ListaProdutos } from "@/components/list/ListaProdutos";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Sistema de Gestão de Produtos
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <FormularioProduto />
          </div>
          <div className="lg:col-span-3">
            <ListaProdutos />
          </div>
        </div>
      </div>
    </div>
  );
}
