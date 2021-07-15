<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.message">{{ item.name }} - {{ getScore(item.id) }}</li>
    </ul>
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
