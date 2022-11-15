<template>
    <div class="body">
        <div class="container">
    
            <a href="blog" target="_blank" class="blog-card">
            
                <div class="info">
                    <h1>Amazon Is Set for Major Layoffs. Here's What It Means for the Stock</h1>
                </div>
                <div class="author">
                    <h2>9348 Likes</h2>
                </div>
            </a>
    
            <a href="blog" target="_blank" class="blog-card">
                <!-- <img :src="post.blogCoverPhoto" alt="" /> -->
                <div class="info">
                    <h1>The Best Stocks to Buy With $500 Right Now</h1>
                </div>
                <div class="author">
                    <h2>1056 Likes</h2>
                </div>
            </a>
    
            <a href="blog" target="_blank" class="blog-card">
                <div class="info">
                    <h1>3 Warren Buffett Stocks That Are Screaming Buys in November</h1>
                </div>
                <div class="author">
                    <h2>7249 Likes</h2>
                </div>
            </a>
    
            <a href="blog" target="_blank" class="blog-card">
                <div class="info">
                    <h1>Meta Platforms Stock: Buy, Sell, or Hold in 2023?</h1>
                </div>
                <div class="author">
                    <h2>5621 Likes</h2>
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
        width:100%;
    }
    .blog-card {
        // position: relative;
        cursor:pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: rgba(255, 245, 233, 0.897);
        height: 300px;
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
        margin-bottom: 50px;
        width:90%;

        h1 {
            font-size: 25px;
        }
    
    }

    .author {
        display: flex;
        flex-direction: column;
        height:100%;
        // z-index: 3;
        color:#000;
        width:90%;
        h2 {
            font-size: 20px;
            text-align: center;
        }
    }

    </style>