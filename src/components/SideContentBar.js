import SideContentElements from "../elements";
import React from "react";

export const SideContentBar = ({ children }) => 
{
    return(
        <SideContentElements>
            {children}
        </SideContentElements>
    );
};