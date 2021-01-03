export default function checkIfOffScreen(offsetX: number, offsetY: number, elem: HTMLElement)
{
    let thresholdRight: number = document.documentElement.clientWidth;
    let bottomNavBarHeight: number = parseInt(window.getComputedStyle(document.getElementById("navbar-wrapper")).getPropertyValue("height"));
    let thresholdBottom: number = document.documentElement.clientHeight - bottomNavBarHeight;
    let buttonWidth: number = parseInt(window.getComputedStyle(elem).getPropertyValue("width"));
    let arbitraryCompensation = 11;

    checkOffset(buttonWidth, thresholdRight, thresholdBottom, arbitraryCompensation, offsetX, offsetY);

    elem.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
}

function checkOffset(buttonWidth: number, thresholdRight: number, thresholdBottom: number, arbitraryCompensation: number, offsetX: number, offsetY: number)
{
    if (buttonOffScreenRight(buttonWidth, thresholdRight, offsetX))
    {
        offsetX = (thresholdRight - (buttonWidth/2)) - arbitraryCompensation;
    }
    if (buttonOffScreenLeft(buttonWidth, offsetX))
    {
        offsetX = -((buttonWidth/2) + (arbitraryCompensation + 9));
    }
    if (buttonOffScreenBottom(buttonWidth, thresholdBottom, offsetY))
    {
        offsetY = (thresholdBottom - (buttonWidth/2)) - arbitraryCompensation;
    }
    if (buttonOffScreenTop(buttonWidth, offsetY))
    {
        offsetY = -((buttonWidth/2) + (arbitraryCompensation + 9));
    }
}

function buttonOffScreenLeft(buttonWidth: number, offsetX: number): boolean
{
    return (buttonWidth + offsetX) < 0;
}
function buttonOffScreenRight(buttonWidth: number, thresholdRight: number, offsetX: number): boolean
{
    return (buttonWidth + offsetX) > thresholdRight;
}
function buttonOffScreenTop(buttonWidth: number, offsetY: number): boolean
{
    return (buttonWidth + offsetY) < 0;
}
function buttonOffScreenBottom(buttonWidth: number, thresholdBottom: number, offsetY: number): boolean
{
    return (buttonWidth + offsetY) > thresholdBottom;
}
