<template>

<div class="container">
    <h4>{{newsdetail.title}}</h4>
    <div class="row">
        <div class="col-md-12">
            <span>By: </span> {{newsdetail.author}}
        </div>
        <div class="col-md-12">
            <span>Published: </span>{{newsdetail.publishedAt}}
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <img class="img-container" alt="" v-bind:src="newsdetail.urlToImage" />
            </div>
            {{newsdetail.content}}
            <br>
            <br>
            <span>Read More: </span> <a href="newsdetail.url">{{newsdetail.url}}</a>
            <br>
            <br>
            <button class="btn-sm btn-primary" v-on:click="$emit('read-now', newsdetail.source.name)">Mark as read</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "newsDetail",
    props: {
        newsdetail: Object,
    }
}

</script>

<style scoped>
.img-container {
    margin:20px;
    margin-left:50px;
    width: 30em;
    line-height: 115px;
    text-align: center;
    vertical-align: middle;
}
.niceformat {
    color:blue;
    font-size: medium;
    font-weight: bold;
}

</style>