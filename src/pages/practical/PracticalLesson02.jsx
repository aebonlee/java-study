import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson02() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/practical">실무 Java</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 02</span>
          </div>
          <h1>Lesson 02. Git과 GitHub 버전 관리</h1>
          <p>git 명령어, 브랜치, merge/rebase, GitHub PR, 협업을 학습합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          {/* ========== Section 1: 버전 관리란? ========== */}
          <h2>1. 버전 관리란?</h2>
          <p>
            버전 관리 시스템(VCS, Version Control System)은 파일의 변경 이력을 체계적으로 관리하는 도구입니다.
            소프트웨어 개발에서 소스 코드의 변경 사항을 추적하고, 여러 개발자가 동시에 작업할 수 있도록 지원합니다.
          </p>

          <h3>왜 버전 관리가 필요한가?</h3>
          <ul>
            <li><strong>변경 이력 추적</strong> - 누가, 언제, 무엇을 변경했는지 기록됩니다</li>
            <li><strong>이전 버전 복원</strong> - 문제가 발생하면 이전 상태로 되돌릴 수 있습니다</li>
            <li><strong>동시 작업</strong> - 여러 개발자가 같은 프로젝트에서 충돌 없이 작업할 수 있습니다</li>
            <li><strong>브랜치</strong> - 새로운 기능을 독립적으로 개발하고 나중에 합칠 수 있습니다</li>
            <li><strong>백업</strong> - 원격 저장소를 통해 코드를 안전하게 보관합니다</li>
          </ul>

          <h3>중앙 집중식 vs 분산 버전 관리</h3>
          <table>
            <thead>
              <tr><th>구분</th><th>중앙 집중식 (CVCS)</th><th>분산 (DVCS)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대표 도구</strong></td><td>SVN, CVS, Perforce</td><td>Git, Mercurial</td></tr>
              <tr><td><strong>저장소 구조</strong></td><td>중앙 서버에 단일 저장소</td><td>각 개발자가 전체 저장소 복제</td></tr>
              <tr><td><strong>오프라인 작업</strong></td><td>불가능 (서버 연결 필수)</td><td>가능 (로컬에서 커밋 가능)</td></tr>
              <tr><td><strong>속도</strong></td><td>네트워크 의존적</td><td>로컬 작업이라 빠름</td></tr>
              <tr><td><strong>장애 대응</strong></td><td>서버 장애 시 작업 불가</td><td>어느 복제본이든 복원 가능</td></tr>
              <tr><td><strong>브랜치</strong></td><td>무겁고 비용이 큼</td><td>가볍고 빠름</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Git의 탄생</div>
            <p>
              Git은 2005년 리누스 토르발즈(Linus Torvalds)가 리눅스 커널 개발을 위해 만들었습니다.
              빠른 속도, 단순한 설계, 비선형 개발(브랜치) 지원, 완전한 분산 구조를 목표로 설계되었으며,
              현재 전 세계에서 가장 널리 사용되는 버전 관리 시스템입니다.
            </p>
          </div>

          {/* ========== Section 2: Git 설치와 초기 설정 ========== */}
          <h2>2. Git 설치와 초기 설정</h2>

          <h3>Git 설치</h3>
          <p>운영 체제별로 Git을 설치하는 방법은 다음과 같습니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Git 설치 (OS별)</span></div>
            <pre><code>{`# Windows - 공식 사이트에서 다운로드
# https://git-scm.com/download/win
# 또는 winget 사용
winget install Git.Git

# macOS
brew install git

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# CentOS/RHEL
sudo yum install git

# 설치 확인
git --version
# git version 2.43.0`}</code></pre>
          </div>

          <h3>초기 설정 (git config)</h3>
          <p>Git을 처음 설치한 후 반드시 사용자 정보를 설정해야 합니다. 이 정보는 모든 커밋에 기록됩니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Git 초기 설정</span></div>
            <pre><code>{`# 사용자 이름 설정 (필수)
git config --global user.name "홍길동"

# 이메일 설정 (필수 - GitHub 계정 이메일과 동일하게)
git config --global user.email "hong@example.com"

# 기본 에디터 설정
git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "vim"             # Vim

# 기본 브랜치명 설정 (main 권장)
git config --global init.defaultBranch main

# 줄바꿈 처리 (Windows)
git config --global core.autocrlf true
# 줄바꿈 처리 (macOS/Linux)
git config --global core.autocrlf input

# 설정 확인
git config --list
git config user.name
git config user.email`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> config 범위</div>
            <p>
              <code>--global</code>은 현재 사용자의 모든 저장소에 적용됩니다.
              특정 프로젝트에서만 다른 설정을 사용하려면 해당 저장소 디렉토리에서 <code>--global</code> 없이
              <code>git config user.email "work@company.com"</code>처럼 설정하면 됩니다.
              <code>--system</code>은 시스템 전체에 적용되지만 거의 사용하지 않습니다.
            </p>
          </div>

          {/* ========== Section 3: Git 기본 명령어 ========== */}
          <h2>3. Git 기본 명령어</h2>

          <h3>Git의 세 가지 영역</h3>
          <p>Git은 파일을 세 가지 영역에서 관리합니다.</p>
          <ul>
            <li><strong>Working Directory (작업 디렉토리)</strong> - 실제 파일이 존재하는 공간</li>
            <li><strong>Staging Area (스테이징 영역)</strong> - 커밋할 파일들을 준비하는 공간 (Index라고도 함)</li>
            <li><strong>Repository (저장소)</strong> - 커밋된 스냅샷이 저장되는 공간 (.git 디렉토리)</li>
          </ul>

          <h3>핵심 명령어 요약</h3>
          <table>
            <thead>
              <tr><th>명령어</th><th>설명</th><th>사용 예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>git init</code></td><td>새로운 Git 저장소 초기화</td><td><code>git init</code></td></tr>
              <tr><td><code>git status</code></td><td>현재 상태 확인</td><td><code>git status</code></td></tr>
              <tr><td><code>git add</code></td><td>스테이징 영역에 추가</td><td><code>git add .</code></td></tr>
              <tr><td><code>git commit</code></td><td>변경사항 커밋</td><td><code>git commit -m "메시지"</code></td></tr>
              <tr><td><code>git log</code></td><td>커밋 이력 조회</td><td><code>git log --oneline</code></td></tr>
              <tr><td><code>git diff</code></td><td>변경 내용 비교</td><td><code>git diff HEAD</code></td></tr>
              <tr><td><code>git restore</code></td><td>변경사항 되돌리기</td><td><code>git restore file.txt</code></td></tr>
              <tr><td><code>git rm</code></td><td>파일 삭제 및 스테이징</td><td><code>git rm file.txt</code></td></tr>
              <tr><td><code>git stash</code></td><td>작업 내용 임시 저장</td><td><code>git stash</code></td></tr>
            </tbody>
          </table>

          <h3>저장소 생성과 커밋</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 기본 워크플로우</span></div>
            <pre><code>{`# 1. 새 프로젝트 디렉토리 생성
mkdir my-project
cd my-project

# 2. Git 저장소 초기화
git init
# Initialized empty Git repository in /home/user/my-project/.git/

# 3. 파일 생성
echo "# My Project" > README.md

# 4. 상태 확인
git status
# Untracked files:
#   README.md

# 5. 스테이징 영역에 추가
git add README.md
# 또는 모든 파일 추가
git add .

# 6. 커밋
git commit -m "docs: 프로젝트 README 추가"

# 7. 커밋 이력 확인
git log
git log --oneline
git log --oneline --graph --all`}</code></pre>
          </div>

          <h3>git diff와 변경사항 관리</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 변경사항 확인과 관리</span></div>
            <pre><code>{`# Working Directory 변경사항 확인 (아직 add 안 한 것)
git diff

# Staging Area 변경사항 확인 (add 했지만 commit 안 한 것)
git diff --staged
git diff --cached    # --staged와 동일

# 특정 커밋과 비교
git diff HEAD~1      # 최근 커밋과 비교
git diff abc123      # 특정 커밋과 비교

# 스테이징 취소 (add 되돌리기)
git restore --staged file.txt

# 작업 디렉토리 변경 되돌리기 (주의: 복구 불가!)
git restore file.txt

# 이전 커밋 수정 (마지막 커밋만 가능)
git commit --amend -m "수정된 커밋 메시지"

# 작업 내용 임시 저장 (stash)
git stash                    # 현재 작업 임시 저장
git stash list               # stash 목록 확인
git stash pop                # 가장 최근 stash 복원
git stash apply stash@{0}    # 특정 stash 복원 (삭제 안 함)
git stash drop stash@{0}     # 특정 stash 삭제`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의</div>
            <p>
              <code>git restore file.txt</code>는 작업 디렉토리의 변경 사항을 영구적으로 삭제합니다.
              커밋하지 않은 변경은 복구할 수 없으므로 신중하게 사용하세요.
              불확실하다면 <code>git stash</code>로 임시 저장하는 것이 안전합니다.
            </p>
          </div>

          {/* ========== Section 4: 브랜치와 머지 ========== */}
          <h2>4. 브랜치와 머지</h2>
          <p>
            브랜치(Branch)는 독립적인 작업 흐름을 만드는 기능입니다.
            새로운 기능 개발, 버그 수정 등을 메인 코드에 영향을 주지 않고 진행할 수 있습니다.
            Git의 브랜치는 매우 가볍고 빠르기 때문에 자주 사용하는 것이 권장됩니다.
          </p>

          <h3>브랜치 기본 명령어</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 브랜치 관리</span></div>
            <pre><code>{`# 브랜치 목록 확인
git branch              # 로컬 브랜치 목록
git branch -r           # 원격 브랜치 목록
git branch -a           # 모든 브랜치 목록

# 새 브랜치 생성
git branch feature/login

# 브랜치 전환
git switch feature/login         # Git 2.23+
git checkout feature/login       # 이전 방식 (여전히 사용 가능)

# 생성과 전환을 동시에
git switch -c feature/login      # Git 2.23+
git checkout -b feature/login    # 이전 방식

# 브랜치 이름 변경
git branch -m old-name new-name

# 브랜치 삭제
git branch -d feature/login      # 머지된 브랜치만 삭제
git branch -D feature/login      # 강제 삭제 (머지 여부 무관)

# 현재 브랜치 확인
git branch --show-current`}</code></pre>
          </div>

          <h3>Merge (병합)</h3>
          <p>
            Merge는 두 브랜치의 작업 내용을 합치는 것입니다.
            Fast-forward merge와 3-way merge 두 가지 방식이 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Merge 실습</span></div>
            <pre><code>{`# 1. feature 브랜치에서 작업
git switch -c feature/user-api
# ... 파일 수정 및 커밋 ...
git add .
git commit -m "feat: 사용자 API 추가"

# 2. main 브랜치로 전환
git switch main

# 3. feature 브랜치를 main에 병합
git merge feature/user-api

# Fast-forward merge (main에 새 커밋이 없는 경우)
# main ─── A ─── B (main, feature/user-api 동일 선상)

# 3-way merge (main에도 새 커밋이 있는 경우)
# main ─── A ─── C ─── M (merge commit)
#            \\         /
#             B ─── D     (feature/user-api)

# merge commit 없이 병합 (Fast-forward만 허용)
git merge --ff-only feature/user-api

# 항상 merge commit 생성
git merge --no-ff feature/user-api

# 4. 병합 후 feature 브랜치 삭제
git branch -d feature/user-api`}</code></pre>
          </div>

          <h3>Rebase</h3>
          <p>
            Rebase는 브랜치의 기준점(base)을 다시 설정하여 커밋 히스토리를 깔끔하게 정리합니다.
            Merge와 결과는 같지만 히스토리가 직선(linear)으로 유지됩니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Rebase 실습</span></div>
            <pre><code>{`# Merge 방식의 히스토리
# main ─── A ─── C ─── M (merge commit)
#            \\         /
#             B ─── D     (feature)

# Rebase 방식의 히스토리
# main ─── A ─── C ─── B' ─── D' (깔끔한 직선)

# 1. feature 브랜치에서 rebase 실행
git switch feature/user-api
git rebase main

# 2. main으로 전환 후 fast-forward merge
git switch main
git merge feature/user-api    # Fast-forward!

# Interactive Rebase (커밋 정리)
git rebase -i HEAD~3
# pick   abc1234  feat: 기능 A 추가
# squash def5678  fix: 오타 수정       ← squash로 이전 커밋에 합침
# pick   ghi9012  feat: 기능 B 추가`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> Rebase 주의사항</div>
            <p>
              <strong>이미 원격에 push한 커밋은 절대 rebase하지 마세요!</strong> Rebase는 커밋 해시를 변경하므로,
              다른 개발자와 공유한 커밋을 rebase하면 심각한 충돌이 발생합니다.
              Rebase는 아직 push하지 않은 로컬 커밋에만 사용하세요.
            </p>
          </div>

          <h3>Conflict (충돌) 해결</h3>
          <p>
            같은 파일의 같은 부분을 서로 다르게 수정한 경우 충돌이 발생합니다.
            Git이 자동으로 병합할 수 없어 수동으로 해결해야 합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 충돌 발생 시 파일 내용</span></div>
            <pre><code>{`public class UserService {
<<<<<<< HEAD
    // main 브랜치의 코드
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("사용자 없음"));
    }
=======
    // feature 브랜치의 코드
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
>>>>>>> feature/user-api
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 충돌 해결 과정</span></div>
            <pre><code>{`# 1. 충돌 파일 확인
git status
# both modified: src/main/java/UserService.java

# 2. 파일을 열어서 충돌 마커(<<<, ===, >>>)를 제거하고
#    원하는 코드로 수정

# 3. 해결한 파일을 스테이징
git add src/main/java/UserService.java

# 4-A. merge 충돌인 경우 - 커밋으로 완료
git commit -m "merge: feature/user-api 충돌 해결"

# 4-B. rebase 충돌인 경우 - continue로 계속 진행
git rebase --continue

# 충돌 해결을 포기하고 원래 상태로 돌아가기
git merge --abort     # merge 취소
git rebase --abort    # rebase 취소`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 충돌 예방 팁</div>
            <p>
              충돌을 줄이려면 브랜치를 자주 최신 상태로 동기화하고, 하나의 브랜치에서 너무 오래 작업하지 마세요.
              작은 단위로 자주 커밋하고, 팀원들과 작업 범위를 미리 공유하면 충돌을 최소화할 수 있습니다.
              IntelliJ IDEA의 Merge Tool을 사용하면 3-way diff 화면에서 시각적으로 충돌을 해결할 수 있습니다.
            </p>
          </div>

          {/* ========== Section 5: GitHub 사용법 ========== */}
          <h2>5. GitHub 사용법</h2>
          <p>
            GitHub는 Git 원격 저장소 호스팅 서비스입니다.
            코드 저장뿐 아니라 이슈 관리, 코드 리뷰, CI/CD, 위키 등 다양한 협업 기능을 제공합니다.
          </p>

          <h3>원격 저장소 연결</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 원격 저장소 관리</span></div>
            <pre><code>{`# GitHub에서 새 저장소 생성 후 로컬과 연결
git remote add origin https://github.com/username/my-project.git

# 원격 저장소 확인
git remote -v
# origin  https://github.com/username/my-project.git (fetch)
# origin  https://github.com/username/my-project.git (push)

# 원격 저장소 URL 변경
git remote set-url origin https://github.com/username/new-repo.git

# 원격 저장소 삭제
git remote remove origin

# 여러 원격 저장소 추가
git remote add upstream https://github.com/original/repo.git`}</code></pre>
          </div>

          <h3>clone, push, pull, fetch</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 원격 저장소 작업</span></div>
            <pre><code>{`# 원격 저장소 복제 (처음 프로젝트를 가져올 때)
git clone https://github.com/username/my-project.git
git clone https://github.com/username/my-project.git my-folder  # 다른 이름으로

# SSH로 복제 (SSH 키 설정 필요)
git clone git@github.com:username/my-project.git

# 로컬 커밋을 원격에 업로드
git push origin main

# 최초 push 시 upstream 설정
git push -u origin main    # 이후 git push만으로 가능

# 원격 변경사항 가져오기 + 병합
git pull origin main
# git pull = git fetch + git merge

# 원격 변경사항 가져오기만 (병합 안 함)
git fetch origin
git fetch --all              # 모든 원격에서 가져오기

# fetch 후 수동으로 병합
git fetch origin
git merge origin/main

# pull할 때 rebase 사용 (깔끔한 히스토리)
git pull --rebase origin main`}</code></pre>
          </div>

          <h3>SSH 키 설정</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> SSH 키 생성 및 등록</span></div>
            <pre><code>{`# 1. SSH 키 생성
ssh-keygen -t ed25519 -C "hong@example.com"
# Enter file: 엔터 (기본 경로 사용)
# Enter passphrase: 비밀번호 설정 (선택)

# 2. SSH 에이전트에 키 추가
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. 공개 키 복사
cat ~/.ssh/id_ed25519.pub
# Windows: clip < ~/.ssh/id_ed25519.pub

# 4. GitHub Settings > SSH and GPG keys > New SSH key에 붙여넣기

# 5. 연결 테스트
ssh -T git@github.com
# Hi username! You've successfully authenticated`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> HTTPS vs SSH</div>
            <p>
              HTTPS 방식은 설정이 간단하지만 push할 때마다 인증이 필요합니다 (Credential Helper로 자동화 가능).
              SSH 방식은 초기 설정이 필요하지만 이후 비밀번호 입력 없이 사용할 수 있어 실무에서 더 많이 사용됩니다.
              GitHub은 2021년 8월부터 패스워드 인증을 폐지했으므로, Personal Access Token(PAT) 또는 SSH를 사용해야 합니다.
            </p>
          </div>

          {/* ========== Section 6: Pull Request와 코드 리뷰 ========== */}
          <h2>6. Pull Request와 코드 리뷰</h2>
          <p>
            Pull Request(PR)는 브랜치의 변경 사항을 다른 브랜치에 병합해달라고 요청하는 것입니다.
            코드 리뷰를 통해 코드 품질을 높이고, 팀원 간 지식을 공유하는 핵심 협업 도구입니다.
          </p>

          <h3>PR 생성 워크플로우</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> PR 생성 과정</span></div>
            <pre><code>{`# 1. 새 브랜치 생성 및 전환
git switch -c feature/add-login

# 2. 코드 작성 및 커밋
git add .
git commit -m "feat: 로그인 기능 구현"
git commit -m "feat: 로그인 유효성 검사 추가"

# 3. 원격에 브랜치 푸시
git push -u origin feature/add-login

# 4. GitHub에서 PR 생성
#    - base: main ← compare: feature/add-login
#    - 제목, 설명, 리뷰어, 라벨 설정

# 5. GitHub CLI로 PR 생성 (gh 도구)
gh pr create --title "feat: 로그인 기능 구현" \\
  --body "## 변경 사항\\n- 로그인 API 구현\\n- 입력 유효성 검사" \\
  --reviewer teammate1,teammate2 \\
  --label "feature"`}</code></pre>
          </div>

          <h3>좋은 PR 작성법</h3>
          <table>
            <thead>
              <tr><th>항목</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>제목</strong></td><td>변경 사항을 한 줄로 요약</td><td>feat: 소셜 로그인 기능 추가</td></tr>
              <tr><td><strong>설명</strong></td><td>왜 이 변경이 필요한지 설명</td><td>사용자 편의를 위해 Google OAuth 로그인 추가</td></tr>
              <tr><td><strong>변경 범위</strong></td><td>어떤 파일/모듈이 변경되었는지</td><td>auth 모듈, UserController</td></tr>
              <tr><td><strong>테스트</strong></td><td>어떻게 테스트했는지</td><td>단위 테스트 5개 추가, 수동 QA 완료</td></tr>
              <tr><td><strong>스크린샷</strong></td><td>UI 변경 시 전후 비교</td><td>변경 전/후 스크린샷 첨부</td></tr>
              <tr><td><strong>관련 이슈</strong></td><td>관련 이슈 번호 링크</td><td>Closes #42, Fixes #35</td></tr>
            </tbody>
          </table>

          <h3>코드 리뷰 프로세스</h3>
          <ul>
            <li><strong>Approve</strong> - 코드가 적절하며 머지해도 좋음</li>
            <li><strong>Request Changes</strong> - 수정이 필요한 부분이 있음, 수정 후 재리뷰</li>
            <li><strong>Comment</strong> - 의견만 남기고 승인/거절 여부는 보류</li>
          </ul>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 코드 리뷰 코멘트 예시</span></div>
            <pre><code>{`// 리뷰어의 코멘트 예시들:

// [질문] 이 메서드의 시간 복잡도가 O(n^2)인데,
// 데이터가 많아지면 성능 이슈가 없을까요?
public List<User> findDuplicates(List<User> users) { ... }

// [제안] Optional을 사용하면 null 체크를 더 안전하게 할 수 있습니다.
// Before:
User user = userRepository.findById(id);
if (user == null) throw new NotFoundException();
// After:
User user = userRepository.findById(id)
    .orElseThrow(NotFoundException::new);

// [필수 수정] 비밀번호를 평문으로 저장하면 보안 위험이 있습니다.
// BCrypt 등의 해시 알고리즘을 사용해주세요.
user.setPassword(rawPassword);  // 위험!
user.setPassword(passwordEncoder.encode(rawPassword));  // 안전`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 효과적인 코드 리뷰 팁</div>
            <p>
              리뷰어는 단순 스타일 지적보다 로직, 보안, 성능에 집중하세요.
              PR은 작을수록 좋습니다 (200-400줄 권장). 큰 변경은 여러 PR로 나누세요.
              피드백은 구체적이고 건설적으로 작성하고, 칭찬할 부분도 함께 언급하면 좋은 리뷰 문화가 만들어집니다.
            </p>
          </div>

          {/* ========== Section 7: Git 실무 전략 ========== */}
          <h2>7. Git 실무 전략</h2>

          <h3>Git Flow</h3>
          <p>
            Git Flow는 대규모 프로젝트에서 널리 사용되는 브랜치 전략입니다.
            명확한 릴리스 주기가 있는 프로젝트에 적합합니다.
          </p>

          <table>
            <thead>
              <tr><th>브랜치</th><th>용도</th><th>생성 기준</th><th>머지 대상</th></tr>
            </thead>
            <tbody>
              <tr><td><code>main</code></td><td>운영 배포 코드</td><td>-</td><td>-</td></tr>
              <tr><td><code>develop</code></td><td>다음 릴리스 개발</td><td>main</td><td>release</td></tr>
              <tr><td><code>feature/*</code></td><td>새 기능 개발</td><td>develop</td><td>develop</td></tr>
              <tr><td><code>release/*</code></td><td>릴리스 준비</td><td>develop</td><td>main, develop</td></tr>
              <tr><td><code>hotfix/*</code></td><td>운영 긴급 수정</td><td>main</td><td>main, develop</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Git Flow 워크플로우</span></div>
            <pre><code>{`# Git Flow 도구 사용
git flow init

# Feature 브랜치
git flow feature start login
# ... 개발 작업 ...
git flow feature finish login    # develop에 머지

# Release 브랜치
git flow release start v1.0.0
# ... 릴리스 준비 (버전 번호 업데이트, 최종 테스트) ...
git flow release finish v1.0.0   # main + develop에 머지, 태그 생성

# Hotfix 브랜치
git flow hotfix start fix-login-bug
# ... 긴급 수정 ...
git flow hotfix finish fix-login-bug  # main + develop에 머지`}</code></pre>
          </div>

          <h3>GitHub Flow</h3>
          <p>
            GitHub Flow는 Git Flow보다 단순한 전략으로, 지속적 배포(CD) 환경에 적합합니다.
            <code>main</code> 브랜치와 feature 브랜치만 사용합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> GitHub Flow 워크플로우</span></div>
            <pre><code>{`# 1. main에서 브랜치 생성
git switch -c feature/user-profile

# 2. 작업 및 커밋 (작은 단위로 자주)
git add .
git commit -m "feat: 프로필 페이지 UI 구현"
git commit -m "feat: 프로필 이미지 업로드 기능"

# 3. 원격에 push
git push -u origin feature/user-profile

# 4. PR 생성 → 코드 리뷰

# 5. 리뷰 승인 후 main에 머지 (GitHub에서)

# 6. main 배포 (CI/CD 자동화)

# 7. 머지된 브랜치 삭제
git branch -d feature/user-profile
git push origin --delete feature/user-profile`}</code></pre>
          </div>

          <h3>커밋 메시지 컨벤션 (Conventional Commits)</h3>
          <p>
            팀에서 일관된 커밋 메시지를 사용하면 변경 이력을 쉽게 파악할 수 있습니다.
            가장 널리 사용되는 Conventional Commits 형식을 소개합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 커밋 메시지 형식</span></div>
            <pre><code>{`# 기본 형식
<type>(<scope>): <subject>

<body>

<footer>

# 예시
feat(auth): 소셜 로그인 기능 추가

Google과 Kakao OAuth2 로그인을 구현했습니다.
- Google OAuth2 연동
- Kakao OAuth2 연동
- 소셜 로그인 사용자 자동 회원가입

Closes #42`}</code></pre>
          </div>

          <table>
            <thead>
              <tr><th>타입</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>feat</code></td><td>새로운 기능 추가</td><td>feat: 검색 기능 구현</td></tr>
              <tr><td><code>fix</code></td><td>버그 수정</td><td>fix: 로그인 실패 시 에러 처리</td></tr>
              <tr><td><code>docs</code></td><td>문서 변경</td><td>docs: API 문서 업데이트</td></tr>
              <tr><td><code>style</code></td><td>코드 포맷팅 (동작 변경 없음)</td><td>style: 들여쓰기 수정</td></tr>
              <tr><td><code>refactor</code></td><td>코드 리팩토링</td><td>refactor: UserService 구조 개선</td></tr>
              <tr><td><code>test</code></td><td>테스트 코드</td><td>test: UserService 단위 테스트 추가</td></tr>
              <tr><td><code>chore</code></td><td>빌드, 설정 변경</td><td>chore: Gradle 의존성 업데이트</td></tr>
              <tr><td><code>perf</code></td><td>성능 개선</td><td>perf: 쿼리 최적화로 응답 50% 개선</td></tr>
              <tr><td><code>ci</code></td><td>CI/CD 설정 변경</td><td>ci: GitHub Actions 워크플로우 추가</td></tr>
            </tbody>
          </table>

          <h3>.gitignore 설정</h3>
          <p>
            <code>.gitignore</code> 파일은 Git이 추적하지 않을 파일과 디렉토리를 지정합니다.
            빌드 결과물, IDE 설정, 민감한 정보 등을 제외해야 합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> .gitignore (Java/Spring 프로젝트)</span></div>
            <pre><code>{`# === Build ===
target/
build/
out/
*.class
*.jar
*.war

# === IDE ===
# IntelliJ IDEA
.idea/
*.iml
*.iws
*.ipr

# Eclipse
.classpath
.project
.settings/

# VS Code
.vscode/

# === Gradle ===
.gradle/
gradle/wrapper/gradle-wrapper.jar

# === Maven ===
.mvn/wrapper/maven-wrapper.jar

# === 환경 설정 / 민감 정보 ===
.env
.env.local
application-secret.yml
**/src/main/resources/application-local.yml

# === OS ===
.DS_Store
Thumbs.db
desktop.ini

# === Log ===
*.log
logs/

# === 기타 ===
node_modules/
*.swp
*.swo
*~`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> gitignore.io</div>
            <p>
              <a href="https://www.toptal.com/developers/gitignore" target="_blank" rel="noopener noreferrer">gitignore.io</a>에서
              사용하는 언어, 프레임워크, IDE를 선택하면 적절한 <code>.gitignore</code> 파일을 자동 생성해줍니다.
              Java + IntelliJ + Gradle 등의 조합으로 검색하면 바로 사용 가능한 설정을 얻을 수 있습니다.
              또한 이미 추적 중인 파일을 무시하려면 <code>git rm --cached 파일명</code>을 실행해야 합니다.
            </p>
          </div>

          <h3>실무에서 자주 쓰는 Git 명령어</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 유용한 Git 명령어 모음</span></div>
            <pre><code>{`# 특정 커밋의 변경 내용 확인
git show abc1234

# 특정 파일의 변경 이력 확인
git log --follow -p -- src/main/java/UserService.java

# 특정 줄을 누가 수정했는지 확인 (blame)
git blame src/main/java/UserService.java

# 커밋 검색 (메시지로)
git log --grep="로그인"

# 커밋 검색 (코드 변경 내용으로)
git log -S "findById"

# 태그 관리
git tag v1.0.0                    # 경량 태그
git tag -a v1.0.0 -m "버전 1.0.0 릴리스"  # 주석 태그
git push origin v1.0.0            # 태그 push
git push origin --tags            # 모든 태그 push

# cherry-pick (특정 커밋만 가져오기)
git cherry-pick abc1234

# 이전 커밋으로 되돌리기 (새 커밋 생성)
git revert abc1234

# 커밋 히스토리를 깔끔하게 보기
git log --oneline --graph --all --decorate

# alias 설정 (자주 쓰는 명령어 단축)
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all --decorate"`}</code></pre>
          </div>

          {/* ========== Section 8: 연습문제 ========== */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 실습 1: Git 기본 워크플로우</h4>
            <ol>
              <li>새 디렉토리를 만들고 <code>git init</code>으로 저장소를 초기화하세요.</li>
              <li><code>git config</code>로 사용자 이름과 이메일을 설정하세요.</li>
              <li><code>README.md</code> 파일을 생성하고, add, commit을 수행하세요.</li>
              <li>파일을 수정한 뒤 <code>git diff</code>로 변경 사항을 확인하세요.</li>
              <li><code>git log --oneline</code>으로 커밋 이력을 확인하세요.</li>
            </ol>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 실습 2: 브랜치와 머지</h4>
            <ol>
              <li><code>feature/greeting</code> 브랜치를 생성하고 전환하세요.</li>
              <li><code>Greeting.java</code> 파일을 만들어 커밋하세요.</li>
              <li><code>main</code> 브랜치로 돌아와서 <code>Main.java</code>를 수정하고 커밋하세요.</li>
              <li><code>feature/greeting</code> 브랜치를 <code>main</code>에 merge하세요.</li>
              <li>의도적으로 같은 파일의 같은 줄을 양쪽 브랜치에서 수정하여 충돌을 발생시키고 해결해보세요.</li>
            </ol>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 실습 3: GitHub 협업</h4>
            <ol>
              <li>GitHub에 새 저장소를 생성하고 로컬 저장소와 연결하세요.</li>
              <li><code>git push</code>로 로컬 커밋을 원격에 업로드하세요.</li>
              <li>새 브랜치를 만들어 코드를 수정하고 push한 뒤, GitHub에서 PR을 생성하세요.</li>
              <li>PR에 설명을 작성하고, Conventional Commits 형식으로 커밋 메시지를 작성하세요.</li>
              <li>PR을 merge하고, 로컬에서 <code>git pull</code>로 최신 상태를 동기화하세요.</li>
            </ol>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 실습 4: 실무 시나리오</h4>
            <ol>
              <li>Java/Spring 프로젝트용 <code>.gitignore</code> 파일을 작성하세요.</li>
              <li><code>git stash</code>를 사용하여 작업 중인 변경사항을 임시 저장하고 복원해보세요.</li>
              <li><code>git rebase -i</code>를 사용하여 여러 커밋을 하나로 합쳐(squash)보세요.</li>
              <li><code>git blame</code>으로 특정 파일의 각 줄이 언제, 누구에 의해 변경되었는지 확인하세요.</li>
              <li><code>git cherry-pick</code>으로 다른 브랜치의 특정 커밋만 가져와보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('PR02') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('PR02')}
            >
              {isLessonCompleted('PR02') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/practical/01"><i className="fas fa-arrow-left"></i> 이전: IntelliJ IDEA</Link>
            <Link to="/practical/03">다음: Maven과 Gradle <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
