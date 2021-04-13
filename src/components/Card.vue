<template>
<div class="grid gap-4 grid-cols-1 md:grid-cols-3">
    <div v-for="content in contents" :key='content.id' class="flex flex-warp">
        <div class="overflow-hidden rounded shadow-lg h-50 bg-gray-100 cursor-pointer" v-on:click="toggleModal(content.id)">
           <img class="object-contain" :src="content.default_image.url" />
            <div class="p-4">
                <h3>{{content.title}}</h3>
                <p class="text-xs text-gray-400">{{content.date.slice(0,10)}}</p>
                <p class="my-2 text-base mx-1">{{content.abstract}}</p>
                <p v-show="content.categories != null" class="tag" v-for="category in content.categories"  :key="category.index">{{category.name}}</p> 
            </div>                 
        </div>
        <Modal v-if="showModal==content.id" v-bind:content="content" v-on:close="toggleModal(content.id)"></Modal>
    </div>
</div>

</template>

<script>
import Modal from "./Modal.vue";

export default {
    props: ['contents'],
    name: "Contents",
    components: {
        Modal,
        
    },
    data() {
        return {
            showModal: false,
        }
    },

    methods: {
        toggleModal(id){
            if(!this.showModal){
                this.showModal = id;
            } else {
                this.showModal =false;
            }
            
        },
        
    },
}
</script>