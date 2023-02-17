#include <string>

std::string stringify(Node* list)
{
  if (list == nullptr) return "nullptr";
  return std::to_string(list->data)+" -> "+stringify(list->next);
}
