<template>
  <div>
    <h1>{{ species }} for Adoption</h1>
    <i-table striped hover :items="pets">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </i-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>
