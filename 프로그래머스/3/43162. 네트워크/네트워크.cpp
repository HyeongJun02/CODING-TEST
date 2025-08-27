#include <string>
#include <vector>

using namespace std;

void DFS(int now, vector<vector<int>> &g, vector<bool>& visited) {
    visited[now] = true;
    int n = (int)g.size();
    for (int v=0; v<n; v++) {
        if (now == v) continue;
        if (g[now][v] == 1 && !visited[v]) {
            DFS(v, g, visited);
        }
    }
}

int solution(int n, vector<vector<int>> computers) {
    int answer = 0;
    vector<bool> visited(n, false);
    for (int i=0; i<n; i++) {
        if (!visited[i]) {
            DFS(i, computers, visited);
            answer++;
        }
    }
    return answer;
}