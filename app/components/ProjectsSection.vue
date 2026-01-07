<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projectItems" 
          :key="index" 
          class="project-card"
        >
          <div class="project-image">
            <div class="project-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div class="project-overlay">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {{ $t('projects.view_code') }}
              </a>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const projectsData = {
  zh: [
    {
      name: "seven-spring-mq-pulsar-starter",
      description: "功能丰富、易于使用的 Spring Boot Pulsar Starter，提供完整的 Pulsar 集成解决方案。",
      tech: ["Spring Boot", "Apache Pulsar", "Maven", "Java"],
      github: "https://github.com/qwzhang01/seven-spring-mq-pulsar-starter"
    },
    {
      name: "seven-data-security",
      description: "基于 MyBatis 的综合性 Spring Boot 数据安全库，提供透明的数据加密、脱敏和细粒度数据权限控制。",
      tech: ["Spring Boot", "MyBatis", "AOP", "加密算法"],
      github: "https://github.com/qwzhang01/seven-data-security"
    },
    {
      name: "seven-shield",
      description: "强大的基于注解的数据脱敏库，为 Spring Boot 应用提供 API 响应中敏感数据的自动灵活脱敏，支持多种数据类型。",
      tech: ["Spring Boot", "AOP", "注解处理"],
      github: "https://github.com/qwzhang01/seven-shield"
    },
    {
      name: "seven-operating-record",
      description: "基于 AOP 的操作记录库，为 Spring Boot 应用提供可自定义的记录策略。",
      tech: ["Spring Boot", "AOP", "日志记录"],
      github: "https://github.com/qwzhang01/seven-operating-record"
    },
    {
      name: "seven-spring-web-tool",
      description: "基于 Spring 的 Web 工具集，主要引入加密、数据权限、脱敏、操作记录等库。",
      tech: ["Spring Boot", "Web工具", "安全"],
      github: "https://github.com/qwzhang01/seven-spring-web-tool"
    },
    {
      name: "seven-sql-parser",
      description: "纯 Java SQL 解析工具，支持 SQL 与对象之间的双向转换，全面支持 MySQL 语法，无需外部依赖。",
      tech: ["Java", "SQL解析", "MySQL"],
      github: "https://github.com/qwzhang01/seven-sql-parser"
    },
    {
      name: "seven_reflection",
      description: "Java 反射工具，纯大模型生成，未改一行代码。",
      tech: ["Java", "反射", "AI生成"],
      github: "https://github.com/qwzhang01/seven_reflection"
    }
  ],
  en: [
    {
      name: "seven-spring-mq-pulsar-starter",
      description: "A feature-rich, easy-to-use Spring Boot Pulsar Starter that provides a complete Pulsar integration solution.",
      tech: ["Spring Boot", "Apache Pulsar", "Maven", "Java"],
      github: "https://github.com/qwzhang01/seven-spring-mq-pulsar-starter"
    },
    {
      name: "seven-data-security",
      description: "A comprehensive Spring Boot library for MyBatis that provides transparent data encryption, desensitization, and fine-grained data scope control.",
      tech: ["Spring Boot", "MyBatis", "AOP", "Encryption"],
      github: "https://github.com/qwzhang01/seven-data-security"
    },
    {
      name: "seven-shield",
      description: "A powerful, annotation-based data masking library for Spring Boot applications with automatic and flexible masking of sensitive data in API responses.",
      tech: ["Spring Boot", "AOP", "Annotations"],
      github: "https://github.com/qwzhang01/seven-shield"
    },
    {
      name: "seven-operating-record",
      description: "An AOP-based operation recording library for Spring Boot applications with customizable recording strategies.",
      tech: ["Spring Boot", "AOP", "Logging"],
      github: "https://github.com/qwzhang01/seven-operating-record"
    },
    {
      name: "seven-spring-web-tool",
      description: "Spring-based web toolkit integrating encryption, data permissions, desensitization, and operation recording libraries.",
      tech: ["Spring Boot", "Web Tools", "Security"],
      github: "https://github.com/qwzhang01/seven-spring-web-tool"
    },
    {
      name: "seven-sql-parser",
      description: "A pure Java SQL parsing tool supporting bidirectional conversion between SQL and objects, with comprehensive MySQL syntax support.",
      tech: ["Java", "SQL Parsing", "MySQL"],
      github: "https://github.com/qwzhang01/seven-sql-parser"
    },
    {
      name: "seven_reflection",
      description: "Java reflection utility, purely generated by LLM without any manual code changes.",
      tech: ["Java", "Reflection", "AI Generated"],
      github: "https://github.com/qwzhang01/seven_reflection"
    }
  ]
}

const projectItems = computed(() => {
  return projectsData[locale.value as 'zh' | 'en'] || projectsData.zh
})
</script>

<style scoped>
.projects {
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.project-card {
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid var(--gray-100);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.project-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%);
  overflow: hidden;
}

.project-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 54, 93, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  color: var(--text-inverse);
  font-size: var(--text-sm);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--text-inverse);
}

.project-content {
  padding: var(--space-xl);
}

.project-name {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.project-description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.tech-tag {
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--accent);
  background: rgba(49, 130, 206, 0.1);
  border-radius: var(--radius-sm);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
