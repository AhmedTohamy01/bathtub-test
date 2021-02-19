import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export default function App() {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <ONButton>Water ON</ONButton>
        <OFFButton>Water OFF</OFFButton>
      </ButtonsWrapper>
      <BathtubeWrapper>
        <Bathtub></Bathtub>
      </BathtubeWrapper>
    </Wrapper>
  )
}

const BathtubeWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin-top: 50px;
`
const Bathtub = styled.div`
  border: 1px solid blue;
  height: 100px;
  width: 300px;
`

/*---> Styles <---*/
const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonsWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin-top: 50px;
`

export const ONButton = styled(Button)`
  background: linear-gradient(to bottom, #2bc9ff, #1399ff 100%) !important;
  width: 142px !important;
  height: 38px !important;
  padding: 0 12px !important;
  border-radius: 10px !important;
  text-transform: capitalize !important;
  color: white !important;
  font-size: 16px !important;
  font-stretch: normal !important;
  font-style: normal !important;
  line-height: normal !important;
  letter-spacing: normal !important;
`

export const OFFButton = styled(Button)`
  background: linear-gradient(to bottom, red, #1399ff 100%) !important;
  width: 142px !important;
  height: 38px !important;
  padding: 0 12px !important;
  border-radius: 10px !important;
  text-transform: capitalize !important;
  color: white !important;
  font-size: 16px !important;
  font-stretch: normal !important;
  font-style: normal !important;
  line-height: normal !important;
  letter-spacing: normal !important;

  margin-left: 20px !important;
`
