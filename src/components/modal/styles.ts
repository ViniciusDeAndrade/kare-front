import Box  from "@mui/material/Box";
import styled from "styled-components";

import { Divider } from '@material-ui/core';

export const BoxStyled = styled(Box)`
    && {

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
`;

export const DividerStyled = styled(Divider)`
    margin: 5px;
`;

export const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`;
