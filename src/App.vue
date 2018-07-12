<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>
<style lang="less">
    #app {
        width: 100%;
        height: 100%;
    }
</style>