<template>
  <div class="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-6 md:p-8 border border-gray-100">
    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
        <Icon name="ph:chat-circle-text" class="w-5 h-5 text-primary-600" />
      </div>
      联系我们
    </h3>
    <div class="space-y-6">
      <div class="flex items-start group">
        <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover:bg-primary-50 group-hover:scale-105 transition-all duration-300">
          <Icon name="ph:map-pin" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <p class="font-semibold text-gray-900 mb-1">地址</p>
          <p class="text-gray-600">宁波市鄞州区天童北路933号<br/>和邦大厦A1802室</p>
        </div>
      </div>
      <div class="flex items-start group">
        <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover:bg-primary-50 group-hover:scale-105 transition-all duration-300">
          <Icon name="ph:phone" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <p class="font-semibold text-gray-900 mb-1">电话</p>
          <a href="tel:0574-28860655" class="text-primary-600 hover:text-primary-700 transition-colors">0574-28860655</a>
        </div>
      </div>
      <div class="flex items-start group">
        <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover:bg-primary-50 group-hover:scale-105 transition-all duration-300">
          <Icon name="ph:envelope" class="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <p class="font-semibold text-gray-900 mb-1">邮箱</p>
          <a href="mailto:nb_sales@rococo.co.jp" class="text-primary-600 hover:text-primary-700 transition-colors">nb_sales@rococo.co.jp</a>
        </div>
      </div>
    </div>
  </div>
</template>