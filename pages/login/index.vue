<template lang="">
    <div>
        <div class="pc__login__area mt100 mb100" >
            <form action="">
                <div class="login__tit__area text__center mb50">
                    <h2>login</h2>
                </div>
                <div class="form__box__input mb10">
                    <input type="email" required="required" name="userEmail" v-model="userEmail" placeholder="email" :state="emailValidation"></input>
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
                <button type="button" v-on:click="loginSubmit" class="btn__login mt20">login</button>
            </form>
        </div>
    </div>
</template>
<script>
// import {getDataApi} from '@/mixin/api'
export default {
    data() {
        return {     
            userEmail: '',
            userPassword: '',  
            emailErrMsg: '',  
            pwErrMsg:'', 
        }
    },
    computed: {
        emailValidation() {
            let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(this.userEmail);
        }
    },
    methods: {
        loginSubmit: function() {
            if(!this.userPassword) {
                this.pwErrMsg = '패스워드를 입력해주세요.'
            }
            if(!this.userEmail && !this.userPassword) {
                this.emailErrMsg = '이메일을 입력해주세요.'
                this.pwErrMsg = null;
            }
            if(!this.userEmail) {
                this.emailErrMsg = '이메일을 입력해주세요.'
            } else if(!this.validEmail(this.userEmail)) {
                this.emailErrMsg = '올바르지 않은 이메일형식입니다.'
                this.pwErrMsg = null;
            }       
            if(this.validEmail(this.userEmail) && this.userEmail && this.userPassword) {
                this.$router.push('/main');
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        // async loginSubmit() {            
        //     if(!this.userEmail) {
        //         this.emailErrMsg = '이메일을 입력해주세요.'
        //     } else if(!this.userPassword) {
        //         this.pwErrMsg = '패스워드를 입력해주세요.'
        //     } else if(!this.userEmail && !this.userPassword) {
        //         this.emailErrMsg = '이메일을 입력해주세요.'
        //         this.pwErrMsg = null;
        //     }
        //     if(this.userEmail && this.userPassword) {
        //         this.$router.push('/main');
        //     }
        //     await getDataApi()
        //     .then(function(response) {
        //         const dataItem = response.data;
        //         console.log(dataItem);
        //     })
        // },
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
            margin-bottom:10px;

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