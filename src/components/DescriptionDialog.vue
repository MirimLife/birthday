<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800"
  >
    <v-card class="pa-5">
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-card color="#F0DE88" rounded class="rounded-xl pa-5" width="80%">
              <span class="description">
                [web발신] <br />
                ★☆ 사장님~ 이번이 마지막 기회예요. <br />
                단돈 <b>200원</b>으로 인생을 바꿔보세요.<br />
                ※ 정말 다음에 없을 기회니 놓치지 마시고 더 대박나세요~ ★☆
              </span>
            </v-card>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-card color="#F0DE88" rounded class="rounded-xl pa-5" width="95%">
              <span class="description">
                [web발신] <br />
                § 오늘 생일이신 사장님을 위한 특별찬스! § <br />
                요즘 점점 더워가는 날씨... 아주 힘드시죠? ^^ <br />
                단돈 <b>200원</b>으로 너구리 한 마리 몰고 가실 수 있으세요~^^
                <br />
                <br />
                ▶◁▶◁▶◁▶◁▶◁▶◁▶◁▶◁<br />
                <br />
                사장님 생일을 진심으로 축하드리기 위함이니 꼭 시작해보세요~^^
              </span>
            </v-card>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-container>
      <v-spacer />
      <v-card-actions class="justify-end mt-10">
        <v-btn
          color="black"
          class="white--text"
          @click="gogo"
          min-height="90"
          min-width="70%"
        >
          <span class="btn-text">
            <b>200원</b> 입금했어...! 한 번
            <span style="color: #6893ff">#가보자고</span>
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    dialogOpen() {
      this.dialog = true;
    },
    gogo() {
      this.dialog = false;
      this.$router.push("/present-box");
    },
  },
};
</script>

<style scoped>
.description {
  font-size: 1.2rem;
}
.row {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.container {
  padding-top: 0px !important;
}
.btn-text {
  font-size: 1.6rem;
  font-weight: 600;
}
</style>
