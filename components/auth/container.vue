<script setup lang="ts">
const authState = ref('login');
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col items-center space-y-5 w-2/3 mx-auto" v-if="authState === 'login'">
      <img src="~/assets/images/icon.png" alt="" class="w-[200px]">
      <h5 class="font-bold text-lg">ورود به حساب کاربری</h5>
      <input type="text" class="border rounded-lg bg-white/5 text-sm font-light focus:outline-none focus:border-white/20 border-white/10 px-4 py-2 w-full" placeholder="نام کاربری">
      <input type="password" class="border rounded-lg bg-white/5 text-sm font-light focus:outline-none focus:border-white/20 border-white/10 px-4 py-2 w-full" placeholder="رمز عبور">
      <div class="flex items-start gap-2 self-start">
        <base-checkbox />
        <span>مرا به خاطر بسپار</span>
      </div>
      <a href="" class="font-light text-sm text-indigo-400 underline underline-offset-4 self-start">رمز عبورم را فراموش کرده ام</a>
      <button class="py-3 rounded-md w-full flex justify-center text-white bg-indigo-600 items-center gap-2 self-end">
        <span>ورود</span>
      </button>
      <div class="w-full flex items-center gap-4">
        <div class="flex-1 h-px bg-white/20"></div>
        <span>یا</span>
        <div class="flex-1 h-px bg-white/20"></div>
      </div>
      <button class="py-3 rounded-md w-full flex justify-center text-white border border-[#222E49] items-center gap-2 self-end">
        <span>ورود با گوگل</span>
        <svg class="w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_17723)">
            <path d="M47.5321 24.5528C47.5321 22.9214 47.3998 21.2811 47.1176 19.6761H24.48V28.9181H37.4435C36.9055 31.8988 35.1771 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.5321 31.8547 47.5321 24.5528Z" fill="#4285F4"/>
            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3889 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5039 24.4888 38.5039C18.2276 38.5039 12.9187 34.2798 11.0139 28.6006H3.03299V34.7825C7.10721 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
            <path d="M11.0051 28.6006C9.99976 25.6199 9.99976 22.3922 11.0051 19.4115V13.2296H3.03301C-0.37099 20.0112 -0.37099 28.0009 3.03301 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6867 13.0973L40.5388 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10721 5.11644 3.03299 13.2296L11.0051 19.4115C12.9011 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
          </g>
          <defs>
            <clipPath id="clip0_2_17723">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <button class="font-light text-sm underline-offset-4 underline" @click="authState = 'register'">ساخت حساب کاربری</button>
    </div>
    <div class="flex flex-col items-center space-y-5 w-2/3 mx-auto" v-if="authState === 'register'">
      <img src="~/assets/images/icon.png" alt="" class="w-[200px]">
      <h5 class="font-bold text-lg">ساخت حساب کاربری</h5>
      <input type="text" class="border rounded-lg bg-white/5 text-sm font-light focus:outline-none focus:border-white/20 border-white/10 px-4 py-2 w-full" placeholder="شماره تلفن">
      <input type="email" class="border rounded-lg bg-white/5 text-sm font-light focus:outline-none focus:border-white/20 border-white/10 px-4 py-2 w-full" placeholder="ایمیل">
      <input type="password" class="border rounded-lg bg-white/5 text-sm font-light focus:outline-none focus:border-white/20 border-white/10 px-4 py-2 w-full" placeholder="رمز عبور">
      <button class="py-3 rounded-md w-full flex justify-center text-white bg-indigo-600 items-center gap-2 self-end">
        <span>ثبت نام</span>
      </button>
      <div class="w-full flex items-center gap-4">
        <div class="flex-1 h-px bg-white/20"></div>
        <span>یا</span>
        <div class="flex-1 h-px bg-white/20"></div>
      </div>
      <button class="py-3 rounded-md w-full flex justify-center text-white border border-[#222E49] items-center gap-2 self-end">
        <span>ورود با گوگل</span>
        <svg class="w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_17723)">
            <path d="M47.5321 24.5528C47.5321 22.9214 47.3998 21.2811 47.1176 19.6761H24.48V28.9181H37.4435C36.9055 31.8988 35.1771 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.5321 31.8547 47.5321 24.5528Z" fill="#4285F4"/>
            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3889 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5039 24.4888 38.5039C18.2276 38.5039 12.9187 34.2798 11.0139 28.6006H3.03299V34.7825C7.10721 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
            <path d="M11.0051 28.6006C9.99976 25.6199 9.99976 22.3922 11.0051 19.4115V13.2296H3.03301C-0.37099 20.0112 -0.37099 28.0009 3.03301 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6867 13.0973L40.5388 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10721 5.11644 3.03299 13.2296L11.0051 19.4115C12.9011 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
          </g>
          <defs>
            <clipPath id="clip0_2_17723">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <button class="font-light text-sm underline-offset-4 underline" @click="authState = 'login'">ورود به حساب کاربری</button>
    </div>
  </div>
</template>

<style scoped>

</style>