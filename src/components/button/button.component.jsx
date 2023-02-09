import {ButtonStyled} from "./button.styled";

export const ButtonComponent = () => {
   const handleClick = () => {
       setTimeout (() => {
           console.log('click')
       }, 5000)
   }

    return (
        <ButtonStyled onClick={() => handleClick()}>
            <h1>START</h1>
        </ButtonStyled>
    )
}