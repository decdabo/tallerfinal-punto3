export const exercises = [
  {
    path: 1,
    source: {
      data: [
        { 
          exercise: 'Punto 1: ',
          title: 'Realizar un programa el cual solicite su nombre y apellidos.',
          code: (
              <code>
                {`
1 Proceso punto_1 
2   Definir name Como Caracter;
3   Definir lastName Como Caracter;
4   Escribir "What is your name?";
5   Leer name;
6           
7   Escribir "What is your lastname?";
8   Leer lastName;
9 FinProceso
                `}
              </code>
          ),
        },
        {
          exercise: 'Punto 2: ',
          title: 'Realizar un programa el cual solicite su nombre, apellidos, edad y estatura.',
          code: (
              <code>
                {`
1  Proceso punto_2
2    Definir name Como Caracter;
3    Definir lastName Como Caracter;
4    Definir age Como Entero;
5    Definir height Como Real;
6
7    Escribir "What is  your name?";
8    Leer name;
9    Escribir "What is your lastname?";
10    Leer lastName;
11    Escribir "How old are you?";
12    Leer age;
13    Escribir "How tall are you?";
14    Leer height;
15  FinProceso
                `}
              </code>
          ),
        },
        {
          exercise: 'Punto 3: ',
          title: 'Realizar un programa el cual solicite su nombre y apellidos, también debe capturar nombre y apellidos de su padre y madre. Al finalizar debe imprimir en pantalla el siguiente mensaje "Yo [Nombre Completo], soy hijo de [Nombre de la Madre] y [Nombre del Padre].',
          code: (
              <code>
                {`
  Proceso punto_3
    Definir myName Como Caracter;
    Definir myLastName Como Caracter;
    Definir motherName Como Caracter;
    Definir motherLastName Como Caracter;
    Definir fatherName Como Caracter;
    Definir fatherLastName Como Caracter;
    Definir string Como Caracter;
    Definir space Como Caracter;

    string <- "What is your ";
    space <- " ";
    Escribir string, "name?";
    Leer myName;
    Escribir string, "last name?";
    leer myLastName;
    Escribir string, "mother name?";
    Leer motherName;
    Escribir string, "mother last name?";
    Leer motherLastName;
    Escribir string, "father name?";
    Leer fatherName;
    Escribir string, "father last name?";
    Leer fatherLastName;

    Limpiar Pantalla;
    Escribir "Yo ", myName, space, myLastName, " soy el hijo de ", motherName, space, motherLastName, " y ", fatherName, space, fatherLastName;

  FinProceso
                `}
              </code>
          ),
        },
        {
          exercise: 'Punto 4: ',
          title: 'Realizar un programa el cual solicite el nombre de una ciudad capital y el país. Al finalizar debe imprimir en pantalla el siguiente mensaje "La ciudad [Nombre de la Ciudad], es la capital del país [Nombre del País]',
          code: (
              <code>
                {`
  Proceso punto_4
    Definir city Como Caracter;
    Definir country Como Caracter;

    Escribir "Name a Capital City";
    Leer city;
    Escribir "Name the country where ", city, " is located";
    Leer country;

    Limpiar Pantalla;

    Escribir "La ciudad ", city, " es capital de ", country;
  FinProceso
                `}
              </code>
          ),
        },
        {
          exercise: 'Punto 5: ',
          title: 'Realizar un programa el cual solicite el nombre de su mascota, edad de la mascota, el tipo de mascota y su nombre completo. Al finalizar el sistema debe e imprimir en pantalla el siguiente mensaje: [Nombre de Mascota] es un(a) [Tipo de Mascota], el cual, tiene [Edad de la Mascota] años de edad y [Nombre Completo] es actualmente su dueño(a).',
          code: (
              <code>
                {`
  Proceso punto_5
    Definir petName Como Caracter;
    Definir petType Como Caracter;
    Definir petAge Como Caracter;
    Definir petOwner Como Caracter;
    Definir ask Como Caracter;

    ask <- "What is " ;
    Escribir ask, "your pet name?";
    Leer petName;
    Escribir ask, petName, "'s type?";
    Leer petType;
    Escribir "How old is ", petName,"?";
    Leer petAge;
    Escribir "Who is ", petName, "'s owner";
    Leer petOwner;

    Limpiar Pantalla;
    Escribir petName, " is a ", petType, ". S/he have a ", petAge, " old and his owner is ", petOwner;
  FinProceso
                `}
              </code>
          ),
        },
      ],
      youtubeLink: 'https://youtu.be/NMk8O58-9rM'
    }
  }, 
  {
    path: 2,
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title: 'Realizar un programa en el cual se solicite la edad de una persona. Si la persona es mayor o igual a 18 años, deberá mostrar en pantalla: Usted es mayor de edad.',
          code: (
              <code>
                {`
Proceso punto_1
  Definir age Como Entero;

  Escribir "How old are you?";
  Leer age;

  Limpiar Pantalla;

  Si age >= 18 Entonces
    Escribir "You are an adult";
  FinSi
FinProceso
                `}
              </code>
          ),
        },
        {
          exercise: 'Punto 2: ',
          title: 'Realizar un programa en el cual se solicite la edad de una persona. Si la persona es menor a 18 años, deberá mostrar en pantalla: Usted aún es un niño(a).',
          code: (
            <code>
              {`
            Proceso punto_2
              Definir age Como Entero;
              
              Escribir "How old are you?";
              Leer age;
              
              Limpiar Pantalla;
              
              Si age < 18 Entonces
                Escribir "You are a child yet";
              FinSi
            FinProceso
            
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 3: ',
          title: 'Realizar un programa en el cual se solicite el nombre, apellidos y edad de la persona. Si la persona es mayor o igual a 18 años, entonce se deberá imprimir en pantalla [Nombre completo] usted es mayor de edad, por lo tanto puede entrar a la fiesta. Si la edad de la persona es menor que 18 años, entonces, deberá imprimirse el siguiente mensaje: [Nombre completo] usted es menor de edad, por lo tanto, no puede entrar a la fiesta, por favor devuélvase a su casa.',
          code: (
            <code>
              {`
Proceso punto_3
  Definir name Como Caracter;
  Definir lastName Como Caracter;
  Definir age Como Entero;

  Escribir "What is your name?";
  Leer name;
  Escribir "What is your last name?";
  Leer lastName;
  Escribir "How old are you?";
  Leer age;

  Limpiar Pantalla;

  Si age >= 18 Entonces
    Escribir "You ", name, " ", lastName, " are an adult, so you can get into the party";
  SiNo
    Escribir name, " ", lastName, " you are too young, then you can not get inside to the party";
  FinSi
FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 4: ',
          title: 'La video tienda que presta sus servicios de alquiler de películas a los usuarios del barrio el Porvenir, requiere de una aplicación que permita registrar el alquiler de las películas que adquieren sus usuarios. Para cada usuario se debe permitir la opción de alquilar película, consultar películas disponibles y recibir película en la video tienda con la opción de realizar anotaciones sobre estas si se llegan a presentar daños u otra novedad sobre la película.',
          code: (
            <code>
              {`
              Proceso punto_4
                Definir conditional, id Como Entero;
                Definir movie, customer, notes Como Caracter;
                
                Escribir "What you want to do?";
                Escribir "1. Rent a movie";
                Escribir "2. Movies availables";
                Escribir "3. Notes";
                Leer conditional;
                
                Limpiar Pantalla;
                Segun conditional Hacer
                  1:
                    Escribir "Wich movie will be rented?";
                    Leer movie;
                    
                    Limpiar Pantalla;
                    Escribir movie, " has rented";
                  2: 
                    Escribir "Movies availables:";
                    Escribir "-Avatar";
                    Escribir "-Django";
                    Escribir "Chainsawman";
                  3:
                    Escribir "Customer:";
                    Leer customer;
                    Limpiar Pantalla;
                    
                    Escribir "Customer: ",customer;
                    Escribir "Id:";
                    Leer id;
                    Limpiar Pantalla;
                    
                    Escribir "Customer: ",customer;
                    Escribir "Id: ",id;
                    Escribir "Movie:";
                    Leer movie;
                    Limpiar Pantalla;
                    
                    Escribir "Customer: ",customer;
                    Escribir "Id: ",id;
                    Escribir "Movie: ", movie;
                    Escribir "Notes:";
                    Leer notes;
                  De Otro Modo:
                    Escribir "The option selected not exists";
                FinSegun
                
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 5: ',
          title: 'La Droguería Mi Salud presta sus servicios en la localidad de Suba y requiere una aplicación para poder facturar los productos que vende a sus clientes y para ello, los productos tienen unas características que deben indicársele al cliente para que pueda escoger el producto a comprar. Para cada cliente, se tienen las opciones de compra de producto, consulta de precios por producto y devoluciones en caso de que se presenten.',
          code: (
            <code>
              {`
              Proceso punto_5
                Definir firstAction Como Entero;
                Definir secondAction Como Entero;
                Definir product Como Caracter;
                Definir isSelected Como Logico;
                
                isSelected <- Verdadero;
                Escribir "Products:";
                Escribir "1.Pills: Usefull against headache";
                Escribir "2.Alcohol: Prevents infection";
                Escribir "3.Tonic: Fight the flu";
                Leer firstAction;
                
                Limpiar Pantalla;
                
                Segun firstAction Hacer
                  1: product <- "Pills";
                  2: product <- "Alcohol";
                  3: product <- "Tonic";
                  De Otro Modo: 
                    Escribir "This product not exists";
                    isSelected <- Falso;
                FinSegun
                
                Si isSelected Entonces
                  Escribir "What you want to do?";
                  Escribir "1. Buy";
                  Escribir  "2. Price";
                  Escribir "3. Refund";
                  Leer secondAction;
                  
                  Limpiar Pantalla;
                  
                  Segun secondAction Hacer
                    1: Escribir product, " buyed!";
                    2: Escribir product, ":", firstAction, "0$";
                    3: Escribir product, " refunded!";
                  FinSegun
                FinSi
                
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 6: ',
          title: 'El taller de motos "El Maquinista" recibe motocicletas de alto cilindraje para realizar las respectivas revisiones y requiere una aplicación que le permita registrar los servicios generados a sus clientes. Para cada motocicleta se debe tener registro del ingreso al taller y las observaciones por parte del cliente. También debe existir registro de salida del taller con las novedades y otra de arreglos hechos por el mecánico en caso de que se requiera inventariar cambios repuestos en la motocicleta al entregarla.',
          code: (
            <code>
              {`
              Proceso punto_6
                Definir firstAction, secondAction Como Entero;
                Definir action, owner, model, date, observarions, change Como Caracter;
              
                Escribir "Register:";
                Escribir "1.Inputs registers";
                Escribir "2.Outputs registers";
                Escribir "3.Changes registers";
                Leer firstAction;
                
                Limpiar Pantalla;
                
                Segun firstAction Hacer
                  1: action <- "Input";
                  2: action <- "Output";
                  3: action <- "Change";
                  De Otro Modo: 
                    Escribir "The option marked not exists";
                FinSegun
                
                Si firstAction < 4 Entonces
                  Escribir "1.Add a ", action;
                  Escribir "2.", action, " history";
                  Leer secondAction;
                  
                  Limpiar Pantalla;
                  
                  Segun secondAction Hacer
                    1: 
                      Escribir "Owner:";
                      Leer owner;
                      Escribir "Motocyle model:";
                      Leer model;
                      
                      Si action == "Change" Entonces
                        Escribir "Type the change";
                        Leer change;
                        Limpiar Pantalla;
                        
                        Escribir "Change saved!";
                        Escribir "Owner: ", owner;
                        Escribir "Model: ", model;
                        Escribir "Change: ", change;
                      SiNo
                        Escribir action, " date:";
                        Leer date;
                        
                        Limpiar Pantalla;
                        Escribir action, " saved!";
                        Escribir "Owner: ", owner;
                        Escribir "Model: ", model;
                        Escribir action, " date: ", date;
                      FinSi
                      
              
                    2: 
                      Si action == "Change" Entonces
                        Escribir "Changes history:";
                        Escribir "Owner: Emilio | Model: GTX 1080 | Changes: Change the handlebar for a new";
                        Escribir "Owner: Chicharito | Model: Bola de hamster | Changes: Renewed motor";
                      SiNo
                        Escribir action, " history:";
                        Escribir "Owner: Don Juan | Model: GT510 | ", action, ": 29/03 | Observations: Makes weird noises";
                        Escribir "Owner: Pepito | Model: RX580 | ", action, ": 15/02 | Observations: Makes weird noises";	
                      FinSi
                    De Otro Modo: Escribir "The option marked not exists";
                  FinSegun
                FinSi
                
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 7: ',
          title: 'La Secretaría de Salud Municipal requiere de una aplicación que le permita calcular el IMC (Índice de masa corporal) y requiere los datos peso en kilogramos y estatura en metros Para cada persona encuestada adicional a los datos suministrados, debe mostrar el resultado para cada uno y establecer en qué rango se encuentra (bajo peso, normal, sobrepeso y obeso).',
          code: (
            <code>
              {`
              Proceso punto_7
                Definir weight Como Real;
                Definir height Como Real;
                Definir IMC Como Real;
                
                Escribir "Insert your weight (kg): ";
                Leer weight;
                Escribir "Insert your height (metros): ";
                Leer height;
                
                IMC <- (weight / (height * height));
                Escribir IMC;
                Si IMC < 18.4 Entonces
                  Escribir "You have low weight";
                FinSi
                Si IMC >= 18.5 Y IMC < 25 Entonces
                  Escribir "You have normal weight";
                FinSi
                Si IMC >= 25 Y IMC < 29.9 Entonces
                  Escribir "You have a overweight";
                FinSi
                Si IMC >= 30 Entonces
                  Escribir "You have a high overweight";
                FinSi
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 8: ',
          title: 'El pastelero Don Carlos es el mejor pastelero de la ciudad y requiere una aplicación que le permita registrar los pedidos de los clientes en cuanto a las tortas que realiza. Cada torta tiene unas características propias como sabor, cantidad (porciones) y decoraciones). Se requiere que la aplicación permita registrar los pedidos, las tortas disponibles y las ventas que se registren diariamente.',
          code: (
            <code>
              {`
              Proceso punto_8
                Definir firstAction Como Entero;
                Definir flavor Como Caracter;
                Definir slices Como Entero;
                Definir toppins Como Caracter;
                
                Escribir "1.New purchase";
                Escribir "2.Cakes availables";
                Escribir "3.Sold history";
                Leer firstAction;
                Limpiar Pantalla;
                
                Segun firstAction Hacer
                  1: 
                    Escribir "Flavor:";
                    Leer flavor;
                    
                    Limpiar Pantalla;
                    Escribir "Flavor: ", flavor;
                    Escribir "Slices:";
                    Leer slices;
                    
                    Limpiar Pantalla;
                    Escribir "Flavor: ", flavor;
                    Escribir "Slices: ", slices;
                    Escribir "Toppins: ";
                    Leer toppins;
                    
                    Limpiar Pantalla;
                    Escribir "Flavor: ", flavor;
                    Escribir "Slices: ", slices;
                    Escribir "Toppins: ", toppins;
                  2: 
                    Escribir "Cakes availables: ";
                    Escribir "3.Flavor: Chocolate | Slices: 8 | Toppins: No toppins ";
                    Escribir "4.Flavor: Orange | Slices: 5 | Toppins: Lemon candy ";
                    Escribir "2.Flavor: Vanilla | Slices: 12 | Toppins: Chocolate chips ";
                  3: 
                    Escribir "Sold history: ";
                    Escribir "1.Flavor: Vanilla | Slices: 8 | Toppins: No toppins ";
                    Escribir "3.Flavor: Chocolate | Slices: 5 | Toppins: Lemon candy ";
                    Escribir "1.Flavor: Orange | Slices: 12 | Toppins: Chocolate chips ";
                  De Otro Modo: Escribir "The option selected not exists";
                FinSegun 
              FinProceso
            
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 9: ',
          title: 'El profesor de geometría está explicando a sus estudiantes las fórmulas para calcular el área de diferentes figuras geométricas, para ello requiere una aplicación que le facilite el ejercicio solicitándole los valores al estudiante. La aplicación debe permitir que el estudiante seleccione si desea calcular el área de un rectángulo, triángulo o trapecio. No olvide solicitar los datos necesarios para realizar cada cálculo y mostrar su respectivo resultado.',
          code: (
            <code>
              {`
              Proceso punto_9
                Definir operation Como Entero;
                Definir height Como Real;
                Definir width Como Real;
                Definir width_2 Como Real;
                Definir area Como Real;
                
                Escribir "What area do you want to know?";
                Escribir "1.Rectangle";
                Escribir "2.Triangle";
                Escribir "3.Trapezium";
                Leer operation;
                Limpiar Pantalla;
                
                Segun operation Hacer
                  1:
                    Escribir "Rectangle height:";
                    Leer height;
                    Escribir "RectanglE width:";
                    Leer width;
                    
                    area <- height * width;
                    Limpiar Pantalla;
                    Escribir "The rectangle area is ", area;
                  2: 
                    Escribir "Triangle base:";
                    Leer width;
                    Escribir "Triangle height:";
                    Leer height;
                    
                    area <- width * height / 2;
                    Limpiar Pantalla;
                    Escribir "The triangle area is ", area;
                  3: 
                    Escribir "Trapezium base 1:";
                    Leer width;
                    Escribir "Trapezium base 2: ";
                    Leer width_2;
                    Escribir "Trapezium height:";
                    Leer height;
                    
                    area <- (width + width_2) * height / 2;
                    Limpiar Pantalla;
                    Escribir "The trapezium area is ", area;
                  De Otro Modo: Escribir "The option selected is not available";
                FinSegun
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 10: ',
          title: 'El banco "Su banco fiel" es un banco que inicia sus actividades financieras y necesita una aplicación para llevar las cuentas de sus usuarios; por lo tanto, se sugiere que la cuenta tenga los atributos titular y cantidad. Para cada cliente las cuentas permitirán realizar ingresos, retiros o consultas de valor. En los ingresos no se pueden insertar valores negativos y para los retiros el valor no puede ser mayor al valor que tiene en la cuenta.',
          code: (
            <code>
              {`
              Proceso punto_10
                Definir firstAction, secondAction, sum, totalMoney Como Entero;
                Definir user Como Caracter;
              
                Escribir "Customers: ";
                Escribir "1.Jeffrey McClain";
                Escribir "2.Juan Pérez";
                Escribir "3.Michael Escobar";
                Leer firstAction;
                Limpiar Pantalla;
                
                Segun firstAction Hacer
                  1: 	user <- "Jeffrey McClain";
                    totalMoney <- 532;
                  2: 	user <- "Juan Pérez";
                    totalMoney <- 230;
                  3: 	user <- "Michael Escobar";
                    totalMoney <- 67585;
                  De Otro Modo:
                    Escribir "This customer not exists";
                FinSegun
                
                Si firstAction < 4 Entonces
                  Escribir user, " account";
                  Escribir "What action do you want to do?";
                  Escribir "1.Make a deposit";
                  Escribir "2.Withdraw";
                  Escribir "3.Wallet";
                  Leer secondAction;
                  Limpiar Pantalla;
                  
                  Segun secondAction Hacer
                    1:
                      Escribir "How many sum want to deposit?";
                      Leer sum;
                      Limpiar Pantalla;
                      
                      Si sum < 1 Entonces
                        Escribir "Can not desposit that sum";
                      FinSi
                      Escribir sum, " deposited";
                    2:
                      Escribir "How many sum want to withdraw?";
                      Leer sum;
                      Limpiar Pantalla;
                      
                      Si sum <= totalMoney y sum >= 1 Entonces
                        Escribir "Withdraw success! Your balance is actually: ", totalMoney - sum;
                      SiNo
                        Escribir "Can't make this transactions because: negative characters or you want to withdraw more money than you have";
                      FinSi
                    3: Escribir "Your balance is actually: ", totalMoney;
                    De Otro Modo: Escribir "The option selected is not available";
                  FinSegun
                FinSi
              FinProceso
              `}
            </code>
          ),
        },
      ],
      youtubeLink: 'https://youtu.be/dClsh-hUSjw'
    }
  }, 
  {
    path: 3,
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title: (
            <span> 
              Realizar la siguiente figura por medio del ciclo Para. 
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643643915_01.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDM5MTVfMDEuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=DjFZLfhZs1rHABx9V41r6fwApgfsoEPGOP8SvYFd%2F9ETW%2FxetXPxcEvczbJncabwZsrIgUUz9u910xeycXX6zUuT2zLAW-ttshkqai%2Fu48fCrTXWD-awvUp6bhw3mI8vXfpAgli9qJzigPOG8zGMS70TXTKJJ3F26Tzzu%2Fh7vtWCLRyZG%2FXdByYgHXzY0QUFeMDzxAhrjLSG8gryAbxU0WRu92a1L5KWc6km4itGf7mN1IryXzb3Mz5yP-fgWv2U4ramWkHowZ5o%2F%2FtLeYAppq-nQ5KuG4pHMWvnmsD22b6-hqxhFwjoCV0Iwq07IXR7pWgvIEAz3bKqZF85157trA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank"
                rel="noreferrer"
              >
                -Link
                </a>
            </span>
              ),
          code: (
            <code>
              {`
              Proceso punto_1
                Definir counter Como Entero;
                Definir dot, string Como Caracter;
                
                dot <- "*";
                string <- dot;
                Para counter <- 1 Hasta 10 Con Paso 1 Hacer
                  Si counter > 1 Entonces
                    string <- Concatenar(string, dot);
                  FinSi
                  Escribir string;
                FinPara
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 2: ',
          title: (
            <span>
              Realizar la siguiente figura por medio del ciclo Mientras - Hacer.
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644021_02.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwMjFfMDIuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=j5pL44FP1xpnoT7h1QRTVxpCWidyR666oWfQ6EojK3QtHk5TF7AIpfqgQEU2ZdeBuso9X22DamUS895V-iGRmPvOnDqloIHzr5%2FGi8eK0DN7jqM1Em4fkrO6wo9IpWXm0GLS75KaewimK-wDmUPuIW1C3%2FmI8nHfO8iAHv0bgKqCefmeK9qXHBOsW-hPzLQB4MLLMiWCzt3GbJjfQRWm4gANpe15%2FEEgc6DLVrk42juRvQ7vtI%2FP5OCqhhlG8FImZXMIujlE3RlBNF6fiqV9YcKt0PYIxRj-ApEWNeD7ugTO6BnmmH9r3HnITsYqQKdmbQZfEOcVqLCurdFUd%2FftDw__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA" 
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              Proceso punto_2
                Definir dot, dotState, space, spaceState, state Como Caracter;
                Definir counter Como Entero;
                Definir isTheFirst Como Logico;
                
                dot <- "*";
                space <- " ";
                dotState <- dot;
                spaceState <- space;
                isTheFirst <- Verdadero;
                
                Mientras Longitud(dotState) < 10 Hacer
                  spaceState <- " ";
                  Si isTheFirst Entonces
                    isTheFirst <- Falso;
                  SiNo
                    dotState <- Concatenar(dotState, dot);
                  FinSi
                  Para counter <- 1 Hasta 10 - Longitud(dotState) Con Paso 1 Hacer
                    spaceState <- Concatenar(spaceState, space);
                  FinPara
                  state <- Concatenar(spaceState, dotState);
                  Escribir state;
                FinMientras
                
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 3: ',
          title:  (
            <span>
              Realizar la siguiente figura por medio del ciclo Repetir - Hasta Que
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644087_03.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwODdfMDMuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=Cl-DAWxt7OSnZNCUXS7MF0JLSxext6Jl51WU3k%2F0y3UN2gpetDsJ181JHWtB4dOj51UUJU%2FP1ykcPNIA5Ovw8Ch6BrvvDV60cPGMXA6x2gwLoKPQt3WeNtYSvB8%2FxE50t4J74BU839oI6IU%2FWiILD589iPYG30LxPSNtb3EYI-4-%2F0LI-jhGrijwaRzEkGopidrn%2FnGo5UqPwFBKzdDhOvXWfeSR4F5LsgnnmmzDtQLkTNF9u8KUAE%2FcWpdHg2xPR0zK6eDZ-t8JG-SSVJJvS6-0ylEUip5RUijTzGNNGuv24EY1wqv5qlBwUJz9E7vMY2M7BBkHH3aNq0aDYWnDNA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              Proceso punto_3
                Definir counter, spacesState, spacesCounter, i Como Entero;
                Definir dot, spaces Como Caracter;
                
                counter <- 0;
                dot <- '*';
                spaces <- ' ';
                spacesState <- 1;
                spacesCounter <- 12;
                
                Escribir '              *';
                Para i<-1 Hasta  spacesCounter Con Paso 1 Hacer
                  Mientras counter <= i Hacer
                    dot <- Concatenar(dot, '*');
                    counter <- counter + 1;
                  FinMientras
                  Mientras spacesState <= spacesCounter Hacer
                    spaces <- Concatenar(spaces, ' ');
                    spacesState <- spacesState + 1;
                  FinMientras
                  Escribir spaces, dot;
                  counter <- counter - 1;
                  spacesCounter <- spacesCounter - 1;
                  spacesState <- 1;
                  spaces <- ' ';
                FinPara
                Escribir '            ***';
                Escribir '           *****';
                Escribir '          *******';
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 4: ',
          title: (
            <span>
              Se requiere un programa que pueda crear la tabla de multiplicar del número que el usuario indique por medio del ciclo Para; esta debe ser impresa del 1 al 10. Ejemplo, si el usuario indica que desea crear la tabla del 5, entonces el resultado debería ser el siguiente:
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644382_04.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQzODJfMDQuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=i9Q50jupntzFR4fixxNTaGCGbBEhtsjn1LNhLA15aC2K6MFpFovRD99zjEQ9mqX2JqxdXJWGd2RSr1WV2Ce1jtvXOq2kOwe574J7gp9qzVR7N05qV3CzytPWnFZ4zUouuvm7AR5RZr4DRF7SAiFF0E-Xv8tm6dIAm9tH7tstVIABolCpSI8PE0TfqG4tHWmtEPHbz1rFblR9pXLjbjYMZH4maqk9HSog8FOtGJ7wPOG4G5cOebtLgP6tKSGKkw0ZUbQO73XvU0pvXrJQyTixYFgqLIScMxlu3JPiZy5ZBsFgAYLyhKgEaDZEzLnyshWNRnG6bGdU5zUWpmiaWjczpA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              Proceso punto_4
                Definir i, number, result Como Entero;
                
                Escribir "What number do you want to know his table?";
                Leer number;
                Para i<-1 Hasta 10 Con Paso 1 Hacer
                  result <- i*number;
                  Escribir i, " x ", number, " = ", result;
                FinPara
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 5: ',
          title: (
            <span>
              Utilizando el ciclo que usted desee, crear un menú de ejecución infinita hasta que el usuario desee terminar dicho ciclo.
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644509_05.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQ1MDlfMDUuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=DtQi7cHjtiN%2FcrROXiZusQofIXzdTPPgyo7sGvFgxkvjZ599gFaICmjSQhaxce01ehB6XZdzib3lKvo047ZvKad5QZX809-dEcTFDRYDsew6WAgNq54fXwf-dfvHqECM-pUdFz5FOPmLOT8Vk9ODsFkbgebdhQHG3X6COS6ujlKySBlHCh%2FP%2FBPnIADVy64tpjOsOIuHtHF%2FDifa9J%2FwA2B3Y8TfbmKyd0MOLuOs%2FUfd4I9Kiu7i%2FDpZ1exvrOY1tNAg9gfJtauIGcshiyupcfeZcC4bls%2F1q1lP5VvDXPVGvBVon22pCeoRm51OGo8MiDJ6b6%2F%2Fd5EyLdEgbRcE5w__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              Proceso punto_5
                Definir appStatus Como Logico;
                Definir switcher Como Entero;
                Definir hello, name Como Caracter;
                
                hello <- "You don't insert a name yet";
                appStatus <- Verdadero;
                
                Mientras appStatus Hacer
                  Escribir 'App on';
                  Escribir '1. Insert your name';
                  Escribir '2. Get hello';
                  Escribir "3. Turn Off";
                  Leer switcher;
                  
                  Segun switcher Hacer
                    1: 
                      Limpiar Pantalla;
                      Escribir "Insert your name";
                      Leer name;
                      hello <- Concatenar("Hello ", name);
                      Escribir "Name saved!";
                    2: 
                      Limpiar Pantalla;
                      Escribir hello;
                    3: 
                      Limpiar Pantalla;
                      Escribir "Good bye!";
                      Escribir "App turned off";
                      appStatus <- Falso;
                    De Otro Modo:
                      Limpiar Pantalla;
                      Escribir "This option is unavailable";
                  FinSegun
                FinMientras
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 6: ',
          title: 'Se está creando una aplicación que va a estar conectada con un prototipo que permita almacenar contactos telefónicos en el dispositivo. Para ello cada contacto debe contener nombre completo, teléfono y organización. Se requiere que la aplicación permita añadir 3 contactos verificando que el número no esté almacenado, buscar contactos almacenados y eliminar contactos si el usuario lo requiere. Recuerde que el sistema debe terminar cuando el usuario así lo indique.',
          code: (
            <code>
              {`
              Proceso punto_6
                Definir appStatus Como Logico;
                Definir firstAction, secondAction, thirdAction, i Como Entero;
                Definir contact, email, number Como Caracter;
                Dimension contact[3], email[3], number[3];
                
                appStatus <- Verdadero;
                
                Para i <- 0 Hasta 2 Hacer
                  contact[i] <- "Empty slot";
                  number[i] <- "";
                  email[i] <- "";
                FinPara
                
                Mientras appStatus Hacer
                  Escribir "1.Contacts";
                  Escribir "2.Add a new contact";
                  Escribir "3.Turn off the application";
                  Leer firstAction;
                  
                  Segun firstAction Hacer
                    1:
                      Limpiar Pantalla;
                      Para i <- 0 Hasta 2 Hacer
                        Escribir i+1, ".", contact[i];
                      FinPara
                      Escribir "4.Back to menu";
                      Leer secondAction;
                      Limpiar Pantalla;
                      
                      Si secondAction > 3 Entonces
                        Escribir "Back!";
                        Si contact[secondAction - 1] == "Empty slot" Entonces
                          Escribir "Slot empty";
                        FinSi
                      FinSi
                      
                      Si secondAction < 4 y contact[secondAction - 1] <> "Empty slot" Entonces
                        Escribir contact[secondAction - 1];
                        Escribir email[secondAction - 1];
                        Escribir number[secondAction - 1];
                        Escribir "1.Delete";
                        Escribir "2.Back to menu";
                        Leer thirdAction;
                        Limpiar Pantalla;
                        
                        Si thirdAction == 1 Entonces
                          contact[secondAction - 1] <- "Empty slot";
                          email[secondAction - 1] <- "";
                          number[secondAction - 1] <- "";
                          Escribir "Deleted!";
                        FinSi
                        
                      FinSi
                    2:
                      Escribir "Slots availables: ";
                      Para i <- 0 Hasta 2 Hacer
                        Escribir i+1,".",contact[i];
                      FinPara
                      Leer secondAction;
                      Limpiar Pantalla;
                      
                      Si secondAction < 4 Entonces
                        Si contact[secondAction - 1] == "Empty slot" Entonces
                          Escribir "Contact name: ";
                          Leer contact[secondAction - 1];
                          Escribir "Contact email: ";
                          Leer email[secondAction - 1];
                          Escribir "Contact phone: ";
                          Leer number[secondAction - 1];
                          Limpiar Pantalla;
                          
                          Escribir "Saved!";
                          
                        SiNo
                          Escribir "This slot is not available";
                        FinSi
                      SiNo
                        Escribir "Back!";
                      FinSi
                    3: 
                      Limpiar Pantalla;
                      Escribir "App turned off, good bye!";
                      appStatus <- Falso;
                    De Otro Modo: 
                      Limpiar Pantalla;
                      Escribir "Option unavailable";
                  FinSegun
                FinMientras
                
              FinProceso
              `}
            </code>
          ),
          youtubeLink: '',
        },
        {
          exercise: 'Punto: 7',
          title: 'El parqueadero "El guardián" presta sus servicios de parqueadero nocturno para los usuarios del barrio y requiere una aplicación que permita registrar los vehículos que se cuidan en estas instalaciones. Se sugiere que el parqueadero tenga los atributos del vehículo como son, placa y marca, y los datos del cliente como son nombre completo y número de teléfono. Para cada vehículo se debe permitir la opción de ingresar al parqueadero, retirar del parqueadero y consultar si un vehículo se encuentra en el parqueadero. Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga en presente que el parqueadero solo puede almacenar máximo 5 vehículos.',
          code: (
            <code>
              {`
              Proceso punto_7
                Definir appStatus Como Logico;
                Definir firstAction, secondAction, thirdAction, i, j, secondAction_2 Como Entero;
                Definir owner, number, car, phone Como Caracter;
                Dimension owner[5], number[5], car[5], phone[5];
                
                appStatus <- Verdadero;
                
                Para j <- 0 Hasta 4 Con Paso 1 Hacer
                  owner[j] <- "Empty slot";
                  number[j] <- "Empty slot";
                  car[j] <- "Empty slot";
                  phone[j] <- "Empty slot";
                FinPara
                
                Mientras appStatus Hacer
                  Escribir "1.Cars parkeds";
                  Escribir "2.Park a car";
                  Escribir "3.Turn off the application";
                  Leer firstAction;
                  
                  Segun firstAction Hacer
                    1:
                      Limpiar Pantalla;
                        Limpiar Pantalla;
                        Escribir "Owner:";
                        Para i <- 0 Hasta 4 Con Paso 1 Hacer
                          Escribir i+1, ".", owner[i];
                        FinPara
                        Escribir "6.Back to menu";
                        Leer secondAction;
                        Limpiar Pantalla;
                        
                        Si secondAction < 6 Entonces
                          secondAction_2 <- secondAction - 1;
                          Si owner[secondAction_2] <> "Empty Slot"  Entonces 
                            Escribir "Owner: ", owner[secondAction_2];
                            Escribir "Phone: ", phone[secondAction_2];
                            Escribir "Car type: ", car[secondAction_2];
                            Escribir "Car id: ", number[secondAction_2];
                            Escribir "1.Unpark";
                            Escribir "2.Back to menu";
                            Leer thirdAction;
                            
                            Si thirdAction == 1 Entonces
                              owner[secondAction - 1] <- "Empty slot";
                              number[secondAction - 1] <- "Empty slot";
                              car[secondAction - 1] <- "Empty slot";
                              phone[secondAction - 1] <- "Empty slot";
                              Escribir "Car unparked";
                            SiNo
                              Limpiar Pantalla;
                            FinSi
                          SiNo
                            Escribir "Park Slot Empty";
                          FinSi
                        FinSi
                    2:
                      Limpiar Pantalla;
                      Escribir "Slots availables:";
                      Para i <- 0 Hasta 4 Con Paso 1 Hacer
                        Escribir i+1, ".", owner[i];
                      FinPara
                      Escribir "6. Back to menu";
                      Leer secondAction;
                      Limpiar Pantalla;
                      
                      Si secondAction < 6 Entonces
                        Si owner[secondAction - 1] == "Empty slot" Entonces
                          Escribir "Car owner: ";
                          Leer owner[secondAction - 1];
                          Escribir "Owner phone: ";
                          Leer phone[secondAction - 1];
                          Escribir "Car type;";
                          Leer car[secondAction - 1];
                          Escribir "Car id: ";
                          Leer number[secondAction - 1];
                          
                          Limpiar Pantalla;
                          Escribir "Saved!";
                        SiNo
                          Escribir "This slot is not empty";
                        FinSi
                      FinSi
              
              
                    3: 
                      Limpiar Pantalla;
                      Escribir "App turned off, good bye!";
                      appStatus <- Falso;
                    De Otro Modo: 
                      Limpiar Pantalla;
                      Escribir "This option is not available";
                  FinSegun
                FinMientras
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 8: ',
          title: 'La escuela automovilística "El Maestro" requiere una aplicación que permita registrar a sus clientes en los cursos de enseñanza automovilística y establecer quienes lo han aprobado para continuar con el trámite de adquirir la licencia de conducción. Para cada usuario se debe permitir registrar su ingreso al curso, consultar usuarios que hayan presentado el curso y resultados de la prueba del curso (si fueron aprobados o no). Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga presente que la escuela tiene capacidad máxima de gestionar 8 usuarios en su totalidad.',
          code: (
            <code>
              {`
              Proceso punto_8
                Definir appStatus Como Logico;
                Definir firstAction, secondAction, thirdAction, i, secondAction_2, counter Como Entero;
                Definir name, testResults, testStatus Como Caracter;
                Dimension name[8], testResults[100];
                
                appStatus <- Verdadero;
                counter <- 0;
                
                Para i <- 0 Hasta 7 Con Paso 1 Hacer
                  name[i] <- "Empty slot";
                FinPara
                
                Para i <- 0 Hasta 99 Con Paso 1 Hacer
                  testResults[i] <- " ";
                FinPara
                
                Mientras appStatus Hacer
                  Escribir "1.Course students";
                  Escribir "2.Add a student";
                  Escribir "3.Previous students";
                  Escribir "4.Turn off the application";
                  Leer firstAction;
                  
                  Segun firstAction Hacer
                    1:
                      Limpiar Pantalla;
                      Escribir "Course slots: ";
                      Para i <- 0 Hasta 4 Con Paso 1 Hacer
                        Escribir i+1, ".", name[i];
                      FinPara
                      Escribir "9.Back to menu";
                      Leer secondAction;
                      Limpiar Pantalla;
                      
                      Si secondAction < 9 Entonces
                        secondAction_2 <- secondAction - 1;
                        Si name[secondAction_2] <> "Empty slot"  Entonces 
                          Escribir "Owner: ", name[secondAction_2];
                          Escribir "State: in course";
                          Escribir "1.Set test result";
                          Escribir "2.Back to menu";
                          Leer thirdAction;
                          
                          Si thirdAction == 1 Entonces
                            Para i <- 0 Hasta 99 Con Paso 1 Hacer
                              Si testResults[i] <> " " Entonces
                                counter <- counter + 1;
                              FinSi
                            FinPara
                            Leer testStatus;
                            testStatus <- Concatenar(" - ", testStatus);
                            testResults[counter] <- Concatenar(name[secondAction - 1], testStatus);
                            name[secondAction - 1] <- "Empty slot";
                            
                            Escribir "Test saved!";
                          SiNo
                            Limpiar Pantalla;
                          FinSi
                        SiNo
                          Escribir "Park Slot Empty";
                        FinSi
                      FinSi
                    2:
                      Limpiar Pantalla;
                      Escribir "Slots availables:";
                      Para i <- 0 Hasta 7 Con Paso 1 Hacer
                        Escribir i+1, ".", name[i];
                      FinPara
                      Escribir "9. Back to menu";
                      Leer secondAction;
                      Limpiar Pantalla;
                      
                      Si secondAction < 9 Entonces
                        Si name[secondAction - 1] == "Empty slot" Entonces
                          Escribir "Stundent name: ";
                          Leer name[secondAction - 1];
                          
                          Limpiar Pantalla;
                          Escribir "Saved!";
                        SiNo
                          Escribir "This slot is not empty";
                        FinSi
                      FinSi
                      
                    3:
                      Limpiar Pantalla;
                      Para i <- 0 Hasta 99 Hacer
                        Si testResults[i] <> " " Entonces
                          Escribir testResults[i];
                        FinSi
                      FinPara
                    4: 
                      Limpiar Pantalla;
                      Escribir "App turned off, good bye!";
                      appStatus <- Falso;
                    De Otro Modo: 
                      Limpiar Pantalla;
                      Escribir "This option is not available";
                  FinSegun
                FinMientras
              FinProceso
              `}
            </code>
          ),
          youtubeLink: '',
        },
      ],
      youtubeLink: 'https://youtu.be/ugeskDu6HH4'
    }
  }, 
  {
    path: 4,
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title:  'Crear un vector de tipo Entero con 5 posiciones, llenarlo con información solicitada al usuario. Después de recoger toda la información, se requiere imprimir el índice de cada posición en el arreglo con su valor de la siguiente manera: [0]=55 [1]=99 [2]=11 [3]=56 [4]=69',
          code: (
            <code>
              {`
              Proceso punto_1
                Definir data, i Como Entero;
                Dimension data[5];
                Para i <- 0 Hasta 4 Hacer
                  Escribir "Insert the number on the position ", i+1, ": ";
                  Leer data[i];
                  Limpiar Pantalla;
                FinPara
                Escribir "Data: ";
                Para i <- 0 Hasta 4 Hacer
                  Escribir "[",i,"] = ", data[i];
                FinPara
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 2: ',
          title:  'Crear un arreglo de números enteros de 20 posiciones, el cual, debe ser llenado con números aleatorios entre 1 y 100; después de haber llenado dicho arreglo, se debe volver a recorrer utilizando un ciclo diferente al que se usó para llenarse e imprimir los números pares e impares. Ejemplo Números pares: 2, 4, 6, 8, 10 Números impares: 1, 3, 5, 7, 9',
          code: (
            <code>
              {`
              Proceso punto_2
                Definir numbers, i Como Entero;
                Dimension numbers[20];
                
                Para i <- 0 Hasta 19 Hacer
                  numbers[i] <- Azar(100)+1;
                FinPara
                
                Escribir "Par numbers: ";
                Para i <- 0 Hasta 19 Hacer
                  Si numbers[i]%2 == 0 Entonces
                    Escribir numbers[i];
                  FinSi
                FinPara
                
                Escribir "--------------------------------------------";
                
                Escribir "Impar numbers: ";
                Para i <- 0 Hasta 19 Hacer
                  Si numbers[i]%2 <> 0 Entonces
                    Escribir numbers[i];
                  FinSi
                FinPara
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 3: ',
          title: 'Imprimir los números primos del 1 al 1000, el resultado debe ser buscado de forma matemática.',
          code: (
            <code>
              {`
              Proceso punto_3
                Definir i Como Entero;
                
                Escribir 2;
                Escribir 3;
                Escribir 5;
                Escribir 7;
                
                Para i <- 0 Hasta 1000 Hacer
                  Si i%2 <> 0 y i%3 <> 0 y i%5 <> 0 y i%7 <> 0 Entonces
                    Escribir i;
                  FinSi
                FinPara
              FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 4: ',
          title: (
            <>
              <span>Dada la siguiente matriz bidimensional, el cual debe de quemar en el código</span>
              <h5>01 02 03 04 05</h5>
              <h5>06 07 08 09 10</h5>
              <h5>11 12 13 14 15</h5>
              <h5>16 17 18 19 20</h5>
              <br/>
              <span>o Utilizando el conocimiento adquirido, a excepción de hacerlo de forma manual, imprima la siguiente matriz bidimensional.</span>
              <h5>01 02 03 04 05</h5>
              <h5>10 09 08 07 06</h5>
              <h5>11 12 13 14 15</h5>
              <h5>20 19 18 17 16</h5>
            </>
          ),
          code: (
            <code>
              {`
Proceso punto_4
  Definir numbers, i Como Entero;
  Dimension numbers[4, 5];
  
  Para i <- 0 Hasta 19 Hacer
    Si i < 5 Entonces
      numbers[0, i] <- i+1;
    FinSi
    Si i >= 5 y i < 10 Entonces
      numbers[1, 4-(i-5)] <- i+1;
    FinSi
    Si i >= 10 y i < 15 Entonces
      numbers[2, i - 10] <- i+1;
    FinSi
    Si i >= 15 Entonces
      numbers[3, 4 - (i-15)] <- i+1;
    FinSi
  FinPara
  
  Escribir "0", numbers[0, 0], " ", "0", numbers[0, 1], " ", "0", numbers[0, 2], " ", "0", numbers[0, 3], " ", "0", numbers[0, 4];
  Escribir "0", numbers[1, 4], " ", "0", numbers[1, 3], " ", "0", numbers[1, 2], " ", "0", numbers[1, 1], " ", numbers[1, 0];
  Escribir numbers[2, 0], " ", numbers[2, 1], " ", numbers[2, 2], " ", numbers[2, 3], " ", numbers[2, 4];
  Escribir numbers[3, 4], " ", numbers[3, 3], " ", numbers[3, 2], " ", numbers[3, 1], " ", numbers[3, 0];
  
  Escribir "------------------------------------------------------";
  
  Escribir "0", numbers[0, 0], " ", "0", numbers[0, 1], " ", "0", numbers[0, 2], " ", "0", numbers[0, 3], " ", "0", numbers[0, 4];
  Escribir numbers[1, 0], " ", "0", numbers[1, 1], " ", "0", numbers[1, 2], " ", "0", numbers[1, 3], " ", "0", numbers[1, 4];
  Escribir numbers[2, 0], " ", numbers[2, 1], " ", numbers[2, 2], " ", numbers[2, 3], " ", numbers[2, 4];
  Escribir numbers[3, 0], " ", numbers[3, 1], " ", numbers[3, 2], " ", numbers[3, 3], " ", numbers[3, 4];
FinProceso
              `}
            </code>
          ),
        },
        {
          exercise: 'Punto 5: ',
          title: (
            <span>
              Se debe de imprimir el siguiente cuadro: 
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1644205032_14.%20taller.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDQyMDUwMzJfMTQuJTIwdGFsbGVyLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=hWF-cLxepPwN53WtOemYrIZeDT63Lpbkr0nNxuX%2F6RIEPo-mmzNCZdVQ-w3cxeklzThbQGLc9I6Pt1Q2ZVYVOSKSLcXSoB7bfy-5Q83mtYI5p1jS94T-3YrFGWlASVpPvGh2Ta13jDkaSlXswVJ9MsrmRmEw9tqKvhEwlvC-1i0OffHbTE3QPz0O8-fWATlK4qQZZaBuVqoObvOcexWVK48f-P7-wZiA2xA2ICZkUL7VtgQ8zmCGLtuX3lSK2VxgxdbKrcI%2FGMKwVbiJjN74GIpcMuUoNIqqJS09HhCSssp%2FWePJc3IhrdSAQVYJ5T4v0B4RxMTVOPmNMEF6LAVa9g__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank"
                rel="noreferrer"
              >
                -Link
              </a>
              <br/>
              El usuario deberá insertar la fila y columna de la cual desea ver el resultado, el resultado de cada celda debe estar previamente calculado en una matriz bidimensional la cual cada resultado obedecerá a la fila y columna insertada por el usuario.
            </span>
            
          ),
          code: (
            <code>
              {`
              Proceso punto_5
                Definir  numbers, row, column, i, j Como Entero;
                Dimension numbers[10, 10];
              
                Para i <- 0 Hasta 9 Hacer
                  Para j <- 0 Hasta 9 Hacer
                    numbers[i, j] <- (j+1)*(i+1);
                  FinPara
                FinPara
                Escribir "      || 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 ||";
                Escribir " || 0 ||1x1||1x2||1x3||1x4||1x5||1x6||1x7||1x8||1x9||1x10|";
                Escribir " || 1 ||2x1||2x2||2x3||2x4||2x5||2x6||2x7||2x8||2x9||2x10|";
                Escribir " || 2 ||3x1||3x2||3x3||3x4||3x5||3x6||3x7||3x8||3x9||3x10|";
                Escribir " || 3 ||4x1||4x2||4x3||4x4||4x5||4x6||4x7||4x8||4x9||4x10|";
                Escribir " || 4 ||5x1||5x2||5x3||5x4||5x5||5x6||5x7||5x8||5x9||5x10|";
                Escribir " || 5 ||6x1||6x2||6x3||6x4||6x5||6x6||6x7||6x8||6x9||6x10|";
                Escribir " || 6 ||7x1||7x2||7x3||7x4||7x5||7x6||7x7||7x8||7x9||7x10|";
                Escribir " || 7 ||8x1||8x2||8x3||8x4||8x5||8x6||8x7||8x8||8x9||8x10|";
                Escribir " || 8 ||9x1||9x2||9x3||9x4||9x5||9x6||9x7||9x8||9x9||9x10|";
                Escribir " || 9 ||10x1||10x2||10x3||10x4||10x5||10x6||10x7||10x8||10x9||10x10|";
                
                Escribir "What result do you want to meet?";
                Escribir "Insert the row number: ";
                Leer row;
                Escribir "Insert the coulm number: ";
                Leer column;
                Limpiar Pantalla;
                
                Escribir "Result:", numbers[row, column]; 
              FinProceso
              `}
            </code>
          ),
        },
      ],
      youtubeLink: 'https://youtu.be/uUWmFnFwX60'
    }
  }, 
  
];

export const javaExercises = [
  {
    path: '1Java',
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title: 'Realizar un programa el cual solicite su nombre y apellidos.',
          code: (
            <code>
              {`
              package Taller_1;

              import java.util.Scanner;
              
              public class PuntoUno {
                private static String name;
                private static String lastName;
                
                public static void main(String[] args) {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("What is your name?");
                    name = input.nextLine();
                    System.out.print("What is your last name?");
                    lastName = input.nextLine();
                    
                    System.out.print("Your full name is: "+ name + " " + lastName);
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 2: ',
          title: 'Realizar un programa el cual solicite su nombre, apellidos, edad y estatura.',
          code: (
            <code>
              {`
              package Taller_1;

              import java.util.Scanner;
              
              public class PuntoDos {
                public static String name;
                public static String lastName;
                public static int age;
                public static float height;
                public static void main(String[] args) {
                  questions();		
                  prints();
                }
              
                public static void questions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("What is your name?");
                  name = input.nextLine();
                  System.out.print("What is your last name?");
                  lastName = input.nextLine();
                  System.out.print("How old are you?(Years)");
                  age = input.nextInt();
                  System.out.print("How tall are you?(Metros)");
                  height = input.nextFloat();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                
                public static void prints() {
                  System.out.print("Your name is: "+name+" || ");
                  System.out.print("You lastName is: "+lastName+" || ");
                  System.out.print("Your age is: "+age+" years || ");
                  System.out.print("Your height is: "+height+"m");
                }
              }
              
              `}
            </code>
          )
        },
        
        {
          exercise: 'Punto 3: ',
          title: 'Realizar un programa el cual solicite su nombre y apellidos, también debe capturar nombre y apellidos de su padre y madre. Al finalizar debe imprimir en pantalla el siguiente mensaje "Yo [Nombre Completo], soy hijo de [Nombre de la Madre] y [Nombre del Padre].',
          code: (
            <code>
              {`
              package Taller_1;

              import java.util.Scanner;
              
              public class PuntoTres {
                public static String name;
                public static String nameMother;
                public static String nameFather;
                
                public static void main(String[] args) {
                  questions();
                  prints();
                }
                
                public static void questions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("What is your fullname?");
                    name = input.nextLine();
                    System.out.print("What is your mother fullname?");
                    nameMother = input.nextLine();
                    System.out.print("What is you father fullname?");
                    nameFather = input.nextLine();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void prints() {
                  System.out.print("Yo "+name+" ");
                  System.out.print("soy hijo de "+nameMother+" ");
                  System.out.print("y "+nameFather+" ");
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 4: ',
          title: 'Realizar un programa el cual solicite el nombre de una ciudad capital y el país. Al finalizar debe imprimir en pantalla el siguiente mensaje "La ciudad [Nombre de la Ciudad], es la capital del país [Nombre del País]',
          code: (
            <code>
              {`
              package Taller_1;

              import java.util.Scanner;
              
              public class PuntoCuatro {
                private static String city;
                private static String country;
                public static void main(String[] args) {
                  questions();
                    
                  System.out.print("The "+ country + "'s capital is " + city);
                }
              
                public static void questions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("Name a capital city");
                    city = input.nextLine();
                    System.out.print("Name the country of the previous capital");
                    country = input.nextLine();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 5: ',
          title: 'Realizar un programa el cual solicite el nombre de su mascota, edad de la mascota, el tipo de mascota y su nombre completo. Al finalizar el sistema debe e imprimir en pantalla el siguiente mensaje: [Nombre de Mascota] es un(a) [Tipo de Mascota], el cual, tiene [Edad de la Mascota] años de edad y [Nombre Completo] es actualmente su dueño(a).',
          code: (
            <code>
              {`
              package Taller_1;

              import java.util.Scanner;
              
              public class PuntoCinco {
                private static String petName;
                private static String petType;
                private static int petAge;
                private static String ownerFullName;
                public static void main(String[] args) {
                  questions();
                    
                  System.out.print(petName+" is a "+petType+" and have "+petAge+" years old and his actually owner is "+ownerFullName);
                }
              
                public static void questions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("What is your full name?");
                    ownerFullName = input.nextLine();
                    System.out.print("What is your pet's name");
                    petName = input.nextLine();
                    System.out.print("What type is your pet?");
                    petType = input.nextLine();
                    System.out.print("How old is your pet?(years)");
                    petAge = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
      ],
    },
    youtubeLink: undefined
  },
  {
    path: '2Java',
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title: 'Realizar un programa en el cual se solicite la edad de una persona. Si la persona es mayor o igual a 18 años, deberá mostrar en pantalla: Usted es mayor de edad.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoUno {
                private static int age;
                public static void main (String[] args) {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("How old are you?(In Years)");
                    age = input.nextInt();		
                    if (age >= 18) {
                      System.out.print("Your are an adult");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 2: ',
          title: 'Realizar un programa en el cual se solicite la edad de una persona. Si la persona es menor a 18 años, deberá mostrar en pantalla: Usted aún es un niño(a).',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoDos {
                private static int age;
                public static void main (String[] args) {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("How old are you?(In Years)");
                    age = input.nextInt();		
                    if (age < 18) {
                      System.out.print("Your are too young");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 3: ',
          title: 'Realizar un programa en el cual se solicite el nombre, apellidos y edad de la persona. Si la persona es mayor o igual a 18 años, entonce se deberá imprimir en pantalla [Nombre completo] usted es mayor de edad, por lo tanto puede entrar a la fiesta. Si la edad de la persona es menor que 18 años, entonces, deberá imprimirse el siguiente mensaje: [Nombre completo] usted es menor de edad, por lo tanto, no puede entrar a la fiesta, por favor devuélvase a su casa.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoTres {
                private static int age;
                public static void main (String[] args) {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.print("How old are you?(In Years)");
                    age = input.nextInt();		
                    if (age >= 18) {
                      System.out.print("Your are an adult, you can get into the party");
                    } else {
                      System.out.print("Your are too young to get into the party");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto: 4: ',
          title: 'La video tienda que presta sus servicios de alquiler de películas a los usuarios del barrio el Porvenir, requiere de una aplicación que permita registrar el alquiler de las películas que adquieren sus usuarios. Para cada usuario se debe permitir la opción de alquilar película, consultar películas disponibles y recibir película en la video tienda con la opción de realizar anotaciones sobre estas si se llegan a presentar daños u otra novedad sobre la película.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoCuatro {
                public static String movie;
                public static String customer;
                public static String notes;
                public static String movies[] = {"avatar", "chinasawman", "bee movie"};
                public static int conditional;
                public static int id;
                public static void main(String[] args) {
                  firstMenu();
                  switch (conditional) {
                    case 1:{
                      firstCase();
              
                      break;
                    }
                    case 2:{
                      secondCase();	
              
                      break;
                    }
                    case 3:{
                      thirdCase();
                      
                      break;
                    }
                    default: 
                      System.out.println("Option unavailable");
                  }
                }
                
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("What do you want to do?");
                    System.out.println("1.Rent a movie || 2.Movies availables || 3.Notes");
                    conditional = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void firstCase() {
                  Scanner switchScanner = new Scanner(System.in);
                  try {
                    Boolean errorState = true;
                    System.out.println("Wich movie do you want to rent?");
                    movie = switchScanner.nextLine();
                    
                    for (int i = 0; i < movies.length; i++) {
                      if (movies[i].equals(movie.toLowerCase())){
                        System.out.println("You have rented " + movies[i] + "!!");
                        errorState = false;
              
                        break;
                      }
                    }
                    
                    if (errorState) {
                      System.out.println("Movie not founded");
                    }
                  } catch (Exception e) {
                    switchScanner.close();
                  }
                }
              
                public static void secondCase() {
                  System.out.println("Movies availables: ");
                  for (int i = 0; i < movies.length; i++ ) {
                    System.out.println(movies[i]);
                  }
                }
              
                public static void thirdCase() {
                  Scanner notesInput = new Scanner(System.in);
                  Scanner newNotesInput = new Scanner(System.in);
              
                  try {
                    System.out.println("Customer: ");
                    customer = notesInput.nextLine();
                    System.out.println("Id: ");
                    id = notesInput.nextInt();
                    System.out.println("Note: ");
                    notes = newNotesInput.nextLine();
                
                    System.out.println("Note added!");
                  } catch (Exception e) {
                    notesInput.close();
                    newNotesInput.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 5: ',
          title: 'La Droguería Mi Salud presta sus servicios en la localidad de Suba y requiere una aplicación para poder facturar los productos que vende a sus clientes y para ello, los productos tienen unas características que deben indicársele al cliente para que pueda escoger el producto a comprar. Para cada cliente, se tienen las opciones de compra de producto, consulta de precios por producto y devoluciones en caso de que se presenten.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoCinco {
                public static int firstSelection;
                public static int secondSelection;
                public static String products[] = {"Pills", "Alcohol", "Tonic"};
                public static String options[] = {"1.Buy", "2.Price", "3.Refund"};
                
                public static void main (String[] args) {
                  firstMenu();
              
                  if ( firstSelection > 0 && firstSelection <= products.length) {
                    secondMenu();
                    result();
                  } else {
                    System.out.println("This option is unavailable");
                  }
                }
              
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Products availables: ");
                    for (int i = 0; i < products.length; i++) {
                      System.out.println(i+1 + "."+  products[i]);
                    }
                    firstSelection = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void secondMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("What do you want to do?");
                    for (int i = 0; i < options.length; i++) {
                      System.out.println(options[i]);
                    }
                  secondSelection = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void result() {
                  switch (secondSelection) {
                    case 1:
                      System.out.println(products[firstSelection-1] + " buyed!");
                      
                      break;
                    case 2:
                      System.out.println(products[firstSelection-1] + " " + firstSelection + "0$");
              
                      break;
                    case 3:
                      System.out.println(products[firstSelection-1] + " refunded!");
              
                      break;
                    default:
                      System.out.println("This option is unavailable");
                      break;
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 6: ',
          title: 'El taller de motos "El Maquinista" recibe motocicletas de alto cilindraje para realizar las respectivas revisiones y requiere una aplicación que le permita registrar los servicios generados a sus clientes. Para cada motocicleta se debe tener registro del ingreso al taller y las observaciones por parte del cliente. También debe existir registro de salida del taller con las novedades y otra de arreglos hechos por el mecánico en caso de que se requiera inventariar cambios repuestos en la motocicleta al entregarla.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoSeis {
                  public static int firstAction;
                  public static int secondAction;
                  public static String owner;
                  public static String model;
                  public static String date;
                  public static String observations;
                  public static String change;
                  public static String options[] = {"Input", "Output", "Change"};
                  public static void main(String[] args) {
                    firstMenu();
                    if (firstAction > 0 && firstAction <= 3) {
                      secondMenu();
                      switch (secondAction) {
                        case 1:
                          addAPut();
                          break;
                        case 2:
                          showHistory();
                          break;
                        default:
                          System.out.println("This option is unavailable");
                      }
                    } else {
                      System.out.println("Option unavailable");
                    }
                }
                
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    for (int i = 0; i < options.length; i++) {
                      System.out.println(i+1 + "." + options[i] + " registers");
                    }
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void secondMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("1.Add a " + options[firstAction - 1] );
                    System.out.println("2." + options[firstAction - 1] + " history");
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void addAPut() {
                  Scanner thirdInput = new Scanner(System.in);
                  try {
                    System.out.println("Owner: ");
                    owner = thirdInput.nextLine();
                    System.out.println("Motocycle model: ");
                    model = thirdInput.nextLine();
              
                    if (options[firstAction - 1] == options[2]) {
                      System.out.println("Type the change");
                      change = thirdInput.nextLine();
              
                      System.out.println("Changes saved!");
                    } else {
                      System.out.println(options[firstAction - 1 ] + " date: ");
                      date = thirdInput.nextLine();
              
                      System.out.println(options[firstAction - 1 ] + " saved!");
                    }
                  } catch (Exception e) {
                    thirdInput.close();
                  }
                }
              
                public static void showHistory() {
                  if (options[firstAction - 1] == options[2]) {
                    System.out.println("Changes history: ");
                    System.out.println("Owner: Emilio | Model: GTX 1080 | Changes: Change the handlebar for a new");
                    System.out.println("Owner: Chicharito | Model: Bola de hamster | Changes: Renewed motor");
                  } else {
                    System.out.println(options[firstAction - 1] + " history:");
                    System.out.println("Owner: Don Juan | Model: GT510 | " + 
                      options[firstAction - 1] + ": 29/03 | Observations: Makes weird noises");
                    System.out.println("Owner: Don Juan | Model: GT510 | " +
                      options[firstAction - 1] + ": 29/03 | Observations: Makes weird noises");
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 7: ',
          title: 'La Secretaría de Salud Municipal requiere de una aplicación que le permita calcular el IMC (Índice de masa corporal) y requiere los datos peso en kilogramos y estatura en metros Para cada persona encuestada adicional a los datos suministrados, debe mostrar el resultado para cada uno y establecer en qué rango se encuentra (bajo peso, normal, sobrepeso y obeso).',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoSiete {
                public static float weight;
                public static float height;
                public static float imc;
                public static void main(String[] args) {
                  menu();
                  showIMC();
                }
              
                public static void menu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Insert your weight(kg): ");
                    weight = input.nextFloat();
                    System.out.println("Insert your height(metros): ");
                    height = input.nextFloat();
                
                    imc = (weight / (height * height));
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void showIMC() {
                  if (imc < 18.4) {
                    System.out.println("You have low weight");
                  }
              
                  if (imc >= 18.5 && imc < 25) {
                    System.out.println("You have normal weight");
                  }
              
                  if (imc >= 25 && imc < 29.9) {
                    System.out.println("You have overweight");
                  }
              
                  if (imc >= 30) {
                    System.out.println("You have high overweight");
                  }
                }
              }
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 8: ',
          title: 'El pastelero Don Carlos es el mejor pastelero de la ciudad y requiere una aplicación que le permita registrar los pedidos de los clientes en cuanto a las tortas que realiza. Cada torta tiene unas características propias como sabor, cantidad (porciones) y decoraciones). Se requiere que la aplicación permita registrar los pedidos, las tortas disponibles y las ventas que se registren diariamente.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoOcho {
                public static int firstAction;
                public static int slices;
                public static String flavor;
                public static String toppins;
                public static String options[] = {
                  "1.New purchase", 
                  "2.Cakes availables", 
                  "3.Sold history"
                };
                public static String availables[] = {
                  "3.Flavor: Chocolate | Slices: 8 | Toppins: No toppins ",
                  "4.Flavor: Orange | Slices: 5 | Toppins: Lemon candy", 
                  "2.Flavor: Vanilla | Slices: 12 | Toppins: Chocolate chips"
                };
                public static String solds[] = {
                  "1.Flavor: Vanilla | Slices: 8 | Toppins: No toppins",
                  "3.Flavor: Chocolate | Slices: 5 | Toppins: Lemon candy",
                  "1.Flavor: Orange | Slices: 12 | Toppins: Chocolate chips",
                };
                public static void main(String[] args) {
                  firstMenu();
                  switch (firstAction) {
                    case 1: 
                      newPurchase();
                      break;
                    case 2: 
                      showCakesAvailables();
                      break;
                    case 3:
                      cakesSolds();
                      break;
                    default:
                      System.out.println("This option is unavailable");
                      break;  
                  }
                }
                public static void firstMenu() {
                  Scanner firstInput = new Scanner(System.in);
                  try {
                    for (int i = 0; i < options.length; i++) {
                      System.out.println(options[i]);
                    }
                    firstAction = firstInput.nextInt();
                  } catch (Exception e) {
                    firstInput.close();
                  }
                }
                public static void newPurchase() {
                  Scanner secondInput = new Scanner(System.in);
                  Scanner thirdInput = new Scanner(System.in);
              
                  try {
                    System.out.println("Flavor: ");
                    flavor = secondInput.nextLine();
                    System.out.println("Slices: ");
                    slices = secondInput.nextInt();
                    System.out.println("Toppins: ");
                    toppins = thirdInput.nextLine();
              
                    System.out.println("Submited! Delivered soon: ");
                    System.out.println( "Flavor: " + flavor + " || Slices: " + slices + " || Toppins: " + toppins);
                  } catch (Exception e) {
                    secondInput.close();
                    thirdInput.close();
                  }
                }
                public static void showCakesAvailables() {
                  System.out.println("Cakes availables: ");
                  for (int i = 0; i < availables.length; i++) {
                    System.out.println(solds[i]);
                  }
                }
                public static void cakesSolds() {
                  System.out.println("Cakes solds: ");
                  for (int i = 0; i < solds.length; i++) {
                    System.out.println(availables[i]);
                  }
                }
              }
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 9: ',
          title: 'El profesor de geometría está explicando a sus estudiantes las fórmulas para calcular el área de diferentes figuras geométricas, para ello requiere una aplicación que le facilite el ejercicio solicitándole los valores al estudiante. La aplicación debe permitir que el estudiante seleccione si desea calcular el área de un rectángulo, triángulo o trapecio. No olvide solicitar los datos necesarios para realizar cada cálculo y mostrar su respectivo resultado.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoNueve {
                public static int operation;
                public static float height;
                public static float width;
                public static float width_2;
              
                public static void main (String[] args) {
                  menu();
                  switch (operation) {
                    case 1:
                      rectangleArea();
                      break;
                    case 2:
                      triangleArea();
                      break;
                    case 3:
                      trapeziumArea();
                      break;
                    default: 
                      System.out.println("This option is not available");
                      break;
                  }
              
                }
                public static void menu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("What form area do you want to know?");
                    System.out.println("1.Rectangle");
                    System.out.println("2.Triangle");
                    System.out.println("3.Trapezium");
                    operation = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
              
                }
              
                public static void rectangleArea() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Rectangle height: ");
                    height = input.nextFloat();
                    System.out.println("Rectangle width: ");
                    width = input.nextFloat();
                    
                    System.out.println("The rectangle's area is: " + (height * width));
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void triangleArea() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Triangle height: ");
                    height = input.nextFloat();
                    System.out.println("Triangle width: ");
                    width = input.nextFloat();
              
                    System.out.println("The triangle's area is: " + (width * height / 2));
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void trapeziumArea() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Trapezium width: ");
                    width = input.nextFloat();
                    System.out.println("Trapezium width 2: ");
                    width_2 = input.nextFloat();
                    System.out.println("Trapezium height: ");
                    height = input.nextFloat();
              
                    System.out.println("The trapezium's area is: " + ((width + width_2) * height / 2));
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 10: ',
          title: 'El banco "Su banco fiel" es un banco que inicia sus actividades financieras y necesita una aplicación para llevar las cuentas de sus usuarios; por lo tanto, se sugiere que la cuenta tenga los atributos titular y cantidad. Para cada cliente las cuentas permitirán realizar ingresos, retiros o consultas de valor. En los ingresos no se pueden insertar valores negativos y para los retiros el valor no puede ser mayor al valor que tiene en la cuenta.',
          code: (
            <code>
              {`
              package Taller_2;

              import java.util.Scanner;
              
              public class PuntoDiez {
                public static int firstAction;
                public static int secondAction;
                public static int sum;
                public static String customers[] = {"Jeffrey McClain", "Juan Pérez", "Michael Escobar"};
                public static int customersMoney[] = {532, 230, 67585};
                public static void main (String[] args) {
                  firstMenu();
                  if (firstAction > 0 && firstAction <= 3) {
                    secondMenu();
                    switch (secondAction) {
                      case 1: {
                        deposit();
                        break;
                      }
                      case 2: {
                        withdraw();
                        break;
                      }
                      case 3: {
                        System.out.println("Your actually balance is: " + customersMoney[firstAction-1]);
                        break;
                      }
                      default: {
                        System.out.println("This option is not available");
                        break;
                      }
                    }
                  }
                }
                
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Customers: ");
                    for (int i = 0; i < customers.length; i++) {
                      System.out.println(i+1 + "."+customers[i]);
                    }
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void secondMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println(customers[firstAction-1] + "account");
                      System.out.println("What action do you want to do?");
                      System.out.println("1.Make a deposit");
                      System.out.println("2.Withdraw");
                      System.out.println("3.Wallet");
                      secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void deposit() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("How many sum want to deposit?");
                    sum = input.nextInt();
                
                    if (sum < 1) {
                      System.out.println("Can not deposit that sum");
                    } else {
                      System.out.println(sum +" deposited!");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void withdraw() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("How many sum want to withdraw?");
                    sum = input.nextInt();
              
                    if (sum <= customersMoney[firstAction-1] && sum >= 1) {
                      System.out.println("Withdraw success! You actually balance is: " + (customersMoney[firstAction-1] - sum));
                    } else {
                      System.out.print("Can't make this transactions maybe for this reasons: negative characters or you want to withdraw more money than you have");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              `}
            </code>
          )
        },
      ],
    },
    youtubeLink: undefined
  },
  {
    path: '3Java',
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title: (
            <span> 
              Realizar la siguiente figura por medio del ciclo Para. 
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643643915_01.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDM5MTVfMDEuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=DjFZLfhZs1rHABx9V41r6fwApgfsoEPGOP8SvYFd%2F9ETW%2FxetXPxcEvczbJncabwZsrIgUUz9u910xeycXX6zUuT2zLAW-ttshkqai%2Fu48fCrTXWD-awvUp6bhw3mI8vXfpAgli9qJzigPOG8zGMS70TXTKJJ3F26Tzzu%2Fh7vtWCLRyZG%2FXdByYgHXzY0QUFeMDzxAhrjLSG8gryAbxU0WRu92a1L5KWc6km4itGf7mN1IryXzb3Mz5yP-fgWv2U4ramWkHowZ5o%2F%2FtLeYAppq-nQ5KuG4pHMWvnmsD22b6-hqxhFwjoCV0Iwq07IXR7pWgvIEAz3bKqZF85157trA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank"
                rel="noreferrer"
              >
                -Link
                </a>
            </span>
              ),
          code: (
            <code>
              {`
              package Taller_3;

              public class PuntoUno {
                public static String dot = "*";
                public static String state = dot;
              
                public static void main (String[] args) {
                  for (int i = 0; i < 10; i++) {
                    if (i >= 1) {
                      state = (state + dot);
              
                    }
                    System.out.println(state);
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 2: ',
          title: (
            <span>
              Realizar la siguiente figura por medio del ciclo Mientras - Hacer.
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644021_02.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwMjFfMDIuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=j5pL44FP1xpnoT7h1QRTVxpCWidyR666oWfQ6EojK3QtHk5TF7AIpfqgQEU2ZdeBuso9X22DamUS895V-iGRmPvOnDqloIHzr5%2FGi8eK0DN7jqM1Em4fkrO6wo9IpWXm0GLS75KaewimK-wDmUPuIW1C3%2FmI8nHfO8iAHv0bgKqCefmeK9qXHBOsW-hPzLQB4MLLMiWCzt3GbJjfQRWm4gANpe15%2FEEgc6DLVrk42juRvQ7vtI%2FP5OCqhhlG8FImZXMIujlE3RlBNF6fiqV9YcKt0PYIxRj-ApEWNeD7ugTO6BnmmH9r3HnITsYqQKdmbQZfEOcVqLCurdFUd%2FftDw__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA" 
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              package Taller_3;

              public class PuntoDos {
                public static String dot = "*";
                public static String space = " ";
                public static String dotState = dot;
                public static String spaceState;
                public static boolean isTheFirst = true;
              
                public static void main(String[] args) {
                  while (dotState.length() < 10) {
                    spaceState = space;
                    if (isTheFirst) {
                      isTheFirst = false;
                    } else {
                      dotState = dotState + dot;
                    }
                    for (int i = 0; i < (10-dotState.length()); i++) {
                      spaceState = spaceState + space;
                    }
                    System.out.println(spaceState+dotState);
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 3: ',
          title: (
            <span>
              Realizar la siguiente figura por medio del ciclo Repetir - Hasta Que
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644087_03.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwODdfMDMuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=Cl-DAWxt7OSnZNCUXS7MF0JLSxext6Jl51WU3k%2F0y3UN2gpetDsJ181JHWtB4dOj51UUJU%2FP1ykcPNIA5Ovw8Ch6BrvvDV60cPGMXA6x2gwLoKPQt3WeNtYSvB8%2FxE50t4J74BU839oI6IU%2FWiILD589iPYG30LxPSNtb3EYI-4-%2F0LI-jhGrijwaRzEkGopidrn%2FnGo5UqPwFBKzdDhOvXWfeSR4F5LsgnnmmzDtQLkTNF9u8KUAE%2FcWpdHg2xPR0zK6eDZ-t8JG-SSVJJvS6-0ylEUip5RUijTzGNNGuv24EY1wqv5qlBwUJz9E7vMY2M7BBkHH3aNq0aDYWnDNA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              package Taller_3;

              public class PuntoTres {
                public static int counter = 0;
                public static int spacesState = 1;
                public static int spacesCounter = 12;
                public static String dot = "*";
                public static String spaces = " ";
              
                public static void main(String[]args) {
                  System.out.println("              *");
              
                  for (int i = 0; i < spacesCounter; i++) {
                    while (counter <= i) {
                      dot = dot + "*";
                      counter = counter + 1;
                    }
                    while (spacesState <= spacesCounter) {
                      spaces = spaces + " ";
                      spacesState = spacesState + 1;
                    }
                    System.out.println(spaces + dot);
                    counter = counter - 1;
                    spacesCounter = spacesCounter - 1;
                    spacesState = 1;
                    spaces = " ";
                  }
              
                  System.out.println("            ***");
                  System.out.println("           *****");
                  System.out.println("          *******");
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 4: ',
          title: (
            <span>
              Se requiere un programa que pueda crear la tabla de multiplicar del número que el usuario indique por medio del ciclo Para; esta debe ser impresa del 1 al 10. Ejemplo, si el usuario indica que desea crear la tabla del 5, entonces el resultado debería ser el siguiente:
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644382_04.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQzODJfMDQuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=i9Q50jupntzFR4fixxNTaGCGbBEhtsjn1LNhLA15aC2K6MFpFovRD99zjEQ9mqX2JqxdXJWGd2RSr1WV2Ce1jtvXOq2kOwe574J7gp9qzVR7N05qV3CzytPWnFZ4zUouuvm7AR5RZr4DRF7SAiFF0E-Xv8tm6dIAm9tH7tstVIABolCpSI8PE0TfqG4tHWmtEPHbz1rFblR9pXLjbjYMZH4maqk9HSog8FOtGJ7wPOG4G5cOebtLgP6tKSGKkw0ZUbQO73XvU0pvXrJQyTixYFgqLIScMxlu3JPiZy5ZBsFgAYLyhKgEaDZEzLnyshWNRnG6bGdU5zUWpmiaWjczpA__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              package Taller_3;

              import java.util.Scanner;
              
              public class PuntoCuatro {
                public static int number;
              
                public static void main(String[] args) {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("What multiply table do you want to know?");
                    number = input.nextInt();
                    for (int i = 0; i <= 10; i++) {
                      System.out.println(number + " x " + i + " = " + (number*i));
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 5: ',
          title: (
            <span>
              Utilizando el ciclo que usted desee, crear un menú de ejecución infinita hasta que el usuario desee terminar dicho ciclo.
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1643644509_05.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQ1MDlfMDUuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=DtQi7cHjtiN%2FcrROXiZusQofIXzdTPPgyo7sGvFgxkvjZ599gFaICmjSQhaxce01ehB6XZdzib3lKvo047ZvKad5QZX809-dEcTFDRYDsew6WAgNq54fXwf-dfvHqECM-pUdFz5FOPmLOT8Vk9ODsFkbgebdhQHG3X6COS6ujlKySBlHCh%2FP%2FBPnIADVy64tpjOsOIuHtHF%2FDifa9J%2FwA2B3Y8TfbmKyd0MOLuOs%2FUfd4I9Kiu7i%2FDpZ1exvrOY1tNAg9gfJtauIGcshiyupcfeZcC4bls%2F1q1lP5VvDXPVGvBVon22pCeoRm51OGo8MiDJ6b6%2F%2Fd5EyLdEgbRcE5w__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank" 
                rel="noreferrer"
              >-
                Link
              </a>
            </span>
          ),
          code: (
            <code>
              {`
              package Taller_3;

              import java.util.Scanner;
              
              public class PuntoCinco {
                public static boolean appStatus = true;
                public static int switcher;
                public static String hello = "You don't insert a name yet";
              
                public static void main(String[] args) {
                  Scanner input = new Scanner(System.in);
                  Scanner secondInput = new Scanner(System.in);
                  try {
                    while (appStatus) {
                      firstMenu();
                      switch (switcher) {
                        case 1: {
                          setHello();
                          break;
                        }
                        case 2: {
                          System.out.println(hello);
              
                          break;
                        }
                        case 3: {
                          turnOff();
                          break;
                        }
                        default: {
                          System.out.println("This option is not available");
                          break;
                        }
                      }
                    }
                  } catch (Exception e) {
                    input.close();
                    secondInput.close();
                  }
                }
              
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("App on");
                    System.out.println("1.Insert your name");
                    System.out.println("2.Get hello");
                    System.out.println("3.Turn off");
                    switcher = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void setHello() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Insert your name: ");
                    hello = "Hello " + input.nextLine();
                    System.out.println("Name saved!");
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void turnOff() {
                  System.out.println("App turned off");
                  System.out.println("Good Bye!");
                  appStatus = false;
                }
              }
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 6: ',
          title: 'Se está creando una aplicación que va a estar conectada con un prototipo que permita almacenar contactos telefónicos en el dispositivo. Para ello cada contacto debe contener nombre completo, teléfono y organización. Se requiere que la aplicación permita añadir 3 contactos verificando que el número no esté almacenado, buscar contactos almacenados y eliminar contactos si el usuario lo requiere. Recuerde que el sistema debe terminar cuando el usuario así lo indique.',
          code: (
            <code>
              {`
              package Taller_3;

              import java.util.Scanner;
              
              public class PuntoSeis {
                public static boolean appStatus = true;
                public static int firstAction;
                public static int secondAction;
                public static int thirdAction;
              
                public static String emails[] = new String[3];
                public static String contacts[] = new String[3];
                public static String numbers[] = new String[3];
                public static void main(String[] args) {
                  while (appStatus) {
                    menu();
                    switch (firstAction) {
                      case 1: {
                        showContacts();
                        break;
                      }
                      case 2: {
                        secondMenu();
                        addContact();
                        break;
                      }
                      case 3: {
                        System.out.println("App turned off! Good bye!");
                        appStatus = false;
              
                        break;
                      }
                      default: {
                        System.out.println("This option is not available");
                        break;
                      }
                    }
                  }
                }
              
                public static void menu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("1.Contacts");
                    System.out.println("2.Add a new contact");
                    System.out.println("3.Turn off the application");
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void showContacts() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Contacts: ");  
                    
                    for (int i = 0; i < contacts.length; i++) {
                      System.out.println(i+1 + "." + (contacts[i] != null ? contacts[i] : "Empty slot"));  
                    }
              
                    secondAction = input.nextInt();
              
                    if (emails[secondAction-1] != null) {
                      contactsActions();
                    } else {
                      System.out.println("Contact slot empty");
                    }
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                public static void contactsActions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println(contacts[secondAction-1]);
                    System.out.println(emails[secondAction-1]);
                    System.out.println(numbers[secondAction-1]);
                    System.out.println("1.Delete");
                    System.out.println("2.Back to menu");
              
                    thirdAction = input.nextInt();
              
                    if (thirdAction == 1) {
                      contacts[secondAction - 1] = null;
                      emails[secondAction - 1] = null;
                      numbers[secondAction - 1] = null;
                      System.out.println("Contact deleted!");
                    } else {
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
              
                public static void secondMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Slots avaiables: ");
              
                    for (int i = 0; i < emails.length; i++) {
                      System.out.println(i+1 + "." + (emails[i] == null ? "Slot avaiable" : contacts[i]));
                    }
              
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                public static void addContact() {
                  Scanner input = new Scanner(System.in);
                  try {
                    if (emails[secondAction - 1] == null) {
                      System.out.println("Contact name: ");
                      contacts[secondAction - 1] = input.nextLine();
                      System.out.println("Email: ");
                      emails[secondAction - 1] = input.nextLine();
                      System.out.println("Number: ");
                      numbers[secondAction - 1] = input.nextLine();
              
                      System.out.println("Contact saved!"); 
                    } else {
                      System.out.println("This slot is not available"); 
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 7: ',
          title: 'El parqueadero "El guardián" presta sus servicios de parqueadero nocturno para los usuarios del barrio y requiere una aplicación que permita registrar los vehículos que se cuidan en estas instalaciones. Se sugiere que el parqueadero tenga los atributos del vehículo como son, placa y marca, y los datos del cliente como son nombre completo y número de teléfono. Para cada vehículo se debe permitir la opción de ingresar al parqueadero, retirar del parqueadero y consultar si un vehículo se encuentra en el parqueadero. Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga en presente que el parqueadero solo puede almacenar máximo 5 vehículos.',
          code: (
            <code>
              {`
              package Taller_3;

              import java.util.Scanner;
              
              public class PuntoSiete {
                public static boolean appStatus = true;
                public static int firstAction;
                public static int secondAction;
                public static int thirdAction;
              
                public static String owner[] = new String[5];
                public static String number[] = new String[5];
                public static String car[] = new String[5];
                public static String phone[] = new String[5];
              
                public static void main(String[] args) {
                  while (appStatus) {
                    firstMenu();
                    switch (firstAction) {
                      case 1: {
                        carsParked();
                        if (car[secondAction-1] != null) {
                          carsOptions();
                        } else {
                          System.out.println("Park slot empty");
                        }
              
                        break;
                      }
                      case 2: {
                        parkingMenu();
                        if (car[secondAction - 1] == null) {
                          addAPark();
                        } else {
                          System.out.println("This slot is not available"); 
                        }
              
                        break;
                      }
                      case 3: {
                        System.out.println("App turned off! Good bye!");
                        appStatus = false;
              
                        break;
                      }
                      default: {
                        System.out.println("This option is not available");
                        break;
                      }
                    }
                  }
                }
              
                public static void firstMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("1.Cars in");
                    System.out.println("2.Park a car");
                    System.out.println("3.Turn off the application");
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                public static void carsParked() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("owner: ");  
                    for (int i = 0; i < owner.length; i++) {
                      System.out.println(i+1 + "." + (owner[i] != null ? owner[i] : "Empty slot"));  
                    }
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                public static void carsOptions() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println(owner[secondAction-1]);
                    System.out.println(phone[secondAction-1]);
                    System.out.println(car[secondAction-1]);
                    System.out.println(number[secondAction-1]);
                    System.out.println("1.Unpark");
                    System.out.println("2.Back to menu");
              
                    thirdAction = input.nextInt();
              
                    if (thirdAction == 1) {
                      owner[secondAction - 1] = null;
                      phone[secondAction -1 ] = null;
                      car[secondAction - 1] = null;
                      number[secondAction - 1] = null;
                      System.out.println("Car Unparked!");
                    } else {
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                public static void parkingMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Slots avaiables: ");
              
                    for (int i = 0; i < car.length; i++) {
                      System.out.println(i+1 + "." + (car[i] == null ? "Slot avaiable" : owner[i]));
                    }
              
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
                public static void addAPark() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Car owner name: ");
                    owner[secondAction - 1] = input.nextLine();
                    System.out.println("Phone: ");
                    phone[secondAction - 1] = input.nextLine();
                    System.out.println("Car id number: ");
                    number[secondAction - 1] = input.nextLine();
                    System.out.println("Car model: ");
                    car[secondAction - 1] = input.nextLine();
              
                    System.out.println("Parked!"); 
                  } catch (Exception e) {
                    input.close();
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 8: ',
          title: 'La escuela automovilística "El Maestro" requiere una aplicación que permita registrar a sus clientes en los cursos de enseñanza automovilística y establecer quienes lo han aprobado para continuar con el trámite de adquirir la licencia de conducción. Para cada usuario se debe permitir registrar su ingreso al curso, consultar usuarios que hayan presentado el curso y resultados de la prueba del curso (si fueron aprobados o no). Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga presente que la escuela tiene capacidad máxima de gestionar 8 usuarios en su totalidad.',
          code: (
            <code>
              {`
              package Taller_3;

              import java.util.Scanner;
              
              public class PuntoOcho {
                public static boolean appStatus = true;
                public static int firstAction;
                public static int secondAction;
                public static int thirdAction;
                public static String testAction;
              
                public static String name[] = new String[8];
                public static String testResults[] = new String[100];
              
                public static void main(String[] args) {
                  while (appStatus) {
                    menu_1();
                    
                    switch (firstAction) {
                      case 1: {
                        studentsMenu();
                        studentAction();
                        
                        break;
                      }
                      case 2: {
                        studentsSlots();
                        addStudent();
              
                        break;
                      }
                      case 3: {
                        previousStudents();
              
                        break;
                      }
                      case 4: {
                        System.out.println("App turned off! Good bye!");
                        appStatus = false;
              
                        break;
                      }
                      default: {
                        System.out.println("This option is not available");
                        break;
                      }
                    }
                  }
                }
                
                private static void menu_1() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("1.Course students");
                    System.out.println("2.Add a stundent");
                    System.out.println("3.Previous students");
                    System.out.println("4.Turn off the application");
                    firstAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void studentsMenu() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Name: ");  
                    
                    for (int i = 0; i < name.length; i++) {
                      System.out.println(i+1 + "." + (name[i] != null ? name[i] : "Empty slot"));  
                    }
              
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void studentAction() {
                  Scanner input = new Scanner(System.in);
                  try {
                    if (name[secondAction-1] != null) {
                      System.out.println(name[secondAction-1]);
                      System.out.println("On curse.");
                      System.out.println("1.Test result");
                      System.out.println("2.Back to menu");
              
                      thirdAction = input.nextInt();
              
                      if (thirdAction == 1) {
                        System.out.println("Insert the test result: ");
                        testAction = input.nextLine();
              
                        for (int i = 0; i < testResults.length; i++) {
                          if (testResults[i] == null) {
                            testResults[i] = name[secondAction - 1] + " - " + testAction;
              
                            break;
                          }
                        }
                        name[secondAction - 1] = null;
              
                        System.out.println("Saved");
                      } else {
                      }
              
                    } else {
                      System.out.println("Course slot empty");
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void studentsSlots() {
                  Scanner input = new Scanner(System.in);
                  try {
                    System.out.println("Slots avaiables: ");
              
                    for (int i = 0; i < name.length; i++) {
                      System.out.println(i+1 + "." + (name[i] == null ? "Slot avaiable" : name[i]));
                    }
              
                    secondAction = input.nextInt();
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void addStudent() {
                  Scanner input = new Scanner(System.in);
                  try {
                    if (name[secondAction - 1] == null) {
                      System.out.println("Student name: ");
                      name[secondAction - 1] = input.nextLine();
                
                      System.out.println("Registered!"); 
                    } else {
                      System.out.println("This slot is not available"); 
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void previousStudents() {
                  if (testResults[0] != null) {
                    System.out.println("Previous results");
              
                    for (int i = 0; i < testResults.length; i++) {
                      if (testResults[i] != null) {
                        System.out.println(testResults[i]);
                      }
                    }
                  } else {
                    System.out.println("Not previous results yet");
                  }
                }
              }
              
              `}
            </code>
          )
        },
        
      ],
    },
    youtubeLink: undefined
  },
  {
    path: '4Java',
    source: {
      data: [
        {
          exercise: 'Punto 1: ',
          title:  'Crear un vector de tipo Entero con 5 posiciones, llenarlo con información solicitada al usuario. Después de recoger toda la información, se requiere imprimir el índice de cada posición en el arreglo con su valor de la siguiente manera: [0]=55 [1]=99 [2]=11 [3]=56 [4]=69',
          code: (
            <code>
              {`
              package Taller_4;

              import java.util.Scanner;
              
              public class PuntoUno {
                public static int data[] = new int[5];
              
                public static void main(String[] args) {
                  setData();
                  printData();
                }
              
                private static void setData() {
                  Scanner input = new Scanner(System.in);
                  try {
                    for (int i = 0; i < data.length; i++) {
                      System.out.println("Insert the number on the position " + i + ": ");
                      data[i] = input.nextInt();
              
                    }
                  } catch (Exception e) {
                    input.close();
                  }
                }
              
                private static void printData() {
                  System.out.println("Data: ");
                  for (int i = 0; i < data.length; i++) {
                    System.out.println("["+ i +"] = " + data[i]);
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 2: ',
          title:  'Crear un arreglo de números enteros de 20 posiciones, el cual, debe ser llenado con números aleatorios entre 1 y 100; después de haber llenado dicho arreglo, se debe volver a recorrer utilizando un ciclo diferente al que se usó para llenarse e imprimir los números pares e impares. Ejemplo Números pares: 2, 4, 6, 8, 10 Números impares: 1, 3, 5, 7, 9',
          code: (
            <code>
              {`
              package Taller_4;

              public class PuntoDos {
                public static int numbers[] = new int[20];
              
                public static void main(String[] args) {
                  setRandomNumbers();
                  printPares();    
                  System.out.println(" ");
                  printImpares();
                }
              
                private static void setRandomNumbers() {
                  for (int i = 0; i < numbers.length; i++) {
                    numbers[i] = (int) Math.floor(Math.random()*99+1);
                  }
                }
              
                private static void printPares() {
                  System.out.println("Par numbers: ");
                  for (int i = 0; i < numbers.length; i++) {
                    if (numbers[i]%2 == 0) {
                      System.out.print(numbers[i] + " ");
                    }
                  }
                } 
              
                private static void printImpares() {
                  System.out.println("Inpar numbers: ");
                  for (int i = 0; i < numbers.length; i++) {
                    if (numbers[i]%2 != 0) {
                      System.out.print(numbers[i] + " ");
                    }
                  }
                } 
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 3: ',
          title: 'Imprimir los números primos del 1 al 1000, el resultado debe ser buscado de forma matemática.',
          code: (
            <code>
              {`
              package Taller_4;

              public class PuntoTres {
                public static void main(String[] args) {
                  System.out.println(2);
                  System.out.println(3);
                  System.out.println(5);
                  System.out.println(7);
                  for (int i = 0; i < 1000; i++) {
                      if (i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0 ) {
                        System.out.println(i);
                      }
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 4: ',
          title: (
            <>
              <span>Dada la siguiente matriz bidimensional, el cual debe de quemar en el código</span>
              <h5>01 02 03 04 05</h5>
              <h5>06 07 08 09 10</h5>
              <h5>11 12 13 14 15</h5>
              <h5>16 17 18 19 20</h5>
              <br/>
              <span>o Utilizando el conocimiento adquirido, a excepción de hacerlo de forma manual, imprima la siguiente matriz bidimensional.</span>
              <h5>01 02 03 04 05</h5>
              <h5>10 09 08 07 06</h5>
              <h5>11 12 13 14 15</h5>
              <h5>20 19 18 17 16</h5>
            </>
          ),
          code: (
            <code>
              {`
              package Taller_4;

              public class PuntoCuatro {
                public static void main(String[] args) {
                  String numbers[][] = new String[4][5];
                  
                  for (int i = 0; i < 20; i++) {
                    if (i < 5) {
                      numbers[0][i] = "0" + (i+1);
                      System.out.print(numbers[0][i] + " ");
                      if (i == 4) System.out.println(" ");
                    }
                    
                    if (i >= 5 && i < 10) {
                      numbers[1][4-(i-5)] = i != 9 ? "0" + (i + 1) : "10";
                      System.out.print(numbers[1][4-(i-5)] + " ");
                      if (i == 9) System.out.println(" ");
                    }
              
                    if (i >= 10 && i < 15) {
                      numbers[2][i-10] = ""+(i+1);
                      System.out.print(numbers[2][i-10] + " ");
                      if (i == 14) System.out.println(" ");  
                    }
              
                    if (i >= 15) {
                      numbers[3][4-(i-15)] = ""+(i + 1);
                      System.out.print(numbers[3][4-(i-15)] + " ");
                      if (i == 19) System.out.println(" ");
                    }
                  }
              
                  System.out.println("--------------");
              
                  for (int i = 0; i < 4; i++) {
                    for (int j = 0; j < 5; j++) {
                      System.out.print(numbers[i][j]+" ");
                    }
                    System.out.println("");
                  }
                }
              }
              
              `}
            </code>
          )
        },
        {
          exercise: 'Punto 5: ',
          title: (
            <span>
              Se debe de imprimir el siguiente cuadro: 
              <a 
                href="https://cdn.talentlms.com/sofkauniversity/1644205032_14.%20taller.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDQyMDUwMzJfMTQuJTIwdGFsbGVyLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODI3NTIwMH19fV19&Signature=hWF-cLxepPwN53WtOemYrIZeDT63Lpbkr0nNxuX%2F6RIEPo-mmzNCZdVQ-w3cxeklzThbQGLc9I6Pt1Q2ZVYVOSKSLcXSoB7bfy-5Q83mtYI5p1jS94T-3YrFGWlASVpPvGh2Ta13jDkaSlXswVJ9MsrmRmEw9tqKvhEwlvC-1i0OffHbTE3QPz0O8-fWATlK4qQZZaBuVqoObvOcexWVK48f-P7-wZiA2xA2ICZkUL7VtgQ8zmCGLtuX3lSK2VxgxdbKrcI%2FGMKwVbiJjN74GIpcMuUoNIqqJS09HhCSssp%2FWePJc3IhrdSAQVYJ5T4v0B4RxMTVOPmNMEF6LAVa9g__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"
                target="_blank"
                rel="noreferrer"
              >
                -Link
              </a>
              <br/>
              El usuario deberá insertar la fila y columna de la cual desea ver el resultado, el resultado de cada celda debe estar previamente calculado en una matriz bidimensional la cual cada resultado obedecerá a la fila y columna insertada por el usuario.
            </span>
            
          ),
          code: (
            <code>
              {`
              package Taller_4;

              import java.util.Scanner;
              
              public class PuntoCinco {
                public static int column;
                public static int row;
              
                public static void main(String[] args) {
                  Scanner input = new Scanner(System.in);
                  int numbers[][] = new int[10][10];
                   try {
                    System.out.println(" || 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 |");
                    for (int i = 0; i < 10; i++) {
                      System.out.print(i + "||");
                      for (int j = 0; j < 10; j++) {
                        numbers[i][j] = (j+1)*(i+1);
                        System.out.print((j < 9 ? "0"+ (j+1) : (j+1)) +"x"+(i+1) + " ");
                      }
                      System.out.println(" ");
                    }
                    
                    System.out.println("What result do you want to meet?");
                    System.out.println("Insert the row number: ");
                    row = input.nextInt();
                    System.out.println("Insert the column number: ");
                    column = input.nextInt();
                
                    System.out.println("Result: " + numbers[row][column]);
                   } catch (Exception e) {
                    input.close();
                  }
              
                }
              }
              `}
            </code>
          )
        },
      ],
    },
    youtubeLink: undefined
  },
  {
    path: 'Final-Java',
    source: {
      data:[
        {
          exercise: 'Final: ',
          title: 'Realizar una calculadora en Java a nivel de programa de consola, donde deberá cumplir con los siguientes ítems: 1 - La calculadora deberá soportar cualquier cantidad de números tanto positivos como negativos, incluyendo su parte decimal.' +
          ' 2 - Las operaciones que debe realizar dicha calculadora son: Sumar, Restar, Multiplicar, Dividir y Módulo de la división.' +
          ' 3 -Se debe validar el no poder dividir por cero ya que este tipo de operación no existe.' +
          ' 4 - El código debe estar documentado.',
          code: (
            <code>
              {`
    import java.util.Scanner;

    /*
      * This class contains a calculator, it can make operations like: addition, substracting, multiplying, division and division for module.
      * @autor: David E. Caro
      * @version: 23/07/22/A
      */
    public class CalculadorApp {
      public static boolean appState = true;
      public static int operation;
      public static double firstNum;
      public static double secondNum;
    
      // Index method, this is the calculadtor's core
      public static void main(String[] args) throws Exception {
        // This while keep the calculator on, inside of this we have a switch where the user can select an operation or turn off the app 
        while (appState) {
          firstMenu();
          switch (operation) {
            case 1: {
              addition();
              
              break;
            }
            case 2: {
              substracting();
    
              break;
            }
            case 3: {
              multiplying();
    
              break;
            }
            case 4: {
              division();
    
              break;
            }
            case 5: {
              divisionModule();
    
              break;
            }
            default:
              System.out.println("This option is not available");
    
              break;
          }
        }
      } 
    
      // This method contains the first menu, where the user can select the operation
      public static void firstMenu() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Operation: ");
          System.out.println("1.Addition");
          System.out.println("2.Substraction");
          System.out.println("3.Multiplying");
          System.out.println("4.Divide");
          System.out.println("5.Division module");
          operation = input.nextInt();
        } catch (Exception e) {
          input.close();
        }
      }
    
      // This method contains the addition operation
      public static void addition() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Addition");
          System.out.println("First number");
          firstNum = input.nextDouble();
          System.out.println("Second number");
          secondNum = input.nextDouble();
          
          System.out.println("Result: " + firstNum + " + " + secondNum+" = " + (firstNum+secondNum));
        } catch (Exception e) {
          input.close();
        }
      }
    
      // This method contains the substracting operation
      public static void substracting() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Substracting");
          System.out.println("First number");
          firstNum = input.nextDouble();
          System.out.println("Second number");
          secondNum = input.nextDouble();
          
          System.out.println("Result: " + firstNum + " - " + secondNum+" = " + (firstNum-secondNum));
        } catch (Exception e) {
          input.close();
        }
      }
    
      // This method contains the multiplying operation
      public static void multiplying() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Multiplying");
          System.out.println("First number");
          firstNum = input.nextDouble();
          System.out.println("Second number");
          secondNum = input.nextDouble();
          
          System.out.println("Result: " + firstNum + " x " + secondNum+" = " + (firstNum*secondNum));
        } catch (Exception e) {
          input.close();
        }
      }
    
      // This method contains the division operation
      public static void division() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Division");
          System.out.println("First number");
          firstNum = input.nextDouble();
          System.out.println("Second number");
          secondNum = input.nextDouble();
    
          if (secondNum > 0 ) {
          System.out.println("Result: " + firstNum + " / " + secondNum+" = " + (firstNum/secondNum));
          } else {
            System.out.println("Can't divide in 0");
          }
    
        } catch (Exception e) {
          input.close();
        }
      }
    
      // This method contains the module division operation
      public static void divisionModule() {
        Scanner input = new Scanner(System.in);
        try {
          System.out.println("Get the rest");
          System.out.println("First number");
          firstNum = input.nextDouble();
          System.out.println("Second number");
          secondNum = input.nextDouble();
          
          System.out.println("Result: " + firstNum + " % " + secondNum+" = rest: " + (firstNum%secondNum));
        } catch (Exception e) {
          input.close();
        }
      }
    }
              
              `}
            </code>
          )
        }
      ],
      youtubeLink: 'https://youtu.be/XGi2zvTilN8'
    }
  }
];
