import { useState, useCallback, useRef } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import { useProgress } from '../contexts/ProgressContext'

const PISTON_API = 'https://emkc.org/api/v2/piston/execute'

export default function JavaCodeRunner({ defaultCode = '', title = 'Java 코드 실행기', readOnly = false }) {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isError, setIsError] = useState(false)
  const { incrementCodeRuns } = useProgress()
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef(null)

  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2000)
    })
  }

  const highlight = useCallback((code) => {
    return Prism.highlight(code, Prism.languages.java, 'java')
  }, [])

  const runCode = async () => {
    setIsRunning(true)
    setOutput('실행 중...')
    setIsError(false)

    try {
      const response = await fetch(PISTON_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: 'java',
          version: '15.0.2',
          files: [{ name: 'Main.java', content: code }]
        })
      })

      if (!response.ok) throw new Error('API 요청 실패')

      const data = await response.json()
      const result = data.run

      if (result.stderr) {
        setOutput(result.stderr)
        setIsError(true)
      } else {
        setOutput(result.stdout || '(출력 없음)')
        setIsError(false)
      }
      incrementCodeRuns()
    } catch (err: any) {
      setOutput('실행 오류: ' + err.message)
      setIsError(true)
    } finally {
      setIsRunning(false)
    }
  }

  const resetCode = () => {
    setCode(defaultCode)
    setOutput('')
    setIsError(false)
  }

  return (
    <div className="code-editor-wrapper">
      <div className="editor-header">
        <div className="editor-title-area">
          <span>{title}</span>
          <button className="editor-copy-btn" onClick={copyCode} title="코드 복사">
            <i className={copied ? 'fas fa-check' : 'fas fa-copy'}></i>
            {copied ? ' 복사됨' : ' 복사'}
          </button>
        </div>
        <div className="editor-actions">
          <button onClick={resetCode} disabled={isRunning}>
            <i className="fas fa-undo"></i> 초기화
          </button>
          <button onClick={runCode} disabled={isRunning}>
            <i className={isRunning ? 'fas fa-spinner fa-spin' : 'fas fa-play'}></i>
            {isRunning ? ' 실행 중...' : ' 실행'}
          </button>
        </div>
      </div>
      <Editor
        value={code}
        onValueChange={readOnly ? () => {} : setCode}
        highlight={highlight}
        padding={16}
        style={{
          fontFamily: 'var(--font-code)',
          fontSize: '14px',
          backgroundColor: '#1E293B',
          color: '#E2E8F0',
          minHeight: '120px',
          lineHeight: '1.6',
        }}
        textareaClassName="code-editor-textarea"
        readOnly={readOnly}
      />
      {output && (
        <div className={`editor-output${isError ? ' error' : ''}`}>
          <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '6px', fontWeight: 600 }}>
            <i className="fas fa-terminal" style={{ marginRight: '6px' }}></i>출력 결과
          </div>
          {output}
        </div>
      )}
    </div>
  )
}
