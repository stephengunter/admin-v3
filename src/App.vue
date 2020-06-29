<template>
	<v-app>
		<layout-toolbar />

		<layout-drawer />

		<layout-view />
	</v-app>
</template>

<script>
import { SET_WINDOW_WIDTH, SET_RESPONSIVE } from '@/consts';
export default {
	name: 'App',
	data: () => ({
		
	}),
	mounted(){
		if(window.innerWidth) this.$store.commit(SET_WINDOW_WIDTH, window.innerWidth);
		this.onResponsiveInverted();
		
		window.addEventListener('resize', this.onResponsiveInverted);
	},
	beforeDestroy(){
      window.removeEventListener('resize', this.onResponsiveInverted);
	},
	methods:{
		onResponsiveInverted () {
			if(window.innerWidth) this.$store.commit(SET_WINDOW_WIDTH, window.innerWidth);
			
         if(window.innerWidth < 991) {
            this.$store.commit(SET_RESPONSIVE, true);
         }else {
            this.$store.commit(SET_RESPONSIVE, false);
			}
		}
	}
};
</script>

<style lang="scss">
* :not(.v-icon) {
  font-family: "微軟正黑體",sans-serif!important;
}
html {
  scroll-behavior: smooth;
}
.cn {
	font-family: "微軟正黑體"
}

.base-th {
	color: #4caf50 !important;
	min-width: 120px
}
</style>
