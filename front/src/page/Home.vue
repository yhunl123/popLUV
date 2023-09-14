<template>
  <span>{{popCount}}</span>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {getCookie, setCookie} from "@/util/cookies";

export default {
  name: "Home",
  components: {

  },
  setup() {
    const popCount = ref(getCookie('popCount'));
    let rtPopCount = 0;
    let currentKey = [];

    const popKeyDown = (event) => {
      if (!currentKey.includes(event.keyCode)) {
        popCount.value++;
        rtPopCount++;
        setCookie('popCount', popCount.value, 100)
        currentKey.push(event.keyCode)
      }
    }

    const popKeyUp = (event) => {
      currentKey.pop(event.keyCode)
    }

    setInterval(() => {
      axios.post("/api/postTest", {popCount: rtPopCount}).then((res) => {
        console.log(res)
        rtPopCount = 0;
      })
    }, 30 * 1000)

    window.addEventListener("keydown", popKeyDown);
    window.addEventListener("keyup", popKeyUp);
    window.addEventListener("mousedown", popKeyDown);
    window.addEventListener("mouseup", popKeyUp);

    return {
      popKeyDown,
      popKeyUp,
      popCount,
    }
  }
}
</script>

<style scoped>

</style>
