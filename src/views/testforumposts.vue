<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <!-- <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forum</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital@1&display=swap" rel="stylesheet">
    </head> -->

<body>
    <header>
        <!--NavBar Section-->
        <div class="navbar">
            <nav class="navigation hide" id="navigation">
                <span class="close-icon" id="close-icon" onclick="showIconBar()"><i class="fa fa-close"></i></span>
                <ul class="nav-list">
                    <li class="nav-item"><a href="forum">Forums</a></li>
                    <li class="nav-item"><a href="forumposts">Posts</a></li>
                    <li class="nav-item"><a href="detail">Detail</a></li>
                </ul>
            </nav>
            <a class="bar-icon" id="iconBar" onclick="hideIconBar()"><i class="fa fa-bars"></i></a>
            <div class="brand">My Forum</div>
        </div>
        <!--SearchBox Section-->
        <div class="search-box">
            <div>
                <select name="" id="">
                    <option value="Everything">Everything</option>
                    <option value="Titles">Titles</option>
                    <option value="Descriptions">Descriptions</option>
                </select>
                <input type="text" name="q" placeholder="search ...">
                <button><i class="fa fa-search"></i></button>
            </div>
        </div>
    </header>
    <div class="container">
        <!--Navigation-->
        <div class="navigate">
            <span><a href="">MyForum - Forums</a> >> <a href="">random subforum</a></span>
        </div>
        <!--Display posts table-->
        <div class="posts-table">
            <div class="table-head">
                <div class="status">Status</div>
                <div class="subjects">Subjects</div>
                <div class="replies">Replies/Views</div>
                <div class="last-reply">Last Reply</div>
            </div>
            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>
            <!--starts here-->
            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-book"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-rocket"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-frown-o"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>


            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-lock"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>

            <div class="table-row">
                <div class="status"><i class="fa fa-fire"></i></div>
                <div class="subjects">
                    <a href="">Is learning Python on 2021 worth it?</a>
                    <br>
                    <span>Started by <b><a href="">User</a></b> .</span>
                </div>
                <div class="replies">
                    2 replies <br> 125 views
                </div>

                <div class="last-reply">
                    Oct 12 2021
                    <br>By <b><a href="">User</a></b>
                </div>
            </div>
            <!--ends here-->
        </div>
        <!--Pagination starts-->
            <div class="pagination">
                pages: <a href="">1</a><a href="">2</a><a href="">3</a>
            </div>
        <!--pagination ends-->
    </div>

    <div class="note">
        <span><i class="fa fa-frown-o"></i>&nbsp; 0 Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br>
        <span><i class="fa fa-book"></i>&nbsp; Low Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br>
        <span><i class="fa fa-fire"></i>&nbsp; Popular Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br>
        <span><i class="fa fa-rocket"></i>&nbsp; High Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br>
        <span><i class="fa fa-lock"></i>&nbsp; Closed Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i class="fa fa-share-square"></i></a><br>
    </div>

    <footer>
        <span>&copy;  Selmi Abderrahim | All Rights Reserved</span>
    </footer>

</body>


</template>

<script>
export default {
    name: 'TestForumPosts',
	methods: {
		hideIconBar() {
			var iconBar = document.getElementById("iconBar");
            var navigation = document.getElementById("navigation");
            iconBar.setAttribute("style", "display:none;");
            navigation.classList.remove("hide");
        },
        showIconBar(){
            var iconBar = document.getElementById("iconBar");
            var navigation = document.getElementById("navigation");
            iconBar.setAttribute("style", "display:block;");
            navigation.classList.add("hide");
        },
        showComment(){
            var commentArea = document.getElementById("comment-area");
            commentArea.classList.remove("hide");
        },
        showReply(){
            var replyArea = document.getElementById("reply-area");
            replyArea.classList.remove("hide");
        }

	}
}
</script>

<style scoped>

*{
    box-sizing: border-box;
}

body{
    font-size: 14px;
    font-family: 'Titillium Web', sans-serif;
    background-color:rgb(0,0,0);
    color:#FEFEFE;
}

a{
    color:#FF0042;
    font-weight: bolder;
    text-decoration: none;
}

h1{
    font-size:16px;
    font-weight: bolder;
}

.table-head{
    display: flex;
}

.table-head div{
    padding: 5px;
    margin: 2px;
    background-color: #2C2C2C;
    font-weight: bold;
}

.table-head .status{
    flex: 5%;
}

.table-head .subjects{
    flex: 70%;
}

.table-head .replies{
    flex: 10%;
}

.table-head .last-reply{
    flex: 15%;
}

/* posts table's body  */

.table-row{
    display: flex;
}

.table-row .status, .table-row .subjects, .table-row .replies, .table-row .last-reply{
    padding: 5px;
    margin: 2px;
    background-color: #131415;
}

.table-row .status{
    flex: 5%;
    font-size: 30px;
    text-align: center;
}

.table-row .subjects{
    flex: 70%;
}

.table-row .replies{
    flex: 10%;
}

.table-row .last-reply{
    flex: 15%;
}

/* navigation path*/
.navigate{
    margin-block: 20px;
    font-weight: lighter;
    font-size: 24px;
}

.navigate a{
    color: #fff;
}

.navigate a:hover{
    color:#FF0042;
    font-weight: bolder;
}

/* Pagination*/

.pagination{
    padding: 20px;
    font-size: 15px;
}

.pagination a{
    color: #fff;
    margin-inline: 5px;
    padding: 5px 10px;
    border: solid 0.5px #fff;
}

.pagination a:hover{
    opacity: 0.5;
}

.note{
    background-color:#111314;
    padding: 20px;
    display: block;
}

.note span{
    font-size: 20px;
    margin-block: 5px;
}

</style>

