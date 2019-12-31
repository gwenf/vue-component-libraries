<template>
  <i-row>
    <i-column xs="12" sm="8" offset-sm="2">
      <PetTable
        species="cats"
        :pets="cats"
      />
    </i-column>
  </i-row>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
