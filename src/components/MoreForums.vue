<template>
    <div class="body">
        <div class="container">
    
            <div class="blog-card">
                <div class="info">
                    <h1>Dividends</h1>
                </div>
                <div class="author">
                    <h2>5073 posts</h2>
                </div>
            </div>
    
            <div class="blog-card">
                <!-- <img :src="post.blogCoverPhoto" alt="" /> -->
                <div class="info">
                    <h1>Cryptocurrency</h1>
                </div>
                <div class="author">
                    <h2>6245 posts</h2>
                </div>
            </div>
    
            <div class="blog-card">
                <div class="info">
                    <h1>Beginners</h1>
                </div>
                <div class="author">
                    <h2>2967 posts</h2>
                </div>
            </div>
    
            <div class="blog-card">
                <div class="info">
                    <h1>Discussion</h1>
                </div>
                <div class="author">
                    <h2>1965 posts</h2>
                </div>
            </div>
    
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name: "MoreForums",
        components: {
            
        }
    }
    </script>
    
    <style lang="scss" scoped>
    
    .body {
        margin:auto;
    }
    .container {
        display:flex;
        gap: 40px;
        align-items: center;
        width: 90%;
        margin: auto;
        justify-content: center;
    }
    .blog-card {
        // position: relative;
        cursor:pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: rgba(255, 251, 246, 0.726);
        min-height: 250px;
        width: 33%;
        transition: 0.5s ease all;
        align-items: center;
    
        &:hover{
            transform:  rotateZ(-1deg) scale(1.01);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
    }
    
    .info {
        display: flex;
        flex-direction: column;
        height:100%;
        z-index: 3;
        padding: 32px 16px;
        color:#000;
        text-align: center;
        justify-content: center;
        margin-top: 30px;
    
        h4 {
            padding-bottom: 8px;
            font-size: 18px;
            font-weight:500;
        }
    
    }

    h2 {
        font-size: 20px;
    }
    
    .author {
        display: flex;
        flex-direction: column;
        height:100%;
        // z-index: 3;
        // padding: 32px 16px;
        color:#000;
        margin-bottom:0px;
    
        h6 {
            font-weight: 300;
            font-size: 15px;
        }
    }
    </style>