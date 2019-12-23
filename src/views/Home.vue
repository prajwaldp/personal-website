<template>
  <div class="container-fluid">
    <section class="hero is-fullscreen is-warning is-bold has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hi, I'm Prajwal :)
          </h1>
          <h2 class="subtitle">
            Programmer // Developer // Student
          </h2>

          <a class="projects-link bounce" v-scroll-to="'#projects-list-container'">
            <span class="icon is-big">
              <i class="fas fa-chevron-down fa-2x"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
    
    <div class="columns" id="projects-list-container">
      <div class="column is-8 is-offset-2">
        <h1 class="title">Personal Projects</h1>
        <project-list/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectList from '@/components/ProjectList.vue';

export default {
  name: 'home',

  components: {
    ProjectList,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero {

  &.is-fullscreen {
    min-height: calc(100vh - 3.25rem);
    display: flex;
    align-items: center;
  }

  h1.title {
    margin-bottom: 3rem;
  }

  h2.subtitle {
    margin-bottom: 3rem;
  }

  .projects-link {
    cursor: pointer;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}

#projects-list-container {
  padding: 1rem;
  margin-top: 1rem;

  h1.title {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.5rem solid beige;
  }
}

.bounce {
  animation-name: bounce;
  animation-timing-function: linear;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(1rem); }
  100% { transform: translateY(0); }
}
</style>
