import { memo, HTMLAttributes } from "react"

const ListItem = memo(function ListItem({ children, ...otherProps }: HTMLAttributes<HTMLLIElement>) {
  return <li {...otherProps}>{children}</li>
})

export default ListItem
