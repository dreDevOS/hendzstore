import { AnyAction, Dispatch, Middleware, Reducer, Store, StoreEnhancer, Unsubscribe } from 'redux';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux } from './ng-redux';
import { ObservableStore } from './observable-store';
import { Comparator, Selector } from './selectors';
/** @hidden */
export declare class RootStore<RootState> extends NgRedux<RootState> {
    private ngZone;
    private store;
    private store$;
    constructor(ngZone: NgZone);
    configureStore: (rootReducer: Reducer<RootState, AnyAction>, initState: RootState, middleware?: Middleware<{}, any, Dispatch<AnyAction>>[], enhancers?: StoreEnhancer<RootState, {}>[]) => void;
    provideStore: (store: Store<RootState, AnyAction>) => void;
    getState: () => RootState;
    subscribe: (listener: () => void) => Unsubscribe;
    replaceReducer: (nextReducer: Reducer<RootState, AnyAction>) => void;
    dispatch: Dispatch<AnyAction>;
    select: <SelectedType>(selector?: Selector<RootState, SelectedType>, comparator?: Comparator) => Observable<SelectedType>;
    configureSubStore: <SubState>(basePath: (string | number)[], localReducer: Reducer<SubState, AnyAction>) => ObservableStore<SubState>;
    private setStore;
    private storeToObservable;
}
