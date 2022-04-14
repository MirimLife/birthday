<template>
  <v-app id="wrapper">
    <div id="data">
      <video loop controls autoplay muted playsinline id="bgvid">
        <source src="@/assets/축하영상.mp4" type="video/mp4" />
      </video>
      <div id="text">
        <h1>우주 최강 <span>大스타</span> 홍길<br />동 생일 축하해!!</h1>
        <p>🌺평생 꽃길만 걷자🌺</p>

        <button @click="dialogOpen">START 💸</button>
        <DescriptionDialog ref="DESCRIPTION_DIALOG" />
      </div>
    </div>
  </v-app>
</template>


<script>
import DescriptionDialog from "@/components/DescriptionDialog.vue";
export default {
  name: "MainPage",
  components: {
    DescriptionDialog,
  },
  methods: {
    dialogOpen() {
      this.$refs.DESCRIPTION_DIALOG.dialogOpen();
    },
  },
};
</script>

<style scoped>
#wrapper {
  height: 100%;
  margin-bottom: 10px;
  color: white;
  background: transparent;
}
#data {
  min-height: 70vh !important;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

video#bgvid {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
}
#text {
  text-align: center;
}
h1 {
  font-size: 55px;
  user-select: none;
  padding-top: 30px;
  margin-bottom: 3px;
}
span {
  color: #6586ff;
}
p {
  font-size: 20px;
}

button {
  background-color: #000000;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 30px;
  font-size: 30px;
}
</style>