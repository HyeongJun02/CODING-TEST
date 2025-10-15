const fs = require('fs'); // Node.js 내장 모듈 fs(File System) : 파일 읽기/쓰기 기능
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt'; // '/dev/stdin' : 표준 입력(리눅스), 'run/input.txt' : 테스트용 파일 경로(개발 환경)
const input = fs
  .readFileSync(filePath) // 지정된 경로의 파일을 동기 방식으로 읽음
  .toString() // Buffer to String
  .trim() // 문자열 앞뒤 공백 제거 (특히 마지막 줄 개행 문자 \n)
  .split('\n'); // 줄바꿈 기준으로 나누어 배열 생성

const N = +input[0]; // + (단항 덧셈 연산자) : String to Number
const wine = [];

// wine 배열에 포도주 양(input) 저장
for (let i = 1; i <= N; i++) {
  wine.push(+input[i]);
}
const dp = Array(N).fill(0); // 0으로 초기화된 길이 N 배열 생성

// process.exit() : Node.js 프로그램 즉시 종료
if (N === 1) {
  // 잔이 1개일 때
  console.log(wine[0]);
  process.exit();
} else if (N === 2) {
  // 잔이 2개일 때
  console.log(wine[0] + wine[1]);
  process.exit();
} else {
  // 잔이 3개 이상일 때
  dp[0] = wine[0];
  dp[1] = wine[0] + wine[1];
  dp[2] = Math.max(wine[0] + wine[1], wine[1] + wine[2], wine[0] + wine[2]);
}

for (let i = 3; i < N; i++) {
  // 현재 잔을 마시지않을때
  const a = dp[i - 1];
  // 현재 잔이 첫잔일때
  const b = dp[i - 2] + wine[i];
  // 현재 잔이 마지막 잔일때
  const c = dp[i - 3] + wine[i - 1] + wine[i];
  dp[i] = Math.max(a, b, c);
}

console.log(dp[N - 1]);
