<template>
  <div>
    <div class="container">
      <h1>Home</h1>
      <Leaderboard v-bind:items="teams" v-bind:scores="scores" />
      <AddTeamForm />
    </div>
    <div id="arcade-window-wrapper">
      <div id="arcade-window">
        <div class="joystick"></div>
        <div class="btn1"></div>
        <div class="btn2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from '../components/Leaderboard'
import AddTeamForm from '../components/AddTeamForm.vue'

export default {
  name: 'Home',
  data() {
    return {
      scores: {}
    }
  },
  components: {
    Leaderboard,
    AddTeamForm
  },
  computed: {
    teams() {
      const teams =
        this.$store.getters['octalmage.gitgood.gitgood/getTeamAll']({
          params: {}
        })?.Team ?? []
			console.log('teams: ', teams);
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

    const teams =
      this.$store.getters['octalmage.gitgood.gitgood/getTeamAll']({
        params: {}
      })?.Team ?? []

    const scores = {}

    for (let team of teams) {
      const response = await (await fetch(`http://localhost:1317/octalmage/gitgood/gitgood/getTeamExp?team=${team.id}`)).json()
      scores[team.id] = response.balance
    }

    this.scores = scores
  }
}
</script>
