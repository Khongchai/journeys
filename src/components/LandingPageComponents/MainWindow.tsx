import React, {useState} from "react";
import {LandingPageWrapper} from "../../elements";
import Overview from "./Overview";
import Timeline from "./Timeline/Timeline";
import {OverviewDataRequest} from "./sharedInterfaces";

export const MainWindow = () => 
{

    const [requestedOverviewData, setRequestedOverviewData] = useState<OverviewDataRequest | undefined>(undefined);
    return(
        <LandingPageWrapper>
            <Overview requestedOverviewData={requestedOverviewData}/>
            <Timeline setRequestedOverviewData={setRequestedOverviewData}/>
        </LandingPageWrapper>
    );
}