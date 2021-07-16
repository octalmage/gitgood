<template>
	<div class='LeaderboardTeams'>
			<div v-for="(item, index) in items" :key="item.message">
						<div class="leaderboard-item">
								<div class="leaderboard-rank">{{ index + 1 }}</div>
								<SpLinkIcon id="leaderboard-team" :link="'/team/' + item.id" :text="item.name" />
								<h3>Score: {{ getScore(item.id) }}</h3>
								<h3>Level: {{ calculateLevel(getScore(item.id)) }}</h3>
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
    },
		calculateLevel(exp) {
			if (exp < 9) {
				return 0;
			}
			// Set the first level at around 10 exp
			exp = exp - 9;

			// the last divisor helps "flatten" the curve a bit
			return Math.ceil(Math.sqrt(exp/9));
		},
  }
}
</script>
