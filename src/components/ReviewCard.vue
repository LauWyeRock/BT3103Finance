<template>
<div class="body">
    <div class="container">

        <div class="blog-card">
            <div class="info">
                <h4>"I've had a great experience with TradeBros. TradeBros not only has a ton of 
                    technical analysis tools, but also fundamental information, screeners, as well as news information."
                </h4>
            </div>
            <div class="author">
                <h6> Chris Lee, 28</h6>
            </div>
        </div>

        <div class="blog-card">
            <!-- <img :src="post.blogCoverPhoto" alt="" /> -->
            <div class="info">
                <h4>
                    "It has been very helpful to have so many tools on the same platform.
                    User defined strategies and technical indicators are a bonus, and you
                    can also save your favourite stocks according to your needs."
                </h4>
            </div>
            <div class="author">
                <h6>Johnathan Wong, 46</h6>
            </div>
        </div>

        <div class="blog-card">
            <div class="info">
                <h4>"Thank you so much TradeBros for your technicals.
                    They have made me a lot of money in short-term and long-term gains.
                    I would definitely recommend all investors to use TradeBros.
                </h4>
            </div>
            <div class="author">
                <h6>Mark Tan, 34</h6>
            </div>
        </div>

        <div class="blog-card">
            <div class="info">
                <h4>"I'm new to investing and have used TradeBros for a couple of months now.
                    I really love how much resources they provide like news and videos to teach
                    beginners like me how to invest my money smartly!"
                </h4>
            </div>
            <div class="author">
                <h6>Natalie Lim, 22</h6>
            </div>
        </div>

    </div>
</div>


</template>

<script>
export default {
    name: "ReviewCard",
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
    min-height: 360px;
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

    h4 {
        padding-bottom: 8px;
        font-size: 18px;
        font-weight: bold;
    }

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

        // .icons {
    //     display:flex;
    //     position: absolute;
    //     top:10px;
    //     right:10px;
    //     z-index: 99;

    //     .icon {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         width: 35px;
    //         height: 35px;
    //         border-radius: 50%;
    //         background-color: #fff;
    //         transition: 0.5s ease all;

    //         &:hover {
    //             background-color: #303030;

    //             .edit,
    //             .delete {
    //                 path {
    //                     fill:#fff;
    //                 }
    //             }
    //         }

    //         &:nth-child(1) {
    //             margin-right: 8px;
    //         }

    //         .edit,
    //         .delete {
    //             pointer-events: none;
    //             height: 15px;
    //             width: auto;
    //         }
    //     }
    // }

    // img {
    //     display: block;
    //     border-radius: 8px 8px 0 0;
    //     z-index: 1;
    //     width: 100% ;
    //     min-height: 200px;
    //     object-fit: cover;
    // }


</style>