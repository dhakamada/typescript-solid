/**
 * A violocação ocorre pelo fato de que a classe Logger depende fortemente da classe File para armazenar os logs
 * Se no caso precisarmos mudar a forma de armazenar os logs ?
 */

class File {
  write(text: string) {
    console.log(text);
  }
}

export default class Logger {
  log(text: string): void {
    const file = new File();
    file.write(text);
  }
}
