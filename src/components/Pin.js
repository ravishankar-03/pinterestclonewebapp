import React from 'react'
import styled from '@emotion/styled'

const Pin = ({data}) =>{
  return (
    <Wrapper>
        <Container>
        
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img  src={data.urls.small} alt={data.alt_description} />
    </a>
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;

`
const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img{
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }

`