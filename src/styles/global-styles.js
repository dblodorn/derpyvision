import { injectGlobal } from 'vue-styled-components'
import * as _ from './mixins'
import { colors } from './theme'

injectGlobal`
  .fade-enter {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
  }
  body {
    ${_.sansFont};
  }
  button {
    ${_.buttonInit};
  }
  h1 {
    ${_.sansFont};
    font-size: 2rem;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
  }
  *::-webkit-scrollbar {
    width: 3px;
  }
  *::-webkit-scrollbar-track {
    background: ${colors.black};
  }
  *::-webkit-scrollbar-thumb {
    background: ${colors.white};
  }
  *::-webkit-scrollbar-thumb:hover {
    background: ${colors.fc[3]};
  }
`
