import * as C from "./styles";
import React from 'react'

type Props = {
  title: string,
  value: number,
  color?: string
}

const ResumeItem = ({title, value, color}: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Value color={color}>{value}</C.Value>
    </C.Container>
  )
}

export default ResumeItem