<template>
  <div class="tooltip-box">
    <slot />
    <div class="tooltip">
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tooltip-box {
  position: relative;
  display: inline-block;
  /* width: 100%; */
}

.tooltip-box:hover .tooltip {
  /* opacity: 1; */
  visibility: visible;
}

.tooltip {
  color: #ffffff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;

  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  visibility: hidden;
  /* opacity: 0;
  transition: opacity 1s; */

  position: absolute;
  z-index: 1;

  background: #f172a1;
}

.text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #a782e8 transparent transparent transparent;
}
</style>
