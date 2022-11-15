<template>
    <div class="body">
        <div class="container">
    
            <a href="chat" target="_blank" class="blog-card">
                <div class="info">
                    <h1>Stock Market</h1>
                </div>
                <div class="author">
                    <h2>5073 messages</h2>
                </div>
            </a>
    
            <a href="chat" target="_blank" class="blog-card">
                <!-- <img :src="post.blogCoverPhoto" alt="" /> -->
                <div class="info">
                    <h1>Today's Trades</h1>
                </div>
                <div class="author">
                    <h2>6245 messages</h2>
                </div>
            </a>
    
            <a href="chat" target="_blank" class="blog-card">
                <div class="info">
                    <h1>Beginners</h1>
                </div>
                <div class="author">
                    <h2>2967 messages</h2>
                </div>
            </a>
    
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

    a {
        text-decoration: none;
    }
    .blog-card {
        // position: relative;
        cursor:pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: rgba(255, 245, 233, 0.897);
        min-height: 250px;
        width: 25%;
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