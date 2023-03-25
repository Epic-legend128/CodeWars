function validate(username, password){
  var database = new Database();
  if ((s=(username+" "+password)).includes('||') || s.includes("//")) return 'Wrong username or password!';
  return database.login(username, password);
}
