import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CounterState} from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, state => state.counter);
export const getChanelName = createSelector(getCounterState, state => state.chanelName)
