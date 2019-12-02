import { css } from 'vue-styled-components'
import { breakpoints, spacing, fonts, colors } from './theme'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 501px) {
      ${css(...args)}
    }
  `,
  big_vert: (...args) => css`
    @media (max-width: 1650px, min-height: 1200px ) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${css(...args)}
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${css(...args)}
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${css(...args)}
    }
  `,
  hover: (...args) => css`
    @media (hover: hover) {
      ${css(...args)}
    }
  `
}

const maxWidth = css`
  width: 100%;
  max-width: 96rem;
`

const mainPadding = css`
  padding: ${spacing.double_pad};
`

// TYPOGRAPHY
const sansFont = css`
  font-family: ${fonts.basis_regular};
  font-weight: 300;
`

const mediumFont = css`
  font-family: ${fonts.basis_medium};
  font-weight: 600;
  letter-spacing: 1px;
`

const pduFont = css`
  font-family: ${fonts.pdu};
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const bigType = css`
  ${mediumFont};
  font-size: 3.5rem;
  line-height: 1;
  text-transform: uppercase;
`

const mediumType = css`
  ${sansFont};
  line-height: 1;
  font-size: 1.45rem;
  ${media.tablet`
    font-size: 1.85rem;
  `}
  ${media.desktop`
    font-size: 2rem;
  `}
`

const bodyType = css`
  ${sansFont};
  font-size: 1.8rem;
  line-height: 1.35;
  ${media.medium`
    font-size: 2rem;
  `}
`

const smallType = css`
  ${sansFont};
  font-size: 1.4rem;
  line-height: 1.25;
`

const microType = css`
  ${sansFont};
  font-size: 1.125rem;
  line-height: 1.25;
`

const linkInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255,255,255,0);
  text-decoration: none;
  position: relative;
  display: block;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

const strokeType = (color, stroke, weight) => {
  return css`
    color: ${color || colors.white};
    -webkit-text-fill-color: ${color || colors.white};
    -webkit-text-stroke-color: ${stroke || colors.black};
    -webkit-text-stroke-width: ${weight || 1}px;
    -webkit-font-smoothing: antialiased;
 `
}

// STYLE UTILS
const buttonInit = css`
  ${linkInit};
  border-radius: 0;
  appearance: none;
`

const shadow = css`
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
`

// Flex Layout
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

const flexCenteredAll = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// Animation
const fullBg = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const absoluteTopFull = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const textUnderline = (color, weight) => {
  return css`
    &:after {
      content: '';
      width: 100%;
      border-bottom: ${weight || 1}px solid ${color};
      position: absolute;
      bottom: -1px;
      left: 0;
      opacity: 0;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  `
}

const buttonCircle = css`
  ${linkInit};
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: block;
  cursor: pointer!important;
  position: absolute;
  z-index: 1000;
  will-change: transform;
  transition: transform 150ms cubic-bezier(.19,.82,.65,.36);
  overflow: hidden;
  img {
    ${absoluteCentered};
    width: 105%;
    height: 105%;
  }
`

export {
  media,
  maxWidth,
  mainPadding,
  absoluteCentered,
  absoluteTopFull,
  bigType,
  mediumType,
  bodyType,
  smallType,
  microType,
  buttonInit,
  shadow,
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  flexRowCenteredAll,
  flexCenteredAll,
  fullBg,
  linkInit,
  sansFont,
  textUnderline,
  buttonCircle,
  mediumFont,
  strokeType,
  pduFont
}
