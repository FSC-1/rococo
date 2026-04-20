export const useStrapi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.strapiUrl || 'http://localhost:1337'

  // Mock data for static generation without backend
  const mockConfig = {
    heroTitle: '我们的努力都是为了让数字化，更容易',
  }

  const mockNews = [
    { id: 1, title: '乐科科与某知名企业达成战略合作', date: '2024-01-15', excerpt: '近日，乐科科与某知名企业签署战略合作协议，共同推进企业数字化转型进程。' },
    { id: 2, title: '低代码平台新版本发布', date: '2024-01-10', excerpt: '乐科科低代码平台v2.0正式发布，带来更强大的功能和更好的用户体验。' },
    { id: 3, title: '成功案例分享：某制造企业数字化转型', date: '2024-01-05', excerpt: '通过乐科科的数字化转型解决方案，某制造企业效率提升40%。' },
  ]

  const mockCaseStudies = [
    { id: 1, title: '某知名制造企业数字化转型案例', industry: '制造业' },
    { id: 2, title: '某大型零售企业电商平台建设', industry: '零售业' },
    { id: 3, title: '某科技公司管理系统开发', industry: '科技业' },
  ]

  // 获取网站配置
  const fetchConfig = async () => {
    try {
      return await $fetch(`${baseURL}/api/config?populate=*`)
    } catch {
      // Return mock data when Strapi is not available
      return { data: mockConfig }
    }
  }

  // 提交联系我们表单
  const submitContact = async (data: Record<string, any>) => {
    try {
      return await $fetch(`${baseURL}/api/contacts`, {
        method: 'POST',
        body: { data },
      })
    } catch {
      // Return success for static build
      return { success: true }
    }
  }

  // 获取新闻列表
  const fetchNews = async (params: Record<string, any> = {}) => {
    try {
      return await $fetch(`${baseURL}/api/stories`, {
        params: {
          'filters[isPublished][$eq]': true,
          'pagination[page]': params.page || 1,
          'pagination[pageSize]': params.pageSize || 6,
          'sort': 'createdAt:desc',
          ...params.filters,
        },
      })
    } catch {
      // Return mock data when Strapi is not available
      return { data: mockNews }
    }
  }

  // 获取单条新闻
  const fetchNewsById = async (id: number | string) => {
    try {
      return await $fetch(`${baseURL}/api/stories/${id}`, {
        params: { populate: '*' },
      })
    } catch {
      return { data: mockNews.find(n => n.id === Number(id)) || null }
    }
  }

  // 获取案例列表
  const fetchCaseStudies = async (params: Record<string, any> = {}) => {
    try {
      return await $fetch(`${baseURL}/api/case-studies`, {
        params: {
          'filters[isPublished][$eq]': true,
          'pagination[page]': params.page || 1,
          'pagination[pageSize]': params.pageSize || 10,
          'sort': 'sortOrder:asc',
          ...params.filters,
        },
      })
    } catch {
      return { data: mockCaseStudies }
    }
  }

  // 获取单条案例
  const fetchCaseStudyById = async (id: number | string) => {
    try {
      return await $fetch(`${baseURL}/api/case-studies/${id}`, {
        params: { populate: '*' },
      })
    } catch {
      return { data: mockCaseStudies.find(c => c.id === Number(id)) || null }
    }
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