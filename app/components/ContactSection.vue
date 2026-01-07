<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <p class="contact-description">{{ $t('contact.description') }}</p>
          
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">{{ $t('contact.info.email') }}</span>
                <a href="mailto:qwzhang01@gmail.com" class="info-value">qwzhang01@gmail.com</a>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">{{ $t('contact.info.location') }}</span>
                <span class="info-value">{{ $t('contact.info.location_value') }}</span>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">{{ $t('contact.info.availability') }}</span>
                <span class="info-value status-available">{{ $t('contact.info.availability_value') }}</span>
              </div>
            </div>
          </div>
          
          <div class="social-section">
            <h4 class="social-title">{{ $t('contact.social') }}</h4>
            <div class="social-links">
              <a href="https://github.com/qwzhang01" target="_blank" class="social-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/avin-z-a17210103" target="_blank" class="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com/qwzh110" target="_blank" class="social-link" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <button @click="toggleWechatQR" class="social-link" aria-label="WeChat">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.018-.407-.03v-.002zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- WeChat QR Code Modal -->
          <div v-if="showWechatQR" class="wechat-modal" @click="closeWechatQR">
            <div class="wechat-modal-content" @click.stop>
              <button class="wechat-close" @click="closeWechatQR">&times;</button>
              <img src="~/assets/wechat-qrcode.png" alt="WeChat QR Code" class="wechat-qrcode" />
              <p class="wechat-tip">{{ $t('contact.wechat_tip') }}</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="form-label" for="name">{{ $t('contact.form.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                class="form-input" 
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="email">{{ $t('contact.form.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                class="form-input" 
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="subject">{{ $t('contact.form.subject') }}</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
                class="form-input" 
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="message">{{ $t('contact.form.message') }}</label>
              <textarea 
                id="message" 
                v-model="form.message"
                class="form-textarea" 
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              <span v-if="isSubmitting" class="spinner"></span>
              {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showWechatQR = ref(false)

const toggleWechatQR = () => {
  showWechatQR.value = !showWechatQR.value
}

const closeWechatQR = () => {
  showWechatQR.value = false
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  isSubmitting.value = false
  alert('Message sent successfully!')
}
</script>

<style scoped>
.contact {
  background: var(--bg-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.contact-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-2xl);
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.info-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.info-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: var(--text-inverse);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.info-label {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.info-value {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text-primary);
}

a.info-value {
  color: var(--accent);
}

a.info-value:hover {
  text-decoration: underline;
}

.status-available {
  color: var(--success);
}

.social-section {
  margin-top: var(--space-xl);
}

.social-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.social-links {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--text-secondary);
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.social-link:hover {
  color: var(--accent);
  background: rgba(49, 130, 206, 0.1);
  transform: translateY(-2px);
}

button.social-link {
  border: none;
  cursor: pointer;
}

.wechat-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.wechat-modal-content {
  position: relative;
  background: var(--surface);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  text-align: center;
  max-width: 320px;
}

.wechat-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color var(--transition-base);
}

.wechat-close:hover {
  color: var(--text-primary);
}

.wechat-qrcode {
  width: 250px;
  height: auto;
  border-radius: var(--radius-md);
}

.wechat-tip {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.contact-form-wrapper {
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-lg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.btn-submit {
  width: 100%;
  padding: var(--space-lg);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
