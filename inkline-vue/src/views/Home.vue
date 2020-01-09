<template>
  <div class="home-view-container">
    <img class="image -fluid" src="@/assets/cat_dog.jpg" alt="Cat Dog cute image" />

    <div class="hero-text">
      <h1>Adopt a new best friend.</h1>

      <i-button @click="showPetForm = true" variant="primary">
        Find a Pet
      </i-button>
      <i-button @click="$router.push('/enter-pet-info')" variant="primary">
        Add New Pet
      </i-button>
    </div>

    <i-modal variant="info" v-model="showPetForm">
      <template slot="header">Pet Information</template>

      
    </i-modal>
  </div>
</template>

<script>
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
  methods: {
    togglePetModal() {
      this.showPetModal = !this.showPetModal
    }
  }
}
</script>
