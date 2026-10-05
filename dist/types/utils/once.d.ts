/**
 * Make a function run only once; later calls return the first result
 */
export declare function once<T extends (...args: any[]) => any>(fn: T): T;
