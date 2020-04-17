// Responsive Website using flex/Grid(Cover Responsable endpoints for 1440px,768px, 320px).
const breaks = {
  large: '144opx',
  medium: '768px',
  samll: '450px' // il cahge itot 320 later , 320 is too small to configure my emulator
}

const less = {
  lessThanLarge: `(max-width: ${breaks.large})`,
  lessThanMedium: `(max-width: ${breaks.medium})`,
  lessThanSmall: `(max-width: ${breaks.small})`
}

const great = {
  greaterThanLarge: `(min-width: ${breaks.large})`,
  greaterThanMedium: `(min-width: ${breaks.medium})`,
  greaterThanSmall: `(min-width: ${breaks.small})`
}

const createBetween = (start, stop) =>
  `${great[`greaterThan${start}`]} and ${less[`lessThan${stop}`]}`

const between = {
  betweenSmallMedium: createBetween('Small', 'Medium'),
  betweenMediumLarge: createBetween('Medium', 'Large'),
  betweenLargeHuge: createBetween('Large', 'Huge')
}

export default { ...less, great, ...between }
