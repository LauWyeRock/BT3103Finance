<template>
	<div class = "root">
		<button @click=open()> Take the Quiz </button>
		<teleport to = "body">
			<div class = "modal" v-if="isOpen">
				<div>
					<h2> flourich Quiz </h2>
					<div class = "question"> Q1: Which market is flourich NOT centered around?</div>
					<div class="options">
						<button id="0" class="option1" @click=check(this)> Cryptocurrency Market </button>
						<button id="1" class="option2" @click=check(this)> Supermarket</button>
						<button id="2" class="option3" @click=check(this)> Stock Market</button>
					</div>
					<div class = "question"> Q2: What are options? </div>
					<div class= "options">
						<button id= "0" class="option1" @click=check(this)> Choice to buy/sell a stock </button>
						<button id="1" class="option2" @click=check(this)> Financial Derivative</button>
					</Div>
					<div class = "question"> Q3: What does flourich help you with? </div>
					<div class="options">
						<button id="0" class="option1" @click=check(this)> Getting Rich </button>
						<button id="1" class="option2" @click=check(this)> Financial Literacy</button>
						<button id="2" class="option3" @click=check(this)> Finding Romance</button>
						<button id="3" class="option3" @click= check(this)> Actual Trading</button>
					</Div>
					<button class = "close" @click = close()> Close </button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	props: ['QuizPopup'],
	data() {
		return {
			isOpen: ref(false),
			questionAnswers: [1, 2, 3]
		}
	},
	methods: {
		open() { this.isOpen = true},
		close() { this.isOpen = false},
		check(element) {
			console.log(element)
			console.log(event.target.id)
			console.log(event.target.className)
			if(event.target.id == "1"){
				event.target.className="correct"
			}
			else {
				event.target.className="wrong"
			}
		}
	}
}
</script>

<style>

.modal {
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.1);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.question {
	top: 30;
}

.options {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.close {
	display: flex;
	justify-content: center;
	align-items: center;
}

.correct {
    background-color:green;
}

.modal > div {
	background-color: #fff;
	padding: 50px;
	border-radius: 10px
}
</style>