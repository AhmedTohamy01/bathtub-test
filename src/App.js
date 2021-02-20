import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

export default function App() {
  const [waterLevel, setWaterLevel] = useState(0)
  const [startFill, setStartFill] = useState(false)
  const [startEmpty, setStartEmpty] = useState(false)
  const [error, setError] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  function handleCloseAlert() {
    setShowErrorMessage(false)
  }

  function handleONButtonClick() {
    if (waterLevel === 100) {
      setError('The bathtub is full !')
      setShowErrorMessage(true)
    } else {
      setStartFill(true)
      setStartEmpty(false)
    }
  }

  function handleOFFButtonClick() {
    if (waterLevel === 0) {
      setError('The bathtub is empty !')
      setShowErrorMessage(true)
    } else {
      setStartFill(false)
      setStartEmpty(true)
    }
  }

  function WaterComponent() {
    useEffect(() => {
      if (startFill) {
        let addWater = setInterval(() => {
          if (waterLevel < 100) {
            setWaterLevel((prevState) => prevState + 20)
          }
        }, 2000)
        return () => {
          clearInterval(addWater)
        }
      } else if (startEmpty) {
        let EmptyWater = setInterval(() => {
          if (waterLevel > 0) {
            setWaterLevel((prevState) => prevState - 20)
          }
        }, 2000)
        return () => {
          clearInterval(EmptyWater)
        }
      }
    }, [])

    return <Water waterLevel={waterLevel}></Water>
  }

  return (
    <Wrapper>
      <Title>Bathtub Challenge</Title>
      <Subtitle>use the buttons below to fill or empty the bathtub</Subtitle>
      <ButtonsWrapper>
        <ONButton onClick={handleONButtonClick}>Water ON</ONButton>
        <OFFButton onClick={handleOFFButtonClick}>Water OFF</OFFButton>
      </ButtonsWrapper>
      <Bathtub>
        {startFill ? (
          <WaterComponent />
        ) : startEmpty ? (
          <WaterComponent />
        ) : null}
      </Bathtub>
      <WaterLevelCounter>Water Level : {waterLevel}</WaterLevelCounter>
      <Snackbar
        open={showErrorMessage}
        autoHideDuration={2500}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ErrorMessage message={error} />
      </Snackbar>
    </Wrapper>
  )
}

/*---> Styles <---*/
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
`

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
  text-align: center;
  width: 90%;
`

const ButtonsWrapper = styled.div`
  margin-top: 30px;
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
  margin-left: 20px !important;
`

const Bathtub = styled.div`
  border: 1px solid red;
  border-top: transparent;
  margin-top: 50px;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: flex-end;
`
const Water = styled.div`
  height: ${(props) => props.waterLevel.toString() + 'px'};
  width: 300px;
  background-color: #1399ff;
`

const WaterLevelCounter = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`

export const ErrorMessage = styled(SnackbarContent)`
  background: orange !important;
  justify-content: center !important;
  flex-grow: unset !important;
  font-size: 16px !important;
  text-align: center !important;

  @media (max-width: 480px) {
    width: 80% !important;
  }
`
