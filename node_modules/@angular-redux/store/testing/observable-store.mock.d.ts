import { Comparator, Selector } from '@angular-redux/store';
import { AnyAction, Dispatch, Reducer } from 'redux';
import { Observable, Subject } from 'rxjs';
/** @hidden */
export interface SelectorStubRecord {
    subject: Subject<any>;
    comparator: Comparator;
}
/** @hidden */
export interface SelectorStubMap {
    [selector: string]: SelectorStubRecord;
}
/** @hidden */
export interface SubStoreStubMap {
    [basePath: string]: MockObservableStore<any>;
}
/** @hidden */
export declare class MockObservableStore<State> {
    selections: SelectorStubMap;
    subStores: SubStoreStubMap;
    getSelectorStub: <SelectedState>(selector?: Selector<State, SelectedState>, comparator?: Comparator) => Subject<SelectedState>;
    reset: () => void;
    dispatch: Dispatch<AnyAction>;
    replaceReducer: () => any;
    getState: () => {};
    subscribe: () => () => any;
    select: <SelectedState>(selector?: Selector<any, SelectedState>, comparator?: Comparator) => Observable<any>;
    configureSubStore: <SubState>(basePath: (string | number)[], _: Reducer<SubState, AnyAction>) => MockObservableStore<SubState>;
    getSubStore: <SubState>(...pathSelectors: (string | number)[][]) => MockObservableStore<any>;
    private initSubStore;
    private initSelectorStub;
}
