export default function joinClassNames<TArgs extends unknown[]>(...args: TArgs) {
  const filteredClassNames = args.filter((className) => className)
  return filteredClassNames.join(" ")
}
