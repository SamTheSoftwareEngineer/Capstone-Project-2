import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackgroundImage = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const CatelogBodyContainer = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.8;
position: absolute;
border-radius: 20px;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`

export const CatelogContainer = styled(Link)`
  min-width: 30%;
  height: 450px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 25px;

    &:hover {
        cursor: pointer;

        & ${BackgroundImage} {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${CatelogBodyContainer} {
          opacity: 0.9;
        }
      }

      &:first-child {
        margin-right: 7.5px;
      }

      &:last-child {
        margin-left: 7.5px;
      }
`
