"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Updates states based on the direction
 * @param data array of records
 * @param direction determines the direction
 * @param endBehaviour behaviour after the last logical entry
 * @param selector callback for the id reference
 * @param selectedId current selected id
 * @returns new selected id
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
function moveNext(opts) {
    var data = opts.data, direction = opts.direction, endBehaviour = opts.endBehaviour, selector = opts.selector, selectedId = opts.selectedId;
    if (!Array.isArray(data)) {
        throw new TypeError("First argument must be an array");
    }
    if (data.length > 0) {
        var indexOfFirstEntry = 0;
        var indexOfLastEntry = data.length - 1;
        var newIndex = false;
        if (selectedId !== undefined) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var entry = data_1[_i];
                var selectorValue = selector(entry);
                if (typeof selectorValue !== typeof selectedId) {
                    throw new TypeError("type of selectedId (".concat(typeof selectedId, ") must be same as selector return value (").concat(typeof selectorValue, ")"));
                }
                var entrySelectedValue = selectorValue === selectedId; // Get current state
                if (entrySelectedValue) {
                    newIndex = direction === "next" ? data.indexOf(entry) + 1 : data.indexOf(entry) - 1; // Define next possible index
                    // // valueUpdater(entry, false) // Disable current value
                    if (newIndex < indexOfFirstEntry || newIndex > indexOfLastEntry) {
                        // Check if next possible index "newIndex" ist out of scope. E.g. smaller than first index or bigger than last index
                        // If it's out of scope but the behaviour is "jump", then jump to the first or last entry based on the direction
                        if (endBehaviour === "jump") {
                            return selector(data[direction === "next" ? 0 : data.length - 1]);
                        }
                        // If it's out of scope and the behaviour is not "jump", then return undefined
                        return undefined;
                    }
                    break;
                }
            }
        }
        // At this part there are two options: In the for loop before: no active entry was detected (newIndex -> false) or active entry was detected (newIndex -> number)
        if (newIndex === false) {
            // If there is no active entry, then enable based on the direction the first or last entry
            var element = data[direction === "next" ? 0 : data.length - 1];
            return selector(element);
        }
        else {
            // If no special case was detected, this section get's in to the game and just enables the next possible option
            var element = data[newIndex];
            return selector(element);
        }
    }
    return undefined;
}
exports.default = moveNext;
