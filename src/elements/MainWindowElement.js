import styled from "styled-components";

export const MainWindowWrapper = styled.div`


    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        margin-left: 1rem !important;
    }
`;