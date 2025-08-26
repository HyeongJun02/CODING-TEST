#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>

#include <vector>
//#include <map>
//#include <unordered_map>
//#include <set>
//#include <unordered_set>
//#include <queue>
//#include <stack>

#include <climits>

#define endl "\n"
#define INF INT_MAX

typedef long long ll;
using namespace std;

vector<pair<int, int>> house, chicken, v;
int N, M;
int map[50][50];
int chicken_num, answer = INF;
bool pick[13];

int calculateDistance() {
	int sum = 0;
	for (int i = 0; i < house.size(); i++) {
		int x = house[i].first;
		int y = house[i].second;
		int d = INF;

		for (int j = 0; j < v.size(); j++) {
			int xx = v[j].first;
			int yy = v[j].second;
			int dist = abs(xx - x) + abs(yy - y);

			d = min(d, dist);
		}
		sum += d;
	}
	return sum;
}

void selectChicken(int idx, int cnt) {
	if (cnt == M) {
		answer = min(answer, calculateDistance());
		return;
	}

	for (int i = idx; i < chicken_num; i++) {
		if (pick[i]) continue;
		pick[i] = true;
		v.push_back(chicken[i]);
		selectChicken(i, cnt + 1);
		pick[i] = false;
		v.pop_back();
	}
}

// [2] 풀이
void solution() {
	selectChicken(0, 0);
	cout << answer << endl;
}

// [1] 입력
void input() {
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> map[i][j];
			if (map[i][j] == 1) house.push_back(make_pair(i, j));
			if (map[i][j] == 2) chicken.push_back(make_pair(i, j));
		}
	}
	chicken_num = chicken.size();
}

// [0] solve
void solve() {
	input();
	solution();
}

int main(void) {
	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

	solve();
}