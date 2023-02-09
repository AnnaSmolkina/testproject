import {BLockStyled, BLocksWrapperStyled} from "./block.styled";
import {blockData} from "./blockData";
import {CircleComponent} from "../circle/circle.component";

export const BlockComponent = () => {
    return (
        <BLocksWrapperStyled>
            {blockData.map((element) => (
                <BLockStyled  key={element.id} name={element.name}>
                    {element.name}
                    <CircleComponent name={element.name}/>
                </BLockStyled>
                )) }
        </BLocksWrapperStyled>
    )
}