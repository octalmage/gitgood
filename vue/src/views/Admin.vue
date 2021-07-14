<template>
  <div>
    <div class="container">
      <div v-show="!hasFunds && currentAccount" class="sp-box sp-shadow sp-form-group">
        <div class="sp-box sp-shadow sp-form-group">
          <sp-button :disabled="submitting" @click="getEXP">Get 1 EXP to activate your account</sp-button>
        </div>
      </div>
      <!-- this line is used by starport scaffolding # 4 -->
		<SpType modulePath="octalmage.gitgood.gitgood" moduleType="Achievement"  />
		<SpType modulePath="octalmage.gitgood.gitgood" moduleType="Goal"  />
		<SpType modulePath="octalmage.gitgood.gitgood" moduleType="Stat"  />
      <SpType modulePath="octalmage.gitgood.gitgood" moduleType="Team" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      balances: [],
      submitting: false
    }
  },
  computed: {
    hasFunds() {
      return this.balances.length > 0
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
  },
  watch: {
    // whenever currentAccount changes, this function will run.
    currentAccount: async function (newAccount) {
      if (newAccount) {
        // Update balances for the user so we know if they already have EXP.
        this.updateBalances()
      }
    }
  },
  methods: {
    async updateBalances() {
      if (this.currentAccount) {
        await this.$store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
          options: { subscribe: true, all: true },
          params: { address: this.currentAccount }
        })
        this.balances =
          this.$store.getters['cosmos.bank.v1beta1/getAllBalances']({
            params: { address: this.currentAccount }
          })?.balances ?? []
      } else {
        this.balances = []
      }
    },
    // Make request to faucet service to give user 1 EXP.
    async getEXP() {
      this.submitting = true
      const options = {
        address: this.currentAccount,
        coins: ['1exp']
      }

      await fetch('http://localhost:4500', {
        method: 'post',
        body: JSON.stringify(options)
      })

      await this.updateBalances()
      this.submitting = false
    }
  },
  async created() {
    this.updateBalances()
  }
}
</script>
