#### coderMarket
![logo-coderMarket](./src/componentes/imagenes/logo.png)


## Tabla de Contenidos
1. [Información General](#información-general)
2. [Capturas de Pantalla](#capturas-de-pantalla)
4. [Instalación](#instalación)
5. [Soporte](#soporte)
6. [Hoja de ruta](#hoja-de-ruta)
7. [Colaboración](#colaboración)
8. [Autores](#autores)
9. [FAQs](#faqs)

***
## Información General
CoderMarket es una plataforma de encuentro entre coders y empresas. Donde los desarrolladores dan a conocer su experiencia y habilidades tecnológicas, para que las empresas puedan seleccionar el profesional que están buscando de manera rápida y sencilla.  

Para poder registrarse los desarolladores, pagarán un importe representativo, para poder disfrutar de las ventajas y visibilidad que ofrece nuestra página, así como la continua actualización de la misma.

*Proyecto en proceso de desarrollo.*   

***

## Capturas de pantalla

![screenshot0****](/src/componentes/imagenes/screenshoot01.png)
***
![screenshot0****](/src/componentes/imagenes/screenshoot02.png)
***
![screenshot0****](/src/componentes/imagenes/screenshoot03.png)

***
![screenshot0****](/src/componentes/imagenes/screenshoot04.png)

***
## Tecnologías
Lista de tecnologías usadas en el desarrollo del proyecto:
* HTML: Version HTML 5
* JavaScript
* Node  Js
* React 
* Json-Server
* Npm
* Material UI 


***
## Instalación
Como instalar el repositorio:

1. Ingresar en Visual Studio Code
2.  Clonar el proyecto con el comando: 
 ``` 
git clone https://github.com/Sarap120298/CoderMarket.git
```
En ordenador instalar:  
3. Instalar [Node js](https://nodejs.org/es/download/)  
4. En la terminarl del Visual Studio Code, escribirel comando:   
``` 
npm i 
```

***


## Soporte
Si tiene cualquier problema póngase en contacto con: 
>codermarket.help@gmail.com

***

## Hoja de ruta

En nuestra primera entrega presentamos un catálogo de desarolladores ofreciendo sus servicios para empresas o particulares.

La web consiste en una galeria de coders, con una barra de navegación, que permite la búsqueda filtrada de perfiles, que se asemejen a las necesidades de cada usuario.

Además tiene varias páginas extras donde poder ver "¿Cómo funciona?", "¿Quiénes somos?", "Contacto" y "Pago Seguro".

Los datos son cargados desde un archivo Json. En próximas actualizaciones, nuestro objetivo es que tanto las funciones de *Log In*, *Mis alertas*, *Favoritos* estén disponibles para los usuarios.

La web es resposive, para poder visualizarla desde cualquier dispositivo. 

***

## Colaboración
El proyecto está abierto a cualquier persona que quiera aportar ideas o sugerencias. Podéis contactar con nosotros a través de:

> codermarket.help@gmail.com

***
## Autores 
[Alejandra Piatti](https://github.com/alejapiatti)  
[Carolina Romero](https://github.com/carolineromero)   
[Celia Millán](https://github.com/CeliaMi)  
[Eberth Isaac Castro](https://github.com/EberthCastro)  
[Karla Valentina Rojas](https://github.com/KarlaV25)  
[Sandra Martos](https://github.com/bysmartos)  
[Sara Peromingo](https://github.com/Sarap120298)



***
## FAQs

Preguntas frecuentes:
1. **¿Tengo problemas con React, no me deja ejecutar la página?**
Mirar si está en el *explorador de archivos*, la carpeta *"node_modules"*. En caso de no estar, ir a la *terminal* y ejecutar el comando
 ``` 
npm i 
```

2. **¿Tengo problemas poder ejecutar Json-server?**

Ejecutar PowerShell en windows ( o terminal en IOS) como *administrador* y ejecutar el siguiente comando: 
 ``` 
Get-ExecutionPolicy -list 
```
y una vez cargada la lista, ejecutar el siguiente comando:
 ``` 
Set-ExecutionPolicy RemoteSigned -Force 
```