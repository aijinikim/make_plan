---
name: plan-doc
description: 브레인스토밍 결과를 7항목 기획서(개요/문제점/해결 방안/유저 시나리오/시스템 설계도/깃허브/그 외)로 정리하고, 사용자 확인 후 중앙 허브 아티팩트에 저장한다. DJ의 5단계(기획서)에서 사용한다.
---

# 기획서 작성과 허브 저장

## 허브
- 허브 URL: `https://claude.ai/artifact/Wx7AnPTJAX73tpTJefQzyU`
- 컬렉션: `plans`
- 기획서 링크: `https://claude.ai/artifact/Wx7AnPTJAX73tpTJefQzyU#p-<doc_id>`

## 1. 초안 작성
`templates/plan-template.md`의 구조를 따라 7개 항목을 채운다. 항목 이름과 순서는 고정이다.

| key | 항목 | 꼭 들어갈 것 |
|---|---|---|
| `overview` | 1. 개요 | 프로젝트명, 한 줄 요약, 왜 지금인가, 목표 |
| `problem` | 2. 문제점 | 누가, 언제, 왜 불편한가, 기존 대안의 한계, 근거 링크 |
| `solution` | 3. 해결 방안 | 핵심 아이디어, 주요 기능 표(MVP/다음/꿈), 차별점, 기술 스택 3트랙 표와 팀 선택 |
| `scenario` | 4. 유저 시나리오 | 페르소나, 단계별 흐름, Mermaid `journey` 또는 `sequenceDiagram` |
| `architecture` | 5. 시스템 설계도 | Mermaid `flowchart`, 주요 컴포넌트, 데이터 흐름, 외부 연동 |
| `github` | 6. 깃허브 | 리포 이름, 디렉터리 구조, 브랜치 전략, 초기 이슈/마일스톤 체크리스트 |
| `extra` | 7. 그 외 | MVP 범위, 일정, 리스크, 브레인스토밍 원석 목록, 확장 아이디어 |

- 대화에서 나오지 않은 내용은 DJ가 합리적으로 채우고 끝에 `(DJ 제안)`을 붙인다.
- 각 섹션 본문은 마크다운이다. 섹션 제목(`## 1. 개요`)은 본문에 넣지 않는다. 허브가 붙인다.
- Mermaid는 ```` ```mermaid ```` 코드 블록으로 쓴다. 허브가 렌더한다. 노드 라벨에 괄호나 따옴표가 있으면 `["라벨"]`처럼 감싼다.

## 2. 사용자 확인
- 전체 초안을 마크다운으로 한 번에 보여준다.
- "이대로 허브에 올릴까요, 고칠 곳이 있나요?"라고 묻는다. 승인 전에는 저장하지 않는다.

## 3. 로컬 저장
`<doc_id>`를 정한다: `<팀 slug>-<YYYYMMDD>-<아이디어 slug>`. 영문 소문자, 숫자, 하이픈만 쓰고 80자 이내로 한다. 예: `team-a-20261027-plant-whisperer`.

두 파일을 쓴다.
- `output/<doc_id>.md`: 템플릿 형식의 전체 기획서
- `output/<doc_id>.json`: 허브에 보낼 문서

```json
{
  "team": "A팀",
  "teamSlug": "team-a",
  "author": "홍길동",
  "title": "식물 속삭임",
  "oneLiner": "식물이 1인칭으로 말을 거는 반려식물 케어 서비스",
  "keywords": ["반려식물", "IoT", "AI 캐릭터"],
  "repoUrl": "",
  "sections": {
    "overview": "...",
    "problem": "...",
    "solution": "...",
    "scenario": "...",
    "architecture": "...",
    "github": "...",
    "extra": "..."
  },
  "createdAt": "2026-10-27T09:00:00Z",
  "updatedAt": "2026-10-27T09:00:00Z"
}
```

## 4. 허브 저장
1. `ArtifactData` 도구가 로드되어 있지 않으면 `ToolSearch`로 `select:ArtifactData`를 먼저 로드한다.
2. 처음 저장할 때:
   `ArtifactData` → `action: "set"`, `url: <허브 URL>`, `collection: "plans"`, `doc_id: <doc_id>`, `file_path: "output/<doc_id>.json"`
3. 같은 기획서를 다시 저장할 때: 먼저 `action: "get"`으로 `version`을 읽는다. `createdAt`은 유지하고 `updatedAt`만 바꾼다. 그다음 `if_version`을 붙여 `set`한다.
4. 성공하면 기획서 링크(`...#p-<doc_id>`)를 알려주고, 진행 막대를 `■ ■ ■ ■ ■ 완료!`로 바꾼다.

## 5. 저장 실패 시
- 기획서는 `output/` 폴더에 이미 저장되어 있다고 알린다.
- 원인별 안내:
  - 권한 오류(`invalid_argument`, not found, 접근 불가): "허브 소유자에게 이 허브의 **Contributor** 권한을 요청하세요."
  - `ArtifactData` 도구 없음: "Claude Code를 최신 버전으로 업데이트하고 claude.ai 계정으로 로그인하세요 (`claude update`, `/login`)."
- 권한을 받은 뒤 "허브에 다시 올려줘"라고 하면 4단계부터 다시 한다.
