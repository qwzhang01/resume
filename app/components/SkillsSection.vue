<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>
      </div>
      
      <div class="skills-grid">
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.languages') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in languageSkills" :key="skill.name" class="skill-tag" :class="skill.level">
              {{ skill.name }}
              <span class="skill-level">{{ skill.label }}</span>
            </span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.backend') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in backendSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.storage') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in storageSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.devops') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in devopsSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"/>
                <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/>
                <circle cx="12" cy="8" r="2"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.llm') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in llmSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <h3 class="category-title">{{ $t('skills.architecture') }}</h3>
          </div>
          <div class="skill-tags">
            <span v-for="skill in architectureSkills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

// 使用 i18n 数据
const languageSkills = computed(() => t('skills.data.languages'))
const backendSkills = computed(() => t('skills.data.backend'))
const storageSkills = computed(() => t('skills.data.storage'))
const devopsSkills = computed(() => t('skills.data.devops'))
const llmSkills = computed(() => t('skills.data.llm'))
const architectureSkills = computed(() => t('skills.data.architecture'))
</script>

<style scoped>
.skills {
  background: var(--bg-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.skill-category {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid var(--gray-100);
}

.skill-category.full-width {
  grid-column: 1 / -1;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: var(--text-inverse);
  border-radius: var(--radius-lg);
}

.category-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-tag {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.skill-tag:hover {
  color: var(--accent);
  background: rgba(49, 130, 206, 0.1);
}

.skill-tag.expert {
  background: rgba(56, 161, 105, 0.15);
  color: var(--success);
}

.skill-tag.proficient {
  background: rgba(49, 130, 206, 0.15);
  color: var(--accent);
}

.skill-tag.familiar {
  background: rgba(160, 174, 192, 0.15);
  color: var(--text-tertiary);
}

.skill-level {
  font-size: var(--text-xs);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-category.full-width {
    grid-column: auto;
  }
}
</style>
