import { useState, useEffect, useCallback } from 'react'
import { useProgress } from '../contexts/ProgressContext'

function shuffleOptions(options, correctIdx) {
  const indices = options.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    options: indices.map(i => options[i]),
    correct: indices.indexOf(correctIdx)
  }
}

function createShuffledQuestions(questions) {
  return questions.map(q => {
    const shuffled = shuffleOptions(q.options, q.correct)
    return { ...q, options: shuffled.options, correct: shuffled.correct }
  })
}

export default function QuizComponent({ quiz, quizId, onComplete }) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => createShuffledQuestions(quiz.questions))
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit)
  const [finished, setFinished] = useState(false)
  const { saveQuizScore } = useProgress()

  const questions = shuffledQuestions

  const finishQuiz = useCallback((finalAnswers) => {
    const correct = finalAnswers.filter((a, i) => a === questions[i].correct).length
    const score = Math.round((correct / questions.length) * 100)
    saveQuizScore(quizId, score)
    setFinished(true)
    if (onComplete) onComplete(score)
  }, [questions, quizId, saveQuizScore, onComplete])

  useEffect(() => {
    if (finished || showResult) return
    if (timeLeft <= 0) {
      const finalAnswers = [...answers]
      while (finalAnswers.length < questions.length) finalAnswers.push(-1)
      finishQuiz(finalAnswers)
      return
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft, finished, showResult, answers, questions.length, finishQuiz])

  const handleSelect = (optionIdx) => {
    if (showResult) return
    setSelected(optionIdx)
  }

  const handleSubmit = () => {
    if (selected === null) return
    setShowResult(true)
  }

  const handleNext = () => {
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    if (currentQ + 1 >= questions.length) {
      finishQuiz(newAnswers)
    } else {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  if (finished) {
    const correct = answers.filter((a, i) => a === questions[i]?.correct).length
    const score = Math.round((correct / questions.length) * 100)
    const passed = score >= quiz.passingScore

    return (
      <div className="quiz-result">
        <div className={`quiz-score-circle ${passed ? 'passed' : 'failed'}`}>
          <span className="score-number">{score}</span>
          <span className="score-label">점</span>
        </div>
        <h2 className="quiz-result-title">
          {passed ? '축하합니다! 퀴즈를 통과했습니다!' : '아쉽지만 통과하지 못했습니다.'}
        </h2>
        <p className="quiz-result-detail">
          {questions.length}문제 중 {correct}문제 정답 (합격 기준: {quiz.passingScore}점)
        </p>

        <div className="quiz-answers-review">
          {questions.map((q, i) => (
            <div key={i} className={`review-item ${answers[i] === q.correct ? 'correct' : 'wrong'}`}>
              <span className="review-num">Q{i + 1}</span>
              <span className="review-status">
                {answers[i] === q.correct
                  ? <i className="fas fa-check"></i>
                  : <i className="fas fa-xmark"></i>}
              </span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={() => {
          setShuffledQuestions(createShuffledQuestions(quiz.questions))
          setCurrentQ(0)
          setSelected(null)
          setShowResult(false)
          setAnswers([])
          setTimeLeft(quiz.timeLimit)
          setFinished(false)
        }}>
          <i className="fas fa-redo"></i> 다시 풀기
        </button>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <span>{currentQ + 1} / {questions.length}</span>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
          </div>
        </div>
        <div className={`quiz-timer ${timeLeft < 60 ? 'warning' : ''}`}>
          <i className="fas fa-clock"></i> {formatTime(timeLeft)}
        </div>
      </div>

      <div className="quiz-question">
        <h3 className="question-text">{q.question}</h3>
        {q.code && <pre className="question-code"><code>{q.code}</code></pre>}
      </div>

      <div className="quiz-options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={`quiz-option${selected === i ? ' selected' : ''}${showResult && i === q.correct ? ' correct' : ''}${showResult && selected === i && i !== q.correct ? ' wrong' : ''}`}
            onClick={() => handleSelect(i)}
            disabled={showResult}
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{opt}</span>
            {showResult && i === q.correct && <i className="fas fa-check option-icon correct-icon"></i>}
            {showResult && selected === i && i !== q.correct && <i className="fas fa-xmark option-icon wrong-icon"></i>}
          </button>
        ))}
      </div>

      {showResult && q.explanation && (
        <div className="quiz-explanation">
          <strong><i className="fas fa-lightbulb"></i> 해설:</strong> {q.explanation}
        </div>
      )}

      <div className="quiz-actions">
        {!showResult ? (
          <button className="btn btn-primary" onClick={handleSubmit} disabled={selected === null}>
            정답 확인
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentQ + 1 >= questions.length ? '결과 보기' : '다음 문제'}
            <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i>
          </button>
        )}
      </div>
    </div>
  )
}
