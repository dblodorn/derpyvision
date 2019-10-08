<template>
  <FullWindow :zIndex="100000" :bgcolor="color">
    <CloseButton :Method="Method" :xColor="typeColor"/>
    <ContentWrapper :typecolor="typeColor" :bgcolor="color">
      <div class="inner">
        <div class="intro-copy" v-html="Data.popup_intro"/>
        <form id="subForm" class="js-cm-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="A61C50BEC994754B1D79C5819EC1255C73742CA063CD64D7AFC4C519A01ED23F891E3DF67500DBD50AA792038D7F320A103972110E5D775301B5F055F0086151">
          <p>
            <input id="fieldName" name="cm-name" type="text" placeholder="Name"/>
          </p>
          <p>
            <input id="fieldEmail" name="cm-drzq-drzq" type="email" class="js-cm-email-input" required placeholder="Email"/>
          </p>
          <p>
            <input id="fieldguiulh" name="cm-f-guiulh" type="text" placeholder="City"/>
          </p>
          <div class="consent-wrapper">
            <input id="cm-privacy-consent" name="cm-privacy-consent" required type="checkbox"/>
            <label for="cm-privacy-consent">I agree to be emailed</label>
            <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true" />
          </div>
          <LozengeButton class="js-cm-submit-button" type="submit" :fillcolor="typeColor">
            <span>Subscribe</span>
          </LozengeButton>
        </form>
      </div>
    </ContentWrapper>
  </FullWindow>
</template>

<script>
import styled from 'vue-styled-components'
import Color from 'color'
import * as _ from '@/styles/mixins'
import { colors, fonts } from '@/styles/theme'
import { LozengeButton } from '@/styles/components'
import FullWindow from '@/components/FullWindow'
import CloseButton from '@/components/CloseButton'

const props = {
  typecolor: String,
  bgcolor: String
}

const ContentWrapper = styled('div', props)`
  ${_.flexCenteredAll};
  width: 100%;
  height: calc(100vh - 8rem);
  padding: 2rem;
  .inner {
    width: 100%;
    max-width: 56rem;
    margin: 0 auto;
  }
  .intro-copy {
    padding-bottom: 3rem;
    text-align: center;
    p {
      font-size: 2.75rem;
      color: ${props => props.typecolor};
    }
  }
  .input-wrap,
  .privacy {
    padding-bottom: 1.5rem;
    ${_.flexRow};
    justify-content: flex-start;
  }
  .privacy {
    width: 100%;
    position: relative;
  }
  form {
    label {
      font-family: ${fonts.sans};
      font-size: 1.25rem;
      color: ${props => props.typecolor};
      display: inline-block;
      line-height: 1;
      transform: translateY(-.6rem);
      -webkit-appearance: none;
    }
    input[type=checkbox] {
      border-radius: 0;
      -webkit-text-fill-color: ${props => props.bgcolor}!important;
      -webkit-appearance: none;
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${colors.white};
      border: 1px solid ${props => props.typecolor};
      margin-right: 1rem;
      cursor: pointer;
      &:checked {
        background-color: ${props => props.typecolor};
      }
      &:checked + label{
        color: ${props => props.typecolor}!important;
      }
    }
    .cm-privacy-consent {
      padding: 0!important;
      line-height: 1;
      max-width: 32rem;
      color: white;
      position: relative;
      width: 100%;
    }
    input[type=email],
    input[type=text],
    input[type=tel] {
      font-family: ${fonts.circular_medium};
      font-size: 2.25rem;
      width: 100%;
      border: 1px solid ${props => props.typecolor};
      border-radius: 0;
      margin: 0;
      -webkit-appearance: none;
      padding: .6rem 1rem;
      color: ${colors.black};
      -webkit-text-fill-color: ${colors.black};
      &:focus {
        outline: none!important;
        box-shadow: 0;
      }
      &:placeholder,
      &:-webkit-input-placeholder,
      &:-moz-placeholder {
        font-family: ${fonts.sans};
        color: ${props => props.typecolor}!important;
        -webkit-text-fill-color: ${props => props.typecolor}!important;
      }
      margin-bottom: 1rem;
    }
    .submit-field {
      ${_.flexRow};
      justify-content: space-between;
    }
    .consent-wrapper {
      width: 100%;
      padding: 0 0 2rem;
    }
    .email-phone {
      ${_.flexRow};
    }
  }
`

export default {
  components: {
    ContentWrapper,
    FullWindow,
    CloseButton,
    LozengeButton
  },
  props: {
    Data: {
      type: Object,
      default: () => {},
      useDefaultForNull: true
    },
    Method: {
      type: Function,
      default: () => { console.log('clicked') },
      useDefaultForNull: true
    }
  },
  mounted () {
    this.typeColor = Color(this.color).rotate(-180).saturate(0.5).hex()
  },
  data () {
    return {
      color: '#FFE600',
      typeColor: 'transparent'
    }
  }
}
</script>
