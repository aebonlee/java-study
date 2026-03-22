import{u as a,r,j as e,L as t}from"./index-CdClLn9b.js";function l(){const{completeLesson:n,isLessonCompleted:s}=a();return r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ01"})]}),e.jsx("h1",{children:"PJ01. 콘솔 주소록"}),e.jsx("p",{children:"Java 기초 문법을 활용하여 콘솔 기반 주소록 프로그램을 처음부터 완성합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.08) 100%)",border:"1px solid var(--border-light)",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[e.jsx("i",{className:"fas fa-project-diagram",style:{fontSize:"22px",color:"#10B981"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.25rem"},children:"프로젝트 정보"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--text-secondary)",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-signal",style:{marginRight:"6px"}}),"난이도"]}),e.jsx("span",{style:{background:"#10B981",color:"#fff",borderRadius:"6px",padding:"3px 12px",fontSize:"13px",fontWeight:600},children:"입문 (Beginner)"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--text-secondary)",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-book",style:{marginRight:"6px"}}),"선수 학습"]}),e.jsxs("div",{style:{fontSize:"14px",lineHeight:1.7},children:[e.jsx(t,{to:"/java-learning/01",children:"Ch01"}),"-",e.jsx(t,{to:"/java-learning/06",children:"Ch06"}),", ",e.jsx(t,{to:"/java-learning/08",children:"Ch08"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--text-secondary)",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-tools",style:{marginRight:"6px"}}),"도구 / 환경"]}),e.jsx("div",{style:{fontSize:"14px"},children:"JDK 21, IntelliJ IDEA"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"var(--text-secondary)",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-list-check",style:{marginRight:"6px"}}),"주요 기능"]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["연락처 CRUD","검색/정렬","파일 저장/불러오기","입력 검증"].map(i=>e.jsx("span",{style:{background:"var(--bg-secondary)",borderRadius:"6px",padding:"3px 10px",fontSize:"12px",color:"var(--text-secondary)"},children:i},i))})]})]})]}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 콘솔(터미널) 환경에서 동작하는 ",e.jsx("strong",{children:"주소록 프로그램"}),"을 만듭니다. 사용자는 텍스트 메뉴를 통해 연락처를 추가, 조회, 수정, 삭제할 수 있으며, 프로그램 종료 후에도 데이터가 유지되도록 파일에 저장하는 기능까지 구현합니다."]}),e.jsx("h3",{children:"기능 요구사항 (Functional Requirements)"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"번호"}),e.jsx("th",{children:"기능"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"FR-01"}),e.jsx("td",{children:"연락처 추가"}),e.jsx("td",{children:"이름, 전화번호, 이메일, 그룹을 입력하여 연락처를 추가한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-02"}),e.jsx("td",{children:"연락처 전체 조회"}),e.jsx("td",{children:"저장된 모든 연락처를 목록으로 표시한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-03"}),e.jsx("td",{children:"연락처 검색"}),e.jsx("td",{children:"이름 또는 전화번호로 연락처를 검색한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-04"}),e.jsx("td",{children:"연락처 수정"}),e.jsx("td",{children:"기존 연락처의 정보를 변경한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-05"}),e.jsx("td",{children:"연락처 삭제"}),e.jsx("td",{children:"선택한 연락처를 삭제한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-06"}),e.jsx("td",{children:"정렬"}),e.jsx("td",{children:"이름순으로 연락처 목록을 정렬한다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"FR-07"}),e.jsx("td",{children:"파일 저장/불러오기"}),e.jsx("td",{children:"CSV 형식으로 파일에 저장하고 시작 시 불러온다"})]})]})]}),e.jsx("h3",{children:"비기능 요구사항 (Non-functional Requirements)"}),e.jsxs("ul",{children:[e.jsx("li",{children:"잘못된 입력에 대해 에러 메시지를 표시하고 재입력을 요청한다"}),e.jsx("li",{children:"전화번호 형식(010-XXXX-XXXX)을 검증한다"}),e.jsx("li",{children:"이메일 형식을 간단하게 검증한다 (@ 포함 여부)"}),e.jsx("li",{children:"프로그램 종료 시 자동으로 파일에 저장한다"})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 프로젝트 학습 방식"]}),e.jsx("p",{children:"각 섹션의 코드를 직접 작성해보세요. 코드를 그대로 복사하는 것보다, 설명을 읽고 스스로 구현한 뒤 예제 코드와 비교하는 것이 훨씬 효과적입니다. 막히는 부분이 있으면 해당 챕터를 복습하세요."})]}),e.jsx("h2",{children:"2. 프로젝트 구조 설계"}),e.jsx("p",{children:"프로젝트를 구현하기 전에 먼저 구조를 설계합니다. 클래스의 역할과 관계를 명확히 정의하면 코드 작성이 훨씬 수월해집니다."}),e.jsx("h3",{children:"패키지 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-tree"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`addressbook/
├── src/
│   └── com/
│       └── project/
│           └── addressbook/
│               ├── Main.java           // 프로그램 진입점
│               ├── model/
│               │   └── Contact.java    // 연락처 데이터 모델
│               ├── service/
│               │   └── AddressBook.java // CRUD 비즈니스 로직
│               ├── ui/
│               │   └── ConsoleUI.java  // 콘솔 입출력 처리
│               └── util/
│                   └── FileManager.java // 파일 저장/불러오기
└── data/
    └── contacts.csv                    // 연락처 데이터 파일`})})]}),e.jsx("h3",{children:"클래스 다이어그램 (텍스트)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," 클래스 관계"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────┐
│      Main        │  프로그램 시작점
│──────────────────│  ConsoleUI를 생성하고 실행
│ + main(args)     │
└────────┬─────────┘
         │ 생성
         ▼
┌──────────────────┐       ┌──────────────────┐
│    ConsoleUI     │──────▶│   AddressBook    │
│──────────────────│ 사용   │──────────────────│
│ - scanner        │       │ - contacts: List │
│ + start()        │       │ + add(contact)   │
│ + showMenu()     │       │ + update(idx, c) │
│ + handleInput()  │       │ + delete(idx)    │
└──────────────────┘       │ + getAll()       │
                           │ + search(keyword)│
                           │ + sortByName()   │
                           └────────┬─────────┘
                                    │ 포함
                                    ▼
                           ┌──────────────────┐
                           │    Contact       │
                           │──────────────────│
                           │ - name           │
                           │ - phone          │
                           │ - email          │
                           │ - group          │
                           └──────────────────┘`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 설계 팁"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"관심사의 분리(Separation of Concerns)"}),"를 적용합니다. 데이터(Model), 로직(Service), 입출력(UI)을 별도 클래스로 분리하면 유지보수가 쉬워지고 각 부분을 독립적으로 수정할 수 있습니다."]})]}),e.jsx("h2",{children:"3. 모델 클래스 구현"}),e.jsxs("p",{children:["먼저 연락처 데이터를 담을 ",e.jsx("code",{children:"Contact"})," 클래스를 만듭니다. 이 클래스는 이름, 전화번호, 이메일, 그룹 필드를 가지며, 각 필드에 대한 getter/setter를 제공합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Contact.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.project.addressbook.model;

public class Contact implements Comparable<Contact> {
    private String name;
    private String phone;
    private String email;
    private String group;  // 가족, 친구, 직장, 기타

    // 기본 생성자
    public Contact() {}

    // 모든 필드를 받는 생성자
    public Contact(String name, String phone, String email, String group) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.group = group;
    }

    // Getter 메서드
    public String getName() { return name; }
    public String getPhone() { return phone; }
    public String getEmail() { return email; }
    public String getGroup() { return group; }

    // Setter 메서드
    public void setName(String name) { this.name = name; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setEmail(String email) { this.email = email; }
    public void setGroup(String group) { this.group = group; }

    // 이름 기준 정렬을 위한 compareTo
    @Override
    public int compareTo(Contact other) {
        return this.name.compareTo(other.name);
    }

    // 출력용 toString
    @Override
    public String toString() {
        return String.format("| %-10s | %-15s | %-25s | %-6s |",
                name, phone, email, group);
    }

    // CSV 형식 변환
    public String toCsv() {
        return name + "," + phone + "," + email + "," + group;
    }

    // CSV 문자열로부터 Contact 생성
    public static Contact fromCsv(String csvLine) {
        String[] parts = csvLine.split(",");
        if (parts.length == 4) {
            return new Contact(
                parts[0].trim(),
                parts[1].trim(),
                parts[2].trim(),
                parts[3].trim()
            );
        }
        return null;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Comparable 인터페이스"]}),e.jsxs("p",{children:[e.jsx("code",{children:"Comparable<Contact>"}),"를 구현하면 ",e.jsx("code",{children:"Collections.sort()"}),"로 이름 기준 정렬이 가능합니다. ",e.jsx("code",{children:"compareTo()"})," 메서드가 음수를 반환하면 현재 객체가 앞에, 양수를 반환하면 뒤에 위치합니다."]})]}),e.jsx("h2",{children:"4. CRUD 기능 구현"}),e.jsxs("p",{children:[e.jsx("code",{children:"AddressBook"})," 클래스는 연락처 목록을 관리하는 핵심 클래스입니다.",e.jsx("code",{children:"ArrayList<Contact>"}),"를 사용하여 연락처를 저장하고, 추가/수정/삭제/조회 메서드를 제공합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AddressBook.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.project.addressbook.service;

import com.project.addressbook.model.Contact;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class AddressBook {
    private List<Contact> contacts;

    public AddressBook() {
        this.contacts = new ArrayList<>();
    }

    // CREATE - 연락처 추가
    public void addContact(Contact contact) {
        contacts.add(contact);
        System.out.println("[성공] '" + contact.getName() + "' 연락처가 추가되었습니다.");
    }

    // READ - 전체 연락처 조회
    public List<Contact> getAllContacts() {
        return Collections.unmodifiableList(contacts);
    }

    // READ - 인덱스로 연락처 조회
    public Contact getContact(int index) {
        if (index < 0 || index >= contacts.size()) {
            System.out.println("[오류] 잘못된 번호입니다.");
            return null;
        }
        return contacts.get(index);
    }

    // UPDATE - 연락처 수정
    public boolean updateContact(int index, Contact updated) {
        if (index < 0 || index >= contacts.size()) {
            System.out.println("[오류] 잘못된 번호입니다.");
            return false;
        }
        contacts.set(index, updated);
        System.out.println("[성공] 연락처가 수정되었습니다.");
        return true;
    }

    // DELETE - 연락처 삭제
    public boolean deleteContact(int index) {
        if (index < 0 || index >= contacts.size()) {
            System.out.println("[오류] 잘못된 번호입니다.");
            return false;
        }
        Contact removed = contacts.remove(index);
        System.out.println("[성공] '" + removed.getName() + "' 연락처가 삭제되었습니다.");
        return true;
    }

    // 연락처 개수
    public int getSize() {
        return contacts.size();
    }

    // 연락처 목록 설정 (파일에서 불러올 때 사용)
    public void setContacts(List<Contact> contacts) {
        this.contacts = new ArrayList<>(contacts);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 방어적 복사"]}),e.jsxs("p",{children:[e.jsx("code",{children:"getAllContacts()"}),"에서 ",e.jsx("code",{children:"Collections.unmodifiableList()"}),"를 반환합니다. 외부에서 직접 리스트를 수정하지 못하도록 방어적으로 처리하는 것이 좋은 습관입니다."]})]}),e.jsx("h2",{children:"5. 콘솔 UI와 입력 처리"}),e.jsxs("p",{children:[e.jsx("code",{children:"ConsoleUI"})," 클래스는 사용자와의 상호작용을 담당합니다. 메인 메뉴를 표시하고, 사용자 입력에 따라 적절한 기능을 실행합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ConsoleUI.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.project.addressbook.ui;

import com.project.addressbook.model.Contact;
import com.project.addressbook.service.AddressBook;
import com.project.addressbook.util.FileManager;
import java.util.List;
import java.util.Scanner;

public class ConsoleUI {
    private Scanner scanner;
    private AddressBook addressBook;
    private FileManager fileManager;

    public ConsoleUI() {
        this.scanner = new Scanner(System.in);
        this.addressBook = new AddressBook();
        this.fileManager = new FileManager("data/contacts.csv");
    }

    public void start() {
        // 프로그램 시작 시 파일에서 불러오기
        List<Contact> loaded = fileManager.loadContacts();
        if (!loaded.isEmpty()) {
            addressBook.setContacts(loaded);
            System.out.println("[알림] " + loaded.size() + "개의 연락처를 불러왔습니다.");
        }

        boolean running = true;
        while (running) {
            showMenu();
            int choice = getMenuChoice();

            switch (choice) {
                case 1 -> addContact();
                case 2 -> listContacts();
                case 3 -> searchContact();
                case 4 -> updateContact();
                case 5 -> deleteContact();
                case 6 -> sortContacts();
                case 0 -> {
                    saveAndExit();
                    running = false;
                }
                default -> System.out.println("[오류] 올바른 메뉴 번호를 입력하세요.");
            }
        }
    }

    private void showMenu() {
        System.out.println("\\n==============================");
        System.out.println("       콘 솔  주 소 록        ");
        System.out.println("==============================");
        System.out.println("  1. 연락처 추가");
        System.out.println("  2. 연락처 목록 보기");
        System.out.println("  3. 연락처 검색");
        System.out.println("  4. 연락처 수정");
        System.out.println("  5. 연락처 삭제");
        System.out.println("  6. 이름순 정렬");
        System.out.println("  0. 저장 후 종료");
        System.out.println("==============================");
        System.out.print("메뉴 선택 >> ");
    }

    private int getMenuChoice() {
        try {
            return Integer.parseInt(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    private void addContact() {
        System.out.println("\\n--- 연락처 추가 ---");
        String name = getInput("이름: ");
        String phone = getValidPhone();
        String email = getValidEmail();
        String group = getGroupInput();

        Contact contact = new Contact(name, phone, email, group);
        addressBook.addContact(contact);
    }

    private void listContacts() {
        List<Contact> contacts = addressBook.getAllContacts();
        if (contacts.isEmpty()) {
            System.out.println("\\n[알림] 저장된 연락처가 없습니다.");
            return;
        }
        System.out.println("\\n--- 연락처 목록 (" + contacts.size() + "건) ---");
        printHeader();
        for (int i = 0; i < contacts.size(); i++) {
            System.out.printf(" %3d %s%n", (i + 1), contacts.get(i));
        }
        printFooter();
    }

    private void printHeader() {
        System.out.println("+" + "-".repeat(5) + "+"
                + "-".repeat(12) + "+" + "-".repeat(17)
                + "+" + "-".repeat(27) + "+" + "-".repeat(8) + "+");
        System.out.printf("| %-3s | %-10s | %-15s | %-25s | %-6s |%n",
                "No", "이름", "전화번호", "이메일", "그룹");
        System.out.println("+" + "-".repeat(5) + "+"
                + "-".repeat(12) + "+" + "-".repeat(17)
                + "+" + "-".repeat(27) + "+" + "-".repeat(8) + "+");
    }

    private void printFooter() {
        System.out.println("+" + "-".repeat(5) + "+"
                + "-".repeat(12) + "+" + "-".repeat(17)
                + "+" + "-".repeat(27) + "+" + "-".repeat(8) + "+");
    }

    // 입력 검증 유틸리티
    private String getInput(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine().trim();
    }

    private String getValidPhone() {
        while (true) {
            String phone = getInput("전화번호 (010-XXXX-XXXX): ");
            if (phone.matches("010-\\\\d{4}-\\\\d{4}")) {
                return phone;
            }
            System.out.println("[오류] 올바른 전화번호 형식이 아닙니다. 예: 010-1234-5678");
        }
    }

    private String getValidEmail() {
        while (true) {
            String email = getInput("이메일: ");
            if (email.contains("@") && email.contains(".")) {
                return email;
            }
            System.out.println("[오류] 올바른 이메일 형식이 아닙니다.");
        }
    }

    private String getGroupInput() {
        System.out.println("그룹 선택: 1.가족  2.친구  3.직장  4.기타");
        System.out.print(">> ");
        String input = scanner.nextLine().trim();
        return switch (input) {
            case "1" -> "가족";
            case "2" -> "친구";
            case "3" -> "직장";
            default -> "기타";
        };
    }

    private void saveAndExit() {
        fileManager.saveContacts(addressBook.getAllContacts());
        System.out.println("[알림] 프로그램을 종료합니다. 감사합니다!");
        scanner.close();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," switch 표현식 (Java 14+)"]}),e.jsxs("p",{children:["Java 14부터 ",e.jsx("code",{children:"switch"})," 표현식에서 화살표(",e.jsx("code",{children:"->"}),") 문법을 사용할 수 있습니다. ",e.jsx("code",{children:"break"}),"가 필요 없고, fall-through가 발생하지 않아 더 안전합니다. JDK 21에서는 이 문법을 적극 활용하세요."]})]}),e.jsx("h3",{children:"Main 클래스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Main.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.project.addressbook;

import com.project.addressbook.ui.ConsoleUI;

public class Main {
    public static void main(String[] args) {
        ConsoleUI ui = new ConsoleUI();
        ui.start();
    }
}`})})]}),e.jsx("h2",{children:"6. 검색과 정렬 기능"}),e.jsxs("p",{children:["연락처가 많아지면 검색과 정렬 기능이 필수적입니다. 이름이나 전화번호로 검색하고, 이름순으로 정렬하는 기능을 ",e.jsx("code",{children:"AddressBook"})," 클래스에 추가합니다."]}),e.jsx("h3",{children:"검색 기능 (AddressBook에 추가)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AddressBook.java - 검색 메서드 추가"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 이름으로 검색 (부분 일치)
public List<Contact> searchByName(String keyword) {
    return contacts.stream()
            .filter(c -> c.getName().contains(keyword))
            .collect(Collectors.toList());
}

// 전화번호로 검색 (부분 일치)
public List<Contact> searchByPhone(String keyword) {
    return contacts.stream()
            .filter(c -> c.getPhone().contains(keyword))
            .collect(Collectors.toList());
}

// 통합 검색 (이름 또는 전화번호)
public List<Contact> search(String keyword) {
    return contacts.stream()
            .filter(c -> c.getName().contains(keyword)
                    || c.getPhone().contains(keyword))
            .collect(Collectors.toList());
}`})})]}),e.jsx("h3",{children:"정렬 기능"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AddressBook.java - 정렬 메서드 추가"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 이름순 정렬 (Comparable 활용)
public void sortByName() {
    Collections.sort(contacts);
    System.out.println("[성공] 이름순으로 정렬되었습니다.");
}

// Comparator를 사용한 그룹별 정렬
public void sortByGroup() {
    contacts.sort(Comparator.comparing(Contact::getGroup)
            .thenComparing(Contact::getName));
    System.out.println("[성공] 그룹별로 정렬되었습니다.");
}`})})]}),e.jsx("h3",{children:"ConsoleUI에 검색/정렬 메서드 추가"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ConsoleUI.java - 검색/정렬"]})}),e.jsx("pre",{children:e.jsx("code",{children:`private void searchContact() {
    System.out.println("\\n--- 연락처 검색 ---");
    String keyword = getInput("검색어 (이름 또는 전화번호): ");

    List<Contact> results = addressBook.search(keyword);
    if (results.isEmpty()) {
        System.out.println("[알림] 검색 결과가 없습니다.");
        return;
    }
    System.out.println("\\n--- 검색 결과 (" + results.size() + "건) ---");
    printHeader();
    for (int i = 0; i < results.size(); i++) {
        System.out.printf(" %3d %s%n", (i + 1), results.get(i));
    }
    printFooter();
}

private void sortContacts() {
    if (addressBook.getSize() == 0) {
        System.out.println("[알림] 정렬할 연락처가 없습니다.");
        return;
    }
    addressBook.sortByName();
    listContacts();  // 정렬 후 목록 표시
}

private void updateContact() {
    listContacts();
    if (addressBook.getSize() == 0) return;

    int index = getIndex("수정할 번호 입력: ");
    if (index < 0) return;

    Contact old = addressBook.getContact(index);
    System.out.println("현재 정보: " + old);
    System.out.println("(빈 칸으로 Enter하면 기존 값 유지)");

    String name = getInput("이름 [" + old.getName() + "]: ");
    String phone = getInput("전화번호 [" + old.getPhone() + "]: ");
    String email = getInput("이메일 [" + old.getEmail() + "]: ");
    String group = getInput("그룹 [" + old.getGroup() + "]: ");

    Contact updated = new Contact(
        name.isEmpty() ? old.getName() : name,
        phone.isEmpty() ? old.getPhone() : phone,
        email.isEmpty() ? old.getEmail() : email,
        group.isEmpty() ? old.getGroup() : group
    );
    addressBook.updateContact(index, updated);
}

private void deleteContact() {
    listContacts();
    if (addressBook.getSize() == 0) return;

    int index = getIndex("삭제할 번호 입력: ");
    if (index < 0) return;

    String confirm = getInput("정말 삭제하시겠습니까? (y/n): ");
    if (confirm.equalsIgnoreCase("y")) {
        addressBook.deleteContact(index);
    } else {
        System.out.println("[알림] 삭제가 취소되었습니다.");
    }
}

private int getIndex(String prompt) {
    try {
        int num = Integer.parseInt(getInput(prompt));
        return num - 1;  // 사용자에게는 1부터, 내부적으로는 0부터
    } catch (NumberFormatException e) {
        System.out.println("[오류] 숫자를 입력하세요.");
        return -1;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Stream API 활용"]}),e.jsxs("p",{children:["검색 기능에서 ",e.jsx("code",{children:"stream().filter().collect()"})," 패턴을 사용했습니다. Java 8+의 Stream API는 컬렉션을 함수형 스타일로 처리할 수 있게 해주며, 코드가 더 간결하고 읽기 쉬워집니다. Ch08에서 배운 내용을 복습해보세요."]})]}),e.jsx("h2",{children:"7. 파일 저장/불러오기와 마무리"}),e.jsx("p",{children:"프로그램을 종료해도 데이터가 유지되려면 파일에 저장해야 합니다. CSV(Comma-Separated Values) 형식으로 저장하고, 프로그램 시작 시 불러오는 기능을 구현합니다."}),e.jsx("h3",{children:"FileManager 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FileManager.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.project.addressbook.util;

import com.project.addressbook.model.Contact;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FileManager {
    private String filePath;

    public FileManager(String filePath) {
        this.filePath = filePath;
    }

    // 연락처를 CSV 파일로 저장
    public void saveContacts(List<Contact> contacts) {
        // 부모 디렉토리가 없으면 생성
        File file = new File(filePath);
        File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            parent.mkdirs();
        }

        try (BufferedWriter writer = new BufferedWriter(
                new FileWriter(filePath))) {
            // 헤더 작성
            writer.write("이름,전화번호,이메일,그룹");
            writer.newLine();

            // 데이터 작성
            for (Contact contact : contacts) {
                writer.write(contact.toCsv());
                writer.newLine();
            }
            System.out.println("[성공] " + contacts.size()
                    + "개의 연락처가 저장되었습니다.");
        } catch (IOException e) {
            System.out.println("[오류] 파일 저장 실패: " + e.getMessage());
        }
    }

    // CSV 파일에서 연락처 불러오기
    public List<Contact> loadContacts() {
        List<Contact> contacts = new ArrayList<>();
        File file = new File(filePath);

        if (!file.exists()) {
            return contacts;  // 파일이 없으면 빈 리스트 반환
        }

        try (BufferedReader reader = new BufferedReader(
                new FileReader(filePath))) {
            String line;
            boolean isFirstLine = true;

            while ((line = reader.readLine()) != null) {
                // 첫 줄(헤더)은 건너뛰기
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }

                Contact contact = Contact.fromCsv(line);
                if (contact != null) {
                    contacts.add(contact);
                }
            }
        } catch (IOException e) {
            System.out.println("[오류] 파일 불러오기 실패: " + e.getMessage());
        }

        return contacts;
    }
}`})})]}),e.jsx("h3",{children:"저장되는 CSV 파일 예시"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-csv"})," contacts.csv"]})}),e.jsx("pre",{children:e.jsx("code",{children:`이름,전화번호,이메일,그룹
홍길동,010-1234-5678,hong@example.com,친구
김영희,010-9876-5432,kim@example.com,가족
이철수,010-5555-1234,lee@company.com,직장`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," try-with-resources"]}),e.jsxs("p",{children:[e.jsx("code",{children:"try (BufferedWriter writer = ...)"})," 구문은 Java 7에서 도입된 ",e.jsx("strong",{children:"try-with-resources"}),"입니다. ",e.jsx("code",{children:"AutoCloseable"}),"을 구현한 리소스를 자동으로 닫아주므로 ",e.jsx("code",{children:"finally"})," 블록에서 ",e.jsx("code",{children:"close()"}),"를 호출할 필요가 없습니다."]})]}),e.jsx("h3",{children:"실행 결과 미리보기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," 실행 화면"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[알림] 3개의 연락처를 불러왔습니다.

==============================
       콘 솔  주 소 록
==============================
  1. 연락처 추가
  2. 연락처 목록 보기
  3. 연락처 검색
  4. 연락처 수정
  5. 연락처 삭제
  6. 이름순 정렬
  0. 저장 후 종료
==============================
메뉴 선택 >> 2

--- 연락처 목록 (3건) ---
+-----+------------+-----------------+---------------------------+--------+
| No  | 이름       | 전화번호        | 이메일                     | 그룹   |
+-----+------------+-----------------+---------------------------+--------+
   1 | 홍길동     | 010-1234-5678   | hong@example.com          | 친구   |
   2 | 김영희     | 010-9876-5432   | kim@example.com           | 가족   |
   3 | 이철수     | 010-5555-1234   | lee@company.com           | 직장   |
+-----+------------+-----------------+---------------------------+--------+`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 도전 과제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:'그룹별 필터링 기능을 추가하세요 (예: "친구" 그룹의 연락처만 표시).'}),e.jsx("li",{children:"중복 연락처(같은 전화번호) 등록을 방지하는 기능을 추가하세요."}),e.jsxs("li",{children:["연락처를 JSON 형식으로도 저장할 수 있도록 ",e.jsx("code",{children:"JsonFileManager"})," 클래스를 만들어보세요."]}),e.jsxs("li",{children:["전화번호 검증을 정규표현식 ",e.jsx("code",{children:"Pattern"})," 클래스를 활용하여 더 정밀하게 구현하세요."]}),e.jsxs("li",{children:["연락처에 ",e.jsx("code",{children:"address"}),"(주소) 필드를 추가하고 CSV 형식도 함께 수정해보세요."]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 프로젝트를 완성했다면"]}),e.jsxs("p",{children:["전체 코드를 IntelliJ에서 실행해보고, 다양한 입력 시나리오를 테스트하세요. 예외적인 상황(빈 입력, 특수문자, 존재하지 않는 번호 삭제 등)에서도 프로그램이 정상 동작하는지 확인하는 것이 중요합니다. 다음 프로젝트인 ",e.jsx("strong",{children:"학생 성적 관리 시스템"}),"에서는 더 복잡한 데이터 구조와 통계 기능을 다룹니다."]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("PJ01")?"btn-primary":"btn-accent"}`,onClick:()=>n("PJ01"),children:s("PJ01")?"✓ 프로젝트 완료!":"프로젝트 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/projects",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 프로젝트 목록"]}),e.jsxs(t,{to:"/projects/02",children:["다음: 학생 성적 관리 시스템 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
