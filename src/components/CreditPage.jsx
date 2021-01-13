import React from 'react';
import {CreditPageWrapper, CreditHeader} from "../elements";


export function CreditPage({children})
{
    return (
    <CreditPageWrapper>
        <CreditHeader>
            Credit
        </CreditHeader>
        {children}
    </CreditPageWrapper>
        
        );
}