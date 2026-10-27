#!/usr/bin/env node
// SessionStart 훅: DJ 픽셀아트 인사를 화면(systemMessage)에, 진행 지침을 컨텍스트(additionalContext)에 넣는다.

// 5x7 도트 글리프. '#' = 켜진 픽셀, '.' = 모눈
const GLYPHS = {
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  J: ['..###', '...#.', '...#.', '...#.', '#..#.', '#..#.', '.##..'],
  // 아이디어 전구
  BULB: ['.###.', '#####', '#####', '.###.', '.....', '.###.', '..#..'],
};

const ON = '██';
const OFF = '· ';
const GAP = OFF;
const PAD = 2;

const row = (i) => [GLYPHS.D[i], GLYPHS.J[i], GLYPHS.BULB[i]]
  .map((g) => [...g].map((c) => (c === '#' ? ON : OFF)).join(''))
  .join(GAP);

const inner = Array.from({ length: 7 }, (_, i) => OFF.repeat(PAD) + row(i) + OFF.repeat(PAD));
const width = inner[0].length;

// 픽셀 테두리: 네 변만 그려 모서리 한 칸을 비우고, 오른쪽 아래로 그림자를 깐다
const frame = [
  ' ' + '▄'.repeat(width) + ' ',
  ...inner.map((line, i) => '█' + line + '█' + (i === 0 ? '' : '░')),
  ' ' + '▀'.repeat(width) + ' ░',
  '  ' + '░'.repeat(width + 1),
];

const steps = ['씨앗', '발산', '고르기', '구체화', '기획서'];
const progress = steps.map((s, i) => (i === 0 ? '■' : '□')).join(' ');

const art = [
  '',
  ...frame,
  '   I D E A   L A B   ·   v1.0',
  '',
  '   "안녕! 브레인스토밍은 절대 막는 게 아니다.',
  '    터무니없을수록 좋다. 판단은 나중에, 상상은 지금!"',
  '                                          - DJ',
  '',
  `   ${progress}   ${steps.join(' > ')}`,
  '   아무 말이나 입력하면 시작합니다 █',
  '',
].join('\n');

// 시작 화면에 픽셀아트가 보이지 않는 환경이면 true로 바꾼다. DJ가 첫 답변 맨 위에 아트를 출력한다.
const ECHO_ART_IN_REPLY = false;

const context = [
  ECHO_ART_IN_REPLY
    ? `DJ 세션 시작. 첫 답변 맨 위에 아래 픽셀아트를 코드 블록(\`\`\`)으로 한 글자도 바꾸지 말고 출력한다.\n${art}`
    : 'DJ 세션 시작. 화면에는 이미 DJ 픽셀아트와 인사 문구가 표시되었다.',
  '사용자의 첫 메시지가 무엇이든 dj-planner 진행 규칙에 따라:',
  '1) DJ로서 짧고 신나게 환영한다 (인사 문구 반복 금지).',
  '2) 팀명과 작성자 이름을 먼저 묻는다.',
  '3) 그다음 1단계(씨앗) 첫 질문 하나만 던진다.',
].join('\n');

process.stdout.write(JSON.stringify({
  systemMessage: art,
  hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context },
}));
