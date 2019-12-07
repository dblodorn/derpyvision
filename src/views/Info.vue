<template>
  <portal to="info">
    <InfoWrapper>
      <Tabs>
        <button>
          <span>ABOUT</span>
        </button>
        <button>
          <span>PROJECTS</span>
        </button>
      </Tabs>
      <StyledMarkup v-html="apiData.intro"/>
    </InfoWrapper>
  </portal>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import * as _ from '@/styles/mixins'
import { StyledMarkup } from '@/styles/components'
import * as t from '@/styles/theme'

const InfoWrapper = styled.section`
  ${_.overflowScrollY};
  height: 100%;
  width: 100%;
  z-index: 10000;
  background-color: ${t.colors.beige};
  position: fixed;
  padding: 0 0 4rem;
  top: 0;
  right: 0;
  border-left: 2px solid ${t.colors.white};
  * {
    text-align: center;
  }
`

const Tabs = styled.menu`
  ${_.flexRow};
  width: 100%;
  border-bottom: 2px solid ${t.colors.white};
  top: 0;
  position: sticky;
  background-color: ${t.colors.beige};
  button {
    ${_.buttonInit};
    ${_.menuType};
    width: 50%;
    padding: 2rem 2rem 2.3rem;
    border-right: 2px solid ${t.colors.white};
    &:last-child {
      border-right: 0;
    }
    &:hover {
      background-color: ${t.colors.blue};
    }
  }
`

// VUE
export default {
  components: {
    InfoWrapper,
    StyledMarkup,
    Tabs
  },
  computed: {
    ...mapState([
      'apiData'
    ])
  }
}
</script>
