<template>
  <el-row class="box-container" style="overflow: hidden">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>

    <scroll-bar style="height: 658px;">
      <el-row :gutter="10">
        <el-col
          :span="12"
          v-for="(item, index) in jobs"
          :key="index"
          class="mg-bottom-10"
        >
          <attractive-job-card
            :jobInfo="item"
          />
        </el-col>
      </el-row>
    </scroll-bar>

  </el-row>
</template>

<script>
  import AttractiveJobCard from '../../public-components/cards/PinkWorkAddressSalaryJobCard8';
  import ScrollBar from '../../public-components/bars/ScrollBar';
  import {mapActions, mapState} from 'vuex';


  export default {
    components: {
      AttractiveJobCard,
      ScrollBar
    },
    props: {
      jobBoxTitle: String,
    },
    computed: {
      ...mapState('JOBS', {
        jobs: 'attractiveJobs'
      })
    },
    methods: {
      ...mapActions('JOBS', {
        fetchAttractiveJobs: 'fetchAttractiveJobs'
      }),
      async getJobs() {
        const { data } = await this.$api.get("/jobs?jobNum=30");
        console.log('getJobs()', data);
      }
    },
    async beforeMount() {
      await this.fetchAttractiveJobs();
      console.log("attractive job box", this.jobs);
      // this.getJobs();
    }
  }
</script>

