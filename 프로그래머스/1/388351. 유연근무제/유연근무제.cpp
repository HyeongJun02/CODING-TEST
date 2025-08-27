#include <string>
#include <vector>

using namespace std;

int solution(vector<int> schedules, vector<vector<int>> timelogs, int startday) {
    int n = (int)schedules.size();
    int answer = n;
    vector<bool> late(n, false);
    vector<int> schedules_m;
    
    for (int i=0; i<n; i++) {
        schedules_m.push_back((schedules[i]/100) * 60 + schedules[i]%100);
    }
    
    for (int i=0; i<7; i++) {
        int dow = (startday + i - 1) % 7 + 1;
        if (dow == 6 || dow == 7) continue;
        
        for (int j=0; j<n; j++) {
            if (late[j]) continue;
            int gap = (timelogs[j][i]/100)*60 + timelogs[j][i]%100 - schedules_m[j];
            if (gap > 10) {
                late[j] = true;
                answer--;
            }
        }
    }
    return answer;
}