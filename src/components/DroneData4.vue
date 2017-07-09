<template>
  <div id="dronedata4" class="horizontalFlexParent">
    <div class="obj rotpidcontainer" pid="kp">
      <h5>Rotational kp</h5>
      <h1 id="rotkp">{{kp}}</h1>
    </div>
    <div class="obj rotpidcontainer" pid="ki">
      <h5>ki</h5>
      <h1 id="rotki">{{ki}}</h1>
    </div>
    <div class="obj rotpidcontainer" pid="kd">
      <h5>kd</h5>
      <h1 id="rotkd">{{kd}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dronedata4',
  data () {
    return {
      kp: 100, ki: 75, kd: 25,
    }
  }
}
//this.altitude = 5;
socket.on('pidRotData', function( data ) {
  console.log('Receiving data (pidRotData)', data);
  document.getElementById('rotkp').innerHTML = data.kp;
  document.getElementById('rotki').innerHTML = data.ki;
  document.getElementById('rotkd').innerHTML = data.kd;
});

$('body').on('click', '.rotpidcontainer', function() {
var pid = $(this).attr('pid');
var val = prompt( 'Enter new value for ' + pid, document.getElementById('alt' + pid).innerHTML );
socket.emit('updaterot' + pid, val);
console.log('updaterot' + pid + ' sent with ' + val);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dronedata4 {
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
