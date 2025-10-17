const fs = require('fs'); // Node.js 내장 모듈 fs(File System) : 파일 읽기/쓰기 기능
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt'; // '/dev/stdin' : 표준 입력(리눅스), 'run/input.txt' : 테스트용 파일 경로(개발 환경)
const input = fs
  .readFileSync(filePath) // 지정된 경로의 파일을 동기 방식으로 읽음
  .toString() // Buffer to String
  .trim() // 문자열 앞뒤 공백 제거 (특히 마지막 줄 개행 문자 \n)
  .split('\n'); // 줄바꿈 기준으로 나누어 배열 생성

const [N, M] = input[0].split(' ').map(Number); // 첫 줄의 두 숫자
const firstList = input.slice(1, N + 1); // 다음 N줄
const secondList = input.slice(N + 1); // 그 다음 M줄

function solution(firstList, secondList) {
  const set = new Set(firstList);
  let count = 0;
  for (const str of secondList) {
    if (set.has(str)) count++;
  }
  return count;
}

console.log(solution(firstList, secondList));
