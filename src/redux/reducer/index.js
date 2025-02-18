// reducer.js
import { combineReducers } from 'redux';

import { areaReducer } from '@/redux/reducer/area/reducer';
import { insuranseTypeReducer } from '@/redux/reducer/insuranseType/reducer';
import { brandReducer } from '@/redux/reducer/brand/reducer';
import { modelReducer } from '@/redux/reducer/model/reducer';
import { yearReducer } from '@/redux/reducer/year/reducer';
import { maxPencairanReducer } from '@/redux/reducer/maxPencairan/reducer';
import { instalmentsReducer } from '@/redux/reducer/instalments/reducer';

const rootReducer = combineReducers({
  area: areaReducer,
  insuranseType: insuranseTypeReducer,
  brand: brandReducer,
  model: modelReducer,
  year: yearReducer,
  maxPencairan: maxPencairanReducer,
  instalments: instalmentsReducer
});

export default rootReducer;
