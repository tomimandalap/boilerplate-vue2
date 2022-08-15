<template>
  <div class="content-center text-center">
    <img
      :src="require('@/assets/images/logo.png')"
      alt="logo.png"
      max-width="400"
    />
    <h2 class="my-5">
      Oops..,
      <span style="color: #ff0000">No Internet</span>
    </h2>
  </div>
</template>
<script>
export default {
  name: 'detectOffline',
}
</script>
