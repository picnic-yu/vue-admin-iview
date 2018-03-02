<template>
	<div id="main" class="app-main">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				theme: this.$store.state.app.themeColor
			};
		},
		mounted() {

		},
		beforeDestroy() {

		},
		methods: {

		}
	};
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		overflow: hidden;
	}
	
	.app-main {
		width: 100%;
		height: 100%;
	}
	
	.demo-spin-icon-load {
		animation: ani-demo-spin 1s linear infinite;
	}
	
	@keyframes ani-demo-spin {
		from {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.demo-spin-col {
		height: 100px;
		position: relative;
		border: 1px solid #eee;
	}
</style>