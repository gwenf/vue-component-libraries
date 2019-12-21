<template>
  <div class="home-view-container">
    <img class="hero-image" src="@/assets/cat_dog.jpg" alt="Cat Dog cute image" />

    <div class="header-info">
      <h1>Adopt a new best friend.</h1>
      <b-button variant="primary" v-b-modal.modal-1>
        Add New Pet
      </b-button>
    </div>

    <b-modal
      id="modal-1"
      ref="modal"
      title="Add New Pet"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
          <b-form-input
            id="exampleInput2"
            type="text"
            v-model="formData.name"
            required
            placeholder="Enter name"
          />
        </b-form-group>

        <b-form-group id="exampleInputGroup3" label="Species:" label-for="exampleInput3">
          <b-form-select id="exampleInput3" :options="['cats', 'dogs']" required v-model="formData.species" />
        </b-form-group>

        <b-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
          <b-form-input
            id="exampleInput2"
            type="number"
            v-model="formData.age"
            required
            placeholder="Enter age"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
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
    resetModal() {
      this.formData = {}
    },
    handleOk(e) {
      e.preventDefault()
      this.handleSubmit()
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
