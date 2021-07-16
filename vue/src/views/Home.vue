<template>
  <div>
		<AddStatForm
			v-bind:goals="goals"
			v-bind:teams="teams"
			v-bind:showForm="showAddStatForm"
		/>
    <div class="container">
			<h1>All Teams</h1>
      <Leaderboard v-bind:items="teams" v-bind:scores="scores" />
      <AddTeamForm v-bind:showForm="showAddTeamForm" />
    </div>
    <div id="arcade-window-wrapper">
      <div id="arcade-window">
        <div class="joystick"></div>
        <div class="btn1"></div>
        <div class="btn2"></div>
      </div>
    </div>
		<div id="button-wrapper">
			<button
				class="sp-button sp-button-primary"
				v-on:click="updateShowAddStatForm"
			>
				+ Accomplishment
			</button>
			<button
				class="sp-button sp-button-secondary"
				v-on:click="updateShowAddTeamForm"
			>
				Add a Team
			</button>
		</div>
  </div>
</template>

<script>
import Leaderboard from '../components/Leaderboard'
import AddTeamForm from '../components/AddTeamForm.vue'
import AddStatForm from '../components/AddStatForm.vue'

export default {
  name: 'Home',
  data() {
    return {
      scores: {},
			showAddStatForm: false,
			showAddTeamForm: false,
    }
  },
  components: {
    Leaderboard,
    AddTeamForm,
		AddStatForm,
	},
  computed: {
		goals() {
      const goals =
        this.$store.getters['octalmage.gitgood.gitgood/getGoalAll']({
          params: {}
        })?.Goal ?? []

      return goals
    },
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
  },
	methods: {
		updateShowAddStatForm: function (event) {
			event.preventDefault();
			this.showAddStatForm = !this.showAddStatForm;
		},
		updateShowAddTeamForm: function (event) {
			event.preventDefault();
			this.showAddTeamForm = !this.showAddTeamForm;
		}
	}
}
</script>
