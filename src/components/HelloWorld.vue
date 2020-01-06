<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to TripOrg
        </h1>
        <p class="subheading font-weight-regular">
          A simple tool for organizing trip memories
          <br/> From tramps to tramps!
        </p>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
