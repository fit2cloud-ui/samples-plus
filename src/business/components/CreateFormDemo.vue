<template>
  <layout-content header="创建表单" back-name="ComplexTableDemo">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" label-position="right">
      <el-form-item label="活动名称" prop="activityName">
        <el-input v-model="form.activityName"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save(formRef)">保存</el-button>
        <el-button @click="reset(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </layout-content>
</template>

<script setup>
import { reactive, ref } from 'vue'
import LayoutContent from "@/components/layout/LayoutContent.vue";
import {$alert} from "@/utils/message"

const formRef = ref()

const form = reactive({
  activityName: "",
  region: "",
  desc: ""
})
const rules = reactive({
  activityName: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '请填写活动形式', trigger: 'blur' }
  ]
})

function save(formEl) {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(valid)
      $alert('submit!');
    } else {
      console.log('error submit!')
      return false
    }
  })
}
function reset(formEl) {
  if (!formEl) return
  formEl.resetFields()
}
</script>
