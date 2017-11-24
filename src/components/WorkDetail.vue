<template>
<div class="dao-setting-layout" style="margin:2em">
  <div class="dao-setting-layout-title">
    <div class="dao-setting-title">工单详情</div>
  </div>
  <div class="dao-setting-section">
    <div class="dao-setting-item">
      <div class="dao-setting-label">工单类型</div>
      <div class="dao-setting-content">
        <div class="column is-12">
          <p class="control has-icon has-icon-right">
            <dao-input type = "text"
                       disabled
                       v-model="record.type"></dao-input>
          </p>
        </div>
      </div>
    </div>
    <div class="dao-setting-item">
      <div class="dao-setting-label">工单特征</div>
      <div class="dao-setting-content">
        <dao-input type="text"
                    disabled
                    v-model="record.characteristic"></dao-input>
      </div>
    </div>
    <div class="dao-setting-item">
      <div class="dao-setting-label">工单描述</div>
      <div class="dao-setting-content">
        <textarea class="dao-control" type="text" rows="3"
                   disabled
                   v-model="record.descriptions"></textarea>
      </div>
    </div>
    <div class="dao-setting-item">
      <div class="dao-setting-label">附件图片</div>
      <div class="dao-setting-content" v-if="records.length > 0">
        <img v-for = 'item in records'  :src= 'src(item)'>
      </div>
      <div v-else>暂无图片</div>
    </div>
  </div>
  <div class="dao-setting-layout-footer">
    <Button type="ghost" @click = 'toList()'>返回列表</Button>
  </div>
</div>
</template>

<script>
export default {
  name: 'work_detail',
  data() {
    return {
      records: [],
      record: this.$route.query.message
    }
  },
  created() {
    var self = this
    this.$axios.get(process.env.BASE_URL + '/ticketImg/' + self.$route.query.message.uuid)
      .then(function (res) {
        self.records = res.data
      })
      .catch(function (res) {
        console.log(res)
      })
  },
  methods: {
    toList: function () {
      this.$router.push('/')
    },
    src: function (src) {
      return process.env.BASE_URL + src
    }
  }
}
</script>
<style scoped>
  .dao-setting-content img{
    width: 25%;
    margin-top: 0px !important;
    margin-right: 10px;
  }
</style>
