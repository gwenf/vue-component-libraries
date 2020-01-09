<template>
  <i-row class="pet-info-form-page">
    <i-column xs="12" sm="6" offset-sm="3">
      <div class="_text-left">
        <h1>Find a Loving Home</h1>
        <p>Enter your pet's info here.</p>
      </div>
      <i-form @submit.prevent="handleSubmit">
        <i-form-group id="pet-name-group" label="Pet's Name:" label-for="pet-name">
          <i-input
            id="pet-name"
            type="text"
            v-model="formData.name"
            required
            placeholder="Enter name"
          />
        </i-form-group>

        <i-form-group id="pet-type-group" label="Species:" label-for="pet-type">
          <i-select
            id="pet-type"
            :options="['cats', 'dogs']"
            required
            v-model="formData.species"
          />
        </i-form-group>

        <i-form-group id="pet-age-group" label="Pet's Age:" label-for="pet-age">
          <i-input
            id="pet-age"
            type="number"
            v-model="formData.age"
            required
            placeholder="Enter age"
          />
        </i-form-group>

        <div class="pet-form-button-group">
          <i-button type="submit" variant="primary">Submit</i-button>
          <i-button type="reset" link variant="danger">Reset</i-button>
        </div>
      </i-form>
    </i-column>
  </i-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
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
