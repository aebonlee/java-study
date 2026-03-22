import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function ProjectLesson02() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/projects">프로젝트</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>PJ02</span>
          </div>
          <h1>PJ02. 학생 성적 관리 시스템</h1>
          <p>학생 정보와 성적을 관리하고 통계를 제공하는 콘솔 기반 시스템을 구현합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          {/* 프로젝트 정보 카드 */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.08) 100%)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '28px 32px',
            marginBottom: '36px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <i className="fas fa-project-diagram" style={{ fontSize: '22px', color: '#10B981' }}></i>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>프로젝트 정보</h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <i className="fas fa-signal" style={{ marginRight: '6px' }}></i>난이도
                </div>
                <span style={{
                  background: '#10B981', color: '#fff', borderRadius: '6px',
                  padding: '3px 12px', fontSize: '13px', fontWeight: 600
                }}>입문 (Beginner)</span>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <i className="fas fa-book" style={{ marginRight: '6px' }}></i>선수 학습
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.7 }}>
                  <Link to="/java-learning/01">Ch01</Link>-<Link to="/java-learning/08">Ch08</Link>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <i className="fas fa-tools" style={{ marginRight: '6px' }}></i>도구 / 환경
                </div>
                <div style={{ fontSize: '14px' }}>JDK 21, IntelliJ IDEA</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  <i className="fas fa-list-check" style={{ marginRight: '6px' }}></i>주요 기능
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['학생/성적 CRUD', '평균/석차 계산', '과목별 통계', '파일 저장'].map(f => (
                    <span key={f} style={{
                      background: 'var(--bg-secondary)', borderRadius: '6px',
                      padding: '3px 10px', fontSize: '12px', color: 'var(--text-secondary)'
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 섹션 1 */}
          <h2>1. 프로젝트 소개와 요구사항 분석</h2>
          <p>
            이 프로젝트에서는 <strong>학생 성적 관리 시스템</strong>을 구현합니다.
            학생 정보를 등록하고, 과목별 성적을 입력하며, 평균과 석차를 계산하는 기능을 제공합니다.
            PJ01(콘솔 주소록)보다 복잡한 데이터 구조를 다루며, enum, 컬렉션 활용,
            Stream API를 적극 활용합니다.
          </p>

          <h3>기능 요구사항 (Functional Requirements)</h3>
          <table>
            <thead>
              <tr><th>번호</th><th>기능</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td>FR-01</td><td>학생 등록</td><td>학번, 이름, 학년을 입력하여 학생을 등록한다</td></tr>
              <tr><td>FR-02</td><td>학생 목록 조회</td><td>등록된 모든 학생 정보를 목록으로 표시한다</td></tr>
              <tr><td>FR-03</td><td>학생 정보 수정</td><td>학생의 이름, 학년 정보를 수정한다</td></tr>
              <tr><td>FR-04</td><td>학생 삭제</td><td>학생과 해당 학생의 모든 성적을 삭제한다</td></tr>
              <tr><td>FR-05</td><td>성적 입력</td><td>학생별로 과목(국어, 영어, 수학, 과학, 사회)별 점수를 입력한다</td></tr>
              <tr><td>FR-06</td><td>성적 조회</td><td>학생별 성적표, 과목별 점수를 조회한다</td></tr>
              <tr><td>FR-07</td><td>평균/석차 계산</td><td>학생별 평균, 반 평균, 석차를 계산한다</td></tr>
              <tr><td>FR-08</td><td>통계 리포트</td><td>과목별 최고점/최저점/평균, 전체 석차표를 생성한다</td></tr>
              <tr><td>FR-09</td><td>파일 저장/불러오기</td><td>데이터를 파일에 저장하고 프로그램 시작 시 불러온다</td></tr>
            </tbody>
          </table>

          <h3>비기능 요구사항</h3>
          <ul>
            <li>점수는 0~100 사이의 정수만 허용한다</li>
            <li>학번은 중복될 수 없다</li>
            <li>학년은 1~6 사이의 정수만 허용한다</li>
            <li>잘못된 입력에 대해 재입력을 요청한다</li>
            <li>프로그램 종료 시 자동으로 파일에 저장한다</li>
          </ul>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> PJ01과의 차이점</div>
            <p>PJ01(콘솔 주소록)은 단일 엔티티(Contact)만 다뤘다면, 이번 프로젝트는 <strong>학생(Student)과 성적(Score)</strong>이라는 두 엔티티 간의 관계를 다룹니다. 또한 enum, Comparator, Stream API 등 Ch07~Ch08에서 배운 고급 기능을 적극 활용합니다.</p>
          </div>

          {/* 섹션 2 */}
          <h2>2. 프로젝트 구조 설계</h2>
          <p>
            데이터 모델, 비즈니스 로직, UI를 분리하는 구조로 설계합니다.
            학생과 성적의 관계를 명확히 정의하는 것이 핵심입니다.
          </p>

          <h3>패키지 구조</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-tree"></i> 프로젝트 구조</span>
            </div>
            <pre><code>{`grade-manager/
├── src/
│   └── com/
│       └── project/
│           └── grade/
│               ├── Main.java              // 프로그램 진입점
│               ├── model/
│               │   ├── Student.java       // 학생 데이터 모델
│               │   ├── Subject.java       // 과목 enum
│               │   └── Score.java         // 성적 데이터 모델
│               ├── service/
│               │   ├── StudentManager.java // 학생 CRUD 관리
│               │   └── GradeBook.java     // 성적 관리 & 통계
│               ├── ui/
│               │   └── ConsoleUI.java     // 콘솔 입출력
│               └── util/
│                   └── FileStorage.java   // 파일 저장/불러오기
└── data/
    ├── students.csv                       // 학생 데이터
    └── scores.csv                         // 성적 데이터`}</code></pre>
          </div>

          <h3>클래스 관계 설계</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 클래스 관계도</span>
            </div>
            <pre><code>{`┌──────────────────┐
│      Main        │  프로그램 시작점
└────────┬─────────┘
         │ 생성
         ▼
┌──────────────────┐
│    ConsoleUI     │  사용자 인터페이스
│──────────────────│
│ - scanner        │
│ + start()        │───────┐
└──────────────────┘       │
         │ 사용             │ 사용
         ▼                 ▼
┌──────────────────┐  ┌──────────────────┐
│ StudentManager   │  │   GradeBook      │
│──────────────────│  │──────────────────│
│ - students: Map  │  │ - scores: Map    │
│ + add(student)   │  │ + addScore(...)  │
│ + update(id, s)  │  │ + getScores(id)  │
│ + delete(id)     │  │ + getAverage(id) │
│ + findById(id)   │  │ + getRanking()   │
│ + findByName(..) │  │ + getStatistics()│
└──────────────────┘  └──────────────────┘
         │ 관리                │ 관리
         ▼                    ▼
┌──────────────────┐  ┌──────────────────┐
│    Student       │  │     Score        │
│──────────────────│  │──────────────────│
│ - id: String     │  │ - studentId      │
│ - name: String   │  │ - subject: enum  │
│ - grade: int     │  │ - score: int     │
└──────────────────┘  └──────────────────┘
                              │ 참조
                              ▼
                      ┌──────────────────┐
                      │  Subject (enum)  │
                      │──────────────────│
                      │ KOREAN, ENGLISH  │
                      │ MATH, SCIENCE    │
                      │ SOCIAL           │
                      └──────────────────┘`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> Map vs List</div>
            <p>PJ01에서는 <code>ArrayList</code>로 연락처를 관리했지만, 이번에는 <code>HashMap&lt;String, Student&gt;</code>를 사용합니다. 학번(id)으로 빠르게 학생을 찾아야 하므로 Map이 더 적합합니다. List는 O(n) 탐색이지만, Map은 O(1) 탐색이 가능합니다.</p>
          </div>

          {/* 섹션 3 */}
          <h2>3. 모델 클래스 구현</h2>
          <p>
            프로젝트의 핵심 데이터 모델인 <code>Student</code>, <code>Subject</code> enum, <code>Score</code> 클래스를 구현합니다.
          </p>

          <h3>Subject enum</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Subject.java</span>
            </div>
            <pre><code>{`package com.project.grade.model;

public enum Subject {
    KOREAN("국어"),
    ENGLISH("영어"),
    MATH("수학"),
    SCIENCE("과학"),
    SOCIAL("사회");

    private final String label;

    Subject(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    // 번호로 과목 선택 (UI에서 사용)
    public static Subject fromNumber(int num) {
        return switch (num) {
            case 1 -> KOREAN;
            case 2 -> ENGLISH;
            case 3 -> MATH;
            case 4 -> SCIENCE;
            case 5 -> SOCIAL;
            default -> null;
        };
    }

    // 메뉴 출력용
    public static void printSubjects() {
        Subject[] subjects = values();
        for (int i = 0; i < subjects.length; i++) {
            System.out.printf("  %d. %s%n", i + 1, subjects[i].label);
        }
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> enum을 사용하는 이유</div>
            <p>과목을 <code>String</code>으로 관리하면 오타로 인한 버그가 발생할 수 있습니다. <code>enum</code>을 사용하면 컴파일 시점에 유효한 값만 허용되므로 안전합니다. 또한 <code>values()</code>로 전체 과목 목록을 쉽게 얻을 수 있습니다.</p>
          </div>

          <h3>Student 클래스</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Student.java</span>
            </div>
            <pre><code>{`package com.project.grade.model;

public class Student {
    private String id;      // 학번 (예: "2024001")
    private String name;    // 이름
    private int grade;      // 학년 (1~6)

    public Student(String id, String name, int grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    // Getter
    public String getId() { return id; }
    public String getName() { return name; }
    public int getGrade() { return grade; }

    // Setter
    public void setName(String name) { this.name = name; }
    public void setGrade(int grade) { this.grade = grade; }

    @Override
    public String toString() {
        return String.format("[%s] %s (%d학년)", id, name, grade);
    }

    // CSV 변환
    public String toCsv() {
        return id + "," + name + "," + grade;
    }

    public static Student fromCsv(String csvLine) {
        String[] parts = csvLine.split(",");
        if (parts.length == 3) {
            return new Student(
                parts[0].trim(),
                parts[1].trim(),
                Integer.parseInt(parts[2].trim())
            );
        }
        return null;
    }
}`}</code></pre>
          </div>

          <h3>Score 클래스</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Score.java</span>
            </div>
            <pre><code>{`package com.project.grade.model;

public class Score {
    private String studentId;   // 학생 학번
    private Subject subject;    // 과목
    private int score;          // 점수 (0~100)

    public Score(String studentId, Subject subject, int score) {
        this.studentId = studentId;
        this.subject = subject;
        setScore(score);  // 검증 포함
    }

    // Getter
    public String getStudentId() { return studentId; }
    public Subject getSubject() { return subject; }
    public int getScore() { return score; }

    // Setter (점수 검증 포함)
    public void setScore(int score) {
        if (score < 0 || score > 100) {
            throw new IllegalArgumentException(
                "점수는 0~100 사이여야 합니다: " + score);
        }
        this.score = score;
    }

    @Override
    public String toString() {
        return String.format("%s: %d점", subject.getLabel(), score);
    }

    // CSV 변환
    public String toCsv() {
        return studentId + "," + subject.name() + "," + score;
    }

    public static Score fromCsv(String csvLine) {
        String[] parts = csvLine.split(",");
        if (parts.length == 3) {
            try {
                return new Score(
                    parts[0].trim(),
                    Subject.valueOf(parts[1].trim()),
                    Integer.parseInt(parts[2].trim())
                );
            } catch (IllegalArgumentException e) {
                System.out.println("[경고] 잘못된 성적 데이터: " + csvLine);
            }
        }
        return null;
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 방어적 프로그래밍</div>
            <p><code>Score</code> 클래스의 <code>setScore()</code>에서 0~100 범위를 벗어나면 <code>IllegalArgumentException</code>을 던집니다. 이렇게 모델 클래스에서 유효성 검증을 하면, 어디서 Score를 생성하든 잘못된 값이 들어가지 않도록 보장할 수 있습니다.</p>
          </div>

          {/* 섹션 4 */}
          <h2>4. 학생 관리 CRUD</h2>
          <p>
            <code>StudentManager</code> 클래스는 학생 정보의 추가, 조회, 수정, 삭제를 담당합니다.
            <code>HashMap&lt;String, Student&gt;</code>를 사용하여 학번 기반으로 빠르게 학생을 관리합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> StudentManager.java</span>
            </div>
            <pre><code>{`package com.project.grade.service;

import com.project.grade.model.Student;
import java.util.*;
import java.util.stream.Collectors;

public class StudentManager {
    private Map<String, Student> students;

    public StudentManager() {
        this.students = new LinkedHashMap<>();  // 입력 순서 유지
    }

    // CREATE - 학생 등록
    public boolean addStudent(Student student) {
        if (students.containsKey(student.getId())) {
            System.out.println("[오류] 이미 존재하는 학번입니다: "
                    + student.getId());
            return false;
        }
        students.put(student.getId(), student);
        System.out.println("[성공] " + student.getName()
                + " 학생이 등록되었습니다.");
        return true;
    }

    // READ - 학번으로 조회
    public Student findById(String id) {
        return students.get(id);
    }

    // READ - 이름으로 검색 (부분 일치)
    public List<Student> findByName(String name) {
        return students.values().stream()
                .filter(s -> s.getName().contains(name))
                .collect(Collectors.toList());
    }

    // READ - 전체 학생 조회
    public Collection<Student> getAllStudents() {
        return Collections.unmodifiableCollection(students.values());
    }

    // UPDATE - 학생 정보 수정
    public boolean updateStudent(String id, String newName, int newGrade) {
        Student student = students.get(id);
        if (student == null) {
            System.out.println("[오류] 해당 학번의 학생이 없습니다.");
            return false;
        }
        if (newName != null && !newName.isEmpty()) {
            student.setName(newName);
        }
        if (newGrade >= 1 && newGrade <= 6) {
            student.setGrade(newGrade);
        }
        System.out.println("[성공] 학생 정보가 수정되었습니다.");
        return true;
    }

    // DELETE - 학생 삭제
    public boolean deleteStudent(String id) {
        Student removed = students.remove(id);
        if (removed == null) {
            System.out.println("[오류] 해당 학번의 학생이 없습니다.");
            return false;
        }
        System.out.println("[성공] " + removed.getName()
                + " 학생이 삭제되었습니다.");
        return true;
    }

    // 학번 존재 여부 확인
    public boolean exists(String id) {
        return students.containsKey(id);
    }

    // 학생 수
    public int getCount() {
        return students.size();
    }

    // 학생 목록 설정 (파일에서 불러올 때)
    public void setStudents(List<Student> studentList) {
        this.students = new LinkedHashMap<>();
        for (Student s : studentList) {
            students.put(s.getId(), s);
        }
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> LinkedHashMap vs HashMap</div>
            <p><code>LinkedHashMap</code>은 <code>HashMap</code>과 동일한 O(1) 탐색 성능을 제공하면서, 삽입 순서를 유지합니다. 학생 목록을 출력할 때 등록 순서대로 표시하고 싶다면 <code>LinkedHashMap</code>이 적합합니다.</p>
          </div>

          {/* 섹션 5 */}
          <h2>5. 성적 입력과 조회</h2>
          <p>
            <code>GradeBook</code> 클래스는 성적 입력, 조회, 리포트 생성을 담당합니다.
            학생별 성적을 <code>Map&lt;String, List&lt;Score&gt;&gt;</code>로 관리하여 학번으로 빠르게 접근합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> GradeBook.java</span>
            </div>
            <pre><code>{`package com.project.grade.service;

import com.project.grade.model.Score;
import com.project.grade.model.Subject;
import java.util.*;
import java.util.stream.Collectors;

public class GradeBook {
    // 학번 -> 과목별 성적 리스트
    private Map<String, List<Score>> scoreMap;

    public GradeBook() {
        this.scoreMap = new HashMap<>();
    }

    // 성적 입력 (이미 있으면 덮어쓰기)
    public void addScore(String studentId, Subject subject, int score) {
        scoreMap.computeIfAbsent(studentId, k -> new ArrayList<>());

        List<Score> scores = scoreMap.get(studentId);

        // 같은 과목 성적이 있으면 업데이트
        Optional<Score> existing = scores.stream()
                .filter(s -> s.getSubject() == subject)
                .findFirst();

        if (existing.isPresent()) {
            existing.get().setScore(score);
            System.out.printf("[수정] %s 점수가 %d점으로 변경되었습니다.%n",
                    subject.getLabel(), score);
        } else {
            scores.add(new Score(studentId, subject, score));
            System.out.printf("[입력] %s %d점이 입력되었습니다.%n",
                    subject.getLabel(), score);
        }
    }

    // 학생별 성적 조회
    public List<Score> getScores(String studentId) {
        return scoreMap.getOrDefault(studentId,
                Collections.emptyList());
    }

    // 학생 개인 평균 계산
    public double getAverage(String studentId) {
        List<Score> scores = getScores(studentId);
        if (scores.isEmpty()) return 0.0;

        return scores.stream()
                .mapToInt(Score::getScore)
                .average()
                .orElse(0.0);
    }

    // 학생 총점 계산
    public int getTotal(String studentId) {
        return getScores(studentId).stream()
                .mapToInt(Score::getScore)
                .sum();
    }

    // 개인 성적표 출력
    public void printReport(String studentId, String studentName) {
        List<Score> scores = getScores(studentId);
        if (scores.isEmpty()) {
            System.out.println("[알림] 입력된 성적이 없습니다.");
            return;
        }

        System.out.println("\\n╔══════════════════════════════════╗");
        System.out.printf("║       %s 성적표              ║%n", studentName);
        System.out.println("╠══════════════════════════════════╣");

        for (Score s : scores) {
            String bar = "█".repeat(s.getScore() / 5);
            System.out.printf("║ %-6s : %3d점  %-20s║%n",
                    s.getSubject().getLabel(), s.getScore(), bar);
        }

        System.out.println("╠══════════════════════════════════╣");
        System.out.printf("║ 총점: %3d점   평균: %5.1f점       ║%n",
                getTotal(studentId), getAverage(studentId));
        System.out.println("╚══════════════════════════════════╝");
    }

    // 학생 성적 삭제 (학생 삭제 시 호출)
    public void removeScores(String studentId) {
        scoreMap.remove(studentId);
    }

    // 전체 학생 ID 목록
    public Set<String> getAllStudentIds() {
        return scoreMap.keySet();
    }

    // 성적이 있는 학생 수
    public int getStudentCount() {
        return scoreMap.size();
    }

    // 전체 성적 목록 (파일 저장용)
    public List<Score> getAllScores() {
        return scoreMap.values().stream()
                .flatMap(Collection::stream)
                .collect(Collectors.toList());
    }

    // 성적 목록 설정 (파일에서 불러올 때)
    public void setScores(List<Score> scores) {
        this.scoreMap = new HashMap<>();
        for (Score score : scores) {
            scoreMap.computeIfAbsent(score.getStudentId(),
                    k -> new ArrayList<>()).add(score);
        }
    }
}`}</code></pre>
          </div>

          <h3>ConsoleUI - 성적 입력 화면</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> ConsoleUI.java - 성적 입력 부분</span>
            </div>
            <pre><code>{`private void inputScores() {
    System.out.println("\\n--- 성적 입력 ---");
    String id = getInput("학번: ");

    Student student = studentManager.findById(id);
    if (student == null) {
        System.out.println("[오류] 해당 학번의 학생이 없습니다.");
        return;
    }

    System.out.println("학생: " + student);
    System.out.println("과목 선택:");
    Subject.printSubjects();
    System.out.println("  0. 전체 과목 입력");

    int choice = getIntInput(">> ");

    if (choice == 0) {
        // 전체 과목 입력
        for (Subject subject : Subject.values()) {
            int score = getValidScore(subject.getLabel() + " 점수 (0-100): ");
            gradeBook.addScore(id, subject, score);
        }
    } else {
        Subject subject = Subject.fromNumber(choice);
        if (subject == null) {
            System.out.println("[오류] 잘못된 과목 번호입니다.");
            return;
        }
        int score = getValidScore(subject.getLabel() + " 점수 (0-100): ");
        gradeBook.addScore(id, subject, score);
    }
}

private int getValidScore(String prompt) {
    while (true) {
        int score = getIntInput(prompt);
        if (score >= 0 && score <= 100) {
            return score;
        }
        System.out.println("[오류] 0~100 사이의 점수를 입력하세요.");
    }
}

private int getIntInput(String prompt) {
    while (true) {
        try {
            System.out.print(prompt);
            return Integer.parseInt(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            System.out.println("[오류] 숫자를 입력하세요.");
        }
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> computeIfAbsent 활용</div>
            <p><code>scoreMap.computeIfAbsent(studentId, k -&gt; new ArrayList&lt;&gt;())</code>는 해당 키가 없을 때만 새 리스트를 생성합니다. 매번 <code>containsKey()</code>로 확인하고 <code>put()</code>하는 패턴보다 간결하고 원자적(atomic)입니다.</p>
          </div>

          {/* 섹션 6 */}
          <h2>6. 통계와 석차 계산</h2>
          <p>
            성적 관리 시스템의 핵심인 통계 기능을 구현합니다. 과목별 최고점/최저점/평균을 계산하고,
            전체 학생의 석차를 매기는 기능을 추가합니다.
          </p>

          <h3>통계 메서드 (GradeBook에 추가)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> GradeBook.java - 통계 메서드 추가</span>
            </div>
            <pre><code>{`// 과목별 통계: 최고점, 최저점, 평균
public void printSubjectStatistics() {
    System.out.println("\\n=== 과목별 통계 ===");
    System.out.printf("%-8s %6s %6s %8s%n",
            "과목", "최고점", "최저점", "평균");
    System.out.println("-".repeat(32));

    for (Subject subject : Subject.values()) {
        // 해당 과목의 모든 점수 수집
        List<Integer> subjectScores = scoreMap.values().stream()
                .flatMap(Collection::stream)
                .filter(s -> s.getSubject() == subject)
                .map(Score::getScore)
                .collect(Collectors.toList());

        if (subjectScores.isEmpty()) {
            System.out.printf("%-8s %6s %6s %8s%n",
                    subject.getLabel(), "-", "-", "-");
            continue;
        }

        IntSummaryStatistics stats = subjectScores.stream()
                .mapToInt(Integer::intValue)
                .summaryStatistics();

        System.out.printf("%-8s %6d %6d %8.1f%n",
                subject.getLabel(),
                stats.getMax(),
                stats.getMin(),
                stats.getAverage());
    }
    System.out.println("-".repeat(32));
}

// 석차 계산 및 출력
public void printRanking(StudentManager studentManager) {
    if (scoreMap.isEmpty()) {
        System.out.println("[알림] 성적 데이터가 없습니다.");
        return;
    }

    // 학생별 평균으로 정렬
    List<Map.Entry<String, Double>> rankings = scoreMap.keySet()
            .stream()
            .map(id -> Map.entry(id, getAverage(id)))
            .sorted(Map.Entry.<String, Double>comparingByValue()
                    .reversed())  // 내림차순
            .collect(Collectors.toList());

    System.out.println("\\n=== 전체 석차표 ===");
    System.out.printf("%-4s %-10s %-10s %6s %8s%n",
            "석차", "학번", "이름", "총점", "평균");
    System.out.println("-".repeat(44));

    int rank = 1;
    for (Map.Entry<String, Double> entry : rankings) {
        String id = entry.getKey();
        Student student = studentManager.findById(id);
        String name = (student != null) ? student.getName() : "알 수 없음";

        System.out.printf("%-4d %-10s %-10s %6d %8.1f%n",
                rank++, id, name,
                getTotal(id), entry.getValue());
    }
    System.out.println("-".repeat(44));
}`}</code></pre>
          </div>

          <h3>Stream API 핵심 패턴 정리</h3>
          <table>
            <thead>
              <tr><th>패턴</th><th>코드</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>필터링</strong></td>
                <td><code>stream().filter(predicate)</code></td>
                <td>조건에 맞는 요소만 선택</td>
              </tr>
              <tr>
                <td><strong>변환</strong></td>
                <td><code>stream().map(function)</code></td>
                <td>요소를 다른 타입으로 변환</td>
              </tr>
              <tr>
                <td><strong>평탄화</strong></td>
                <td><code>stream().flatMap(function)</code></td>
                <td>중첩 컬렉션을 단일 스트림으로</td>
              </tr>
              <tr>
                <td><strong>통계</strong></td>
                <td><code>mapToInt().summaryStatistics()</code></td>
                <td>min, max, avg, count, sum 한번에</td>
              </tr>
              <tr>
                <td><strong>정렬</strong></td>
                <td><code>sorted(Comparator)</code></td>
                <td>스트림 요소 정렬</td>
              </tr>
              <tr>
                <td><strong>수집</strong></td>
                <td><code>collect(Collectors.toList())</code></td>
                <td>스트림 결과를 컬렉션으로 변환</td>
              </tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> IntSummaryStatistics</div>
            <p><code>IntSummaryStatistics</code>는 <code>mapToInt()</code> 스트림에서 <code>summaryStatistics()</code>를 호출하면 얻을 수 있습니다. <code>getMax()</code>, <code>getMin()</code>, <code>getAverage()</code>, <code>getCount()</code>, <code>getSum()</code>을 한 번의 순회로 모두 계산하므로 성능이 좋습니다.</p>
          </div>

          <h3>ConsoleUI - 메인 메뉴 구조</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> ConsoleUI.java - 메인 메뉴</span>
            </div>
            <pre><code>{`public void start() {
    // 파일에서 데이터 불러오기
    fileStorage.loadAll(studentManager, gradeBook);

    boolean running = true;
    while (running) {
        showMenu();
        int choice = getIntInput("메뉴 선택 >> ");

        switch (choice) {
            case 1 -> addStudent();
            case 2 -> listStudents();
            case 3 -> updateStudent();
            case 4 -> deleteStudent();
            case 5 -> inputScores();
            case 6 -> viewStudentReport();
            case 7 -> gradeBook.printSubjectStatistics();
            case 8 -> gradeBook.printRanking(studentManager);
            case 0 -> {
                fileStorage.saveAll(studentManager, gradeBook);
                running = false;
                System.out.println("[알림] 프로그램을 종료합니다.");
            }
            default -> System.out.println("[오류] 올바른 메뉴 번호를 입력하세요.");
        }
    }
}

private void showMenu() {
    System.out.println("\\n╔══════════════════════════════════╗");
    System.out.println("║    학생 성적 관리 시스템           ║");
    System.out.println("╠══════════════════════════════════╣");
    System.out.println("║  [학생 관리]                      ║");
    System.out.println("║   1. 학생 등록                    ║");
    System.out.println("║   2. 학생 목록 보기               ║");
    System.out.println("║   3. 학생 정보 수정               ║");
    System.out.println("║   4. 학생 삭제                    ║");
    System.out.println("║  [성적 관리]                      ║");
    System.out.println("║   5. 성적 입력                    ║");
    System.out.println("║   6. 개인 성적표 보기             ║");
    System.out.println("║  [통계]                           ║");
    System.out.println("║   7. 과목별 통계                  ║");
    System.out.println("║   8. 전체 석차표                  ║");
    System.out.println("║                                  ║");
    System.out.println("║   0. 저장 후 종료                 ║");
    System.out.println("╚══════════════════════════════════╝");
}`}</code></pre>
          </div>

          {/* 섹션 7 */}
          <h2>7. 파일 저장과 마무리</h2>
          <p>
            학생 정보와 성적 데이터를 각각 별도의 CSV 파일로 저장하고,
            프로그램 시작 시 자동으로 불러오는 기능을 구현합니다.
            또한 예외 처리를 통해 안정적인 파일 입출력을 보장합니다.
          </p>

          <h3>FileStorage 구현</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> FileStorage.java</span>
            </div>
            <pre><code>{`package com.project.grade.util;

import com.project.grade.model.Score;
import com.project.grade.model.Student;
import com.project.grade.service.GradeBook;
import com.project.grade.service.StudentManager;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FileStorage {
    private String studentFile;
    private String scoreFile;

    public FileStorage(String studentFile, String scoreFile) {
        this.studentFile = studentFile;
        this.scoreFile = scoreFile;
    }

    // 전체 데이터 저장
    public void saveAll(StudentManager sm, GradeBook gb) {
        ensureDirectory(studentFile);
        ensureDirectory(scoreFile);
        saveStudents(sm);
        saveScores(gb);
    }

    // 전체 데이터 불러오기
    public void loadAll(StudentManager sm, GradeBook gb) {
        List<Student> students = loadStudents();
        List<Score> scores = loadScores();

        if (!students.isEmpty()) {
            sm.setStudents(students);
            System.out.println("[알림] " + students.size()
                    + "명의 학생 데이터를 불러왔습니다.");
        }
        if (!scores.isEmpty()) {
            gb.setScores(scores);
            System.out.println("[알림] " + scores.size()
                    + "건의 성적 데이터를 불러왔습니다.");
        }
    }

    private void saveStudents(StudentManager sm) {
        try (BufferedWriter writer = new BufferedWriter(
                new FileWriter(studentFile))) {
            writer.write("학번,이름,학년");
            writer.newLine();
            for (Student s : sm.getAllStudents()) {
                writer.write(s.toCsv());
                writer.newLine();
            }
            System.out.println("[저장] 학생 데이터 저장 완료");
        } catch (IOException e) {
            System.out.println("[오류] 학생 데이터 저장 실패: "
                    + e.getMessage());
        }
    }

    private void saveScores(GradeBook gb) {
        try (BufferedWriter writer = new BufferedWriter(
                new FileWriter(scoreFile))) {
            writer.write("학번,과목,점수");
            writer.newLine();
            for (Score score : gb.getAllScores()) {
                writer.write(score.toCsv());
                writer.newLine();
            }
            System.out.println("[저장] 성적 데이터 저장 완료");
        } catch (IOException e) {
            System.out.println("[오류] 성적 데이터 저장 실패: "
                    + e.getMessage());
        }
    }

    private List<Student> loadStudents() {
        List<Student> list = new ArrayList<>();
        File file = new File(studentFile);
        if (!file.exists()) return list;

        try (BufferedReader reader = new BufferedReader(
                new FileReader(studentFile))) {
            String line;
            boolean first = true;
            while ((line = reader.readLine()) != null) {
                if (first) { first = false; continue; }
                Student s = Student.fromCsv(line);
                if (s != null) list.add(s);
            }
        } catch (IOException e) {
            System.out.println("[오류] 학생 데이터 불러오기 실패: "
                    + e.getMessage());
        }
        return list;
    }

    private List<Score> loadScores() {
        List<Score> list = new ArrayList<>();
        File file = new File(scoreFile);
        if (!file.exists()) return list;

        try (BufferedReader reader = new BufferedReader(
                new FileReader(scoreFile))) {
            String line;
            boolean first = true;
            while ((line = reader.readLine()) != null) {
                if (first) { first = false; continue; }
                Score s = Score.fromCsv(line);
                if (s != null) list.add(s);
            }
        } catch (IOException e) {
            System.out.println("[오류] 성적 데이터 불러오기 실패: "
                    + e.getMessage());
        }
        return list;
    }

    private void ensureDirectory(String filePath) {
        File file = new File(filePath);
        File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            parent.mkdirs();
        }
    }
}`}</code></pre>
          </div>

          <h3>Main 클래스</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Main.java</span>
            </div>
            <pre><code>{`package com.project.grade;

import com.project.grade.ui.ConsoleUI;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== 학생 성적 관리 시스템 v1.0 ===");
        ConsoleUI ui = new ConsoleUI();
        ui.start();
    }
}`}</code></pre>
          </div>

          <h3>실행 결과 미리보기</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 통계 출력 예시</span>
            </div>
            <pre><code>{`=== 과목별 통계 ===
과목       최고점  최저점     평균
--------------------------------
국어          95     62     78.5
영어          88     55     71.3
수학          100    45     72.0
과학          92     58     75.0
사회          85     60     72.5
--------------------------------

=== 전체 석차표 ===
석차 학번       이름         총점     평균
--------------------------------------------
1    2024001    김영희       432     86.4
2    2024003    이철수       405     81.0
3    2024002    홍길동       380     76.0
4    2024004    박지수       355     71.0
--------------------------------------------`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 에러 핸들링 전략</div>
            <p>이 프로젝트에서는 다음과 같은 에러 처리 전략을 사용합니다:</p>
            <ul>
              <li><strong>모델 레벨</strong>: <code>IllegalArgumentException</code>으로 유효하지 않은 값 차단</li>
              <li><strong>서비스 레벨</strong>: boolean 반환값으로 성공/실패 전달</li>
              <li><strong>UI 레벨</strong>: while 루프로 유효한 입력이 올 때까지 재시도</li>
              <li><strong>파일 레벨</strong>: try-catch로 IOException 처리, 에러 메시지 출력 후 계속 실행</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 도전 과제</h4>
            <ol>
              <li>학년별 석차 기능을 추가하세요 (예: 1학년 내 석차, 2학년 내 석차).</li>
              <li>특정 점수 이하의 학생 목록을 출력하는 "경고 대상자" 기능을 추가하세요.</li>
              <li>성적 추이를 보여주는 기능을 구현하세요 (1차, 2차 시험 비교 등).</li>
              <li>파일 형식을 CSV 대신 Java의 <code>ObjectOutputStream</code>으로 직렬화(Serialization) 방식으로 변경해보세요.</li>
              <li>과목별 점수 분포를 콘솔에서 막대 그래프로 표현해보세요 (예: 90~100: ████ 3명).</li>
            </ol>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 프로젝트를 완성했다면</div>
            <p>이 프로젝트를 통해 <strong>다중 엔티티 관리</strong>, <strong>enum 활용</strong>, <strong>Map 기반 데이터 관리</strong>, <strong>Stream API 통계</strong>를 경험했습니다. 다음 프로젝트인 <strong>도서 관리 시스템(PJ03)</strong>에서는 JDBC와 데이터베이스를 사용하여 데이터를 영구적으로 저장하는 방법을 배웁니다. 파일 I/O에서 DB로의 전환이 어떤 장점을 가져오는지 체감할 수 있을 것입니다.</p>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('PJ02') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('PJ02')}
            >
              {isLessonCompleted('PJ02') ? '✓ 프로젝트 완료!' : '프로젝트 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/projects/01"><i className="fas fa-arrow-left"></i> 이전: 콘솔 주소록</Link>
            <Link to="/projects/03">다음: 도서 관리 시스템 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
