<template>
  <div id="dronedata3" class="horizontalFlexParent">
    <div class="obj pidcontainer" pid="kp">
      <h5>kp</h5>
      <h1 id="kp">{{kp}}</h1>
    </div>
    <div class="obj pidcontainer" pid="ki">
      <h5>ki</h5>
      <h1 id="ki">{{ki}}</h1>
    </div>
    <div class="obj pidcontainer" pid="kd">
      <h5>kd</h5>
      <h1 id="kd">{{kd}}</h1>
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
socket.on('pidData', function( data ) {
  console.log('Receiving data (pidData)', data);
  document.getElementById('kp').innerHTML = data.kp;
  document.getElementById('ki').innerHTML = data.ki;
  document.getElementById('kd').innerHTML = data.kd;
});

$('body').on('click', '.pidcontainer', function() {
var pid = $(this).attr('pid');
var val = prompt( 'Enter new value for ' + pid, document.getElementById(pid).innerHTML );
socket.emit('update' + pid, val);
console.log('update' + pid + ' sent with ' + val);
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
