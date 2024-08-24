#include <iostream>
#include <vector>

using namespace std;

long long determinant(const vector< vector<long long> >& m);

long long minor_determinant(const vector< vector<long long> >& m, const int y, const int x) {
    vector<vector<long long> > newDeterminant;
    newDeterminant.reserve(m.size()-1);
    for (int i = 0; i<m.size(); i++) {
        if (i == y) continue;
        vector<long long> row;
        row.reserve(m[i].size()-1);
        for (int j = 0; j<m[i].size(); j++) {
            if (j == x) continue;
            row.push_back(m[i][j]);
        }
        newDeterminant.push_back(row);
    }
    return determinant(newDeterminant);
}

long long determinant(const vector< vector<long long> >& m) {
    if (m.size() < 2) return m[0][0];
    if (m.size() == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    long long r = 0;
    for (int i = 0; i<m.size(); i++) {
        long long temp = m[0][i] * minor_determinant(m, 0, i);
        r += (i&1 ? -1 : 1)*temp;
    }
    return r;
}