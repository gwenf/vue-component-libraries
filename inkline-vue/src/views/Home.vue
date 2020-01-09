<template>
  <div class="home-view-container">
    <img class="image -fluid" src="@/assets/cat_dog.jpg" alt="Cat Dog cute image" />

    <div class="hero-text">
      <h1>Adopt a new best friend.</h1>
      <p>{{ animalCount }} Furry Friends Available for Adoption</p>
      <i-button @click="showPetModal = true" variant="primary">
        Find a Pet
      </i-button>
      <i-button @click="$router.push('/pet-form')" variant="primary">
        Add New Pet
      </i-button>
    </div>

    <i-modal variant="info" v-model="showPetModal">
      <template slot="header">What kind of pet are you looking for?</template>
      <div class="_display-flex _justify-content-space-around">
        <i-button to="/cats" variant="primary">Cat</i-button>
        <i-button to="/dogs" variant="success">Dog</i-button>
      </div>
    </i-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      showPetModal: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalCount'])
  },
  methods: {
    togglePetModal() {
      this.showPetModal = !this.showPetModal
    }
  }
}
</script>
