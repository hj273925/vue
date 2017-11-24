<template>
  <div>
    <div class="dao-table-container" style="margin:2em">
      <div class="main-header">
        <div class="main-title">
          通知管理
          <help-tip
            pop-direction="'right'"
            message="'管理通知'">
          </help-tip>
        </div>
      </div>
      <button class="dao-btn blue" style="width: 116px;margin-bottom: 20px;"  @click = 'addNotice'>
        <svg class="icon">
          <use xlink:href="#icon_plus"></use>
        </svg>
        创建通知
      </button>
      <table class="dao-table slat">
        <thead>
        <tr>
          <th>
            <svg>
              <use xlink:href="#icon_stack-small"></use>
            </svg>
            <span>名称</span>
          </th>
          <th>
            <svg>
              <use xlink:href="#icon_wrench"></use>
            </svg>
            <span>类型</span>
          </th>
          <th>
            <svg>
              <use xlink:href="#icon_file-text "></use>
            </svg>
            <span>内容</span>
          </th>
          <th class="time">
            <svg>
              <use xlink:href="#icon_calendar"></use>
            </svg>
            <span>创建时间</span>
          </th>
          <th class="operation">

          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items.slice(pagesize*(page - 1),page*pagesize)">
          <td>
            <div class="item-major">{{item.title}}</div>
          </td>
          <td>
            <div class="item-major">{{item.type}}</div>
          </td>
          <td>
            <div class="item-major">{{item.body}}</div>
          </td>
          <td class="time">
            <div class="item-major">
              {{item.create_at}}
            </div>
          </td>
          <td class="operation">
              <!--<button class="dao-btn ghost" @click = 'deleted(item.uuid)'>删除</button>-->
            <div class="dao-btn-group">
              <a
                class="dao-btn has-icon ghost"
                :class="{disabled: !isNotApproving(item.status)}"
                href="javascript:void(0)"
                @click="gotoDetail(item)">
                <span class="text">查看详情</span>
              </a>
              <instance-operation-dropdown
                :item="item"
                :status="isNotApproving(item.status)"
                :actions="item.actions"
                @exec-action="execAction">
              </instance-operation-dropdown>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class = 'empty' v-show="!items.length">暂无数据</div>
      <div class="dao-table-page" v-if="items.length>0">
        <div class="dao-btn-group">
          <button class="dao-btn dao-icon ghost" @click="prev" :disabled="page<=1">
            <svg class="icon">
              <use xlink:href="#icon_caret-left"></use>
            </svg>
          </button>
          <button class="dao-btn dao-icon ghost" @click="next" :disabled="page>=Math.ceil(items.length / pagesize)">
            <svg class="icon">
              <use xlink:href="#icon_caret-right"></use>
            </svg>
          </button>
        </div>
        <span class="dao-table-page-span">
          共 {{ items.length }} 个记录
      </span>
      </div>
    </div>
    <dao-dialog
      :config="config"
      :visible.sync="visible"
      @dao-dialog-cancel='handleCancel'
      @dao-dialog-confirm="handleConfirm">
      <div class="dao-setting-section">
        <div class="dao-setting-item">
          <div class="dao-setting-label">名称</div>
          <div class="dao-setting-content">
            <dao-input  type="text"
                        name = 'title'
                        v-model="message.title"
                        icon-inside
                        v-validate="{ required: true, max: 20 }"
                        :class="{'input': true, 'is-danger': errors.has('title') }"
                        :status = "errors.has('title')|status"
                        :message = "errors.first('title')"></dao-input>
          </div>
        </div>
        <div class="dao-setting-item">
          <div class="dao-setting-label">类型</div>
          <div class="dao-setting-content">
            <dao-input  type="text"
                        name = 'type'
                        v-validate="{ required: true, max: 20 }"
                        v-model="message.type"
                        icon-inside
                        :status = "errors.has('type')|status"
                        :message = "errors.first('type')"
                        :class="{'input': true, 'is-danger': errors.has('type') }"></dao-input>
          </div>
        </div>
        <div class="dao-setting-item">
          <div class="dao-setting-label">内容</div>
          <div class="dao-setting-content">
            <textarea  type="text"
                        class="dao-control"
                        icon-inside
                        v-model="message.body"
                        rows = '3'></textarea>
          </div>
        </div>
      </div>
    </dao-dialog>
  </div>
</template>

<script>
  export default {
    name: 'WorkOrder',
    filters: {
      status: function (value) {
        let status = ''
        switch (value) {
          case false:
            status = ''
            break
          case true:
            status = 'error'
            break
        }
        return status
      }
    },
    data() {
      return {
        page: 1,
        pagesize: 5,
        items: [],
        visible: false,
        config: {
          type: 'normal',
          title: '增加通知',
          showHeader: true,
          showFooter: true,
          closeOnClickOutside: false,
          closeOnPressEscape: false
        },
        message: {
          title: '',
          type: '',
          body: ''
        }
      }
    },
    created() {
      var self = this
      this.$axios.get(process.env.BASE_URL + '/informAll')
        .then(function (res) {
          self.items = res.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      deleted: function (id) {
        const self = this
        this.$axios.get(process.env.BASE_URL + '/delInform/' + id)
          .then(function (res) {
            self.$noty.success('删除成功！')
            self.created()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      addNotice: function () {
        this.visible = true
      },
      handleCancel: function () {
        this.message = {}
        this.$validator.reset()
      },
      handleConfirm: function () {
        const self = this
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$axios.get(process.env.BASE_URL + '/addInform', {
              ...this.message
            })
              .then(function (res) {
                self.$noty.success('创建成功！')
                self.created()
              })
              .catch(function (errors) {
                self.$noty.error('创建失败！')
              })
          }
        })
      },
      prev: function () {
        this.page -= 1
      },
      next: function () {
        this.page += 1
      }
    }
  }
</script>

<style scoped>
  .dao-view-header {
    background-color: #ffffff;
    border-bottom: 1px solid #e4e7ed;
  }

  .header-top {
    margin: 0px 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .header-img{
    background-color: #e4e7ed;
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin: 15px 20px 20px 0px ;
  }

  .header-img svg{
    fill: #ccd1d9;
    width: 100px;
    height: 100px;
  }

  .header-content {
    flex-grow: 1
  }

  .content-top {
    height: 32px;
    margin: 1em 0em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content-bottom {
    min-height: 48px;
    color: #9ba3af;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding-top: 1em;
  }

  .header-name {
    font-size: 25px;
    line-height: 25px;
    color: #595f69;
    max-width: 70%;
  }

  .quota-item {
    display: inherit;
    width: 25em
  }

  .quota-item .dao-progress {
    width: 15em;
    margin-top: 6px;
  }
  .dao-table-page{
    padding: 20px 0;
  }
  .dao-table.slat td:first-child,th:first-child {
    margin-left: 20px;
  }
  .dao-table-page-span{
    padding-left: 10px;
    color: #9ba3af;
  }
  .empty{
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 120px;
    color: #9ba3af;
    background-color: #fbfcfc;
    border: 1px dashed #e4e7ed
  }
  .main-header .main-title {
    flex: 1;
    font-size: 25px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
    color: #9ba3af;
    margin-bottom: 20px;
  }
</style>
