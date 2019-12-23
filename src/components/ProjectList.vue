<template>
<div>
  <div class="project" v-for="p in projects" :key="p.title">
    <p class="project-title">
      {{ p.title }}
    </p>

    <div class="tags">
      <span class="tag is-light"
            v-for="tag in p.tags"
            :key="tag">
        {{ tag }}
      </span>
    </div>


    <div class="content">
      <ul>
        <li v-for="bulletPoint in p.bulletPoints" :key="bulletPoint">
          {{ bulletPoint }}
        </li>
        <li>
          <strong>Technologies used:</strong> {{ p.technologies.join(", ") }}
        </li>
      </ul>
    </div>

    <a v-for="link in p.links"
       :key="link.text"
       target="_blank"
       :href="link.href">
      {{ link.text }}
    </a>
  </div>
</div>
</template>

<script>
import projects from '@/data/projects.json';

export default {
  name: 'project-list',

  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="scss">
.project {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  box-shadow: 0 0 0;
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border-bottom: 0;
  }

  .project-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .tags {
    margin: 0;
  }

  a {
    display: inline-block;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
