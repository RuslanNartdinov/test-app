const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,.()-_=+])[a-zA-Z\d!@#$%^&*,.()-_=+]{8,}$/;

export default function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}