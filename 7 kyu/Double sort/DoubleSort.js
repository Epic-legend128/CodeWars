const dbSort = a => [...a.filter(x => typeof x == "number").sort((a,b) => a-b), ...a.filter(x => typeof x == "string").sort()]
