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
                                <p>114-86-92856</p>
                            </li>
                            <li>
                                <h3>통신판매번호 :</h3>  
                                <p>2014-서울서초-0345</p>
                            </li>
                            <li>
                                <h3>대표이사 :</h3>  
                                <p>양승윤</p>
                            </li>
                            <li>
                                <h3>개인정보관리책임자 :</h3>  
                                <p>김수현</p>
                            </li>
                            <li>
                                <h3>서울특별시 강남구 테헤란로 146 현익빌딩 11층</h3> 
                            </li>
                            <li>
                                <h3>Copyright © BRAVECOMPANY Co. All rights reserved.</h3> 
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
    @import "@/assets/scss/layouts/footer.scss";
</style>