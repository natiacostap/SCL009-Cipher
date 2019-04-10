# El Proyecto

**UNDERCODE** es una aplicacion web que utiliza cifrado cesar para que el usuario pueda cifrar y descifrar un mensaje, dándole la oportunidad de elegir un desplzamiendo (_clave_) específico. 


La aplicación esta orientada a un usuario privilegiado que recibirá invitaciones a exclusivos eventos con los detalles y coordenadas de donde estos se llevarán a cabo.

Con la ayuda de **UNDERCODE** podrémos crear un medio exclusivo para la creación de invitaciones para eventos de tipo exclusivo.

###Cifrado César

El cifrado César es uno métodos de cifrado más conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla. Este método consta de un tipo de cifrado por sustitución, que va desplazando el abecedario segun se indique. 

![caeser-cipher](https://i1.wp.com/decodeingress.me/wp-content/uploads/2013/06/caeser.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 5 posiciones:

- La letra A se cifra como F.
- La palabra CASA se cifra como HFXF.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: F G H I J K L M N O P Q R S T U V W X Y Z A B C D E


### Interfaz de usuario (UI)

Nuestra interfaz permite a los usuarios:
- Elegir un desplazamiento (_clave_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar o descifrar.
- Ver el resultado del mensaje.
- Resetear interfaz.


