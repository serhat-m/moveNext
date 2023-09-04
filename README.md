Simple and straightforward solution to get the next logical record.

# Live Demo

https://serhat-m.github.io/moveNext

# Install

```bash
npm i movenext
```

# Usage

## Function `moveNext(opts)`

```jsx
import moveNext from "movenext"
```

### `opts` `Object`

- `data` `{ [key: string]: any }[]` _array of records_
- `direction` `'prev' | 'next'` _determines the direction_
- `endBehaviour` `'default' | 'jump'` _behaviour after the last logical entry_
- `selector(entry) => any` _callback for selecting the id reference_
  - `entry` `{ [key: string]: any }` _entry of `data`_
- `selectedId` `undefined | ...` _current selected id_

`@returns` _new selected id_

## Example

This example navigates through the `data` Array, if the keyboard keys `ArrowDown` or `ArrowUp` are pressed. The `selectedId` variable saves the current state.

```jsx
import moveNext from "movenext"

const data = [
  { id: 1, title: "Dataset 1" },
  { id: 2, title: "Dataset 2" },
  { id: 3, title: "Dataset 3" },
]

let selectedId = undefined

document.addEventListener("keydown", (event) => {
  const direction = event.key === "ArrowDown" ? "next" : event.key === "ArrowUp" ? "prev" : false

  if (direction) {
    selectedId = moveNext({
      data,
      direction,
      endBehaviour: "default",
      selector: (entry) => entry.id,
      selectedId,
    })
  }
})
```

## Example React

```jsx
import moveNext from "movenext"

const [data, setData] = useState([
  { id: 1, title: "Dataset 1" },
  { id: 2, title: "Dataset 2" },
  { id: 3, title: "Dataset 3" },
])

const [selectedId, setSelectedId] = useState(undefined)

const keyDownHandler = useCallback(
  (event) => {
    const direction = event.key === "ArrowDown" ? "next" : event.key === "ArrowUp" ? "prev" : false

    if (direction) {
      setSelectedId((prevSelectedId) => {
        return moveNext({
          data,
          direction,
          endBehaviour: "default",
          selector: (entry) => entry.id,
          selectedId: prevSelectedId,
        })
      })
    }
  },
  [data],
)

useEffect(() => {
  document.addEventListener("keydown", keyDownHandler)

  return () => {
    document.removeEventListener("keydown", keyDownHandler)
  }
}, [keyDownHandler])
```

## TypeScript

The following types are available and can be used to define e. g. typed helper functions:

- `Direction = "prev" | "next"`
- `EndBehaviour = "default" | "jump”`

```tsx
import type { Direction, EndBehaviour } from "movenext"

// Example 1
function updateData(direction: Direction, behaviour: EndBehaviour) {
  ...
}

// Example 2
const direction: Direction | false = event.key === "ArrowDown" ? "next" : event.key === "ArrowUp" ? "prev" : false
```
