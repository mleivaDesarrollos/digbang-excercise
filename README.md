# Algunas notas del DEV

- Como en la consigna del proyecto no se hablo de utilizar ninguna libreria
externa mas que **rc-slider** no se utilizó ninguna otra librería adicional

- Configuré Prettier y Eslint para no preocuparme por el formateo del código,
al finalizar el proyecto lo removí de las dependencias.

- Si hubiera sido posible para la parte de CSS hubiera optado por utilizar
una librería como **react-jss**

- Según como estaba estructurando el proyecto, me iba a encontrar con la
situación de tener un prop-drilling para llegar a determinados componentes. Mi
estrategia ante esos escenarios es utilizar redux para controlar estados.
En apps pequeñas igual no es muy recomendado. En el caso de este proyecto
decidi por usar la estrategia useContext + useReducer. Tambien podría haberlo
manejado con useState si lo quería.

- El useContext tiene algunos temas de rendimiento por rerender, no es mi primera
opción por ese motivo

- Por una cuestión de tabulación el rc-slider estaba generandome comportamientos
extraños. Al salir del input con tab, y teniendo como siguiente elemento el slider
al tocar el slider me cambiaba el input que recien habia ingresado por otro valor.
Ejemplo, ponia 5003 en el input, apretaba tab y el input se cambiaba a 5002,
me imagino que ciertos steps del slider no son tan sensibles y por eso sucedia
esto. Mi solución ahi fue aplicar un tabIndex -1 para que no entre en foco.

- Muy buen desafio, me llevo mas tiempo del que esperaba pero me voy satisfecho
al completarlo.
