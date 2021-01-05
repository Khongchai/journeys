
interface valuesForCalculation {
    rightSide: number,
    leftSide: number,
    windowWidth: number,
};

var currentThreshold: number;

var dragDirectionWhenStopped: string = null;

export default function allowScroll(elem: HTMLElement, dragDirection: string): {allowScroll: boolean, bypass: boolean}
{
    let windowWidth: number = document.documentElement.clientWidth;

    //rightnow this only handles large screen, for small screen, no need to
    //take into account the width of the side navbar
    let navbarWidth: number = getNavbarWidthIfInWindowMode();

    let valuesForCalculation: valuesForCalculation = {
        rightSide: elem.getBoundingClientRect().right - navbarWidth,
        leftSide: elem.getBoundingClientRect().left - navbarWidth,
        windowWidth: windowWidth - navbarWidth,
    };
    
    const scrollInfo: {allowScroll: boolean, bypass: boolean} = neitherSideIsTouchingTheScreen(valuesForCalculation, dragDirection, elem);
   return scrollInfo;
}


function getNavbarWidthIfInWindowMode(): number
{

    if (true)
    {
        return 80;
    }
    //if not return 0
    //return 0;
}

//these threshold remains until user resize the window
var dirtyFixRight: number;
var dirtyFixLeft: number;
function neitherSideIsTouchingTheScreen(values: valuesForCalculation, dragDirection: string, elem: HTMLElement): {allowScroll: boolean, bypass: boolean}
{
    /*
        allowScroll true, bypass false = user scrolls normally; no side touching the screen
        allowScroll false, bypass false = user scrolls to the edge of the timeline.
        allowScroll false, bypass true = user scrolls to the edge of the timeline then changes direction.
    */
    let allowScroll: boolean = true;
    let bypass: boolean = false;

    if (values.leftSide > 0)
    {
        allowScroll = false;
        bypass = compareAndStoreDragDirection(dragDirection);


    }
    else if (values.rightSide < values.windowWidth)
    {
        //slap it back to the right place
        allowScroll = false;
        bypass = compareAndStoreDragDirection(dragDirection);
    }
    
    if (!allowScroll)
    {
        console.log(dirtyFixLeft);
        console.log(dirtyFixRight);
    }

    return {
        allowScroll, 
        bypass
    };

}

function compareAndStoreDragDirection(dragDirection: string): boolean
{
    //user changes scroll direction
    if (dragDirectionWhenStopped && dragDirectionWhenStopped !== dragDirection)
    {
        dragDirectionWhenStopped = null;
        currentThreshold = null;
        return true;
    }
    else
    {
        dragDirectionWhenStopped = dragDirection;
        return false;
    }
}


