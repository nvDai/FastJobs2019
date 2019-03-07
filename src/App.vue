<template>
  <div id="app">
    <el-container class="header-container">
      <div class="header">
        <el-row class="nav-bar">
          <el-col :span="4" class="nav-bar--logo">
            <router-link to="/">
              <img
                :src="logo"
                @click="handleOnClickNavBar('HOME_PAGE')"
              />
            </router-link>
            <p></p>
          </el-col>
          <el-col :span="20" class="nav-bar--container">
            <ul class="nav-menu">
              <li
                @click="handleOnClickNavBar('HOME_PAGE')"
                :class="{active: activeMenuItem === 'HOME_PAGE'}"
              >
                <router-link to="/" class="nav-item">
                  <font-awesome-icon :icon="['fas', 'home']"/>
                  <p>Trang chủ</p>
                </router-link>
              </li>

              <li
                @click="handleOnClickNavBar('RECRUITMENT_PAGE')"
                :class="{active: activeMenuItem === 'RECRUITMENT_PAGE'}"
              >
                <router-link to="/tuyen-dung" class="nav-item">
                  <font-awesome-icon :icon="['fas', 'briefcase']"/>
                  <p>Tuyển dụng</p>
                </router-link>
              </li>

              <li
                @click="handleOnClickNavBar('CANDIDATE_PAGE')"
                :class="{active: activeMenuItem === 'CANDIDATE_PAGE'}"
              >
                <router-link to="/ung-vien" class="nav-item">
                  <font-awesome-icon :icon="['far', 'id-card']"/>
                  <p>Ứng viên</p>
                </router-link>
              </li>

              <li
                @click="handleOnClickNavBar('COMPANY_PAGE')"
                :class="{active: activeMenuItem === 'COMPANY_PAGE'}"
              >
                <router-link to="/cong-ty" class="nav-item">
                  <font-awesome-icon :icon="['far', 'building']"/>
                  <p>Công ty</p>
                </router-link>
              </li>

              <li
                @click="handleOnClickNavBar('JOB_MAP_PAGE')"
                :class="{active: activeMenuItem === 'JOB_MAP_PAGE'}"
              >
                <router-link to="/ban-do" class="nav-item">
                  <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                  <p>Bản đồ</p>
                </router-link>
              </li>

              <li
                @click="handleOnClick"
                :class="{active: activeMenuItem === 'ACCOUNT_PAGE'}"
              >
                <el-dropdown
                  v-if="!loggedIn"
                  class="dropdown-menu"
                  trigger="click"
                >
                  <div class="nav-item dropdown-menu__label">
                    <font-awesome-icon :icon="['fas', 'user-tie']"/>
                    <p>
                      Tài khoản
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </p>
                  </div>

                  <el-dropdown-menu slot="dropdown">
                    <router-link to="/login">
                      <el-dropdown-item>
                        Đăng nhập
                      </el-dropdown-item>
                    </router-link>
                    <router-link to="/signup">
                      <el-dropdown-item>
                        Đăng ký
                      </el-dropdown-item>
                    </router-link>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown
                  v-if="loggedIn"
                  class="dropdown-menu"
                  trigger="click"
                >
                  <div class="nav-item dropdown-menu__label">
                    <img :src="avatar" width="50px"/>
                  </div>

                  <el-dropdown-menu slot="dropdown">
                    <router-link to="/login">
                      <el-dropdown-item>
                        Đăng nhập
                      </el-dropdown-item>
                    </router-link>
                    <router-link to="/signup">
                      <el-dropdown-item>
                        Đăng ký
                      </el-dropdown-item>
                    </router-link>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-container>
    <router-view/>
    <footer class="footer">
      <div>
        <h2>FastJobs</h2>
        <ul>

          <li class="github-icon">
            <a href="https://github.com/nvDai" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>
          </li>

          <li class="facebook-icon">
            <a href="https://www.facebook.com/nvdai2401" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            </a>
          </li>

          <li class="twitter-icon">
            <a href="https://twitter.com/micheal2401" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>

          </li>

          <li class="linked-in-icon">
            <a href="https://linkedin.com/in/nvdai2401" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
            </a>
          </li>

        </ul>
        <div class="desc">
          Micheal <i class="fal fa-copyright" style="font-size: 16px"></i>
          2019 Copyright<span v-if="!isMobile"> | </span><br v-if="isMobile"/>Theme designed by Micheal
          <br/>
          All Rights Reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  props: {
    activeMenuItem: String
  },
  data () {
    return {
      logo: require('@/assets/images/fastjobs_logo.png'),
      avatar: require('@/assets/images/account_avatar.png'),
      dropdownMenuVisible: false,
      isMobile: false
    }
  },
  computed: {
    ...mapState({
      searchingContent: 'searchingContent',
      loggedIn: 'loggedIn'
    })
  },
  mounted () {
    if (window.innerWidth <= 768) {
      this.isMobile = true
    }
  },
  methods: {
    ...mapActions({
      updateNavBarStatus: 'updateNavBarStatus',
      updateSearchingContent: 'updateSearchingContent'
    }),

    handleOnClickNavBar (status) {
      this.updateNavBarStatus(status)
      this.updateSearchingContent('')
    },

    handleOnClick () {
      this.$emit('on_click_account_text_on_nav_bar')
    },

    handleOnMouseOver () {
      console.log('Hover')
      this.dropdownMenuVisible = true
    }
  }
}
</script>

<style lang="scss">
  ///src/assets/styles/fastjobs_variables
  @import "assets/styles/main";
  @import "assets/styles/fastjobs_variables";

  .header-container {
    background-color: $color-primary;
    position: fixed;
    z-index: $index-top-1000;
    width: 100%;
    height: $header-height;
    top: 0;
    font-size: 20px;
    font-weight: $fw-small-400;
  }

  .header {
    width: $page-width;
    margin: 0 auto;
    padding: 0;
    height: 100% !important;
  }

  .nav-bar {
    height: 100%;
  }

  .nav-bar--container {
    height: 100%;
  }

  .nav-menu {
    display: flex;
    height: 100%;
    float: right;

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      padding: 10px 15px;
      transition: all 0.2s ease-in-out;
      color: $color-white;

      svg {
        height: 1.3rem;
      }

      p {
        font-size: 1rem;
        text-transform: uppercase;
      }

      &:hover {
        background-color: $color-secondary;
        cursor: pointer;
      }
    }

  }

  .nav-bar--logo {
    height: 100%;
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      height: 80%;
      line-height: 80%;

      img {
        height: 100%;
      }
    }
  }

  .active {
    background-color: $color-secondary;
  }

  .dropdown-menu {
    height: $header-height;

    .el-icon--right {
      margin-left: 0 !important;
    }
  }

  .el-popper {
    min-width: 134px !important;

    .el-dropdown-menu__item {
      font-size: 16px;

      &:hover {
        border-left: 2px solid $color-primary;
      }
    }
  }

  .footer {
    background-color: $color-primary;
    text-align: center;
    color: $color-white;
    padding: 36px;

    h2 {
      font-size: 2rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 12px auto;
      width: 150px;

      li {
        svg {
          display: inline-block;
          border: 1px solid $color-white;
          width: 30px;
          height: 30px;
          border-radius: 2px;
          text-align: center;
          transition: 0.1s all;
          padding: 3px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .github-icon {
        &:hover {
          opacity: 0.7;
        }
      }

      .facebook-icon {
        &:hover {
          width: 30px;
          height: 30px;
          color: $color-white;
          background-color: #3b5998;
          border-color: #3b5998;
        }
      }

      .twitter-icon {
        &:hover {
          width: 30px;
          height: 30px;
          color: $color-white;
          background-color: #1da1f2;
          border-color: #1da1f2;
        }
      }

      .linked-in-icon {
        &:hover {
          width: 30px;
          height: 30px;
          color: $color-white;
          background-color: #0077b5;
          border-color: #0077b5;
        }
      }
    }

    .desc {
      line-height: 24px;
    }
  }
</style>
