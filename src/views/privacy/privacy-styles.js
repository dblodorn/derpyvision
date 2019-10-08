import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { spacing, colors } from '@/styles/theme'

const ScrollButton = styled.a`
  ${_.linkInit};
  ${_.buttonInit};
  ${_.smallType};
  display: inline;
  color: ${colors.black}!important;
  text-decoration: underline;
  &:hover {
    text-decoration: line-through;
  }
`

const CopyWrapper = styled.div`
  padding-bottom: ${spacing.big_pad};
  width: 100%;
  p {
    padding-left: 1rem;
  }
`

const PrivacySection = styled.section`
  ${_.flexColumn};
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 2rem auto 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  max-width: 80rem;
  #intro-wrapper {
    padding-top: 2rem;
    padding-bottom: 4rem;
    border-top: 1px solid ${colors.black};
  }
  .anchor-links {
    padding-bottom: 4rem;
    p {
      padding-left: 1rem;
    }
  }
  * {
    color: ${colors.black};
    p,
    li,
    a {
      ${_.smallType};
    }
    ul {
      padding-left: 2rem;
      list-style-type: circle;
      padding-bottom: 2rem;
    }
    #introduction > p {
      font-size: 2.5rem!important;
    }
  }
  h2 {
    font-size: 2rem!important;
    color: ${colors.black};
    padding-bottom: 1rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid ${colors.black};
  }
  h3 {
    padding-left: 1rem;
    font-weight: 700;
    padding-bottom: .75rem;
    padding-top: .75rem;
    color: ${colors.black}!important;
  }
  a {
    color: ${colors.black}!important;
    text-decoration: underline;
    &:hover {
      text-decoration: line-through;
    }
  }
  p,
  li {
    b {
      ${_.smallType};
    }
  }
`

export {
  ScrollButton,
  CopyWrapper,
  PrivacySection
}
