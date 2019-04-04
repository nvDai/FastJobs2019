<template>
  <div class="card">
    <div class="avatar">
      <router-link :to="jobUrl" :title="companyName">
        <img :src="logoUrl"/>
      </router-link>
    </div>

    <div class="job-info-container">
      <el-tooltip
        effect="dark"
        :content="jobTitle"
        placement="top-start"
      >
        <p class="position">
          <router-link :to="jobUrl">
            <strong class="text_ellipsis">{{jobTitle}}</strong>
          </router-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span class="text_ellipsis">{{companyName}}</span>
      </p>

      <el-row class="items">
        <el-col :span="8" class="salary" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          <span>{{salary}}</span>
        </el-col>

        <el-col :span="8" class="deadline" :title="deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          <span> {{deadline}}</span>
        </el-col>

        <el-col :span="8" class="work-addresses " :title="workAddresses">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          {{workAddresses}}
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        logoUrl: this.jobInfo.logoUrl,
        jobUrl: this.jobInfo.jobUrl,
        jobId: this.jobInfo._jobId,
        jobTitle: this.jobInfo.jobTitle,
        companyName: this.jobInfo.companyName,
        workAddresses: this.jobInfo.locations.join(", "),
        salary: this.jobInfo.salary.long_label,
        deadline: this.jobInfo.deadline,
        views: this.jobInfo.views
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/fastjobs_variables";

  .avatar {
    height: 70px;
    width: 70px;

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
    margin-top: 6px;

    svg {
      opacity: 0.7;
      display: inline-block;
      height: 0.8rem;
      margin-right: 3px;
    }

    .el-col {
      display: flex;
      align-items: center;
    }

    .salary {
      color: $color-pink;

    }

    .work-addresses {
      color: $color-pink;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 91px;
    }

    .deadline {
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>


