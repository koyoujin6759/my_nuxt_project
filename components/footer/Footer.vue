<template lang="">
    <div>
        <footer>
            <div class="footer__inner">
                <div class="footer__inner__main">
                    <div class="clear">
                        <h1 class="footer__logo__wrap">
                            <router-link to="./" class="footer__logo__link">logo</router-link>                    
                        </h1>
                    </div>                    
                </div>
                <div class="footer__inner__bottom">
                    <div class="footer__privacy__info">
                        <ul>
                            <li>
                                <router-link to="./">회사소개</router-link>                    
                            </li>
                            <li>
                                <router-link to="./">제휴문의</router-link>                    
                            </li>
                            <li>
                                <router-link to="./">이용약관</router-link>                    
                            </li>
                            <li>
                                <router-link to="./">개인정보취급방침</router-link>                    
                            </li>
                        </ul>
                    </div>
                    <div class="footer__company__info">
                        <ul>
                            <li>
                                <h3>사업자등록번호 :</h3>  
                                <p>2022-11-11-xxxx</p>
                            </li>
                            <li>
                                <h3>통신판매번호 :</h3>  
                                <p>2022-11-11-xxxx</p>
                            </li>
                            <li>
                                <h3>대표이사 :</h3>  
                                <p>koyoujin</p>
                            </li>
                            <li>
                                <h3>개인정보관리책임자 :</h3>  
                                <p>고유진</p>
                            </li>
                            <li>
                                <h3>부천시 원미구 중동</h3> 
                            </li>
                            <li>
                                <h3>Copyright © YOUJIN Co. All rights reserved.</h3> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/footer.scss";
</style>