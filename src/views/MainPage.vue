<template>
  <div>
    <input type="text"  v-model="airData.MSRSTE_NM" readonly="true"><br>
    <input type="text"  v-model="airData.PM10" readonly="true"><br>
    <input type="text"  v-model="airData.PM25" readonly="true"><br>
    <input type="text"  v-model="airData.O3" readonly="true"><br>
    <input type="text"  v-model="airData.NO2" readonly="true"><br>
    <input type="text"  v-model="airData.CO" readonly="true"><br>
    <input type="text"  v-model="airData.SO2" readonly="true"><br>
    <input type="text"  v-model="airData.IDEX_NM" readonly="true">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import weather from "../assets/weather.json";

export default {
     computed : {
    //store의 속성들을 그대로 담는 것
    // ...mapGetters({
    //   todoList,
    // }),
    ...mapGetters(["geoData", "airData"]),
  },
    created() {
        // ...mapGetters(["geoData", "airData"]);
        this.getGeoData();
  },
  methods: {
    getGeoData() {
        var vm = this;
      this.promiseGeoGetter()
        .then(function(res) {
          console.log(res);
          vm.getAirData();
          
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAirData() {        
        this.$store.commit('saveAirData',weather.RealtimeCityAir.row[0]);
    },
    promiseGeoGetter() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
          function(res) {
            resolve(res);
          },
          function(error) {
            reject(error);
          }
        );
      });
    }
  },
};
</script>

<style>

</style>
