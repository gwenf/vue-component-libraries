<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Adopt a Pet</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/cats" text>Cats</v-btn>
        <v-btn to="/dogs" text>Dogs</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
