<template>
	<div>
		<div class="container">
			<h1>H1</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		}
	}
}
</script>
