import React from 'react'
import styled from 'styled-components'
import Header from './header'
import { firstStop, secondStop } from './stops'

const Wrapper = styled.div`

`

const TopSection = styled.div`
  background-color: white;
  position: sticky;
  top: 0;
  padding: 16px 24px 0 24px;
  z-index: 1;
`

const MainSection = styled.div`

`

const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 22, 43, .1);
  padding-bottom: 16px;
`

const StopsSection = styled.div`
  display: flex;
`

const StopWrapper = styled.div`
  width: 50%;
  margin: 16px 0;

  &:not(:last-child) {
    border-right: 1px solid rgba(0, 22, 43, .1);
    padding-right: 16px;
  }

  &:last-child {
    padding-left: 16px;
  }
`

const StopName = styled.div`

`

const StopType = styled.div`
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: .05em;
`

const HoursColumns = styled.div`
  display: flex;
  padding: 16px 0 48px 0;
`

const HoursColumn = styled.div`
  width: 50%;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
`

const HoursList = styled.div`
  display: inline-block;
`

const Stop = styled.div`
  ${props => props.next && 'color: red;'}
`

const Line = styled.div`
  position: relative;
  width: 24vw;
  height: 1px;
  display: block;
  left: -12vw;
  top: 16px;
  margin: 0 0 31px 0;
  background-color: rgba(0, 22, 43, .2);

  &:nth-child(2n + 1) {
    background-color: rgba(0, 22, 43, .4);
  }
`

const Lines = styled.div`
  width: 0;
`

const hoursAndMinutesToMinutes = (hours, minutes) => ((hours * 60) + minutes)

const currentTimeToMinutes = hoursAndMinutesToMinutes(new Date().getHours(), new Date().getMinutes())

const firstStopInMinutes = firstStop.map((stop) => {
  return hoursAndMinutesToMinutes(stop.hour, stop.minute)
})

var nextBusHourInMinutes = firstStopInMinutes.find(function (element) {
  return element > currentTimeToMinutes
})

const indexOfNextBusHourInMinutes = firstStopInMinutes.indexOf(nextBusHourInMinutes)

const firstStopList = firstStop.map((stop, index) => {
  const doubleDigitMinute = stop.minute === 0 ? `${stop.minute}0` : (stop.minute > 0 && stop.minute < 10) ? `0${stop.minute}` : stop.minute
  return (
    <Stop key={index} withLine next={index === indexOfNextBusHourInMinutes}>
      {stop.hour}
      :
      {doubleDigitMinute}
    </Stop>
  )
})

const secondStopList = secondStop.map((stop, index) => {
  const doubleDigitMinute = stop.minute === 0 ? `${stop.minute}0` : (stop.minute > 0 && stop.minute < 10) ? `0${stop.minute}` : stop.minute
  return (
    <Stop key={index}>
      {stop.hour}
      :
      {doubleDigitMinute}
    </Stop>
  )
})

const linesList = firstStop.map((stop, index) => {
  return (
    <Line key={index} />
  )
})

const CompareStops = () => (
  <Wrapper>
    <TopSection>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <StopsSection>
        <StopWrapper>
          <StopType>SALIDA</StopType>
          <StopName>pl. de les Tereses</StopName>
        </StopWrapper>
        <StopWrapper>
          <StopType>LLEGADA</StopType>
          <StopName>rda. Universitat, 21</StopName>
        </StopWrapper>
      </StopsSection>
    </TopSection>

    <MainSection>
      <HoursColumns>
        <HoursColumn >
          <HoursList>
            {firstStopList}
          </HoursList>
        </HoursColumn>

        <Lines>
          {linesList}
        </Lines>

        <HoursColumn>
          <HoursList>
            {secondStopList}
          </HoursList>
        </HoursColumn>
      </HoursColumns>
    </MainSection>
  </Wrapper>
)

export default CompareStops
