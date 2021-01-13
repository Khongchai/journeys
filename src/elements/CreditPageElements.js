import styled from "styled-components";

export const CreditPageWrapper = styled.div`

    display: flex;
    height: fit-content;
    padding: 5rem 0 0 5.5rem;
    flex-direction: column;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        padding-left: 0rem;
    }
`;

export const CreditHeader = styled.h2`
    
    text-align: center;
    width: 100%;
    height: fit-content;
    margin-bottom: 2rem;
    letter-spacing: 1.4px;
`;

