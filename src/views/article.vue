<template>
	<div >
		<div class="container1 wl-container"><h1>1111</h1></div>
<div class=bigbox>
	
		<div class="left">
			<div class="wl-col-3  box" v-for="(article, index) in articals.slice(1,13)" :key="index" >
				
				<p class="tupian" ><img :src="article.avatar" class="cover"  /></p>
			
				
				<p class="wl-subtitle ">{{ article.title }}</p>
			
			</div>
	
		</div>
		<div class="right">
				<h1>11112222</h1>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			articals: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			//看一下数据
			console.log(res.data.data);
			this.articals = res.data.data;
			for (var i = 0; i < this.articals.length; i++) {
				this.articals[i].avatar = this.getImage(this.articals[i].avatar);
			}
		});
	},
	methods: {
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

.left {
	display: flex;
	flex-wrap: wrap;
	flex: 0 0 65%;
	
	
	
}
.right{
	
	display: flex;
	felx:1 1 45%;
	width: 100%;
	background-color: black;
}
.container1 {

	height: 280px;
	background-color: #00BBDD;
}
.box {
	
	height: 277px;
	
	border: 1px solid #000000;
	background-color: rgb(254, 254, 254);
	margin-bottom: 20px;
	margin: 15px;
}
.cover{
	
	width: 170px;
	height:  207px;
	/* background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat; */
}

.tupian{
/* 	width: 100%;
	height: 210; */

}
.wl-subtitle{
	
	color: #2C3E50;
}
.bigbox{
	display: flex;
	/* flex: 0 0 60%; */

     box-sizing: border-box;

}
</style>
