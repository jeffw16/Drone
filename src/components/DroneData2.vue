<template>
  <div id="dronedata2" class="horizontalFlexParent">
    <div class="obj">
      <h5>Acceleration X</h5>
      <h3 id="accelx">{{accelx}}</h3>
    </div>
    <div class="obj">
      <h5>Y</h5>
      <h3 id="accely">{{accely}}</h3>
    </div>
    <div class="obj">
      <h5>Z</h5>
      <h3 id="accelz">{{accelz}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dronedata2',
  data () {
    return {
      accelx: 0,
      accely: 0,
      accelz: 0,
      a: 1,
    }
  }
}
//this.altitude = 5;
function expoform( num ) {
var numstr = String(num);
var indexpo = numstr.indexOf('e');
if ( indexpo != -1 ) {
numstr = numstr.substring(0, indexpo) + "<sup>" + numstr.substring(indexpo + 1) + "</sup>";
}
return numstr;
}
socket.on('clientReceiveData', function( data ) {
  console.log('Receiving data (DroneData)', data);
  document.getElementById('accelx').innerHTML = expoform(Number(data.accx).toPrecision(4));
  document.getElementById('accely').innerHTML = expoform(Number(data.accy).toPrecision(4));
  document.getElementById('accelz').innerHTML = expoform(Number(data.accz).toPrecision(4));
  //document.getElementById('').innerHTML = ;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dronedata2 {
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
  font-size: 5em;
}
</style>
