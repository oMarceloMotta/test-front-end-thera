
export const GET_PRODUTOS_REQUEST = 'GET_PRODUTOS_REQUEST';
export const GET_PRODUTOS_SUCCESS = 'GET_PRODUTOS_SUCCESS';
export const GET_PRODUTOS_FAILURE = 'GET_PRODUTOS_FAILURE';

export const CREATE_PRODUTO_REQUEST = 'CREATE_PRODUTO_REQUEST';
export const CREATE_PRODUTO_SUCCESS = 'CREATE_PRODUTO_SUCCESS';
export const CREATE_PRODUTO_FAILURE = 'CREATE_PRODUTO_FAILURE';

export const UPDATE_PRODUTO_REQUEST = 'UPDATE_PRODUTO_REQUEST';
export const UPDATE_PRODUTO_SUCCESS = 'UPDATE_PRODUTO_SUCCESS';
export const UPDATE_PRODUTO_FAILURE = 'UPDATE_PRODUTO_FAILURE';

export const DELETE_PRODUTO_REQUEST = 'DELETE_PRODUTO_REQUEST';
export const DELETE_PRODUTO_SUCCESS = 'DELETE_PRODUTO_SUCCESS';
export const DELETE_PRODUTO_FAILURE = 'DELETE_PRODUTO_FAILURE';

export const getProdutos = (queryParams: string = '') => ({
  type: GET_PRODUTOS_REQUEST, payload: queryParams
});
export const createProduto = (data: Product) => ({ type: CREATE_PRODUTO_REQUEST, payload: data });
export const updateProduto = (id: string, data: Product) => ({ type: UPDATE_PRODUTO_REQUEST, payload: { id, data } });
export const deleteProduto = (id: string) => ({ type: DELETE_PRODUTO_REQUEST, payload: id });