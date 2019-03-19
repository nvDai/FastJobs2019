<template>
  <div style="margin-top: 72px">
    <search-bar/>
    <div class="home-container">
      <function-box class="mg-top-15"/>
      <urgent-job-box jobBoxTitle="Việc làm tuyển gấp" class="mg-top-15"/>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../components/public-components/bars/SearchBar';
  import FunctionBox from '../components/public-components/boxs/FunctionBox';
  import UrgentJobBox from '../components/jobs/UrgentJobBox';
  import {mapActions} from 'vuex';

  export default {
    name: "Home",
    components: {
      SearchBar,
      FunctionBox,
      UrgentJobBox
    },
    methods: {
      ...mapActions('JOBS', {
        fetchUrgentJobs: 'fetchUrgentJobs'
      }),
      fetchJobs: async function() {
        const data =  await this.$api.get('/jobs?jobNum=1');
        console.log(data);
      }
    },
    created () {
      // this.$store.dispatch('fetchJobs');
      this.fetchUrgentJobs();
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
