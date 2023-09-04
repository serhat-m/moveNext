export default function switchClickHandler<TData extends { [key: string]: boolean }>(id: string, data: TData) {
  const newState = {} as Record<keyof TData, boolean>

  for (const key in data) {
    if (key === id) {
      newState[key] = true
    } else {
      newState[key] = false
    }
  }

  return newState
}
