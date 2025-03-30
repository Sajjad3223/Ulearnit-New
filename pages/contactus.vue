<template>
  <div class="my-20">
    <div class="flex flex-col items-center w-full gap-12">
      <h4 class="text-4xl font-bold">
        راه های <span class="text-primary">ارتـــباطی</span>
      </h4>
      <div class="container lg:w-1/2 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
        <div class="lg:w-1/2 flex flex-col bg-white rounded-2xl p-5 gap-8 items-center">
          <h2 class="text-xl lg:text-2xl text-black font-semibold">فرم تماس با ما</h2>
          <form action="" class="grid md:grid-cols-2 gap-4 w-full text-black">
            <input type="text" class="p-3 text-sm w-full rounded-md bg-black/5 focus:outline-black/10" placeholder="نام و نام خانوادگی">
            <input type="text" class="p-3 text-sm w-full rounded-md bg-black/5 focus:outline-black/10" placeholder="شماره تماس">
            <input type="text" class="p-3 text-sm w-full rounded-md bg-black/5 focus:outline-black/10 col-span-full" placeholder="موضوع">
            <textarea class="p-3 text-sm w-full rounded-md bg-black/5 focus:outline-black/10 col-span-full" placeholder="متن" rows="5"></textarea>
            <div class="col-span-full">
              <button class="bg-primary px-6 py-2 rounded-md text-white flex mr-auto">
                ارسال
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-col p-4 w-full lg:w-1/3 mx-auto gap-4">
          <div class="flex items-center justify-between">
            <span>ایمیل:</span>
            <span>info@ulearnit.ir</span>
          </div>
          <div class="flex items-center justify-between">
            <span>تلفن تماس:</span>
            <span>09154222478</span>
          </div>
          <div class="flex items-center justify-between">
            <span>تلگرام:</span>
            <span dir="ltr">@ulearnit_ir</span>
          </div>
          <div class="flex items-center justify-between">
            <span>اینستاگرام:</span>
            <span dir="ltr">@ulearnit_ir</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>