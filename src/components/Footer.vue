<!-- eslint-disable vue/multi-word-component-names -->
<template>
<footer>
    <div class="container">
        <div class="left">
            <div class="col-1">
                <router-link class="header" :to="{name : 'Home'}">tradebros</router-link>
                <!-- <ul>
                    <li>
                        <a href="#"><uniCarWash class="svg-icon" /></a>
                    </li>
                    <li>
                        <a href="#"><uniCarWash class="svg-icon" /></a>
                    </li>
                    <li>
                        <a href="#"><uniCarWash class="svg-icon" /></a>
                    </li>
                    <li>
                        <a href="#"><uniCarWash class="svg-icon" /></a>
                    </li>
                </ul> -->
            </div>
            <div class="col-2">
                <ul>
                    <router-link class="link" to="/">Home</router-link>
                    <router-link class="link" to="/register"> Register </router-link>
                    <router-link class="link" to="/stock-screener"> Stock Screener </router-link>
                    <router-link class="link" to="/papertrading"> Paper Trading </router-link>
                    <router-link class="link" to="/news"> News </router-link>
                    <router-link class="link" to="/forum"> Forum </router-link>
                    <router-link class="link" to="/blogs"> Blogs </router-link>
                </ul>
            </div>
        </div>
        <div class="right">
            <p>Copyright 2022 All Rights Reserved.</p>
        </div>
    </div>
</footer>
</template>

<script>
// export default {
//     name:"footer-vue",
//   components: {
//     uniCarWash
//   }
// }
</script>

<style lang="scss" scoped>
footer{
    margin-top:auto;
    padding: 50px 25px;
    background-color: #f0ebf4;
    .container{
        display: flex;
        flex-direction: column;
        gap:32px;
        @media (min-width: 800px) {
            flex-direction: row;
            gap:0px;
        }
        >div {
            display: flex;
            flex:1;
        }
        .left{
            gap:32px;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }
            .header {
                font-weight: bold;
                font-family: serif;
                letter-spacing: -2px;
                text-align: center;
                font-size:50px;
                color:black;
                text-decoration: none;
                @media(min-width: 800px) {
                    text-align: initial;
                }
            }
            .header:hover {
                color: rgba(118, 11, 118, 0.703);
            }
            ul {
                gap:16px;
                list-style: none;
                display: flex;
            }

            .col-1,
            .col-2 {
                gap:32px;
                display: flex;
                flex:1;
                @media (min-width: 800px) {
                    gap:0;
                }
            }

            .col-1 {
                flex-direction: column;

                h2 {
                    text-align: center;
                    @media (min-width: 800px) {
                        text-align: initial;
                    }
                }
                ul {
                    margin-top: auto;

                    li {
                        display: flex;
                        align-items: center;
                        .svg-icon {
                            width: 24px;
                            height: auto;
                            color:#fff;
                        }
                    }
                }
            }
            .col-2 {
                ul {
                    height: 100%;
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    @media(min-width: 800px) {
                        flex-direction: column;
                    }
                    .link {
                        font-size: 16px;
                        font-weight: 500;
                        color: black;
                        text-decoration: none;
                    }
                    .link:hover {
                        color: rgba(74, 6, 74, 0.703);
                    }
                }
            }
        }
        .right {
            gap:32px;
            color:black;
            align-items: center;
            flex-direction: column;
            @media(min-width: 800px) {
                align-items: flex-end;
                gap:0;
            }
        }

        p {
            margin-top: auto;
        }
    }
}

</style>