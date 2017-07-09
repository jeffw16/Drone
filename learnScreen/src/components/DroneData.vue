<template>
  <div id="dronedata" class="horizontalFlexParent">
    <div class="obj">
      <h5>Altitude</h5>
      <h1>{{altitude}}</h1>
    </div>
    <div class="obj">
      <h5>Yaw</h5>
      <h1>{{yaw}}</h1>
    </div>
    <div class="obj">
      <h5>Roll</h5>
      <h1>{{roll}}</h1>
    </div>
    <div class="obj">
      <h5>Pitch</h5>
      <h1>{{pitch}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dronedata',
  data () {
    return {
      altitude: 30,
      yaw: 30,
      roll: 30,
      pitch: 30
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dronedata {
  width: 95%;
  margin: 0 auto;
  height: 100%;
  color: black;
}
.obj {
  text-align: center;
}
.obj > h5 {
  margin: 0;
  font-size: 2em;
}
.obj > h1 {
  font-weight: 400;
  margin: 0;
  font-size: 5em;
}
</style>
