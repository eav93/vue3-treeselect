export interface DebouncedFunction<T extends (...args: any[]) => void> {
    (...args: Parameters<T>): void;
    /** Drop a pending trailing call */
    cancel: () => void;
    /** Run a pending trailing call now */
    flush: () => void;
}
/**
 * Debounce with leading and trailing calls (like lodash's `{ leading: true, trailing: true }`):
 * the first call runs immediately, further calls within `wait` ms run once at the end.
 */
export declare function debounce<T extends (...args: any[]) => void>(fn: T, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): DebouncedFunction<T>;
