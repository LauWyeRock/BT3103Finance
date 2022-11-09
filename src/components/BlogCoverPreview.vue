<template>
<div class="modal" ref="modal">
    <div class="modal-content">
        <button class="closebtn" @click="closePreview">x</button>
        <img :src="this.blogCoverPhoto" alt="" />
    </div>
</div>
</template>

<script>
export default {
    components: {

    },

    methods: {
        closePreview() {
            this.$store.commit("openPhotoPreview");
        }
    },
    computed: {
        blogCoverPhoto() {
            return this.$store.state.blogPhotoFileURL;
        }
    }
}

</script>

<style lang="scss" scoped>
.modal {
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:99;
    position: fixed;
    width:100%;
    height: 100%;
    top:0;
    background-color: white;

    .modal-content {
        display: flex;
        justify-content: center;
        position: relative;
        border-radius: 12px;
        width:900px;
        padding: 50px;
        height: 400px;

        .closebtn {
            width: 28px;
            height: auto;
            cursor: pointer;
            font-size: 24px;
            position: absolute;
            top:0px;
            right:15px;
            background-color: rgb(203, 191, 172);
            color: white;
            text-align: center;
            padding: 0px;
            border-radius: 8px;
        }

        img {
            margin-top: 16px;
            display: block;
            width: auto;
            height: 100%;
            box-shadow: 0 4px 6px -2px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
    }
}

</style>