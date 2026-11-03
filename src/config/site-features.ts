export const siteFeatures = {
  language: {
    enabled: true,
    default: 'en',
    storageKey: 'portfolio-language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'bn', label: 'বাংলা' }
    ]
  },
  theme: {
    enabled: true,
    default: 'system',
    storageKey: 'portfolio-theme',
    options: [
      { value: 'system', labels: { en: 'System', bn: 'সিস্টেম' } },
      { value: 'light', labels: { en: 'Light', bn: 'লাইট' } },
      { value: 'dark', labels: { en: 'Dark', bn: 'ডার্ক' } }
    ],
    colors: {
      light: '#f4f7fb',
      dark: '#080d16'
    }
  }
} as const
