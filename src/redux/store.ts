import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/productSagas';
import rootReducer from './reducers/rootreducers';

const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;