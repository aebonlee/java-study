import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function CodeBlockCopy() {
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.code-block').forEach(block => {
        const header = block.querySelector('.code-header')
        if (!header || header.querySelector('.copy-btn')) return

        const btn = document.createElement('button')
        btn.className = 'copy-btn'
        btn.title = '코드 복사'
        btn.innerHTML = '<i class="fas fa-copy"></i> 복사'

        btn.addEventListener('click', () => {
          const code = block.querySelector('pre code') || block.querySelector('pre')
          if (!code) return

          navigator.clipboard.writeText(code.textContent).then(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> 복사됨'
            btn.style.color = '#6EE7B7'
            setTimeout(() => {
              btn.innerHTML = '<i class="fas fa-copy"></i> 복사'
              btn.style.color = ''
            }, 2000)
          })
        })

        header.appendChild(btn)
      })
    }, 150)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return null
}
