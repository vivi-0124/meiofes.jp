// トラッキングID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!

// ページビュー計測
export const pageview = (url: string) => {
  if (!window.gtag) return
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// 任意のイベント計測（ボタンクリックなど）
export type GtagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!window.gtag) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
} 