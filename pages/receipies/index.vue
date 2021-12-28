<template>
  <div class="posts-page">
    <RecepieList :posts="loadedPosts" />
  </div>
</template>

<script>
import RecepieList from "@/components/AllRecepies/RecepieList";

export default {
  components: {
    RecepieList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
