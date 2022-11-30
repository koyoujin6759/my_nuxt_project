<template lang="">
    <div>
        <div class="pc__login__area mt100 mb100 test" >
            <form method="post" action="">
                <div class="login__tit__area text__center mb50">
                    <h2>login</h2>
                </div>
                <div class="form__box__input mb10">
                    <input type="email" required="required" name="userEmail" v-model="userEmail" placeholder="email" :state="validEmail"></input>
                </div>
                <div class="login__result__msg" >
                    <p>{{emailErrMsg}}</p>
                </div>
                <div class="form__box__input">
                    <input type="password" required="required" name="userPassword" v-model="userPassword" placeholder="password">
                </div>
                <div class="login__result__msg" >
                    <p>{{pwErrMsg}}</p>
                </div>
                <button type="button" v-on:click="OnClickLoginButton" class="btn__login mt20">login</button>
            </form>
        </div>
    </div>
</template>
<script>
import value from '@/mixin/value.js';
import api from "@/mixin/api";
export default {
    mixins:[value,api],
    data() {
        return {     
            userEmail: '',
            userPassword: '',  
            emailErrMsg: '',  
            pwErrMsg:'', 
        }
    },
    computed: {
        
    },
    created() {
        // this.GetBoardData().then(console.log);
        this.GetBoardData();
    },
    methods: {
       async OnClickLoginButton() {
            let checkUserInfo = false;
            if(!this.userEmail && !this.userPassword) {
                this.emailErrMsg = '이메일을 입력해주세요.'
                return;
            }            
            
            if(!this.userEmail) {
                this.emailErrMsg = '이메일을 입력해주세요.'
                return;
            } else if(!this.validEmail(this.userEmail)) {
                this.emailErrMsg = '올바르지 않은 이메일형식입니다.'
                this.pwErrMsg = null;
                return;
            }  
            if(!this.userPassword) {
                this.pwErrMsg = '패스워드를 입력해주세요.'
                return;
            }     
            if(this.validEmail(this.userEmail) && this.userEmail && this.userPassword) {
                checkUserInfo = true;
            }
         
            if(checkUserInfo){
                this.Login();
            }
            
        },
        async Login(){
            // this.$router.push('/main');
            // let userInfo = await GetBoardData(boardData)
            // if(userInfo){
            //     this.$router.push('/main');
            // // }
            // const userInfo = this.loginApiCall()
            // this.$store.commit('user/setUser',userInfo)
            let saveData = {};
            saveData.title = this.userEmail;
            saveData.body = this.userPassword;
            // let vm = this;
            // await this.GetUserData()
            // .then(function(response) {
            //     let userInfo = response.data;
            //     if(userInfo) {
            //         vm.$router.push('/main');
            //         // console.log(userInfo)
            //     }
            // })
           await this.PostData(saveData) 
            .then(response => {
                console.log(response.data)
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    .pc__login__area {
        max-width:366px;
        padding:0 20px;
        margin:0 auto;

        h2 {
            font-size:24px; 
            color:$title-color-base;
        }

        .form__box__input {

            input {
                width:100%;
                height:50px;
                line-height:50px; 
                padding:0 20px;
                border:1px solid #ccc;

                &.input-danger {
                    border-color:red;
                }
            }
        }

        .login__result__msg {
            margin:10px 0;

            p {
                font-size:12px;
                color:red;
            }
        }

        .btn__login {
            width:100%; 
            height:50px;
            line-height:50px; 
            background:#000;
            color:#fff;
            text-align:center;

            &:disabled {
                background:#777;
            }
        }
    }
</style>