import allowScroll from "./allowScroll";

var initialX: number;

//offsetX and Y are needed beccause setTranslate doesn't actually change the css position
//so something needs to keep track of where the position of the element is
var offsetX: number = 0;
var differenceX: number;
var timeline: HTMLElement;

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
    
}

function move(e: any)
{
    e.preventDefault();
    if (e.type === "mousemove")
    {
        differenceX = (e.clientX - initialX) + offsetX;
    }
    else
    {
        differenceX = (e.touches[0].clientX - initialX) + offsetX;
    }
    if (allowScroll(timeline))
    {
        timeline.style.transform = `translate3d(${differenceX}px, 0, 0)`;
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function stop()
{
    offsetX = differenceX;
    timeline.removeEventListener("mousemove", move);

}

