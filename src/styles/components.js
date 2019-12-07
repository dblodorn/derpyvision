import styled from 'vue-styled-components'
import Color from 'color'
import * as _ from './mixins'
import { fonts, spacing, colors } from './theme'

const StyledTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: black;
  font-family: ${fonts.circular_book};
  padding-bottom: ${spacing.double_pad};
  ${_.media.desktop`
    font-size: 8rem;
  `}
`

const SectionWrap = styled.section`
  padding: ${spacing.big_pad} ${spacing.single_pad};
  position: relative;
  width: 95%;
  min-height: 100vh;
  max-width: 86rem;
  margin: 4rem auto;
  border: 3px solid black;
  background-color: ${colors.white};
`

const props = {
  fillcolor: String
}

const LozengeButton = styled('button', props)`
  font-family: ${fonts.circular_medium};
  ${_.flexCenteredAll};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.125;
  margin: 0 auto;
  width: 16rem;
  height: 4.25rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 2.5rem;
  letter-spacing: 1px;
  padding-top: 1px;
  filter: drop-shadow(0 0 15px ${colors.black});
  transition: all 250ms ease;
  ${_.media.desktop`
    padding-top: 2px;
  `}
  ${_.media.hover`
    &:hover {
      background-color: ${props => props.fillcolor || colors.white};
      color: ${props => Color(props.fillcolor).rotate(-180).saturate(0.25).hex() || colors.black};
      filter: drop-shadow(0 0 15px ${props => Color(props.fillcolor).rotate(20) || colors.black});
    }
  `}
`

const SocialLink = styled('a', props)`
  ${_.flexCenteredAll};
  width: 3.75rem;
  height: 3.75rem;
  padding: .1rem;
  margin-top: .5rem;
  .wrapper {
    height: 100%;
    width: 100%;
    padding: 0;
    position: relative;
    transform: rotate(0deg);
    display: block;
  }
  svg {
    ${_.absoluteCentered};
    width: 45%;
    height: 45%;
    fill: black;
  }
  ${_.media.hover`
    &:hover {
      * {
        fill: #0d75ff;
      }
    }
  `}
`

const StyledMarkup = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 4rem;
  margin: 0 auto;
  h1 {
    ${_.bigType};
  }
  h2 {
    ${_.mediumType};
  }
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  a {
    ${_.bodyType};
  }
  p,
  li {
    padding-bottom: 2rem;
    color: ${colors.black};
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    display: inline!important;
    color: ${colors.black};
    text-decoration: underline;
    &:hover {
      color: ${colors.blue}!important;
    }
  }
  b {
    font-weight: 700!important;
  }
`

export {
  StyledTitle,
  SectionWrap,
  SocialLink,
  StyledMarkup,
  LozengeButton
}
