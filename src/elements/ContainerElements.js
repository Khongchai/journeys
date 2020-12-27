import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(16, minmax(auto, 4.2rem)) 1fr;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    }
`;