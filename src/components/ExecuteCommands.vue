<template>
  <div id="dronedata" class="horizontalFlexParent">
    <el-tooltip class="item" effect="dark" content="Execute Command" placement="top">
      <el-button type="success" id="startbtn" v-on:click="start" size="large" icon="check"> Start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Force drone to hover in place" placement="top">
      <el-button type="warning" id="pausebtn" v-on:click="pause" size="large" icon="warning"> Pause</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Force drone to return to starting position" placement="top">
      <el-button type="danger" id="stopbtn" v-on:click="stop" size="large" icon="circle-cross"> Cancel</el-button>
    </el-tooltip>
  </div>
</template>

<script>
//var socket2 = io('http://dronesim.mywikis.com:3000');

export default {
  name: 'executecommands',
/*
}

var startbutton = new Vue({
  el: '#startbtn',
*/
  methods: {
    start: function(event) {
      /*
      socket.on('connection', function( data ) {
        console.log('Client connected to server.');
        socket.on('message', function( data ) {
          console.log('Message from server:', data);
        });
      });
      */
      droneStart();
    },
    pause: function(event) {
      alert('Pause');
    },
    stop: function(event) {
      alert('Stop');
    }
  }
//});
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
