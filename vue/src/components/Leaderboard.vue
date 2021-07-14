<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  props: ['items'],
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    }
  }
}
</script>
