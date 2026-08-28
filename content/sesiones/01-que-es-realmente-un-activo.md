---
id: "01"
semana: 1
dia: 1
tipo: teoria
titulo: "Qué es realmente un activo"
subtitulo: "De dónde sale el valor, y por qué una acción no es un número que sube"
duracion_min: 40
conceptos:
  - flujo de caja
  - derecho residual
  - apalancamiento operativo
  - mercado primario vs secundario
  - descubrimiento de precio
  - precio vs valor
  - acciones frente a bonos
glosario:
  - equity
  - cash flow
  - residual claim
  - operating leverage
  - financial leverage
  - IPO
  - secondary market
  - price discovery
  - buyback
  - multiple expansion
  - short selling
  - float
  - covenant
---

# Qué es realmente un activo

## El problema de empezar por el gráfico

Casi todo el mundo que invierte llega al mercado por el gráfico. Es lo primero
que ves, lo único gratis, y tiene una propiedad hipnótica: parece que se explica
solo. Una línea que sube y una línea que baja. A partir de ahí construyes un
modelo mental completo del mercado sin darte cuenta de que lo has construido: el
precio es la cosa, el precio se mueve, y tu trabajo es adivinar hacia dónde.

Ese modelo funciona sorprendentemente bien durante bastante tiempo. Te permite
operar, ganar dinero, desarrollar intuición sobre el comportamiento del precio,
reconocer estructuras que se repiten. No es un modelo estúpido: es un modelo
**incompleto**, y la diferencia importa porque los modelos incompletos fallan de
forma silenciosa. No te avisan. Simplemente hay una clase de preguntas que no
puedes responder, y como no puedes responderlas, dejas de hacértelas.

Estas son algunas de ellas:

- ¿Por qué una empresa que gana más dinero que el año pasado cae un 20% el día
  que lo anuncia?
- ¿Por qué una subida de tipos de un 0,25% mueve un índice entero, si ninguna
  de esas empresas tiene deuda a tipo variable?
- ¿Por qué dos empresas con exactamente los mismos beneficios cotizan a precios
  que se diferencian en cinco veces?
- ¿Por qué una opción pierde valor aunque el precio de la acción no se mueva?
- ¿Por qué una empresa recompra sus propias acciones en lugar de repartir un
  dividendo, si es lo mismo?

Todas tienen la misma respuesta subyacente, y no está en el gráfico. Está en
entender qué es exactamente la cosa que estás comprando. Esta sesión trata de
eso, y es deliberadamente la primera del curso porque todo lo demás —el
descuento de flujos, las griegas, la curva de tipos, la anatomía de una
burbuja— es una consecuencia de esto.

Aviso: no es una sesión "básica". Es una sesión **fundacional**, que es otra
cosa. Lo básico se olvida sin coste. Lo fundacional, si lo tienes torcido, te
tuerce todo lo que construyas encima durante veinte años sin que llegues a
notarlo.

---

## Ámsterdam, 1602: el día que se inventó la acción

Antes de definir nada, conviene ver el problema que la acción vino a resolver,
porque la definición sale sola del problema. Y porque la historia de este
invento explica su anatomía mejor que cualquier definición de manual.

### El problema: financiar algo que tarda tres años

A finales del siglo XVI, el comercio de especias con Asia era el negocio más
rentable del mundo conocido y también el más brutal. Un viaje a las Indias
Orientales duraba entre dos y tres años. La ruta bordeaba África por el Cabo de
Buena Esperanza, cruzaba el Índico y volvía por el mismo sitio. De cada flota
que salía, una parte no volvía: naufragios, escorbuto, piratería, guerra abierta
con portugueses y españoles que consideraban esas rutas suyas. La mortalidad de
las tripulaciones en algunos viajes superó el cincuenta por ciento.

Y sin embargo, la carga de un solo barco que sí volviera podía multiplicar por
diez lo invertido. La pimienta, la nuez moscada y el clavo valían en Europa
cientos de veces lo que costaban en origen, y no había sustituto: no existía
refrigeración, y las especias eran a la vez conservante, medicina y símbolo de
estatus.

El problema no era la rentabilidad. Era la **estructura**. Un viaje se financiaba
como una aventura individual —una *commenda*, la forma que llevaba usándose
desde la Edad Media—: un grupo de comerciantes ponía dinero para *ese* viaje
concreto, y cuando el barco volvía se vendía la carga en subasta, se repartía el
resultado entre los aportantes, y la sociedad se disolvía. Cada viaje, un
contrato. Cada contrato, un todo o nada de tres años sobre un solo casco.

Eso tenía dos consecuencias venenosas.

**La primera:** nadie podía diversificar de verdad. Tu dinero no estaba en el
negocio de las especias, estaba en un barco. Si ese barco se hundía, no perdías
un porcentaje: perdías todo. Y como perder todo es inaceptable, los comerciantes
ponían poco, lo que limitaba el tamaño de cada expedición.

**La segunda, y más grave:** nadie podía construir nada permanente. Si la
sociedad se disuelve al final del viaje, ¿quién paga un fuerte en Java? ¿Quién
mantiene una flota entre expediciones? ¿Quién firma un acuerdo a diez años con
un sultán de las Molucas? La estructura financiera **impedía la estrategia**. Se
podía comerciar, pero no se podía establecer.

### La solución: dos ideas encadenadas

El 20 de marzo de 1602, los Estados Generales de los Países Bajos forzaron la
fusión de las compañías rivales que se estaban destrozando entre ellas —competían
subiendo el precio en origen y bajándolo en destino, arruinándose mutuamente— y
crearon la **Vereenigde Oostindische Compagnie**, la VOC. La carta fundacional
le concedía el monopolio del comercio al este del Cabo durante veintiún años,
junto con poderes que hoy resultan difíciles de creer: podía declarar la guerra,
firmar tratados en nombre de la República, acuñar moneda y administrar justicia
en los territorios que controlase. Era medio empresa y medio Estado.

Pero la innovación que nos importa no es geopolítica, es financiera.

**Primera idea: capital permanente.** El dinero que aportabas no se te devolvía
al final de un viaje. Se quedaba dentro de la compañía, financiando barcos,
almacenes, fortalezas y guarniciones de forma continua. La VOC recaudó unos 6,4
millones de florines de más de mil suscriptores solo en la cámara de Ámsterdam,
y —esto es lo notable— muchos no eran grandes comerciantes. Había sastres,
viudas, un criado del propio edificio. La suscripción estuvo abierta durante
semanas a cualquiera con dinero para poner. Es, literalmente, la primera
colocación pública de acciones de la historia: la primera **IPO**.

**Segunda idea, y es la que lo cambia todo: si no puedes recuperar tu dinero de
la compañía, tienes que poder vendérselo a otro.** La carta permitía transferir
la participación a un tercero registrándolo en los libros. Y en cuanto eso fue
posible, ocurrió algo que nadie había planificado: la gente empezó a comprar y
vender esas participaciones entre sí. Constantemente. En la plaza, en el puente
sobre el Damrak, y a partir de 1611 en un edificio construido a propósito para
ello. Había nacido el **mercado secundario**.

```clave
La liquidez del secundario abarata el capital del primario
Fíjate en la secuencia, porque es exactamente la misma hoy: **(1)** una empresa necesita capital para algo que tarda años; **(2)** vende participaciones permanentes; **(3)** como el capital es permanente, el inversor necesita una salida; **(4)** la salida es venderle a otro inversor; **(5)** y precisamente porque esa salida existe, más gente está dispuesta a entrar en el primario.

El punto 5 es la razón profunda de que exista una bolsa. No es un casino que se le pegó al capitalismo como un parásito: es la pieza que hace viable financiar cosas que tardan décadas en dar fruto. Sin secundario, el inversor exige mucho más para quedarse atrapado, y ese "mucho más" es coste de capital que la empresa no puede pagar.
```

### Todo lo demás apareció inmediatamente

Lo fascinante de la VOC no es solo que inventara la acción. Es que en menos de
una década aparecieron ya **todas** las patologías del mercado moderno.

```anecdota
El primer bajista de la historia duró siete años
En 1609, un antiguo directivo de la VOC llamado Isaac Le Maire, expulsado de la compañía tras una disputa, montó un sindicato secreto con otros nueve comerciantes. El plan: vender acciones de la VOC que no poseían, comprometiéndose a entregarlas más adelante, mientras difundían rumores sobre pérdidas de barcos y desastres en Asia. Cuando el precio cayera, comprarían barato y cumplirían la entrega embolsándose la diferencia.

Es la primera operación documentada de **short selling**, y a la vez la primera manipulación coordinada de un precio. La compañía se quejó a las autoridades, y en 1610 llegó la respuesta: la primera regulación de la historia prohibiendo la venta en descubierto, con el pintoresco nombre de prohibición del *windhandel*, el "comercio de viento" —vender lo que no existe—.

La prohibición fue, como casi todas las que vinieron después, bastante ineficaz. Han pasado más de cuatro siglos y el debate sobre si los bajistas son manipuladores o detectores de fraude sigue exactamente igual de abierto: se reabrió en 2008, y otra vez en 2021 con GameStop.
```

Y no solo la mecánica: también la psicología.

```anecdota
El primer libro sobre bolsa se escribió en español
En 1688, un comerciante sefardí de Ámsterdam llamado Joseph de la Vega publicó *Confusión de confusiones*, el primer tratado conocido sobre el funcionamiento de una bolsa. Lo escribió en español, en forma de diálogo entre un filósofo, un mercader y un accionista.

Describe operadores que compran por rumores, que se convencen entre ellos, que actúan en manada, que confunden su deseo con su análisis, que se arruinan por no poder soportar una pérdida pequeña. Cualquiera que haya vivido un ciclo completo de mercado reconoce el libro entero, línea por línea.

Y esto no es una anécdota simpática: es un dato duro sobre la naturaleza del problema. La psicología del mercado no ha cambiado en más de tres siglos porque el mercado no está hecho de tecnología, está hecho de personas decidiendo bajo incertidumbre. La tecnología solo cambia la velocidad a la que se cometen los mismos errores.
```

Un último detalle antes de pasar a la teoría, porque fija el concepto mejor que
ninguna definición: en sus primeros años la VOC pagó dividendos **en especias**.
Te llegaba tu parte en clavo o en macis y te apañabas para venderlo en el
mercado. Suena pintoresco, pero es la ilustración más limpia posible de lo que
es un dividendo. No es un regalo del mercado, ni un número que aparece en la app
del bróker. Es tu porción física de lo que el negocio produjo.

A lo largo de sus casi dos siglos de existencia, la VOC repartió dividendos que
según las estimaciones históricas promediaron alrededor del 18% anual sobre el
capital original. Fue, con diferencia, la empresa más valiosa que ha existido en
términos relativos. También acabó quebrando por corrupción y sobreendeudamiento
en 1799, lo cual es una lección aparte que veremos en la semana 3.

---

## Qué compras exactamente cuando compras una acción

Con la historia encima, la definición ya no suena abstracta.

```clave
La definición que sostiene todo el curso
Una acción (**equity**, *share*, *stock*) es un derecho de propiedad sobre el **flujo de caja residual** de un negocio, **a perpetuidad**.

Tres palabras cargadas: *flujo de caja* (no beneficio contable), *residual* (cobras el último) y *a perpetuidad* (no vence). Cada una explica un comportamiento del precio que probablemente ya has visto sin poder nombrarlo.
```

### "Flujo de caja"

No beneficio contable. No ingresos. **Caja**. El dinero que efectivamente entra
menos el que efectivamente sale.

La distinción parece pedante y no lo es. La contabilidad es una opinión razonada
sobre *cuándo* asignar cada cosa: cuándo reconocer una venta que se cobrará
dentro de nueve meses, cómo repartir el coste de una máquina que durará doce
años, qué parte de un gasto es inversión. Son juicios, hechos con reglas, pero
juicios. La caja es un hecho: o está en el banco o no está.

Un negocio puede declarar beneficios crecientes durante años mientras su caja se
deteriora. Ocurre constantemente, y no siempre por fraude: a veces es
simplemente una empresa que crece vendiendo a crédito a clientes que tardan en
pagar. Toda la semana 5 del curso se dedica a la distancia entre ambas cifras,
que es donde ocurren la mayoría de los fraudes y casi todas las sorpresas
desagradables.

De momento quédate con la idea: **el valor de un negocio es el dinero que ese
negocio podrá sacar de su caja y entregar a sus dueños durante el resto de su
existencia.** Todo lo demás —múltiplos, ratios, gráficos— son atajos para
estimar eso.

### "Residual"

Esta es la palabra clave y la que más gente entiende mal.

Un negocio genera ingresos. De ese dinero hay una cola de gente que cobra
**antes** que tú, y cada uno con un derecho más fuerte que el siguiente:

```grafico
tipo: barras
titulo: A dónde van 100 € de ingresos, y qué queda al final
etiquetas: Ingresos, Proveedores / y empleados, Intereses / de la deuda, Impuestos, Accionista / (el residuo)
valores: 100, -72, -8, -12, 8
formato: eur
resaltar: 4
nota: Cada barra negativa es un cobro con prioridad sobre la tuya. El accionista se queda con lo que sobra. Si los ingresos bajan a 92, el residuo no baja a 7,4: se acerca a cero, porque la mayoría de los costes no se mueven.
```

El orden de prelación, de más fuerte a más débil:

1. **Proveedores.** Si no cobran, dejan de servirte y el negocio para.
2. **Empleados.** Tienen protección legal preferente en casi todas las
   jurisdicciones.
3. **Acreedores.** Tienen un contrato: intereses en fechas fijas, con
   consecuencias legales si no se pagan. Sus **covenants** —cláusulas del
   préstamo— pueden incluso permitirles tomar el control de la empresa.
4. **Hacienda.**
5. **Accionistas preferentes**, si los hay: un híbrido entre deuda y acción, con
   dividendo prioritario pero sin voto.
6. **Tú**, el accionista ordinario.

Eres el último de la fila. Cobras lo que sobra. Eso es un **residual claim**. No
tienes derecho contractual a nada: no puedes reclamar un dividendo, no puedes
exigir que te devuelvan tu capital, y si la empresa quiebra eres el último en el
reparto de los restos, lo que en la práctica significa cero con muchísima
frecuencia.

A cambio de estar el último, tienes lo único que los demás no tienen: **el resto
no tiene límite superior**.

El banco que le prestó dinero a Amazon en 1998 cobró sus intereses y su
principal, ni un céntimo más, por muy bien que le fuera a la empresa después. El
accionista se quedó con todo lo que vino a continuación. Esa asimetría —abajo
limitado a cero, arriba ilimitado— es el trato entero de la renta variable, y no
es un eslogan motivacional: es una estructura contractual concreta que puedes
leer en los estatutos de cualquier sociedad.

### "A perpetuidad"

Un bono vence. Un préstamo vence. Una acción no. No tiene fecha de vencimiento,
lo que significa que su valor depende de flujos que se extienden indefinidamente
hacia el futuro.

Y como los flujos lejanos importan, el precio de una acción es extraordinariamente
sensible a dos cosas: **la tasa a la que descuentas el futuro** —sesión 02, y es
la respuesta a la pregunta de los tipos de interés— y **tu creencia sobre el
crecimiento a largo plazo**.

---

## Acciones y bonos: el mismo negocio, dos contratos

Aquí conviene detenerse, porque entender la acción por contraste con el bono
aclara más que cualquier otra explicación, y prepara la semana 7.

Imagina una empresa que necesita 100 millones. Puede conseguirlos de dos formas.

**Emitiendo deuda.** Alguien le presta 100 millones a cambio de un contrato:
cobrará un 6% anual durante diez años y le devolverán el principal al final. Ese
contrato es exigible ante un tribunal. Si la empresa no paga, hay consecuencias
legales inmediatas y los acreedores pueden forzar la liquidación.

**Emitiendo acciones.** Alguien pone 100 millones a cambio de una parte de la
propiedad. No hay promesa de nada. Si el negocio va bien, participa
proporcionalmente en lo que sobre. Si va mal, no cobra. Si quiebra, pierde todo.

Ahora observa qué pasa con el mismo negocio en tres escenarios distintos:

```grafico
tipo: barras
titulo: Lo que cobra cada uno según cómo le vaya al negocio (millones)
etiquetas: Mal año / bonista, Mal año / accionista, Año normal / bonista, Año normal / accionista, Gran año / bonista, Gran año / accionista
valores: 6, 0, 6, 12, 6, 45
formato: 
nota: El bonista cobra 6 en los tres escenarios: su contrato no mejora aunque la empresa triunfe. El accionista cobra 0, 12 o 45. Misma empresa, mismo año, dos contratos radicalmente distintos sobre el mismo flujo.
```

El bonista tiene **certeza acotada**: cobra poco pero cobra siempre, salvo
quiebra. El accionista tiene **incertidumbre ilimitada**: puede no cobrar nada o
puede cobrar múltiplos de lo que cobra el bonista.

```clave
Renta fija y renta variable no son dos activos: son dos posiciones sobre el mismo activo
El negocio es uno. Genera un flujo. Lo que cambia es tu posición en la cola de reparto y la forma de tu contrato. Por eso los bonos de una empresa y sus acciones se mueven juntos cuando cambia la percepción sobre el negocio, y por eso los bonos basura se comportan mucho más como acciones que como bonos del Tesoro.

Cuando llegues a la semana 7 y a la valoración de la 6, esto te ahorrará la mitad del esfuerzo: valorar deuda y valorar equity es el mismo ejercicio con distinto orden de cobro.
```

---

## Por qué las acciones se mueven tanto: apalancamiento operativo

Ahora vamos a ver de dónde sale la volatilidad, con aritmética de servilleta.
Este ejemplo es probablemente lo más útil de toda la sesión.

Imagina una empresa muy simple:

| Concepto | Importe |
|---|---|
| Ingresos | 100 |
| Costes totales | 90 |
| **Beneficio para el accionista** | **10** |

Ahora los ingresos caen un 10%. Nada dramático: una recesión suave, un
competidor que muerde cuota, un mal año. Y los costes bajan solo hasta 88,
porque la mayoría son fijos: el alquiler de la nave sigue igual, la plantilla no
se despide en un trimestre, la amortización de las máquinas no depende de cuánto
vendas.

| Concepto | Importe |
|---|---|
| Ingresos | 90 |
| Costes totales | 88 |
| **Beneficio para el accionista** | **2** |

```grafico
tipo: barras
titulo: Un cambio del 10% arriba se convierte en un 80% abajo
etiquetas: Ingresos, Costes, Beneficio / del accionista
valores: -10, -2.2, -80
formato: %
resaltar: 2
nota: Nada extraordinario ha ocurrido en el negocio. Simplemente el accionista cobra un residuo, y un residuo es la resta de dos números grandes y parecidos. Cuando restas dos números grandes y parecidos, el resultado es pequeño e inestable.
```

Eso se llama **apalancamiento operativo** (*operating leverage*), y es la razón
estructural de que las acciones sean volátiles. No hace falta invocar pánico,
manada ni algoritmos: el instrumento es intrínsecamente amplificador porque
mide un residuo.

### Y ahora apila deuda encima

Supón que la empresa paga además 5 de intereses fijos:

| Escenario | Ingresos | Costes | Intereses | Al accionista |
|---|---|---|---|---|
| Normal | 100 | 90 | 5 | **5** |
| Ingresos −10% | 90 | 88 | 5 | **−3** |

Con la misma caída del 10% en ingresos, el accionista pasa de ganar a perder.
Eso es el **apalancamiento financiero** (*financial leverage*) apilado encima
del operativo. Dos capas de amplificación sobre el mismo residuo.

Esto explica, sin necesidad de más teoría, por qué en una recesión no caen todas
las empresas igual. Una aerolínea —costes fijos enormes, deuda alta, ingresos
cíclicos— tiene las dos palancas al máximo. Una empresa de software por
suscripción —costes en buena parte variables, sin deuda, ingresos recurrentes—
apenas tiene ninguna. La misma caída del PIB produce resultados radicalmente
distintos, y no porque una esté mejor gestionada.

```clave
"Estás mirando un residuo, y los residuos amplifican"
Guárdate esta frase, porque va a reaparecer disfrazada tres veces más en el curso:

**Sesión 28** — por qué el ROIC importa más que el crecimiento.
**Semana 4** — por qué una opción se mueve muchísimo más, en porcentaje, que la acción sobre la que está escrita. Una opción es un residuo respecto al strike.
**Semana 7** — por qué los sectores cíclicos se desploman antes en una recesión.

En los tres casos es la misma matemática de hoy. Si la entiendes bien ahora, las tres serán reconocimiento en lugar de aprendizaje.
```

---

## Las tres únicas fuentes de rentabilidad

Si posees una acción durante un periodo y ganas dinero, ese dinero solo puede
haber venido de tres sitios. No hay un cuarto. Esta descomposición se la debemos
sobre todo a John Bogle, que la usaba para separar lo que llamaba retorno de
inversión y retorno especulativo.

**1. La caja que la empresa te devuelve.** Dividendos y recompras de acciones
(**buybacks**).

Una recompra es funcionalmente un dividendo. La empresa usa caja para comprar
sus propias acciones en el mercado y amortizarlas; al haber menos acciones, tu
porcentaje de propiedad sube sin que hagas nada. Distinta fiscalidad, distinta
señal al mercado, misma mecánica económica: caja que sale de la empresa hacia
los dueños. Esa es la respuesta a una de las preguntas del principio.

**2. El crecimiento del negocio.** La empresa gana más este año que el anterior.
Tu residuo es mayor.

**3. El cambio en el múltiplo.** El mercado decide pagar más —o menos— por cada
euro de beneficio. Ayer pagaba 15 veces, hoy paga 25. Nada ha cambiado en el
negocio; ha cambiado lo que otros están dispuestos a pagar por él. Es la
**expansión de múltiplo** (*multiple expansion*).

Y aquí llega la distinción que separa a un inversor de un especulador, sin
ninguna carga moral en los términos:

```clave
Dos de las tres fuentes crean riqueza. La tercera te la transfiere otro
Las fuentes **1** y **2** son dinero creado por el negocio: alguien vendió especias, fabricó chips, prestó un servicio. Es riqueza nueva.

La fuente **3** es un cambio de opinión colectiva y, a nivel agregado, **es de suma cero**: para que tú vendas caro, alguien tiene que comprar caro.

Esto no la hace ilegítima. La hace **prestada**. Y lo prestado se devuelve.
```

### Por qué el múltiplo no puede sostener el retorno a largo plazo

Hay una razón aritmética, y es sencilla. Un PER de 15 puede irse a 30, y de 30 a
60. Pero no a 6.000. Los múltiplos están acotados: son estacionarios, revierten.
Los beneficios no tienen ese techo y pueden componer durante décadas.

Mira qué pasa cuando descompones el retorno del mercado americano según el
horizonte que mires:

```grafico
tipo: barras
titulo: De dónde vino el retorno del mercado americano en el siglo XX (anualizado)
etiquetas: Dividendos, Crecimiento / de beneficios, Cambio de / múltiplo
valores: 4.5, 4.5, 0.5
formato: %
nota: Cifras del orden de magnitud, según la descomposición de Bogle para el conjunto del siglo. A cien años vista, el múltiplo aporta poco más que ruido. Pero en un año concreto puede explicar prácticamente todo el movimiento del índice.
```

Esa es la traducción técnica de la frase de Graham que todo el mundo cita y casi
nadie traduce bien:

> A corto plazo el mercado es una máquina de votar; a largo plazo es una máquina
> de pesar.

No significa "a corto es irracional y a largo racional", que es la lectura
popular y floja. Significa algo mucho más preciso y comprobable: **a horizontes
cortos, la mayor parte de la variación del precio la explica el cambio de
múltiplo; a horizontes largos, la explican los beneficios y la caja devuelta.**

```grafico
tipo: lineas
titulo: Cuánto del movimiento del precio explica cada componente según el horizonte
x: 1 año, 3 años, 5 años, 10 años, 20 años, 50 años
serie: Múltiplo | 80, 60, 45, 25, 12, 5
serie: Negocio | 20, 40, 55, 75, 88, 95
formato: %
etiqueta_x: horizonte de la inversión
nota: Ilustración conceptual del efecto, no una medición precisa. La forma de las curvas —una que decae y otra que domina— es lo robusto y lo que importa retener.
```

Y de aquí sale una consecuencia práctica que probablemente ya intuías de forma
empírica sin poder formularla:

```clave
El análisis técnico y el fundamental no compiten por el mismo trabajo
Uno opera sobre el componente **3** —qué está dispuesta a pagar la gente— y el otro sobre los componentes **1 y 2** —qué produce el negocio—. Discutir cuál es "mejor" es discutir si un martillo es mejor que una sierra.

Lo que sí es un error caro es **usar el marco de uno para justificar una decisión que pertenece al otro**: comprar por gráfico y luego aguantar por fundamentales cuando va en contra. Eso es cambiar de tesis a mitad de operación, y es uno de los mecanismos de destrucción de capital más frecuentes que existen. Volveremos sobre ello en la sesión 49 con datos.
```

```anecdota
El hombre que renunció a batir al mercado, y ganó
John Bogle fundó Vanguard en 1974 y lanzó en 1976 el primer fondo indexado accesible al inversor particular. La idea era casi insultante en su simplicidad: si el retorno del mercado son dividendos más crecimiento más ruido de múltiplo, y nadie predice el ruido de forma fiable, deja de intentarlo y quédate con los dos primeros al menor coste posible.

La industria lo ridiculizó. Lo llamaron "la locura de Bogle" y un competidor lo tachó de antiamericano: renunciar a la excelencia, decían. El fondo recaudó 11 millones de dólares en su salida, cuando esperaban 150.

Hoy la indexación mueve billones y ha cambiado la estructura misma del mercado, hasta el punto de que dedicaremos parte de la sesión 06 a las consecuencias de que una porción enorme del capital compre sin mirar el precio. Bogle vivió lo suficiente para verlo, y pasó sus últimos años advirtiendo de que su propia creación se estaba haciendo demasiado grande.
```

---

## Qué hace la empresa con lo que sobra

Hemos dicho que el accionista cobra el residuo. Pero ese residuo no llega
automáticamente a tu cuenta: primero pasa por las manos de un consejo de
administración que decide qué hacer con él. Esa decisión se llama **asignación
de capital**, y es probablemente la más importante que toma una empresa.

Hay cuatro destinos posibles para cada euro de caja sobrante:

**Reinvertirlo en el negocio.** Abrir fábricas, contratar, desarrollar producto.
Tiene sentido si esa reinversión rinde más que la alternativa. Si rinde menos, la
empresa está destruyendo valor aunque crezca —y este punto es tan importante que
tiene una sesión entera, la 28—.

**Comprar otras empresas.** Estadísticamente, la mayoría de las adquisiciones
destruyen valor para el comprador. No siempre, pero la tasa base es mala y
conviene tenerla presente cuando una directiva anuncia una compra con
entusiasmo.

**Pagar dividendos.** Reparto directo. Predecible, y castigado fiscalmente en la
mayoría de jurisdicciones porque tributa al recibirlo.

**Recomprar acciones.** Compra sus propios títulos y los amortiza; tu porcentaje
sube sin que hagas nada y sin evento fiscal hasta que vendas.

```clave
Crecer no es lo mismo que crear valor
Una empresa que reinvierte todo su beneficio en proyectos que rinden menos que su coste de capital **crece y empobrece a sus dueños al mismo tiempo**. Los ingresos suben, los titulares son buenos, y cada euro reinvertido vale menos de un euro.

Al revés también: una empresa que no crece nada pero devuelve toda su caja puede ser una excelente inversión.

La pregunta correcta nunca es "¿cuánto crece?". Es **"¿qué rinde el capital que emplea, comparado con lo que le cuesta?"**. Esa pregunta se responde con números en la sesión 28, y es la que separa el análisis fundamental serio del que solo mira si las ventas suben.
```

Y aquí hay un matiz que casi nadie explica sobre las recompras. Dije antes que
son económicamente equivalentes a un dividendo, y lo son **si se hacen a un
precio razonable**. Comprar acciones propias caras destruye valor para los
accionistas que se quedan, exactamente igual que lo destruiría comprar caras las
acciones de otra empresa.

Y el problema es que hay un incentivo perverso: las empresas tienen más caja
disponible justo cuando el ciclo va bien, que es justo cuando sus acciones están
caras. El patrón agregado histórico muestra que las recompras alcanzan máximos
cerca de los techos de mercado y se desploman en los suelos, que es exactamente
lo contrario de lo que haría un comprador inteligente.

---

## Quién manda: la otra mitad de lo que compras

Una acción no es solo un derecho económico. Es también un derecho **político**:
normalmente un voto por acción en la junta general.

En la práctica, para un inversor particular ese voto no vale nada por sí solo.
Pero el conjunto sí importa, y hay tres situaciones donde determina el resultado
de tu inversión:

**Cuando alguien quiere comprar la empresa entera.** Si la cotización cae muy por
debajo de lo que vale el negocio, aparece un comprador que se lleva la compañía
completa. Ese suelo —la posibilidad de una opa— es una de las razones de que el
precio no pueda alejarse indefinidamente del valor.

**Cuando el control está blindado.** Muchas empresas tienen estructuras de doble
clase: los fundadores conservan acciones con diez votos mientras el público
compra acciones con uno. Compras la economía sin la política. Eso no es
necesariamente malo —permite gestionar a largo plazo sin presión trimestral—
pero significa que si la dirección lo hace mal, no puedes hacer nada al respecto.

**Cuando hay un accionista de control.** Si una familia o un Estado tiene la
mayoría, tus intereses y los suyos pueden divergir, y en esa divergencia tú
pierdes siempre.

```clave
Comprobar quién controla la empresa es parte del análisis, no un detalle legal
Dos empresas con las mismas cuentas pueden ser inversiones muy distintas según quién decida qué se hace con el residuo. Si la dirección puede desviar valor hacia sí misma o hacia un accionista de control, tu derecho residual vale menos de lo que dicen los números.

Este es el llamado **problema de agencia**, y es una de las razones por las que empresas con buenas cuentas cotizan permanentemente baratas. A veces el descuento está justificado.
```

---

## Lo que es un activo y lo que no

Buffett, en su carta a los accionistas de 2011, hizo una clasificación que sigue
siendo la más limpia que existe. Divide todo lo invertible en tres cajones, y lo
importante no es la etiqueta sino que **cada cajón exige una herramienta de
valoración distinta**.

**Cajón 1: activos denominados en una moneda.** Depósitos, letras del Tesoro,
bonos, dinero en cuenta. Su rendimiento es contractual. La gente los llama
"seguros", y lo son frente al impago, pero su riesgo real es la inflación: con
tipos reales negativos garantizan una pérdida lenta y silenciosa de poder
adquisitivo. Volveremos a esto mañana.

**Cajón 2: activos que no producen nada.** Oro, arte, coleccionables, materias
primas almacenadas. Nunca generarán un flujo. Compras esperando que otra persona
pague más adelante. Su valoración no es un cálculo: es una estimación sobre la
psicología y la demanda futuras de otras personas.

**Cajón 3: activos productivos.** Empresas, inmuebles en alquiler, tierra de
cultivo. Producen algo que la gente quiere, generan flujo, y ese flujo puede
crecer con la inflación.

### El puente con lo que ya dominas

Aquí conecto con terreno que conoces bien: **bitcoin vive en el cajón 2**.

Esto no es un juicio de valor sobre bitcoin, y desde luego no es una
recomendación en ninguna dirección. Es una afirmación técnica sobre qué
herramientas sirven para valorarlo. No tiene flujo de caja, luego no admite
descuento de flujos, luego cualquier valoración se apoya necesariamente en
modelos de adopción, de escasez o de flujo de fondos —que es exactamente lo que
hacen los marcos on-chain—.

```clave
El error caro no es tener un activo del cajón 2. Es aplicarle un marco del cajón 3
Si valoras algo sin flujo usando herramientas de descuento, obtienes un número. Ese número **no es un valor intrínseco**: es tu creencia sobre el comportamiento futuro de otras personas, escrita en notación financiera para que parezca un cálculo.

Y funciona igual en la otra dirección: comprar una acción solo porque sube y hay gente entrando es aplicarle un marco de cajón 2 a un activo del cajón 3. Puede salir bien. Pero entonces sabes que tu retorno depende del componente prestado, y eso cambia por completo cuánto puedes arriesgar y cuánto tiempo puedes aguantar.
```

Un caso intermedio que genera mucha confusión: **la vivienda en la que vives**.
Produce un flujo real —el alquiler que no pagas— pero ese flujo no pasa por
ninguna cuenta bancaria, así que no lo ves. Es cajón 3 con el flujo invisible, y
por eso la gente lo contabiliza mentalmente como si fuera cajón 2, mirando solo
si el precio sube.

```anecdota
Todo el oro del mundo en un cubo
Buffett ilustró el cajón 2 con una imagen que se ha hecho famosa: si juntaras todo el oro extraído en la historia, formarías un cubo de unos 21 metros de lado. Ese cubo, decía, valía por entonces aproximadamente lo mismo que toda la tierra de cultivo de Estados Unidos más dieciséis compañías del tamaño de Exxon Mobil, y aún sobraría un billón de dólares para gastos.

Su pregunta era: dentro de un siglo, la tierra habrá producido cosechas todos los años y las compañías habrán repartido dividendos todos los años. El cubo seguirá siendo un cubo, exactamente del mismo tamaño, sin haber producido nada.

Es un argumento potente y conviene señalar su límite, porque el propio Buffett se ha equivocado con activos que no entendía: el argumento demuestra que el oro no genera flujo, no que sea mala inversión en un periodo concreto. Entre 2000 y 2011 el oro batió ampliamente al S&P 500. Que una herramienta de valoración no aplique no significa que el precio no vaya a subir.
```

---

## El recorrido completo: de una idea a una acción cotizada

Merece la pena ver el ciclo entero, porque explica quién gana dinero en cada
tramo y por qué cuando tú llegas ya han pasado muchas cosas.

**Fase 1: fundadores.** Alguien tiene una idea y pone su dinero y su tiempo. Sus
acciones no valen nada porque no hay nada. El riesgo es total.

**Fase 2: capital privado.** Inversores especializados —*business angels*,
capital riesgo— compran participaciones en rondas sucesivas. Cada ronda pone
precio a la empresa y **diluye** a los anteriores: si tenías el 10% de una
empresa y esta emite acciones nuevas, tu porcentaje baja aunque el valor de tu
participación pueda subir. La mayoría de estas empresas fracasan; el modelo del
capital riesgo asume que una de cada diez paga todas las demás.

**Fase 3: salida a bolsa.** La empresa ya es grande y necesita más capital, o
—más frecuentemente— los inversores anteriores necesitan una salida. Se hace una
IPO: se emiten acciones nuevas y/o se venden las existentes, y por primera vez el
público general puede comprar.

**Fase 4: mercado secundario.** A partir de aquí, la acción cambia de manos
indefinidamente entre inversores. Aquí es donde estás tú.

```clave
Cuando llegas a la fase 4, el riesgo más rentable ya lo asumió otro
Las mayores multiplicaciones de capital ocurren en las fases 1 y 2, cuando la empresa vale poco porque casi seguro fracasará. Para cuando sale a bolsa, ese tramo del riesgo —y de la rentabilidad— ya se lo han quedado otros.

Esto no significa que la bolsa sea mal negocio: significa que su rentabilidad histórica de largo plazo, del orden de un dígito alto anual, es exactamente lo que corresponde al riesgo que asumes en la fase 4. Quien espera retornos de capital riesgo comprando acciones cotizadas está esperando el pago de un riesgo que no está tomando.
```

Y hay un detalle sobre las IPO que conviene tener presente. Quien decide **cuándo**
sale una empresa a bolsa es quien está dentro, y elige el momento que le
conviene: mercados receptivos, valoraciones altas, entusiasmo por el sector. El
comprador de una IPO está, por construcción, en el lado peor informado de una
operación cuyo calendario ha elegido la otra parte.

Esto no convierte toda IPO en mala inversión —hay excepciones célebres— pero
explica por qué, en agregado y a varios años vista, las salidas a bolsa han
tendido a comportarse peor que el mercado. Es una tasa base que conviene conocer
antes de emocionarse con la siguiente.

```anecdota
La empresa que salió a bolsa dos veces y perdió el 99%
En 1999, en plena fiebre puntocom, la empresa de telecomunicaciones Global Crossing llegó a valer más que General Motors. Tendía cable submarino de fibra óptica, un negocio real, con activos reales, en un sector con demanda creciente de verdad.

El problema no era que la tecnología fuera falsa: era que todo el sector estaba construyendo capacidad a la vez, financiándose con deuda, sobre la base de proyecciones de tráfico de internet que se repetían de informe en informe sin que nadie las verificara. Cuando la capacidad instalada superó ampliamente la demanda, los precios del ancho de banda se desplomaron y los flujos de caja que sostenían la deuda no aparecieron.

Global Crossing quebró en 2002, entonces una de las mayores bancarrotas de la historia de Estados Unidos. Los accionistas —últimos en la cola, como corresponde— recibieron esencialmente cero.

La lección que interesa hoy no es sobre burbujas, que llegan en la semana 3. Es esta: **la tecnología era real, la demanda era real, y el accionista perdió todo igualmente.** Tener razón sobre el futuro de un sector y perder todo el dinero invertido en él son perfectamente compatibles, porque entre la tesis y tu bolsillo está la estructura de capital.
```

---

## Para qué sirve el mercado (y qué no hace)

Cuatro funciones, y una trampa que conviene tener muy clara.

**Asignar capital.** En el mercado primario, el ahorro va a parar a proyectos.
Cuando una empresa hace una IPO o una ampliación, recibe dinero de verdad para
hacer cosas de verdad.

**Dar liquidez.** El secundario te permite salir sin pedirle nada a la empresa.
Ya vimos que esta función es la que hace posible la primera. El **float** —la
parte de las acciones que realmente circula y se negocia— determina cuánta
liquidez hay: una empresa donde los fundadores retienen el 90% tiene un float
pequeño y su precio se mueve mucho más con menos dinero.

**Descubrir el precio** (**price discovery**). Miles de participantes con
información e incentivos distintos negocian, y el resultado agrega esas
opiniones en un número. Es un mecanismo de agregación de información
extraordinariamente eficaz. Y no infalible, que es todo el debate de la sesión
07.

**Transferir riesgo.** Quien no quiere un riesgo se lo pasa a quien sí lo
quiere, a cambio de un precio. Esta función es el corazón entero del mercado de
derivados y la razón de que existan las opciones. En la semana 4 la retomamos
literalmente donde la dejamos aquí.

### La trampa

```clave
Cuando compras acciones de Apple, Apple no recibe ni un céntimo
Se lo pagas a otro inversor que las tenía. El mercado secundario **no financia a las empresas**: financia la salida de los inversores anteriores.

La empresa solo recibe dinero en el primario: IPO, ampliación de capital, emisión de deuda. El resto del tiempo, la cotización es información —cara y valiosa— pero no es dinero que entre por la puerta.
```

Esto tiene consecuencias que quizá no habías conectado. ¿Por qué le importa
tanto la cotización a un consejo de administración si no le entra dinero?
Porque determina el coste de una futura ampliación, porque condiciona el precio
al que puede comprar otras empresas pagando con sus propias acciones, porque la
retribución de los directivos suele ir ligada a ella, y porque una cotización
hundida invita a que otro compre la compañía entera. Ninguna de esas razones es
"para financiarse hoy".

---

## Precio y valor no son la misma cosa

Cerramos con la distinción que sostiene los tres meses de curso.

- El **precio** es lo que se paga. Es un dato observable, público, exacto y
  actualizado al milisegundo.
- El **valor** es lo que se recibe. Es una estimación, privada, aproximada, y
  depende de supuestos sobre el futuro que pueden estar mal.

La asimetría es incómoda: **lo que puedes medir con precisión no es lo que
quieres saber, y lo que quieres saber no lo puedes medir con precisión.** Toda
la disciplina de la inversión consiste en operar con esa asimetría sin
engañarse.

De aquí salen las dos posturas que estructuran el debate entero:

- Si crees que precio y valor coinciden siempre, seleccionar activos no tiene
  sentido y lo racional es comprar el mercado entero al menor coste posible.
- Si crees que a veces divergen, tu trabajo consiste en estimar el valor y
  esperar a que el precio se equivoque.

¿Se equivoca el precio alguna vez de forma comprobable? Hay un caso histórico
que lo demuestra sin necesidad de discutir de valoración, porque compara un
activo consigo mismo.

```anecdota
La misma empresa cotizando a dos precios distintos durante décadas
Royal Dutch y Shell Transport se fusionaron en 1907 con un acuerdo peculiar: seguirían siendo dos sociedades cotizadas por separado, una en Ámsterdam y otra en Londres, pero todos los flujos del grupo se repartirían en una proporción fija de 60/40.

Eso significa que el valor de una acción de Royal Dutch tenía que ser exactamente 1,5 veces el de una de Shell. No es una opinión ni un modelo: es aritmética que se deriva del propio contrato de fusión. Cualquier desviación es, por definición, un error de precio.

Froot y Dabora documentaron en 1999 lo que ocurrió en la práctica: la relación se desvió de su valor teórico de forma persistente, llegando a superar el 35% en algunos periodos, durante **años**. No minutos. Años. Y no era un mercado oscuro: eran dos de las mayores empresas del mundo, en dos de las bolsas más líquidas del planeta, seguidas por todos los analistas.

Guarda este caso. Volverá en la sesión 07 cuando discutamos la eficiencia de mercado, y otra vez en la 12 cuando veamos cómo LTCM se arruinó apostando precisamente a que este tipo de desviaciones se cierran. Porque se cierran, sí. La pregunta cara es *cuándo*.
```

La evidencia empírica sobre cuál de las dos posturas es cierta —y la respuesta
no es "una u otra"— es la sesión 07. La sesión 02, mañana, es la herramienta que
necesitas antes: cómo se convierte un flujo futuro en un valor de hoy, y por qué
el tipo de interés es la variable que reprecia el planeta entero.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Equity** | Participación en la propiedad de un negocio. La acción es su unidad. |
| **Cash flow** | Dinero que entra menos dinero que sale. Un hecho, no una opinión contable. |
| **Residual claim** | Derecho a cobrar lo que sobra después de todos los demás. Lo que define a un accionista. |
| **Operating leverage** | Amplificación del beneficio ante cambios en ingresos, causada por los costes fijos. |
| **Financial leverage** | Segunda capa de amplificación, causada por los intereses fijos de la deuda. |
| **Covenant** | Cláusula de un contrato de deuda que impone condiciones a la empresa y protege al acreedor. |
| **IPO** | Primera venta pública de acciones. Mercado primario: el dinero va a la empresa. |
| **Secondary market** | Donde los inversores se compran y venden entre sí. El dinero no llega a la empresa. |
| **Float** | Porción de las acciones que realmente circula en el mercado. A menor float, más se mueve el precio. |
| **Price discovery** | Proceso por el que la negociación agrega información dispersa en un precio. |
| **Buyback** | Recompra de acciones propias. Equivalente económico de un dividendo. |
| **Multiple expansion** | Subida del precio por cambio en lo que el mercado paga por cada euro de beneficio. |
| **Short selling** | Vender lo que no tienes para recomprarlo más barato. Documentado por primera vez en 1609. |

---

## Fallos conocidos: dónde esto te va a engañar

Ninguna herramienta de este curso se enseña sin decir dónde se rompe. Estas son
las grietas de lo de hoy.

**1. "El valor es el descuento de flujos futuros" es correcto y casi inútil por
sí solo.** Es correcto como definición y prácticamente inaplicable como método,
porque exige predecir flujos a treinta años. La fórmula es sólida; los inputs
son basura. En la sesión 27 verás que mover dos supuestos razonables en un DCF
cambia el resultado más de un 60%. Quien te enseñe descuento de flujos sin
enseñarte esa fragilidad te está vendiendo falsa precisión.

**2. Muchas empresas reales no encajan limpiamente en el cajón 3.** Una
biotecnológica sin ingresos, una empresa prerrevenue, una minera en exploración:
no tienen flujo que descontar. Su valor es en realidad una **opción** sobre un
flujo futuro incierto, y aplicarles las herramientas de este curso hasta la
semana 6 dará resultados sin sentido. Requieren marcos de opciones reales, que
quedan fuera de estos tres meses. Es honesto saber dónde termina tu caja de
herramientas.

**3. La clasificación de Buffett es útil, no sagrada.** Está escrita por alguien
con un estilo concreto y un horizonte de décadas. Hay activos que la desafían: un
REIT tiene flujo pero cotiza a menudo como sentimiento; una materia prima
industrial no produce flujo pero tiene una demanda física real que ancla su
precio en el coste de producción. Úsala como mapa, no como ley.

**4. El apalancamiento operativo funciona igual de bien hacia arriba, y eso es
justo lo que te ciega en los buenos años.** El mismo mecanismo que convierte
−10% de ingresos en −80% de beneficio convierte +10% en +80%. En expansión, los
negocios más frágiles parecen los mejor gestionados y sus directivos parecen
genios. Distinguir margen sostenible de amplificación cíclica es de lo más
difícil del análisis fundamental, y hay carreras enteras construidas sobre haber
confundido las dos.

**5. La descomposición en tres fuentes es limpia ex-post y confusa ex-ante.**
Mirando hacia atrás sabes exactamente cuánto vino de cada componente. Mirando
hacia adelante, casi nadie puede decir cuánta parte de una subida es crecimiento
y cuánta es expansión de múltiplo, porque **ambas se sienten idénticamente bien
mientras ocurren**. Ese es literalmente el mecanismo de todas las burbujas de la
semana 3.

**6. La recompra no siempre equivale a un dividendo.** Dije que son
económicamente equivalentes y es cierto *si la empresa recompra a un precio
razonable*. Si recompra sus acciones caras —cosa que hacen sistemáticamente,
porque hay más caja disponible justo en la cima del ciclo— está destruyendo
valor para los accionistas que se quedan. La equivalencia es contable; la
calidad de la decisión no lo es. Sesión 28.

**7. Cuidado con la trampa retórica del "valor intrínseco".** Que exista un valor
real no implica que tú puedas calcularlo, ni que el mercado tenga que converger a
él en un plazo que puedas aguantar. Royal Dutch y Shell tardaron años en cerrar
una brecha que era aritméticamente indiscutible. Keynes lo dejó dicho con más
elegancia de la que voy a conseguir yo: el mercado puede permanecer irracional
más tiempo del que tú puedes permanecer solvente. Tener razón y quebrar en el
intento es un resultado perfectamente posible, y es exactamente lo que le pasó a
Long-Term Capital Management con dos premios Nobel en el consejo. Sesión 12.
