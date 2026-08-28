---
id: "01"
semana: 1
dia: 1
tipo: teoria
titulo: "Qué es realmente un activo"
subtitulo: "De dónde sale el valor, y por qué una acción no es un número que sube"
duracion_min: 50
conceptos:
  - flujo de caja
  - derecho residual
  - apalancamiento operativo
  - mercado primario vs secundario
  - descubrimiento de precio
  - precio vs valor
glosario:
  - equity
  - cash flow
  - residual claim
  - operating leverage
  - IPO
  - secondary market
  - price discovery
  - buyback
  - multiple expansion
  - short selling
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
reconocer estructuras. Lo que no te permite es responder a preguntas como estas:

- ¿Por qué una empresa que gana más dinero que el año pasado cae un 20% el día
  que lo anuncia?
- ¿Por qué una subida de tipos de un 0,25% mueve un índice entero, si ninguna
  de esas empresas tiene deuda a tipo variable?
- ¿Por qué dos empresas con los mismos beneficios cotizan a precios que se
  diferencian en cinco veces?
- ¿Por qué una opción pierde valor aunque el precio de la acción no se mueva?

Todas esas preguntas tienen la misma respuesta subyacente, y no está en el
gráfico. Está en entender qué es exactamente la cosa que estás comprando. Esta
sesión trata de eso, y es deliberadamente la primera del curso porque todo lo
demás —el descuento de flujos, las griegas, la curva de tipos, la valoración de
una burbuja— es una consecuencia de esto.

Aviso: no es una sesión "básica". Es una sesión fundacional, que es otra cosa.
Lo básico se olvida sin coste. Lo fundacional, si lo tienes torcido, te tuerce
todo lo que construyas encima durante veinte años.

---

## Ámsterdam, 1602: el día que se inventó la acción

Antes de definir nada, conviene ver el problema que la acción vino a resolver,
porque la definición sale sola del problema.

A finales del siglo XVI, el comercio de especias con Asia era el negocio más
rentable del mundo conocido y también el más brutal. Un viaje a las Indias
Orientales duraba entre dos y tres años. La ruta bordeaba África, cruzaba el
Índico y volvía. De cada flota que salía, una parte no volvía: naufragios,
enfermedad, piratería, guerra con portugueses y españoles. Y sin embargo, la
carga de un solo barco que sí volviera podía multiplicar por diez la inversión
inicial.

El problema no era la rentabilidad. Era la estructura. Un viaje se financiaba
como una aventura individual: un grupo de comerciantes ponía dinero para *ese*
viaje, y cuando el barco volvía (si volvía) se vendía la carga, se repartía el
resultado, y la sociedad se disolvía. Cada viaje, un contrato. Cada contrato, un
todo o nada de tres años sobre un solo casco.

Eso tenía dos consecuencias venenosas. La primera es que nadie podía
diversificar de verdad: tu dinero estaba en un barco, no en el negocio de las
especias. La segunda, más grave, es que nadie podía construir nada permanente:
si la sociedad se disuelve al final del viaje, no tiene sentido levantar un
fuerte en Java, ni mantener una flota, ni firmar acuerdos a diez años con un
sultán. La estructura financiera impedía la estrategia.

El 20 de marzo de 1602, los Estados Generales de los Países Bajos forzaron la
fusión de las compañías rivales que se estaban destrozando entre ellas y
crearon la **Vereenigde Oostindische Compagnie** (VOC), la Compañía Neerlandesa
de las Indias Orientales. La carta fundacional le concedía el monopolio del
comercio al este del Cabo de Buena Esperanza durante veintiún años, junto con
poderes que hoy nos parecen alucinantes: podía declarar la guerra, firmar
tratados, acuñar moneda y administrar justicia en los territorios que
controlase.

Pero la innovación que nos importa aquí no es geopolítica, es financiera, y son
dos ideas encadenadas.

**Primera idea: capital permanente.** El dinero que aportabas no se te devolvía
al final de un viaje. Se quedaba dentro de la compañía, financiando barcos,
almacenes, fortalezas y guarniciones de forma continua. La VOC recaudó unos 6,4
millones de florines de más de mil suscriptores solo en la cámara de Ámsterdam,
y —esto es lo importante— muchos de ellos no eran grandes comerciantes. Había
sastres, viudas, un criado. La suscripción estaba abierta a cualquiera con
dinero para poner. Es, literalmente, la primera colocación pública de acciones
de la historia: la primera **IPO**.

**Segunda idea, y es la que lo cambia todo: si no puedes recuperar tu dinero de
la compañía, tienes que poder vendérselo a otro.** La carta permitía transferir
la participación a un tercero registrándolo en los libros de la compañía. Y en
cuanto eso fue posible, ocurrió algo que nadie había planificado: la gente
empezó a comprar y vender esas participaciones entre sí, constantemente, en la
plaza, en los puentes, y a partir de 1611 en un edificio construido para ello.
Había nacido el **mercado secundario**.

Fíjate en la secuencia lógica, porque es exactamente la misma hoy:

1. Una empresa necesita capital a largo plazo para hacer algo que tarda años.
2. Para conseguirlo, vende participaciones permanentes (mercado primario).
3. Como el capital es permanente, el inversor necesita una salida.
4. La salida es vender a otro inversor (mercado secundario).
5. El mercado secundario, al existir, hace que más gente esté dispuesta a
   participar en el primario, porque sabe que no está atrapada.

Ese punto 5 es la razón profunda de que exista una bolsa. **La liquidez del
secundario abarata el capital del primario.** No es un casino que se le pegó al
capitalismo como un parásito; es la pieza que hace viable financiar cosas que
tardan décadas en dar fruto.

Y desde el primer minuto apareció todo lo demás. En 1609, un antiguo directivo
descontento llamado **Isaac Le Maire** montó un sindicato secreto para vender
acciones de la VOC que no tenía, con la intención de recomprarlas más baratas
después de difundir malas noticias sobre la compañía. Es la primera operación
documentada de **short selling**, y también la primera manipulación coordinada.
La respuesta llegó en 1610: la primera regulación de la historia prohibiendo la
venta en descubierto. Han pasado más de cuatro siglos y ese debate concreto
sigue exactamente igual de abierto.

En 1688, un comerciante sefardí de Ámsterdam llamado **Joseph de la Vega**
escribió *Confusión de confusiones*, el primer libro sobre el funcionamiento de
una bolsa, y lo escribió en español. Describe operadores que compran por rumores,
que se convencen entre ellos, que actúan en manada, que confunden su deseo con
su análisis. Cualquiera que haya vivido un ciclo completo de mercado reconoce el
libro entero. Esto es un dato importante y no una anécdota: la psicología del
mercado no ha cambiado en 340 años porque el mercado no está hecho de
tecnología, está hecho de personas decidiendo bajo incertidumbre. La tecnología
solo cambia la velocidad.

Un detalle final que ayuda a fijar el concepto: en sus primeros años la VOC pagó
dividendos **en especias**. Te llegaba tu parte en clavo o en macis y te
apañabas para venderlo. Suena pintoresco, pero es la ilustración más limpia
posible de lo que es un dividendo: no es un regalo del mercado ni un número que
aparece en la app del broker. Es tu porción de lo que el negocio produjo.

---

## Qué compras exactamente cuando compras una acción

Con la historia encima, la definición ya no suena abstracta.

> Una acción (**equity**, *share*, *stock*) es un derecho de propiedad sobre el
> **flujo de caja residual** de un negocio, a perpetuidad.

Hay tres palabras cargadas ahí. Vamos una a una, porque cada una explica un
comportamiento del precio que probablemente ya has visto sin poder nombrarlo.

### "Flujo de caja"

No beneficio contable. No ingresos. **Caja**. El dinero que efectivamente entra
menos el que efectivamente sale. La contabilidad es una opinión razonada sobre
cuándo asignar cada cosa; la caja es un hecho. Toda la semana 5 del curso se
dedica a la distancia entre ambos, que es donde ocurren la mayoría de los
fraudes y casi todas las sorpresas desagradables.

De momento quédate con la idea: el valor de un negocio es el dinero que ese
negocio va a poder sacar de la caja y entregar a sus dueños durante el resto de
su existencia. Todo lo demás —múltiplos, ratios, gráficos— son atajos para
estimar eso.

### "Residual"

Esta es la palabra clave y la que más gente entiende mal.

Un negocio genera ingresos. De ese dinero, hay una cola de gente que cobra
**antes** que tú, y cada uno con un derecho más fuerte:

1. Proveedores.
2. Empleados.
3. Acreedores (intereses de la deuda).
4. Hacienda.
5. Accionistas preferentes, si los hay.
6. **Tú.**

El accionista ordinario es el último de la fila. Cobra lo que sobra. Eso es lo
que significa **residual claim**. No tienes derecho contractual a nada: no
puedes reclamar un dividendo, no puedes exigir que te devuelvan tu capital, y si
la empresa quiebra eres el último en el reparto de los restos, que casi siempre
significa cero.

A cambio de estar el último, tienes lo único que los demás no tienen: **el
resto no tiene límite superior**. El banco que le prestó dinero a Amazon en 1998
cobró sus intereses y su principal, ni un céntimo más. El accionista se quedó
con todo lo que vino después.

Ese es el trato. No es "riesgo alto, rentabilidad alta" como eslogan vacío: es
una estructura contractual concreta que te pone el último en el cobro a cambio
de darte todo lo que sobre.

### "A perpetuidad"

Un bono vence. Un préstamo vence. Una acción no. No tiene fecha de vencimiento,
lo que significa que su valor depende de flujos que se extienden indefinidamente
hacia el futuro. Y como los flujos lejanos importan, el precio de una acción es
extraordinariamente sensible a dos cosas: **la tasa a la que descuentas el
futuro** (sesión 02) y **tu creencia sobre el crecimiento a largo plazo**.

Esta es la respuesta técnica a una de las preguntas del principio. Cuando la
Reserva Federal sube tipos y una empresa tecnológica sin deuda cae un 8%, no es
irracional ni es "el mercado que hace cosas raras". Es que el valor de esa
empresa está concentrado en flujos que llegan dentro de diez o quince años, y el
valor presente de un flujo lejano es brutalmente sensible al tipo de descuento.
Lo desarrollamos mañana con números.

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
competidor que muerde cuota, un mal año.

| Concepto | Importe |
|---|---|
| Ingresos | 90 |
| Costes totales | 88 (los fijos no se mueven) |
| **Beneficio para el accionista** | **2** |

Los ingresos han caído un 10%. El beneficio del accionista ha caído un **80%**.

No ha pasado nada extraordinario en el negocio. Lo único que ha ocurrido es que
el accionista cobra el residuo, y el residuo es una resta entre dos números
grandes. Cuando restas dos números grandes y parecidos, el resultado es un
número pequeño e inestable. Un cambio del 10% arriba se convierte en un cambio
del 80% abajo.

Eso se llama **apalancamiento operativo** (*operating leverage*), y es la razón
estructural de que las acciones sean volátiles. No hace falta invocar pánico,
manada ni algoritmos: el instrumento es intrínsecamente amplificador porque
mide un residuo.

Y ahora añade deuda. Supón que la empresa paga 5 de intereses fijos:

| Escenario | Ingresos | Costes | Intereses | Al accionista |
|---|---|---|---|---|
| Normal | 100 | 90 | 5 | **5** |
| Ingresos -10% | 90 | 88 | 5 | **-3** |

Con la misma caída del 10% en ingresos, el accionista pasa de ganar a perder.
Eso es el **apalancamiento financiero** apilado encima del operativo. Dos capas
de amplificación sobre el mismo residuo.

Guárdate esta idea porque va a reaparecer tres veces en el curso, disfrazada:
cuando veamos por qué los sectores cíclicos se desploman antes en una recesión
(semana 7), por qué el ROIC importa más que el crecimiento (sesión 28), y por
qué una opción se mueve mucho más que la acción subyacente (semana 4). En los
tres casos es la misma matemática: **estás mirando un residuo, y los residuos
amplifican.**

---

## Las tres únicas fuentes de rentabilidad

Si posees una acción durante un periodo y ganas dinero, ese dinero solo puede
haber venido de tres sitios. No hay un cuarto. Esta descomposición se la debemos
sobre todo a John Bogle, el fundador de Vanguard, que la usaba para separar lo
que él llamaba retorno de inversión y retorno especulativo.

**1. La caja que la empresa te devuelve.** Dividendos y recompras de acciones
(**buybacks**). Una recompra es funcionalmente un dividendo: la empresa usa caja
para comprar sus propias acciones y amortizarlas, con lo que tu porcentaje de
propiedad sube sin que hagas nada. Distinta fiscalidad, misma mecánica
económica.

**2. El crecimiento del negocio.** La empresa gana más este año que el anterior.
Tu residuo es mayor.

**3. El cambio en el múltiplo.** El mercado decide pagar más (o menos) por cada
euro de beneficio. Ayer pagaba 15 veces, hoy paga 25. Nada ha cambiado en el
negocio; ha cambiado lo que otros están dispuestos a pagar por él. Es la
**expansión de múltiplo** (*multiple expansion*).

Y aquí llega la distinción incómoda que separa a un inversor de un especulador,
sin ninguna carga moral en los términos:

> Las fuentes 1 y 2 son dinero creado por el negocio. La fuente 3 es dinero que
> te transfiere otro participante del mercado.

Las dos primeras son riqueza real: alguien vendió especias, fabricó chips,
prestó un servicio. La tercera es un cambio de opinión colectiva, y a nivel
agregado es de suma cero: para que tú vendas caro, alguien tiene que comprar
caro.

Esto no significa que la tercera sea ilegítima. Significa que es **prestada**.
El múltiplo no puede expandirse indefinidamente porque está acotado por la
aritmética: un PER de 15 puede irse a 30, y de 30 a 60, pero no a 6.000. Los
múltiplos son estacionarios en el largo plazo: revierten. Los beneficios no
tienen ese techo y pueden componer durante décadas.

De ahí sale la frase de Benjamin Graham que todo el mundo cita y casi nadie
traduce bien: *"a corto plazo el mercado es una máquina de votar; a largo plazo
es una máquina de pesar"*. La traducción técnica es exacta y poco poética: **a
horizontes cortos, la mayor parte de la variación del precio la explica el
cambio de múltiplo; a horizontes largos, la explican los beneficios y la caja
devuelta.**

Si miras el mercado americano a lo largo del siglo XX, el orden de magnitud es
más o menos este: en torno a un 4-5% anual de dividendos, otro 4-5% de
crecimiento de beneficios, y una contribución del cambio de múltiplo que a cien
años vista es casi ruido —del orden de medio punto. En un año concreto, en
cambio, el múltiplo puede explicar prácticamente todo el movimiento. Mismo
mercado, dos regímenes completamente distintos según el horizonte.

Y esto tiene una consecuencia práctica que probablemente ya intuías de forma
empírica: **el análisis técnico y el fundamental no compiten por el mismo
trabajo.** Uno opera sobre el componente 3 y el otro sobre los componentes 1 y
2. Discutir cuál es "mejor" es como discutir si un martillo es mejor que una
sierra. Lo que sí es un error caro es usar el marco de uno para justificar una
decisión que pertenece al otro: comprar por gráfico y aguantar por fundamentales
cuando va en contra. Eso es cambiar de tesis a mitad de operación, y volveremos
sobre ello en la sesión 49.

---

## Lo que es un activo y lo que no

Buffett, en su carta a los accionistas de 2011, hizo una clasificación que sigue
siendo la más limpia que existe. Divide todo lo invertible en tres cajones.

**Cajón 1: activos denominados en una moneda.** Depósitos, letras del Tesoro,
bonos, dinero en cuenta. Su rendimiento es contractual y su riesgo real no es
que te dejen de pagar, sino la inflación. Son los que la gente llama "seguros" y
los que garantizan una pérdida lenta de poder adquisitivo cuando el tipo real es
negativo.

**Cajón 2: activos que no producen nada.** Oro, arte, coleccionables, materias
primas guardadas. Nunca generarán un flujo. Compras esperando que otra persona
pague más adelante. Su valoración no es un cálculo, es una estimación sobre la
psicología futura de otras personas.

**Cajón 3: activos productivos.** Empresas, inmuebles en alquiler, tierra de
cultivo. Producen algo que la gente quiere, generan flujo, y ese flujo puede
crecer con la inflación.

Aquí hago un puente con terreno que ya dominas: **bitcoin vive en el cajón 2**.
Esto no es un juicio de valor sobre bitcoin, y desde luego no es una
recomendación en ninguna dirección. Es una afirmación sobre qué herramientas
sirven para valorarlo. No tiene flujo de caja, luego no admite descuento de
flujos, luego cualquier valoración se apoya en modelos de adopción, escasez o
flujo de fondos —que es exactamente lo que hacen los marcos on-chain—. El error
caro no es tener bitcoin: es aplicarle un marco de cajón 3 y creerte que has
calculado un valor intrínseco cuando lo que has hecho es formalizar una
expectativa sobre el comportamiento ajeno.

Y funciona igual en la otra dirección: aplicarle a una acción un marco de cajón
2 —comprarla solo porque sube y hay gente entrando— también es usar la
herramienta equivocada. Puede salir bien. Pero entonces sabes que tu retorno
depende del componente 3, el prestado, y eso cambia por completo cuánto puedes
arriesgar y cuánto tiempo puedes aguantar.

Un caso intermedio útil: **la vivienda en la que vives**. Produce un flujo real
—el alquiler que no pagas— pero no lo ves pasar por ninguna cuenta. Es cajón 3
con el flujo invisible, y por eso genera tanta confusión contable en las cabezas
de la gente.

---

## Para qué sirve el mercado (y qué no hace)

Cuatro funciones, y una trampa que conviene tener clara.

**Asignar capital.** En el mercado primario, el ahorro va a parar a proyectos.
Cuando una empresa hace una IPO o una ampliación, recibe dinero de verdad para
hacer cosas de verdad.

**Dar liquidez.** El secundario te permite salir sin pedirle nada a la empresa.
Ya vimos que esta es la función que hace posible la primera.

**Descubrir el precio** (**price discovery**). Miles de participantes con
información e incentivos distintos negocian, y el resultado es un precio que
agrega esas opiniones. Es un mecanismo de agregación de información
extraordinariamente eficaz —y no infalible, que es todo el debate de la sesión
07.

**Transferir riesgo.** El que no quiere un riesgo se lo pasa al que sí lo
quiere, a cambio de un precio. Esta función es el corazón entero del mercado de
derivados y la razón de que existan las opciones. En la semana 4 la retomamos
literalmente donde la dejamos aquí.

Y la trampa, que mucha gente con años de experiencia sigue teniendo borrosa:

> **Cuando compras acciones de Apple en el mercado, Apple no recibe ni un
> céntimo.** Se lo pagas a otro inversor que las tenía.

El mercado secundario no financia a las empresas. Financia a los inversores
anteriores. La empresa solo recibe dinero en el primario: IPO, ampliación de
capital, emisión de deuda. Esto tiene implicaciones sobre las que volveremos
—por qué a la dirección le importa tanto la cotización si no le entra dinero,
qué significa realmente una recompra, por qué las opciones sobre acciones no
diluyen a nadie— pero de momento basta con tener la mecánica limpia.

---

## Precio y valor no son la misma cosa

Cerramos con la distinción que sostiene los tres meses de curso.

- El **precio** es lo que se paga. Es un dato observable, público, exacto y
  actualizado al milisegundo.
- El **valor** es lo que se recibe. Es una estimación, privada, aproximada, y
  depende de supuestos sobre el futuro que pueden estar mal.

La asimetría entre ambos es incómoda: lo que puedes medir con precisión
—el precio— no es lo que quieres saber, y lo que quieres saber —el valor— no lo
puedes medir con precisión. Toda la disciplina de la inversión consiste en
operar con esa asimetría sin engañarte.

De aquí salen las dos posturas que estructuran el debate entero:

- Si crees que precio y valor coinciden siempre, seleccionar activos no tiene
  sentido y lo racional es comprar el mercado entero al menor coste posible.
- Si crees que a veces divergen, tu trabajo consiste en estimar el valor y
  esperar a que el precio se equivoque.

La evidencia empírica sobre cuál de las dos es cierta —y la respuesta no es "una
u otra"— es la sesión 07. La sesión 02, mañana, es la herramienta que necesitas
antes: cómo se convierte un flujo futuro en un valor de hoy, y por qué el tipo
de interés es la variable que reprecia el planeta entero.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Equity** | Participación en la propiedad de un negocio. La acción es su unidad. |
| **Cash flow** | Dinero que entra menos dinero que sale. Un hecho, no una opinión contable. |
| **Residual claim** | Derecho a cobrar lo que sobra después de todos los demás. Lo que define a un accionista. |
| **Operating leverage** | Amplificación del beneficio ante cambios en ingresos, causada por los costes fijos. |
| **IPO** (*Initial Public Offering*) | Primera venta pública de acciones. Mercado primario: el dinero va a la empresa. |
| **Secondary market** | Donde los inversores se compran y venden entre sí. El dinero no llega a la empresa. |
| **Price discovery** | Proceso por el que la negociación agrega información dispersa en un precio. |
| **Buyback** | Recompra de acciones propias. Equivalente económico de un dividendo. |
| **Multiple expansion** | Subida del precio por cambio en lo que el mercado paga por cada euro de beneficio, sin mejora del negocio. |
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
enseñarte esa fragilidad te está vendiendo una falsa precisión.

**2. Muchas empresas reales no encajan limpiamente en el cajón 3.** Una
biotecnológica sin ingresos, una empresa prerrevenue, una startup cotizada: no
tienen flujo que descontar. Su valor es una opción sobre un flujo futuro
incierto, y valorarlas con las herramientas de este curso hasta la semana 6 dará
resultados sin sentido. Requieren marcos de opciones reales, que están fuera del
alcance de estos tres meses.

**3. La clasificación de Buffett es útil, no sagrada.** Está escrita por alguien
con un estilo de inversión concreto y un horizonte de décadas. Hay activos que
la desafían: un REIT tiene flujo pero cotiza a menudo como sentimiento; una
materia prima industrial no produce flujo pero tiene una demanda física real que
ancla su precio. Úsala como mapa, no como ley.

**4. El apalancamiento operativo funciona igual de bien hacia arriba, y eso es
justo lo que te ciega en los buenos años.** El mismo mecanismo que convierte
-10% de ingresos en -80% de beneficio convierte +10% en +80%. En expansión, los
negocios más frágiles parecen los mejores gestionados. Distinguir margen operativo
sostenible de amplificación cíclica es una de las cosas más difíciles del
análisis fundamental, y hay carreras enteras construidas sobre haber confundido
las dos.

**5. La descomposición en tres fuentes es limpia ex-post y confusa ex-ante.**
Mirando hacia atrás sabes exactamente cuánto vino de cada componente. Mirando
hacia adelante, casi nadie es capaz de decir cuánta parte de una subida es
crecimiento y cuánta es expansión de múltiplo, porque ambas se sienten
idénticamente bien mientras ocurren. Ese es literalmente el mecanismo de todas
las burbujas de la semana 3.

**6. Cuidado con la trampa retórica del "valor intrínseco".** Que exista un
valor real no implica que tú puedas calcularlo, ni que el mercado tenga que
converger a él en un plazo que puedas aguantar. Keynes lo dejó dicho con más
elegancia de la que voy a conseguir yo: el mercado puede permanecer irracional
más tiempo del que tú puedes permanecer solvente. Tener razón y quebrar en el
intento es un resultado perfectamente posible, y es exactamente lo que le pasó a
Long-Term Capital Management con dos premios Nobel en el consejo. Sesión 12.
