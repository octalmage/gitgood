<template>
	<SpSidebar
		v-on:sidebar-open="sidebarOpen = true"
		v-on:sidebar-close="sidebarOpen = false"
	>
		<template v-slot:default>
			<SpLinkIcon link="/" text="Home" icon="Dashboard" />
			<SpLinkIcon link="/wallet" text="Wallet" icon="Transactions" />
			<SpLinkIcon link="/admin" text="Admin" icon="Lock" />
			<div class="sp-dash"></div>
		</template>
		<template v-slot:footer>
			<SpStatusAPI :showText="sidebarOpen" />
			<SpStatusRPC :showText="sidebarOpen" />
			<SpStatusWS :showText="sidebarOpen" />
			<div class="sp-text">Build: v0.3.8</div>
		</template>
	</SpSidebar>
</template>

<script>
export default {
	name: 'Sidebar',
	data() {
		return {
			sidebarOpen: true
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		}
	}
}
</script>
