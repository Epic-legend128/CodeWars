#include <cmath>

inline std::string to_brainfuck (const std::string& text) {
  std::string result = ">";
  for (int j = 0; j<text.length(); j++) {
    int amountOfLoops = std::floor(std::sqrt((int)text[j]));
    int inLoopPlus;
    bool found = false;
    int extra = 0;
    while (!found) {
      for (int i = amountOfLoops; i>1; i--) {
        if (((int)text[j]-extra)%i == 0) {
          amountOfLoops = i;
          inLoopPlus = ((int)text[j]-extra)/i;
          found = true;
          break;
        }
      }
      if (!found) extra++;
    }
    for (int i = 0; i<extra; i++) {
      result+="+";
    }
    result+=">";
    for (int i = 0; i<amountOfLoops; i++) {
      result+="+";
    }
    result+="[<";
    for (int i = 0; i<inLoopPlus; i++) {
      result+="+";
    }
    result+=">-]<.>";
  }
  return result;
}
