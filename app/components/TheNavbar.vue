<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container navbar-container">
      <a href="#" class="navbar-logo">
        <span class="logo-text">{{ $t('hero.name') }}</span>
      </a>
      
      <div class="navbar-menu" :class="{ 'is-open': isMenuOpen }">
        <a 
          v-for="item in navItems" 
          :key="item.key"
          :href="`#${item.key}`"
          class="navbar-link"
          @click="closeMenu"
        >
          {{ $t(`nav.${item.key}`) }}
        </a>
      </div>
      
      <div class="navbar-actions">
        <button class="lang-switcher" @click="toggleLocale">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>{{ currentLocaleName }}</span>
        </button>
        
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navItems = [
  { key: 'home' },
  { key: 'about' },
  { key: 'skills' },
  { key: 'experience' },
  { key: 'projects' },
  { key: 'contact' }
]

const currentLocaleName = computed(() => {
  const current = locales.value.find((l: any) => l.code === locale.value)
  return current ? (current as any).name : locale.value
})

const toggleLocale = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh'
  setLocale(newLocale)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
  padding: var(--space-sm) 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
}

.logo-text {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.navbar-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width var(--transition-base);
}

.navbar-link:hover {
  color: var(--primary);
}

.navbar-link:hover::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lang-switcher:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(26, 54, 93, 0.05);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-sm);
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-bar {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-primary);
    padding: var(--space-xl);
    gap: var(--space-lg);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }
  
  .navbar-menu.is-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .menu-toggle {
    display: flex;
  }
}
</style>
