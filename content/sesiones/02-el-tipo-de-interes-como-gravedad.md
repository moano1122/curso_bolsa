---
id: "02"
semana: 1
dia: 2
tipo: teoria
titulo: "El tipo de interés como gravedad"
subtitulo: "Cómo se convierte el futuro en presente, y por qué un cuarto de punto reprecia el planeta"
duracion_min: 50
conceptos:
  - valor temporal del dinero
  - descuento y capitalización
  - perpetuidad y modelo de Gordon
  - duración
  - tipo real vs nominal
  - tasa libre de riesgo
glosario:
  - discount rate
  - present value
  - terminal value
  - basis point
  - risk-free rate
  - real rate
  - Fisher equation
  - duration
  - equity duration
requisitos: ["01"]
---

# El tipo de interés como gravedad

## La pregunta de ayer que quedó abierta

Ayer terminamos con una acción que cae un 8% el día que la Reserva Federal sube
tipos, pese a que la empresa no tiene ni un euro de deuda. Ningún flujo de caja
de esa compañía ha cambiado. Ningún cliente ha cancelado nada. Y sin embargo el
precio se mueve, y se mueve mucho.

La explicación completa está en esta sesión, y no es una curiosidad técnica: es
probablemente el mecanismo más importante de todo el mercado. Buffett lo ha
formulado en varias ocasiones diciendo que los tipos de interés actúan sobre las
valoraciones financieras como la gravedad actúa sobre la materia. Es una
metáfora buena, pero como toda metáfora, se puede repetir sin entenderla. Al
final de la sesión vas a poder decir exactamente qué significa en aritmética.

La cadena lógica es corta y no tiene escapatoria:

1. El valor de un activo es lo que produce en el futuro (sesión 01).
2. El futuro hay que traerlo al presente para poder compararlo con un precio de
   hoy.
3. Esa conversión se hace con una tasa.
4. Esa tasa está anclada al tipo de interés.
5. Luego si el tipo de interés se mueve, **el valor de todo se mueve a la vez**,
   sin que haya pasado nada en ningún negocio concreto.

El punto 5 es la gravedad. Vamos a construirlo desde abajo.

---

## Por qué 100 euros de hoy no son 100 euros del año que viene

Empecemos por la intuición, que aquí es sólida y no engaña.

Si te doy a elegir entre 100 euros ahora o 100 euros dentro de un año, eliges
ahora. Todo el mundo elige ahora. Pero conviene tener claro por qué, porque las
tres razones son distintas y cada una reaparece más adelante en el curso.

**Preferencia temporal.** Prefieres consumir antes que después. Es una
característica de las personas, no de los mercados, y existiría aunque no
hubiese inflación ni riesgo.

**Coste de oportunidad.** Con esos 100 euros hoy puedes hacer algo: comprar
letras del Tesoro, meterlos en un depósito, invertirlos en un negocio. Si
esperas un año, renuncias a eso. Este es el componente que conecta con el
mercado.

**Riesgo.** El dinero futuro es una promesa. Las promesas se incumplen.

Cuando juntas las tres, aparece un número: **la tasa a la que estás dispuesto a
cambiar dinero futuro por dinero presente**. Eso es un tipo de interés. No es un
invento de los bancos ni una imposición del banco central: es el precio del
tiempo, y existe desde que existe el crédito. En las tablillas de arcilla
babilónicas ya aparecen tipos de interés sobre préstamos de grano, tres mil
años antes de que hubiera un banco central que los fijara.

---

## Capitalizar y descontar: la misma operación en dos direcciones

Aquí está toda la maquinaria matemática de la sesión, y son dos fórmulas que en
realidad son una.

**Hacia el futuro (capitalizar):**

> VF = VP × (1 + r)ⁿ

100 euros al 5% durante 3 años → 100 × 1,05³ = **115,76 €**

**Hacia el presente (descontar):**

> VP = VF ÷ (1 + r)ⁿ

115,76 euros dentro de 3 años, al 5% → 115,76 ÷ 1,05³ = **100 €**

Es la misma ecuación despejada. La diferencia es de dirección, no de concepto. Y
sin embargo la segunda le resulta mucho menos natural a casi todo el mundo,
porque la primera la usamos a diario (un depósito, una hipoteca) y la segunda es
la que hace falta para valorar.

La tasa `r` que usas para descontar tiene nombre: **tasa de descuento**
(*discount rate*). Y contiene dos cosas apiladas:

> tasa de descuento = tipo libre de riesgo + prima de riesgo

El primer sumando es lo que te paga el Estado por prestarle dinero sin (casi)
riesgo. El segundo es lo que exiges de más por asumir la incertidumbre de un
negocio concreto. Del primero se ocupa esta sesión. Del segundo, la 27 y la 48.

### Un ejemplo con varios flujos

Un negocio que te va a entregar 10 € al año durante 5 años y luego cierra.
Descontamos al 8%:

| Año | Flujo | Divisor (1,08)ⁿ | Valor presente |
|---|---|---|---|
| 1 | 10,00 | 1,080 | 9,26 |
| 2 | 10,00 | 1,166 | 8,57 |
| 3 | 10,00 | 1,260 | 7,94 |
| 4 | 10,00 | 1,360 | 7,35 |
| 5 | 10,00 | 1,469 | 6,81 |
| | **50,00** | | **39,93** |

Cincuenta euros de flujos futuros valen hoy 39,93 €. Y observa la última
columna: el flujo del año 5 vale un 26% menos que el del año 1, siendo
idénticos. El descuento **pesa el futuro cada vez menos**.

Ahora sube la tasa del 8% al 10% y repite. El total pasa de 39,93 a 37,91: un
5% menos. Nadie ha tocado los flujos. Solo hemos cambiado el precio del tiempo.

Ese 5% es la gravedad, en pequeño. Ahora vamos a ver por qué en la realidad es
mucho mayor.

---

## La perpetuidad: donde el mecanismo se vuelve brutal

Una acción no vence (sesión 01). Sus flujos no paran en el año 5, siguen
indefinidamente. Y cuando sumas infinitos flujos descontados, la serie converge
a algo asombrosamente simple:

> **VP = C / r**

Un flujo constante `C` a perpetuidad, descontado a `r`. Con 10 € al año al 8%:
10 / 0,08 = **125 €**.

Fíjate en lo que acaba de pasar: el mismo flujo de 10 € que valía 39,93 € si
duraba cinco años, vale 125 € si dura para siempre. La duración del flujo
importa enormemente.

Y ahora la versión que de verdad usamos, porque los negocios crecen. Si el flujo
crece a una tasa `g` constante:

> **VP = C / (r − g)**

Esto es el **modelo de Gordon**, y es el esqueleto matemático que hay debajo de
absolutamente todo lo que verás en la semana 6. Toma esa resta del denominador y
mírala fijamente, porque es donde vive el peligro.

Con C = 10:

| r | g | r − g | Valor | Múltiplo sobre flujo |
|---|---|---|---|---|
| 8% | 0% | 8,0% | 125 | 12,5× |
| 8% | 3% | 5,0% | 200 | 20,0× |
| 8% | 5% | 3,0% | 333 | 33,3× |
| 8% | 6% | 2,0% | 500 | 50,0× |
| 8% | 7% | 1,0% | 1.000 | 100,0× |
| 8% | 7,5% | 0,5% | 2.000 | 200,0× |

Lee la tabla dos veces. Entre la penúltima y la última fila hay medio punto de
diferencia en el crecimiento estimado, y el valor **se duplica**. Un supuesto
que nadie sabe estimar con medio punto de precisión mueve el resultado un 100%.

De aquí salen tres conclusiones que vale la pena grabar:

1. **Cuando `r` y `g` se acercan, el valor explota.** Esto es matemáticamente
   cierto y económicamente falso: ninguna empresa crece para siempre por encima
   de la economía, porque acabaría siendo la economía. Cualquier modelo con
   `g` cercano a `r` está roto.
2. **Los múltiplos altos no son irracionales por sí mismos.** Un PER de 50 puede
   ser perfectamente coherente con tipos bajos y crecimiento alto. Que sea
   coherente no significa que sea correcto: significa que estás apostando fuerte
   a dos números que no controlas.
3. **La sensibilidad es asimétrica y no lineal.** Cuando `r − g` es grande, mover
   los inputs cambia poco. Cuando es pequeño, cambia todo. Y en 2020-2021 `r − g`
   estaba en mínimos históricos.

---

## Duración: por qué unos activos se mueven más que otros

Ahora llegamos a la respuesta de la pregunta inicial.

Toma 100 € que vas a cobrar dentro de 1 año, dentro de 10 y dentro de 30. Y
mira qué le pasa a su valor presente cuando la tasa sube del 4% al 5%:

| Cobras dentro de | VP al 4% | VP al 5% | Cambio |
|---|---|---|---|
| 1 año | 96,15 | 95,24 | **−0,9%** |
| 10 años | 67,56 | 61,39 | **−9,1%** |
| 30 años | 30,83 | 23,14 | **−24,9%** |

Un punto de subida en la tasa. Tres activos. Uno pierde un 0,9% y otro un 25%.
La única diferencia entre ellos es **cuándo llega el dinero**.

Esa sensibilidad tiene nombre: **duración** (*duration*). Formalmente se define
en renta fija, y la veremos con rigor en la sesión 31. Pero el concepto es
general y aplica a cualquier cosa que genere flujos:

> **Cuanto más lejos en el futuro está el dinero, más sensible es su valor
> presente a la tasa de descuento.**

Y ahora aplícalo a acciones. Dos empresas:

- **Empresa A:** una eléctrica regulada. Gana dinero hoy, lo reparte hoy, apenas
  crece. La mayor parte de su valor está en flujos de los próximos 10 años.
- **Empresa B:** una tecnológica que reinvierte todo, apenas tiene beneficio hoy
  y su tesis es que dominará un mercado enorme en 2040. Casi todo su valor está
  en flujos a más de 15 años vista.

La empresa B tiene **duración de equity** mucho mayor. Cuando los tipos suben,
B cae mucho más que A, y no porque su negocio haya empeorado, sino porque su
dinero está más lejos.

Esto reformula por completo una de las divisiones clásicas del mercado:

> **"Growth" y "value" no son dos filosofías de inversión enfrentadas. Son, en
> gran medida, dos posiciones distintas en la curva de duración.**

Comprar growth es, entre otras cosas, estar largo de duración. Y en 2022 eso se
vio con una claridad casi de laboratorio: el bono del Tesoro americano a 10 años
pasó de rendir alrededor del 1,5% a cerca del 3,9% en un solo año. El S&P 500
cayó en torno a un 19% y el Nasdaq alrededor de un 33%. No hubo recesión en
2022. No hubo un colapso de beneficios. Lo que hubo fue una repreciación del
denominador, y golpeó proporcionalmente más a lo que tenía el dinero más lejos.

Fue el experimento natural más limpio de las últimas décadas sobre esta sesión.

---

## Nominal, real y la trampa de Fisher

Hasta ahora hemos hablado de "el tipo" como si fuera uno. Hay dos, y confundirlos
es un error caro.

- **Tipo nominal:** el que ves publicado. El bono paga 5%.
- **Tipo real:** lo que ganas en poder adquisitivo, una vez descontada la
  inflación.

La relación aproximada es la **ecuación de Fisher**:

> tipo nominal ≈ tipo real + inflación esperada

Si el bono paga 5% y la inflación esperada es 3%, tu tipo real es
aproximadamente 2%. Si el bono paga 5% y la inflación es 6%, tu tipo real es
**−1%**: estás pagando por prestar dinero, en términos de lo que puedes comprar.

Dos consecuencias importantes:

**Primera: lo que descuenta los flujos reales es el tipo real.** Si los flujos de
una empresa crecen con la inflación (porque sube precios), entonces la inflación
está en el numerador y en el denominador a la vez y se cancela parcialmente. Por
eso una empresa con poder de fijación de precios sufre menos con la inflación: no
es magia de gestión, es que su numerador se mueve con el denominador.

**Segunda: los tipos reales negativos distorsionan todo.** Durante buena parte de
2020 y 2021, el tipo real a 10 años en Estados Unidos estuvo en territorio
negativo. En ese entorno, mantener dinero en efectivo o en bonos garantiza
perder poder adquisitivo, lo que empuja a todo el mundo a asumir riesgo. No
porque el riesgo se haya vuelto atractivo, sino porque la alternativa se ha
vuelto una pérdida segura. Ese fenómeno tiene nombre en el argot —*TINA*, "there
is no alternative"— y explica buena parte de las valoraciones de aquel periodo
mucho mejor que cualquier relato sobre la locura de los inversores.

Y explica también, simétricamente, qué pasó cuando los tipos reales volvieron a
territorio positivo en 2022: de repente **sí** había alternativa, y el dinero se
recolocó.

---

## La tasa libre de riesgo: el ancla de todo

Hay un número que se usa como referencia de todo lo demás: la rentabilidad del
bono del Tesoro estadounidense a 10 años. Se le llama **tasa libre de riesgo**
(*risk-free rate*), aunque el nombre es una convención discutible —no está libre
de riesgo de inflación, ni de riesgo de tipo si vendes antes.

Su papel es de ancla. Es el suelo contra el que se compara cualquier otra
inversión. Si el Tesoro americano te paga un 4,5% sin esfuerzo, cualquier cosa
con riesgo tiene que ofrecerte más, y la diferencia es la **prima de riesgo**.

Por eso, cuando ese número se mueve, se mueve todo lo que se compara con él:
bonos corporativos, acciones, inmuebles, capital riesgo, y sí, también los
activos del cajón 2 de ayer. Ese es el sentido literal de la gravedad: no es una
fuerza que actúe sobre un objeto concreto, es un campo que actúa sobre todos a
la vez, con intensidad proporcional a su duración.

### Qué reprecia exactamente un cuarto de punto

Un **punto básico** (*basis point*, "bp") es una centésima de punto porcentual.
25 bp = 0,25%. Suena a nada.

Vamos a ponerle números con el modelo de Gordon. Un activo con flujo de 10, tasa
de descuento 8% y crecimiento 5%:

- Antes: 10 / (0,08 − 0,05) = **333**
- La tasa sube 25 bp → 10 / (0,0825 − 0,05) = **308**

**−7,7%** por un cuarto de punto. Y si el activo fuera de mayor duración
(g = 6%): pasa de 500 a 444, un **−11,1%**.

Ahora entiendes por qué los mercados enteros se detienen a escuchar a un
presidente de banco central hablar durante cuarenta minutos, y por qué un cambio
de una palabra en un comunicado mueve billones. No están reaccionando a política
monetaria en abstracto: están recalculando el denominador de todos los activos
del planeta simultáneamente.

---

## Lo que esto te da a partir de hoy

Tres lecturas nuevas que antes no tenías:

**1. Distinguir un movimiento de numerador de uno de denominador.** Cuando el
mercado cae, la pregunta útil no es "¿cuánto?" sino "¿han caído los flujos
esperados o ha subido la tasa de descuento?". Son dos mundos distintos: el
primero es un problema del negocio, el segundo es una repreciación. La respuesta
cambia por completo qué deberías hacer y cuánto deberías esperar.

**2. Saber qué estás asumiendo cuando compras algo caro.** Un múltiplo alto es
una afirmación implícita sobre `r` y `g`. Puedes despejarla. Eso es el DCF
inverso de la sesión 27, y es la herramienta más honesta de todo el análisis
fundamental porque en lugar de darte un número te dice **qué tendría que ser
cierto** para que el precio de hoy tenga sentido.

**3. Entender la duración de tu propia cartera.** Si todo lo que tienes son
activos de larga duración —tecnología de crecimiento, empresas sin beneficios
hoy, bonos largos, cripto— entonces no tienes una cartera diversificada: tienes
una apuesta apalancada al tipo de interés, aunque los nombres sean muy distintos.
Esto reaparece en la sesión 47, cuando veamos por qué la diversificación por
número de posiciones no es diversificación.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Discount rate** | Tasa con la que traes dinero futuro al presente. Libre de riesgo + prima de riesgo. |
| **Present value (PV)** | Valor hoy de un flujo futuro. |
| **Terminal value** | Valor de todos los flujos más allá del horizonte de proyección explícito. Suele ser la mayor parte del total. |
| **Basis point (bp)** | Centésima de punto porcentual. 100 bp = 1%. |
| **Risk-free rate** | Rentabilidad del bono soberano de referencia. El ancla contra la que se compara todo. |
| **Real rate** | Tipo nominal menos inflación. Lo que ganas en poder adquisitivo. |
| **Fisher equation** | nominal ≈ real + inflación esperada. |
| **Duration** | Sensibilidad del valor presente a cambios en la tasa. A más lejos el dinero, más duración. |
| **Equity duration** | Lo mismo aplicado a acciones: growth es larga duración, value corta. |

---

## Fallos conocidos: dónde esto te va a engañar

**1. La fórmula de Gordon es una bomba en manos inexpertas.** Su sensibilidad a
`g` es tan extrema que puedes justificar casi cualquier valoración eligiendo el
crecimiento adecuado, y hacerlo sin mala fe, simplemente porque el número que te
sale te parece razonable. Regla de higiene: si tu `g` a perpetuidad supera el
crecimiento nominal esperado de la economía, tu modelo dice que la empresa acabará
siendo el PIB mundial. Está mal.

**2. La tasa de descuento no es observable.** Puedes mirar el bono a 10 años,
pero la prima de riesgo que le sumas encima te la inventas tú, con métodos que
verás en la sesión 27 y que son todos discutibles. Dos analistas competentes
pueden usar 8% y 11% y ambos defenderlo. Eso significa que cualquier valoración
por descuento tiene un rango, no un punto, y presentarla como un punto es falsa
precisión.

**3. Los tipos no son la única variable, aunque hoy lo parezca.** Esta sesión te
da un martillo muy potente y existe el riesgo real de ver clavos en todas
partes. Hay caídas que son de numerador —el negocio se ha roto— y explicarlas por
tipos es engañarse. La descomposición honesta suele ser un reparto, no un
culpable único.

**4. La relación tipos-acciones no es mecánica ni tiene un signo fijo.** En la
teoría de esta sesión, tipos arriba implica valoraciones abajo. En los datos
históricos, hay periodos largos en los que tipos y bolsa subieron a la vez,
porque los tipos subían por crecimiento fuerte y el numerador crecía más rápido
que el denominador. **Lo que importa es por qué se mueven los tipos**, no solo
que se muevan. Un alza por crecimiento y un alza por inflación tienen efectos
opuestos sobre la renta variable.

**5. Duración es un concepto de primer orden, y la realidad tiene segundo
orden.** La aproximación por duración falla para movimientos grandes de tipos; ahí
entra la convexidad (sesión 31). Para movimientos pequeños es excelente. Para un
salto de 300 puntos básicos, la estimación lineal se equivoca de forma
significativa, y siempre en la misma dirección.

**6. Nada de esto predice tipos.** Toda la sesión explica el efecto de un cambio
de tipos sobre las valoraciones. Ni una línea explica cómo saber si los tipos van
a subir o a bajar, porque nadie lo sabe de forma fiable —incluidos los propios
bancos centrales, cuyas proyecciones publicadas fallan sistemáticamente. Entender
el mecanismo no es lo mismo que poder anticipar el input, y confundir ambas cosas
es la vía rápida a construir una tesis macro que no puedes sostener. La sesión 33
insiste en esto con datos.
