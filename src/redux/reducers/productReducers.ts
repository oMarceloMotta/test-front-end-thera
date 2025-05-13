import { CREATE_PRODUTO_SUCCESS, DELETE_PRODUTO_SUCCESS, GET_PRODUTOS_SUCCESS, UPDATE_PRODUTO_SUCCESS } from '../actions/productActions'



const initialState = {
  produtos: [],
};

export default function productReducer(state = initialState, action: { type: string, payload: Product }) {
  switch (action.type) {
    case GET_PRODUTOS_SUCCESS:
      return { ...state, produtos: Array.isArray(action.payload) ? action.payload : [] };

    case CREATE_PRODUTO_SUCCESS:
      return { ...state, produtos: [...state.produtos, action.payload] };

    case UPDATE_PRODUTO_SUCCESS:
      return {
        ...state,
        produtos: state.produtos.map((p: Product) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    case DELETE_PRODUTO_SUCCESS:
      return {
        ...state,
        produtos: state.produtos.filter((p: Product) => p.id !== action.payload.id),
      };

    default:
      return state;
  }
}
