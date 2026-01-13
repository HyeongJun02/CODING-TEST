function solution(n)
{
    return (n+"").split("").reduce((res, a) => (res += +a), 0);
}