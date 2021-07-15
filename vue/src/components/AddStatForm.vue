<template>
	<div>
		<select v-model="statType">
			<option selected value="0">Choose a goal</option>
			<option v-bind:key="goal.id" v-for="goal in goals" v-bind:value="goal.id">
				{{ goal.label }}
			</option>
		</select>
		<form>
			<div class="field">
				<label class="label">Initial</label>
				<input v-model="initial" placeholder="initial" type="number">
			</div>
			<div>
				<label class="label">Final</label>
				<input v-model="final" placeholder="final" type="number">
			</div>
			<button v-on:click="submitStat">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'AddStatForm',
	props: ['goals'],
	data() {
		return {
			statType: "0",
			initial: 0,
			final: 0,
		}
	},
	methods: {
		submitStat: async function (event) {
			event.preventDefault();

			if (this.statType !== "0") {
				// submit to the chain
				const value = {
					owner: this.$route.params.id,
					initial: this.initial,
					final: this.final,
					statType: this.statType,
					creator: this.currentAccount,
				};

				try {
					const response = await this.$store.dispatch("octalmage.gitgood.gitgood/sendMsgCreateStat", {
						value,
						fee: [],
					});

					return response;
				} catch (error) {
					console.log('error: ', error);
				}
			}
		},
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		},
		currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters['common/wallet/address']
        } else {
          return null
        }
      } else {
        return null
      }
    },
		loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/loggedIn']
      } else {
        return false
      }
    }
	}
}
</script>
