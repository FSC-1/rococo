import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application gets registered.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // 设置公开角色的权限
    await setupPublicPermissions(strapi);

    // 填充初始数据
    await seedData(strapi);
  },
};

async function setupPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    const permissionsToGrant = [
      // News - 公开读取
      { action: 'api::story.story.find', role: publicRole.id },
      { action: 'api::story.story.findOne', role: publicRole.id },
      // Case Studies - 公开读取
      { action: 'api::case-study.case-study.find', role: publicRole.id },
      { action: 'api::case-study.case-study.findOne', role: publicRole.id },
      // Config - 公开读取
      { action: 'api::config.config.find', role: publicRole.id },
      { action: 'api::config.config.findOne', role: publicRole.id },
      // Contact - 公开创建（提交表单）
      { action: 'api::contact.contact.create', role: publicRole.id },
    ];

    for (const perm of permissionsToGrant) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action: perm.action, role: perm.role } });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: perm.action,
            role: perm.role,
            enabled: true,
          },
        });
      } else if (!existing.enabled) {
        await strapi.query('plugin::users-permissions.permission').update({
          where: { id: existing.id },
          data: { enabled: true },
        });
      }
    }

    strapi.log.info('Public permissions configured successfully');
  }
}

async function seedData(strapi: Core.Strapi) {
  // 检查网站配置是否已存在
  const existingConfig = await strapi.query('api::config.config').findMany({});
  if (existingConfig.length === 0) {
    // 1. 创建网站配置 (single type 使用 create)
    await strapi.query('api::config.config').create({
      data: {
        companyName: '宁波乐科科信息技术有限公司',
        companyAddress: '宁波市鄞州区天童北路933号和邦大厦A1802室',
        companyPhone: '0574-28860655',
        companyEmail: 'nb_sales@rococo.co.jp',
        icpNumber: '浙ICP备10037731号-5',
        copyright: '© 宁波乐科科信息技术有限公司',
        heroTitle: '我们的追求是让信息化切实助力企业发展',
        heroSubtitle: '我们的努力都是为了让信息化，更容易',
      },
    });
    strapi.log.info('Config seeded');
  } else {
    strapi.log.info('Config already exists, skipping...');
  }

  // 2. 检查新闻是否已存在
  const existingNews = await strapi.query('api::story.story').findMany({});
  if (existingNews.length === 0) {
    const newsData = [
      {
        title: 'Rococo集团东京证券交易所挂牌上市',
        summary: '2023年12月，株式会社Rococo在东京证券交易所标准板块成功上市，标志着企业发展迈入新阶段。',
        content: 'Rococo集团创立于1994年，是一家以"心"为核心理念的日本IT服务企业。公司于2023年12月在东京证券交易所标准板块成功上市，这是企业发展历程中的重要里程碑。',
        category: 'news',
        source: '乐科科官微',
        author: '市场部',
        isPublished: true,
      },
      {
        title: '乐科科获得"技术先进性企业"称号',
        summary: '2024年12月，公司凭借在数字化转型领域的突出贡献，荣获"技术先进性企业"称号。',
        content: '经过严格评审，我司在技术创新、研发投入、成果转化等方面表现突出，被认定为"技术先进性企业"。这一荣誉是对公司技术实力的充分肯定。',
        category: 'news',
        source: '乐科科官微',
        author: '技术部',
        isPublished: true,
      },
      {
        title: 'HR++人事管理系统新版本发布',
        summary: '全新版本HR++系统带来更智能的考勤管理和更流畅的用户体验。',
        content: 'HR++人事管理系统新版本正式发布，本次更新包括：智能考勤算法优化、薪资计算逻辑增强、移动端体验提升等多个功能改进。',
        category: 'news',
        source: '产品部',
        author: '产品部',
        isPublished: true,
      },
      {
        title: '关于2025年元旦放假安排的通知',
        summary: '根据国家法定节假日规定，我司2025年元旦放假安排如下。',
        content: '各部门同事：\n\n2025年元旦假期为1月1日（周三），共1天。请各部门提前做好工作安排。\n\n放假期间如有紧急事项，请联系各值班负责人。\n\n祝大家节日快乐！',
        category: 'notice',
        source: '行政部',
        author: '行政部',
        isPublished: true,
      },
      {
        title: 'ServiceNow项目实施方法论分享',
        summary: '我司ServiceNow团队分享8年项目实施经验，总结出一套完整的实施方法论。',
        content: '本文档总结了乐科科中国ServiceNow团队在多年项目实施中积累的经验和方法论，涵盖需求调研、方案设计、开发实施、验收交付等全流程。',
        category: 'news',
        source: '技术部',
        author: 'ServiceNow团队',
        isPublished: true,
      },
      {
        title: '数字化转型白皮书发布',
        summary: '我司发布《企业数字化转型实战指南》，为客户提供专业的数字化转型参考。',
        content: '《企业数字化转型实战指南》汇集了我司在数字化转型领域的多年的实践经验，从战略规划到落地实施，为企业提供全方位的指导。',
        category: 'news',
        source: '咨询部',
        author: '咨询部',
        isPublished: true,
      },
    ];

    for (const news of newsData) {
      await strapi.query('api::story.story').create({ data: news });
    }
    strapi.log.info('News seeded');
  } else {
    strapi.log.info('News already exists, skipping...');
  }

  // 3. 检查案例是否已存在
  const existingCases = await strapi.query('api::case-study.case-study').findMany({});
  if (existingCases.length === 0) {
    const caseStudyData = [
      {
        title: 'ESG平台建设案例',
        slug: 'esg-platform',
        category: 'esg',
        clientName: '某大型制造企业',
        summary: '帮助企业构建全面的ESG管理体系，实现环境、社会和治理数据的统一管理和报表自动化。',
        content: '项目背景：该企业需要建立完善的ESG管理体系，涵盖碳排放监测、供应链管理、社会责任追踪等多个维度。\n\n解决方案：基于ServiceNow平台构建企业级ESG管理平台，实现数据采集自动化、报表生成智能化。\n\n项目成果：ESG评级提升2个等级，报表生成效率提升80%。',
        isPublished: true,
        sortOrder: 1,
      },
      {
        title: '对日开发 - 竞马业务系统',
        slug: 'jingma-system',
        category: 'japan-dev',
        clientName: '竞马贸易（上海）有限公司',
        summary: '为日本客户提供全流程日语支持的贸易管理系统开发服务。',
        content: '项目背景：竞马贸易需要一套支持多语言、多币种的贸易管理系统。\n\n解决方案：采用敏捷开发方法，全程日语沟通，交付符合日本市场标准的业务系统。\n\n项目成果：系统运行稳定，获得客户高度评价，建立了长期合作关系。',
        isPublished: true,
        sortOrder: 2,
      },
      {
        title: 'ServiceNow HRSD決裁システム',
        slug: 'servicenow-hrsd',
        category: 'servicenow',
        clientName: '某日资通信企业',
        summary: '基于ServiceNow HRSD构建的智能化人事审批系统。',
        content: '项目概述：构建一套支持多语言、多流程的人事审批系统，实现请假、加班、出差等日常审批流程的线上化。\n\n技术架构：ServiceNow HRSD + Custom App Engine\n\n项目成果：审批效率提升60%，员工满意度显著提高。',
        isPublished: true,
        sortOrder: 3,
      },
      {
        title: 'Power Platform 业务流程自动化',
        slug: 'power-platform-automation',
        category: 'power-platform',
        clientName: '某外资制造企业',
        summary: '利用Power Apps和Power Automate实现核心业务流程的自动化。',
        content: '客户需求：需要将多个分散的业务系统进行整合，实现流程自动化。\n\n解决方案：基于Power Platform构建企业级应用门户，实现跨系统数据对接和流程自动化。\n\n项目成果：人工处理时间减少70%，数据准确性提升至99.5%。',
        isPublished: true,
        sortOrder: 4,
      },
      {
        title: 'IT咨询 - 数字化转型规划',
        slug: 'it-consulting-dx',
        category: 'digital',
        clientName: '某中型制造企业',
        summary: '提供从现状诊断到路线图制定的全程DX咨询服务。',
        content: '服务内容：\n1. 企业数字化现状诊断\n2. 数字化能力评估\n3. 3年数字化路线图制定\n4. 供应商选定支援\n5. 项目管理咨询\n\n项目成果：企业成功建立数字化转型框架，明确了优先实施项目。',
        isPublished: true,
        sortOrder: 5,
      },
      {
        title: '旧系统重构 - ERP升级项目',
        slug: 'erp-upgrade',
        category: 'digital',
        clientName: '某上市公司',
        summary: '将运行15年的旧版ERP系统平滑升级到新平台。',
        content: '项目挑战：旧系统运行超过15年，数据量庞大，业务依赖度高，不能长时间停机。\n\n解决方案：采用分阶段迁移策略，先并行运行再逐步切换，确保业务连续性。\n\n项目成果：零停机迁移，迁移数据超过500万条，用户培训时间缩短50%。',
        isPublished: true,
        sortOrder: 6,
      },
    ];

    for (const cs of caseStudyData) {
      await strapi.query('api::case-study.case-study').create({ data: cs });
    }
    strapi.log.info('Case studies seeded');
  } else {
    strapi.log.info('Case studies already exist, skipping...');
  }

  strapi.log.info('All seed data completed!');
}
