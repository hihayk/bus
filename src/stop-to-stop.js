import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './header'
import { firstStop, secondStop } from './stops'

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border-radius: 0;
  padding: 0 24px 0 0;
  border: 0;
  color: #005DD6;
  box-shadow: inset 0 -2px rgba(0,93,214,.2);

  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxMiA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4xICg1MTE0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFuZHJvaWQtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0OC4wMDAwMDAsIC0yODEuMDAwMDAwKSIgc3Ryb2tlPSIjMDA1MUE5IiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8ZyBpZD0iU3RhY2tlZC1Hcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIuMDAwMDAwLCAxOTYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDcyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJEeW5hbWljLWdyb3VwLUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtMiIgcG9pbnRzPSI2NSAxNCA3MCAxOSA3NSAxNCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

  background-repeat: no-repeat;
  background-position: center right 4px;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 700;
`

const HourPre = styled.div`
  display: inline-block;
  margin-right: 8px;
`

const StopSection = styled.div`
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const StopSections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  line-height: 40px;
`

const RemainingTime = styled.div`
  ${props => !props.littleTimeLeft && 'opacity: .5;'}
`
const RemainingTimeAmount = styled.div`
  ${props => props.littleTimeLeft && 'color: red;'}
  display: inline-block;
`

const hoursAndMinutesToMinutes = (hours, minutes) =>
  (hours * 60) + minutes

const minutesToHoursAndMinutes = (minutes) => {
  const value = {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  }
  if (value.hours > 0) {
    return `${value.hours} hrs. y ${value.minutes} min.`
  }
  if (value.hours === 0) {
    return `${value.minutes} min.`
  }
}

class StopToStop extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 0}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    const firstStopsList = firstStop.map((stop, index) => {
      const doubleDigitMinute = stop.minute === 0 ? `${stop.minute}0` : (stop.minute > 0 && stop.minute < 10) ? `0${stop.minute}` : stop.minute
      return (
        <option value={index} key={index}>
          {stop.hour}
          :
          {doubleDigitMinute}
        </option>
      )
    })

    const secondStopList = secondStop.map((stop, index) => {
      const doubleDigitMinute = stop.minute === 0 ? `${stop.minute}0` : (stop.minute > 0 && stop.minute < 10) ? `0${stop.minute}` : stop.minute
      return (
        <option value={index} key={index}>
          {stop.hour}
          :
          {doubleDigitMinute}
        </option>
      )
    })

    const currentTimeToMinutes = hoursAndMinutesToMinutes(new Date().getHours(), new Date().getMinutes())

    const firstStopToMinutes = firstStop.map((stop) => {
      return hoursAndMinutesToMinutes(stop.hour, stop.minute)
    })

    const findSoonestStop = firstStopToMinutes.map((stop) => {
      if (stop > currentTimeToMinutes) {
        return stop - currentTimeToMinutes
      }

      return 0
    })

    return (
      <Wrapper>
        <Header />

        <StopSections>
          <StopSection>
            <div>
              El bus que sale de
            </div>
            <Select>
              <option>
                pl. de les Tereses
              </option>
            </Select>

            <div>
              <HourPre>
                a las
              </HourPre>
              <Select value={this.state.value} onChange={this.handleChange}>
                {firstStopsList}
              </Select>
            </div>

            {findSoonestStop[this.state.value] > 0 &&
              <RemainingTime littleTimeLeft={findSoonestStop[this.state.value] < 15}>
                quedan <RemainingTimeAmount littleTimeLeft={findSoonestStop[this.state.value] < 15}>
                  {minutesToHoursAndMinutes(findSoonestStop[this.state.value])}
                </RemainingTimeAmount>
              </RemainingTime>
            }
          </StopSection>

          <StopSection>
            <div>
              llegará a
            </div>
            <Select>
              <option>
                rda. Universitat, 21
              </option>
            </Select>

            <div>
              <HourPre>
                a las
              </HourPre>
              <Select value={this.state.value} onChange={this.handleChange}>
                {secondStopList}
              </Select>
            </div>
          </StopSection>
        </StopSections>
      </Wrapper>
    )
  }
}

export default StopToStop
