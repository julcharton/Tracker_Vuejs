<template>
  <div class="jj white elevation-2">
    <h1 class="display-1font-weight-bold pa-4">{{title}}</h1>
    <slot name="action" />
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.jj {
  border-radius: 7px;
  margin-top: -10%
}
</style>
