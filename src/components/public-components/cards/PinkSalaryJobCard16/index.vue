<template>
  <div class="card">
    <el-col :span="2" class="avatar">
      <router-link :to="jobUrl + jobId" :title="companyName">
        <img :src="logoUrl"/>
      </router-link>
    </el-col>

    <el-col :span="14" class="job-card--content">
      <el-tooltip
        effect="dark"
        :content="jobTitle"
        placement="top-start"
      >
        <p class="position">
          <router-link :to="jobUrl + jobId">
            {{jobTitle}}
          </router-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span>{{companyName}}</span>
      </p>
    </el-col>

    <el-col :span="8" class="">
      <p class="salary" :title="salary">
        <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
        <span>{{salary}}</span>
      </p>

      <el-row>
        <el-col :span="12">
          <p class="deadline" :title="deadline">
            <font-awesome-icon :icon="['fas', 'user-clock']"/>
            <span> {{deadline}}</span>
          </p>
        </el-col>

        <el-col :span="12">
          <p class="work-addresses " :title="workAddresses">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
            {{workAddresses}}
          </p>
        </el-col>


      </el-row>
    </el-col>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/fastjobs_variables";

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .avatar {
    height: 50px;
    width: 70px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    width: 100%;
    height: 100%;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    line-height: 25px;

    a {
      display: block;
      text-transform: lowercase;
      padding-left: 4px;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .company {
    opacity: 0.8;
    line-height: 25px;
    text-transform: lowercase;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  .salary,
  .work-addresses {
    font-size: 14px;
    line-height: 25px;
  }

  .salary {
    color: $color-pink;
  }

  .work-addresses {
    opacity: 0.8;
  }

  .deadline {
    line-height: 25px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  svg {
    font-size: 14px;
    opacity: 0.7;
    display: inline-block;
    width: 20px !important;
    text-align: left;
    height: 15px;
  }


</style>

