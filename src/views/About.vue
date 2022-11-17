<!-- eslint-disable vue/multi-word-component-names -->
<template>

<body>

    <section class="parallax">
        <img src="../assets/test/hill1.png" id="hill1">
        <img src="../assets/test/hill2.png" id="hill2">
        <img src="../assets/test/hill3.png" id="hill3">
        <img src="../assets/test/hill4.png" id="hill4">
        <img src="../assets/test/hill5.png" id="hill5">
        <img src="../assets/test/tree.png" id="tree">
        <h2 id="text">Flourish</h2>
        <img src="../assets/test/leaf.png" id="leaf">
        <img src="../assets/test/plant.png" id="plant">
    </section>

    <section class="sec">

        <div>
            <h1 class="desc">
                Find us on our Github!
            </h1>
        </div>

<!-- TEST CARDS -->
    <div class="cardcontainer">
        <div class="card">
        <img class="cardimg" src="..\assets\wr.jpg" alt="John" style="width:100%">
        <h1 class="cardname">Wye Rock</h1>
        <a href="https://github.com/LauWyeRock">
        <button class="cardbtn">Github</button>
        </a>
        </div>

        <div class="card">
        <img class="cardimg" src="..\assets\xm.jpg" alt="John" style="width:100%">
        <h1 class="cardname"> Xuan Ming </h1>
        <a href="https://github.com/xmlew">
        <button class="cardbtn">Github</button>
        </a>
        </div>

        <div class="card">
        <img class="cardimg" src="..\assets\shihan.jpg" alt="John" style="width:100%">
        <h1 class="cardname">Shi Han</h1>
        <a href="https://github.com/shihan-dubU">
        <button class="cardbtn">Github</button>
        </a>
        </div>

        <div class="card">
        <img class="cardimg" src="..\assets\tim.jpg" alt="John" style="width:100%">
        <h1 class="cardname">Timothy</h1>
        <a href="https://github.com/timcheng112">
        <button class="cardbtn">Github</button>
        </a>
        </div>

        <div class="card">
        <img class="cardimg" src="..\assets\audrey.jpg" alt="John" style="width:100%">
        <h1 class="cardname">Audrey</h1>
        <a href="https://github.com/Audrey-Goo">
        <button class="cardbtn">Github</button>
        </a>
        </div>
        
    </div>


    </section>
</body>

</template>

<script>

export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
        let text = document.getElementById('text');
        let leaf = document.getElementById('leaf');
        let hill1 = document.getElementById('hill1');
        let hill4 = document.getElementById('hill4');
        let hill5 = document.getElementById('hill5');
    
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
  }
})
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

::selection {
    background: rgba(0, 0, 0, .2);
}

body {
    background:rgba(240, 235, 244, 1);
    min-height: 100vh;
    overflow-x: hidden;
}

.parallax {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#text {
    position: absolute;
    font-size: 100px;
    color: rgb(197, 94, 237);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    font-family: serif;
}

.parallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
}

.sec {
    position: relative;
    background: #463A65;
    padding: 100px;
    height: 800px;
}

.sec h2 {
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
    font-family: serif;
}

.sec p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
}

#app {
  z-index: 100;
  align-items: center;
  padding-bottom: 4vmin;
  overflow-y: hidden;
  overflow-x: hidden;
}

.title {
  margin-top: 200px;
  font-size: 60px;
  width: 100%;
  z-index: 2;
}

@keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes outer-left {
  from {
    transform: translateX(50%);
  }
  to {
    transform: none;
  }
}

.keyframe {
  display: inline-block;
  animation: inner-left 1s 1s ease both,
    text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.artistes {
  animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
}

.title {
  animation: outer-left 1s 1s ease both;
}

body:active * {
  animation: none !important;
}

.desc {
    margin-bottom: 50px;
    color: rgb(214, 208, 255);
    font-size: 40px;
    text-align: center;
    font-family: serif;
}

.cardcontainer {
    display: flex;
    margin: 0 -5px;
}

.cardcontainer:after {
    content: "";
    display: table;
    clear: both;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  background-color: rgb(214, 208, 255);
  width: 22%;
  padding: 0 0px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 7px;
}

.cardname {
    font-family:serif;
    font-size:22px;
}

.cardtitle {
  color: black;
  font-size: 18px;
}

.cardimg {
  border-radius: 7px;
  width: 100%;
}

.cardbtn {
    border-radius: 7px;
    margin-bottom: 5px;
    margin-top: 8px;
    padding: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size:13px;
    background-color: transparent;
    color: black;
    border: 1.5px solid black;
}





</style>