import styled from "styled-components";

export const MainWindowWrapper = styled.div`
    margin-left: 5rem;

    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        margin-left: 1rem !important;
    }
`;