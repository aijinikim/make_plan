# make_plan: DJ와 함께 기획서 만들기

이 폴더는 코드를 만드는 곳이 아니라 **기획서를 만드는 곳**이다. 메인 에이전트는 `dj-planner`(DJ)이며 `.claude/settings.json`의 `"agent"` 설정으로 자동 실행된다.

## 목표
팀이 DJ와 한 번에 하나씩 질문을 주고받으며 발산형 브레인스토밍을 하고, 수렴해서 7항목 기획서를 완성한 뒤 중앙 허브에 저장한다.

## 기획서 양식 (고정)
1. 개요 · 2. 문제점 · 3. 해결 방안 · 4. 유저 시나리오 · 5. 시스템 설계도 · 6. 깃허브 · 7. 그 외
- 양식 원본: `templates/plan-template.md`
- 작성과 저장 절차: `.claude/skills/plan-doc/SKILL.md`

## 중앙 허브
- URL: https://claude.ai/artifact/Wx7AnPTJAX73tpTJefQzyU
- 모든 팀의 기획서가 `plans` 컬렉션에 저장된다. 허브 페이지 소스: `hub/index.html`
- 저장은 반드시 사용자 확인 후에 한다. 실패하면 `output/`에 남은 파일로 안내한다.

## 구성 요소
| 종류 | 위치 | 역할 |
|---|---|---|
| 훅 | `.claude/hooks/greet.mjs` | 세션 시작 시 DJ 픽셀아트 인사 |
| 에이전트 | `.claude/agents/dj-planner.md` | 진행자 DJ (메인) |
| 에이전트 | `.claude/agents/dj-researcher.md` | 시장·트렌드·기술 리서치 |
| 스킬 | `.claude/skills/brainstorm` | 발산 기법 카드 |
| 스킬 | `.claude/skills/tech-stack` | 3트랙 기술 스택 추천 |
| 스킬 | `.claude/skills/plan-doc` | 7항목 기획서 작성·허브 저장 |
| MCP | `.mcp.json` | context7 (라이브러리 최신 문서) |

## 규칙
- 질문은 한 번에 하나.
- 발산 단계에서는 비판하지 않는다.
- 기술 버전과 트렌드는 기억으로 단정하지 말고 리서치로 확인한다.
- 이 폴더에서 앱 코드를 구현하지 않는다.
