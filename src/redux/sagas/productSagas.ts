import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRODUTOS_SUCCESS,
  GET_PRODUTOS_FAILURE,
  CREATE_PRODUTO_SUCCESS,
  CREATE_PRODUTO_FAILURE,
  UPDATE_PRODUTO_SUCCESS,
  UPDATE_PRODUTO_FAILURE,
  DELETE_PRODUTO_SUCCESS,
  DELETE_PRODUTO_FAILURE,
  GET_PRODUTOS_REQUEST,
  CREATE_PRODUTO_REQUEST,
  UPDATE_PRODUTO_REQUEST,
  DELETE_PRODUTO_REQUEST
} from '../actions/productActions';
import { ENDPOINTS } from '@/api/api';


function* fetchProdutos({ payload }: { payload: string }): Generator {
  try {
    const response = yield call(axios.get, `${ENDPOINTS.products}${payload}`);
    yield put({ type: GET_PRODUTOS_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: GET_PRODUTOS_FAILURE, error: error.message });
  }
}

function* createProduto({ payload }: { payload: Product }): Generator {
  try {
    const response = yield call(axios.post, ENDPOINTS.products, payload);
    yield put({ type: CREATE_PRODUTO_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: CREATE_PRODUTO_FAILURE, error: error.message });
  }
}

function* updateProduto({ payload }: { payload: { id: string, data: Product } }): Generator {
  try {
    const response = yield call(axios.put, `${ENDPOINTS.products}/${payload.id}`, payload.data);
    yield put({ type: UPDATE_PRODUTO_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: UPDATE_PRODUTO_FAILURE, error: error.message });
  }
}

function* deleteProduto({ payload }: { payload: string }): Generator {
  try {
    yield call(axios.delete, `${ENDPOINTS.products}/${payload}`);
    yield put({ type: DELETE_PRODUTO_SUCCESS, payload });
  } catch (error: any) {
    yield put({ type: DELETE_PRODUTO_FAILURE, error: error.message });
  }
}

export default function* produtoSaga(): Generator {
  yield takeLatest(GET_PRODUTOS_REQUEST as any, fetchProdutos);
  yield takeLatest(CREATE_PRODUTO_REQUEST as any, createProduto);
  yield takeLatest(UPDATE_PRODUTO_REQUEST as any, updateProduto);
  yield takeLatest(DELETE_PRODUTO_REQUEST as any, deleteProduto);
}
