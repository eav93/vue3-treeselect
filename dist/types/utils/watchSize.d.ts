export interface Size {
    width: number;
    height: number;
}
/**
 * Call `listener` when the size of an element changes (not on registration).
 * @returns a function that stops watching
 */
export declare function watchSize($el: HTMLElement, listener: (size: Size) => void): () => void;
