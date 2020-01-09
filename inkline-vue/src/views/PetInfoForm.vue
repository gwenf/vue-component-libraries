<template>
  <i-form @submit.prevent="handleSubmit" v-if="showPetForm">
    <i-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
      <i-input
        id="exampleInput2"
        type="text"
        v-model="formData.name"
        required
        placeholder="Enter name"
      />
    </i-form-group>

    <i-form-group id="exampleInputGroup3" label="Species:" label-for="exampleInput3">
      <i-select
        id="exampleInput3"
        :options="['cats', 'dogs']"
        required
        v-model="formData.species"
      />
    </i-form-group>

    <i-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
      <i-input
        id="exampleInput2"
        type="number"
        v-model="formData.age"
        required
        placeholder="Enter age"
      />
    </i-form-group>

    <i-button type="submit" variant="primary">Submit</i-button>
    <i-button type="reset" variant="danger">Reset</i-button>
  </i-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
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
