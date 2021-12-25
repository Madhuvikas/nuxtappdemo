<template>
  <div id="app">
    <TheHeader @sidenavToggle="displaySidenav =!displaySidenav"/>
    <ThesideNav
    :show="displaySidenav" />

         <nuxt/>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import ThesideNav from "@/components/Navigation/ThesideNav.vue";
     export default {
      components: {
       TheHeader,
       ThesideNav
       },
       data(){
       return{
         displaySidenav:false,
       }
       }
    };
</script>
