import { AnyAction, Reducer } from 'redux';
import { ObservableStore } from '../components/observable-store';
import { Comparator, Selector, Transformer } from '../components/selectors';
/**
 * Used with the `@WithSubStore` class decorator to define a SubStore (AKA a
 * fractal store).
 *
 * For more info on substores, see
 * https://github.com/angular-redux/platform/blob/master/packages/store/articles/fractal-store.md
 */
export interface FractalStoreOptions {
    /**
     * The name of an instance method that will define the
     * base path for the subStore. This method is expected to return an array
     * of property names or undefined/null.
     */
    basePathMethodName: string;
    /**
     * The localReducer for the substore in question.
     */
    localReducer: Reducer<any, AnyAction>;
}
/** @hidden */
export declare const setClassOptions: (decoratedClassConstructor: any, options: FractalStoreOptions) => void;
/**
 * Gets the store associated with a decorated instance (e.g. a
 * component or service)
 * @hidden
 */
export declare const getBaseStore: (decoratedInstance: any) => ObservableStore<any>;
/**
 * Creates an Observable from the given selection parameters,
 * rooted at decoratedInstance's store, and caches it on the
 * instance for future use.
 * @hidden
 */
export declare const getInstanceSelection: <T>(decoratedInstance: any, key: string | symbol, selector: Selector<any, T>, transformer?: Transformer<any, T>, comparator?: Comparator) => any;
