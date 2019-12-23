<template>
  <div class="container-fluid">
    <section class="hero is-large is-warning is-bold has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hi, I'm Prajwal :)
          </h1>
          <h2 class="subtitle">
            Programmer // Developer // Student
          </h2>

          <p class="projects-link bounce" @click="scrollToProjectList">
            <span class="icon is-big">
              <i class="fas fa-chevron-down fa-2x"></i>
            </span>
          </p>
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

  methods: {
    scrollToProjectList() {

      let projectList = document.getElementById("projects-list-container");

      projectList.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }
};
</script>

<style lang="scss">
.hero {
  min-height: calc(100vh - 3.25rem);

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
