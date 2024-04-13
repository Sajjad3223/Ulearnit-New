<template>
  <div class="container mx-auto">
    <div class="relative flex flex-col items-center h-[400px]" id="stars" ref="stars">
      <div class="bg-[#D9D9D9] rounded-full absolute -z-10" ref="dot"
           :style="['box-shadow: 0 0 10px 0 #D9D9D9B2;',`width: ${dotRadius}px;height:${dotRadius}px;`]"></div>
      <span class="text-[50px] font-lalezar text-[#D7D7D7] mt-16">به یولرنیت خوش آمدید</span>
      <p class="w-[460px] text-center my-9 font-normal">
        در یولرنیت شما به صورت پروژه محور و کاملا عملی، بازی‌سازی و برنامه نویسی را یاد می‌گیرید و به یک متخصص تبدیل می‌شوید.
      </p>
      <button @click="generateStars('stars')" class="bg-[#F9FAFB] px-4 py-2 rounded-lg text-[#884FE4] font-semibold" style="box-shadow: 0 10px 20px rgba(245, 245, 245, 0.15);">
        مشاهده دوره ها
      </button>
      <img src="~/assets/images/starter-image.png" alt="starter image" class="max-w-[360px] absolute left-[300px] top-6 -z-10">
    </div>

    <div class="rounded-[50px] px-[58px] pt-9 mt-[100px] max-w-[1040px] mx-auto"
         style="border-image: linear-gradient(180deg,#1A9DF366,#1A9DF300) 1 / 5px;">
      <!--    style="background: linear-gradient(to bottom,#101529 70%, #0e112200),linear-gradient(to bottom,#1A9DF366, #1A9DF300);background-clip: padding-box,border-box;background-origin: padding-box,border-box;">-->
      <h2 class="font-bold text-center text-xl relative" >برترین  دوره ها</h2>
      <div class="grid grid-cols-2 gap-[50px] mt-9">
        <div class="flex items-center justify-between px-8 rounded-[10px] w-[440px] h-[240px]" style="background: linear-gradient(180deg, #121825 -4.73%, #090D16 88.73%);">
          <div class="flex flex-col items-start space-y-6">
            <h3 class="font-lalezar text-3xl">دوره یونیتی انجین</h3>
            <div class="flex flex-col space-y-3">
              <div class="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.23767 19.5C4.56308 17.2892 7.46795 15.7762 11.9999 15.7762C16.5319 15.7762 19.4368 17.2892 20.7622 19.5M15.5999 8.1C15.5999 10.0882 13.9882 11.7 11.9999 11.7C10.0117 11.7 8.39995 10.0882 8.39995 8.1C8.39995 6.11177 10.0117 4.5 11.9999 4.5C13.9882 4.5 15.5999 6.11177 15.5999 8.1Z" stroke="#828282" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span>مدرس:</span>
                  <strong class="text-[#6055E2]">سجاد میرشبی</strong>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5588 15.1987C16.0827 15.3733 16.649 15.0902 16.8237 14.5662C16.9983 14.0423 16.7152 13.476 16.1912 13.3013L15.5588 15.1987ZM12.5 13.125H11.5C11.5 13.5554 11.7754 13.9376 12.1838 14.0737L12.5 13.125ZM13.5 8.42087C13.5 7.86858 13.0523 7.42087 12.5 7.42087C11.9477 7.42087 11.5 7.86858 11.5 8.42087H13.5ZM16.1912 13.3013L12.8162 12.1763L12.1838 14.0737L15.5588 15.1987L16.1912 13.3013ZM13.5 13.125V8.42087H11.5V13.125H13.5ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20V22C18.0228 22 22.5 17.5228 22.5 12H20.5ZM12.5 20C8.08172 20 4.5 16.4183 4.5 12H2.5C2.5 17.5228 6.97715 22 12.5 22V20ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4V2C6.97715 2 2.5 6.47715 2.5 12H4.5ZM12.5 4C16.9183 4 20.5 7.58172 20.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V4Z" fill="#828282" fill-opacity="0.5"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span>مدت زمان:</span>
                  <strong class="text-[#6055E2]">05:31:20</strong>
                </div>
              </div>
            </div>
            <a href="" class="rounded-lg px-6 py-3"
               style="background: linear-gradient(93.11deg, #2659DA 0%, #944EE5 103.85%);box-shadow: 0 0 15px rgba(77, 85, 222, 0.5);">
              مشاهده دوره
            </a>
          </div>
          <img src="~/assets/images/unity.png" alt="unity" class="w-[150px]">
        </div>
        <div class="flex items-center justify-between px-8 rounded-[10px] w-[440px] h-[240px]" style="background: linear-gradient(180deg, #121825 -4.73%, #090D16 88.73%);">
          <div class="flex flex-col items-start space-y-6">
            <h3 class="font-lalezar text-3xl">دوره آنریل انجین</h3>
            <div class="flex flex-col space-y-3">
              <div class="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.23767 19.5C4.56308 17.2892 7.46795 15.7762 11.9999 15.7762C16.5319 15.7762 19.4368 17.2892 20.7622 19.5M15.5999 8.1C15.5999 10.0882 13.9882 11.7 11.9999 11.7C10.0117 11.7 8.39995 10.0882 8.39995 8.1C8.39995 6.11177 10.0117 4.5 11.9999 4.5C13.9882 4.5 15.5999 6.11177 15.5999 8.1Z" stroke="#828282" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span>مدرس:</span>
                  <strong class="text-[#6055E2]">سجاد میرشبی</strong>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5588 15.1987C16.0827 15.3733 16.649 15.0902 16.8237 14.5662C16.9983 14.0423 16.7152 13.476 16.1912 13.3013L15.5588 15.1987ZM12.5 13.125H11.5C11.5 13.5554 11.7754 13.9376 12.1838 14.0737L12.5 13.125ZM13.5 8.42087C13.5 7.86858 13.0523 7.42087 12.5 7.42087C11.9477 7.42087 11.5 7.86858 11.5 8.42087H13.5ZM16.1912 13.3013L12.8162 12.1763L12.1838 14.0737L15.5588 15.1987L16.1912 13.3013ZM13.5 13.125V8.42087H11.5V13.125H13.5ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20V22C18.0228 22 22.5 17.5228 22.5 12H20.5ZM12.5 20C8.08172 20 4.5 16.4183 4.5 12H2.5C2.5 17.5228 6.97715 22 12.5 22V20ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4V2C6.97715 2 2.5 6.47715 2.5 12H4.5ZM12.5 4C16.9183 4 20.5 7.58172 20.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V4Z" fill="#828282" fill-opacity="0.5"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span>مدت زمان:</span>
                  <strong class="text-[#6055E2]">12:18:38</strong>
                </div>
              </div>
            </div>
            <a href="" class="rounded-lg px-6 py-3"
               style="background: linear-gradient(93.11deg, #2659DA 0%, #944EE5 103.85%);box-shadow: 0 0 15px rgba(77, 85, 222, 0.5);">
              مشاهده دوره
            </a>
          </div>
          <img src="~/assets/images/unreal.png" alt="unity" class="w-[150px]">
        </div>
      </div>
      <div class="flex items-center gap-8 mt-[70px]">
        <div class="h-px bg-[#2D3340] flex-1"></div>
        <strong class="text-2xl">آخرین دوره ها</strong>
        <div class="h-px bg-[#2D3340] flex-1"></div>
      </div>
      <div class="mt-12 grid grid-cols-3 gap-7 h-[374px]">
        <div class="flex flex-col border rounded-3xl max-h-[314px] hover:max-h-[374px] overflow-hidden transition-all duration-300 border-[#242A35] p-[14px]" v-for="i in 3" :key="i">
          <img src="~/assets/images/course.png" alt="course" class="rounded-2xl w-full">
          <a href="" class="text-2xl font-lalezar mt-3">مبانی برنامه نویسی</a>
          <div class="flex items-center gap-4 mt-3">
            <div class="flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.23767 19.5C4.56308 17.2892 7.46795 15.7762 11.9999 15.7762C16.5319 15.7762 19.4368 17.2892 20.7622 19.5M15.5999 8.1C15.5999 10.0882 13.9882 11.7 11.9999 11.7C10.0117 11.7 8.39995 10.0882 8.39995 8.1C8.39995 6.11177 10.0117 4.5 11.9999 4.5C13.9882 4.5 15.5999 6.11177 15.5999 8.1Z" stroke="#828282" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <strong class="text-sm text-[#6055E2]">سجاد میرشبی</strong>
            </div>
            <div class="flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5588 15.1987C16.0827 15.3733 16.649 15.0902 16.8237 14.5662C16.9983 14.0423 16.7152 13.476 16.1912 13.3013L15.5588 15.1987ZM12.5 13.125H11.5C11.5 13.5554 11.7754 13.9376 12.1838 14.0737L12.5 13.125ZM13.5 8.42087C13.5 7.86858 13.0523 7.42087 12.5 7.42087C11.9477 7.42087 11.5 7.86858 11.5 8.42087H13.5ZM16.1912 13.3013L12.8162 12.1763L12.1838 14.0737L15.5588 15.1987L16.1912 13.3013ZM13.5 13.125V8.42087H11.5V13.125H13.5ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20V22C18.0228 22 22.5 17.5228 22.5 12H20.5ZM12.5 20C8.08172 20 4.5 16.4183 4.5 12H2.5C2.5 17.5228 6.97715 22 12.5 22V20ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4V2C6.97715 2 2.5 6.47715 2.5 12H4.5ZM12.5 4C16.9183 4 20.5 7.58172 20.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V4Z" fill="#828282" fill-opacity="0.5"/>
              </svg>
              <strong class="text-sm text-[#6055E2]">12:18:38</strong>
            </div>
          </div>
          <a href="" class="w-full rounded-xl bg-[#131926] text-[#517DFD] font-bold py-2 text-center mt-5"
          style="text-shadow: 0 0 10px rgba(81, 125, 253, 0.5);">مشاهده دوره</a>
        </div>
      </div>
      <div class="my-12">
        <a href="" class="flex items-center gap-1 border-b border-b-[#2E58DB] w-max mx-auto">
          <span>مشاهده همه دوره ها</span>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1341_158)">
              <path d="M20.1667 25.375L16 21M16 21L20.1667 16.625M16 21H26" stroke="#D7D7D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <filter id="filter0_d_1341_158" x="-6" y="-6" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.843137 0 0 0 0 0.843137 0 0 0 0 0.843137 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1341_158"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1341_158" result="shape"/>
              </filter>
            </defs>
          </svg>
        </a>
      </div>
    </div>

    <section class=" relative mt-[200px] max-w-[1040px] mx-auto">
      <div class="flex justify-between">
        <div class="flex flex-col space-y-8 items-start">
          <span class="font-lalezar text-[30px]">با یولرنیت بروز باش</span>
          <p class="text-justify w-[473px]">
            بیش از ده ها مقاله در زمینه های مختلف از جمله هوش مصنوعی ، بازی سازی ، برنامه نویسی ، فتوشاپ و ... توسط تیم یولرنیت جمع آوری شده و همچنین اخبار روز در زمینه تکنولوژِی را با یولرنیت مطلع شوید
          </p>
          <a href="" class="rounded-lg px-6 py-3"
             style="background: linear-gradient(93.11deg, #2659DA 0%, #944EE5 103.85%);box-shadow: 0 0 15px rgba(77, 85, 222, 0.5);">
            همین الان بخوان
          </a>
        </div>
        <div class="w-[1274px] h-[590px] absolute rounded-full -top-full -left-1/2 -z-20 blur-[400px] opacity-30"
             style="background: linear-gradient(270.58deg, rgba(6, 100, 235, 1) -14.1%, rgba(179, 83, 253, 1) 112.6%);"></div>
        <div class="flex flex-row-reverse gap-2">
          <div class="flex flex-col gap-2">
            <img src="~/assets/images/img.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
            <img src="~/assets/images/img_1.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
            <img src="~/assets/images/img_2.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
          </div>
          <div class="flex flex-col gap-2 translate-y-10">
            <img src="~/assets/images/img_3.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
            <img src="~/assets/images/img_4.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
            <img src="~/assets/images/img_5.png" alt="" class="w-[224px] h-[93px] object-cover rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <section class="relative mt-[200px] rounded-2xl max-w-[1040px] mx-auto py-[70px]"
    style="background: linear-gradient(180deg, #0D111A 0%, #090D16 100%);">
      <div class="w-[450px] h-[435px] absolute rounded-full top-1/2 -right-1/2 -z-20 blur-[400px] opacity-100"
           style="background: linear-gradient(270.58deg, rgba(6, 100, 235, 1) -14.1%, rgba(179, 83, 253, 1) 112.6%);"></div>

      <div class="flex flex-col items-center">
        <h3 class="font-lalezar text-[30px]">به انجمن ما ملحق شو !</h3>
        <p class="w-[700px] text-justify mt-8">
          ما را در هر یک از پلتفرم های رسانه های اجتماعی مورد علاقه خود پیدا کنید و به انجمن مشتاق ما بپیوندید! با آخرین به‌روزرسانی‌ها همراه باشید، در بحث‌ها شرکت کنید و مستقیماً بر آینده
          <a href="#" class="font-lalezar text-[#3357DB]">یولرنیت</a> تأثیر بگذارید. همه پیشنهادات شما در مورد بهبود و ارتقای بیشتر برنامه مورد استقبال و قدردانی قرار می گیرد!
        </p>
        <div class="grid grid-cols-2 gap-4 w-[510px] mt-10">
          <a href="" class="w-[250px] border border-[#293041] p-2 px-3 rounded-[10px] flex items-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="50" height="50" fill="url(#pattern0_1346_211)"/>
              <defs>
                <pattern id="pattern0_1346_211" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1346_211" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1346_211" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col mr-4">
              <span class="font-lalezar text-[20px] text-[#DDDDDD]">تلگرام</span>
              <small class="font-light text-[#606777]">گروه رسمی</small>
            </div>
          </a>
          <a href="" class="w-[250px] border border-[#293041] p-2 px-3 rounded-[10px] flex items-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="50" height="50" fill="url(#pattern0_1346_211)"/>
              <defs>
                <pattern id="pattern0_1346_211" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1346_211" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1346_211" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col mr-4">
              <span class="font-lalezar text-[20px] text-[#DDDDDD]">تلگرام</span>
              <small class="font-light text-[#606777]">کانال رسمی</small>
            </div>
          </a>
          <a href="" class="w-[250px] border border-[#293041] p-2 px-3 rounded-[10px] flex items-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="50" height="50" fill="url(#pattern0_1346_219)"/>
              <defs>
                <pattern id="pattern0_1346_219" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1346_219" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1346_219" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col mr-4">
              <span class="font-lalezar text-[20px] text-[#DDDDDD]">اینستاگرام</span>
              <small class="font-light text-[#606777]">پیج رسمی یولرنیت</small>
            </div>
          </a>
          <a href="" class="w-[250px] border border-[#293041] p-2 px-3 rounded-[10px] flex items-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="50" height="50" fill="url(#pattern0_1346_223)"/>
              <defs>
                <pattern id="pattern0_1346_223" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1346_223" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1346_223" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col mr-4">
              <span class="font-lalezar text-[20px] text-[#DDDDDD]">یوتیوب</span>
              <small class="font-light text-[#606777]">کانال رسمی یولرنیت</small>
            </div>
          </a>
          <a href="" class="w-[250px] col-span-2 mx-auto border border-[#293041] p-2 px-3 rounded-[10px] flex items-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="50" height="50" fill="url(#pattern0_1346_227)"/>
              <defs>
                <pattern id="pattern0_1346_227" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_1346_227" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_1346_227" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col mr-4">
              <span class="font-lalezar text-[20px] text-[#DDDDDD]">دیسکورد</span>
              <small class="font-light text-[#606777]">انجمن یولرنیت</small>
            </div>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">

    let dot = ref();
let dotRadius = ref(5);
const stars = ref();

onMounted(()=>{
  /*document.addEventListener('mousemove',(event)=>{
    dot.value.style.left = event.screenX - 5 + 'px';
    dot.value.style.top = (event.clientY + -105)  + 'px';
  });
  document.addEventListener('wheel',(event)=>{
    let threshold = (event.deltaY / 100) * -1;
    dotRadius.value += threshold;
  })*/
})

const generateStars = (container:string,count:number = 20) =>{
  const starsDiv = document.getElementById(container);
  starsDiv.querySelectorAll('div').forEach(e=>{
    e.remove();
  });

  for (let i=0; i < count; i++){
    const x:number = getRandom(400,550);
    const y:number = getRandom(0 - 50,starsDiv.getBoundingClientRect().height);
    const radius:number = getRandom(2,5);
    const div = `
      <div class="bg-[#D9D9D9] rounded-full absolute -z-10 animate-pulse delay-150 pointer-events-none"
           style="width: ${radius}px;height:${radius}px; top:${y}px ;left:${x}px; box-shadow: 0 0 10px 0 #D9D9D9B2;">
      </div>
    `;
    starsDiv.innerHTML += div;
  }
  for (let i=0; i < count; i++){
    const x = getRandom(550,starsDiv.getBoundingClientRect().width - 550);
    const y = getRandom(0 - 50,starsDiv.getBoundingClientRect().height - getRandom(50 ,100));
    const radius = getRandom(2,5);
    const div = `
      <div class="bg-[#D9D9D9] rounded-full absolute -z-10 animate-pulse delay-150 pointer-events-none"
           style="width: ${radius}px;height:${radius}px;top:${y}px;left:${x}px; box-shadow: 0 0 10px 0 #D9D9D9B2;">
      </div>
    `;
    starsDiv.innerHTML +=div;
  }
  for (let i=0; i < count; i++){
    const x = getRandom(starsDiv.getBoundingClientRect().width - 550,starsDiv.getBoundingClientRect().width - 400);
    const y = getRandom(0 - 50,starsDiv.getBoundingClientRect().height);
    const radius = getRandom(2,5);
    const div = `
      <div class="bg-[#D9D9D9] rounded-full absolute -z-10 animate-pulse delay-150 pointer-events-none"
           style="width: ${radius}px;height:${radius}px;top:${y}px;left:${x}px; box-shadow: 0 0 10px 0 #D9D9D9B2;">
      </div>
    `;
    starsDiv.innerHTML +=div;
  }
}

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
</script>