<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <p class="section-subtitle">{{ $t('about.subtitle') }}</p>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            {{ $t('about.description') }}
          </p>
        </div>
        
        <div class="about-stats">
          <div class="stat-card">
            <div class="stat-value">{{ $t('about.highlights.experience') }}</div>
            <div class="stat-label">{{ $t('about.highlights.experience_label') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ $t('about.highlights.projects') }}</div>
            <div class="stat-label">{{ $t('about.highlights.projects_label') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ $t('about.highlights.clients') }}</div>
            <div class="stat-label">{{ $t('about.highlights.clients_label') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ $t('about.highlights.remote') }}</div>
            <div class="stat-label">{{ $t('about.highlights.remote_label') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  background: var(--bg-secondary);
}

.about-content {
  display: grid;
  gap: var(--space-3xl);
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-description {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.stat-card {
  background: var(--surface);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.stat-value {
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--space-sm);
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
