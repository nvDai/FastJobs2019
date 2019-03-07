<template>
  <div class="login-container">

    <img class="background-image" :src="backgroundUrl" alt="Cover">
    <div class="overlay"></div>
    <vue-particles
      color="#ffffff"
      :particleOpacity="1"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="5"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particle-layer"
    >
    </vue-particles>

    <div class="login-form">
      <div class="wrapper">
        <div class="box-container">
          <h3 class="ta-center">
            Đăng nhập cùng FastJobs
          </h3>

          <div class="mg-top-15">
            <el-button class="btn btn-google">Đăng nhập qua Google</el-button>
            <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>
          </div>

          <div class="text-or">
            Hoặc
          </div>

          <el-form
            :model="loginInfo"
            :rules="rules"
            ref="loginInfo"
            class="mg-top-15">
            <el-form-item prop="emailOrPhoneNumber">
              <div class="form-input">
                <!--<font-awesome-icon :icon="['fas', 'phone']" class="icon"/>-->
                <el-input
                  v-model="loginInfo.emailOrPhoneNumber"
                  auto-complete="off"
                  autofocus="true"
                  placeHolder="Nhập email hoặc số điện thoại"
                >
                </el-input>
              </div>
            </el-form-item>

            <el-form-item prop="password">
              <div class="form-input">
                <!--<font-awesome-icon :icon="['fas', 'lock']" class="icon"/>-->
                <el-input
                  type="password"
                  v-model="loginInfo.password"
                  auto-complete="off"
                  placeHolder="Nhập mật khẩu"
                >
                </el-input>
              </div>
            </el-form-item>

            <button-ujarak
              content="Đăng nhập"
              :loading="isLoading"
              @on_click="handleOnClickLoginBtn('loginInfo')"
            />

          </el-form>

          <p class="forgot-password-text" @click="handleOnOpenPasswordRecoveryDialog">Quên mật khẩu?</p>

          <hr class="hr-1 mg-bottom-10"/>

          <div>
            Bạn chưa có tài khoản?
            <span class="sign-up-text" @click="handleOnClickSignUpText">Đăng ký</span>
          </div>
        </div>

        <el-dialog
          title="Khôi phục mật khẩu"
          :visible.sync="passwordRecoveryDialogVisible"
          class="password-recovery-dialog"
        >
          <p>
            Nhập số điện thoại hoặc email để nhận mật khẩu mới
          </p>
          <el-input
            ref="inputOfPasswordRecovery"
            v-model="inputOfPasswordRecoveryDialog"
            placeholder="Vui lòng nhập số điện thoại"
            autofocus="true"
            class="mg-top-15"
          >
          </el-input>
          <div class="mg-top-15">
            <el-button @click="handleOnBackToLogin">Quay lại</el-button>
            <el-button
              type="primary"
              @click="handleOnSubmitPasswordRecoveryForm"
              :loading="isLoading"
            >
              Khôi phục mật khẩu
            </el-button>
          </div>
        </el-dialog>

        <el-dialog
          :visible.sync="signUpDialogVisible"
          class="sign-up-dialog"
          :width="signUpDialogWidth"
          :close-on-press-escape="false"
          :close-on-click-modal="false"
          :before-close="handleOnCloseSignUpDialog"
        >
          <el-carousel
            indicator-position="none"
            arrow="never"
            :autoplay="false"
            @change="handleOnChangeCarouselItem"
            ref="signUpCarousel"
            :height="signUpCarouselHeight"
            v-if="signUpDialogVisible"
          >

            <el-carousel-item>
              <div class="user-type" v-if="!signUpInfo.userType">
                <div class="title">Bạn là nhà tuyển dụng hay ứng viên?</div>

                <div class="sign-up-form-container mg-top-15">
                  <div
                    class="small-box"
                    :class="{active: signUpInfo.userType === 'employer'}"
                    @click="handleOnClickEmployerBtn"
                  >
                    <font-awesome-icon :icon="['fas', 'user-tie']"/>
                    <span>Nhà tuyển dụng</span>
                  </div>

                  <div
                    class="small-box"
                    :class="{active: signUpInfo.userType === 'candidate'}"
                    @click="handleOnClickCandidateBtn"
                  >
                    <font-awesome-icon :icon="['fas', 'briefcase']"/>
                    <span>Ứng viên</span>
                  </div>
                </div>

              </div>
            </el-carousel-item>

            <el-carousel-item>
              <el-row :gutter="10">
                <el-col :span="12" class="sign-up-dialog__box-left">
                  <h3>Đăng ký để kết nối ngay với hàng triệu nhà tuyển dụng hàng đầu và ứng viên chất lượng</h3>

                  <p>
                    <font-awesome-icon :icon="['fas', 'check']"/>
                    <span>Tiếp cận hàng triệu công việc hoàn toàn miễn phí</span>
                  </p>

                  <p>
                    <font-awesome-icon :icon="['fas', 'check']"/>
                    <span>Ứng tuyển nhanh chóng, dễ dàng</span>
                  </p>

                  <p>
                    <font-awesome-icon :icon="['fas', 'check']"/>
                    <span>Nhận bản tin công việc phù hợp định kỳ</span>
                  </p>

                  <p>
                    <font-awesome-icon :icon="['fas', 'check']"/>
                    <span>Nâng cao cơ hội tìm việc với chương trình ứng viên năng động</span>
                  </p>
                </el-col>
                <el-col :span="12">
                  <div class="sign-up-dialog__box-left">
                    <div>Bằng việc đăng kí bạn đã đồng ý với
                      <router-link to="/termsOfUse" class="t-navy">Thỏa thuận sử dụng</router-link>
                      của FastJobs
                    </div>
                    <div class="ta-center mg-top-15">
                      <el-button class="btn btn-google">Đăng nhập qua SVOnline</el-button>
                      <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>

                      <div class="text-or">
                        Hoặc
                      </div>
                    </div>

                    <el-form
                      :model="signUpInfo"
                      :rules="rules"
                      ref="signUpInfo"
                      class="mg-top-15"
                    >
                      <el-form-item prop="emailOrPhoneNumber">
                        <div class="form-input">
                          <!--<font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>-->
                          <el-input
                            ref="phoneNumberInput"
                            v-model="signUpInfo.emailOrPhoneNumber"
                            auto-complete="off"
                            placeHolder="Nhập email hoặc số điện thoại"
                          >
                          </el-input>
                        </div>
                      </el-form-item>

                      <el-form-item prop="password">
                        <div class="form-input">
                          <!--<font-awesome-icon icon="lock" class="icon"/>-->
                          <el-input
                            type="password"
                            v-model="signUpInfo.password"
                            auto-complete="off"
                            placeHolder="Nhập mật khẩu"
                          >
                          </el-input>
                        </div>
                      </el-form-item>

                      <button-ujarak
                        content="Đăng ký"
                        :loading="isLoading"
                        @on_click="handleOnSubmitSignUpForm('signUpInfo')"
                      />
                    </el-form>
                  </div>
                </el-col>
              </el-row>
              <hr class="hr-1 mg-top-15"/>
              <div class="ta-center mg-top-15">
                <p>Bạn đã có tài khoản?
                  <span class="sign-up-text" @click="handleOnClickLoginText">Đăng nhập</span>
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
          <el-dialog
            width="30%"
            :visible.sync="innerCloseDialogVisible"
            append-to-body
            style="margin-top: 25vh;"
          >
            <div
              class="mg-bottom-15"
              style="font-size: 18px"
            >
              Bạn chắc chắn là muốn huỷ đăng ký tài khoản?
            </div>
            <div class="ta-center">
              <el-button @click="handleOnCancelCloseSignUpDialog">Huỷ bỏ</el-button>
              <el-button type="primary" @click="handleOnAcceptCloseSignUpDialog">Đồng ý</el-button>
            </div>
          </el-dialog>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonUjarak from '../components/public-components/buttons/ButtonUjarak'
import Vld from '../utils/Validate'

export default {
  name: 'Login',
  components: {
    ButtonUjarak
  },
  data () {
    return {
      backgroundUrl: require('../assets/images/bg1.jpeg'),
      loginInfo: {
        emailOrPhoneNumber: '',
        password: ''
      },
      signUpInfo: {
        userType: '',
        emailOrPhoneNumber: '',
        password: ''
      },
      inputOfPasswordRecoveryDialog: '',
      passwordRecoveryDialogVisible: false,
      isLoading: false,
      isAnAccount: true,

      signUpDialogVisible: false,
      innerCloseDialogVisible: false,
      signUpDialogWidth: '420px',
      signUpCarouselHeight: '180px',
      rules: {
        emailOrPhoneNumber: [
          { required: true, message: 'Vui lòng nhập email hoặc số điện thoại', trigger: 'blur' },
          { min: 10, message: 'Độ dài email hoặc số điện thoại phải có it nhất 10 ký tự ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur' },
          { min: 6, message: 'Độ dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    handleOnOpenPasswordRecoveryDialog () {
      this.passwordRecoveryDialogVisible = true
    },

    handleOnSubmitPasswordRecoveryForm () {
      if (Vld.isMobile(this.inputOfPasswordRecoveryDialog) || Vld.isEmail(this.inputOfPasswordRecoveryDialog)) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          if (this.isAnAccount) {
            this.showSuccessAlert(`Mật khẩu mới đã được gửi tới ${this.inputOfPasswordRecoveryDialog}. Quý khách vui lòng kiểm tra.`)
            this.passwordRecoveryDialogVisible = false
            this.inputOfPasswordRecoveryDialog = ''
          } else {
            this.showErrorAlert('Tài khoản không tồn tại trên hệ thống!')
          }
        }, 1000)
      } else {
        this.showErrorAlert('Vui lòng nhập email hoặc số điện thoại để nhận mật khẩu mới!')
      }
    },

    handleOnBackToLogin () {
      this.passwordRecoveryDialogVisible = false
    },

    handleOnClickLoginBtn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && (Vld.isEmail(this.loginInfo.emailOrPhoneNumber) || Vld.isMobile(this.loginInfo.emailOrPhoneNumber))) {
          // alert('submit!');
          console.log(this.loginInfo)
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.$router.push('/')
          }, 1000)
        } else {
          this.showErrorAlert('Thông tin tài khoản hoặc mật khẩu không chính xác!')
          return false
        }
      })
    },

    showSuccessAlert (message) {
      this.$notify({
        title: 'Thông báo',
        message: message,
        type: 'success'
      })
    },

    showErrorAlert (message) {
      this.$notify({
        title: 'Thông báo',
        message: message,
        type: 'warning'
      })
    },

    handleOnClickEmployerBtn () {
      this.signUpInfo.userType = 'employer'
      this.$refs.signUpCarousel.activeIndex = 1
      this.signUpCarouselHeight = '420px'
      this.signUpDialogWidth = '750px'
    },

    handleOnClickCandidateBtn () {
      this.signUpInfo.userType = 'candidate'
      this.$refs.signUpCarousel.activeIndex = 1
      this.signUpCarouselHeight = '420px'
      this.signUpDialogWidth = '750px'
    },

    handleOnCloseSignUpDialog () {
      this.innerCloseDialogVisible = true
    },

    handleOnCancelCloseSignUpDialog () {
      this.innerCloseDialogVisible = false
    },

    handleOnAcceptCloseSignUpDialog () {
      this.innerCloseDialogVisible = false
      this.signUpDialogVisible = false
      this.signUpCarouselHeight = '200px'
      this.signUpDialogWidth = '440px'
      this.signUpInfo.userType = ''
      this.signUpInfo.phoneNumber = ''
      this.signUpInfo.password = ''
    },

    handleOnSubmitSignUpForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && (Vld.isMobile(this.signUpInfo.emailOrPhoneNumber) || Vld.isEmail(this.signUpInfo.emailOrPhoneNumber))) {
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.showSuccessAlert('Đăng ký tài khoản thành công.')
            // this.$router.push("/");
          }, 1000)
        } else {
          if (!this.signUpInfo.password) {
            this.showErrorAlert('Vui lòng nhập email hoặc số điện thoại và mật khẩu.')
            return false
          }
          this.showErrorAlert('Email hoặc số điện thoại không đúng định dạng. Vui lòng nhập lại.')
          return false
        }
      })
    },

    handleOnChangeCarouselItem (value) {
      if (value === 1) {
        // setTimeOut 200ms để tránh trùng event change của carousel vs focus của input
        setTimeout(() => {
          this.$refs.phoneNumberInput.focus()
        }, 200)
      }
    },

    handleOnClickSignUpText () {
      this.signUpDialogVisible = true
      this.signUpCarouselHeight = '180px'
    },

    handleOnClickLoginText () {
      this.signUpDialogVisible = false
      this.signUpInfo.userType = ''
      // nếu set thuộc tính :visible.sync của carousel thì không cần set this.signUpDialog = false
      // this.signUpDialog = false;
      this.signUpCarouselHeight = '180px'
      this.signUpDialogWidth = '440px'
      this.signUpInfo.emailOrPhoneNumber = ''
      this.signUpInfo.password = ''
    }

  }
}

</script>

<style lang="scss" scoped>
  @import "../assets/styles/fastjobs_variables";

  .login-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .background-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
  }

  .particle-layer {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 1
  }

  .login-form {
    margin: $header-height auto 0;
  }

  .wrapper {
    width: $page-width;
    margin: 0 auto !important;
  }

  .box-container {
    padding: $padding-border-box-15;
    text-align: center;
    width: 400px;
    position: absolute;
    z-index: 200;
    top: 20vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    h3 {
      color: #48576a;
      text-transform: uppercase;
    }
  }

  .btn {
    color: $color-white;
    font-weight: 500;
    margin: 0 auto;
    width: 100%;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }

    &:active {
      box-shadow: 0 0 0 transparent;
      transition: none;
    }
  }

  .btn-google {
    background-color: $color-red;
    border: transparent;
  }

  .btn-facebook {
    background-color: #3b5998;
    border: transparent;
    margin-left: 0 !important;
  }

  .text-or {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 15px auto;

    &::after,
    &::before {
      content: "";
      height: 1px;
      flex: 1;
      border: 0;
      color: $color-black;
      opacity: 0.7;
    }

    &::before {
      background-image: linear-gradient(to right, #ccc, #333, #333);
      margin-right: 0.3em;
    }

    &::after {
      background-image: linear-gradient(to right, #333, #333, #ccc);
      margin-left: 0.3em;
    }
  }

  .hr-1 {
    opacity: 0.7;
  }

  .form-input {
    position: relative;

    .icon {
      display: inline-block;
      width: 17px;
      color: $color-icon;
      position: absolute;
      top: 10px;
      font-size: $fs-large-18;
      z-index: 3;
      left: 10px;
    }
  }

  .forgot-password-text {
    color: $color-primary;
    font-weight: 500;
    margin-top: 10px;

    &:hover {
      color: $color-secondary;
      cursor: pointer;
    }

    &:active {
      color: $color-primary;
    }
  }

  .password-recovery-dialog {
    width: 70%;
    margin: 0 auto;
  }

  .sign-up-text {
    color: $color-primary;
    font-weight: 500;

    &:hover {
      color: $color-secondary;
      cursor: pointer;
    }
  }

  .password-recovery-dialog {
    width: 70%;
    margin: 10vh auto 0;
  }

  .alert {
    color: $color-pink;
  }

  .sign-up-dialog {
    margin: 10vh auto 0;
    overflow: hidden;

    .sign-up-dialog__box-left {
      font-size: 18px;
      color: $color-black;

      h3 {
        font-weight: 500;
        margin-bottom: 30px;
        /*line-height: 60px;*/
      }

      p {
        line-height: 25px;
        font-size: 1rem;
        display: flex;
        align-items: center;
        margin-top: 10px;

        svg {
          font-size: 20px;
          border: 1px solid $color-primary;
          color: $color-primary;
          border-radius: 50%;
          padding: 3px;
          margin-right: 5px;
        }
      }
    }
  }

  .user-type {
    text-align: center;

    .title {
      font-size: 20px;
    }

    .sign-up-form-container {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;

      .small-box {
        width: 170px;
        height: 110px;
        border: 2px solid $color-primary;
        padding: $padding-base-20;
        color: $color-primary;
        font-size: 17px;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        -webkit-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;

        &:hover {
          cursor: pointer;
          background-color: $color-primary;
          color: $color-white !important;
        }

        svg {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-bottom: 15px;
        }
      }

      .active {
        background-color: $color-primary;
        color: $color-white;
      }
    }
  }
</style>

<style lang="scss"  >
  .el-dialog__body {
    padding: 20px;
  }
</style>
