//DO NO TOUCH ANYTHING EVERYTHING HERE IS BAD; DECOUPLING REQUIRED.


//to move timeline, adjust dragamount, reset all values and call moveTimeline()
var offsetX: number = 0;
var initialX: number = 0;
var dragAmount: number = 0; 
var timeline: HTMLElement;
var throttleNumber: number = null;
var currentDragDirection: string = null;

function moveTimeline(offset?: number)
{
    const move: number =  handleTimelineEdges();
    timeline.style.transform = `translate3d(${offset? offset: move}px, 0, 0)`;
}

function getResetValuesIfAny(): number
{
    let windowWidth: number = document.documentElement.clientWidth;
    let navBarWidth: number = getNavbarWidthIfInWindowMode(windowWidth);
    let resetVal: number;
    if (currentDragDirection === "right")
    {
        resetVal = navBarWidth - timeline.offsetLeft;
    }
    else if (currentDragDirection === "left")
    {
        resetVal =  timeline.offsetLeft - navBarWidth;
    }
    else
    {
        resetVal = dragAmount;
    }
    offsetX = resetVal;
    initialX = resetVal;
    dragAmount = resetVal;
    currentDragDirection = null;

    return resetVal;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function handleTimelineMove()
{
    timeline = document.getElementById("timeline-wrapper");

    timeline.addEventListener("touchstart", start);
    timeline.addEventListener("touchmove", move);
    timeline.addEventListener("touchend", stop);

    timeline.addEventListener("mousedown", start);
    timeline.addEventListener("mouseup", stop);
}

function start(e: any)
{
    if (e.type === "mousedown")
    {
        initialX = e.clientX;
        timeline.addEventListener("mousemove", move);
        timeline.addEventListener("mouseleave", stop);
    }
    else
    {
        initialX = e.touches[0].clientX;
    }
}

function move(e: any)
{
    e.preventDefault();
    dragAmount = e.type==="mousemove"? (e.clientX - initialX) + offsetX : (e.touches[0].clientX - initialX) + offsetX;
    moveTimeline(); 
}

function stop()
{
    if (throttleNumber)
    {
        offsetX = throttleNumber;
        let resetValue = getResetValuesIfAny();
        timeline.style.transform = `translate3d(${resetValue}px, 0, 0)`;
        timeline.style.transition = "transform .1s";
        setTimeout(()=>
        {
            timeline.style.transition = "";
        }, 100);
    }
    else
    {
        offsetX = dragAmount;
    }
    timeline.removeEventListener("mousemove", move);
    timeline.removeEventListener("mouseleave", stop);
    throttleNumber = null;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function moveTimelineOnResize()
{
    window.addEventListener("resize", ()=>
    {
        timeline.style.transition = "transform .2s";
        dragAmount = 0;

        moveTimeline(getResetValuesIfAny());
        setTimeout(() => {
            timeline.style.transition = "";
        }, 250);
    });
}

//This function deals with the left and right side of the timeline and locks the drag to only the beginning and the end.
var prevDrag: number = null;
function handleTimelineEdges()
{

    let windowWidth: number = document.documentElement.clientWidth;

    let timelineData = {
        absLeft: timeline.getBoundingClientRect().left,
        absRight: timeline.getBoundingClientRect().right,
    };
    let navBarWidth: number = getNavbarWidthIfInWindowMode(windowWidth)
    let windowLeftBorder: number = navBarWidth + (navBarWidth - timelineData.absLeft);
    let windowRightBorder: number = windowWidth;

    //actions here
    if (edgeVisible(windowLeftBorder, windowRightBorder, timelineData) || throttleNumber)
    {
        if (throttleNumber)
        {
            //user drags to the right.
            if (prevDrag < dragAmount)
            {
                currentDragDirection = currentDragDirection? currentDragDirection: "right";
                throttleNumber = throttleNumber + 0.2;
            }
            //user drags to the left.
            else
            {
                currentDragDirection = currentDragDirection? currentDragDirection: "left";
                throttleNumber = throttleNumber - 0.2;
            } 
        }
        else
        {
            throttleNumber = dragAmount;
        }        
        prevDrag = dragAmount;
        
        return throttleNumber;
    }
    return dragAmount;

}

function getNavbarWidthIfInWindowMode(windowWidth: number): number
{
    //refer to "themes" for media queries
    let smallDevicesBreakpoint = 600;
    let navBar: HTMLElement = document.getElementById("navbar-wrapper");
    let navBarWidth: number = parseInt(window.getComputedStyle(navBar).getPropertyValue("width"));
    
    return windowWidth > smallDevicesBreakpoint? navBarWidth: 0;
}

function edgeVisible(leftBorder: number, rightBorder: number, elemData: {absLeft: number, absRight: number}): boolean
{
    if (elemData.absLeft > leftBorder)
    {
        return true;
    }
    if (elemData.absRight < rightBorder)
    {
        return true;
    }
    return false;
}


