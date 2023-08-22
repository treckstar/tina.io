export interface remToPxProps {
  remValue: number;
}


export const remToPx = (remValue: number) => {
  let rootFontSize =
    typeof window === 'undefined'
      ? 16
      : parseFloat(window.getComputedStyle(document.documentElement).fontSize)

  return remValue * rootFontSize
}
