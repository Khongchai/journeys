import {ContentBarWrapper, RunningLine} from "../../elements";
import React from "react";
import {SideContentBarContent} from "../index";

export const SideContentBar = () => 
{
    return(
        <ContentBarWrapper>
            <RunningLine id="line-indicator"/>
            <SideContentBarContent />
        </ContentBarWrapper>
    );
};
