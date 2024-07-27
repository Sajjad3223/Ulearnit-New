<template>
  <div class="container mx-auto">
    <svg viewBox="0 0 757 641" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3/5 max-w-[950px] absolute left-0 top-0 -z-[1]">
      <path d="M754.5 64C742.289 15.7878 690.196 -39.7462 633 -97L-35 -120L-55 335.5C-55 335.5 0 544 71.5 566C143 588 152.5 516.5 194.5 544.5C236.5 572.5 252.5 668.5 347.5 633C442.5 597.5 451.5 527.546 510 522C568.5 516.454 647.5 556.5 682.5 494.5C717.5 432.5 728 387 737 332C746 277 699 222 709 176C719 130 766.711 112.212 754.5 64Z" fill="#100073"/>
    </svg>
    <svg viewBox="0 0 777 634" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3/5 max-w-[950px] absolute left-0 top-0 -z-[1]">
      <path opacity="0.8" d="M774.5 18C762.289 -30.2122 710.196 -85.7462 653 -143L-15 -166L-35 289.5C-35 289.5 20 498 91.5 520C163 542 172.5 470.5 214.5 498.5C256.5 526.5 364.5 677.5 433 621.5C501.5 565.5 488 525.546 546.5 520C605 514.454 667.5 510.5 702.5 448.5C737.5 386.5 748 341 757 286C766 231 719 176 729 130C739 84 786.711 66.2122 774.5 18Z" fill="#331EB7"/>
    </svg>
    <svg viewBox="0 0 631 527" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-1/2 max-w-[800px] absolute left-0 top-0 -z-[1]">
      <circle cx="276.246" cy="172.246" r="354.5" transform="rotate(-41.2169 276.246 172.246)" fill="url(#paint0_linear_1532_317)" fill-opacity="0.1"/>
      <defs>
        <linearGradient id="paint0_linear_1532_317" x1="646.001" y1="40.035" x2="-36.1206" y2="316.806" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="flex items-center justify-between w-full h-[70vh]">
      <img src="~/assets/images/landing.png" alt="landing" class="w-1/2 ">
      <div class="flex-1 flex items-center flex-col gap-4">
        <span class="text-3xl font-bold">برنامه نویسی و بازی سازی با</span>
        <span class="text-5xl font-black text-[#FAE52F]" style="text-shadow: 0 0 20px rgba(250,229,47,0.7)"> یولرنیت</span>
        <span class="max-w-[320px] text-center font-light my-8">
          در یولرنیت شما به صورت پروژه محور و کاملا عملی، بازی‌سازی و برنامه نویسی را یاد می‌گیرید و به یک متخصص تبدیل می‌شوید.
        </span>
        <button class="bg-[#D9D9D9] text-[#331EB7] font-bold px-8 py-5 rounded-xl transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(217,217,217,0.5)]">
          مشاهده دوره ها
        </button>
      </div>
    </div>

    <div class="py-[300px]">
      <div class="w-full flex items-center justify-between">
        <div class="w-2/3 flex flex-col gap-2">
          <div class="flex items-center gap-4 relative">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="36" height="36" fill="url(#pattern0_1538_343)"/>
              <defs>
                <pattern id="pattern0_1538_343" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1538_343" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1538_343" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <strong class="text-3xl">پرفروش ترین دوره ها</strong>
            <strong class="absolute right-12 -bottom-3 text-7xl opacity-5 -z-[1] font-black uppercase">Best Seller</strong>
          </div>
          <span class="opacity-70">بازی سازی رو از یولرنیت شروع کن.</span>
        </div>
        <div class="flex-1 flex items-center justify-center gap-9 relative">
          <div class="rounded-3xl w-[200px] h-[270px] border border-white/10 bg-[#111723] grid grid-rows-2 overflow-hidden">
            <img src="~/assets/images/course-preview.png" alt="banner" class="h-full w-full object-cover">
            <div class="flex flex-col items-center justify-center">
              <strong class="text-xl">آنریل انجین</strong>
              <div class="flex flex-col items-center mt-4 opacity-50">
                <span class="text-[10px]">مدرس</span>
                <span class="font-bold text-xs">سجاد میرشبی</span>
              </div>
            </div>
          </div>
          <div class="rounded-3xl w-[200px] h-[270px] border border-white/10 bg-[#111723] grid grid-rows-2 overflow-hidden">
            <img src="~/assets/images/course-preview.png" alt="banner" class="h-full w-full object-cover">
            <div class="flex flex-col items-center justify-center">
              <strong class="text-xl">یونیتی</strong>
              <div class="flex flex-col items-center mt-4 opacity-50">
                <span class="text-[10px]">مدرس</span>
                <span class="font-bold text-xs">سجاد میرشبی</span>
              </div>
            </div>
          </div>
          <div class="absolute w-[150%] left-1/2 -translate-x-1/2 bg-[#2C18A9] h-px -z-[1]"></div>
          <div class="absolute w-[150%] left-1/2 -translate-x-1/2 bg-[#5844D7]/50 h-[90px] -z-[2] blur-[100px] opacity-50"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="relative flex flex-col items-center w-max mx-auto">
        <strong class="text-3xl">آخرین دوره های یولرنیت</strong>
        <strong class="absolute -bottom-3 text-7xl opacity-5 -z-[1] w-max font-black uppercase ">Last Courses</strong>
        <strong class="absolute -bottom-2 text-7xl opacity-5 -z-[2] bg-white h-8 inset-x-0 uppercase rounded-xl"></strong>
      </div>

      <div class="relative flex gap-16 justify-center mt-16">
        <div class="bg-[#452ED4]/20 rounded-full absolute w-[400px] h-[400px] blur-[200px] left-1/2 -translate-x-1/2 -z-[1]"></div>
        <div class="rounded-3xl w-1/5 p-5 max-w-[220px] h-[340px] border border-white/10 bg-[#111723] grid grid-rows-2 overflow-hidden" v-for=" i in 4">
          <div class="grid place-items-center self-center justify-self-center w-20 h-20 rounded-full bg-[#402EBD]"><span>HTML</span></div>
          <div class="flex flex-col items-center justify-center">
            <strong class="text-xl">آنریل انجین</strong>
            <div class="flex flex-col self-start items-start my-5 gap-2 opacity-50">
              <div class="flex items-center gap-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.1582 13C3.04181 11.5262 4.97839 10.5175 7.99972 10.5175C11.0211 10.5175 12.9576 11.5262 13.8412 13M10.3997 5.4C10.3997 6.72548 9.3252 7.8 7.99972 7.8C6.67424 7.8 5.59972 6.72548 5.59972 5.4C5.59972 4.07452 6.67424 3 7.99972 3C9.3252 3 10.3997 4.07452 10.3997 5.4Z" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
                </svg>
                <span class="text-xs font-light">سجاد میرشبی</span>
              </div>
              <div class="flex items-center gap-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4249 9.97434C10.6869 10.0617 10.97 9.92009 11.0573 9.65811C11.1447 9.39614 11.0031 9.11298 10.7411 9.02566L10.4249 9.97434ZM8.33301 8.75H7.83301C7.83301 8.96522 7.97072 9.15628 8.17489 9.22434L8.33301 8.75ZM8.83301 5.61391C8.83301 5.33777 8.60915 5.11391 8.33301 5.11391C8.05687 5.11391 7.83301 5.33777 7.83301 5.61391H8.83301ZM10.7411 9.02566L8.49112 8.27566L8.17489 9.22434L10.4249 9.97434L10.7411 9.02566ZM8.83301 8.75V5.61391H7.83301V8.75H8.83301ZM13.833 8C13.833 11.0376 11.3706 13.5 8.33301 13.5V14.5C11.9229 14.5 14.833 11.5899 14.833 8H13.833ZM8.33301 13.5C5.29544 13.5 2.83301 11.0376 2.83301 8H1.83301C1.83301 11.5899 4.74316 14.5 8.33301 14.5V13.5ZM2.83301 8C2.83301 4.96243 5.29544 2.5 8.33301 2.5V1.5C4.74316 1.5 1.83301 4.41015 1.83301 8H2.83301ZM8.33301 2.5C11.3706 2.5 13.833 4.96243 13.833 8H14.833C14.833 4.41015 11.9229 1.5 8.33301 1.5V2.5Z" fill="white" fill-opacity="0.5"/>
                </svg>
                <span class="text-xs font-light">03:56:05</span>
              </div>
            </div>
            <button class="px-5 py-3 text-xs rounded-xl border border-white/50 text-white/50 hover:border-[#402EBD] hover:bg-[#402EBD] hover:text-white/100 transition-all duration-300">
              مشاهده دوره
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="my-[200px] relative overflow-visible w-full flex flex-col gap-5 py-10 px-14 w-full bg-gradient-to-r from-[#090D16] to-[#111723] rounded-3xl border border-white/10">
      <div class="flex items-center gap-3">
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="37" height="37" fill="url(#pattern0_1643_348)"/>
          <defs>
            <pattern id="pattern0_1643_348" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_1643_348" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_1643_348" width="100" height="100" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>
        <span class="text-2xl font-semibold">تدریس خصوصی در یولرنیــــت</span>
      </div>
      <p class="text-sm w-5/6">
        تدریس در یولرنیت به دانش و تخصص شما دایره اثری به وسعت کل کشور می‌بخشد. دانش و تجربه‌ای که تاکنون محدود به زمان و جغرافیا بود، در یولرنیت اوج گرفته و فارغ از هر گونه مرزی می‌شود. تدریس در یولرنیت ، تدریس برای آرمان «دانش بدون مرز» است.
      </p>
      <button class="bg-[#402EBD] text-white py-2 px-6 w-max rounded-xl" style="box-shadow: 0 0 15px 0 rgba(64,46,189,0.5)">
        شروع تدریس
      </button>
      <img src="~/assets/images/private-teaching.png" alt="private teaching" class="absolute left-0 bottom-0 max-w-[300px]">
    </div>

    <div class="my-[200px] w-full grid grid-cols-2 gap-6">
      <div class="bg-[#270CC8] rounded-3xl w-full py-9 flex flex-col items-center gap-9" style="box-shadow: 0 0 70px 0 #270CC833;">
        <div class="flex flex-col text-2xl font-semibold text-center">
          <span> به خانواده <span class="text-[#FAE52F]">یولرنیت</span></span>
          <span>خوش آمدید!</span>
        </div>
        <p class="max-w-[350px] text-center">
          ما مفتخریم که شما را به عنوان همراه جدید خود داشته باشیم.
          ما طیف گسترده ای از آموزش ها را ارائه می دهیم که می تواند به شما در رسیدن به اهدافتان کمک کند.برای اطلاعات بیشتر در مورد دوره ها و خدمات ما، لطفاً از صفحه درباره ما دیدن کنیدما مشتاقانه منتظر خدمت به شما هستیم!
        </p>
        <button class="bg-[#FAE52F] text-black py-2 px-6 w-max rounded-xl" style="box-shadow: 0 0 15px 0 rgba(250,229,47,0.5)">
          شروع تدریس
        </button>
      </div>
      <div class="bg-white rounded-3xl w-full py-9 flex flex-col items-center gap-6 px-[70px]" >
        <strong class="text-2xl text-black">درخواست مشاوره</strong>
        <div class="grid grid-cols-2 gap-2">
          <input type="text" class="rounded-xl bg-[#F0F0F0] py-3 px-5" placeholder="نام">
          <input type="text" class="rounded-xl bg-[#F0F0F0] py-3 px-5" placeholder="نام خانوادگی">
          <input type="text" class="rounded-xl bg-[#F0F0F0] py-3 px-5 col-span-full" placeholder="ایمیل">
          <textarea type="text" class="rounded-xl bg-[#F0F0F0] py-3 px-5 col-span-full" rows="2" placeholder="پیام"></textarea>
        </div>
        <button class="bg-[#402EBD] text-white py-2 px-6 w-max rounded-xl" style="box-shadow: 0 0 15px 0 rgba(64,46,189,0.5)">
          ثبت
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>