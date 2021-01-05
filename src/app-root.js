import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {


  
  render() {
    return html`
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <div class="container pt-5">
      <h1 style="color: white;">Enviar Email</h1>
    </div>
    <div class="container">
      <form action="/send-email" method="POST" id="enviar-mail">
        <div class="mb-3">
          <label for="email" class="form-label" style="color: white;">Para:</label>
          <input name="email" type="email" class="form-control" id="email" placeholder="email" autofocus>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label" style="color: white;">De:</label>
          <input name="name" type="text" class="form-control" id="email" placeholder="nombre" autofocus>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label" style="color: white;">Asunto:</label>
          <input name="asunto" type="text" class="form-control" id="asunto" placeholder="Asunto">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label" style="color: white;">Mensaje:</label>
          <textarea name="message" class="form-control" id="mensaje" placeholder="Escribe tú mensaje"></textarea>
        </div>
    </div>
    </div>
    <div class="container p-3">
      <button type="submit" class="btn btn-success" id="enviar">Enviar</button>
    </div>
    </form>
    </div>


    <!-- <script src="/src/index.js"></script> -->
    
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    
     
    `;
  }
}
