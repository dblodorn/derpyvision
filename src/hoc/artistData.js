import DataSource from '../store/source'
import Vue from 'vue'

const artistData = (component, selectData) => {
  return Vue.component('artistData', {
    render (createElement, context) {
      return createElement(component, {
        props: {
          content: this.projectData
        }
      })
    },
    data () {
      return {
        projectData: false
      }
    },
    methods: {
      handleChange () {
        this.projectData = selectData(DataSource)
      }
    },
    mounted () {
      DataSource.addChangeListener(this.handleChange)
    },
    beforeDestroy () {
      DataSource.removeChangeListener(this.handleChange)
    }
  })
}

export default artistData
