export type Direction = "prev" | "next";
export type EndBehaviour = "default" | "jump";
/**
 * Updates states based on the direction
 * @param data array of records
 * @param direction determines the direction
 * @param endBehaviour behaviour after the last logical entry
 * @param selector callback for the id reference
 * @param selectedId current selected id
 * @returns new selected id
 */
declare function moveNext<TData extends {
    [key: string]: any;
}[], TSelector, TCurrentId extends undefined | TSelector>(opts: {
    data: TData;
    direction: Direction;
    endBehaviour: EndBehaviour;
    selector: (entry: TData[0]) => TSelector;
    selectedId: TCurrentId;
}): TSelector;
export default moveNext;
