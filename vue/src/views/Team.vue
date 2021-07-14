<template>
	<div>
		<div class="container">
			<h1>Team</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Team',
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		}
	}
}
</script>
