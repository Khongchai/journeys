interface valuesForCalculation {
    rightSide: number,
    leftSide: number,
    windowWidth: number
};

export default function allowScroll(elem: HTMLElement): boolean
{
    let windowWidth: number = document.documentElement.clientWidth;

    //rightnow this only handles large screen, for small screen, no need to
    //take into account the width of the side navbar
    let navbar: HTMLElement = document.getElementById("navbar-wrapper");
    let navbarWidth: number = getNavbarWidthIfInWindowMode(navbar);

    let valuesForCalculation: valuesForCalculation = {
        rightSide: elem.getBoundingClientRect().right - navbarWidth,
        leftSide: elem.getBoundingClientRect().left - navbarWidth,
        windowWidth: windowWidth - navbarWidth,
    };
    
    const okToScroll: boolean = neitherSideIsTouchingTheScreen(valuesForCalculation);
    
   return okToScroll;
}

function getNavbarWidthIfInWindowMode(navbar: HTMLElement): number
{
    if (true)
    {
        return parseInt(window.getComputedStyle(navbar).getPropertyValue("width"));
    }
    //if not return 0
    //return 0;
}

function neitherSideIsTouchingTheScreen(values: valuesForCalculation): boolean
{
    let touching: boolean = false;
    let notTouching: boolean = true;

    if (values.leftSide >= 0)
    {
        return touching;
    }
    else if (values.rightSide <= values.windowWidth)
    {
        return touching;
    }
    else 
    {
        return notTouching;
    }

}

