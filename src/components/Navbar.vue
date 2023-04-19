<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <a class="d-flex align-items-center text-dark text-decoration-none ">
      <RouterLink to="/"><img :src="logo" alt="logo" style="width: 100px; cursor: pointer"></RouterLink>
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <a >
        <RouterLink :to = "{name: 'login'}" class="me-3 py-2 text-dark text-decoration-none">
          Login
        </RouterLink>
      </a>
      <a >
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 text-dark text-decoration-none">
          Register
        </RouterLink>
      </a>
    </nav>
  </div>
</template>

<script>
import {logo} from '@/constants'

export default {
  data() {
    return {
      logo,
    }
  },

}
</script>

<style >

</style>