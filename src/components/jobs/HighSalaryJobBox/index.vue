<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>

    <scroll-bar style="height: 745px;">
      <el-row :gutter="4">
        <el-col
          v-for="(item, index) in jobs"
          :key="index"
          class="mg-bottom-10"
        >
          <high-salary-job-card
            :jobInfo="item"
          />
        </el-col>
      </el-row>
    </scroll-bar>
  </el-row>
</template>

<script>
  import HighSalaryJobCard from '../../public-components/cards/PinkSalaryJobCard16';
  import ScrollBar from '../../public-components/bars/ScrollBar';
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      HighSalaryJobCard,
      ScrollBar
    },
    props: {
      jobBoxTitle: String
    },
    computed: {
      ...mapState('JOBS', {
        jobs: 'highSalaryJobs'
      })
    },

    methods: {
      ...mapActions('JOBS', {
        fetchHighSalaryJobs: 'fetchHighSalaryJobs'
      })
    },
    created() {
      this.fetchHighSalaryJobs();
    }
  }
</script>


