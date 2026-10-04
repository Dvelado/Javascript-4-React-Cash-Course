# Javascript-4-React-Cash-Course
Crash course for learning Javascript fundamentas with React for web development

# JavaScript para React

## 1. Funciones

### Arrow functions

Es otra sintaxis para definir funciones, con:

```js
const nombre = () => { }
```

Recomienda usarla porque hace más limpio el código con *callbacks*, que en JavaScript se usan muchísimo.

También muestra la diferencia al exportar: con `function` se suele usar `export default`, y con arrow functions `export const`. Es lo más común, pero ambas formas sirven con cualquiera de los dos tipos:

```js
// Archivo A: función normal
export default function saludar() { }
export function despedir() { }
```

```js
// Archivo B: arrow functions
export const saludar = () => { }
const despedir = () => { }
export default despedir
```

> Cada archivo solo puede tener **un** `export default`, pero puede tener varios `export` con nombre.

La razón por la que importa: **en React, un componente es simplemente una función** que recibe *props* (argumentos) y devuelve JSX (parecido a HTML).

### Funciones anónimas

Son funciones sin nombre, definidas directamente donde se usan. En React es muy común en eventos, por ejemplo `onClick={() => ...}` en un botón, en vez de declarar una función aparte.

## 2. Condicionales cortos (ternarios)

React usa **JSX**, que permite escribir JavaScript dentro del HTML. Para que eso no se vuelva un desorden, se evitan los `if/else` largos y se usan formas cortas:

- `condicion ? a : b` reemplaza un `if/else` completo.
- `condicion && algo` muestra o asigna algo solo si la condición es verdadera.

Su uso típico es el **renderizado condicional**: mostrar una parte de la interfaz u otra según el estado de la aplicación.

> **Cuidado con `&&` en React:** si la condición es el número `0`, React muestra un `0` en pantalla. Por ejemplo, `lista.length && <Tabla />` muestra "0" cuando la lista está vacía. Se evita comparando explícitamente: `lista.length > 0 && <Tabla />`.

### `||` y `??`

```js
a || b
```

Devuelve `b` cuando `a` es falso, así que sirve más para valores por defecto que como "lo opuesto" de `&&`.

"Falso" incluye más de lo que parece: `0`, `""`, `null`, `undefined`, `NaN` y `false`. Por ejemplo, `0 || 10` devuelve `10` aunque `0` sea un valor válido.

Para esos casos existe:

```js
a ?? b
```

Solo usa `b` cuando `a` es `null` o `undefined`. Así, `0 ?? 10` devuelve `0`.

## 3. Objetos

### Desestructuración

En vez de escribir tres líneas como:

```js
const name = person.name
```

se extraen varias propiedades en una sola:

```js
const { name, age } = person
```

Se usa muchísimo con las *props* de los componentes.

### Shorthand de propiedades

Si la clave y la variable tienen el mismo nombre, en vez de:

```js
const person = { name: name }
```

se escribe solo:

```js
const person = { name }
```

> **Nota:** el objeto siempre debe asignarse a algo (una variable, un `return`, un argumento). Si se escribe `{ name }` suelto en una línea, JavaScript lo interpreta como un bloque de código, no como un objeto.

### Spread operator (`...`)

Copia un objeto y cambia solo lo que necesitás:

```js
const person2 = { ...person, name: "Jack" }
```

Funciona igual con arrays:

```js
const names2 = [...names, "Joel"]
```

Crea un array nuevo con un elemento extra. Lo remarca como **muy importante**, porque es la forma en que se actualizan arrays y objetos guardados en el *state* de React.

## 4. Métodos de arrays: `map` y `filter`

Deja de lado `reduce` porque se usa mucho menos en React.

- **`.map()`** recorre el array y devuelve uno nuevo con cada elemento transformado. En React es **la forma estándar de mostrar listas**: por cada elemento del array se devuelve un pedazo de interfaz (por ejemplo, un `<h1>` por cada nombre).
- **`.filter()`** devuelve un array nuevo solo con los elementos que cumplen una condición. Útil para búsquedas y filtros en listas.

## 5. Trabajar con APIs (solo los menciona)

Estos temas no los explica, solo los recomienda como fundamentales para cualquier aplicación web:

- **Promesas y `async/await`**, para manejar datos que tardan en llegar.
- **Fetch API**, para pedir datos a un servidor. Recomienda aprenderla primero aunque después usés una librería como Axios.

> **Corrección:** Axios no es una librería de React, es de JavaScript en general y se usa también fuera de React.

## Cierre

Admite que él empezó React sin saber casi nada de JavaScript y le costó, pero fue posible. Su consejo es tener al menos una idea básica de cada uno de estos conceptos para que el aprendizaje sea mucho más fácil.

## Cómo se conecta con Tellcenter

Prácticamente todo lo del video aparece en una plataforma de gestión: `map` para mostrar listas (empleados, cuentas, registros), `filter` para búsquedas, ternarios para mostrar u ocultar elementos según el usuario o el estado, spread para actualizar datos en pantalla, y `fetch` con `async/await` para comunicarte con tu backend.

### Orden recomendado para practicar

1. Arrow functions
2. Desestructuración y spread
3. `map` / `filter`
4. Ternarios
5. Promesas, `async/await` y `fetch`
