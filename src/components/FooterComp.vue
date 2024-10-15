<template>
  <footer>
    <div class="left">
      <img src="@/assets/images/img_footer_logo.png" alt="footer_logo">
      <div>Place Soweto, BP 86 Dakar, Sénégal +221 33 889 99 00 Assemblée nationale du Sénégal</div>
    </div>

    <div class="right">
      <v-select
          return-object
          density="compact"
          :items="['행정판시스템', '행정판시스템']"
          variant="outlined"
          hide-details
          persistent-hint
          class="client_name"
      ></v-select>
      <v-btn variant="tonal">
        GO
      </v-btn>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>