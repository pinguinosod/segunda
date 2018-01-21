<template>
  <v-app id="primera">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <router-link to="/start">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/rodrigolosQuest">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>nature_people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Rodrigolo's Quest</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/AntarcticQuest">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>nature_people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Antarctic Quest - Bad Choices</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/cryptocurrencies">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>attach_money</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Cryptocurrencies</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="deep-purple darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer app>
      
      <v-flex xs12>
        <div class="px-0 text-xs-center">&copy; 2018 David Cautin. Distributed under the MIT License.</div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        title: 'Segunda',
        drawer: false
      }
    },
    components: {
    },
  }
</script>

<style>
a {
    text-decoration:none;
}
</style>
