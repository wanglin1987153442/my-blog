<template>

	
	<div>
		<h3>欢迎来到昭文摘</h3>
		<div class="nav">
			<router-link to="/article">文章 </router-link>
			<router-link to="/user">用户</router-link>
			<router-link to="/special">文章专题</router-link>
		
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
				user:JSON.parse(localStorage.user)
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
			}
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
		margin-top: -10px;
		justify-content: space-around;
	}
	#logout{
		 color: yellow;
		  cursor: pointer;
	}
	.avatar{
		border-radius: 50%;
		height: 40px;
		
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
	margin: 0 auto;
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-content: center;
	margin-top: 20px;
	
}
.btn-login{
	margin-top: 10px;
}


.nav a {
	font-weight: bold;
	color: #2c3e50;
}

.nav a.router-link-exact-active {
	color: #42b983;
}

.container{
	
	width: 100%;

	
	
}
</style>
