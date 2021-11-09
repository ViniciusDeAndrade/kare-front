import { Box } from "@material-ui/system";
import styled from "styled-components";

export const BoxStyled = styled(Box)`
    position: absolute,
    top: 50%,
    left: 50%,
    transform: translate(-50%, -50%),
    width: 400,
    bgcolor: background.paper,
    border: 2px solid #000,
    boxShadow: 24,
    p: 4,
`;