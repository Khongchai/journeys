import allowScroll from "./allowScroll";
import ComputeMouseDragDirection from "./ComputeMouseDragDirection";


//offsetX and Y are needed beccause setTranslate doesn't actually change the css position
//so something needs to keep track of where the position of the element is
var offsetX: number = 0;
var initialX: number;
var relativeDragX: number;
var timeline: HTMLElement;

var dragDirection: ComputeMouseDragDirection = ComputeMouseDragDirection.getInstance();

export default function handleTimelineMove()
{
    timeline = document.getElementById("timeline-wrapper");

    timeline.addEventListener("touchstart", start);
    timeline.addEventListener("touchmove", move);
    timeline.addEventListener("touchend", stop);

    timeline.addEventListener("mousedown", start);
    timeline.addEventListener("mouseup", stop);
    timeline.addEventListener("mouseleave", stop);

}

function start(e: any)
{
    if (e.type === "mousedown")
    {
        initialX = e.clientX;
        timeline.addEventListener("mousemove", move);
    }
    else
    {
        initialX = e.touches[0].clientX;
    }
    dragDirection.setBeginPos(initialX);
    
}


function move(e: any)
{
    e.preventDefault();

    let newAbsoluteDragX = e.type==="mousemove"? e.clientX : e.touches[0].clientX;
    dragDirection.setDragPos(newAbsoluteDragX);

    let canScrollInfo: {allowScroll: boolean, bypass: boolean} = allowScroll(timeline, dragDirection.getDragDirection());
    
    if (canScrollInfo.allowScroll || canScrollInfo.bypass)
    {        
        relativeDragX = e.type==="mousemove"? (e.clientX - initialX) + offsetX : (e.touches[0].clientX - initialX) + offsetX;
        moveTimeline(relativeDragX);  
    }
    else
    {
        if (dragDirection.getDragDirection() === "RIGHT")
        {
            offsetX -= 1;
        }
        else
        {
            offsetX += 1;
        }
        
    }
    

}

function stop()
{
    offsetX = relativeDragX;
    timeline.removeEventListener("mousemove", move);

}



function moveTimeline(newX: number)
{

    timeline.style.transform = `translate3d(${newX}px, 0, 0)`;
}



