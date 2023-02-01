class Kata
{
public:
    std::vector<int> sortArray(std::vector<int> array)
    {
      std::vector<int> odds;
      for (auto x: array) {
        if (x%2) odds.push_back(x);
      }
      sort(odds.begin(), odds.end());
      int counter = 0;
      for (int i = 0; i<array.size(); i++) {
        if (array[i]%2) array[i] = odds[counter++];
      }
      return array;
    }
};
