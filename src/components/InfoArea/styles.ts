import styled from 'styled-components'

export const Container = styled.div`
/* width: 100%; */
background-color: #FFF;
padding: 20px;
box-shadow: 0px 0px 5px #CCC;
border-radius: 10px;
margin-top: -40px;
display: flex;
align-items: center;
`
// resume terá dobro do are
export const MonthArea = styled.div`
flex: 1;
display: flex;
align-items: center;
`
export const ResumeArea = styled.div`
flex: 2;
display: flex;
align-items: center;
`

export const MonthArrow = styled.div`
  width: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
`
export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`
