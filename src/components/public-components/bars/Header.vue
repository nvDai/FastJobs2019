<template>
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
                  <router-link :to="GenerateUrl.Account.Login()">
                    <el-dropdown-item>
                      Đăng nhập
                    </el-dropdown-item>
                  </router-link>
                  <router-link :to="GenerateUrl.Account.SignUp()">
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
                  <router-link :to="GenerateUrl.Account.Login()">
                    <el-dropdown-item>
                      Đăng nhập
                    </el-dropdown-item>
                  </router-link>
                  <router-link :to="GenerateUrl.Account.SignUp()">
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
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import GenerateUrl from '~/utils/GenerateUrl'

export default {
  name: 'Header',
  props: {
    activeMenuItem: String
  },
  data () {
    return {
      logo: require('~/assets/images/fastjobs_logo.png'),
      avatar: require('~/assets/images/account_avatar.png'),
      dropdownMenuVisible: false,
      GenerateUrl: GenerateUrl
    }
  },
  computed: {
    ...mapState({
      searchingContent: 'searchingContent',
      loggedIn: 'loggedIn'
    })
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

<style lang="scss" scoped>
  @import "/src/assets/styles/fastjobs_variables";

  .header-container {
    background-color: $color-primary;
    position: fixed;
    z-index: $index-top-1000;
    width: 100%;
    height: 66px;
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

    ul {
      list-style: none;
    }
  }

  .nav-menu {
    display: flex;
    height: 100%;
    float: right;

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 10px 15px;
      transition: all 0.2s ease-in-out;
      color: $color-white;

      svg {
        font-size: 17px;
      }

      p {
        font-size: 16px;
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
    height: 65px;

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

</style>
