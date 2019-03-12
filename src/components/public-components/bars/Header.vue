<template>
  <div> header</div>
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
