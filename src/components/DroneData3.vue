<template>
  <div id="dronedata3" class="horizontalFlexParent">
    <div class="obj altpidcontainer" pid="kp">
      <h5>Altitude kp</h5>
      <h1 id="altkp">{{kp}}</h1>
    </div>
    <div class="obj altpidcontainer" pid="ki">
      <h5>ki</h5>
      <h1 id="altki">{{ki}}</h1>
    </div>
    <div class="obj altpidcontainer" pid="kd">
      <h5>kd</h5>
      <h1 id="altkd">{{kd}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dronedata3',
  data () {
    return {
      kp: 100, ki: 75, kd: 25,
    }
  }
}
//this.altitude = 5;
socket.on('pidAltData', function( data ) {
  console.log('Receiving data (pidAltData)', data);
  document.getElementById('altkp').innerHTML = data.kp;
  document.getElementById('altki').innerHTML = data.ki;
  document.getElementById('altkd').innerHTML = data.kd;
});

$('body').on('click', '.altpidcontainer', function() {
var pid = $(this).attr('pid');
var val = prompt( 'Enter new value for ' + pid, document.getElementById('alt' + pid).innerHTML );
socket.emit('updatealt' + pid, val);
console.log('updatealt' + pid + ' sent with ' + val);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dronedata3 {
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
