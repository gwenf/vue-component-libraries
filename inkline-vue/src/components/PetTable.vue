<template>
  <div>
    <h1>{{ species[0].toUpperCase() + species.slice(1) }} for Adoption</h1>
    <i-table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Color</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pet, i) in pets" :key="pet.name + i">
          <th scope="row">#</th>
          <td>
            <router-link :to="`/pets/${species}/${i}`">
              {{ pet.name }}
            </router-link>
          </td>
          <td>{{ pet.gender }}</td>
          <td>{{ pet.color }}</td>
          <td>{{ pet.location }}</td>
        </tr>
      </tbody>
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
