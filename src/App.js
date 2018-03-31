import React, { Component } from 'react'
import styled from 'styled-components'
import StopToStop from './stop-to-stop'
import CompareStops from './compare-stops'

const BaseStyles = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #546171;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }

  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const ViewWrapper = styled.div`
  position: relative;

  .ViewButton {
    position: fixed;
    z-index: 2;
    top: 16px;
    right: 24px;
  }
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {mode: 'compare'}
  }

  render () {
    const changeView = () => {
      if (this.state.mode === 'stop-to-stop') {
        this.setState({mode: 'compare'})
      }
      if (this.state.mode === 'compare') {
        this.setState({mode: 'stop-to-stop'})
      }
    }

    return (
      <BaseStyles>
        <ViewWrapper>
          <div className='ViewButton' onClick={() => changeView()}>S/C</div>

          {this.state.mode === 'compare' &&
            <CompareStops />
          }
          {this.state.mode === 'stop-to-stop' &&
            <StopToStop />
          }
        </ViewWrapper>
      </BaseStyles>
    )
  }
}

export default App
