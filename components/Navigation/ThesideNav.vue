<template>
    <div class="sidenav-container">
        <div 
        v-if="show"
        class="sidenav-backdrop"
        @click="$emit('close')"> </div>
    <transition name="slide-side">
        <div 
        v-if="show"
        class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
            <nuxt-link to="/recepie"><li class="nav-item">Receipie</li></nuxt-link>
            <nuxt-link to="/about"><li class="nav-item">About</li></nuxt-link>
            <nuxt-link to="/admin"><li class="nav-item">Admin</li></nuxt-link>   
        </ul>  
        </div>  
    </transition>
    </div>
</template>

<script>
    export default {
        name:'TheSidenav',
        props:{
            show:{
                type:Boolean,
                default:false
            }
        }
        
    }
</script>

<style scoped>
.side-container{
    height:100%;
    width:100%
}
.sidenav-backdrop{
    width:100%;
    height:100%;
    background-color:purple;
    z-index:1000;
    position: fixed;
    top:0;
    left:0;
    }
    .sidenav{
        height:100%;
        width:300px;
        background-color: rebeccapurple;
        z-index:10000;
        position:fixed;
        top:0;
        left:0;
        box-sizing: border-box;
        padding: 30px;
    }
    .slide-side-enter-active, .slide-side-leave-active{
        transition: all .3s ease-out;
    }
    .slide-side-enter,.slide-side-leave-to{
        transform:translateX(-100%);
    }
    .nav-list{
        list-style:none;
        padding: 0;
        margin:0;
    }
    .nav-item{
        margin:20px 0
    }
    .nav-item a{
        text-decoration: none;
        color:green;
    }
</style>