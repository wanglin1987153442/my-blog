<template>
	<div>
		<div class="topbox">
		<div class="container1 ">
			<transition-group tag="ul" class="slide-ul" name="slide">
		<li v-for="(article, index) in articles.slice(15 ,19)" :key="index"
		v-show="index===currentIndex"
		@mouseenter="stop"
		 @mouseleave="go">
		
		<img :src="article.cover" class="cover" />
	
		</li>
		</transition-group> 
		<div class="carousel-items">
			<span v-for="(article, index) in articles.slice(15 ,19)" :key="index"
			:class="{active:index===currentIndex}"
			 @mouseover="change(index)"
			@mouseenter="stop"
			 @mouseleave="go"
			 >{{ article.title }}</span>
		</div>
		
		
	</div>
		<!-- <div class="carousel-items">
			<span v-for="(item,index) in slideList" 
			:class="{active:index===currentIndex}"
			 @mouseover="change(index)"></span>
		</div> -->
	
		<div class="container2"><h1>211111</h1></div>
		</div>
		
		
		
		<div class="item-box">
		<!-- <span class="tab-itm" :class="{ active: isActive==0}" @click="changeTab">热门文章</span>
		<span class="tab-itm" :class="{ active: !isActive==1}" @click="changeTab">点赞最高文章</span>
		
		<span class="tab-itm" :class="{ active: !isActive}" @click="changeTab">评论最多文章</span>
		<span class="tab-itm" :class="{ active: !isActive}" @click="changeTab">最新发表文章</span> -->
		<p  class="tab-itm"> 热门推荐</p>
		<li v-for="(changetable,index) in changetableList"  :key="index"
		
		 @mouseover="changeTab(index)"
		 :class="{active:index===currentIndex1}"
		>
			<P class="wl-subtitle">{{changetable.description}}</P>
			
			
			
			
		</li>
		</div>
		<div class="bigbox">
			
			<div class="left">
		
			    
			
				<div class="box"  v-show="show&&selected===0" v-for="(article, index) in articles.slice(1, 13)" :key="index">
					<p class="tupian "><img :src="article.cover" class="cover" />
					</p>
					<span class="wl-subtitle">{{ article.title }}</span>
               
				
				</div>
				
				
				<div class="box"  v-show="show&&selected===1" v-for="(article, index) in articles.slice(14, 27)" :key="index">
					<p class="tupian "><img :src="article.cover" class="cover" />
					</p>
					<span class="wl-subtitle">{{ article.title }}</span>
				               
				
				</div>
				
				
				
				
				<div class="box"  v-show="show&&selected===2" v-for="(article, index) in articles.slice(1, 2)" :key="index">
					<p class="tupian "><img :src="article.cover" class="cover" />
					</p>
					<span class="wl-subtitle">{{ article.title }}</span>
				               
				
				</div>
				
				
				
				<div class="box"  v-show="show&&selected===3" v-for="(article, index) in articles.slice(2, 5)" :key="index">
					<p class="tupian "><img :src="article.cover" class="cover" />
					</p>
					<span class="wl-subtitle">{{ article.title }}</span>
				               
				
				</div>
			</div>
			<div class="right"><h1>11112222</h1></div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			
			
			
			articles: [],
			isActive: 0,
			
			show: true,
			
			// 轮播图
			currentIndex: 0,
			timer: null,
			// 选项卡
			currentIndex1: 0,
			selected: 0,
			changetableList:[
				{"description":"最新发表文章",
				 
				},
				{"description":"点赞最高文章",
				
				},
				{"description": "评论最多文章",
			
				},
				
				{"description":"热门文章",
				
				}
				
			]
		};
	},
	created() {
		
		this.$nextTick(() => {
			this.timer = setInterval(() => {this.autoPlay()}, 3000)
			
			
		})
		
		
		
		this.axios.get('http://localhost:8080/api/article').then(res => {
			//看一下数据
			console.log(res.data.data);
			this.articles = res.data.data;
			for (var i = 0; i < this.articles.length; i++) {
				this.articles[i].cover = this.getImage(this.articles[i].cover);
			}
		});
	},
	methods: {
		// 轮播图
		go() {
			this.timer = setInterval(() => {
				this.autoPlay()
			}, 3000)
		},
		stop() {
			clearInterval(this.timer)
			this.timer =null
		},
		change(index) {
			this.currentIndex = index
		},
		autoPlay() {
			this.currentIndex++
			if (this.currentIndex >  2) {
				this.currentIndex = 0
			}
		},
		
		changeTab(index) {
			this.currentIndex1 = index
		this.selected=	this.currentIndex1 
		},
	
		
		
		
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url;
			// console.log(url);
			// // 把现在的图片连接传进来，返回一个不受限制的路径
			// if (url != undefined) {
			// 	console.log('https://images.weserv.nl/?url=' + url)
			// 	// var uu = url[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=' + url);
			// 	return 'https://images.weserv.nl/?url=' + url
			// 	// return 'https://img-blog.csdnimg.cn/20190918140158853.png'
			// }
		}
	},
	computed: {
		// getImage(url) {
		// 	// console.log(url);
		// 	// 把现在的图片连接传进来，返回一个不受限制的路径
		// 	// if (url != undefined) {
		// 		console.log('https://images.weserv.nl/?url=' + url)
		// 		var uu = url[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=' + url);
		// 		return uu
		// 	// }
		// }
	}
};
</script>

<style scoped>
.act-item {
	list-style: none;
	width: 193px;
	height: 278px;
	margin: 0 29px 20px 0;
	overflow: hidden;
	position: relative;
	background-color: #fefefe;
}
.item-box{
	display: flex;
	width: 52%;
	height: 60px;
	justify-content: space-around;
	align-items: center;
	border: #FB8C00;
	
	
}

.tab-itm{
	 font-size: 20px;
	 cursor: pointer;
    }
	.active {
		 
		 display: flex;
		 justify-content: center;
		 color: #00BBDD;  
			  font-weight: 600;   
	
		 border-bottom: 2px solid #00BBDD;   
									}  
									
									
.left {
	display: flex;
	flex-wrap: wrap;
	flex: 0 0   50%;
	box-sizing: border-box;
	margin-right: 20px;
}
.right {
	display: flex;
	felx: 1 1 25%;
	width: 100%;
	background-color: black;
}
.topbox{
	width: 100%;
	height:380px ;
	display: flex;
	
}
.container1 {
	margin-top: 10px;
	margin-left: 15px;

	width: 830px;
	
	
}
.container2{
margin-top: 10px;	
margin-left: 25px;
	flex: 1 1 45%;
	border-style: double;
	 border: 10px solid #000000;
	background-color: #FB8C00
}


.box {
	margin-left: 18px;
	margin-top: 20px;
	width: 193px;
	height: 290px;
	
	background-color: rgb(232, 223, 196);
	
}
.tupian{
	    display: block;
	    width: 100%;
	    height: 80%;
	   
	   
	
}
.wl-subtitle {
	color: #2c3e50;
	height: 20%;
 font-size: 13px;
	
}
.cover {
	width: 170px;
	height: 207px;
	/* background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat; */
}



.bigbox {
	display: flex;
	/* flex: 0 0 60%; */

	box-sizing: border-box;
}






/* 轮播 */
	.slide-enter-to {
				transition: all 1s ease;
				transform: translateX(0);
			}

		/* 	.slide-leave-active {
				transition: all 1s ease;
				transform: translateX(100%)
			} */

			.slide-enter {
				transform: translateX(1%)
			}

			.slide-leave {
				transform: translateX(0)
			} 
			
	
			.slide-ul {
				display: flex;
				width: 100%;
				height: 80%;
			}
			
			.slide-ul li {
				
				width: 100%;
				height: 100%;
			}
			
	
		.slide-ul li img {
				width: 100%;
				height: 100%;
			}
			
			
			
			.carousel-items{
				display: flex;
				height: 20%;
			
				
				  
					
			}
			.carousel-items span{
				
				/* text-overflow: ellipsis;
				              overflow: hidden;
				              white-space: nowrap; */
				            flex: 1 1 24%;
							  height: 100%;
							  display: flex;
							  align-items: center;
							  justify-content: center;
							background-color: rgb(227, 226, 226)
							 
			}
			
			.carousel-items .active {
				width: 100%;
				  color: #FB8C00;
				border-bottom: 5px solid rgb(227, 186, 125);
				
			}
</style>
