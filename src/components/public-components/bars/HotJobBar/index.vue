<template>
  <el-row class="container box-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in hotJobList"
        :key="index"
        @click.middle.native="updateSearchingContent(item.name)"
        @click.left.native="updateSearchingContent(item.name)"
      >
        <router-link  :to="'/tuyen-dung' + item.url">{{item.name}}</router-link>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <router-link to="">{{title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import {ChangeAlias, ConvertToKebabCase} from '../../../../utils/functions';

  export default {
    data() {
      return {
        hotJobList: [
          {
            name: 'Nhân viên kinh doanh',
            url: ''
          },
          {
            name: 'Bán hàng',
            url: ''
          },
          {
            name: 'IT phần mềm',
            url: ''
          },
          {
            name: 'Quản trị kinh doanh',
            url: ''
          },
          {
            name: 'Phiên dịch - Ngoại ngữ',
            url: ''
          },
          {
            name: 'Ngân hàng - Tài Chính',
            url: ''
          },
          {
            name: 'Marketing - PR',
            url: ''
          },
          {
            name: 'Kỹ thuật',
            url: ''
          },
          {
            name: 'Nhân sự',
            url: ''
          },
          {
            name: 'Kế toán',
            url: ''
          },
          {
            name: 'Quản lý',
            url: ''
          },
        ],
        title: ''
      }
    },
    methods: {
      ...mapActions({
        updateSearchingContent: 'updateSearchingContent'
      }),
    },

    created() {
      this.hotJobList.map(job => {
        let url = ChangeAlias(job.name);
        job.url = '/' + ConvertToKebabCase(url);
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/fastjobs_variables";

  .container {
    padding: 10px 0 10px 10px;
    width: 100% !important;
  }

  .container a {
    color: $color-primary;
  }

</style>

