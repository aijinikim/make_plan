# make_plan · DJ Idea Lab

폴더에서 `claude`를 실행하면 기획 전문가 **DJ**가 픽셀아트로 인사하고, 한 번에 하나씩 질문하며 아이디어를 끌어냅니다. 브레인스토밍이 끝나면 7항목 기획서를 만들어 **중앙 허브**에 저장합니다.

```
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█· · ████████· · · · ██████· · ██████· · · █
█· · ██· · · ██· · · · ██· · ██████████· · █░
█· · ██· · · ██· · · · ██· · ██████████· · █░
█· · ██· · · ██· · · · ██· · · ██████· · · █░
█· · ██· · · ██· ██· · ██· · · · · · · · · █░
█· · ██· · · ██· ██· · ██· · · ██████· · · █░
█· · ████████· · · ████· · · · · ██· · · · █░
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

## 시작하기

### 준비물
- [Claude Code](https://code.claude.com/docs) 최신 버전 (`claude update`)
- 조직의 claude.ai 계정으로 로그인 (`/login`)
- Node.js 18 이상 (Claude Code 설치 시 함께 있음)
- 허브 **Contributor** 권한 (허브 소유자에게 요청)

### 실행
```bash
git clone https://github.com/aijinikim/make_plan.git
cd make_plan
claude
```
1. DJ 픽셀아트가 뜨면 아무 말이나 입력합니다.
2. 팀명과 이름을 알려줍니다.
3. DJ의 질문에 하나씩 답합니다. 엉뚱할수록 좋습니다.
4. 언제든 **"정리해"** 라고 하면 기획서 정리 단계로 넘어갑니다.
5. 초안을 확인하고 승인하면 허브에 저장됩니다.

처음 실행할 때 폴더 신뢰 여부와 `context7` MCP 서버 사용 여부를 묻습니다. 둘 다 허용하세요.

## 진행 단계
| 단계 | 이름 | 내용 |
|---|---|---|
| ① | 씨앗 | 누구의 어떤 불편이나 꿈에서 출발할지 찾기 |
| ② | 무한 발산 | SCAMPER, 역발상, 엉뚱가정, 페르소나 빙의 등으로 원석 15개 이상 모으기 |
| ③ | 📌 고르기 | Top 3 후보 중 하나 고르기 (합치기 가능) |
| ④ | 구체화 | 문제점 → 해결 방안 → 기술 스택 3트랙 → 유저 시나리오 → 시스템 설계 → 깃허브 |
| ⑤ | 기획서 | 7항목 기획서 확인 후 허브 저장 |

## 기획서 양식
| 번호 | 항목 |
|---|---|
| 1 | 개요 |
| 2 | 문제점 |
| 3 | 해결 방안 (기술 스택 안정형·도전형·실험형 포함) |
| 4 | 유저 시나리오 |
| 5 | 시스템 설계도 (Mermaid) |
| 6 | 깃허브 |
| 7 | 그 외 |

양식 원본: [`templates/plan-template.md`](templates/plan-template.md)

## 중앙 허브
**https://claude.ai/artifact/Wx7AnPTJAX73tpTJefQzyU**

모든 팀의 기획서가 카드로 모입니다. 팀별 필터, 검색, 항목별 의견 남기기를 지원합니다. 저장에 실패해도 기획서는 `output/` 폴더에 남아 있으니, 권한을 받은 뒤 DJ에게 "허브에 다시 올려줘"라고 하면 됩니다.

## 폴더 구조
```
make_plan/
├─ CLAUDE.md                    프로젝트 지침
├─ .mcp.json                    context7 MCP (라이브러리 최신 문서)
├─ .claude/
│  ├─ settings.json             DJ 에이전트 지정, 시작 훅, 권한
│  ├─ hooks/greet.mjs           픽셀아트 인사
│  ├─ agents/dj-planner.md      진행자 DJ
│  ├─ agents/dj-researcher.md   리서치 조수
│  └─ skills/
│     ├─ brainstorm/            발산 기법 카드
│     ├─ tech-stack/            3트랙 기술 스택 추천
│     └─ plan-doc/              기획서 작성·허브 저장
├─ templates/plan-template.md   기획서 양식
├─ hub/index.html               허브 페이지 소스
└─ output/                      로컬 기획서 사본 (git 제외)
```

## 연결된 도구
| 도구 | 상태 | 용도 |
|---|---|---|
| 웹 검색 (WebSearch/WebFetch) | 내장 | 시장·경쟁사·트렌드 리서치 |
| [Context7](https://context7.com) | `.mcp.json`에 포함 | 라이브러리 최신 문서와 버전 확인 |
| Google Drive | claude.ai 커넥터 | 팀 자료 참고, 기획서 백업. [claude.ai 설정 → 커넥터](https://claude.ai/settings/connectors)에서 연결 |
| Mermaid | 허브에서 렌더 | 유저 시나리오, 시스템 설계도 |

## 더 붙이면 좋은 도구 (선택)
| 도구 | 용도 | 링크 |
|---|---|---|
| Sequential Thinking MCP | 복잡한 아이디어를 단계별로 구조화 | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) |
| Notion MCP | 기획서를 팀 Notion에 동기화 | [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp) |
| Figma MCP | 화면 설계로 이어가기 | [help.figma.com (Dev Mode MCP)](https://help.figma.com/hc/en-us/articles/32132100833559) |
| Excalidraw | 손그림 느낌 다이어그램 | [excalidraw.com](https://excalidraw.com) |
| Mermaid Live Editor | 다이어그램 미리보기·수정 | [mermaid.live](https://mermaid.live) |
| GitHub CLI | 기획서의 깃허브 계획을 실제 리포·이슈로 생성 | [cli.github.com](https://cli.github.com) |
| Claude API | 기획한 서비스에 AI 기능 넣기 | [docs.claude.com](https://docs.claude.com) |

Sequential Thinking MCP 추가 예시:
```bash
# macOS / Linux
claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
# Windows
claude mcp add sequential-thinking -- cmd /c npx -y @modelcontextprotocol/server-sequential-thinking
```

## 픽셀아트가 안 보일 때
일부 환경에서는 시작 화면에 훅 메시지가 표시되지 않을 수 있습니다. `.claude/hooks/greet.mjs`의 `ECHO_ART_IN_REPLY`를 `true`로 바꾸면 DJ가 첫 답변에 픽셀아트를 출력합니다.
