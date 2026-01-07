<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-content">
        <p class="footer-copyright">{{ $t('footer.copyright') }}</p>
        <p class="footer-made">{{ $t('footer.made_with') }}</p>
      </div>
      
      <div class="footer-links">
        <a href="#home" class="footer-link">{{ $t('nav.home') }}</a>
        <a href="#about" class="footer-link">{{ $t('nav.about') }}</a>
        <a href="#skills" class="footer-link">{{ $t('nav.skills') }}</a>
        <a href="#experience" class="footer-link">{{ $t('nav.experience') }}</a>
        <a href="#projects" class="footer-link">{{ $t('nav.projects') }}</a>
        <a href="#contact" class="footer-link">{{ $t('nav.contact') }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: var(--gray-900);
  padding: var(--space-2xl) 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.footer-copyright {
  font-size: var(--text-sm);
  color: var(--gray-400);
}

.footer-made {
  font-size: var(--text-sm);
  color: var(--gray-500);
}

.footer-links {
  display: flex;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.footer-link {
  font-size: var(--text-sm);
  color: var(--gray-400);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--gray-200);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}
</style>
