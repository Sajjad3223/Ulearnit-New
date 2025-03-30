<template>
  <div>
    <strong>اطلاعات کاربری</strong>
    <base-divider class="my-4"/>
    <div class=" flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <span class="opacity-60 text-xs">
            آواتار
          </span>
        <FormUFileInput />
      </div>
      <div>
        <img src="~/assets/images/avatar.png" alt="avatar" class="max-h-32 rounded-lg">
      </div>
    </div>
    <base-divider class="my-4 " />
    <Form @submit="updateInfo" v-slot="{meta}" keep-values :validation-schema="userInfoSchema" class="grid lg:grid-cols-2 gap-5 items-center">
      <div class="grid lg:grid-cols-2 gap-4">
        <FormUInput label="نام" name="firstName" v-model="userInfo.firstName" :value="userInfo.firstName"/>
        <FormUInput label="نام خانوادگی" name="lastName" v-model="userInfo.lastName" :value="userInfo.lastName"/>
      </div>
      <FormUInput label="شماره تلفن" name="phoneNumber" v-model="userInfo.phoneNumber" :value="userInfo.phoneNumber"/>
      <FormUInput label="ایمیل" name="email" v-model="userInfo.email" :value="userInfo.email"/>
      <FormUInput label="وبسایت" name="site" v-model="userInfo.website" :value="userInfo.website"/>
      <FormUInput label="درباره من" name="description" multiline class="col-span-full" v-model="userInfo.description" :value="userInfo.description"/>
      <div></div>
      <UButton type="submit" size="sm" class="mr-auto" :is-loading="loading" :disabled="!meta.valid">
        ثبت تغییرات
      </UButton>
    </Form>

  </div>
</template>

<script setup lang="ts">
import type {UserDto} from "~/models/user/userDto";
import {EditUser, GetCurrentUser} from "~/services/user.service";
import type {EditUserViewModel} from "~/models/user/editUserViewModel";
import * as Yup from 'yup';
import {requiredError} from "~/utilities/validationUtils";

definePageMeta({
  layout:'profile'
})
const {data,pending} = await useAsyncData("GetUserData",()=>GetCurrentUser());

const user:Ref<UserDto> = ref(data.value?.data!);

const userInfoSchema = Yup.object().shape({
  firstName:Yup.string().required(requiredError('نام')),
  lastName:Yup.string().required(requiredError('نام خانوادگی')),
  phoneNumber:Yup.string().required(requiredError('شماره تلفن')),
  email:Yup.string().email('ایمیل وارد شده نامعتبر است').required(requiredError('ایمیل')),
  site:Yup.string().notRequired(),
  description:Yup.string().notRequired()
})

const userInfo:EditUserViewModel = reactive({
  firstName:user.value.firstName ?? '',
  lastName:user.value.lastName ?? '',
  description:user.value.description ?? '',
  email:user.value.email!,
  phoneNumber:user.value.phoneNumber ?? '',
  receiveNotifications:false,
  website:user.value.website ?? '',
});

const loading = ref(false);
const toast = useToast();
const updateInfo = async ()=>{
  loading.value= true;
  const result = await EditUser(userInfo);
  if(result.isSuccess){
    toast.showToast();
  }
  loading.value= false;
}
</script>