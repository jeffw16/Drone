<template>
  <div id="app" class="verticalFlexParent">
    <nav></nav>
    <div class="dynamicChild" id="content">
      <div class="pad">
        <el-row :gutter="20" class="hundo">
          <el-col :span="11" class="hgt25 mgt">
            <div class="hundo uibox">
              <executecommands></executecommands>
            </div>
          </el-col>
          <el-col :span="13" class="hgt25 mgt">
            <div class="uibox hundo">
              <dronedata></dronedata>
            </div>
          </el-col>
          <el-col :span="11" class="hgt70 mgt">
            <div class="hundo uibox">
              <datafeed></datafeed>
            </div>
          </el-col>
          <el-col :span="13" class="hgt25 mgt">
            <div class="uibox hundo">
              <dronedata2></dronedata2>
            </div>
          </el-col>
          <el-col :span="13" class="hgt25 mgt">
            <div class="uibox hundo">
              <dronedata3></dronedata3>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <nav></nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#content {
  background: #354551;
  color: white;
  text-align: left;
}
div.pad {
  height: 90%;
  width: 90%;
  margin: 30px auto 0 auto;
}
#app > nav {
  height: 55px;
  background-color: #152B39;
  color: white;
}
.uibox {
  width: 100%;
  border-radius: 7px;
  box-shadow: 0px 0px 20px 0px black;
  background: #eee;
}
.mgt {
  margin-top: 20px;
}
.el-tooltip__popper {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif !important;
  font-size: 1em;
}
.verticalFlexParent {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.dynamicChild {
  flex: 2;
  overflow: hidden;
}
.dynamicOverflowable {
  flex: 2;
  height: 100%;
}
.horizontalFlexParent {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: center;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
.hgt10 {
  height: 10%;
}
.hgt15 {
  height: 15%;
}
.hgt20 {
  height: 20%;
}
.hgt25 {
  height: 25%;
}
.hgt30 {
  height: 30%;
}
.hgt40 {
  height: 40%;
}
.hgt50 {
  height: 50%;
}
.hgt60 {
  height: 60%;
}
.hgt70 {
  height: 70%;
}
.hundo {
  height: 100%;
}
</style>
