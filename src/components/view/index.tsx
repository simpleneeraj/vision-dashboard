import React from "react"

type Props = React.ComponentPropsWithRef<"div">

const View = (props: Props) => {
  const { children } = props
  return <div {...props}>{children}</div>
}

export default View
