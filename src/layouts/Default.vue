<template>
  <v-app>
    <v-app-bar app color="red darken-2" elavation="1">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar" color="#000000"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon color="#000000">mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" :mini-variant="mini">
      <v-list dense color="red darken-2">
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="sidebar = !sidebar" color="#000000">mdi-arrow-left-circle</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <h3>Lista de Tarefas</h3>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list-item class="px-2" @click="mini = !mini" >
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Usuário</v-list-item-content>
        <v-btn icon small><v-icon>mdi-chevron-left</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon> {{ item.icon}} </v-icon>
          </v-list-item-icon>
          <v-list-item-content> {{ item.title}} </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app color="#ECEFF1" class="py-3">
    <span class="caption">MyTodoList &copy;2021 </span></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebar: true,
      mini: true,
      items: [
        { title: "Home", icon: "mdi-home", to: "/"},
        { title: "Perfil", icon: "mdi-account-cog", to: "/perfil"},
        { title: "Configurações", icon: "mdi-cog", to: "/config"},
        { title: "Sair", icon: "mdi-exit-to-app", to: "/login"},
      ],
    };
  },
};
</script>

<style>

</style>