<template>
  <v-container>
    <header>
      <p><strong>사장님</strong>을 위한 선물입니다!</p>
      <p>
        과연 이 안에 <mark><strong>어떤 선물</strong></mark
        >이 들어있을까요?
      </p>
    </header>

    <div class="present-box">
      <div class="gift_screen">
        <div class="gift_container">
          <div class="gift" id="gift_moji" @click="click()">🎁</div>
          <div class="effects">
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">⭐️</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">✨</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
            <div class="particle_effect">🎁</div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PresentBoxPage",
  props: {
    msg: String,
  },
  methods: {
    click() {
      document.body.classList.add("gift_opened");

      const particleEffects = document.querySelectorAll(".particle_effect");

      for (const particle of particleEffects) {
        particle.style.setProperty(
          "--angle",
          `${Math.floor(Math.random() * 360)}deg`
        );
        particle.style.setProperty("--scale", `${1 + Math.random() * 4}`);
        particle.style.animationDuration = `${0.4 + Math.random() * 0.8}s`;
        particle.style.animationDelay = `${Math.random() * 0.1}s`;
      }

      setTimeout(() => {
        this.$router.push("/present");
        document.body.classList.remove("gift_opened");
      }, 800);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: "Inter";
  font-style: normal;
  font-size: 3rem;
  color: #000000;
}
strong {
  font-weight: bold;
}
mark {
  background-color: #98c1ff;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.8rem;
}

.present-box {
  width: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}

.gift_container {
  position: relative;
  margin-top: 12px;
}

.gift {
  font-size: 240px;
  transition: transform 0.2s ease;
  margin-top: 10rem;
}

body:not(.gift_opened) .gift:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.gift_opened .gift {
  animation: gift_enter 1s cubic-bezier(0.4, 0.2, 0.2, 1.2) both;
}

.effects {
  position: absolute;
  left: 50%;
  top: 50%;
  pointer-events: none;
  visibility: hidden;
}

.gift_opened .effects {
  visibility: inherit;
}

.particle_effect {
  position: absolute;
}

.gift_opened .particle_effect {
  animation: particle_effect ease-out both;
}

@keyframes form_enter {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
}

@keyframes form_exit {
  to {
    transform: scale(0.96);
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes gift_enter {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes particle_effect {
  from {
    transform: rotate(var(--angle)) translate(10px, 0) scale(var(--scale));
    visibility: hidden;
  }
  0.01% {
    visibility: inherit;
  }
  to {
    transform: rotate(var(--angle)) translate(240px, 0) scale(0) rotate(-240deg);
  }
}
</style>
