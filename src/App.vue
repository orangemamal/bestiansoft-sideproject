<template>
    <div id="app">
        <div class="container">
            <router-view v-slot="{ Component }">
              <v-app>
                <transition name="fade">
                    <component :is="Component" />
                </transition>
              </v-app>
            </router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
