<template>
  <div style="margin-top: 72px">
    <search-bar/>
    <div class="home-container">
      <function-box class="mg-top-15"/>
      <urgent-job-box jobBoxTitle="Việc làm tuyển gấp" class="mg-top-15"/>
      <el-row>
        <el-col :span="16">
          <attractive-job-box
            jobBoxTitle="Việc làm hấp dẫn"
            class="mg-top-15"
          />
        </el-col>
        <el-col :span="8">
          <advanced-search-box
            title="Tìm kiếm nâng cao"
            class="mg-top-15"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../components/public-components/bars/SearchBar';
  import FunctionBox from '../components/public-components/boxs/FunctionBox';
  import UrgentJobBox from '../components/jobs/UrgentJobBox';
  import AttractiveJobBox from '../components/jobs/AttractiveJobBox';
  import AdvancedSearchBox from '../components/public-components/boxs/AdvancedSearch';
  import {mapActions} from 'vuex';

  export default {
    name: "Home",
    components: {
      SearchBar,
      FunctionBox,
      UrgentJobBox,
      AttractiveJobBox,
      AdvancedSearchBox
    },
    methods: {
      ...mapActions('JOBS', {
        fetchUrgentJobs: 'fetchUrgentJobs',
      }),
    },
    created () {

    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/styles/fastjobs_variables";

  .home-container {
    width: $page-width;
    margin: 0 auto !important;
  }

  .banner-box img {
    width: 100%;
    padding: $padding-border-box-10;
    background-color: $color-white;
    margin-top: 15px;
    border-radius: $br-5;
  }

  .loading {

  }
</style>
