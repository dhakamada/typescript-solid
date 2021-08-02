/**
 * Nesse cenário ocorre uma violação pelo motivo em que a classe Client
 * possui mais de uma responsabilidade (CRUD e notificação)
 */

export class Client {
  create(): void {
    // save product
  }

  delete(): void {
    // delete product
  }

  sendNotification(): void {
    // notify the client
  }
}
