<template>
  <el-row class="tac">
    <el-menu v-bind:default-active="navLink" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="userList">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        navLink: "/"
      }
    },
    created: function () {
      this.navLink = this.$route.path
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>