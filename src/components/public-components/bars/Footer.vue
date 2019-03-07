<template>
  <el-container class="footer-container">
    <div class="footer">

      <el-row>
        <el-col :span="18" class="box-left">
          <img :src="logo"/>
          <h1 class="slogan">TUYỂN DỤNG THẦN TỐC - VIỆC LÀM NHƯ Ý</h1>
        </el-col>

        <el-col :span="6" class="box-right">
          <div class="contact-us">
            <p>Theo dõi FastJobs trên mạng xã hội</p>
            <nuxt-link to="/">
              <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            </nuxt-link>
            <nuxt-link to="/">
              <font-awesome-icon :icon="['fab', 'google']"/>
            </nuxt-link>
            <nuxt-link to="/">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
      <div class="desc">
        Micheal <font-awesome-icon :icon="['far', 'copyright']"/>
        2018 Copyright<span v-if="!isMobile"> | </span><br v-if="isMobile"/>Theme designed by Micheal
        <br/>
        All Rights Reserved
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        logo: require('~/assets/images/fastjobs_logo.png'),
        isMobile: false
      }
    },
    mounted() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/styles/fastjobs_variables";

  .footer-container {
    background-color: $color-primary;
    color: $color-white;
    width: 100%;
    font-weight: $fw-small-400;
  }

  .footer {
    width: $page-width;
    margin: 0 auto;
    padding: 30px 0;
  }


  .box-left {
    display: flex;
    align-items: center;

    img {
      height: 75px;
    }

    .slogan {
      font-weight: $fw-base-500;
      display: inline-block;
      margin-left: 0.8rem;
    }
  }


  .box-right {
    .contact-us {

      p {
        line-height: $line-height-30;
        font-size: $fs-large-18;
        margin-bottom: 15px;
      }

      a {
        border: 1px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: $color-white;
        color: $color-primary;
        margin-right: 20px;
        display: inline-block;
        text-align: center;
        line-height: 40px;

        svg {
          font-size: 20px;
        }
      }
    }
  }
</style>

