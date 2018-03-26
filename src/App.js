import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from './arrow.svg'

const BaseStyles = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color: #555;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }
`

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
`

const HourPre = styled.div`
  display: inline-block;
  margin-right: 8px;
`

const StopSection = styled.div`
  margin-bottom: 16px;
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

const Arrow = styled.img`
  margin: 0 6px;
`

const Header = styled.div`
`

const firstStop = [
  {
    hour: 6,
    minute: 5
  },
  {
    hour: 6,
    minute: 25
  },
  {
    hour: 6,
    minute: 35
  },
  {
    hour: 6,
    minute: 50
  },
  {
    hour: 7,
    minute: 0
  },
  {
    hour: 7,
    minute: 5
  },
  {
    hour: 7,
    minute: 15
  },
  {
    hour: 7,
    minute: 25
  },
  {
    hour: 7,
    minute: 35
  },
  {
    hour: 7,
    minute: 40
  },
  {
    hour: 7,
    minute: 50
  },
  {
    hour: 8,
    minute: 0
  },
  {
    hour: 8,
    minute: 5
  },
  {
    hour: 8,
    minute: 15
  },
  {
    hour: 8,
    minute: 20
  },
  {
    hour: 8,
    minute: 45
  },
  {
    hour: 9,
    minute: 15
  },
  {
    hour: 9,
    minute: 45
  },
  {
    hour: 10,
    minute: 15
  },
  {
    hour: 10,
    minute: 45
  },
  {
    hour: 11,
    minute: 15
  },
  {
    hour: 11,
    minute: 45
  },
  {
    hour: 12,
    minute: 15
  },
  {
    hour: 12,
    minute: 45
  },
  {
    hour: 13,
    minute: 10
  },
  {
    hour: 13,
    minute: 15
  },
  {
    hour: 13,
    minute: 30
  },
  {
    hour: 13,
    minute: 45
  },
  {
    hour: 14,
    minute: 0
  },
  {
    hour: 14,
    minute: 15
  },
  {
    hour: 14,
    minute: 20
  },
  {
    hour: 14,
    minute: 40
  },
  {
    hour: 14,
    minute: 45
  },
  {
    hour: 15,
    minute: 15
  },
  {
    hour: 15,
    minute: 30
  },
  {
    hour: 15,
    minute: 45
  },
  {
    hour: 15,
    minute: 55
  },
  {
    hour: 16,
    minute: 15
  },
  {
    hour: 16,
    minute: 30
  },
  {
    hour: 16,
    minute: 45
  },
  {
    hour: 17,
    minute: 0
  },
  {
    hour: 17,
    minute: 15
  },
  {
    hour: 17,
    minute: 30
  },
  {
    hour: 17,
    minute: 45
  },
  {
    hour: 18,
    minute: 0
  },
  {
    hour: 18,
    minute: 15
  },
  {
    hour: 18,
    minute: 30
  },
  {
    hour: 18,
    minute: 45
  },
  {
    hour: 19,
    minute: 0
  },
  {
    hour: 19,
    minute: 15
  },
  {
    hour: 19,
    minute: 30
  },
  {
    hour: 19,
    minute: 45
  },
  {
    hour: 20,
    minute: 15
  },
  {
    hour: 20,
    minute: 45
  },
  {
    hour: 21,
    minute: 15
  },
  {
    hour: 21,
    minute: 45
  }
]

const secondStop = [
  {
    hour: 6,
    minute: 55
  },
  {
    hour: 7,
    minute: 15
  },
  {
    hour: 7,
    minute: 25
  },
  {
    hour: 7,
    minute: 40
  },
  {
    hour: 7,
    minute: 50
  },
  {
    hour: 7,
    minute: 55
  },
  {
    hour: 8,
    minute: 5
  },
  {
    hour: 8,
    minute: 15
  },
  {
    hour: 8,
    minute: 25
  },
  {
    hour: 8,
    minute: 30
  },
  {
    hour: 8,
    minute: 40
  },
  {
    hour: 8,
    minute: 50
  },
  {
    hour: 8,
    minute: 55
  },
  {
    hour: 9,
    minute: 5
  },
  {
    hour: 9,
    minute: 10
  },
  {
    hour: 9,
    minute: 35
  },
  {
    hour: 10,
    minute: 5
  },
  {
    hour: 10,
    minute: 35
  },
  {
    hour: 11,
    minute: 5
  },
  {
    hour: 11,
    minute: 35
  },
  {
    hour: 12,
    minute: 5
  },
  {
    hour: 12,
    minute: 35
  },
  {
    hour: 13,
    minute: 5
  },
  {
    hour: 13,
    minute: 35
  },
  {
    hour: 14,
    minute: 0
  },
  {
    hour: 14,
    minute: 5
  },
  {
    hour: 14,
    minute: 20
  },
  {
    hour: 14,
    minute: 35
  },
  {
    hour: 14,
    minute: 50
  },
  {
    hour: 15,
    minute: 5
  },
  {
    hour: 15,
    minute: 10
  },
  {
    hour: 15,
    minute: 30
  },
  {
    hour: 15,
    minute: 35
  },
  {
    hour: 16,
    minute: 5
  },
  {
    hour: 16,
    minute: 20
  },
  {
    hour: 16,
    minute: 35
  },
  {
    hour: 16,
    minute: 45
  },
  {
    hour: 17,
    minute: 5
  },
  {
    hour: 17,
    minute: 20
  },
  {
    hour: 17,
    minute: 35
  },
  {
    hour: 17,
    minute: 50
  },
  {
    hour: 18,
    minute: 5
  },
  {
    hour: 18,
    minute: 20
  },
  {
    hour: 18,
    minute: 35
  },
  {
    hour: 18,
    minute: 50
  },
  {
    hour: 19,
    minute: 5
  },
  {
    hour: 19,
    minute: 20
  },
  {
    hour: 19,
    minute: 35
  },
  {
    hour: 19,
    minute: 50
  },
  {
    hour: 20,
    minute: 5
  },
  {
    hour: 20,
    minute: 20
  },
  {
    hour: 20,
    minute: 35
  },
  {
    hour: 21,
    minute: 5
  },
  {
    hour: 21,
    minute: 35
  },
  {
    hour: 22,
    minute: 5
  },
  {
    hour: 22,
    minute: 35
  }
]

// const hoursAndMinutesToMinutes = (hours, minutes) =>
//   (hours * 60) + minutes
//
// const minutesToHoursAndMinutes = (minutes) => {
//   const value = {
//     hours: Math.floor(minutes / 60),
//     minutes: minutes % 60
//   }
//   return (
//     value
//   )
// }

class App extends Component {
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

    return (
      <BaseStyles>
        <Wrapper>
          <Header>
            <div>
              Horario
            </div>
            <b>
              E11.1 Mataro
              <Arrow src={arrow} />
              Barclona
            </b>
            <div>
              Días laborales
            </div>
          </Header>

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
      </BaseStyles>
    )
  }
}

export default App
