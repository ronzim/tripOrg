<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="green darken-1" dark>
        <router-view name="header" />
        <v-spacer />
        <v-toolbar-title class="version-tag"
          > TripOrg <i> v0.0.1 </i>
        </v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fluid class="grey lighten-5 h100 p2">
          <router-view name="content" />
        </v-container>
      </v-content>

      <!-- <template v-if="isMenuActive">
        <v-navigation-drawer app :permanent="isMenuActive" :width="300" right>
          <router-view name="sidePanel" />
        </v-navigation-drawer>
      </template> -->

      <v-footer color="green lighten-1" app>
        <router-view name="footer" />
      </v-footer>
    </v-app>
  </div>
</template>

<script>


export default {
  name: "App",

  // components: {

  // },

  data: () => ({
    //
  })
};
</script>
