<script setup lang="ts">
const showSeason = ref(false);
</script>

<template>
  <li class="flex flex-col space-y-4 py-0.5">
    <!--  Season Details  -->
    <div :class="['p-4 rounded-xl flex flex-col gap-2 cursor-pointer transition-all duration-200',
                                  showSeason ?
                                  'bg-[#4A3CE7]' :
                                  'bg-[#111723]']"
         @click="showSeason = !showSeason">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <strong>
            1- فصل اول
          </strong>
          <div class="h-4 w-px bg-white mx-3 opacity-40"></div>
          <span>شخصیت سازی</span>
        </div>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
             :class="['transition-all duration-200',{'rotate-180':showSeason}]">
          <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Transition name="pop">
        <div class="flex items-center gap-2" v-if="showSeason">
                        <span class="border rounded-lg px-2 py-1 text-xs">
                          8 جلسه
                        </span>
          <span class="border rounded-lg px-2 py-1 text-xs">
                          05:25:38 دقیقه
                        </span>
        </div>
      </Transition>
    </div>
    <!--  Season Content  -->
    <Transition name="pop">
      <div class="flex flex-col space-y-4" v-if="showSeason">
        <!--  Episodes of each season  -->
        <ul class=" bg-[#111723] rounded-xl">
          <li class="flex items-center justify-between p-4 group hover:bg-black/20 transition-colors duration-200">
            <div class="flex items-start gap-2">
              <base-checkbox />
              <span>1 - آشنایی با یونیتی</span>
            </div>
            <small class="font-thin opacity-70">00:05:28</small>
            <button class="relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C17.2459 2.5 21.5 6.75315 21.5 12C21.5 17.2469 17.2459 21.5 12 21.5C6.75315 21.5 2.5 17.2469 2.5 12C2.5 6.75315 6.75315 2.5 12 2.5Z" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 11.9951C15 11.184 10.8425 8.58912 10.3709 9.0557C9.8993 9.52228 9.85395 14.424 10.3709 14.9346C10.8879 15.4469 15 12.8063 15 11.9951Z" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-gray-800 text-xs px-2 py-1 rounded-md pointer-events-none">
                          پخش آنلاین
                        </span>
            </button>
          </li>
          <li class="flex items-center justify-between p-4 group hover:bg-black/20 transition-colors duration-200">
            <div class="flex items-start gap-2">
              <base-checkbox />
              <span>1 - آشنایی با یونیتی</span>
            </div>
            <small class="font-thin opacity-70">00:05:28</small>
            <button class="relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8633 14.2031V16.4241" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-[#F51940] text-xs px-2 py-1 rounded-md pointer-events-none">
                          برای مشاهده باید اشتراک بخرید!
                        </span>
            </button>
          </li>
          <li class="flex items-center justify-between p-4 group hover:bg-black/20 transition-colors duration-200">
            <div class="flex items-start gap-2">
              <base-checkbox />
              <span>1 - آشنایی با یونیتی</span>
            </div>
            <small class="font-thin opacity-70">00:05:28</small>
            <button class="relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8633 14.2031V16.4241" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-[#F51940] text-xs px-2 py-1 rounded-md pointer-events-none">
                          برای مشاهده باید اشتراک بخرید!
                        </span>
            </button>
          </li>
          <li class="flex items-center justify-between p-4 group hover:bg-black/20 transition-colors duration-200">
            <div class="flex items-start gap-2">
              <base-checkbox />
              <span>1 - آشنایی با یونیتی</span>
            </div>
            <small class="font-thin opacity-70">00:05:28</small>
            <button class="relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8633 14.2031V16.4241" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-[#F51940] text-xs px-2 py-1 rounded-md pointer-events-none">
                          برای مشاهده باید اشتراک بخرید!
                        </span>
            </button>
          </li>
          <li class="flex items-center justify-between p-4 group hover:bg-black/20 transition-colors duration-200">
            <div class="flex items-start gap-2">
              <base-checkbox />
              <span>1 - آشنایی با یونیتی</span>
            </div>
            <small class="font-thin opacity-70">00:05:28</small>
            <button class="relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8633 14.2031V16.4241" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-[#F51940] text-xs px-2 py-1 rounded-md pointer-events-none">
                          برای مشاهده باید اشتراک بخرید!
                        </span>
            </button>
          </li>
        </ul>
        <!--  Quiz of each season  -->
        <div>
          <div class="flex items-center justify-between p-4 bg-[#060911] h-[100px] ml-8 relative">
            <div class="flex flex-col">
              <strong>کوییز فصل اول</strong>
              <span class="bg-white/10 rounded-md text-xs px-2 py-1 w-max">12 سؤال</span>
            </div>
            <button class="bg-[#3C42E7] rounded-md px-4 py-2" style="box-shadow: 0 0 10px rgba(60, 66, 231, 0.5);">
              شروع
            </button>
            <button class="bg-[#1CB965]/10 text-[#1CB965] rounded-md px-4 py-2" v-if="false"> <!-- If quiz is passed -->
              قبول شده ( 7 / 10 )
            </button>
            <div></div>
            <img src="~/assets/images/quiz.png" alt="quiz" class="absolute bottom-0 -left-12 max-h-[90px]">
          </div>
        </div>
      </div>
    </Transition>
  </li>
</template>

<style scoped>
.pop-enter-from,
.pop-leave-to{
  @apply opacity-0 scale-75;
}
.pop-enter-active,
.pop-leave-active{
  @apply transition-all duration-200 origin-top;
}
</style>