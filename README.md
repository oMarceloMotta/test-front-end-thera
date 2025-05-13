# 🛒 Teste Frontend - Gerenciamento de Produtos

## Objetivo

Desenvolver uma aplicação web para gerenciamento de produtos, utilizando as melhores práticas de desenvolvimento frontend com **Next.js**, **TypeScript**, **Redux**, **Tailwind CSS** e testes automatizados.

---

## Funcionalidades

- **Listagem de Produtos:**  
  Exibe uma lista com:

  - Nome do produto
  - Categoria
  - Preço
  - Descrição
  - Imagem (URL)

- **Cadastro de Produtos:**  
  Formulário para adicionar novos produtos com os campos:

  - Nome
  - Preço
  - Descrição
  - URL da Imagem  
    O produto cadastrado aparece automaticamente na lista.

- **Filtros e Ordenação:**
  - Buscar produtos pelo nome
  - Filtrar por faixa de preço
  - Ordenar resultados

---

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [json-server](https://github.com/typicode/json-server) (API fake)

---

## Como rodar o projeto

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Inicie o servidor:**

   ```bash
   npx json-server --watch db.json --port 4000 --host 0.0.0.0
   ```

3. **Inicie a aplicação:**

   ```bash
   npm run dev
   ```

## Decisões e escolhas do projeto

- Maioria da tecnologias foram utilizadas devido pensando nos requisitos da vaga como Next.js, Redux, Tailwind CSS, TypeScript, escolhi JSON server por fazer uma API fake por ter mais familiaridade com ela.

### Estrutura de Componentes

A aplicação foi dividida em componentes reutilizáveis, como formulários, tabelas e listas, seguindo o padrão de componentização do React para facilitar a manutenção e a escalabilidade.

### Boas práticas

- Tipagem forte com TypeScript em todo o projeto.
- Separação clara entre lógica de apresentação (componentes) e lógica de negócio (Redux/Sagas).
- Utilização de hooks do React para gerenciamento de estado local e efeitos colaterais.
- Código limpo, organizado e com nomes de variáveis e funções autoexplicativos.
