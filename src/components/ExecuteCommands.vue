<template>
  <div id="dronedata" class="horizontalFlexParent">
    <el-tooltip class="item" effect="dark" content="Execute Command" placement="top">
      <el-button type="success" size="large" icon="check"> Start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Force drone to hover in place" placement="top">
      <el-button type="warning" size="large" icon="warning"> Pause</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Force drone to return to starting position" placement="top">
      <el-button type="danger" size="large" icon="circle-cross"> Cancel</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'executecommands'
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
button {
  padding:25px 30px;
  font-size: 20px;
}

</style>
