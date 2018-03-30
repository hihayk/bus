import React from 'react'
import styled from 'styled-components'
import arrow from './arrow.svg'

const Arrow = styled.img`
  margin: 0 6px;
`

const Header = () => (
  <div>
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
  </div>
)

export default Header
