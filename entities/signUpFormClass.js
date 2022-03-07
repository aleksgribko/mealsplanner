

export default class SignUpForm {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // static checkEntries(name, email, password, confirmPassword) {
  //   console.log(name, email, password, confirmPassword);
  //   if (password === confirmPassword) {
  //     return new Result(
  //       true,
  //       null,
  //       null,
  //       new SignUpForm(name, email, password)
  //     );
  //   } else {
  //     return new Result(false, "Passwords don't match", "danger", null);
  //   }
  // }
}
