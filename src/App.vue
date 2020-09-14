<template>
	<main id="app" class="">
		
		<navbar></navbar>
		
		<router-view></router-view>
	</main>
</template>

<script lang="ts">
	import Vue from 'vue';
	import ItemList from "./components/ItemList.vue";
	import Navbar from "./components/Navbar.vue";
	
	
	export default Vue.extend( {
		name: 'App',
		components: { Navbar },
	} );
</script>
