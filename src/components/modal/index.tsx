import { Modal, Typography } from '@material-ui/core';

import { BoxStyled } from './styles';
import Botao from '../button';

interface Render {
    show: boolean,
    hide: Function
}


export default function Popup(props: Render): JSX.Element {
    console.log('renderiza', props.show);
    return (
        <>
            <Modal 
                open={props.show}
                onClose={() => props.hide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxStyled>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Botao 
                        o={
                            ({
                                onClick: () => props.hide(),
                                text:"close", 
                                color:"warning", 
                                variant:"outlined"
                            })
                        }
                    />
                </BoxStyled>
                
            </Modal>
        </>
    );
}