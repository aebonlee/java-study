import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson11() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 11</span>
          </div>
          <h1>Chapter 11. 멀티스레드와 동시성</h1>
          <p>Thread, synchronized, ExecutorService를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 스레드 생성</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ThreadBasics.java</span></div>
            <pre><code>{`// 방법 1: Thread 상속
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(getName() + ": " + i);
        }
    }
}

// 방법 2: Runnable 구현 (추천)
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

// 방법 3: 람다
Thread t3 = new Thread(() -> {
    System.out.println("람다 스레드 실행!");
});

// 실행
new MyThread().start();
new Thread(new MyRunnable()).start();
t3.start();`}</code></pre>
          </div>

          <h2>2. synchronized</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SyncExample.java</span></div>
            <pre><code>{`public class BankAccount {
    private int balance = 0;

    // synchronized 메서드
    public synchronized void deposit(int amount) {
        balance += amount;
    }

    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }

    // synchronized 블록 (더 세밀한 제어)
    private final Object lock = new Object();

    public void transfer(BankAccount target, int amount) {
        synchronized (lock) {
            if (this.balance >= amount) {
                this.balance -= amount;
                target.deposit(amount);
            }
        }
    }

    public int getBalance() { return balance; }
}`}</code></pre>
          </div>

          <h2>3. ExecutorService</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ExecutorExample.java</span></div>
            <pre><code>{`import java.util.concurrent.*;

// 스레드 풀 생성
ExecutorService executor = Executors.newFixedThreadPool(3);

// Runnable 제출
for (int i = 0; i < 10; i++) {
    final int taskId = i;
    executor.submit(() -> {
        System.out.println("Task " + taskId + " - " +
            Thread.currentThread().getName());
    });
}

// Callable & Future (반환값 있음)
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(1000);
    return 42;
});

System.out.println("결과: " + future.get());  // 블로킹

executor.shutdown();  // 모든 작업 완료 후 종료`}</code></pre>
          </div>

          <h2>4. CompletableFuture</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CompletableFutureEx.java</span></div>
            <pre><code>{`import java.util.concurrent.CompletableFuture;

// 비동기 실행
CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {
    // 비동기 작업
    return "Hello";
});

// 체이닝
CompletableFuture<String> result = cf
    .thenApply(s -> s + " World")        // 변환
    .thenApply(String::toUpperCase);     // 변환

System.out.println(result.get());  // HELLO WORLD

// 두 작업 조합
CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> cf2 = CompletableFuture.supplyAsync(() -> "World");

cf1.thenCombine(cf2, (s1, s2) -> s1 + " " + s2)
   .thenAccept(System.out::println);  // Hello World`}</code></pre>
          </div>

          <h2>5. 동시성 컬렉션</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ConcurrentCollections.java</span></div>
            <pre><code>{`import java.util.concurrent.*;

// ConcurrentHashMap (스레드 안전 Map)
ConcurrentMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
map.putIfAbsent("b", 2);
map.computeIfAbsent("c", key -> 3);

// CopyOnWriteArrayList (읽기 많을 때 적합)
List<String> list = new CopyOnWriteArrayList<>();
list.add("A");

// BlockingQueue (생산자-소비자 패턴)
BlockingQueue<String> queue = new LinkedBlockingQueue<>(10);
queue.put("item");           // 가득 차면 대기
String item = queue.take();  // 비어있으면 대기

// AtomicInteger (원자적 연산)
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();   // 스레드 안전한 증가
counter.compareAndSet(1, 2); // CAS 연산`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> volatile 키워드</div>
            <p><code>volatile</code>은 변수의 값을 항상 메인 메모리에서 읽도록 보장합니다. CPU 캐시가 아닌 실제 값을 읽어 가시성(visibility) 문제를 해결합니다. 단, 원자성은 보장하지 않습니다.</p>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>3개의 스레드가 동시에 1~100을 출력하는 프로그램을 작성하세요.</li>
              <li>synchronized를 사용하여 스레드 안전한 카운터를 만드세요.</li>
              <li>CompletableFuture로 3개의 API를 병렬로 호출하고 결과를 조합하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('11') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('11')}>
              {isLessonCompleted('11') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/10"><i className="fas fa-arrow-left"></i> 이전: 람다와 스트림</Link>
            <Link to="/java-learning/12">다음: 파일 I/O <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
