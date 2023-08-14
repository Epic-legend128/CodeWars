function Automaton()
{
   this.states = [[1, 2], [3, 2], [2, 2]];
}

Automaton.prototype.readCommands = function(commands) {
  let current = 1;
  commands.forEach(x => {
    current = this.states[current-1][parseInt(x)]
  });
  return current == 2;
}

var myAutomaton = new Automaton();