<template>
    <div class="text-blue-700 fixed inset-0 z-40 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto max-h-full overflow-y-scroll scrollbar-hidden my-6 max-w-3xl mx-1 md:mx-0">
            <!--content-->
            <div class=" md:h-screen-80 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex md:h-20 items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 class="text-3xl font-semibold">{{ content.title }}</h3>
                    <button class="md:-8 w-8 overflow-hidden stroke-current text-red-500 bg-transparent border border-solid border-red-500 hover:border-gray-500 hover:text-gray-500 active:bg-red-600 font-bold text-sm rounded outline-none focus:outline-none" type="button" v-on:click="closeModal">
                        <svg class="stroke" width="100%" height="100%" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"><path d="M0,0l15,15"/><path d="M15,0l-15,15" /></svg>
                    </button>
                </div>
                <!--body-->
                <div class="overflow-y-auto p-6">
                    <p class="text-normal-color text-lg">{{content.abstract}}</p>
                    <div class="w-full">
                        <content-loader class="object-contain my-4" v-show="isLoading"></content-loader>
                        <div v-if="content.hover_image"><img  v-show="!isLoading" class="object-contain my-4" :src="content.hover_image.url" v-on:load="loaded"/></div>
                        <div v-else><img  v-show="!isLoading" class="object-contain my-4" :src="content.default_image.url" v-on:load="loaded"/></div>
                    </div>
                    <div v-if="content.links.length">
                        <h3 class="font-bold text-normal-color">Link</h3>
                        <ul >
                            <li v-for="link in content.links" :key='link.url' >
                                <a class="hover:text-blue-300" :href= link.url>{{ link.displayName }}</a>
                            </li>
                        </ul>
                    </div>
                        
                </div>
                <!--footer-->
                <div v-if="content.categories.length" class="p-6 border-gray-300 rounded-b">
                    <p  class="tag" v-for="category in content.categories"  :key="category.index">{{category.name}}</p>                   
                </div>
             </div>
        </div>
    </div>
    
    <div class="overflow-x-hidden overflow-y-auto pattern-dots-sm text-blue-700 fixed inset-0 outline-none focus:outline-none justify-left items-left ">
        <div class="opacity-25 fixed inset-0 bg-black"></div>
        <p class="opacity-60 text-9xl m-0 p-0 text-blue-700 font-black">{{content.title}}</p>   
    </div>    
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
    props: ['content'],
    name: "content-modal",
    components: {
        ContentLoader
    },
    data() {
        return {
            showModal: false,
            isLoading: true
        }
    },
    emits: ['close'],
    methods: {
        closeModal:function(){
            this.$emit('close');
        },
        loaded: function(){
            console.log('loaded');
            this.isLoading = false
        }
    },
}
</script>

<style>
content-loader {
    max-width: 100%;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>