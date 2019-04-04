<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{title}}
    </h4>

    <div class="advanced-search-box__container">
      <div class="selection-box">
        <font-awesome-icon :icon="['far', 'clipboard']"/>
        <el-select v-model="advancedSearchData.job" filterable placeholder="Ngành nghề">
          <el-option
            v-for="item in jobOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="selection-box">
        <font-awesome-icon icon="map-marker-alt"/>
        <el-select v-model="advancedSearchData.workAddress" filterable placeholder="Vị trí">
          <el-option
            v-for="item in workAddressOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="selection-box">
        <font-awesome-icon icon="user-clock"/>
        <el-select v-model="advancedSearchData.workExperience" filterable placeholder="Năm kinh nghiệm">
          <el-option
            v-for="item in workExperienceOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="selection-box">
        <font-awesome-icon icon="user-tie"/>
        <el-select v-model="advancedSearchData.jobTitle" filterable placeholder="Cấp bậc">
          <el-option
            v-for="item in jobTitleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="selection-box">
        <font-awesome-icon icon="hotel"/>
        <el-select v-model="advancedSearchData.jobType" filterable placeholder="Loại hình công việc">
          <el-option
            v-for="item in jobTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <el-button
        size="medium"
        class="advanced-search-button">
        <font-awesome-icon icon="search"/>
        Tìm kiếm
      </el-button>

    </div>
  </div>
</template>

<script>
  import { JobOption } from '../../../../utils/enums';

  export default {
    props: {
      title: String
    },
    data() {
      const {
        jobTitles,
        jobs,
        workAddresses,
        workExperience,
        jobTypes,
      } = JobOption;

      return {
        advancedSearchData: {
          job: '',
          workAddress: '',
          jobTitle: '',
          workExperience: '',
          jobType: '',

        },
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        workExperienceOptions: workExperience,
        jobTitleOptions: jobTitles,
        jobTypeOptions: jobTypes,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/fastjobs_variables";

  .advanced-search-box__container {
    text-align: center;
    padding: 10px;
  }

  h4 {
    font-size: 1rem;
    font-weight: $fw-base-500;
  }

  hr {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding-left: 5px;
  }

  ul li {
    line-height: $line-height-30;
    border-bottom: 1px dotted $color-primary;
  }

  .advanced-search-button {
    font-size: 1rem;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-primary;
    color: $color-white;
    font-weight: $fw-base-500;

    svg {
      height: 0.8rem;
    }
  }

  .advanced-search-button:hover {
    background-color: $color-white;
    color: $color-primary;
    border-color: $color-primary;
    box-shadow: 0 0 5px $color-secondary;
    cursor: pointer;
  }

  .advanced-search-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
    background-color: $color-primary;
    color: $color-white;
  }

  .selection-box {
    position: relative;
    margin-bottom: 10px;
  }

  .el-select {
    width: 100%;
    z-index: 1;
  }

  .selection-box svg {
    position: absolute;
    z-index: 2;
    left: 10px;
    top: 10px;
    height: 0.8rem;
    opacity: 0.5;
  }


</style>

<style lang="">

</style>
