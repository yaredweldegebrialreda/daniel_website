<template>
  <v-content>
    <v-container>
      <div class="block text-center  white--text notFound">
        <h2>Page not found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at <a>daniel.melesse@adey-meselesh.de</a> </p>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {
      items: []
    };
  }
};
</script>