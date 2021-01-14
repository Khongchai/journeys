import React, {useState} from "react";
import {LandingPageWrapper} from "../../elements";
import Overview from "./Overview";
import {OverviewDataRequest} from "./sharedInterfaces";
import Timeline from "./Timeline/Timeline";

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