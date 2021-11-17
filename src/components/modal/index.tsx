import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { BoxStyled } from './styles';
import Botao from '../button';

interface Render {
    show: boolean,
    hide: Function
}

export default function Popup(props: Render): JSX.Element {
    return (
        <Modal
            open={props.show}
            onClose={() => props.hide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={
                {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }
            }>
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
                            text: "close",
                            color: "warning",
                            variant: "outlined"
                        })
                    }
                />
            </Box>

        </Modal>
    );
}