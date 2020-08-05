<template>
  <div class="profile-completion mx-auto text-white relative">
    <svg class="progress-bar absolute">
      <defs>
        <linearGradient id="linear" x1="0%" y1="20%" x2="75%" y2="5%" gradientTransform="rotate(135)">
          <stop offset="0%"   stop-color="#4DB6AC"/>
          <stop offset="100%" stop-color="#FFF59D"/>
        </linearGradient>
      </defs>
      <circle class="progress-bg" :r="radius" :stroke-width="stroke"></circle>
      <circle class="progress-fg"
        :r="radius"
        :stroke-width="stroke"
        :style="{ progress }"
        :stroke-dasharray="circumference + ' ' + circumference"
      ></circle>
    </svg>

    <div class="inner-circle teal-bg rounded-full absolute">
      <div class="flex flex-col -space-y-2 justify-center" v-if="complete < 100">
        <span class="text-sm font-bold mt-2">{{heading}}</span>
        <span class="text-4xl tracking-tight">{{complete}}%</span>
        <span class="text-sm font-bold">{{subheading}}</span>
      </div>
      <div class="tick absolute" v-else>
        <div class="flex flex-col -space-y-2 justify-center animate__animated animate__zoomOut animate__delay-1s absolute text-width">
          <span class="text-sm font-bold mt-2">{{heading}}</span>
          <span class="text-4xl tracking-tight">100%</span>
          <span class="text-sm font-bold">{{subheading}}</span>
        </div>
        <svg class="animate__animated animate__zoomIn animate__delay-2s" viewBox="0 0 28 28" fill="#fff">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    const circumference = this.radius * 2 * Math.PI;
    return {
      heading: 'Profile:',
      subheading: 'complete',
      circumference
    }
  },
  props:{
    complete: Number,
    radius: Number,
    stroke: Number
  },
  computed: {
    progress: function () {
      const progress = this.circumference - (this.circumference * (this.complete / 100));
      return progress;
    }
  }
};
</script>

<style lang="scss" scoped>
// vars
$outerdiameter: 130px;
$innerdiameter: 100px;
$circumference: 364.42;

.profile-completion{
  text-align: center;
  width:$outerdiameter;
  height:$outerdiameter;

  .progress-bar {
    width: $outerdiameter;
    height: $outerdiameter;

    circle {
      width: $outerdiameter;
      height: $outerdiameter;
      fill: none;
      transform: translate(64px, 64px) rotate(-90deg) ;
      stroke-dasharray: $circumference;

      &.progress-bg{
        stroke-dashoffset: 0;
        stroke: #cdcdcd;
      }
      &.progress-fg{
        stroke-linecap: round;
        will-change: auto;
        transition: stroke-dashoffset 850ms ease-in-out;
        stroke: url(#linear);
      }
    }
  }

  .inner-circle {
    width: $innerdiameter;
    height: $innerdiameter;
    top: 14px;
    left: 14px;
  }

  .tick {
    .text-width {
      width: $innerdiameter;
    }

    svg {
      width: $innerdiameter;
      height: $innerdiameter;

      path {
        width: $innerdiameter;
        height: $innerdiameter;
        transform: translate(1px, 2px);
      }
    }
  }

  .teal-bg {
    background-color: #4DB6AC;
  }
}
</style>
