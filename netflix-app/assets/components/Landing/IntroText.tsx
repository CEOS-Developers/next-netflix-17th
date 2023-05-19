import styled from "styled-components"

export const IntroText = () => {
  return (
    <IntroTextWrapper>
      화면을 클릭해주세요
      <IntroTextSmall>(소리를 키시는 것을 권장드립니다)</IntroTextSmall>
    </IntroTextWrapper>
  )
}

const IntroTextWrapper = styled.div`
  color : white;
  font-size : 30px;
`
const IntroTextSmall = styled.p`
  text-align : center;
  font-size : 15px;
`