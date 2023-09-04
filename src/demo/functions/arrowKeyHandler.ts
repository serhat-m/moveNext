import { Direction } from "../../package/functions/moveNext"

export default function arrowKeyHandler(event: KeyboardEvent, cb: (direction: Direction) => void) {
  const direction: Direction | false = event.key === "ArrowDown" ? "next" : event.key === "ArrowUp" ? "prev" : false

  if (direction) cb(direction)
}
