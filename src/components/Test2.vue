<!-- eslint-disable vue/multi-word-component-names -->
<template>

<div id="app">
  <div class="title">
    <div class="keyframe">Flourish</div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>


#app {
  z-index: 100;
  align-items: center;
  padding-bottom: 4vmin;
  overflow-y: hidden;
  overflow-x: hidden;
}

.title {
  margin-top: 200px;
  font-size: 60px;
  width: 100%;
  z-index: 2;
}

@keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes outer-left {
  from {
    transform: translateX(50%);
  }
  to {
    transform: none;
  }
}

.keyframe {
  display: inline-block;
  animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.artistes {
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.title {
  animation: outer-left 1s 1s ease both;
}

body:active * {
  animation: none !important;
}

</style>