//Refactor checkifoffscreen to another file and refactor offsetx and y to another file with setters and getters.

var initialX: number
var initialY: number

//offsetX and Y are needed beccause setTranslate doesn't actually change the css position
//so something needs to keep track of where the position of the element is
export var offsetX: number = 0
export var offsetY: number = 0
var differenceX: number
var differenceY: number

export default function homeButtonDrag() {
  var homeButton = document.getElementById("home-button")
  homeButton.addEventListener("touchstart", start)
  homeButton.addEventListener("touchmove", e => move(e, homeButton))
  homeButton.addEventListener("touchend", stop)
}

function start(e: TouchEvent) {
  initialX = e.touches[0].clientX
  initialY = e.touches[0].clientY
}

function move(e: TouchEvent, homeButton: HTMLElement) {
  e.preventDefault()
  differenceX = e.touches[0].clientX - initialX + offsetX
  differenceY = e.touches[0].clientY - initialY + offsetY
  homeButton.style.transform = `translate3d(${differenceX}px, ${differenceY}px, 0)`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function stop() {
  offsetX = differenceX
  offsetY = differenceY
  checkIfOffScreen()
}

export function checkIfOffScreen() {
  let thresholdRight: number = document.documentElement.clientWidth
  let bottomNavBarHeight: number = parseInt(
    window
      .getComputedStyle(document.getElementById("navbar-wrapper"))
      .getPropertyValue("height")
  )
  let thresholdBottom: number =
    document.documentElement.clientHeight - bottomNavBarHeight
  var homeButton = document.getElementById("home-button")
  let buttonWidth: number = parseInt(
    window.getComputedStyle(homeButton).getPropertyValue("width")
  )
  let arbitraryCompensation = 11

  checkOffset(
    buttonWidth,
    thresholdRight,
    thresholdBottom,
    arbitraryCompensation
  )

  homeButton.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
}

function checkOffset(
  buttonWidth: number,
  thresholdRight: number,
  thresholdBottom: number,
  arbitraryCompensation: number
) {
  if (buttonOffScreenRight(buttonWidth, thresholdRight)) {
    offsetX = thresholdRight - buttonWidth / 2 - arbitraryCompensation
  }
  if (buttonOffScreenLeft(buttonWidth)) {
    offsetX = -(buttonWidth / 2 + (arbitraryCompensation + 9))
  }
  if (buttonOffScreenBottom(buttonWidth, thresholdBottom)) {
    offsetY = thresholdBottom - buttonWidth / 2 - arbitraryCompensation
  }
  if (buttonOffScreenTop(buttonWidth)) {
    offsetY = -(buttonWidth / 2 + (arbitraryCompensation + 9))
  }
}

function buttonOffScreenLeft(buttonWidth: number): boolean {
  return buttonWidth + offsetX < 0
}
function buttonOffScreenRight(
  buttonWidth: number,
  thresholdRight: number
): boolean {
  return buttonWidth + offsetX > thresholdRight
}
function buttonOffScreenTop(buttonWidth: number): boolean {
  return buttonWidth + offsetY < 0
}
function buttonOffScreenBottom(
  buttonWidth: number,
  thresholdBottom: number
): boolean {
  return buttonWidth + offsetY > thresholdBottom
}
