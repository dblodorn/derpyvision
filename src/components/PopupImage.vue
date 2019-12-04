<template>
  <ButtonPop @click.native="popupHandler">
    <ImageWrapper>
      <LazyImg :src="image"/>
    </ImageWrapper>
    <portal to="image-popup" v-if="popped">
      <PortalWrapper>
        <CloseButton @click.native="popupHandler">
          <Close :Color="'white'"/>
        </CloseButton>
        <div id="popup-inner">
          <div id="image-wrapper">
            <ImageWrapper>
              <LazyImg :src="image"/>
            </ImageWrapper>
          </div>
        </div>
      </PortalWrapper>
    </portal>
  </ButtonPop>
</template>

<script>
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import LazyImg from '@/components/LazyImg'
import Close from '@/components/Close'

const ButtonPop = styled.button`
  ${_.buttonInit};
  position: relative;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  overflow-y: visible;
  padding-bottom: 140%;
  position: relative;
`
const PortalWrapper = styled.div`
  ${_.flexCenteredAll};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0,0,0,.85);
  z-index: 10000;
  padding: 5%;
  #popup-inner {
    ${_.flexCenteredAll};
    width: 100%;
    height: 100%;
    max-width: 120rem;
    max-height: 96rem;
    position: relative;
  }
  #image-wrapper {
    width: 100%;
    max-width: 45rem;
    position: relative;
  }
`
const CloseButton = styled.button`
  ${_.buttonInit};
  width: 6rem;
  height: 6rem;
  top: .5rem;
  right: .5rem;
  z-index: 100;
  position: fixed;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`
export default {
  components: {
    ButtonPop,
    LazyImg,
    PortalWrapper,
    CloseButton,
    Close,
    ImageWrapper
  },
  props: ['image'],
  data () {
    return {
      popped: false
    }
  },
  methods: {
    popupHandler () {
      console.log('popup')
      this.popped = !this.popped
    }
  }
}
</script>