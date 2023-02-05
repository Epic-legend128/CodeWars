int solution(int number) 
{
  int n = number-1;
  int a = n/3;
  int sumA = a*(a+1)/2;
  int b = n/5;
  int sumB = b*(b+1)/2;
  int c = n/15;
  int sumC = c*(c+1)/2;
  return sumA*3+sumB*5-sumC*15;
}
