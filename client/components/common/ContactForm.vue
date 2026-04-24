<template>
  <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
        <Icon name="ph:paper-plane-tilt" class="w-5 h-5 text-primary-600" />
      </div>
      <h3 class="text-xl font-bold text-gray-900">{{ locale === 'ja' ? 'オンライン相談' : '在线咨询' }}</h3>
    </div>

    <form @submit.prevent="submitForm" class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? 'お名前 *' : '姓名 *' }}</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
            :placeholder="locale === 'ja' ? 'お名前を入力してください' : '请输入您的姓名'"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? '会社名' : '公司' }}</label>
          <input
            v-model="form.company"
            type="text"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
            :placeholder="locale === 'ja' ? '会社名を入力してください' : '请输入公司名称'"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? 'メールアドレス *' : '邮箱 *' }}</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
            :placeholder="locale === 'ja' ? 'メールアドレスを入力してください' : '请输入邮箱地址'"
          />
        </div>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? '電話番号' : '电话' }}</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
            :placeholder="locale === 'ja' ? '電話番号を入力してください' : '请输入联系电话'"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? 'お問い合わせ内容 *' : '咨询内容 *' }}</label>
        <textarea
          v-model="form.message"
          required
          rows="4"
          class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
          :placeholder="locale === 'ja' ? 'お問い合わせ内容をご入力ください' : '请输入您想咨询的内容'"
        ></textarea>
      </div>

      <!-- Source Selection -->
      <div class="space-y-3">
        <label class="block text-sm font-medium text-gray-700">{{ locale === 'ja' ? 'どこで私たちを知りましたか？' : '您从哪里了解到我们？' }}</label>
        <select
          v-model="form.source"
          class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
        >
          <option value="" disabled>{{ locale === 'ja' ? '選択してください' : '请选择' }}</option>
          <option v-for="option in sourceOptions" :key="option.value" :value="option.value">{{ locale === 'ja' ? option.labelJa : option.label }}</option>
        </select>
        <!-- Other source input -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="form.source === 'other'" class="mt-3">
            <input
              v-model="form.sourceOther"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
              :placeholder="locale === 'ja' ? 'その他の渠道をご入力ください' : '请输入其他渠道'"
            />
          </div>
        </Transition>
      </div>

      <!-- Success Message -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <div v-if="successMessage" class="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
          <Icon name="ph:check-circle" class="w-5 h-5 text-green-500" />
          {{ successMessage }}
        </div>
      </Transition>

      <!-- Error Message -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
          <Icon name="ph:warning-circle" class="w-5 h-5 text-red-500" />
          {{ errorMessage }}
        </div>
      </Transition>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full btn-primary group"
      >
        <Icon v-if="submitting" name="ph:circle-notch" class="w-5 h-5 animate-spin mr-2" />
        <span>{{ submitting ? (locale === 'ja' ? '送信中...' : '提交中...') : (locale === 'ja' ? 'お問い合わせを送信' : '提交咨询') }}</span>
        <Icon v-if="!submitting" name="ph:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocale()
const { submitContact } = useStrapi()

const sourceOptions = [
  { value: 'qq', label: 'QQ', labelJa: 'QQ' },
  { value: 'wechat', label: '微信公众号', labelJa: '微信公眾號' },
  { value: 'friend', label: '朋友推荐', labelJa: '友人紹介' },
  { value: 'search', label: '搜索引擎', labelJa: '検索エンジン' },
  { value: 'other', label: '其他', labelJa: 'その他' },
]

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  source: '',
  sourceOther: '',
})

const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  submitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // Process source: combine with "other" text if provided
    let sourceValue = form.source
    if (form.source === 'other' && form.sourceOther.trim()) {
      sourceValue += `: ${form.sourceOther.trim()}`
    }

    await submitContact({
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      message: form.message,
      source: sourceValue,
      status: 'new',
    })
    successMessage.value = locale.value === 'ja' ? '送信成功！すぐにご連絡いたします。' : '提交成功！我们会尽快与您联系。'
    // Reset form
    Object.assign(form, {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      source: '',
      sourceOther: '',
    })
  } catch (error) {
    errorMessage.value = locale.value === 'ja' ? '送信失敗。後でもう一度お試しいただくか、お電話でお联系我们ください。' : '提交失败，请稍后重试或通过电话联系我们。'
  } finally {
    submitting.value = false
  }
}
</script>