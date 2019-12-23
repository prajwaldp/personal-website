<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          Prajwal D Prakash
        </router-link>

        <a role="button"
           class="navbar-burger burger"
           id="site-navbar-burger"
           aria-label="menu"
           aria-expanded="false"
           @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="site-navbar" class="navbar-menu">
        <div class="navbar-end">

          <a class="navbar-item" target="_blank" href="https://www.linkedin.com/in/prajwal-d-prakash">
            <span class="icon">
              <i class="fab fa-linkedin"></i>
            </span>
            <span>
              LinkedIn
            </span>
          </a>

          <a class="navbar-item" target="_blank" href="https://github.com/prajwaldp">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>
              GitHub
            </span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon">
                <i class="fas fa-blog"></i>
              </span>
              <span>
                Blog
              </span>
            </a>

            <div class="navbar-dropdown is-right">
              <router-link to="/blogs/tech" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-microchip"></i>
                </span>
                <span>
                  Tech Blog
                </span>
              </router-link>
              <!-- <router-link to="/blogs/strategy" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-chess-queen"></i>
                </span>
                <span>
                  Strategy Blog
                </span>
              </router-link> -->
              <router-link to="/blogs/photography" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-camera"></i>
                </span>
                <span>
                  Photography Blog
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'my-navbar',

  data() {
    return {};
  },

  methods: {
    toggleNavbar() {
      const $burger = document.getElementById('site-navbar-burger');
      const $navbar = document.getElementById('site-navbar');

      $burger.classList.toggle('is-active');
      $navbar.classList.toggle('is-active');
    }
  }
};
</script>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';

nav.navbar {
  .navbar-brand a {
    font-size: 1.5em;
    font-weight: bold;
  }
}
</style>
