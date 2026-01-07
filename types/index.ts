// 技能相关类型
export interface Skill {
  name: string
  level: 'expert' | 'proficient' | 'familiar'
  label: string
}

// 工作经历类型
export interface Job {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

// 教育背景类型
export interface Education {
  degree: string
  school: string
  period: string
  description?: string
}

// 项目类型
export interface Project {
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  highlights?: string[]
}

// 联系方式类型
export interface ContactInfo {
  email: string
  phone: string
  location: string
  github: string
  linkedin?: string
  wechat?: string
}

// 语言切换类型
export type Locale = 'zh' | 'en'

// 技能数据结构
export interface SkillsData {
  languages: Skill[]
  backend: string[]
  storage: string[]
  devops: string[]
  llm: string[]
  architecture: string[]
}

// 导航菜单项类型
export interface NavItem {
  name: string
  href: string
  icon?: string
}