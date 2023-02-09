import {WrapperContainerStyled} from "./app.styled";
import {BlockComponent} from "../components/block/block.component";
import {ButtonComponent} from "../components/button/button.component";

function AppContainer() {
  return (
    <WrapperContainerStyled >
      <BlockComponent/>
      <ButtonComponent/>
    </WrapperContainerStyled>
  );
}
export default AppContainer;
