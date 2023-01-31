export function getRandomCode(length = 4): string {
  let code = '';
  const characters = '0123456789';

  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
}
