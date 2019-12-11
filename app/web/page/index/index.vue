<template>
    <layout>
        <div>
            <!--<mt-button type="default"  size="large">default</mt-button>-->
            <!--<mt-button type="primary" size="large">primary</mt-button>-->
            <!--<mt-button type="danger" size="large">danger</mt-button>-->
            <div class="test">
                <div></div>
            </div>
        </div>
    </layout>
</template>
<style lang="scss">
    @import "index.scss";
</style>
<script>
    import 'mint-ui/lib/style.css'
    import axios from 'axios'
    export default {
        components: {
        },
        data(){
            return {
                isFinish: false,
                isLoading : false,
                pageIndex: 1,
                pageSize: 10
            }
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            // /user/getUserInfo
            // /europa//api/dailyReport/listData?type=0
            // axios.get('/user/getUserInfo').then(res => {
            //     console.log(res)
            // })
        }
    }
</script>

