<template>
<!--  <div class="container mx-auto">
    <div class="w-[1274px] h-[590px] absolute rounded-full top-0 -translate-y-2/3 left-0 -z-20 blur-[400px] opacity-30"
         style="background: linear-gradient(270.58deg, rgba(6, 100, 235, 1) -14.1%, rgba(179, 83, 253, 1) 112.6%);"></div>
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
      &lt;!&ndash;    style="background: linear-gradient(to bottom,#101529 70%, #0e112200),linear-gradient(to bottom,#1A9DF366, #1A9DF300);background-clip: padding-box,border-box;background-origin: padding-box,border-box;">&ndash;&gt;
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

  </div>-->

<div>
  <section class="container mx-auto flex flex-col-reverse xl:flex-row items-center relative mt-20 min-h-[65vh] xl:gap-0 gap-12">
    <div class="xl:w-1/2 z-[1] flex flex-col items-center xl:items-start gap-8 2xl:gap-12">
      <h2 class="font-black text-3xl md:text-5xl leading-tight origin-right md:scale-110 2xl:scale-125 bg-gradient-to-b from-white to-[#046BEC] text-transparent bg-clip-text">
        با <span class="text-[#046BEC]">یولرنیت</span>، بازی سازی رو <br>
        مثل آب خوردن یاد بگیر !
      </h2>
      <p class="text-xs md:text-lg 2xl:text-xl font-light opacity-70">
        ما اینجا همه تلاشمون رو میکنیم تا بازی سازی و برنامه نویسی رو اصولی <br>
        و با بهترین کیفیت بهتون آموزش بدیم؛ پس همین الان شروع کنید ...
      </p>
      <div class="flex gap-5 md:gap-10 flex-col md:flex-row">
        <button class="relative w-max flex items-center justify-center group">
          <svg width="224" height="73" viewBox="0 0 224 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M223 72V6.96777H25.9942L6.96875 25.1299V72H223Z" stroke="white" stroke-opacity="0.2"/>
            <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#046BEC" class="group-hover:translate-x-2 group-hover:translate-y-1.5 transition-all duration-200 group-hover:fill-[#046BAA]"/>
          </svg>
          <span class="text-nowrap absolute left-1/4 -translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300">شروع یادگیری</span>
        </button>
        <button class="relative w-max flex items-center justify-center group">
          <svg width="224" height="73" viewBox="0 0 224 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M223 72V6.96777H25.9942L6.96875 25.1299V72H223Z" stroke="white" stroke-opacity="0.2"/>
            <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#0A0E22" class="group-hover:translate-x-2 group-hover:translate-y-1.5 transition-all duration-200 group-hover:fill-[#046BAA]"/>
          </svg>
          <span class="text-nowrap  absolute left-1/4 -translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300">درخواست مشاوره</span>
        </button>
      </div>
      <div class="w-full grid md:grid-cols-2 gap-4 gap-y-6">
        <div class="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span>بیش از 80 ساعت آموزش</span>
        </div>
        <div class="flex items-center gap-3 self-end">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span>ضمانت بازگشت وجه</span>
        </div>
        <div class="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span>آزمون و تمرین های منظم</span>
        </div>
        <div class="flex items-center gap-3 self-end">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M10.05 2.53028L4.03002 6.46028C2.10002 7.72028 2.10002 10.5403 4.03002 11.8003L10.05 15.7303C11.13 16.4403 12.91 16.4403 13.99 15.7303L19.98 11.8003C21.9 10.5403 21.9 7.73028 19.98 6.47028L13.99 2.54028C12.91 1.82028 11.13 1.82028 10.05 2.53028Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.63012 13.0801L5.62012 17.7701C5.62012 19.0401 6.60012 20.4001 7.80012 20.8001L10.9901 21.8601C11.5401 22.0401 12.4501 22.0401 13.0101 21.8601L16.2001 20.8001C17.4001 20.4001 18.3801 19.0401 18.3801 17.7701V13.1301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.3999 15V9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span>ارائه مدرک معتبر</span>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center relative justify-center mt-5 xl:mt-0 xl:ml-10 2xl:ml-0">
      <img src="~/assets/images/landing-banner2.png" alt="landing banner" class="z-[2] max-w-[300px] xl:max-w-[500px]">
<!--      <div>
        <img src="~/assets/images/img_6.png" alt="" class="w-[400px] h-[300px] rounded-xl" style="perspective: 100px;transform-style: preserve-3d;transform:rotateX(-20deg) rotateY(40deg) rotateZ(-5deg);transform-origin: center;box-shadow: 5px 5px 7px 0 rgba(0,0,0,0.2)">
      </div>-->
      <div class="absolute top-1/2 xl:top-0 xl:translate-x-full -z-[2] blur-[200px] w-[350px] xl:w-[200px] h-[360px] xl:h-[360px] rotate-[-23deg] bg-[#791791]"></div>
      <div class="absolute left-10 2xl:left-20 top-0 xl:top-20 -translte-y-full flex flex-col md:rotate-12 2xl:-rotate-[10deg]">
        <img src="~/assets/images/godot-logo.png" alt="godot icon" class="max-w-14 rounded-lg absolute top-0 -left-2 origin-bottom-right -translate-x-full -translate-y-full -rotate-[35deg]" style="filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.5));">
        <svg width="75" height="87" viewBox="0 0 75 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M0.721993 0.634891C42.1044 19.8207 59.0155 37.6946 74.2368 86.296" stroke="white" stroke-dasharray="12 12"/>
        </svg>
      </div>
      <div class="absolute md:left-40 2xl:left-40 -top-4 xl:top-10 -translte-y-full flex flex-col rotate-[30deg]">
        <img src="~/assets/images/unity-logo.png" alt="unity icon" class="max-w-14 rounded-lg absolute top-0 -left-2 origin-bottom-right -translate-x-full -translate-y-full -rotate-[23deg]" style="filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.5));">
        <svg width="75" height="87" viewBox="0 0 75 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M0.721993 0.634891C42.1044 19.8207 59.0155 37.6946 74.2368 86.296" stroke="white" stroke-dasharray="12 12"/>
        </svg>
      </div>
      <div class="absolute right-12 xl:right-24 2xl:right-48 top-4 xl:top-8 z-[2] -translte-y-full flex flex-col ">
        <img src="~/assets/images/unreal-logo.png" alt="unreal icon" class="max-w-14 rounded-lg absolute top-0 right-0 origin-bottom-left translate-x-full -translate-y-full rotate-[23deg]" style="filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.5));">

        <svg width="75" height="87" viewBox="0 0 75 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="-scale-x-100 hidden">
          <path opacity="0.5" d="M0.721993 0.634891C42.1044 19.8207 59.0155 37.6946 74.2368 86.296" stroke="white" stroke-dasharray="12 12"/>
        </svg>
      </div>
      <svg width="219" height="276" viewBox="0 0 219 276" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden lg:block bottom-1/4 translate-y-full absolute left-1/2 -rotate-[20deg]">
        <path opacity="0.2" fill="white" d="M33.6228 149.118L32.9208 150.444L33.6228 149.118ZM99.0878 59.8902L98.7648 61.355L99.0878 59.8902ZM210.918 274.925C211.676 275.259 212.562 274.916 212.896 274.158L218.345 261.806C218.68 261.048 218.336 260.163 217.578 259.828C216.82 259.494 215.935 259.837 215.6 260.595L210.757 271.574L199.778 266.731C199.02 266.396 198.134 266.74 197.8 267.498C197.465 268.255 197.809 269.141 198.567 269.475L210.918 274.925ZM7.9595 0.774026C2.434 27.0911 -1.19427 59.1504 1.42491 87.2478C4.03437 115.241 12.9036 139.844 32.9208 150.444L34.3247 147.792C15.7393 137.951 7.00328 114.768 4.41196 86.9694C1.83036 59.2752 5.40577 27.5371 10.8955 1.39046L7.9595 0.774026ZM32.9208 150.444C45.5414 157.127 60.0623 155.456 73.5571 149.241C87.0571 143.025 99.7319 132.183 108.901 120.122C118.043 108.097 123.871 94.6287 123.306 83.1211C123.022 77.3251 121.111 72.0053 117.167 67.687C113.233 63.3796 107.382 60.1831 99.4108 58.4254L98.7648 61.355C106.298 63.0162 111.537 65.9707 114.952 69.7102C118.358 73.4388 120.055 78.0618 120.31 83.2681C120.825 93.7653 115.458 106.54 106.513 118.306C97.595 130.037 85.2911 140.535 72.3023 146.516C59.3085 152.5 45.8307 153.885 34.3247 147.792L32.9208 150.444ZM99.4108 58.4254C87.2518 55.7441 76.9054 63.2052 69.139 75.4247C61.3454 87.6869 55.8269 105.164 53.2636 123.73C50.6985 142.309 51.0724 162.122 55.182 179.104C59.2831 196.051 67.1707 210.424 79.8457 217.723L81.3428 215.123C69.6895 208.413 62.1096 194.976 58.0978 178.398C54.0945 161.856 53.7102 142.43 56.2354 124.14C58.7625 105.837 64.183 88.8151 71.6708 77.034C79.1858 65.2101 88.4635 59.0834 98.7648 61.355L99.4108 58.4254ZM79.8457 217.723C92.2336 224.856 105.224 228.157 118.031 230.077C124.432 231.037 130.804 231.653 137.031 232.226C143.271 232.799 149.354 233.328 155.239 234.112C167.013 235.681 177.825 238.254 187.134 244.108C196.405 249.938 204.313 259.105 210.125 274.094L212.922 273.01C206.911 257.507 198.623 247.789 188.731 241.568C178.876 235.371 167.556 232.727 155.636 231.139C149.674 230.344 143.519 229.809 137.306 229.238C131.079 228.666 124.783 228.056 118.476 227.11C105.867 225.22 93.2832 221.999 81.3428 215.123L79.8457 217.723Z" />
      </svg>
    </div>
  </section>
  <div class="w-full my-40"></div>
  <section>
    <div class="flex flex-col items-center gap-5">
      <svg width="51" height="67" viewBox="0 0 51 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.28504 16.2848L41.3952 16.2848L25.3401 44.093L9.28504 16.2848Z" fill="#046BEC"/>
        <path opacity="0.5" d="M9.28504 32.0543L41.3952 32.0543L25.3401 59.8625L9.28504 32.0543Z" fill="#046BEC"/>
      </svg>
      <h4 class="font-extrabold text-4xl">پرفروش ترین ها</h4>
    </div>
    <div class="container mx-auto grid xl:grid-cols-2 gap-8 2xl:gap-16 mt-20">
      <div class="relative" v-for="i in 2">
          <img src="~/assets/images/img_6.png" alt="course1" class="rounded-2xl border border-white/20 aspect-video object-cover">
          <div class="absolute inset-x-4 bottom-4 flex items-center px-4 py-2 rounded-lg border border-white/20 backdrop-blur bg-black/30 gap-5">
            <img src="~/assets/images/avatar.png" alt="avatar" class="rounded-2xl max-w-[50px] 2xl:max-w-[80px]">
            <div class="flex-1 flex items-center gap-5">
              <div class="flex-1 flex items-center justify-between">
                <div class="flex flex-col gap-2">
                  <NuxtLink>
                    <strong class="xl:text-xl">دوره جامع آنریل انجین</strong>
                  </NuxtLink>
                  <div class="flex items-center gap-4 opacity-80 text-xs 2xl:text-sm">
                    <NuxtLink>
                      سجاد میرشبی
                    </NuxtLink>
                    <div class="h-4 w-px bg-white opacity-30 rounded-full"></div>
                    <span>8 جلسه</span>
                    <div class="h-4 w-px bg-white opacity-30 rounded-full"></div>
                    <span>24 ساعت آموزش</span>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <span class="font-extrabold text-lg 2xl:text-xl">499,000</span>
                  <span class="text-[10px] font-light leading-[0.8]">تـــــو <br> مان</span>
                </div>
              </div>
              <button class="px-5 py-2 bg-[#046BEC] rounded-lg text-sm 2xl:text-base">
                شروع
              </button>
            </div>
          </div>
      </div>
    </div>
  </section>
  <div class="border-t opacity-10 border-dashed w-full my-20"></div>
  <section>
    <div class="container mx-auto flex flex-col gap-10">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10">
          <svg width="51" height="38" viewBox="0 0 51 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8008 19.3401L41.609 3.28499V35.3952L13.8008 19.3401Z" fill="#046BEC"/>
            <path opacity="0.5" d="M0 19.3401L27.8082 3.28499L27.8082 35.3952L0 19.3401Z" fill="#046BEC"/>
          </svg>
          <h4 class="font-extrabold text-4xl">آخرین دوره ها</h4>
        </div>
        <button class="relative hidden md:flex items-center justify-center">
          <svg width="217" height="66" viewBox="0 0 217 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#141A2B"/>
          </svg>
          <span class="absolute">مشاهده همه</span>
        </button>
      </div>

      <div class="w-4/5 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div class="relative flex flex-col bg-[#080F1F] border border-white/20 rounded-xl" v-for="i in 6" :key="i">
          <NuxtLink to="/">
            <img src="~/assets/images/img_6.png" alt="banner" class="aspect-video object-cover w-full rounded-t-3xl h-full">
          </NuxtLink>
          <div class="flex py-4 px-6 flex-col gap-3">
            <div class="flex flex-col">
              <NuxtLink class="font-extrabold text-xl">
                دوره آموزش ++C در آنریل انجین
              </NuxtLink>
            </div>
            <p class="opacity-70 font-light text-sm">
              دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-1">
                  <svg class="w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                      <path d="M8.00008 7.99967C9.84103 7.99967 11.3334 6.50729 11.3334 4.66634C11.3334 2.82539 9.84103 1.33301 8.00008 1.33301C6.15913 1.33301 4.66675 2.82539 4.66675 4.66634C4.66675 6.50729 6.15913 7.99967 8.00008 7.99967Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span class="text-xs">سجاد میرشبی</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-4" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 6C11.5 8.76 9.26 11 6.5 11C3.74 11 1.5 8.76 1.5 6C1.5 3.24 3.74 1 6.5 1C9.26 1 11.5 3.24 11.5 6Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.35494 7.59085L6.80494 6.66585C6.53494 6.50585 6.31494 6.12085 6.31494 5.80585V3.75586" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs">02:22:45</span>
                </div>
              </div>
              <div class="bg-[#046BEC] flex items-center px-2 py-1 rounded-lg text-xs font-light absolute left-4 top-4">
                <span class="translate-y-0.5">20%</span>
              </div>
              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1 opacity-50">
                  <span class="font-light text-sm line-through">599,000</span>
                  <span class="text-[10px] font-light opacity-0 leading-[0.8]">تـــــو <br> مان</span>
                </div>
                <div class="flex items-center gap-1">
                  <span class="font-extrabold text-xl">499,000</span>
                  <span class="text-[10px] font-light leading-[0.8]">تـــــو <br> مان</span>
                </div>
              </div>
            </div>
          </div>
          <hr class="opacity-20">
          <NuxtLink to="/" class="flex items-center gap-2 text-[#046BEC] py-4 justify-center hover:text-white transition-colors duration-300">
            <span>مشاهده دوره</span>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
              <path d="M8.99984 16.9201L2.47984 10.4001C1.70984 9.63008 1.70984 8.37008 2.47984 7.60008L8.99984 1.08008" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="my-[200px]">
    <div class="container mx-auto">
      <div class="relative overflow-visible w-full px-14 py-12 flex flex-col gap-7 bg-gradient-to-r from-[#090D16] to-[#111723] rounded-3xl border border-white/10">
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
          <span class="text-base md:text-xl lg:text-4xl font-bold opacity-80">تدریس خصوصی در یولرنیــــت</span>
        </div>
        <p class="md:w-[60%] lg:w-[75%] 2xl:w-[80%] text-[10px] md:text-sm lg:text-xl opacity-60">
          تدریس در یولرنیت به دانش و تخصص شما دایره اثری به وسعت کل کشور می‌بخشد. دانش و تجربه‌ای که تاکنون محدود به زمان و جغرافیا بود، در یولرنیت اوج گرفته و فارغ از هر گونه مرزی می‌شود. تدریس در یولرنیت ، تدریس برای آرمان «دانش بدون مرز» است.
        </p>
        <button class="bg-[#402EBD] text-white text-sm md:text-base 2xl:text-2xl py-2 px-6 w-max rounded-xl" style="box-shadow: 0 0 15px 0 rgba(64,46,189,0.5)">
          شروع تدریس
        </button>
        <img src="~/assets/images/private-teaching.png" alt="private teaching" class="hidden md:block absolute md:left-0 lg:left-8 bottom-0 w-1/2 xl:max-w-[350px]">
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto flex flex-col gap-10">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-10">
          <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.800781 16.3401L28.609 0.284988L28.609 32.3952L0.800781 16.3401Z" fill="#046BEC"/>
          </svg>
          <h4 class="text-4xl">آخرین مقالات</h4>
        </div>
        <button class="relative hidden md:flex items-center justify-center">
          <svg width="217" height="66" viewBox="0 0 217 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#141A2B"/>
          </svg>
          <span class="absolute">مشاهده همه</span>
        </button>
      </div>
      <div class="grid lg:grid-cols-4 gap-6">
        <div class="flex items-end col-span-2 row-span-2 relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[580px]">
          <div class="flex flex-col z-[2] w-full p-8 space-y-5">
            <NuxtLink class="lg:text-3xl font-extrabold">
              کنکور را خراب کردم، چیکار کنم؟
            </NuxtLink>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <NuxtLink class="flex items-center gap-2">
                  <img src="~/assets/images/avatar.png" alt="writer avatar" class="w-8 h-8 rounded-full object-cover">
                  <span>پشتیبانی یولرنیت</span>
                </NuxtLink>
                <button class="flex items-center gap-2 px-2 py-1 bg-[#FF3F3F]/40 rounded-md text-[#FF6F6F]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.434 13.9393C8.196 14.0202 7.804 14.0202 7.566 13.9393C5.536 13.2719 1 10.4876 1 5.76854C1 3.68539 2.743 2 4.892 2C6.166 2 7.293 2.59326 8 3.51011C8.707 2.59326 9.841 2 11.108 2C13.257 2 15 3.68539 15 5.76854C15 10.4876 10.464 13.2719 8.434 13.9393Z" stroke="#FF6F6F" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs">4</span>
                </button>
                <div class="flex items-center gap-2 px-2 py-1 bg-[#3A6763]/40 rounded-md text-white">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33333 12.3333H5C2.33333 12.3333 1 11.6667 1 8.33333V5C1 2.33333 2.33333 1 5 1H10.3333C13 1 14.3333 2.33333 14.3333 5V8.33333C14.3333 11 13 12.3333 10.3333 12.3333H10C9.79333 12.3333 9.59333 12.4333 9.46667 12.6L8.46667 13.9333C8.02667 14.52 7.30667 14.52 6.86667 13.9333L5.86667 12.6C5.76 12.4533 5.51333 12.3333 5.33333 12.3333Z" stroke="#79DFD6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.33301 5H10.9997" stroke="#79DFD6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.33301 8.33203H8.33301" stroke="#79DFD6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs">2</span>
                </div>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 rounded-md bg-[#FAFAFA]/10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M13.8332 8.83333C13.8332 12.0533 11.2198 14.6667 7.99984 14.6667C4.77984 14.6667 2.1665 12.0533 2.1665 8.83333C2.1665 5.61333 4.77984 3 7.99984 3C11.2198 3 13.8332 5.61333 13.8332 8.83333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 5.33398V8.66732" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 1.33398H10" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <span class="text-xs opacity-70">زمان مطالعه: 11 دقیقه</span>
              </div>
            </div>
          </div>
          <img src="~/assets/images/blog-banner.png" alt="blog banner" class="absolute z-0 inset-0 w-full h-full object-cover">
          <div class="absolute z-[1] bg-gradient-to-b from-black/0 from-50% to-black/50 inset-0"></div>
        </div>
        <div class="flex items-end relative rounded-2xl overflow-hidden" v-for="i in 3">
          <div class="flex flex-col z-[2] w-full p-3 2xl:p-6 space-y-3">
            <NuxtLink class="font-bold text-sm 2xl:text-base">
              کنکور را خراب کردم، چیکار کنم؟
            </NuxtLink>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <NuxtLink class="flex items-center gap-1">
                  <img src="~/assets/images/avatar.png" alt="writer avatar" class="w-6 h-6 rounded-full object-cover">
                  <span class="2xl:text-[10px]">پشتیبانی یولرنیت</span>
                </NuxtLink>
                <button class="flex items-center gap-1 2xl:gap-2 px-1 2xl:px-2 py-0.5 2xl:py-1 bg-[#FF3F3F]/40 rounded-sm 2xl:rounded-md text-[#FF6F6F]">
                  <svg class="w-2 2xl:w-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.434 13.9393C8.196 14.0202 7.804 14.0202 7.566 13.9393C5.536 13.2719 1 10.4876 1 5.76854C1 3.68539 2.743 2 4.892 2C6.166 2 7.293 2.59326 8 3.51011C8.707 2.59326 9.841 2 11.108 2C13.257 2 15 3.68539 15 5.76854C15 10.4876 10.464 13.2719 8.434 13.9393Z" stroke="#FF6F6F" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="2xl:text-[10px]">4</span>
                </button>
                <div class="flex items-center gap-1 2xl:gap-2 px-1 2xl:px-2 py-0.5 2xl:py-1 bg-[#3A6763]/40 rounded-md 2xl:rounded-md text-white">
                  <svg class="w-2 2xl:w-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33333 12.3333H5C2.33333 12.3333 1 11.6667 1 8.33333V5C1 2.33333 2.33333 1 5 1H10.3333C13 1 14.3333 2.33333 14.3333 5V8.33333C14.3333 11 13 12.3333 10.3333 12.3333H10C9.79333 12.3333 9.59333 12.4333 9.46667 12.6L8.46667 13.9333C8.02667 14.52 7.30667 14.52 6.86667 13.9333L5.86667 12.6C5.76 12.4533 5.51333 12.3333 5.33333 12.3333Z" stroke="#79DFD6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.33301 5H10.9997" stroke="#79DFD6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.33301 8.33203H8.33301" stroke="#79DFD6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-[8px] 2xl:text-[10px]">2</span>
                </div>
              </div>
              <div class="flex items-center gap-1 px-2 py-1 rounded-md bg-[#FAFAFA]/10">
                <svg class="w-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M13.8332 8.83333C13.8332 12.0533 11.2198 14.6667 7.99984 14.6667C4.77984 14.6667 2.1665 12.0533 2.1665 8.83333C2.1665 5.61333 4.77984 3 7.99984 3C11.2198 3 13.8332 5.61333 13.8332 8.83333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 5.33398V8.66732" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 1.33398H10" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <span class="text-[10px]">11 دقیقه</span>
              </div>
            </div>
          </div>
          <img src="~/assets/images/blog-banner.png" alt="blog banner" class="absolute z-0 inset-0 w-full h-full object-cover">
          <div class="absolute z-[1] bg-gradient-to-b from-black/0 from-50% to-black/50 inset-0"></div>
        </div>
        <div class="flex items-center justify-center">
          <NuxtLink class="flex items-center gap-2">
            <span>مشاهده همه مقالات</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="my-52">
    <div class="container mx-auto h-[170px] bg-gradient-to-r from-[#FF03D1] to-[#FF5900] flex items-center rounded-3xl ">
      <div class="w-full flex items-center relative justify-between px-10">
        <img src="~/assets/images/insta.png" alt="instagram" class="absolute right-10 -bottom-1/2 w-[250px]">
        <div class="flex flex-col mr-[400px] space-y-3">
          <span class="text-4xl font-black">یولرنیت رو در اینستاگرام دنبال کنید!</span>
          <span class="text-2xl">کلی پست و مطالب جالب و نکات آموزنده هم اونجا قرار میدیم!</span>
        </div>
        <button class="bg-white px-10 py-3 rounded-lg text-black flex items-center gap-2">
          <span class="text-xl">اینستاگرام یولرنیت</span>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 20.4201L8.47984 13.9001C7.70984 13.1301 7.70984 11.8701 8.47984 11.1001L14.9998 4.58008" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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