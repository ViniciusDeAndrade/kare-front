import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid'

import { BoxStyled, DividerStyled, ModalWrapper } from './styles';
import Botao from '../button';

interface ModalProps {
    show: boolean,
    hide: Function,
    title: string,
    body: string
}

export default function Popup(props: ModalProps): JSX.Element {
    return (
        <ModalWrapper>

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
                        {props.title}
                    </Typography>

                    <DividerStyled />

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.body}
                    </Typography>

                    <DividerStyled />
                    
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
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
                        </Grid>

                        <Grid item xs={6}>
                            <Botao
                                o={
                                    ({
                                        onClick: () => props.hide(),
                                        text: "submit",
                                        color: "primary",
                                        variant: "contained"
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Modal>
        </ModalWrapper>
    );
}