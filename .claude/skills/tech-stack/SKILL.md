---
name: tech-stack
description: 기획 아이디어에 맞는 창의적 기술 스택을 안정형/도전형/실험형 3트랙으로 추천한다. 기획서 3번(해결 방안)의 기술 스택 표를 채울 때 사용한다.
---

# 기술 스택 추천 (3트랙)

## 절차
1. **팀 역량 질문 1개**: 인원, 주력 언어, 경험(웹/앱/AI/게임), 기간. 객관식으로 묻는다.
2. **최신성 확인**: dj-researcher 서브에이전트로 후보 기술의 최신 버전·트렌드·무료 티어를 웹 검색해 확인한다. 기억만으로 버전을 단정하지 않는다.
3. **3트랙 표 작성**: 아래 형식으로 레이어별 추천.
4. **트랙마다 "왜 이 아이디어에 맞나" 한 줄**과 **"와우 포인트" 한 줄**을 붙인다.
5. 팀이 트랙을 고르게 한다. 섞어도 된다 ("백엔드는 안정형, 특수효과만 실험형").

## 3트랙 정의
| 트랙 | 성격 | 난이도 |
|---|---|---|
| 🟢 안정형 | 자료 많고 검증된 조합. 기간 짧거나 초보 팀 | ★☆☆ |
| 🟡 도전형 | 요즘 뜨는 조합. 포트폴리오 임팩트 | ★★☆ |
| 🔴 실험형 | 와일드카드. 시연장에서 사람들이 멈춰 서는 조합 | ★★★ |

## 출력 형식
| 레이어 | 🟢 안정형 | 🟡 도전형 | 🔴 실험형 |
|---|---|---|---|
| 프론트엔드 | | | |
| 백엔드 | | | |
| DB/스토리지 | | | |
| AI | | | |
| 배포 | | | |
| 특수효과/와우 | | | |
| 무료 티어 | | | |

## 후보 풀 (출발점일 뿐, 아이디어에 맞게 확장)
- **프론트엔드**: Next.js, SvelteKit, Astro, Vite+React, Vue/Nuxt, Expo(React Native, 모바일), Flutter, Tauri(데스크톱), PWA
- **백엔드**: FastAPI, Bun+Hono, Node+Express/NestJS, Spring Boot, Supabase Edge Functions, Cloudflare Workers
- **DB/스토리지**: Supabase(Postgres), Firebase, SQLite/Turso, Cloudflare D1/R2, MongoDB Atlas, pgvector(벡터 검색)
- **AI**: Claude API(최신 Claude 모델), Claude Agent SDK(에이전트), MCP 서버 직접 만들기(Claude와 내 서비스 연결), RAG(임베딩+벡터 DB), Whisper/Web Speech(음성), Vision(이미지 인식), 로컬 LLM(Ollama), 이미지 생성 API
- **실시간/협업**: WebSocket, Supabase Realtime, Liveblocks, Yjs, WebRTC
- **특수효과/와우**: Three.js / React Three Fiber, WebGPU, Phaser·Kaboom(픽셀 게임), p5.js(제너러티브 아트), Rive/Lottie(애니메이션), Tone.js(사운드), MediaPipe(손·얼굴 인식), WebXR(AR/VR), 지도(Mapbox/Leaflet), 하드웨어(Arduino/ESP32, Web Serial)
- **배포**: Vercel, Cloudflare Pages, Netlify, Render, Railway, Fly.io, GitHub Pages, Expo EAS

## 창의성 규칙
- 아이디어의 **감성**을 먼저 보고 고른다. 픽셀 감성이면 Phaser, 몰입이면 Three.js/WebXR, 손 쓰는 체험이면 MediaPipe.
- 실험형에는 **최소 1개의 의외 조합**을 넣는다. 예: "식물 관리 앱 + ESP32 토양 센서 + Claude가 식물 1인칭으로 말하기".
- AI가 들어갈 자리가 있으면 "AI를 그냥 챗봇으로 붙이기"를 피하고 **역할**을 준다 (심판, 캐릭터, 큐레이터, 번역가, 감독).
- 학생/초보 팀이면 무료 티어로 끝까지 갈 수 있는지 반드시 표시한다.
