import styled from 'styled-components'
import Button from '../Button/Button.jsx'

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    height: 100px;
    min-width: 500px;
`

export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
`
