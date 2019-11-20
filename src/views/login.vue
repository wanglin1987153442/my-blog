<template>
	<div class="full ">
		<div class="top">
			<!-- <i class="wyy" ><router-link to="/" style="color: rgb(26,26,26);">&#xe601;</router-link></i> -->
		<p class="word" ><router-link to="/"  style="color: #2C3E50">昭文摘</router-link></p>
            <p class="return"><router-link to="/" style="color: #333333;">返回主页</router-link></p>
			</div>
			
			
		<div class="login-box  ">
			<div class="tab" ><span class="tab-itm" :class="{ active: isActive}" @click="changeTab">账户登录</span>
			<span class="tab-itm" :class="{ active: !isActive}" @click="changeTab">注册账户</span>
			</div>
<div  v-show="show&&selected===0" >
	<label >{{accountTip}}</label>
	     <div class="account">
		<i class="iconfont ic-user">
		</i> 
			<input type="text"   placeholder= " 请输入账号" v-model="userDto.mobile" 
				required="required" @focusin="clearAccount"
			/>
	</div>
	
	<div class="account">
				<i class="iconfont ic-user-password">
					</i> 
			<input type="password" placeholder="请输入密码" v-model="userDto.password"
			 required="required"  @focusin="clearAccount"
			 />
			</div>
	<div class="account3">
<p class="wl-subtitle">	<input type="checkbox" class="rember" value="记住密码" checked="checked">记住密码</p>

	<p class="wl-subtitle"><a href="https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html">忘记密码？</a></p>	
	</div>
	<input type="button" class="btn1 main-color" value="登录"  @click="signIn(userDto)" />
          
		   <div class="more_sign">
         <h6 >社交账号登陆</h6>	
		 <ul>
			 <i class="iconfont weibo ">&#xe73c;</i>
			  <i class="iconfont qq ">&#xe600;</i>
			  <i class="iconfont weixin">&#xe620;</i>
			 <i class="iconfont qita"> &#xe9d5;</i>
		 </ul>
             	</div>

			</div>
			
			
			
			
			
			
			
			
			<div v-show="show&&selected===1">
				<label >{{accountTip1}}</label>
				
				<div class="account">
					<i class="iconfont ic-zhuce—account">
					</i>
						<input type="text"   placeholder= " 请输入11位手机号"  v-model="user.mobile"
						required="required" @keyup="checkAccount"   @focusin="clearAccount"
						/>
				</div>
				
				<div class="account">
					<i class="iconfont ic-user-password">
					</i>
					</i>
						<input type="password"   placeholder= " 请设置密码" minlength=6 maxlength=16 v-model="user.password"
						required="required"  @focusin="clearAccount"
						/>
				</div>
				<div class="account4">
				
						<input type="text" class="yzm"  placeholder= " 请输入验证码" v-model="verifyCode"
						  required="required" @focusin="clearCode"
						 />
						<button class="sendyzm" @click="getCode" :disabled="btnDisabled" :class="{
							'btn':switchCss,
							'btn-disabled': !switchCss,
							'btn-normal': switchCss}">
							{{msg}}
						</button>
				</div>
				<input type="button" class="btn1 main-color" value="注册" @click="zhuce(user)" 
				
				 />
				<p class="zhuce—msg">点击 “注册” 即表示您同意并愿意遵守博客
				<br>
				<a href="https://www.jianshu.com/p/c44d171298ce">用户协议</a>
				"和"
				<a href="https://www.jianshu.com/p/2ov8x3">用户协议</a>
				</p>
				
				
				
				<div class="more_sign">
				<h6 class=line >社交账号直接注册</h6>	
				<ul>
							<i class="iconfont weibo ">&#xe73c;</i> 
							 <i class="iconfont qq ">&#xe600;</i>
							 <i class="iconfont weixin">&#xe620;</i>
							<i class="iconfont qita"> &#xe9d5;</i>
				</ul>
				    	</div>
			</div>
			
			</div>
			
		
		
	</div>
	
</template>












<script>
export default {
	data() {
		return {
			isActive: true,
			show: true,
			selected: 0,
			mobile: '',
			password: '',
			verifyCode: '',
			accountTip: '',
			accountTip1:'',
			btnDisabled: false,
			switchCss: false,
			countdown: 10,
			fade: 2,
			msg: '获取验证码',
			timer: null,
			timer1: null,
			code: '',
			
			
			
			
			userDto: {
				mobile: '',
				password: ''
			},
		user:{
			mobile: '',
			password: ''
		}
				
		
		};
	},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},
		
		clearAccount: function() {
			
			this.accountTip = ''
			this.accountTip1=''
		},
		clearCode: function() {
			this.verifyCode = ''
			this.verifyTip = ''
		},
		
		checkAccount: function() {
			if (this.user.mobile.length == 11) {
				if (!/^1[34578]\d{9}$/.test(this.user.mobile)) {
					return
				} else {
					this.switchCss = true
				}
			} else {
				this.switchCss = false
				
				return
			}
		},
		
		// submit:function(){
		// 	if (this.verifyCode == '') {
		// 			this.verifyTip = '验证码不能为空'
		// 			return
		// 		}
		// 		if (this.verifyCode != this.code) {
		// 			this.verifyTip = '验证码错误'
		// 			return
		// 		}
			
		// 		if (!this.timer1) {
		// 			this.toastShow = !this.toastShow
			
		// 			this.timer1 = setInterval(() => {
		// 				if (this.fade > 0 && this.fade <= 2) {
		// 					this.fade--
		// 					if (this.fade == 0) {
		// 						clearInterval(this.timer1)
		// 						this.toastShow = !this.toastShow
		// 						this.fade = 2
		// 						this.timer1 = null
		// 					}
		// 				}
		// 			}, 1000)
		// 		}
			
		// },
		
		
		getRandomNumber: function() {
			var result = [];
			for (var i = 0; i < 4; i++) {
				var ranNum = Math.ceil(Math.random() * 10); //生成一个0到10的数字
				result.push(String.fromCharCode(65 + ranNum))
			}
			var str = result.join('')
			console.log(str)
		
			return str
		},
		
		
		
getCode: function() {
						if (!this.timer) {
							this.code = this.getRandomNumber()
							this.timer = setInterval(() => {
								if (this.countdown > 0 && this.countdown <= 10) {
									this.countdown--
									if (this.countdown != 0) {
										this.btnDisabled = true
										this.switchCss = false
										this.msg = '重新发送(' + this.countdown + ')';
									} else {
										clearInterval(this.timer)
										this.msg = '获取验证码'
										this.countdown = 10
										this.timer = null
										this.switchCss = true
										this.btnDisabled = false
									}
								}
							}, 1000)
						}
					},
		
		
		
		
		
		
		
		zhuce(user) {
			 
			if (this.user.mobile == '') {
			this.accountTip1= '手机号码不能为空'
				return
			}
			
			if(this.user.password==''){
				this.accountTip1 = '密码不能为空'
				return
			}
			if(this.user.password.length<6){	
				this.accountTip1= '密码不能小于6位'
				this.password = ''
				return
			}
			if (this.verifyCode == '') {
					this.accountTip1 = '验证码不能为空'
					return
				}
				if (this.verifyCode != this.code) {
					this.accountTip1= '验证码错误'
					return
				}
	
			this.axios.put('http://localhost:8080/sign-in',	 JSON.stringify(this.user)).then(response => {
				alert(response.data.msg);
		         
			alert(this.mobile,this.password)
				if (response.data.msg === '注册成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					alert(localStorage.user)
					 this.$router.push('/');
					
				  
					
				}
			});
		},
		
		signIn(userDto) {
			if (this.userDto.mobile == '') {
				this.accountTip = '手机号码不能为空'
				return
			}
		if (!/^1[34578]\d{9}$/.test(this.userDto.mobile)) {
			this.accountTip = '手机号码格式错误'
			this.userDto.mobile = ''
			return
		}
		if(this.userDto.password==''){
			this.accountTip = '密码不能为空'
			
			return
		}
		
			this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto))
			.then(response => {
				alert(response.data.msg);
				if (response.data.msg === '成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					//路由跳转
					this.$router.push('/');
				}
			});
		}
	}
};
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
}

.full {
	width: 100%;
	height: 100%;
/* margin-top: -20px; */
	background-image: url(https://uploadfile.bizhizu.cn/up/5f/4c/7d/5f4c7dc0353b479d4f8c362dcae4cb97.jpg);
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
}

.login-box {
	position: absolute;
	top: 150px;
	left: 500px;
	background-size: calc(100%);
	opacity: 0.7;
	/* background-image: url(https://pic4.zhimg.com/v2-336374215130158ba9f2e487ff759738_1200x500.jpg);
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	margin-left: 100px; */
	background-color: #FEFEFE;
	width: 450px;
	height: 503px;
      display: flex;
	
	border-radius: 5px;
	
	flex-direction: column;

	border: 1px solid #2C3E50;

	box-sizing: border-box;
}
.tab{
margin: 0 auto;

width: 60%;
height: 30px;
	margin-bottom: 20px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
      
}
.tab-itm{
	display: inline-block;
	 font-size: 30px;
	 cursor: pointer;
    }

 .active {    
	 
	 display: flex;
	 justify-content: center;
	 color: #00BBDD;  
		  font-weight: 600;   

	 border-bottom: 2px solid #00BBDD;   
								}  
								
.account{
	display: flex;
	width: 300px;
	height: 50px;
	margin: 0 auto;
	
	box-sizing: border-box;
	border: 1px solid rgb(200, 200, 200);
	
	background-color: #AAAAAA;
}
.account>input{
	
	border: none;
	display: flex;
	flex: 0 0 88%;
	background-color: #AAAAAA;
	margin-left: 5px;
}
.account4{
	margin: 0 auto;
	width: 300px;
	height: 50px;
	box-sizing: border-box;
     display: flex;
    
	
}
.yzm{
	width: 55%;
	height: 40px;
	
	
}
.sendyzm{

    height: 40px;
	width: 45%;
	
}
.zhuce—msg{
	text-align: center;
	font-size: 12px;
	margin-top: 5px;
}

.btn1 {
	opacity: 1;
	cursor: pointer;
	color: #fff !important;
	font-size: 14px;
	letter-spacing: 10px;
	width: 300px;
	height: 50px;
	border-radius: 25px;
	margin-top: 25px;
}
.main-color {
	background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
	opacity: 0.7;
}

/* ************ */
@font-face {
  font-family: 'iconfont';  /* project id 1510728 */
  src: url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.eot');
  src: url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.woff') format('woff'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1510728_ay3xkdzckbs.svg#iconfont') format('svg');
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 30px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	
	
	
}

.ic-user:before{
    content: "\e686";

	vertical-align:middle;

	
}
.ic-user-password:before{
	content: "\e6e3";
	font-family: 'iconfont' !important;
	font-size: 30px;
	vertical-align:middle;
	
}


.ic-zhuce—account:before{
	content: "\e633";
	font-family: 'iconfont' !important;
	font-size: 30px;
	vertical-align:middle;
	color: rgb(36, 140, 133);
}
h6:before{
   content: "";
   border-top: 1px solid black;
   display: block;
   position: absolute;
   width: 60px;
 top: 307px;
   left: 100px;
}

 h6:after{
    content: "";
    border-top: 1px solid black;
    display: block;
 position: absolute;
   width: 60px;
   top: 307px;
   right: 100px;
	
}
.line:before{
   content: "";
   border-top: 1px solid black;
   display: block;
   position: absolute;
   width: 60px;
 top: 362px;
   left: 90px;
}

.line:after{
    content: "";
    border-top: 1px solid black;
    display: block;
 position: absolute;
   width: 60px;
   top: 362px;
   right: 90px;
	
}




.account3{
	
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	width:300px ;
	margin-top: 10px;
}

.more_sign{
	margin: 0 auto;
	width: 300px;
	margin-top: 20px;
/* 	margin-left: 30px; */
     display: flex;	
	flex-direction: column;
	
	/* justify-content: center;
	align-content: center; */
}

h6{		
	font-size: 15px;
}

.weibo{
	color: rgb(234, 93, 92);
}
.qq{
	color: rgb(76, 175, 233);
}
.weixin{
	color: rgb(36, 219, 90);
}
.qita{
	color: rgb(176, 114, 25);
}

ul{
	margin-top: 30px;
	width: 300px;
	display: flex;
	flex: 0 0 23%;
	justify-content: space-around;
	align-content: center;
}


label{
	color: red;
}







.top{
	display: flex;
	
	width: 100%;
	height: 80px;
	justify-content: space-between;
	align-content: center;
  
}

.word {
	/* position: absolute;
	left: 10%;
	top:20px; */
	margin: 20px;
	font-size: 25px;
	font-style: norm-moz-animational;
	
	
}


.return{
	/* position: absolute;
	 top: 10px;
	 right: 1%; */
margin: 20px;
	font-size:25px;
	font-style: norm-moz-animational;
	
	 
}
.return.router-link-exact-active{
 color: #42b983;
}










.btn-disabled {
	
    background-color: #AAAAAA;
    border: 1px solid #ddd;
    color: #ddd;
}


.btn-normal {
	cursor: pointer;
    background-color: #fff;
   
    color: #00BBDD;
}
</style>

