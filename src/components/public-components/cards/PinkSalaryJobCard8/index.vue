<template>
  <div class="card">
    <div class="avatar" @click="handleOnClickAvatar">
      <!--<router-link :to="jobUrl + jobId" :title="companyName.title">-->
      <img :src="logoUrl"/>
      <!--</router-link>-->
    </div>

    <div class="job-info-container">
      <el-tooltip effect="dark" :content="jobTitle" placement="top-start">
        <p class="position">
          <router-link :to="jobUrl + jobId">
            <strong class="text_ellipsis">{{jobTitle}}</strong>
          </router-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span class="text_ellipsis">{{companyName}}</span>
      </p>

      <div class="items">
        <p class="salary" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          <span>{{salary}}</span>
        </p>

        <p class="deadline" :title="deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          <span> {{deadline}}</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobInfo: Object
    },
    data () {
      return {
        logoUrl: this.jobInfo.logoUrl,
        jobUrl: this.jobInfo.jobUrl,
        jobId: this.jobInfo._jobId,
        jobTitle: this.jobInfo.jobTitle,
        companyName: this.jobInfo.companyName,
        salary: this.jobInfo.salary.long_label,
        deadline: this.jobInfo.deadline,
        views: this.jobInfo.views
      };
    },
    methods: {
      handleOnClickAvatar () {
        alert("Click");
        this.$router.push("/tuyen-dung");
      }
    },

    beforeMount () {
      // this.deadline = FormattedDate(this.deadline);
      // console.log(this.jobInfo);
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/fastjobs_variables";
  $image-size: 70px;

  .avatar {
    height: $image-size;
    width: $image-size;
    img {
      border: 2px solid $color-gray;
      border-radius: $br-5;
      height: 100%;
    }
  }

  .job-info-container {
    margin-left: 10px;
    max-width: calc(100% - 70px - 10px);
    width: calc(100% - 70px - 10px);
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;

    a {
      display: inline-block;
      text-transform: lowercase;
      width: 100%;

      strong::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .company {
    opacity: 0.8;
    text-transform: lowercase;
    display: flex;
    align-items: flex-start;

    svg {
      margin-right: 3px;
      opacity: 0.7;
      display: inline-block;
      height: 1rem;
    }

    span {
      display: inline-block;
      font-size: 1rem;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  .items {
    font-size: $fs-small;
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 1rem;
      opacity: 0.7;
      display: inline-block;
      height: 15px;
    }

    .salary {
      display: flex;
      align-items: flex-start;
      color: $color-pink;
      svg {
        margin-right: 3px;
        opacity: 0.7;
        display: inline-block;
        height: 1rem;
      }

    }

    .deadline {
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }


</style>
