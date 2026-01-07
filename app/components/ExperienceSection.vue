<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <p class="section-subtitle">{{ $t('experience.subtitle') }}</p>
      </div>
      
      <div class="timeline">
        <div 
          v-for="(job, index) in jobs" 
          :key="index" 
          class="timeline-item"
        >
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div class="marker-line" v-if="index < jobs.length - 1"></div>
          </div>
          
          <div class="timeline-content">
            <div class="job-header">
              <div class="job-info">
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="job-company">{{ job.company }}</p>
              </div>
              <span class="job-period">{{ job.period }}</span>
            </div>
            
            <p class="job-description">{{ job.description }}</p>
            
            <ul class="job-achievements">
              <li v-for="(achievement, i) in job.achievements" :key="i" class="achievement-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 学历背景 -->
      <div class="education-section">
        <h3 class="education-title">{{ $t('experience.education_title') }}</h3>
        <div class="education-list">
          <div 
            v-for="(edu, index) in education" 
            :key="index" 
            class="education-item"
          >
            <div class="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div class="education-content">
              <h4 class="education-school">{{ edu.school }}</h4>
              <p class="education-major">{{ edu.major }} · {{ edu.degree }}</p>
              <span class="education-period">{{ edu.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const jobsData = {
  zh: [
    {
      title: "应用开发工程师",
      company: "深圳市腾佳管理咨询有限公司（腾讯全资子公司）",
      period: "2021.07 - 至今",
      description: "招聘领域IT解决方案后端开发，支持腾讯生态公司招聘系统与招聘能力中台建设。",
      achievements: [
        "负责招聘流程、待办、消息中心、数据看板等核心模块开发，系统支持高并发访问与复杂业务逻辑",
        "主导能力中台（背调/笔试考试/心理测评）建设，通过灵活的系统设计提升系统复用性与扩展性",
        "设计并封装 Spring Pulsar Starter，统一消息中间件使用规范，已在GitHub开源并推送至Maven中央仓库",
        "抽象数据权限、功能权限与敏感信息加解密脱敏组件，基于策略模式与AOP实现，已开源并组内推广",
        "实现AI查询脚本生成器，结合大模型将自然语言查询转换为SQL，获组内创新奖",
        "设计可扩展的第三方招聘网站对接模块，通过设计模式解耦不同平台接口差异，支持失败重试与统一接入"
      ]
    },
    {
      title: "后台总监",
      company: "立富科技（深圳）有限公司",
      period: "2020.02 - 2021.06",
      description: "金融量化交易系统研发，负责C端系统与数据中心技术架构与团队管理。",
      achievements: [
        "主导金融数据平台建设，对接多家数据供应商（恒生期指、沪港通、深股通、比特币等）",
        "实现高吞吐、低延迟的数据采集、清洗、存储与分发系统",
        "设计基于 Netty + Kafka + Disruptor 的高性能数据管道，支持实时数据流处理与多策略订阅",
        "推动系统架构向响应式（WebFlux）与事件驱动演进，提升系统并发能力与资源利用率"
      ]
    },
    {
      title: "创始人 & CEO",
      company: "深圳市薇抖软件有限公司",
      period: "2018.04 - 2020.02",
      description: "IT外包创业，负责技术架构、产品设计与团队管理，技术团队最多时12人。",
      achievements: [
        "从0到1打造多条业务线产品，包括本地生活、电商、SaaS（物业、教育、党建等）",
        "覆盖前端、后端与移动端全栈技术开发",
        "设计轻量级快速开发框架（JFinal + Flutter + Vue）与微服务架构方案（Spring Cloud）",
        "建立产品研发管理体系，推动敏捷流程与工程规范在团队落地"
      ]
    },
    {
      title: "早期经历",
      company: "残友软件 / 今朝科技",
      period: "2014.02 - 2018.03",
      description: "Java工程师 → 全栈工程师，负责企业ERP、O2O平台、政务系统等后端开发。",
      achievements: [
        "残友软件：开发干细胞存储O2O平台、音乐播放器APP、政府OA系统、核电厂火灾评定系统",
        "今朝科技：开发家政服务呼叫中心系统、本地信息分类网站及多个CMS系统",
        "技术栈涵盖 Spring Boot、MyBatis、Shiro、Elasticsearch、SSH等"
      ]
    }
  ],
  en: [
    {
      title: "Application Developer",
      company: "Shenzhen Tengjia Management Consulting (Tencent Subsidiary)",
      period: "Jul 2021 - Present",
      description: "Backend development for recruitment IT solutions, supporting Tencent ecosystem recruitment system and capability platform.",
      achievements: [
        "Developed recruitment workflow, todo, message center, dashboard modules with high-concurrency support",
        "Led capability platform (background check/exam/assessment) construction with flexible system design",
        "Designed and open-sourced Spring Pulsar Starter, published to Maven Central Repository",
        "Abstracted data permission and encryption/desensitization components using Strategy Pattern and AOP",
        "Implemented AI query script generator combining LLM with natural language to SQL conversion",
        "Designed extensible third-party recruitment platform integration module with retry and unified access"
      ]
    },
    {
      title: "Backend Director",
      company: "Lifu Technology (Shenzhen) Co., Ltd.",
      period: "Feb 2020 - Jun 2021",
      description: "Financial quantitative trading system R&D, responsible for C-end system and data center architecture.",
      achievements: [
        "Led financial data platform construction, integrating multiple data vendors (HSI futures, Stock Connect, Bitcoin)",
        "Implemented high-throughput, low-latency data collection, cleaning, storage and distribution system",
        "Designed high-performance data pipeline based on Netty + Kafka + Disruptor for real-time streaming",
        "Drove system architecture evolution towards reactive (WebFlux) and event-driven patterns"
      ]
    },
    {
      title: "Founder & CEO",
      company: "Shenzhen Weidou Software Co., Ltd.",
      period: "Apr 2018 - Feb 2020",
      description: "IT outsourcing startup, responsible for technical architecture, product design and team management.",
      achievements: [
        "Built multiple product lines from 0 to 1: local services, e-commerce, SaaS (property, education, party building)",
        "Full-stack development covering frontend, backend and mobile technologies",
        "Designed lightweight rapid development framework (JFinal + Flutter + Vue) and microservices architecture",
        "Established product R&D management system, implementing agile processes and engineering standards"
      ]
    },
    {
      title: "Early Career",
      company: "Canyou Software / Jinzhao Technology",
      period: "Feb 2014 - Mar 2018",
      description: "Java Engineer → Full Stack Engineer, responsible for enterprise ERP, O2O platform, government systems.",
      achievements: [
        "Canyou: Developed stem cell storage O2O platform, music player APP, government OA, nuclear plant fire system",
        "Jinzhao: Developed housekeeping call center system, classified info website and multiple CMS systems",
        "Tech stack: Spring Boot, MyBatis, Shiro, Elasticsearch, SSH"
      ]
    }
  ]
}

const educationData = {
  zh: [
    { school: "山西医科大学", major: "应用心理学", degree: "硕士", period: "2011.09 - 2014.07" },
    { school: "长治医学院", major: "应用心理学", degree: "学士", period: "2007.09 - 2011.07" }
  ],
  en: [
    { school: "Shanxi Medical University", major: "Applied Psychology", degree: "Master's", period: "Sep 2011 - Jul 2014" },
    { school: "Changzhi Medical College", major: "Applied Psychology", degree: "Bachelor's", period: "Sep 2007 - Jul 2011" }
  ]
}

const jobs = computed(() => {
  return jobsData[locale.value as 'zh' | 'en'] || jobsData.zh
})

const education = computed(() => {
  return educationData[locale.value as 'zh' | 'en'] || educationData.zh
})
</script>

<style scoped>
.experience {
  background: var(--bg-secondary);
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: var(--space-xl);
  padding-bottom: var(--space-2xl);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(49, 130, 206, 0.2);
}

.marker-line {
  width: 2px;
  flex: 1;
  background: var(--gray-200);
  margin-top: var(--space-sm);
}

.timeline-content {
  flex: 1;
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.timeline-content:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-lg);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
  gap: var(--space-md);
}

.job-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.job-company {
  font-size: var(--text-base);
  color: var(--accent);
  font-weight: 500;
}

.job-period {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  background: var(--bg-secondary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.job-description {
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.7;
}

.job-achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

.achievement-item svg {
  flex-shrink: 0;
  color: var(--success);
  margin-top: 2px;
}

/* 学历模块样式 */
.education-section {
  max-width: 800px;
  margin: var(--space-3xl) auto 0;
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--gray-200);
}

.education-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: var(--space-xl);
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.education-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.education-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-lg);
}

.education-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.education-content {
  flex: 1;
}

.education-school {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.education-major {
  font-size: var(--text-base);
  color: var(--accent);
  font-weight: 500;
  margin-bottom: var(--space-sm);
}

.education-period {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  background: var(--bg-secondary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
  }
  
  .job-period {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .timeline-item {
    gap: var(--space-md);
  }
  
  .timeline-content {
    padding: var(--space-lg);
  }
}
</style>
