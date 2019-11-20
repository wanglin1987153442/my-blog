<template>

	
	<div >
		
		<div class="nav">
			<h3>欢迎来到昭文摘</h3>
			<router-link to="/article">文章 </router-link>
			<router-link to="/user">用户</router-link>
			<router-link to="/special">文章专题</router-link>
			<div class="wseach">
			<i class="iconfont" style="color: rgb(160, 149, 117); cursor: pointer;">&#xe9a1;</i>
			<input type="text" class="serach" placeholder= " 搜索"/>
			</div>
			<div class="tuichu">
					<router-link to="/login" v-if="!this.user" class="btn-login">登陆</router-link>
			<li class="nav-item" v-if="this.user">
		 <router-link to="/User"><img :src="this.user.avatar" class="avatar" /></router-link>
			          </li>
	       <p class="nav-item" v-if="this.user" @click="logout" id="logout">退出</p> 
			   </div>
			   
		</div>
		
		<router-view class="container"/> 
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				user:JSON.parse(localStorage.user),
				articals: [],
			}
		},
		created(){
			if(this.user){
				console.log(this.user)
			};
			
			
		},
		methods:{
			logout(){
				this.user=null
				localStorage.clear()
			},
			
		}
	}
	
	
</script>

<style >
	
	.nav-item {
	  list-style: none;
	  width: 20px;
	  font-size: 16px;
	  
	}
	.tuichu{
		width: 120px;
	display: flex;
		justify-content: space-around;
	}
	#logout{
		 color: #000000;
		  cursor: pointer;
	}
	.avatar{
		border-radius: 50%;
	height: 50px;
	
		
	}
	*{
		margin: 0;
	    padding: 0;
	}
	
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.nav {
display: flex;

justify-content: space-between;

	margin-top: 10px;

	
	


}



.btn-login{
	margin-top: 10px;
}


.nav a {
	font-weight: bold;
	color: #000000;
	font-size: 15px;
}

.nav a.router-link-exact-active {
	color: #42b983;
}

.container{	
	width: 100%;
	
}









@font-face {
  font-family: 'iconfont';  /* project id 1510728 */
  src: url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.eot');
  src: url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.woff') format('woff'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.svg#iconfont') format('svg');
}




.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
	.wseach{
		width: 180px;
		height: 30px;
		border-radius: 25px;
		box-sizing: border-box;
		border: 1px solid #000000;
	}
	
	.serach{
		width: 80%;
		height: 100%;
		border: none;
		
	}
</style>
