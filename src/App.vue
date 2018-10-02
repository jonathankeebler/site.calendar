<template>
  <v-app class="page-container"  id="app">

	  <v-navigation-drawer
		fixed
		app
    	disable-route-watcher
		>
		Navigation - don't block me
	  </v-navigation-drawer>


	  <v-content>
		<v-container fluid>
			<router-view :key="$route.fullPath"/>
		</v-container>

	  </v-content>

	  <v-footer app></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: ()=>{
	  return {
	  }
  },
  computed:
  {
  },
  watch: {
	  
  },
  mounted: function()
  {
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.md-dialog .md-content
{
	margin: 20px;
}

.md-error
{
	color: red;
}

.v-content
{
	background-color: #fff;
}
</style>
