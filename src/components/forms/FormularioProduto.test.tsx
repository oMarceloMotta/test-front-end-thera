import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FormularioProduto } from "./FormularioProduto";
import store from "../../redux/store";
import { Provider } from "react-redux";

describe("FormularioProduto Component", () => {
  it("should render all form fields", () => {
    render(
      <Provider store={store}>
        <FormularioProduto />
      </Provider>
    );

    expect(screen.getByLabelText("Nome do Produto")).toBeInTheDocument();
    expect(screen.getByLabelText("Categoria")).toBeInTheDocument();
    expect(screen.getByLabelText("Preço")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
    expect(screen.getByLabelText("URL da Imagem")).toBeInTheDocument();
  });

  it("should allow input in all fields", () => {
    render(
      <Provider store={store}>
        <FormularioProduto />
      </Provider>
    );

    const nomeInput = screen.getByLabelText("Nome do Produto");
    const categoriaSelect = screen.getByLabelText("Categoria");
    const precoInput = screen.getByLabelText("Preço");
    const descricaoTextarea = screen.getByLabelText("Descrição");
    const imagemInput = screen.getByLabelText("URL da Imagem");

    fireEvent.change(nomeInput, { target: { value: "Produto Teste" } });
    fireEvent.change(categoriaSelect, { target: { value: "Eletrônicos" } });
    fireEvent.change(precoInput, { target: { value: "100" } });
    fireEvent.change(descricaoTextarea, {
      target: { value: "Descrição teste" },
    });
    fireEvent.change(imagemInput, {
      target: { value: "http://teste.com/image.jpg" },
    });

    expect(nomeInput).toHaveValue("Produto Teste");
    expect(categoriaSelect).toHaveValue("Eletrônicos");
    expect(precoInput).toHaveValue(100);
    expect(descricaoTextarea).toHaveValue("Descrição teste");
    expect(imagemInput).toHaveValue("http://teste.com/image.jpg");
  });

  it("should display error message when required fields are empty", async () => {
    render(
      <Provider store={store}>
        <FormularioProduto />
      </Provider>
    );

    const submitButton = screen.getByText("Criar Produto");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      "Por favor, preencha todos os campos"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
