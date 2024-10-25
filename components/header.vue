<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <div class="flex mx-auto relative items-center
              2xl:h-40 xl:h-36 lg:h-32 md:h-28 sm:h-24 xsm:h-20 2xsm:h-20 3xsm:h-16 h-16
              2xl:top-12 xl:top-10 lg:top-10 md:top-10 sm:top-12 xsm:top-10 2xsm:top-10 3xsm:top-2 top-2
             " style="width: 75.75vw;">
    <a class="flex mx-auto font-relation relative" href="/">
      <h1 class ="flex mx-auto font-relation relative
                2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xsm:text-lg 2xsm:text-md 3xsm:text-[13px] text-xs
                2xl:bottom-14 xl:bottom-[50px] lg:bottom-[44px] md:bottom-[40px] sm:bottom-[34px] xsm:bottom-[29px] 2xsm:bottom-[29px] 3xsm:bottom-[25px] bottom-[25px]
               " style="color: rgb(130,130,130)">Boutique Travel Website
      </h1>
    </a>

      <a href="/faq" class=" absolute font-roboto tracking-wider cursor-pointer
                         2xl:text-lg xl:text-lg lg:text-[15px] md:text-[13px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[8px] 3xsm:text-[6px] text-[6.5px]
                         2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-0 xsm:top-0 2xsm:top-0 3xsm:top-0 top-0
                         2xl:left-0 xl:left-0 lg:left-0 md:left-0 sm:left-0 xsm:left-0 2xsm:left-0 3xsm:left-0 left-0
                        " style=" color: rgb(189,189,189)">FAQ</a>
      <a href="/sign-up" class=" absolute font-roboto tracking-wider cursor-pointer
                         2xl:text-lg xl:text-lg lg:text-[15px] md:text-[13px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[8px] 3xsm:text-[6px] text-[6.5px]
                         2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-0 xsm:top-0 2xsm:top-0 3xsm:top-3 top-3
                         2xl:right-28 xl:right-28 lg:right-28 md:right-20 sm:right-20 xsm:right-12 2xsm:right-12 3xsm:right-0 right-0
                        " style=" color: rgb(189,189,189)">SIGN UP</a>
      <a href="/my-cart" class=" absolute font-roboto tracking-wider cursor-pointer
                        2xl:text-lg xl:text-lg lg:text-[15px] md:text-[13px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[8px] 3xsm:text-[6px] text-[6.5px]
                        2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-0 xsm:top-0 2xsm:top-0 3xsm:top-0 top-0
                        2xl:right-0 xl:right-0 lg:right-0 md:right-0 sm:right-0 xsm:right-0 2xsm:right-0 3xsm:right-0 right-0
                        " style=" color: rgb(189,189,189)">MY CART</a>

    <div class="absolute grid bottom-0 grid-cols-8 text-center tracking-wider mx-auto " style="width: 75.75vw;">
      <a style="color: rgb(136,136,136)" href="/" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[9px] 2xsm:text-[7px] 3xsm:text-[5px] text-[5px]">HOME</a>
      <a style="color: rgb(136,136,136)" href="/menu/travel-single" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[9px] 2xsm:text-[7px] 3xsm:text-[5px] text-[5px]">TRAVEL</a>
      <a style="color: rgb(136,136,136)" href="/menu/life-style-main" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[9px] 2xsm:text-[7px] 3xsm:text-[5px] text-[5px]">LIFE STYLE</a>
      <a style="color: rgb(136,136,136)" href="/menu/soul" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[6px]  3xsm:text-[5px] text-[5px]">SOUL</a>
      <a style="color: rgb(136,136,136)" href="/menu/about" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[6px]  3xsm:text-[5px] text-[5px]">ABOUT</a>
      <a style="color: rgb(136,136,136)" href="/menu/review" class="text-start 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[6px]  3xsm:text-[5px] text-[5px]">REVIEW</a>
      <a style="color: rgb(136,136,136)" href="/menu/stories" class="text-center 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[6px]  3xsm:text-[5px] text-[5px]">STORIES</a>
      <a style="color: rgb(136,136,136)" href="/menu/contact" class="text-end  2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[10px] xsm:text-[8px] 2xsm:text-[6px]  3xsm:text-[5px] text-[5px]">CONTACT</a>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>