<template>
  <div>
    <main class="form-signin w-25 m-auto">
      <form>
        <img :src="logo" alt="logo" style="width: 100px; cursor: pointer">
        <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>
        <Input :label="'Name'" :type="'text'"/>
        <Input :label="'Email address'" :type="'email'"/>
        <Input :label="'Password'" :type="'password'"/>
        <Button type="submit">Register</Button>
      </form>
    </main>
  </div>

</template>

<script>

import {logo} from "@/constants";

export default {
  data() {
    return {
      logo,
    }
  },

}
</script>

<style scoped>

</style>