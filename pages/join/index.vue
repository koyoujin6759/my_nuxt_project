<template lang="">
    <div>
        <div class="pc__join__area mt100 mb100" >
            <form action="">
                <div class="join__tit__area text__center mgbt50">
                    <h2>join</h2>
                </div>
                <div class="form__box__input mb10">
                    <input type="text" required="required" placeholder="email" ></input>
                </div>
                <div class="join_result__msg" >
                    <p></p>
                </div>
                <div class="form__box__input">
                    <input type="password" required="required" placeholder="password">
                </div>
                <div class="join__result__msg" >
                    <p></p>
                </div>
                <button type="button" class="btn__join mt20">join</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {     
             
        }
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    .pc__join__area {
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

        .join__result__msg {

            p {
                font-size:12px;
                color:red;
            }
        }

        .btn__join {
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