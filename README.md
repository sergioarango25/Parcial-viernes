Nombre: Sergio Arango Garcia | Codigo: 408701

## Desiciones de Diseño

Para el desarrollo de la API utilicé Node.js con Express ya que ese fue el que vimos en clase.
Implementé una estructura parecida a las vistas en clase con monolito, donde cada carpeta contiene partes especificas  del código que ayudan al desarrollo de la aplicación y facilita el orden.
Las tareas se almacenan en un arreglo para para mejorar la existencia de los datos. Cada tarea contiene título, descripción, fecha límite y estado, con endpoints que permiten.
• POST /tasks → crea tarea 
• GET /tasks?status=... → lista/filtra 
• PATCH /tasks/:id/status (body: {status}) → actualiza estado 
• DELETE /tasks/:id → elimina 
• (Opcional) GET /tasks/overdue → vencidas 
