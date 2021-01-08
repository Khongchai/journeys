export default function elementIsVisibleInViewport(elementTopPosition: number, bottomThreshold: number, topThreshold: number, elementBottomPosition: number): boolean
{
    /* Everything assume absolute value relative to viewport */

    let topOfElementIsVislbeAtTheBottomOfThePage: boolean = elementTopPosition < bottomThreshold;
    let bottomOfElementIsVisibleAtTheTopOfThePage: boolean = topThreshold < elementBottomPosition;

    return topOfElementIsVislbeAtTheBottomOfThePage && bottomOfElementIsVisibleAtTheTopOfThePage;
}