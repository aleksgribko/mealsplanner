export default class Result {
  constructor(ok, errorMessage, errorType, value) {
    this.ok = ok;
    this.errorMessage = errorMessage;
    this.errorType = errorType;
    this.value = value;
  }
}
