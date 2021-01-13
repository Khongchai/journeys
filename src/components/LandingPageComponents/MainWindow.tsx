import React, {useState, lazy, Suspense} from "react";
import {LandingPageWrapper} from "../../elements";
import Overview from "./Overview";
import {OverviewDataRequest} from "./sharedInterfaces";
const Timeline = lazy(() => import ('./Timeline/Timeline'));

export const MainWindow = () => 
{
    const [requestedOverviewData, setRequestedOverviewData] = useState<OverviewDataRequest | undefined>(undefined);
    return(
        <LandingPageWrapper>
            <Suspense fallback={<div style={{fontSize: "30px"}}>Loading overview...</div>}>
                <Overview requestedOverviewData={requestedOverviewData}/>
            </Suspense>
            <Suspense fallback={<div style={{fontSize: "30px"}}>Loading timeline...</div>}>
                <Timeline setRequestedOverviewData={setRequestedOverviewData}/>
            </Suspense>
        </LandingPageWrapper>
    );
}