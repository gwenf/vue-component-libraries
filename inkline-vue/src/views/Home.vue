<template>
  <div class="home-view-container">
    <img class="image -fluid" src="@/assets/cat_dog.jpg" alt="Cat Dog cute image" />

    <div class="hero-text">
      <h1>Adopt a new best friend.</h1>
      <i-button @click="togglePetForm" variant="primary">
        Add New Pet
      </i-button>
    </div>

    <i-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <i-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
        <i-form-input
          id="exampleInput2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name" />
      </i-form-group>

      <i-form-group id="exampleInputGroup3" label="Species:" label-for="exampleInput3">
        <i-form-select id="exampleInput3" :options="['cats', 'dogs']" required v-model="formData.species" />
      </i-form-group>

      <i-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
        <i-form-input
          id="exampleInput2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age" />
      </i-form-group>

      <i-button type="submit" variant="primary">Submit</i-button>
      <i-button type="reset" variant="danger">Reset</i-button>
    </i-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
