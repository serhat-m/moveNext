export default function getActiveKey<TData extends { [key: string]: boolean }>(data: TData) {
  for (const key in data) {
    if (data[key]) return key
  }

  return null
}
