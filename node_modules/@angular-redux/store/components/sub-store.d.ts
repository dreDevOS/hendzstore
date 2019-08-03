import { AnyAction, Dispatch, Reducer } from 'redux';
import { Observable } from 'rxjs';
import { NgRedux } from './ng-redux';
import { ObservableStore } from './observable-store';
import { Comparator, PathSelector, Selector } from './selectors';
/** @hidden */
export declare class SubStore<State> implements ObservableStore<State> {
    private rootStore;
    private basePath;
    constructor(rootStore: NgRedux<any>, basePath: PathSelector, localReducer: Reducer<State, AnyAction>);
    dispatch: Dispatch<AnyAction>;
    getState: () => State;
    configureSubStore: <SubState>(basePath: (string | number)[], localReducer: Reducer<SubState, AnyAction>) => ObservableStore<SubState>;
    select: <SelectedState>(selector?: Selector<State, SelectedState>, comparator?: Comparator) => Observable<SelectedState>;
    subscribe: (listener: () => void) => () => void;
    replaceReducer: (nextLocalReducer: Reducer<State, AnyAction>) => void;
}
