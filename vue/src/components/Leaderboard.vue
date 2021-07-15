<template>
<div>
		<div v-for="item in items" :key="item.message">
					<div>
							<SpLinkIcon :link="'/team/' + item.id" :text="item.name" icon="RightArrow" />

							Score: {{ getScore(item.id) }}
					</div>
		</div>
</div>
</template>

<script>
export default {
  name: 'Leaderboard',
  props: ['items', 'scores'],
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    }
  },
  methods: {
    getScore(teamId) {
      return typeof this.scores[teamId] === 'undefined' ? 0 : this.scores[teamId]
    }
  }
}
</script>
