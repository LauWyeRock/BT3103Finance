<template>

    <div class="container">
        <div class="square">
            <div class="col-sm-6">
                <img class="img" alt="" v-bind:src="newsdetail.urlToImage" />
                <h1 class="title">{{newsdetail.title}}</h1>
                <div>
                    <button class="readmore" @click="gotoURL()">Read More</button>
                    <button class="markasread" v-on:click="$emit('read-now', newsdetail.source.name)">Mark as read</button>
                </div>
            </div>
        </div>
    </div>

</template>
    
<script>
    
export default {
    name: "newsDetail",

    props: {
        newsdetail: Object,
    },

    methods: {
        gotoURL () {
            window.open(this.newsdetail.url, '_blank');
        }
        
    }

}
    
</script>
    
<style scoped>

.container{
    display: flex;
    justify-content: center;
    padding: 80px;
}

.square{
    width: 1500px;
    height: 310px;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 20px 50px #D9DBDF;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; 
}

.square:hover {
    /* -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); */
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.08);
}

.img {
    width: 500px;
    height: 300px;
    padding: 10px 10px 0px 0px;
    float: right;
}

.title {
    font-size: 40px;
    font-family: serif;
    padding:10px;
}
.readmore {
    font-size: 10px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
}

.markasread {
    font-size: 10px;
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
}

</style>
