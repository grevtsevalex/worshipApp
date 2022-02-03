<template>
  <div class="tag">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
  },
};
</script>

<style>
.tag {
  background-color: #c377e0;
  padding: 0px 10px;
  line-height: 16px;
  width: max-content;
  border-radius: 6px;
}
</style>
