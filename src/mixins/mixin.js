import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
export default Vue.mixin({
  filters: {
    src(value, item) {
      let src = ''
      if (value) {
        src = item.srcs
      } else {
        src = item.src
      }
      return src
    }
  },
  computed: mapState([
    'count'
  ]),
  methods: mapActions([
    'increment'
  ])
})
