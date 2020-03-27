# IoT | Riego (Cliente)

- Aplicación web para el contro, y monitoreo del sistema de riego de Droguería Nena C.A (la idea es que el conocimiento acerca del desarrollo de ésta app sea de utilidad para cualquier otro proyecto similar).

## Ecosistema de la aplicación

- Vue.js
- Vuex
- Vue-router
- Axios
- Vue-Bootstrap

## Setup del proyecto

```bash
#Instala las dependencias
npm install

#Compilacion y "hot-reloads" para desarrollo
npm run serve

#Compilación y minificación para entronos de producción
npm run build
```

### Personalizar la configuración

See [Configuration Reference](https://cli.vuejs.org/config/).

## Problemas enfrentados al desarrollar el cliente y enseñanzas

### Axios

- One particular issue that cost me a couple hours of search through the internet and documentation was the one i had with the requests made to the server after the user logged in the app. The issue was something like this: when the user logged in, the server did an authentication of the data the client was sending with the module **Passport.js** , which verified the data, and, if it was correct, serialized the user and stored the info in a _session cookie_ using the module **Express-Session**. After all this was done, on each request the client sends to the server, the cookie needed to be sent too, as this was the client _credentials_ (or that's how i gave sense to it) which the server would need to deserialize the user data and verify that this user had an active session. Thing was, when i navigated to the pages that sent requests to the server, one of the Passport methods for user authentication was returning _false_ (of course, the idea of using this method on the server and put the result in the console happened after some time of battling with the error), but when i sent a request using [Postman](www.postman.io), the result was _true_. Well, at least i knew that it was my client the one giving the error, but why? Well, after the couple of hours looking in the net, i found that Axios (and the browser's _fetch_ method too) needed to be configured to send credentials with the requests, and that i needed to tell what was the origin of those credentials. The Axios configuration that worked for me in this project was:

```JavaScript
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://localhost:8081`,
  // This part was missing before
  withCredentials: true,
  headers: {
    credentials: "same-origin"
  }
  // ----------------------------
});
```

Using that instance to make my requests, they worked just as i wanted.

### Vue-router

- One particular characteristic i learned in this project were the _route navigation guards_. Vue router offers these functions that works something like Vue's life cycle hooks, but, we can use these to create some kind of validations for the routes, in the ase of this app, using the route's _meta_ property.

```JavaScript
// Route navigation guards
router.beforeEach((to, from, next) => {
  // It's recommended to use this method to check the routes
  // Specially if we have child routes
  if (to.matched.some(r => r.meta.private) && !state.user) {
    next({
      name: "login",
      // Used to redirect the user later to his/her wanted route
      params: {
        wantedRoute: to.fullPath
      }
    });
    return;
  }

  if (to.matched.some(r => r.meta.guest) && state.user) {
    next({ name: "home" });
    return;
  }
  next();
});
```

In the code above, we check if the route is meant for logged users or not (private or guests, respectively) and depending on that, we redirect them to the login page or the home screen.

- Another important concept, _child routes_, with this we can have routes that are related with each other, as we can see in the code below:

```JavaScript
{
    path: "/tickets",
    component: TicketsLayout,
    meta: { private: true },
    children: [
      { path: "", name: "tickets", component: Tickets },
      { path: "new", name: "new-ticket", component: NewTicket },
      // We add 'props' since we want to decouple the component from the route
      {
        path: ":id",
        name: "ticket",
        component: Ticket,
        props: route => ({ id: route.params.id })
      }
    ]
  }
```

Like this, we can add the same properties of the parent route to the children, like the _meta_ object, in this case.
