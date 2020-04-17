const colors = {
  branding: {
    lightGray: '#E9EAEB',
    steelGray: '#94969A',
    brick: '#E9EAEB'
  },
  static: {
    disabledText: '#767676',
    plainwhite: '#fff'
  }
}
const bodyColors = {
  primaryTextColor: '#111111',
  bodyBackgroundColor: colors.branding.brick
}
// TODO :Willa add elevation later

export default {
  ...bodyColors,
  ...colors
}
