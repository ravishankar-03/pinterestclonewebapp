import styled from '@emotion/styled'
import React from 'react'

const MainHome = ({children}) => {

    

  return (
    <Wrapper>
        <Container>
        {children}
        </Container>
    </Wrapper>
  )
}

export default MainHome

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%
    height: 100%; 
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    width: 80%;
    background-color: white;
`