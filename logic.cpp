#include <iostream>
using namespace std;

int main() {
    int m1, m2, m3;
    cout << "Enter marks of 3 subjects: ";
    cin >> m1 >> m2 >> m3;

    int total = m1 + m2 + m3;
    float percentage = total / 3.0;

    cout << "Total: " << total << endl;
    cout << "Percentage: " << percentage << endl;

    if (percentage >= 75)
        cout << "Grade: A";
    else if (percentage >= 60)
        cout << "Grade: B";
    else if (percentage >= 40)
        cout << "Grade: C";
    else
        cout << "Grade: Fail";

    return 0;
}
