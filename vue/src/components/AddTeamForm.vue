<template>
		<div>
      <form action="">
        <h4>Create new team</h4>
        <div class="field">
          <label for="newTeamName">Team Name</label>
          <input type="text" v-model="teamName" />
        </div>
        <div class="field">
          <input class="sp-button sp-button-primary" type="submit" value="Submit" v-on:click="createTeam" />
        </div>
      </form>
    </div>
</template>
<script>
export default {
	name: 'AddTeamForm',
	data: () => ({
    teamName: 'Your Team Here',
  }),
	computed: {
		currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters["common/wallet/address"];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
		loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters["common/wallet/loggedIn"];
      } else {
        return false;
      }
    },
	},
	methods: {
		async createTeam() {
      if (!this.loggedIn) {
        alert("Unlock your wallet!");
        return;
      }
      const value = {
        creator: this.currentAccount,
        name: this.teamName,
				slackIntegration: '#gitgood'
      };
      const response = await this.$store.dispatch("octalmage.gitgood.gitgood/sendMsgCreateTeam", {
        value,
        fee: [],
      });
      console.log(response);
    },
	},

}
</script>
