#include <iostream>
using namespace std;
int main() {
int arr[5];
cout << "Enter 5 numbers: ";
for(int i = 0; i < 5; i++) { cin >> arr[i]; }
int key;
cout << "Enter the number to search for: ";
cin >> key;
int left = 0, right = 4;
while(left <= right) {
int mid = left + (right - left) / 2;
if(arr[mid] == key) { cout << "Number found at index " << mid << endl; break; }
else if(arr[mid] < key) { left = mid + 1; }
else { right = mid - 1; }
}
if(left > right) { cout << "Number not found" << endl; }
return 0;
}
