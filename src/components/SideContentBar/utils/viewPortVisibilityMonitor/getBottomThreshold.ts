export default function getBottomThreshold(): number
{
    //threshold defines the point where elements remain active, eg. threshold = screenHeight * 0.9 means active for 90% of the screen's height.
    return document.documentElement.clientHeight * 0.9;
}
