<template>
  <el-tabs type="border-card" class="hundo">
    <el-tab-pane label="Video Feed">
      <video width="100%" autoplay>
        <source src="../static/dronef.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </el-tab-pane>
    <el-tab-pane label="Map">

    </el-tab-pane>
    <el-tab-pane label="Graphs">

    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'datafeed'
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
