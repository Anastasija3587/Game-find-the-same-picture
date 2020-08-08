import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './game/reducers';

const persistConfig = {
  key: 'game',
  storage,
};

const rootReducer = combineReducers({
  game: persistReducer(persistConfig, reducer),
});

export default rootReducer;
