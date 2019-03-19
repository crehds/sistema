Todos los Reusables se pueden modificar al antojo(manteniendo un estándar general). Es mejor interactuar con componentes pues estos
están optimizados para no repetir el renderizado y pueden obviar propiedades que no se le envíen.

Ejemplo
 Input
  class= {props.class}
  ref={props.inputRef}

  Image
  class={props.class}
  ref={props.imageRef}

Guardar semántica para un rápido entendimiento.

Nota: si los reusables tiene algun string por defecto en su clase (css) es porque contienen un estilo por defecto que luego se puede modificar en el lugar donde se invoque al componente.
