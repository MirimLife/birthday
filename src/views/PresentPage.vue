<template lang="ko">
    <div class="wrap">
        <canvas id="canvas"></canvas>

        <img :src="require(`@/assets/imgs/${present.img}`)" />
          
        <div class="content-wrap">
            <p class="content">{{present.content}}</p>
            <p class="title">{{present.title}}</p>
        </div>
        
        <button @click="goDialog"> 묻고 &nbsp; <b>더블</b>로&nbsp;가!&nbsp;&emsp; <img src="@/assets/imgs/button_img.png" /></button>
    </div>
</template>

<script>
import dataJSON from "@/assets/jsons/data.json";

export default {
  name: "PresentPage",
  props: {
    id: Number,
  },
  data() {
    const maxPhotoSize = 3;
    return {
      maxPhotoSize,
      present: {},
    };
  },
  methods: {
    customRandom(length) {
      return Math.floor(Math.random() * length);
    },
    getRandomIndex(notThisIndex) {
      let randomIndex = this.customRandom(this.maxPhotoSize+1);

      if (notThisIndex.length == this.maxPhotoSize) return this.maxPhotoSize;
      while (
        notThisIndex.includes(randomIndex) ||
        notThisIndex.includes(randomIndex + "") ||
        randomIndex == this.maxPhotoSize
      ) {
        randomIndex = this.customRandom(this.maxPhotoSize+1);
      }

      return randomIndex;
    },
    saveLocalStorage(readIndexArray, randomIndex) {
      // 본 데이터는 localStorage에 저장하는 코드
      readIndexArray.push(randomIndex);
      const localSaveData = readIndexArray.join(", ");
      localStorage.setItem("readIndex", localSaveData);
    },
    goDialog() {
      this.$router.push("/");
    },
  },
  created() {
    const readIndex = localStorage.getItem("readIndex");
    const readIndexArray = readIndex ? readIndex.split(", ") : [];

    if (readIndexArray.length == dataJSON.length) {
      this.present = dataJSON[this.maxPhotoSize];
      console.log("보여줄거 다 보여줌");
      return false;
    }

    let randomIndex = this.getRandomIndex(readIndexArray);
    this.saveLocalStorage(readIndexArray, randomIndex);
    this.present = dataJSON[randomIndex];
  },
};
</script>
<style scoped>
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  pointer-events: none;
}

.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  overflow: hidden;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.title {
  margin-top: 0.6rem;
  font-size: 2.4rem;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  text-align: center;

  color: #000000;
}

.content {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  /* identical to box height */

  text-align: center;

  color: #999999;
}

button {
  margin-top: 3rem;

  border-radius: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 54px;
  text-align: center;

  color: #ffffff;

  background-color: #000000;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.effects {
  position: absolute;
  left: 50%;
  top: 50%;
  pointer-events: none;
  visibility: hidden;
}
.wrap > img {
  width: 400px;
  height: 400px;
}
</style>
