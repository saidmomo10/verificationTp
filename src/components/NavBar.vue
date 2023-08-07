<script setup lang="ts">
import App from '@/App.vue';
  defineProps(['menuItems'])
</script>

<template>
  <header class="header">
        <div class="container">
            <div class="header__content">
                <!-- <a class="header__logo" href="/">
                    <p>Blog</p>
                </a> -->
                <ul v-for="item in menuItems" class="header__menu">
                    <li class="header__menu__item"><a :href="item.path">{{ item.name }}</a></li>
                    
                </ul>
            </div>
        </div>
    </header>
    <RouterView/>
</template>

<style scoped>
a{
    text-decoration: none;
    white-space: nowrap;
}

.container{
    max-width: calc(90% - 100px);
    margin: 0 auto;
}

.header{
    z-index: 100;
    background: white;
    width: 100%;
    height: 100%;
    box-shadow: #e7e4e4 1px 1px 8px;
}

.header__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
}

.header__logo img{
    display: block;
    font-weight: 900;
    width: 90px;
}

.header__menu{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 55px;
    margin-right: 0px;
}

.header__menu__item{
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__menu__item a{
    color: #1c2e33;
    font-weight: 900;
}
</style>
