import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson09() {
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
            <span>Lesson 09</span>
          </div>
          <h1>Lesson 09. Java 날짜/시간 API</h1>
          <p>LocalDate/Time, Duration, Period, DateTimeFormatter를 다룹니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* ========== 1. java.time 패키지 소개 ========== */}
          <h2>1. java.time 패키지 소개</h2>
          <p>
            Java 8 이전에는 날짜와 시간을 다루기 위해 <code>java.util.Date</code>와
            <code>java.util.Calendar</code>를 사용했습니다.
            하지만 이 클래스들은 여러 심각한 문제를 안고 있었습니다.
          </p>

          <h3>Date/Calendar의 문제점</h3>
          <table className="info-table">
            <thead>
              <tr><th>문제</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>가변(Mutable) 객체</strong></td><td>Date 객체는 setter로 값이 변경 가능하여 멀티스레드 환경에서 안전하지 않습니다</td></tr>
              <tr><td><strong>월(Month)이 0부터 시작</strong></td><td>Calendar.JANUARY == 0으로 직관적이지 않아 버그 유발이 잦습니다</td></tr>
              <tr><td><strong>일관성 없는 API</strong></td><td>Date의 year는 1900부터의 오프셋, month는 0부터 시작하는 등 혼란스럽습니다</td></tr>
              <tr><td><strong>부족한 타임존 지원</strong></td><td>Date는 UTC 기반이지만 toString()은 JVM 기본 타임존으로 출력합니다</td></tr>
              <tr><td><strong>날짜/시간 분리 불가</strong></td><td>"날짜만" 또는 "시간만" 표현할 수 있는 타입이 없습니다</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> OldDateProblems.java</span></div>
            <pre><code>{`import java.util.Date;
import java.util.Calendar;

public class OldDateProblems {
    public static void main(String[] args) {
        // 문제 1: Date는 가변 객체
        Date now = new Date();
        Date copy = now;  // 같은 참조!
        copy.setTime(0);  // now도 함께 변경됨!
        System.out.println(now);  // Thu Jan 01 09:00:00 KST 1970

        // 문제 2: 월이 0부터 시작
        Calendar cal = Calendar.getInstance();
        cal.set(2024, 1, 14);  // 2월 14일! (1월이 아님)
        System.out.println(cal.get(Calendar.MONTH));  // 1 (= 2월)

        // 문제 3: year 오프셋
        Date oldDate = new Date(124, 0, 1);  // 2024년 1월 1일 (1900 + 124)
        System.out.println(oldDate);
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Java 8 날짜/시간 API 도입 배경</div>
            <p>
              기존 Date/Calendar의 문제를 해결하기 위해 Java 8에서 <code>java.time</code> 패키지가 도입되었습니다.
              이 API는 Joda-Time 라이브러리의 저자 Stephen Colebourne이 JSR-310 명세를 주도하여 설계했습니다.
              <strong>불변(Immutable)</strong> 객체를 기본으로 하며, 명확하고 직관적인 API를 제공합니다.
            </p>
          </div>

          <h3>java.time 패키지 주요 클래스</h3>
          <table className="info-table">
            <thead>
              <tr><th>클래스</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>LocalDate</code></td><td>날짜 (시간 없음)</td><td>2024-03-15</td></tr>
              <tr><td><code>LocalTime</code></td><td>시간 (날짜 없음)</td><td>14:30:00</td></tr>
              <tr><td><code>LocalDateTime</code></td><td>날짜 + 시간</td><td>2024-03-15T14:30:00</td></tr>
              <tr><td><code>ZonedDateTime</code></td><td>날짜 + 시간 + 타임존</td><td>2024-03-15T14:30:00+09:00[Asia/Seoul]</td></tr>
              <tr><td><code>Instant</code></td><td>UTC 기준 타임스탬프</td><td>2024-03-15T05:30:00Z</td></tr>
              <tr><td><code>Duration</code></td><td>시간 기반 차이</td><td>PT2H30M (2시간 30분)</td></tr>
              <tr><td><code>Period</code></td><td>날짜 기반 차이</td><td>P1Y2M3D (1년 2개월 3일)</td></tr>
            </tbody>
          </table>

          {/* ========== 2. LocalDate ========== */}
          <h2>2. LocalDate</h2>
          <p>
            <code>LocalDate</code>는 타임존 없이 <strong>날짜만</strong> 표현하는 불변 클래스입니다.
            생일, 기념일, 마감일처럼 시간 정보가 필요 없는 경우에 사용합니다.
          </p>

          <h3>LocalDate 생성</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LocalDateCreation.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.Month;

public class LocalDateCreation {
    public static void main(String[] args) {
        // 현재 날짜
        LocalDate today = LocalDate.now();
        System.out.println("오늘: " + today);  // 2024-03-15

        // 특정 날짜 생성
        LocalDate date1 = LocalDate.of(2024, 3, 15);
        LocalDate date2 = LocalDate.of(2024, Month.MARCH, 15);  // Month enum 사용
        System.out.println(date1);  // 2024-03-15

        // 문자열로부터 파싱
        LocalDate parsed = LocalDate.parse("2024-03-15");
        System.out.println(parsed);  // 2024-03-15

        // 연도의 n번째 날
        LocalDate dayOfYear = LocalDate.ofYearDay(2024, 75);
        System.out.println(dayOfYear);  // 2024-03-15 (2024년의 75번째 날)

        // epoch day (1970-01-01 기준)
        LocalDate epochDate = LocalDate.ofEpochDay(19797);
        System.out.println(epochDate);  // 2024-03-15
    }
}`}</code></pre>
          </div>

          <h3>LocalDate 조작 (날짜 연산)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LocalDateManipulation.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.DayOfWeek;
import java.time.temporal.TemporalAdjusters;

public class LocalDateManipulation {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2024, 3, 15);

        // 더하기 / 빼기
        LocalDate plus3Days = date.plusDays(3);       // 2024-03-18
        LocalDate minus2Months = date.minusMonths(2); // 2024-01-15
        LocalDate plus1Year = date.plusYears(1);      // 2025-03-15
        LocalDate plus2Weeks = date.plusWeeks(2);     // 2024-03-29

        // ChronoUnit 사용
        LocalDate plus100Days = date.plus(100, ChronoUnit.DAYS);
        System.out.println("100일 후: " + plus100Days);  // 2024-06-23

        // TemporalAdjusters - 강력한 날짜 조정
        LocalDate nextMonday = date.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
        LocalDate firstDayOfMonth = date.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate lastDayOfMonth = date.with(TemporalAdjusters.lastDayOfMonth());
        LocalDate firstDayOfNextMonth = date.with(TemporalAdjusters.firstDayOfNextMonth());

        System.out.println("다음 월요일: " + nextMonday);        // 2024-03-18
        System.out.println("이번 달 첫째 날: " + firstDayOfMonth); // 2024-03-01
        System.out.println("이번 달 마지막 날: " + lastDayOfMonth); // 2024-03-31
        System.out.println("다음 달 첫째 날: " + firstDayOfNextMonth); // 2024-04-01

        // 불변 객체이므로 원본은 변경되지 않음!
        System.out.println("원본 date: " + date);  // 2024-03-15 (변경 없음)
    }
}`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 불변 객체 주의</div>
            <p>
              <code>LocalDate</code>의 모든 연산 메서드는 <strong>새로운 객체를 반환</strong>합니다.
              <code>date.plusDays(3)</code>을 호출해도 <code>date</code> 자체는 변경되지 않습니다.
              반드시 반환값을 변수에 저장하세요. 흔한 실수로 <code>date.plusDays(3);</code>만 쓰고
              반환값을 무시하는 경우가 있습니다.
            </p>
          </div>

          <h3>LocalDate 비교와 유용한 메서드</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LocalDateUtils.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.DayOfWeek;

public class LocalDateUtils {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2024, 3, 15);
        LocalDate date2 = LocalDate.of(2024, 12, 25);

        // 비교
        System.out.println(date1.isBefore(date2));  // true
        System.out.println(date1.isAfter(date2));   // false
        System.out.println(date1.isEqual(date2));   // false

        // 정보 추출
        System.out.println("연도: " + date1.getYear());           // 2024
        System.out.println("월: " + date1.getMonthValue());       // 3
        System.out.println("월(Enum): " + date1.getMonth());      // MARCH
        System.out.println("일: " + date1.getDayOfMonth());       // 15
        System.out.println("요일: " + date1.getDayOfWeek());      // FRIDAY
        System.out.println("연중 일수: " + date1.getDayOfYear()); // 75

        // 윤년 확인
        System.out.println("윤년 여부: " + date1.isLeapYear());   // true (2024년)

        // 월의 길이
        System.out.println("이번 달 길이: " + date1.lengthOfMonth());  // 31
        System.out.println("올해 길이: " + date1.lengthOfYear());      // 366

        // 특정 요일인지 확인
        DayOfWeek dow = date1.getDayOfWeek();
        boolean isWeekend = (dow == DayOfWeek.SATURDAY || dow == DayOfWeek.SUNDAY);
        System.out.println("주말 여부: " + isWeekend);  // false
    }
}`}</code></pre>
          </div>

          {/* ========== 3. LocalTime과 LocalDateTime ========== */}
          <h2>3. LocalTime과 LocalDateTime</h2>

          <h3>LocalTime - 시간만 표현</h3>
          <p>
            <code>LocalTime</code>은 타임존 없이 <strong>시간만</strong> 표현합니다.
            영업 시간, 알람 시간 등을 다룰 때 유용합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LocalTimeExample.java</span></div>
            <pre><code>{`import java.time.LocalTime;

public class LocalTimeExample {
    public static void main(String[] args) {
        // 생성
        LocalTime now = LocalTime.now();
        LocalTime time1 = LocalTime.of(14, 30);           // 14:30
        LocalTime time2 = LocalTime.of(14, 30, 45);       // 14:30:45
        LocalTime time3 = LocalTime.of(14, 30, 45, 123456789); // 나노초까지
        LocalTime parsed = LocalTime.parse("14:30:45");

        System.out.println("현재 시간: " + now);
        System.out.println("time1: " + time1);  // 14:30

        // 조작
        LocalTime plusHours = time1.plusHours(2);       // 16:30
        LocalTime minusMinutes = time1.minusMinutes(45); // 13:45
        LocalTime plusSeconds = time1.plusSeconds(90);    // 14:31:30

        // 자정 넘김 처리 (자동 순환)
        LocalTime nearMidnight = LocalTime.of(23, 30);
        LocalTime afterMidnight = nearMidnight.plusHours(2);
        System.out.println("자정 넘김: " + afterMidnight);  // 01:30

        // 정보 추출
        System.out.println("시: " + time1.getHour());    // 14
        System.out.println("분: " + time1.getMinute());  // 30
        System.out.println("초: " + time1.getSecond());  // 0

        // 비교
        System.out.println(time1.isBefore(time2));  // true (초 단위 차이)

        // 상수
        System.out.println("자정: " + LocalTime.MIDNIGHT);  // 00:00
        System.out.println("정오: " + LocalTime.NOON);      // 12:00
        System.out.println("최대: " + LocalTime.MAX);       // 23:59:59.999999999
    }
}`}</code></pre>
          </div>

          <h3>LocalDateTime - 날짜 + 시간</h3>
          <p>
            <code>LocalDateTime</code>은 <code>LocalDate</code>와 <code>LocalTime</code>을 합친 것으로,
            날짜와 시간을 함께 표현합니다. 타임존이 없으므로 "로컬" 날짜/시간을 나타냅니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LocalDateTimeExample.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.Month;

public class LocalDateTimeExample {
    public static void main(String[] args) {
        // 생성
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime dt1 = LocalDateTime.of(2024, 3, 15, 14, 30);
        LocalDateTime dt2 = LocalDateTime.of(2024, Month.MARCH, 15, 14, 30, 45);

        // LocalDate + LocalTime 조합
        LocalDate date = LocalDate.of(2024, 3, 15);
        LocalTime time = LocalTime.of(14, 30);
        LocalDateTime combined = LocalDateTime.of(date, time);
        LocalDateTime combined2 = date.atTime(time);
        LocalDateTime combined3 = date.atTime(14, 30);
        LocalDateTime combined4 = time.atDate(date);

        System.out.println(combined);  // 2024-03-15T14:30

        // 문자열 파싱
        LocalDateTime parsed = LocalDateTime.parse("2024-03-15T14:30:00");

        // LocalDate / LocalTime 분리
        LocalDate extractedDate = dt1.toLocalDate();
        LocalTime extractedTime = dt1.toLocalTime();
        System.out.println("날짜: " + extractedDate);  // 2024-03-15
        System.out.println("시간: " + extractedTime);  // 14:30

        // 조작 (LocalDate, LocalTime의 모든 메서드 사용 가능)
        LocalDateTime nextDay = dt1.plusDays(1).plusHours(2);
        System.out.println("다음 날 +2시간: " + nextDay);  // 2024-03-16T16:30

        // 특정 필드 변경
        LocalDateTime modified = dt1.withYear(2025).withMonth(6).withHour(9);
        System.out.println("변경: " + modified);  // 2025-06-15T09:30
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> LocalDateTime vs ZonedDateTime 선택 기준</div>
            <p>
              <strong>LocalDateTime</strong>은 타임존 정보가 없어서 "이 시간이 어느 나라 시간인지" 알 수 없습니다.
              같은 서버, 같은 타임존에서만 사용하는 경우에는 적합하지만,
              국제 서비스나 서로 다른 타임존의 사용자를 다루는 경우에는 반드시
              <code>ZonedDateTime</code> 또는 <code>Instant</code>를 사용하세요.
            </p>
          </div>

          {/* ========== 4. ZonedDateTime과 시간대 ========== */}
          <h2>4. ZonedDateTime과 시간대</h2>
          <p>
            글로벌 서비스를 개발할 때는 시간대(Timezone) 처리가 필수입니다.
            <code>ZonedDateTime</code>은 날짜, 시간, 그리고 <strong>타임존 정보</strong>를 모두 포함합니다.
          </p>

          <h3>ZoneId와 ZonedDateTime</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ZonedDateTimeExample.java</span></div>
            <pre><code>{`import java.time.*;
import java.util.Set;

public class ZonedDateTimeExample {
    public static void main(String[] args) {
        // 사용 가능한 타임존 확인
        Set<String> zoneIds = ZoneId.getAvailableZoneIds();
        System.out.println("타임존 수: " + zoneIds.size());  // 약 600개

        // ZoneId 생성
        ZoneId seoulZone = ZoneId.of("Asia/Seoul");
        ZoneId tokyoZone = ZoneId.of("Asia/Tokyo");
        ZoneId nyZone = ZoneId.of("America/New_York");
        ZoneId utcZone = ZoneId.of("UTC");
        ZoneId systemZone = ZoneId.systemDefault();  // 시스템 기본 타임존

        // ZonedDateTime 생성
        ZonedDateTime nowSeoul = ZonedDateTime.now(seoulZone);
        ZonedDateTime nowNY = ZonedDateTime.now(nyZone);
        System.out.println("서울: " + nowSeoul);
        System.out.println("뉴욕: " + nowNY);

        // 특정 날짜/시간 + 타임존
        ZonedDateTime meeting = ZonedDateTime.of(
            2024, 3, 15, 14, 30, 0, 0, seoulZone
        );
        System.out.println("회의: " + meeting);
        // 2024-03-15T14:30+09:00[Asia/Seoul]

        // LocalDateTime -> ZonedDateTime 변환
        LocalDateTime ldt = LocalDateTime.of(2024, 3, 15, 14, 30);
        ZonedDateTime zdt = ldt.atZone(seoulZone);
        System.out.println(zdt);  // 2024-03-15T14:30+09:00[Asia/Seoul]
    }
}`}</code></pre>
          </div>

          <h3>시간대 변환</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TimezoneConversion.java</span></div>
            <pre><code>{`import java.time.*;

public class TimezoneConversion {
    public static void main(String[] args) {
        ZoneId seoulZone = ZoneId.of("Asia/Seoul");
        ZoneId nyZone = ZoneId.of("America/New_York");
        ZoneId londonZone = ZoneId.of("Europe/London");

        // 서울 시간 14:30
        ZonedDateTime seoulTime = ZonedDateTime.of(
            2024, 3, 15, 14, 30, 0, 0, seoulZone
        );

        // 같은 순간을 다른 타임존으로 변환
        ZonedDateTime nyTime = seoulTime.withZoneSameInstant(nyZone);
        ZonedDateTime londonTime = seoulTime.withZoneSameInstant(londonZone);

        System.out.println("서울:  " + seoulTime);   // 14:30+09:00
        System.out.println("뉴욕:  " + nyTime);      // 01:30-04:00 (전날)
        System.out.println("런던:  " + londonTime);   // 05:30+00:00

        // withZoneSameLocal vs withZoneSameInstant
        // withZoneSameInstant: 같은 "순간"을 다른 타임존으로 (시간 변경됨)
        // withZoneSameLocal: 같은 "로컬 시간"에 타임존만 교체 (순간이 달라짐)
        ZonedDateTime sameLocal = seoulTime.withZoneSameLocal(nyZone);
        System.out.println("같은 로컬 시간: " + sameLocal);
        // 14:30-04:00 (시간은 같지만 다른 순간!)
    }
}`}</code></pre>
          </div>

          <h3>Instant - UTC 기준 타임스탬프</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> InstantExample.java</span></div>
            <pre><code>{`import java.time.*;

public class InstantExample {
    public static void main(String[] args) {
        // Instant = UTC 기준의 순간 (epoch 이후 초/나노초)
        Instant now = Instant.now();
        System.out.println("현재 UTC: " + now);  // 2024-03-15T05:30:00.123Z

        // epoch 초로부터 생성
        Instant fromEpoch = Instant.ofEpochSecond(1710478200L);
        Instant fromMilli = Instant.ofEpochMilli(1710478200000L);

        // Instant -> ZonedDateTime 변환
        ZonedDateTime seoulTime = now.atZone(ZoneId.of("Asia/Seoul"));
        System.out.println("서울 시간: " + seoulTime);

        // ZonedDateTime -> Instant 변환
        Instant instant = seoulTime.toInstant();

        // 실행 시간 측정
        Instant start = Instant.now();
        // ... 작업 수행 ...
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        Instant end = Instant.now();
        Duration elapsed = Duration.between(start, end);
        System.out.println("실행 시간: " + elapsed.toMillis() + "ms");
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 서버 시간 관리 Best Practice</div>
            <p>
              서버에서는 항상 <strong>UTC(Instant)</strong>로 시간을 저장하고,
              사용자에게 보여줄 때만 해당 사용자의 타임존으로 변환하는 것이 좋습니다.
              DB에도 UTC로 저장하면 타임존 관련 버그를 크게 줄일 수 있습니다.
              JVM의 기본 타임존에 의존하지 마세요.
            </p>
          </div>

          {/* ========== 5. Duration과 Period ========== */}
          <h2>5. Duration과 Period</h2>
          <p>
            두 시점 사이의 차이를 표현할 때 <code>Duration</code>과 <code>Period</code>를 사용합니다.
            <code>Duration</code>은 시간 기반(초, 나노초), <code>Period</code>는 날짜 기반(년, 월, 일)입니다.
          </p>

          <h3>Duration - 시간 기반 차이</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DurationExample.java</span></div>
            <pre><code>{`import java.time.*;

public class DurationExample {
    public static void main(String[] args) {
        // 두 시간 사이의 차이
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 30);
        Duration workDuration = Duration.between(start, end);
        System.out.println("근무 시간: " + workDuration);  // PT8H30M

        // 두 LocalDateTime 사이의 차이
        LocalDateTime dt1 = LocalDateTime.of(2024, 3, 15, 9, 0);
        LocalDateTime dt2 = LocalDateTime.of(2024, 3, 16, 17, 30);
        Duration duration = Duration.between(dt1, dt2);
        System.out.println("차이: " + duration);  // PT32H30M

        // Duration 생성
        Duration hours = Duration.ofHours(2);          // PT2H
        Duration minutes = Duration.ofMinutes(150);    // PT2H30M
        Duration seconds = Duration.ofSeconds(3661);   // PT1H1M1S
        Duration parsed = Duration.parse("PT2H30M");   // ISO-8601 형식

        // Duration 정보 추출
        System.out.println("총 초: " + workDuration.getSeconds());       // 30600
        System.out.println("총 분: " + workDuration.toMinutes());        // 510
        System.out.println("총 시간: " + workDuration.toHours());        // 8
        System.out.println("시간 부분: " + workDuration.toHoursPart());  // 8
        System.out.println("분 부분: " + workDuration.toMinutesPart());  // 30

        // Duration 연산
        Duration doubled = workDuration.multipliedBy(2);  // PT17H
        Duration half = workDuration.dividedBy(2);        // PT4H15M
        Duration added = hours.plus(minutes);             // PT4H30M

        // 음수 Duration
        Duration negative = Duration.between(end, start);
        System.out.println("음수: " + negative);           // PT-8H-30M
        System.out.println("절댓값: " + negative.abs());   // PT8H30M
        System.out.println("음수?: " + negative.isNegative()); // true
    }
}`}</code></pre>
          </div>

          <h3>Period - 날짜 기반 차이</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PeriodExample.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.Period;

public class PeriodExample {
    public static void main(String[] args) {
        // 두 날짜 사이의 차이
        LocalDate start = LocalDate.of(2020, 1, 1);
        LocalDate end = LocalDate.of(2024, 3, 15);
        Period period = Period.between(start, end);

        System.out.println("기간: " + period);  // P4Y2M14D
        System.out.println(period.getYears() + "년 "
            + period.getMonths() + "개월 "
            + period.getDays() + "일");  // 4년 2개월 14일

        // Period 생성
        Period oneYear = Period.ofYears(1);       // P1Y
        Period twoMonths = Period.ofMonths(2);    // P2M
        Period tenDays = Period.ofDays(10);       // P10D
        Period custom = Period.of(1, 2, 3);       // P1Y2M3D
        Period parsed = Period.parse("P1Y6M");    // ISO-8601 형식

        // Period를 날짜에 적용
        LocalDate date = LocalDate.of(2024, 1, 1);
        LocalDate later = date.plus(Period.ofMonths(3));
        System.out.println("3개월 후: " + later);  // 2024-04-01

        // 총 개월 수
        System.out.println("총 개월: " + period.toTotalMonths());  // 50

        // Period 정규화 (일 -> 월 변환은 안 됨)
        Period unnormalized = Period.of(1, 14, 0);
        Period normalized = unnormalized.normalized();
        System.out.println("정규화: " + normalized);  // P2Y2M (14개월 -> 1년 2개월)
    }
}`}</code></pre>
          </div>

          <h3>ChronoUnit으로 차이 계산</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ChronoUnitExample.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class ChronoUnitExample {
    public static void main(String[] args) {
        LocalDate start = LocalDate.of(2024, 1, 1);
        LocalDate end = LocalDate.of(2024, 12, 31);

        // 두 날짜 사이의 차이를 다양한 단위로
        long daysBetween = ChronoUnit.DAYS.between(start, end);
        long weeksBetween = ChronoUnit.WEEKS.between(start, end);
        long monthsBetween = ChronoUnit.MONTHS.between(start, end);

        System.out.println("일 수: " + daysBetween);    // 365
        System.out.println("주 수: " + weeksBetween);    // 52
        System.out.println("개월 수: " + monthsBetween);  // 11

        // LocalDateTime 차이
        LocalDateTime dt1 = LocalDateTime.of(2024, 3, 15, 9, 0);
        LocalDateTime dt2 = LocalDateTime.of(2024, 3, 16, 17, 30);

        long hours = ChronoUnit.HOURS.between(dt1, dt2);
        long minutes = ChronoUnit.MINUTES.between(dt1, dt2);
        System.out.println("시간 차이: " + hours + "시간");     // 32시간
        System.out.println("분 차이: " + minutes + "분");       // 1950분

        // D-Day 계산
        LocalDate today = LocalDate.now();
        LocalDate targetDate = LocalDate.of(2024, 12, 25);
        long dDay = ChronoUnit.DAYS.between(today, targetDate);
        System.out.println("크리스마스까지: D-" + dDay);
    }
}`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> Duration vs Period 혼동 주의</div>
            <p>
              <code>Duration</code>은 <strong>시간 기반</strong> (초, 나노초)이므로 <code>LocalTime</code>,
              <code>LocalDateTime</code>, <code>Instant</code>에 사용합니다.
              <code>Period</code>는 <strong>날짜 기반</strong> (년, 월, 일)이므로 <code>LocalDate</code>에 사용합니다.
              <code>LocalDate</code>에 <code>Duration</code>을 더하면 <code>UnsupportedTemporalTypeException</code>이
              발생합니다.
            </p>
          </div>

          {/* ========== 6. DateTimeFormatter ========== */}
          <h2>6. DateTimeFormatter</h2>
          <p>
            날짜/시간을 원하는 형식의 문자열로 변환(포맷팅)하거나,
            문자열을 날짜/시간 객체로 변환(파싱)할 때 <code>DateTimeFormatter</code>를 사용합니다.
          </p>

          <h3>기본 제공 포맷터</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> FormatterBasic.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class FormatterBasic {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.of(2024, 3, 15, 14, 30, 45);

        // 기본 제공 포맷터
        System.out.println(now.format(DateTimeFormatter.ISO_LOCAL_DATE));
        // 2024-03-15

        System.out.println(now.format(DateTimeFormatter.ISO_LOCAL_TIME));
        // 14:30:45

        System.out.println(now.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        // 2024-03-15T14:30:45

        // LocalDate의 기본 파싱 (ISO_LOCAL_DATE 형식)
        LocalDate parsed = LocalDate.parse("2024-03-15");
        System.out.println(parsed);  // 2024-03-15
    }
}`}</code></pre>
          </div>

          <h3>커스텀 패턴 포맷터</h3>
          <table className="info-table">
            <thead>
              <tr><th>패턴 문자</th><th>의미</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>yyyy</code></td><td>4자리 연도</td><td>2024</td></tr>
              <tr><td><code>yy</code></td><td>2자리 연도</td><td>24</td></tr>
              <tr><td><code>MM</code></td><td>월 (2자리)</td><td>03</td></tr>
              <tr><td><code>M</code></td><td>월 (패딩 없음)</td><td>3</td></tr>
              <tr><td><code>dd</code></td><td>일 (2자리)</td><td>15</td></tr>
              <tr><td><code>HH</code></td><td>시 (24시간제, 2자리)</td><td>14</td></tr>
              <tr><td><code>hh</code></td><td>시 (12시간제, 2자리)</td><td>02</td></tr>
              <tr><td><code>mm</code></td><td>분 (2자리)</td><td>30</td></tr>
              <tr><td><code>ss</code></td><td>초 (2자리)</td><td>45</td></tr>
              <tr><td><code>SSS</code></td><td>밀리초 (3자리)</td><td>123</td></tr>
              <tr><td><code>a</code></td><td>AM/PM</td><td>오후</td></tr>
              <tr><td><code>E</code></td><td>요일 (짧은 형태)</td><td>금</td></tr>
              <tr><td><code>EEEE</code></td><td>요일 (전체 형태)</td><td>금요일</td></tr>
              <tr><td><code>VV</code></td><td>타임존 ID</td><td>Asia/Seoul</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CustomFormatter.java</span></div>
            <pre><code>{`import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class CustomFormatter {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2024, 3, 15, 14, 30, 45);

        // 다양한 커스텀 패턴
        DateTimeFormatter f1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter f2 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        DateTimeFormatter f3 = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일");
        DateTimeFormatter f4 = DateTimeFormatter.ofPattern("yyyy-MM-dd a hh:mm", Locale.KOREA);
        DateTimeFormatter f5 = DateTimeFormatter.ofPattern("yyyy.MM.dd (E)", Locale.KOREA);

        System.out.println(dt.format(f1));  // 2024-03-15
        System.out.println(dt.format(f2));  // 2024/03/15 14:30:45
        System.out.println(dt.format(f3));  // 2024년 03월 15일
        System.out.println(dt.format(f4));  // 2024-03-15 오후 02:30
        System.out.println(dt.format(f5));  // 2024.03.15 (금)

        // 파싱 (문자열 -> 날짜/시간)
        String dateStr = "2024/03/15 14:30:45";
        LocalDateTime parsed = LocalDateTime.parse(dateStr, f2);
        System.out.println("파싱 결과: " + parsed);

        // DateTimeFormatter는 불변이며 스레드 안전
        // static final로 선언하여 재사용하는 것이 좋습니다
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> DateTimeFormatter 재사용</div>
            <p>
              <code>DateTimeFormatter</code>는 <strong>불변(Immutable)이고 스레드 안전</strong>합니다.
              매번 새로 생성하지 말고 <code>static final</code> 필드로 선언하여 재사용하세요.
              반면 <code>SimpleDateFormat</code>은 스레드 안전하지 않으므로 절대 공유하면 안 됩니다.
            </p>
          </div>

          <h3>파싱 시 예외 처리</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ParsingWithValidation.java</span></div>
            <pre><code>{`import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class ParsingWithValidation {
    private static final DateTimeFormatter FORMATTER =
        DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public static LocalDate safeParse(String dateStr) {
        try {
            return LocalDate.parse(dateStr, FORMATTER);
        } catch (DateTimeParseException e) {
            System.out.println("잘못된 날짜 형식: " + dateStr);
            System.out.println("오류: " + e.getMessage());
            return null;
        }
    }

    public static void main(String[] args) {
        System.out.println(safeParse("2024-03-15"));  // 2024-03-15
        System.out.println(safeParse("2024-13-15"));  // null (13월은 없음)
        System.out.println(safeParse("2024/03/15"));  // null (형식 불일치)
        System.out.println(safeParse("abcdefgh"));    // null
    }
}`}</code></pre>
          </div>

          {/* ========== 7. 실무 활용 팁 ========== */}
          <h2>7. 실무 활용 팁</h2>

          <h3>DB 날짜 타입 매핑</h3>
          <table className="info-table">
            <thead>
              <tr><th>Java 타입</th><th>JDBC 타입</th><th>MySQL</th><th>PostgreSQL</th></tr>
            </thead>
            <tbody>
              <tr><td><code>LocalDate</code></td><td>java.sql.Date</td><td>DATE</td><td>DATE</td></tr>
              <tr><td><code>LocalTime</code></td><td>java.sql.Time</td><td>TIME</td><td>TIME</td></tr>
              <tr><td><code>LocalDateTime</code></td><td>java.sql.Timestamp</td><td>DATETIME</td><td>TIMESTAMP</td></tr>
              <tr><td><code>Instant</code></td><td>java.sql.Timestamp</td><td>TIMESTAMP</td><td>TIMESTAMPTZ</td></tr>
              <tr><td><code>OffsetDateTime</code></td><td>java.sql.Timestamp</td><td>TIMESTAMP</td><td>TIMESTAMPTZ</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JpaEntityExample.java</span></div>
            <pre><code>{`import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Instant;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // LocalDate -> DB DATE 타입으로 자동 매핑 (JPA 2.2+)
    @Column(name = "order_date")
    private LocalDate orderDate;

    // LocalDateTime -> DB DATETIME/TIMESTAMP로 자동 매핑
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Instant -> DB TIMESTAMP로 매핑 (UTC 저장에 적합)
    @Column(name = "updated_at")
    private Instant updatedAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = Instant.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = Instant.now();
    }
}`}</code></pre>
          </div>

          <h3>JSON 직렬화 (Jackson)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JacksonConfig.java</span></div>
            <pre><code>{`// 1. 의존성 추가 (build.gradle)
// implementation 'com.fasterxml.jackson.datatype:jackson-datatype-jsr310'

// 2. Spring Boot에서는 자동 등록됨. 수동 등록이 필요한 경우:
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new JavaTimeModule());
mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

// 3. DTO에서 포맷 지정
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public class OrderResponse {
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;

    // getter/setter
}

// JSON 결과:
// {
//   "id": 1,
//   "createdAt": "2024-03-15 14:30:00",
//   "orderDate": "2024-03-15"
// }`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> WRITE_DATES_AS_TIMESTAMPS 비활성화</div>
            <p>
              Jackson의 기본 설정은 날짜를 숫자 배열 <code>[2024, 3, 15, 14, 30]</code>로 직렬화합니다.
              <code>WRITE_DATES_AS_TIMESTAMPS</code>를 비활성화해야 <code>"2024-03-15T14:30:00"</code> 같은
              ISO-8601 문자열 형식으로 출력됩니다. Spring Boot에서는
              <code>spring.jackson.serialization.write-dates-as-timestamps=false</code>로 설정합니다.
            </p>
          </div>

          <h3>날짜/시간 유틸리티 클래스 설계</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DateTimeUtils.java</span></div>
            <pre><code>{`import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;

public final class DateTimeUtils {

    // 자주 사용하는 포맷터는 static final로 선언
    public static final DateTimeFormatter DATE_FORMAT =
        DateTimeFormatter.ofPattern("yyyy-MM-dd");
    public static final DateTimeFormatter DATETIME_FORMAT =
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    public static final DateTimeFormatter KOREAN_DATE =
        DateTimeFormatter.ofPattern("yyyy년 MM월 dd일");
    public static final ZoneId KST = ZoneId.of("Asia/Seoul");

    private DateTimeUtils() {} // 인스턴스 생성 방지

    /** 현재 한국 시간 */
    public static LocalDateTime nowKST() {
        return LocalDateTime.now(KST);
    }

    /** 두 날짜 사이의 영업일 수 계산 (주말 제외) */
    public static long businessDaysBetween(LocalDate start, LocalDate end) {
        long count = 0;
        LocalDate date = start;
        while (date.isBefore(end)) {
            DayOfWeek dow = date.getDayOfWeek();
            if (dow != DayOfWeek.SATURDAY && dow != DayOfWeek.SUNDAY) {
                count++;
            }
            date = date.plusDays(1);
        }
        return count;
    }

    /** 특정 월의 마지막 영업일 */
    public static LocalDate lastBusinessDayOfMonth(LocalDate date) {
        LocalDate lastDay = date.with(TemporalAdjusters.lastDayOfMonth());
        while (lastDay.getDayOfWeek() == DayOfWeek.SATURDAY
            || lastDay.getDayOfWeek() == DayOfWeek.SUNDAY) {
            lastDay = lastDay.minusDays(1);
        }
        return lastDay;
    }

    /** 나이 계산 */
    public static int calculateAge(LocalDate birthDate) {
        return Period.between(birthDate, LocalDate.now()).getYears();
    }

    /** "~전" 형태로 표시 (예: "3시간 전", "2일 전") */
    public static String timeAgo(LocalDateTime dateTime) {
        LocalDateTime now = LocalDateTime.now();
        long minutes = ChronoUnit.MINUTES.between(dateTime, now);

        if (minutes < 1) return "방금 전";
        if (minutes < 60) return minutes + "분 전";

        long hours = ChronoUnit.HOURS.between(dateTime, now);
        if (hours < 24) return hours + "시간 전";

        long days = ChronoUnit.DAYS.between(dateTime, now);
        if (days < 7) return days + "일 전";
        if (days < 30) return (days / 7) + "주 전";
        if (days < 365) return (days / 30) + "개월 전";

        return (days / 365) + "년 전";
    }

    /** epoch millis <-> LocalDateTime 변환 */
    public static LocalDateTime fromEpochMilli(long epochMilli) {
        return LocalDateTime.ofInstant(
            Instant.ofEpochMilli(epochMilli), KST);
    }

    public static long toEpochMilli(LocalDateTime dateTime) {
        return dateTime.atZone(KST).toInstant().toEpochMilli();
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 실무 핵심 정리</div>
            <ul>
              <li><strong>새 프로젝트</strong>에서는 반드시 <code>java.time</code> API를 사용하세요. <code>Date</code>/<code>Calendar</code>는 레거시입니다.</li>
              <li><strong>DB 저장</strong>: UTC(<code>Instant</code>)로 저장하고, 표시할 때 변환하세요.</li>
              <li><strong>API 응답</strong>: ISO-8601 형식(<code>yyyy-MM-ddTHH:mm:ss</code>)을 표준으로 사용하세요.</li>
              <li><strong>포맷터</strong>: <code>static final</code>로 선언하여 재사용하세요.</li>
              <li><strong>테스트</strong>: <code>Clock</code>을 주입하면 시간에 의존하는 로직을 테스트할 수 있습니다.</li>
            </ul>
          </div>

          {/* ========== 8. 연습문제 ========== */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h3>연습 1: D-Day 계산기</h3>
            <p>사용자의 생일을 입력받아 다음 생일까지 남은 일수를 계산하는 프로그램을 작성하세요.</p>
            <div className="code-block">
              <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 힌트</span></div>
              <pre><code>{`// 1. 올해 생일이 이미 지났으면 내년 생일을 기준으로
// 2. LocalDate.now()와 ChronoUnit.DAYS.between() 활용
// 3. MonthDay 클래스도 유용합니다

public static long daysUntilBirthday(LocalDate birthday) {
    LocalDate today = LocalDate.now();
    LocalDate nextBirthday = birthday.withYear(today.getYear());

    if (nextBirthday.isBefore(today) || nextBirthday.isEqual(today)) {
        nextBirthday = nextBirthday.plusYears(1);
    }

    return ChronoUnit.DAYS.between(today, nextBirthday);
}`}</code></pre>
            </div>
          </div>

          <div className="exercise-box">
            <h3>연습 2: 근무 시간 계산기</h3>
            <p>
              출근 시간과 퇴근 시간을 입력받아 총 근무 시간을 계산하세요.
              점심시간(12:00~13:00) 1시간을 제외해야 합니다.
            </p>
            <div className="code-block">
              <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 힌트</span></div>
              <pre><code>{`// Duration.between()으로 총 시간 구한 후
// 근무 시간이 점심시간을 포함하면 1시간 빼기

public static Duration calculateWorkHours(LocalTime start, LocalTime end) {
    Duration total = Duration.between(start, end);

    LocalTime lunchStart = LocalTime.of(12, 0);
    LocalTime lunchEnd = LocalTime.of(13, 0);

    // 점심시간과 겹치는지 확인
    if (start.isBefore(lunchEnd) && end.isAfter(lunchStart)) {
        total = total.minus(Duration.ofHours(1));
    }

    return total;
}`}</code></pre>
            </div>
          </div>

          <div className="exercise-box">
            <h3>연습 3: 시간대 변환 서비스</h3>
            <p>
              한국 시간(KST)을 입력하면 뉴욕, 런던, 도쿄 시간으로 동시에 변환하여
              출력하는 프로그램을 작성하세요. 서머타임(DST)도 고려해야 합니다.
            </p>
            <div className="code-block">
              <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 힌트</span></div>
              <pre><code>{`// ZonedDateTime과 withZoneSameInstant() 활용
// 서머타임은 ZonedDateTime이 자동으로 처리합니다

public static void showWorldClocks(LocalDateTime kstTime) {
    ZonedDateTime kst = kstTime.atZone(ZoneId.of("Asia/Seoul"));

    Map<String, ZoneId> zones = Map.of(
        "뉴욕", ZoneId.of("America/New_York"),
        "런던", ZoneId.of("Europe/London"),
        "도쿄", ZoneId.of("Asia/Tokyo")
    );

    DateTimeFormatter fmt =
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm (z)");

    System.out.println("서울: " + kst.format(fmt));
    zones.forEach((name, zone) -> {
        ZonedDateTime converted = kst.withZoneSameInstant(zone);
        System.out.println(name + ": " + converted.format(fmt));
    });
}`}</code></pre>
            </div>
          </div>

          <div className="exercise-box">
            <h3>연습 4: 날짜 포맷 변환기</h3>
            <p>
              다양한 형식의 날짜 문자열을 받아서 통일된 형식으로 변환하는 메서드를 작성하세요.
              지원 형식: <code>yyyy-MM-dd</code>, <code>yyyy/MM/dd</code>,
              <code>yyyyMMdd</code>, <code>dd-MM-yyyy</code>
            </p>
            <div className="code-block">
              <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 힌트</span></div>
              <pre><code>{`// 여러 포맷터를 순서대로 시도하는 방식

private static final List<DateTimeFormatter> FORMATTERS = List.of(
    DateTimeFormatter.ofPattern("yyyy-MM-dd"),
    DateTimeFormatter.ofPattern("yyyy/MM/dd"),
    DateTimeFormatter.ofPattern("yyyyMMdd"),
    DateTimeFormatter.ofPattern("dd-MM-yyyy")
);

public static String normalize(String dateStr) {
    for (DateTimeFormatter fmt : FORMATTERS) {
        try {
            LocalDate date = LocalDate.parse(dateStr, fmt);
            return date.format(DateTimeFormatter.ISO_LOCAL_DATE);
        } catch (DateTimeParseException e) {
            // 다음 포맷 시도
        }
    }
    throw new IllegalArgumentException("지원하지 않는 날짜 형식: " + dateStr);
}`}</code></pre>
            </div>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('PR09') ? 'btn-primary' : 'btn-accent'}`} onClick={() => completeLesson('PR09')}>
              {isLessonCompleted('PR09') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/practical/08"><i className="fas fa-arrow-left"></i> 이전: 로깅과 디버깅</Link>
            <Link to="/practical/10">다음: Linux와 서버 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
