<template>
		<div>
      <div>
        <h4>Team Name</h4>
        <input type="text" v-model="teamName" />
      </div>

      <div>
        <h4>Submit</h4>
        <input type="submit" value="Submit" v-on:click="createTeam" />
      </div>
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
