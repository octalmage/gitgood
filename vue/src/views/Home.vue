<template>
  <div>
    <div class="container">
      <h1>Home</h1>
      <Leaderboard v-bind:items="teams" />
    </div>
  </div>
</template>

<script>
import Leaderboard from '../components/Leaderboard'

export default {
  name: 'Home',
  components: {
    Leaderboard
  },
  computed: {
    teams() {
      const teams =
        this.$store.getters['octalmage.gitgood.gitgood/getTeamAll']({
          params: {}
        })?.Team ?? []

      return teams
    },
    address() {
      return this.$store.getters['common/wallet/address']
    }
  },
  async mounted() {
    await this.$store.dispatch('octalmage.gitgood.gitgood/QueryTeamAll', {
      options: { subscribe: false, all: true },
      params: {}
    })
  }
}
</script>
