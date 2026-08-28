---
id: "04"
semana: 1
dia: 4
tipo: lab
titulo: "El kit numérico del inversor"
subtitulo: "Laboratorio: probabilidad, valor esperado, y la media que de verdad te importa"
duracion_min: 45
conceptos:
  - valor esperado
  - media geométrica
  - lastre de volatilidad
  - interés compuesto
  - probabilidad implícita
  - actualización bayesiana
  - significancia y tamaño de muestra
glosario:
  - expected value
  - geometric mean
  - volatility drag
  - compounding
  - implied probability
  - base rate
  - odds
  - overround
  - sample size
requisitos: ["01", "02", "03"]
simuladores:
  - ergodico
  - compuesto
  - drag
---

# LAB · El kit numérico del inversor

## Cómo funciona esta sesión

Hoy no hay narrativa larga. Hay trece bloques, cada uno con una idea corta y
ejercicios que tienes que hacer **antes** de abrir la solución. Los tres
simuladores están embebidos: muévelos, no te limites a leer los resultados.

La honestidad importa aquí más que en ninguna otra sesión: si abres la solución
antes de intentarlo, el test de esta noche te va a cazar y vas a repetir el día.
No hay atajo.

Necesitas papel, o la calculadora del sistema. Nada más.

```clave
Por qué un laboratorio de números en la primera semana
Las tres sesiones anteriores te han dado tres afirmaciones que suenan bien y que no significan nada hasta que las calculas: que el accionista cobra un residuo, que la duración amplifica, y que un juego favorable puede arruinarte.

Hoy las conviertes en aritmética que puedes hacer de cabeza. A partir de mañana, cuando alguien te presente una estrategia, vas a poder evaluarla en treinta segundos con lo que aprendas hoy. Eso es lo que separa a un inversor de un aficionado con opiniones.
```

---

## Bloque 1 · Probabilidad, odds y traducción entre ambas

Vienes de un mundo —cripto, y a juzgar por tus otros proyectos también las
apuestas— donde las cuotas son moneda corriente. Las opciones funcionan con la
misma gramática, así que fijemos la traducción ahora y la semana 4 será mucho
más fácil.

Una **probabilidad** es un número entre 0 y 1. Unas **odds** son una razón entre
lo que ganas y lo que arriesgas.

> **Probabilidad implícita = 1 / cuota decimal**

| Cuota decimal | Probabilidad implícita | Interpretación |
|---|---|---|
| 1,50 | 66,7% | Dos de cada tres |
| 2,00 | 50,0% | Moneda al aire |
| 4,00 | 25,0% | Uno de cada cuatro |
| 10,00 | 10,0% | Uno de cada diez |

La suma de las probabilidades implícitas de todos los resultados de un mercado
real es **mayor** que 100%. Ese exceso es el margen de la casa: el **overround**,
o *vig*. En opciones, el equivalente es el spread entre compra y venta más la
prima de riesgo de varianza que veremos en la sesión 18.

```grafico
tipo: barras
titulo: Lo que te cuesta participar antes de acertar nada
etiquetas: Mercado / muy líquido, Mercado / normal, Mercado / poco líquido, Opciones OTM / poco negociadas
valores: 2, 7, 15, 25
formato: %
resaltar: 3
nota: Overround aproximado según liquidez. En un mercado con 15% de margen necesitas ser mucho mejor que el consenso solo para empatar. Es la razón de que la liquidez importe tanto y de que operar instrumentos poco negociados sea caro aunque las comisiones sean cero.
```

### Ejercicios

**1.1** Una opción se paga 1 € y devuelve 5 € si el escenario se cumple. ¿Qué
probabilidad implícita hay?

**1.2** Un mercado cotiza tres resultados a cuotas 2,10 / 3,40 / 5,00. ¿Cuál es
el overround?

**1.3** Crees que un escenario tiene un 30% de probabilidad. ¿A partir de qué
cuota decimal te interesa apostar?

**1.4** Dos mercados ofrecen el mismo evento: uno a cuota 3,10 con 4% de
overround, otro a 3,30 con 12%. ¿Cuál te conviene y por qué el overround no es
lo que decide?

<details><summary>Soluciones bloque 1</summary>

**1.1** 1/5 = **20%**.

**1.2** 1/2,10 + 1/3,40 + 1/5,00 = 0,4762 + 0,2941 + 0,2000 = 1,0703 →
**overround del 7,0%**.

**1.3** Necesitas cuota > 1/0,30 = **3,33**. A 3,33 exactos tu valor esperado es
cero; por encima es positivo. "Cuota justa" y "cuota rentable" no son lo mismo:
la justa te deja plano, y necesitas margen sobre ella para cubrir el error de tu
propia estimación.

**1.4** Te conviene el **segundo**, a 3,30. El overround describe el mercado en
conjunto; a ti solo te afecta el precio del resultado concreto que vas a tomar.
Un mercado con margen alto puede tener una pata mal valorada y ser precisamente
donde está tu oportunidad. Mirar el overround para decidir es mirar la media
cuando lo que operas es un punto.

</details>

---

## Bloque 2 · Valor esperado, y por qué no basta

El **valor esperado** (*expected value*, EV) es la media ponderada de los
resultados por sus probabilidades.

> EV = Σ (probabilidad × resultado)

### Ejercicios

**2.1** Una operación tiene un 40% de ganar 300 € y un 60% de perder 150 €.
¿Cuál es el EV?

**2.2** Otra tiene un 90% de ganar 20 € y un 10% de perder 250 €. ¿EV?

**2.3** ¿Cuál preferirías repetir 500 veces? ¿Cambia tu respuesta si cada
operación compromete el 30% de tu capital?

<details><summary>Soluciones bloque 2</summary>

**2.1** 0,40 × 300 + 0,60 × (−150) = 120 − 90 = **+30 €**.

**2.2** 0,90 × 20 + 0,10 × (−250) = 18 − 25 = **−7 €**. Negativo, pese a acertar
nueve de cada diez veces. Es el perfil de convexidad negativa de ayer: el de
Niederhoffer.

**2.3** Con tamaños pequeños, claramente la 2.1. Pero si cada operación
compromete el 30% del capital, la respuesta cambia por completo: la 2.1 pierde un
30% con probabilidad 0,6, y una racha de cuatro pérdidas seguidas —probabilidad
13%, nada extraordinario— te deja en 0,7⁴ = **24% del capital inicial**.

Un EV positivo con tamaño mal calibrado es un camino a la ruina. Esto es la no
ergodicidad de ayer, ahora con tus números.

</details>

```anecdota
La paradoja que rompió la teoría de la decisión durante 25 años
En 1713, Nicolas Bernoulli planteó un juego: se lanza una moneda hasta que sale cara. Si sale en el primer lanzamiento ganas 2 ducados, si sale en el segundo 4, en el tercero 8, y así duplicando. ¿Cuánto pagarías por jugar?

Calcula el valor esperado: hay 1/2 de probabilidad de ganar 2, más 1/4 de ganar 4, más 1/8 de ganar 8... Cada término aporta exactamente 1. Sumados infinitos términos, el valor esperado es **infinito**.

Según la teoría de la época, deberías estar dispuesto a pagar cualquier cantidad —toda tu fortuna, y más— por jugar. Nadie lo haría. Y nadie sabía explicar por qué la teoría fallaba.

En 1738, su primo Daniel Bernoulli propuso la solución: la gente no maximiza dinero, maximiza **utilidad**, y la utilidad del dinero es logarítmica —el segundo millón vale menos que el primero—. Esa idea fundó la economía de la decisión moderna.

Y hay una lectura aún más afilada, que es la de la sesión de ayer: con utilidad logarítmica, maximizar la utilidad esperada equivale a maximizar el **crecimiento compuesto**, es decir, la media geométrica. Bernoulli resolvió en 1738, sin saberlo, el mismo problema que Kelly formalizaría en 1956 y que tú vas a tocar con las manos dentro de dos bloques.
```

---

## Bloque 3 · Las dos medias, y cuál es la tuya

Aquí está el error numérico más caro que comete un inversor con formación
empírica.

**Media aritmética:** sumas los retornos y divides. Es la que aparece en casi
todas las fichas de fondos.

**Media geométrica (CAGR):** la tasa constante que te habría llevado del inicio
al final. Es la que describe tu experiencia real.

Ejemplo, dos años: +50% y −50%.

- Media aritmética: (50 − 50)/2 = **0%**
- Realidad: 100 → 150 → 75. Has perdido un **25%**.
- Media geométrica: √(1,5 × 0,5) − 1 = **−13,4%** anual.

La media aritmética dice que estás igual. Has perdido un cuarto de tu dinero.

```clave
La fórmula que deberías poder hacer de cabeza
**media geométrica ≈ media aritmética − σ²/2**

Ese término `σ²/2` es el **lastre de volatilidad** (*volatility drag*). No es una comisión que te cobre nadie: es aritmética pura de la composición.

La media geométrica es **siempre menor o igual** que la aritmética, y la diferencia crece con el cuadrado de la volatilidad. Por eso duplicar la volatilidad no duplica el lastre: lo cuadruplica.
```

```grafico
tipo: lineas
titulo: Lo que la volatilidad se lleva, con el mismo retorno medio del 12%
x: 5%, 15%, 25%, 35%, 45%, 60%
serie: Retorno medio | 12, 12, 12, 12, 12, 12
serie: Retorno compuesto real | 11.9, 10.9, 8.9, 5.9, 1.9, -6
formato: %
etiqueta_x: volatilidad anual
nota: Dos activos con idéntico retorno medio dejan cantidades de dinero radicalmente distintas. Con volatilidad del 60%, un activo que "gana un 12% de media" pierde dinero de verdad. La media aritmética no es una descripción de tu experiencia.
```

### Ejercicios

**3.1** Retorno medio aritmético 12% anual, volatilidad 20%. ¿Retorno compuesto
aproximado?

**3.2** Retorno medio 15%, volatilidad 45%. ¿Y este?

**3.3** ¿Cuál de los dos te deja más dinero en 20 años? Calcúlalo.

**3.4** Un ETF apalancado 3× sobre un índice con 12% de retorno medio y 20% de
volatilidad. ¿Retorno compuesto aproximado? (Pista: el apalancamiento multiplica
el retorno medio **y** la volatilidad.)

**3.5** Tu cartera hizo +40%, −25%, +30%, −20% en cuatro años. ¿Cuál es tu media
aritmética y cuál tu CAGR real?

<details><summary>Soluciones bloque 3</summary>

**3.1** 0,12 − (0,20²/2) = 0,12 − 0,02 = **10,0%**.

**3.2** 0,15 − (0,45²/2) = 0,15 − 0,101 = **4,9%**. La volatilidad se ha comido
dos tercios del retorno.

**3.3** Primero: 1,10²⁰ = **6,7×**. Segundo: 1,049²⁰ = **2,6×**. El activo con
mayor retorno medio deja **menos de la mitad** de dinero. Esta es la razón por la
que comparar estrategias por retorno medio es un error, y por la que una
estrategia más aburrida gana a largo plazo con enorme frecuencia.

**3.4** Retorno medio 3 × 12% = 36%. Volatilidad 3 × 20% = 60%.
0,36 − (0,60²/2) = 0,36 − 0,18 = **18%**. Comparado con el 10% del índice sin
apalancar: triplicas la exposición y no llegas a duplicar el retorno compuesto,
mientras tu drawdown se dispara. Y esto asume rebalanceo perfecto y coste cero.
Sesión 43.

**3.5** Media aritmética: (40 − 25 + 30 − 20)/4 = **+6,25%**.
Real: 1,40 × 0,75 × 1,30 × 0,80 = 1,092 → **+9,2% en total**, es decir un CAGR
de **2,2%**. Creías ganar un 6,25% anual y ganaste un 2,2%. La diferencia se la
llevó la volatilidad, y ninguna comisión aparece en el extracto.

</details>

---

## Bloque 4 · SIMULADOR · El juego no ergódico

```sim:ergodico
titulo: Cara +50% / Cruz −40%
descripcion: Valor esperado +5% por tirada. Ejecuta muchas trayectorias y compara la media del conjunto con la mediana de las trayectorias individuales.
parametros:
  ganancia: 50
  perdida: 40
  tiradas: 100
  trayectorias: 500
  fraccion: 100
```

**Qué tienes que observar, en este orden:**

1. Con `fraccion = 100` (apuestas todo cada vez), mira la **media** del conjunto
   y la **mediana**. La media es enorme y positiva. La mediana está cerca de
   cero. Ese abismo es la no ergodicidad hecha visible.
2. Fíjate en cuántas trayectorias acaban por encima del capital inicial. Es un
   porcentaje muy pequeño, y son las que arrastran la media.
3. Baja `fraccion` a 50, luego a 25, luego a 10. Observa qué le pasa a la
   mediana.
4. Encuentra a ojo la fracción que **maximiza la mediana**. Anótala. En la sesión
   46 descubrirás que ese número tiene nombre y fórmula.

```clave
Lo que acabas de encontrar a ojo tiene nombre
Existe una fracción óptima del capital que maximiza el crecimiento compuesto. Apostar menos que ella crece más despacio; apostar más que ella crece más despacio **y además te expone a la ruina**.

Lo asimétrico es esto: pasarse es mucho peor que quedarse corto. Apostar el doble de lo óptimo no da el doble de retorno: da un retorno **negativo**. Por eso los profesionales usan fracciones conservadoras del óptimo teórico, y por eso la sesión 46 se llama simplemente "Sizing".
```

```anecdota
Los ingenieros de teléfonos que reventaron los casinos
En 1956, John Kelly Jr., físico de los Bell Labs, publicó un artículo sobre transmisión de información por líneas telefónicas con ruido. Buscando una analogía intuitiva, planteó el caso de un apostador que recibe información imperfecta sobre carreras de caballos, y dedujo la fracción del capital que maximiza el crecimiento a largo plazo. Esa fórmula lateral acabó siendo lo único que se recuerda del artículo.

Su colega en Bell Labs era Claude Shannon, el fundador de la teoría de la información. Shannon se interesó, y junto con un joven matemático del MIT llamado Edward Thorp construyeron en 1961 lo que se considera el primer ordenador ponible de la historia: un aparato del tamaño de una cajetilla, escondido en el zapato, que predecía el octante de la ruleta donde caería la bola. Funcionaba. Lo probaron en Las Vegas con un cable que iba hasta un auricular oculto.

Thorp fue más lejos: publicó *Beat the Dealer* en 1962 con el sistema de conteo de cartas del blackjack, obligó a los casinos a cambiar sus reglas, y después trasladó el mismo aparato conceptual —ventaja pequeña, medida, con tamaño de apuesta calculado— a los mercados financieros. Su fondo, Princeton/Newport Partners, encadenó casi veinte años sin un solo trimestre en pérdidas.

La moraleja no es "hazte matemático". Es que el hilo que va de Bernoulli en 1738 a Kelly en 1956 y a Thorp en los setenta trata siempre del mismo problema: no *si* la apuesta es buena, sino **cuánto poner**. Y esa es la pregunta que casi todo el mundo se salta.
```

---

## Bloque 5 · SIMULADOR · Comisiones y composición

```sim:compuesto
titulo: Lo que se lleva una comisión
descripcion: Capital inicial, retorno bruto anual, comisión anual y horizonte.
parametros:
  capital: 100000
  retorno: 8
  comision: 1.5
  anios: 30
```

### Ejercicios

**5.1** 100.000 € al 8% durante 30 años, sin comisiones. ¿Cuánto acabas
teniendo?

**5.2** Lo mismo con una comisión del 1,5% anual (retorno neto 6,5%). ¿Cuánto?

**5.3** ¿Qué porcentaje del **beneficio** se ha llevado la comisión? No del
capital: del beneficio.

**5.4** ¿A cuántos años de rentabilidad equivale eso?

<details><summary>Soluciones bloque 5</summary>

**5.1** 100.000 × 1,08³⁰ = **1.006.266 €**. Beneficio: 906.266 €.

**5.2** 100.000 × 1,065³⁰ = **661.437 €**. Beneficio: 561.437 €.

**5.3** Diferencia: 344.829 €. Sobre 906.266 € de beneficio = **38,0%**.

Una comisión que se anuncia como "1,5%" se lleva casi cuatro de cada diez euros
que habrías ganado. Y no porque sea abusiva: porque se compone igual que el
capital, en dirección contraria. Es la misma matemática de la sesión 02 con el
signo cambiado.

**5.4** Al 8% anual, recuperar 344.829 € requiere del orden de 5 años
adicionales. Has trabajado treinta años y el resultado es el de veinticinco.

</details>

```clave
La comisión no es un porcentaje: es una fracción de tu beneficio
Un 1,5% suena a nada porque lo comparas mentalmente con el capital. Compáralo con lo que de verdad está en juego —el beneficio— y se convierte en un 38%.

Y la regla del 72 de la sesión 02 te da el atajo: si tu retorno bruto es 8% duplicas en 9 años; si es 6,5% duplicas en 11. Cada duplicación perdida se compone con todas las siguientes.
```

---

## Bloque 6 · SIMULADOR · El lastre de volatilidad

```sim:drag
titulo: Retorno medio vs retorno compuesto
descripcion: Mueve la volatilidad y observa cómo se separan las dos curvas manteniendo el mismo retorno medio.
parametros:
  retorno_medio: 12
  volatilidad: 20
  anios: 25
```

Deja el retorno medio fijo en 12% y sube la volatilidad de 5% a 60% poco a poco.
Las dos curvas parten juntas y se separan cada vez más.

```clave
Dos afirmaciones que conviven sin contradicción
La volatilidad **no es** una buena medida del riesgo de perder tu dinero de forma permanente (sesión 03).

La volatilidad **sí** reduce mecánicamente tu retorno compuesto (esta sesión).

Ambas son ciertas a la vez porque hablan de cosas distintas: una sobre qué mide la volatilidad como proxy de riesgo, otra sobre su efecto aritmético en la composición. Si te preguntan por esto en el examen del viernes —y te van a preguntar—, la respuesta no es elegir una.
```

---

## Bloque 7 · Bayes sobre una tesis

Tienes una creencia previa, llega evidencia, actualizas.

> P(tesis | evidencia) = P(evidencia | tesis) × P(tesis) / P(evidencia)

El error habitual no es el cálculo: es olvidar la **tasa base** (*base rate*).

### Ejercicio

**7.1** Crees que una empresa está manipulando sus cuentas. Tu prior, sin más
información, es la tasa base del mercado: alrededor del 2% de las empresas
cotizadas tienen irregularidades contables materiales en un año dado.

Aplicas un test forense que detecta el 80% de los fraudes reales, pero también
marca en positivo al 10% de las empresas honestas.

El test da **positivo**. ¿Probabilidad de que efectivamente esté manipulando?

<details><summary>Solución bloque 7</summary>

De 1.000 empresas:

- 20 manipulan. El test caza el 80% → **16 positivos verdaderos**.
- 980 son honestas. El test marca el 10% → **98 positivos falsos**.
- Total de positivos: 114.

P(fraude | positivo) = 16 / 114 = **14,0%**.

Un test con 80% de sensibilidad da positivo y aun así hay un 86% de probabilidad
de que la empresa sea honesta. La razón es la tasa base: cuando el evento es
raro, **los falsos positivos dominan**.

</details>

```grafico
tipo: barras
titulo: De 1.000 empresas, quién da positivo en el test forense
etiquetas: Fraudes / detectados, Fraudes / no detectados, Falsos / positivos, Honestas / correctas
valores: 16, 4, 98, 882
formato: 
resaltar: 2
nota: De los 114 positivos totales, 98 son falsos. El test es bueno —caza al 80% de los fraudes— y aun así la mayoría de sus alarmas son ruido, porque el fraude es raro.
```

```clave
La pregunta que desmonta el 90% de las señales que te van a vender
Alguien te dice: "esta señal acierta el 80% de los techos de mercado".

Tu respuesta: **"¿y cuántas veces se dispara cuando no hay techo?"**

Si los techos ocurren el 2% de los días y la señal marca el 10% de los días normales, generará seis veces más falsas alarmas que aciertos. La tasa de acierto sin la tasa de falsos positivos es literalmente inevaluable, y quien te presenta solo la primera te está ocultando la mitad que importa. Volveremos a ello en la sesión 09.
```

---

## Bloque 8 · R múltiplos: la unidad que ordena todo lo demás

Una herramienta sencilla que te va a servir el resto del curso, y que hace
comparables operaciones de tamaños distintos.

Define **1R** como la cantidad que arriesgas en una operación: la distancia
entre tu entrada y el punto donde admites que estabas equivocado. Si compras a
100 y decides salir a 92, tu R es 8 por acción.

A partir de ahí, todos los resultados se expresan en múltiplos de R. Ganar 24 es
**+3R**. Perder 8 es **−1R**. Y ahora puedes sumar peras con manzanas: una
operación en una acción de 10 € y otra en una de 900 € se comparan directamente.

La expectativa de tu sistema, en R:

> Expectativa = (% aciertos × R medio ganador) − (% fallos × R medio perdedor)

### Ejercicios

**8.1** Aciertas el 40% de las veces. Tus ganadoras promedian +2,5R y tus
perdedoras −1R. ¿Cuál es tu expectativa por operación?

**8.2** Aciertas el 70%. Ganadoras +0,5R, perdedoras −1,5R. ¿Expectativa?

**8.3** ¿Cuál de los dos sistemas es psicológicamente más difícil de operar, y
por qué eso importa?

**8.4** Con el sistema de 8.1, ¿cuánto esperas ganar en 100 operaciones si cada
R es el 1% de tu capital? ¿Y cuál es la peor racha razonable que deberías
esperar?

<details><summary>Soluciones bloque 8</summary>

**8.1** (0,40 × 2,5) − (0,60 × 1) = 1,0 − 0,6 = **+0,4R por operación**.

**8.2** (0,70 × 0,5) − (0,30 × 1,5) = 0,35 − 0,45 = **−0,1R**. Negativo, con un
70% de aciertos. Otra vez el mismo aviso de ayer: la tasa de acierto por sí sola
no dice nada.

**8.3** El primero, con diferencia. Aciertas solo el 40%, así que pasarás la
mayor parte del tiempo perdiendo, y sin embargo es el que gana dinero. Rachas de
seis u ocho pérdidas seguidas son perfectamente normales con un 60% de fallos, y
la mayoría de la gente abandona un sistema rentable durante una de esas rachas.

Esto importa tanto como la matemática: **un sistema que no puedes sostener
emocionalmente tiene una expectativa real de cero**, porque lo abandonarás antes
de que la ventaja se materialice.

**8.4** 100 × 0,4R = **+40R**, es decir un 40% del capital si cada R es el 1%.
Sobre la peor racha: con 60% de probabilidad de fallo, la probabilidad de ocho
pérdidas consecutivas en algún punto de 100 operaciones es alta. Deberías
dimensionar asumiendo rachas de al menos ocho o diez, que a 1R son un drawdown
del 8-10%. Si eso te resulta intolerable, tu R es demasiado grande, no tu sistema
demasiado malo.

</details>

```clave
Piensa en R, no en euros
Cuando piensas en euros, una pérdida de 400 € duele según tu estado de ánimo y según lo que costara el activo. Cuando piensas en R, una pérdida es **−1R**: exactamente lo que habías decidido de antemano que ibas a perder si te equivocabas.

Es el mismo hecho, y la diferencia en calidad de decisión es enorme. Además te obliga a definir el punto de salida **antes** de entrar, que es la única forma de que ese punto sea honesto.
```

---

## Bloque 9 · Correlación: por qué dos posiciones no son dos apuestas

Un último cálculo, corto, que prepara la sesión 47.

Tienes dos posiciones del mismo tamaño, cada una con volatilidad del 20%. ¿Cuál
es la volatilidad de la cartera? Depende **enteramente** de la correlación:

| Correlación | Volatilidad de la cartera | Qué significa |
|---|---|---|
| +1,0 | 20,0% | Son la misma apuesta con dos nombres |
| +0,7 | 18,4% | Diversificación mínima |
| +0,3 | 16,1% | Diversificación real pero limitada |
| 0,0 | 14,1% | Independientes de verdad |
| −0,5 | 10,0% | Se compensan |

```grafico
tipo: lineas
titulo: Volatilidad de una cartera de dos activos según su correlación
x: -0.5, -0.2, 0, 0.3, 0.5, 0.7, 1.0
serie: Volatilidad de la cartera | 10, 12.6, 14.1, 16.1, 17.3, 18.4, 20
formato: %
etiqueta_x: correlación entre las dos posiciones
nota: Con dos activos del 20% de volatilidad cada uno. Fíjate en que el beneficio de diversificar se desploma en cuanto la correlación pasa de 0,5: entre 0,7 y 1,0 apenas hay diferencia. Y en las crisis, las correlaciones tienden precisamente a ese tramo.
```

### Ejercicio

**9.1** Tienes cinco posiciones: tres tecnológicas de crecimiento, bonos del
Tesoro a 30 años y bitcoin. ¿Cuántas apuestas tienes realmente? Justifícalo con
lo aprendido el martes.

<details><summary>Solución bloque 9</summary>

Prácticamente **una**. Las cinco son activos de larga duración: su valor depende
de flujos lejanos o de expectativas lejanas, y por tanto todas son sensibles a la
misma variable, la tasa de descuento. Los nombres son distintos, el factor de
riesgo es el mismo.

En 2022 esto dejó de ser teórico: tecnología de crecimiento, bonos largos y
cripto cayeron a la vez y con magnitudes comparables, pese a no tener
absolutamente nada que ver entre sí desde el punto de vista del negocio.

**Diversificar es repartir entre factores de riesgo, no entre nombres.** Contar
posiciones es la definición floja, y es la que usa casi todo el mundo.

</details>

---

## Bloque 10 · Cuántas operaciones hacen falta para saber si eres bueno

Este bloque es nuevo y es el más incómodo, porque se aplica a ti.

Supón que tu estrategia tiene una ventaja real: aciertas el 55% de las veces con
pagos simétricos. ¿Cuántas operaciones necesitas para poder distinguir eso de la
suerte con una confianza razonable?

La regla aproximada: el error típico de una proporción con `n` observaciones es
√(p(1−p)/n). Para detectar una ventaja de 5 puntos sobre el azar con confianza,
necesitas que ese error sea claramente menor que 0,05.

| Operaciones | Error típico | Rango probable de tu tasa real |
|---|---|---|
| 20 | 11,1% | entre 33% y 77% |
| 50 | 7,0% | entre 41% y 69% |
| 100 | 5,0% | entre 45% y 65% |
| 400 | 2,5% | entre 50% y 60% |
| 1.000 | 1,6% | entre 52% y 58% |

```clave
Con 50 operaciones no sabes nada sobre ti mismo
Con 50 resultados, una tasa de acierto observada del 55% es perfectamente compatible con no tener ninguna ventaja, y también con tener una ventaja enorme. El dato no discrimina.

Esto tiene dos consecuencias molestas y simétricas:

**Si vas ganando**, no sabes todavía si es habilidad. **Si vas perdiendo**, tampoco sabes todavía si tu estrategia es mala. Y ambas conclusiones prematuras cuestan dinero: la primera te hace subir el tamaño, la segunda te hace abandonar algo que funcionaba.

La sesión 54 vuelve sobre esto con rigor, aplicado a backtests.
```

### Ejercicio

**10.1** Llevas 30 operaciones con 19 ganadoras (63%). Un amigo te dice que tu
sistema está claramente validado. ¿Qué le respondes con lo que sabes ahora?

<details><summary>Solución bloque 8</summary>

Que 30 operaciones dan un error típico de unos 9 puntos, así que tu 63% observado
es compatible con una tasa real de entre el 45% y el 81%. Es decir, **es
compatible con no tener ninguna ventaja**.

Y hay un problema añadido, más grave: si has llegado a este sistema después de
probar varios y quedarte con el que mejor iba, tu 63% está contaminado por
selección. Ese es el p-hacking de la sesión 09, y multiplica el número de
operaciones necesarias para creerte nada.

La respuesta honesta a tu amigo es: "todavía no lo sé, y tampoco tú".

</details>

---

## Bloque 11 · Aportaciones periódicas: el cálculo que casi nadie hace

Casi todo el mundo invierte aportando dinero periódicamente, y casi nadie calcula
qué implica eso. Vamos a hacerlo, porque el resultado es contraintuitivo.

Dos personas invierten al 7% anual durante 30 años:

- **Ana** aporta 500 € al mes desde el año 1.
- **Beto** no aporta nada los primeros 10 años y luego aporta 1.000 € al mes
  durante 20 años.

Beto acaba aportando más dinero total: 240.000 € frente a los 180.000 € de Ana.

### Ejercicios

**11.1** ¿Quién termina con más dinero? Estima antes de calcular.

**11.2** ¿Cuánto del capital final de Ana es dinero aportado y cuánto es
rentabilidad?

**11.3** Si Ana hubiera empezado cinco años antes con la misma aportación, ¿cuánto
más tendría?

<details><summary>Soluciones bloque 11</summary>

**11.1** **Ana**, y no por poco. Aportando un 25% menos de dinero, termina con
aproximadamente 610.000 € frente a los 520.000 € de Beto. Los primeros euros son
los que más tiempo tienen para componer, y el tiempo es el factor que entra
elevado al exponente.

**11.2** Ana aportó 180.000 €. Termina con unos 610.000 €. Es decir, **el 70% de
su capital final no lo puso ella**: lo puso la composición. Y esa proporción
crece con el horizonte: a 40 años superaría el 80%.

**11.3** Cinco años más al 7% multiplican el resultado por aproximadamente 1,40.
Unos 240.000 € adicionales, por haber empezado antes con exactamente el mismo
esfuerzo mensual.

</details>

```clave
El tiempo no es un ingrediente más: es el que va en el exponente
En la fórmula del capital compuesto, la aportación y la rentabilidad son
factores, pero **el tiempo es el exponente**. Por eso empezar antes vale más que aportar más, y por eso ninguna cantidad de esfuerzo posterior recupera del todo los años que no compusieron.

Es también, en negativo, la razón de que un drawdown grande a mitad del camino sea tan destructivo: no solo pierdes capital, pierdes los años que ese capital iba a componer.
```

---

## Bloque 12 · Del cupón a la prima: el puente con las opciones

Último bloque, y es un adelanto deliberado de la semana 4. Quiero que llegues a
las opciones sabiendo que ya sabes leerlas.

Una apuesta binaria paga una cantidad fija si ocurre algo. Una opción paga una
cantidad **variable** que depende de cuánto ocurra. Esa es toda la diferencia
estructural, y cambia la aritmética de forma interesante.

Supón una acción a 100 €. Compras el derecho a comprarla a 110 € dentro de tres
meses, y ese derecho te cuesta 4 €.

### Ejercicios

**12.1** ¿A partir de qué precio de la acción empiezas a ganar dinero?

**12.2** ¿Cuál es tu pérdida máxima, y con qué probabilidad la sufres si la
acción acaba por debajo de 110?

**12.3** Si la acción acaba en 130, ¿cuánto ganas y qué rentabilidad es sobre lo
invertido? Compárala con la rentabilidad de haber comprado la acción.

**12.4** Con lo que sabes del bloque 1: si el mercado cobra 4 € por ese derecho,
¿qué te está diciendo aproximadamente sobre la probabilidad de que la acción
supere los 110?

<details><summary>Soluciones bloque 12</summary>

**12.1** Necesitas recuperar los 4 € de prima: **114 €**. Por debajo de eso, aun
teniendo razón en la dirección, pierdes dinero. Ese es el *break-even*, y es la
primera cosa que se calcula en cualquier posición de opciones.

**12.2** Pérdida máxima: los **4 €** de prima, el 100% de lo invertido. Y la
sufres íntegra en **todo** el rango por debajo de 110, que suele ser el escenario
más probable. Esta es la razón estructural de que la mayoría de compradores de
opciones pierda: no necesitan equivocarse de dirección, basta con no acertar lo
suficiente.

**12.3** Ganas 130 − 110 − 4 = **16 €** sobre 4 € invertidos: **+400%**. Comprando
la acción habrías ganado 30 € sobre 100: **+30%**. El apalancamiento es
espectacular, y es exactamente el residuo de la sesión 01 en acción: la opción es
un residuo respecto al strike, y los residuos amplifican.

**12.4** Aquí hay que tener cuidado, y por eso pongo la pregunta. La respuesta
ingenua sería: si pago 4 para ganar hasta 20, la probabilidad implícita ronda el
20%. Pero **no es correcta**, porque el pago no es fijo: si la acción sube a 200
ganas mucho más. La prima incorpora todo el abanico de resultados posibles
ponderado por probabilidad, no un solo escenario.

Lo que sí puedes afirmar es que la prima contiene una estimación del mercado
sobre la distribución completa de precios futuros. Extraerla es exactamente lo
que hace el modelo de Black-Scholes al revés, y se llama volatilidad implícita.
Sesión 37.

</details>

```clave
Ya sabes leer una opción, aunque todavía no lo parezca
Prima = precio. Break-even = precio más prima. Pérdida máxima = la prima. Rentabilidad = residuo amplificado.

Cuando llegues a la semana 4, el 60% del trabajo estará hecho: solo tendrás que añadir el efecto del tiempo y el de la volatilidad. La estructura ya la tienes.
```

---

## Bloque 13 · Aplícalo a ti: la auditoría de treinta minutos

Último bloque, y es el único con deberes de verdad. Todo lo anterior son
herramientas; esto es usarlas sobre tus propios datos.

Coge tu historial real de operaciones —el que tengas, aunque sea parcial— y
calcula estas seis cifras. Si no llevas registro, empieza a llevarlo hoy: sin
datos, todo lo demás de este curso es entretenimiento.

**1. Tu CAGR real**, no la suma de tus retornos. La media geométrica del bloque
3. Casi con seguridad será menor de lo que creías.

**2. Tu lastre de volatilidad.** Calcula la desviación típica de tus retornos
anuales o mensuales y aplica `σ²/2`. Eso es lo que te quita el vaivén, y no
aparece en ningún extracto.

**3. Tu tasa de acierto y tu R medio.** Con la fórmula del bloque 8. Muchos
descubren aquí que su sistema tiene expectativa negativa pese a "ir ganando",
porque una sola operación afortunada sostiene toda la estadística.

**4. Tu peor drawdown y cuánto tardaste en recuperarlo.** No el peor mes: la
peor caída desde máximo y el tiempo bajo el agua.

**5. El tiempo medio en posiciones ganadoras frente a perdedoras.** Si aguantas
más las perdedoras, tienes efecto de disposición. Es el diagnóstico más rápido
que existe y casi nadie se lo hace.

**6. Cuántas operaciones llevas.** Y con la tabla del bloque 10, qué puedes
afirmar honestamente con ese tamaño de muestra. Probablemente menos de lo que
pensabas.

```clave
Estas seis cifras valen más que cualquier indicador
Un inversor que conoce sus seis números tiene información sobre sí mismo que la inmensa mayoría no tiene, incluidos muchos profesionales. Y son la línea base contra la que medirás si este curso ha servido para algo.

Vuelve a calcularlas al terminar los tres meses. En la sesión 49 las usaremos para buscar sesgos concretos en tu operativa, y en la 59 serán la materia prima de tu proceso documentado.
```

Si las seis salen incómodas, es exactamente lo que tiene que pasar. La
alternativa —no calcularlas— no mejora los números, solo te impide verlos.

---

## Cierre: qué te llevas

Diez herramientas que vas a usar durante los tres meses:

1. **Traducir entre probabilidad, odds y precio.** Toda opción es una apuesta con
   cuota, y leerla así es medio camino andado para la semana 4.
2. **Calcular EV, y saber que no basta.** Condición necesaria, no suficiente.
3. **Usar la media geométrica.** Es la única que describe tu dinero.
4. **Estimar `σ²/2` mentalmente** para saber qué te quita la volatilidad.
5. **Preguntar siempre por la tasa base** ante cualquier estadística de acierto.
6. **Pensar en R** en lugar de en euros, y definir la salida antes de entrar.
7. **Distinguir número de posiciones de número de apuestas.**
8. **Saber cuántos datos hacen falta** antes de concluir nada sobre una
   estrategia, incluida la tuya.
9. **Calcular el peso del tiempo** en cualquier plan de aportaciones.
10. **Leer una opción** como lo que es: prima, break-even y residuo amplificado.

---

## Fallos conocidos: dónde esto te va a engañar

**1. La aproximación `μ − σ²/2` es solo una aproximación.** Funciona bien con
volatilidades moderadas y se degrada con volatilidades muy altas o
distribuciones muy asimétricas. Para estimaciones de servilleta es excelente;
para un modelo formal, no la uses.

**2. Los simuladores usan distribuciones que la realidad no respeta.** El de
ergodicidad usa una moneda de dos resultados y el de volatilidad usa retornos
normales. Ayer vimos que los retornos reales tienen colas gordas, lo que
significa que **estos simuladores subestiman los escenarios malos**. Están para
enseñar el mecanismo, no para dimensionar tu riesgo.

**3. Bayes exige un prior, y el prior te lo inventas.** El cálculo es impecable y
depende por completo de un número que has elegido tú. Con un prior mal calibrado,
Bayes te da una respuesta precisa y equivocada. La disciplina útil no es calcular
mejor, es **buscar tasas base reales** antes de estimar.

**4. Todo esto asume que conoces las probabilidades.** Es la crítica de Knight de
ayer, y aplica entera a este laboratorio. En el mercado no conoces P(éxito) de tu
tesis: la estimas, con un error probablemente mayor que las diferencias que estás
calculando. Sirve para ordenar el pensamiento y descartar decisiones claramente
malas, no para producir precisión.

**5. El ejercicio del ETF apalancado simplifica de más.** El resultado es
cualitativamente correcto —el apalancamiento diario erosiona el retorno
compuesto— pero el cálculo real depende de la secuencia concreta de retornos, no
solo de media y varianza. En mercados en tendencia sostenida, un ETF apalancado
puede batir a 3× el índice durante periodos largos. Sesión 43.

**6. El bloque 10 asume operaciones independientes, y las tuyas no lo son.** Si
tus posiciones están correlacionadas —porque operas el mismo activo, o el mismo
sector, o en el mismo régimen de mercado— tu número efectivo de observaciones es
menor que el número de operaciones. Necesitas **más** datos de los que dice la
tabla, no menos. Es una tabla optimista.
