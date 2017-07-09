<template>
  <div id="dronedata" class="horizontalFlexParent">
    <div class="obj">
      <h5>Altitude</h5>
      <h3 id="altitude">{{altitude}}</h3>
    </div>
    <div class="obj">
      <h5>Roll</h5>
      <h3 id="roll">{{roll}}</h3>
    </div>
    <div class="obj">
      <h5>Pitch</h5>
      <h3 id="pitch">{{pitch}}</h3>
    </div>
    <div class="obj">
      <h5>Yaw</h5>
      <h3 id="yaw">{{yaw}}</h3>
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
      pitch: 30,
    }
  }
}
function expoform( num ) {
var numstr = String(num);
var indexpo = numstr.indexOf('e');
if ( indexpo != -1 ) {
numstr = numstr.substring(0, indexpo) + "&times; 10<sup>" + numstr.substring(indexpo + 1) + "</sup>";
}
return numstr;
}
socket.on('clientReceiveData', function( data ) {
  console.log('Receiving data (DroneData)', data);
  document.getElementById('altitude').innerHTML = expoform(Number(data.alt).toPrecision(2));
  document.getElementById('yaw').innerHTML = expoform(Number(data.rotz).toPrecision(2));
  document.getElementById('roll').innerHTML = expoform(Number(data.rotx).toPrecision(4));
  document.getElementById('pitch').innerHTML = expoform(Number(data.roty).toPrecision(4));
});
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
.obj > h3 {
  font-weight: 400;
  margin: 0;
  font-size: 1em;
}
</style>
