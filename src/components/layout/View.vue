<template>
   <v-content id="layout-view" :style="style">
      <router-view />
   </v-content>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name: 'LayoutView',
   computed: {
      ...mapGetters(['responsive']),
      style() {
         if(this.responsive) return `padding: 45px 0px 0px;`;
         return `padding: 45px 0px 0px 260px;` ;
      }
   }
}
</script>