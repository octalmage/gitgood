<template>
	<div>
		<div class="container">
			<h1>Team</h1>
			<AddStatForm v-bind:goals="goals" v-bind:showForm="true" />
		</div>
	</div>
</template>

<script>
import AddStatForm from '../components/AddStatForm.vue';

export default {
	name: 'Team',
	components: {
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
    address() {
      return this.$store.getters['common/wallet/address']
    }
  },
  async mounted() {
    await this.$store.dispatch('octalmage.gitgood.gitgood/QueryGoalAll', {
      options: { subscribe: false, all: true },
      params: {}
    })
  }
}
</script>
