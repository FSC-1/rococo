export const useStrapi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.strapiUrl || 'http://localhost:1337'

  // 获取网站配置
  const fetchConfig = async () => {
    return await $fetch(`${baseURL}/api/config?populate=*`)
  }

  // 提交联系我们表单
  const submitContact = async (data: Record<string, any>) => {
    return await $fetch(`${baseURL}/api/contacts`, {
      method: 'POST',
      body: { data },
    })
  }

  // 获取新闻列表
  const fetchNews = async (params: Record<string, any> = {}) => {
    return await $fetch(`${baseURL}/api/stories`, {
      params: {
        'filters[isPublished][$eq]': true,
        'pagination[page]': params.page || 1,
        'pagination[pageSize]': params.pageSize || 6,
        'sort': 'createdAt:desc',
        ...params.filters,
      },
    })
  }

  // 获取单条新闻
  const fetchNewsById = async (id: number | string) => {
    return await $fetch(`${baseURL}/api/stories/${id}`, {
      params: { populate: '*' },
    })
  }

  // 获取案例列表
  const fetchCaseStudies = async (params: Record<string, any> = {}) => {
    return await $fetch(`${baseURL}/api/case-studies`, {
      params: {
        'filters[isPublished][$eq]': true,
        'pagination[page]': params.page || 1,
        'pagination[pageSize]': params.pageSize || 10,
        'sort': 'sortOrder:asc',
        ...params.filters,
      },
    })
  }

  // 获取单条案例
  const fetchCaseStudyById = async (id: number | string) => {
    return await $fetch(`${baseURL}/api/case-studies/${id}`, {
      params: { populate: '*' },
    })
  }

  return {
    fetchNews,
    fetchNewsById,
    fetchCaseStudies,
    fetchCaseStudyById,
    fetchConfig,
    submitContact,
  }
}