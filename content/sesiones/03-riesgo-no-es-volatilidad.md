---
id: "03"
semana: 1
dia: 3
tipo: teoria
titulo: "Riesgo no es volatilidad"
subtitulo: "Tres cosas distintas con el mismo nombre, y la única que puede arruinarte"
duracion_min: 50
conceptos:
  - incertidumbre knightiana
  - colas gordas
  - asimetría del drawdown
  - ergodicidad
  - riesgo de ruina
glosario:
  - volatility
  - standard deviation
  - drawdown
  - fat tails
  - black swan
  - ergodicity
  - risk of ruin
  - Knightian uncertainty
  - left tail
  - VaR
  - Sortino ratio
requisitos: ["01", "02"]
---

# Riesgo no es volatilidad

## Un error de traducción con consecuencias

En finanzas, la palabra "riesgo" se usa para nombrar al menos tres cosas
distintas. La industria las ha fundido en una sola porque una de ellas —la menos
importante— es la única fácil de calcular. Y como es la única que se calcula, es
la única que se gestiona.

Esta sesión trata de separarlas otra vez. Es probablemente la sesión que más va
a cambiar la forma en que decides, más que ninguna herramienta técnica del
curso, porque casi todas las ruinas de mercado se explican por haber medido una
cosa y haberse expuesto a otra.

Las tres son:

**1. Variabilidad.** El precio se mueve mucho. Sube, baja, sube. Esto es
volatilidad.

**2. Pérdida permanente.** El dinero no vuelve. La empresa quiebra, la tesis era
falsa, el activo no era lo que creías. Esto no tiene por qué venir acompañado de
volatilidad: hay activos que bajan tranquilamente hasta cero.

**3. Ruina.** Te quedas sin capital, o sin la capacidad de seguir jugando. Es un
estado absorbente: una vez dentro, no hay recuperación posible, independientemente
de lo buena que fuera tu estrategia.

La industria financiera mide obsesivamente la primera. La que te hace daño de
verdad es la segunda. La que te elimina es la tercera. Y las tres se llaman
igual.

---

## Knight, 1921: riesgo e incertidumbre no son lo mismo

En 1921, el economista Frank Knight publicó *Risk, Uncertainty and Profit* y
trazó una distinción que sigue siendo la más útil que existe sobre este tema.

**Riesgo** es cuando no sabes qué va a pasar, pero conoces la distribución de
probabilidad. Una ruleta: no sabes qué número saldrá, pero sabes exactamente que
hay 37 casillas y qué probabilidad tiene cada una. Puedes calcular. Puedes
asegurar. Puedes fijar un precio justo.

**Incertidumbre** es cuando ni siquiera conoces la distribución. No sabes qué
puede pasar, no sabes cuántos resultados posibles hay, y no puedes asignar
probabilidades con fundamento. La aparición de una tecnología, una guerra, un
cambio regulatorio, un fraude que nadie había detectado.

La distinción es incómoda porque **el mercado es mayoritariamente incertidumbre
disfrazada de riesgo**. Calculamos volatilidades, VaR, betas y correlaciones con
cuatro decimales, y esos números presuponen que conocemos la distribución. No la
conocemos. Estamos estimándola a partir de una muestra del pasado, en un sistema
que cambia, con participantes que reaccionan al hecho mismo de que estemos
midiendo.

Esto no significa que medir sea inútil. Significa que hay que saber qué estás
haciendo cuando mides: estás poniendo un número a una cosa que no es un número.
La precisión del cálculo no se transfiere a la realidad que describe. Es
exactamente el mismo problema que el DCF de la sesión 02: fórmula sólida, inputs
frágiles.

---

## Por qué se impuso la desviación típica

Si la volatilidad mide mal el riesgo, ¿por qué se usa en todas partes?

La respuesta es histórica y bastante honesta: **porque era lo que se podía
calcular**. En 1952, Harry Markowitz publicó *Portfolio Selection*, el artículo
que funda la teoría moderna de carteras (sesión 48). Necesitaba una medida de
riesgo que fuera un número, que se pudiera sumar entre activos y que permitiera
optimizar. La desviación típica de los retornos cumplía las tres cosas y ninguna
otra candidata lo hacía. Con las herramientas de cálculo de 1952 —a mano, con
tablas— cualquier medida más sofisticada era sencillamente impracticable.

Y hay que reconocerle lo que mide bien:

- Es objetiva y reproducible.
- Captura la dispersión histórica de forma razonable en condiciones normales.
- Se combina limpiamente entre activos mediante covarianzas, que es lo que hace
  posible toda la teoría de carteras.
- Es una aproximación decente al "cuánto se mueve esto" del día a día.

Y ahora lo que mide mal, que es lo que nos importa:

**Trata igual las subidas y las bajadas.** Una acción que sube un 30% en un mes
aporta exactamente la misma "volatilidad" que una que cae un 30%. Para cualquier
inversor real, esas dos cosas no son remotamente equivalentes. Existen medidas
que corrigen esto —la semidesviación, y el **ratio de Sortino** que la usa— pero
la industria sigue reportando desviación típica y Sharpe.

**Asume implícitamente una distribución normal.** Y los retornos financieros no
son normales. Ni de lejos. Esto es lo suficientemente grave como para merecer su
propia sección.

**Es retrospectiva.** Se calcula sobre el pasado. Y la volatilidad tiene una
propiedad tramposa: es baja justo antes de los episodios más peligrosos. Los
periodos de calma prolongada son los que más apalancamiento acumulan, porque
todos los modelos de riesgo dicen que hay poco riesgo. Ese es el mecanismo
central de la hipótesis de inestabilidad financiera de Minsky, que veremos en la
sesión 14: **la estabilidad genera inestabilidad**.

**Es inestable.** Cambia de régimen bruscamente. La volatilidad de los últimos 60
días es un predictor mediocre de la de los próximos 60.

---

## Colas gordas: por qué la campana miente donde más duele

Vamos al dato que mejor ilustra esto.

El 19 de octubre de 1987, el Dow Jones cayó un **22,6% en una sola sesión**. El
S&P 500 cayó alrededor de un 20,5%.

La volatilidad diaria típica de un índice como ese ronda el 1%. Eso significa que
aquel día fue un movimiento de aproximadamente **veinte desviaciones típicas**.

Bajo una distribución normal, un evento de 20 sigmas tiene una probabilidad tan
absurdamente pequeña que no debería haber ocurrido ni una sola vez en la historia
del universo, aunque los mercados llevaran abiertos desde el Big Bang y cotizaran
todos los días. No es que fuera improbable: es que el modelo lo declara
imposible.

Ocurrió. Y no fue un caso aislado: hubo un lunes negro en 1929, un octubre de
2008 con varios días de doble dígito, un marzo de 2020 con caídas del 12% en una
sesión. Los eventos que la campana declara imposibles suceden con una frecuencia
que, aunque baja, es varios órdenes de magnitud superior a lo que predice.

La conclusión técnica es que los retornos financieros tienen **colas gordas**
(*fat tails*): la probabilidad de eventos extremos es mucho mayor que en una
normal. Y esto no es un detalle de refinamiento estadístico, tiene tres
consecuencias prácticas duras:

**Primera: los modelos de riesgo subestiman sistemáticamente el peligro.** El
**VaR** (*Value at Risk*), que es la medida estándar en la industria y en la
regulación bancaria, responde a la pregunta "¿cuánto puedo perder en el 95% de
los casos?". Fíjate en lo que hace: deja fuera precisamente el 5% que te mata. Te
dice dónde está la puerta pero no qué hay detrás. Un VaR bien calculado te da
mucha información sobre los días normales y ninguna sobre el día que importa.

**Segunda: los promedios no describen la experiencia.** Buena parte del retorno
de largo plazo de la renta variable se concentra en un puñado muy pequeño de
sesiones. Y lo mismo, simétricamente, con las pérdidas. Vivir del promedio es
vivir de una ficción estadística.

**Tercera: la cola izquierda importa más que la derecha.** Un evento extremo al
alza te hace ganar dinero. Un evento extremo a la baja puede eliminarte del
juego. La asimetría no está en la distribución, está en las consecuencias. A eso
nos referimos con **left tail**.

Nassim Taleb popularizó el término *black swan* para los eventos de este tipo:
altamente improbables según el modelo vigente, de impacto desproporcionado, y
racionalizados a posteriori como si hubieran sido predecibles. La tercera parte
de la definición es la más incómoda y la que menos se cita.

---

## La aritmética asimétrica de las pérdidas

Aquí hay una tabla que merece la pena tener memorizada. Es aritmética de
primaria y explica más sobre gestión del riesgo que la mayoría de los libros
sobre gestión del riesgo.

| Si pierdes... | Necesitas ganar... para volver al punto de partida |
|---|---|
| 10% | 11,1% |
| 20% | 25,0% |
| 30% | 42,9% |
| 40% | 66,7% |
| **50%** | **100,0%** |
| 60% | 150,0% |
| 70% | 233,3% |
| 80% | 400,0% |
| 90% | 900,0% |

Ganancias y pérdidas no son simétricas, porque se componen multiplicativamente y
no aditivamente. Perder el 50% y ganar el 50% no te deja donde estabas: te deja
un 25% por debajo.

La consecuencia práctica es que **el riesgo no escala linealmente con el
tamaño**. Una pérdida del 20% es un mal año del que se sale. Una del 60% es un
agujero del que probablemente no salgas nunca, no por matemáticas sino por
psicología: casi nadie mantiene la disciplina necesaria durante los años que
requiere un +150%.

Esa curvatura es la razón de que a esa métrica —el **drawdown**, la caída desde
el máximo anterior— se le dé tanta importancia. No es una medida de dispersión:
es una medida de daño acumulado, y de cuánto tienes que recuperar para volver a
estar donde estabas.

---

## Ergodicidad: el concepto que casi nadie te explica

Esta es la parte más importante de la sesión y la que casi ningún curso incluye.

Considera este juego. Lanzas una moneda:

- Cara: tu capital sube un **50%**.
- Cruz: tu capital baja un **40%**.

El valor esperado de una tirada es: 0,5 × (+50%) + 0,5 × (−40%) = **+5%**.
Positivo. Es un juego favorable según la métrica que todo el mundo usa. ¿Deberías
jugarlo con todo tu capital, repetidamente?

Simulemos. Empiezas con 100 € y sale cara y luego cruz:

- 100 × 1,50 = 150
- 150 × 0,60 = **90**

Has perdido dinero. Prueba en el otro orden:

- 100 × 0,60 = 60
- 60 × 1,50 = **90**

Lo mismo. El orden no importa, porque la multiplicación es conmutativa. Cada par
cara-cruz multiplica tu capital por 1,50 × 0,60 = **0,90**.

Es decir: en un juego con valor esperado **+5% por tirada**, tu capital se
reduce un **10% cada dos tiradas**. Repítelo cien veces y estás prácticamente en
cero, con probabilidad que tiende a 1.

¿Dónde está el truco? En que hay dos promedios distintos y no son el mismo:

- **El promedio del conjunto** (*ensemble average*): si mil personas juegan una
  tirada cada una, la media del grupo sube un 5%. Es cierto. Unos pocos ganan
  muchísimo y arrastran la media.
- **El promedio temporal** (*time average*): si **una** persona juega mil
  tiradas, su capital tiende a cero. También es cierto.

Un proceso en el que ambos promedios coinciden se llama **ergódico**. La
multiplicación de capital **no es ergódica**. Y aquí está el problema: casi toda
la teoría financiera clásica está construida sobre valores esperados, es decir,
sobre promedios de conjunto. Pero tú no eres un conjunto. Eres una trayectoria.
Vives una única secuencia de resultados, en orden, sin poder promediarte con
nadie.

El economista Ole Peters ha construido buena parte de un programa de
investigación sobre esta distinción, y conecta directamente con el criterio de
Kelly que veremos mañana en el laboratorio. Pero la conclusión operativa se
puede decir ahora, en una frase:

> **Un valor esperado positivo no basta. Si el tamaño de tu apuesta es demasiado
> grande, un juego favorable te lleva igualmente a la ruina.**

Esto reformula el papel del *sizing*. No es un ajuste fino que se hace al final
para optimizar rendimiento. Es lo que determina si un juego favorable te
enriquece o te arruina. La sesión 46 entera va de esto.

---

## La ruina no es un riesgo más: es una restricción

De todo lo anterior sale la jerarquía correcta.

La volatilidad es una molestia. La pérdida permanente es un coste. La ruina es
**un estado absorbente**: no hay retorno desde ahí. Y eso la saca de la categoría
de "variable a optimizar" y la mete en la de "restricción".

La diferencia importa mucho en la práctica. Una variable a optimizar admite
compensaciones: acepto un poco más de esto a cambio de un poco más de aquello. Una
restricción no: se cumple o no se cumple. Una estrategia con un 99% de
probabilidad de rendir un 40% anual y un 1% de arruinarte no es una estrategia
excelente con un pequeño defecto. Repetida el tiempo suficiente, es una estrategia
que termina en cero con certeza.

En automovilismo hay una frase —Rick Mears la hizo famosa y Buffett la ha citado
más de una vez— que resume esto mejor que cualquier fórmula: *para terminar
primero, primero hay que terminar*. La supervivencia no compite con el retorno;
es la precondición del retorno.

Esto tiene una implicación que suena conservadora y no lo es: **el objetivo no es
maximizar el retorno esperado, sino maximizar el retorno compuesto sujeto a no
salir del juego.** Son problemas de optimización distintos, con soluciones
distintas, y el segundo es el que corresponde a tu situación real.

---

## Cómo pensar el riesgo a partir de hoy

Cuatro preguntas que sustituyen con ventaja a "¿cuál es la volatilidad de
esto?":

1. **¿Qué tendría que pasar para que esto valga cero?** Y después: ¿qué
   probabilidad razonable le doy, sabiendo que voy a subestimarla?
2. **¿Cuál es la peor secuencia, no el peor resultado?** No es lo mismo perder un
   40% de golpe que perder un 8% durante seis años seguidos. La segunda te saca
   por agotamiento aunque el número final sea mejor.
3. **¿Estoy expuesto a algo que no sabía que existía?** Es la pregunta de Knight,
   y no tiene respuesta completa. Pero formularla ya cambia el tamaño de la
   posición.
4. **Si esto sale mal, ¿sigo en el juego?** Si la respuesta es no, ninguna otra
   consideración importa. Es la restricción, y las restricciones no se negocian
   contra el retorno esperado.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Volatility** | Cuánto se mueve un precio. Habitualmente, la desviación típica de sus retornos. |
| **Standard deviation** | Medida de dispersión. Simétrica: castiga igual subir que bajar. |
| **Drawdown** | Caída desde el máximo anterior. Mide daño, no dispersión. |
| **Fat tails** | Eventos extremos mucho más frecuentes de lo que predice una distribución normal. |
| **Left tail** | La cola de las pérdidas extremas. Asimétricamente importante, porque puede eliminarte. |
| **Black swan** | Evento improbable según el modelo vigente, de gran impacto, y racionalizado a posteriori. |
| **Knightian uncertainty** | No conocer la distribución, no solo el resultado. La situación real del mercado. |
| **VaR** | Pérdida máxima con un nivel de confianza dado. Excluye por construcción el escenario que te mata. |
| **Ergodicity** | Coincidencia entre el promedio del conjunto y el promedio temporal. El capital compuesto no la cumple. |
| **Risk of ruin** | Probabilidad de perder la capacidad de seguir operando. Restricción, no variable. |
| **Sortino ratio** | Como el Sharpe, pero penalizando solo la volatilidad a la baja. |

---

## Fallos conocidos: dónde esto te va a engañar

**1. "La volatilidad no es riesgo" se ha convertido en una excusa.** La frase es
correcta y se usa constantemente para justificar no vender algo que cae. Pero un
activo que cae mucho puede estar diciéndote que tu tesis es falsa. Distinguir
"ruido que ignoro" de "información que rechazo" es genuinamente difícil, y la
frase de esta sesión no te ayuda a hacerlo: solo te da un argumento cómodo para
no intentarlo. La defensa es haber escrito de antemano qué evidencia
invalidaría tu tesis (sesión 59).

**2. Las colas gordas no te dicen qué hacer.** Saber que los eventos extremos son
más frecuentes de lo que dice la campana es cierto y poco accionable por sí
solo. Protegerse cuesta dinero de forma continua, y la mayoría de los años ese
dinero se pierde. Las estrategias de cobertura de cola sistemática tienen
históricos que incluyen periodos muy largos de sangrado. Estar en lo cierto sobre
la existencia de las colas no implica que cubrirlas sea rentable.

**3. La ergodicidad se ha convertido en muletilla.** El argumento es correcto y
potente en su dominio —procesos multiplicativos de capital sin reposición— y se
está usando para descartar cualquier análisis basado en valor esperado, lo cual
es excesivo. Si tus apuestas son pequeñas respecto a tu capital total y tienes
ingresos externos, el problema de la no ergodicidad se atenúa mucho. El concepto
importa exactamente en la medida en que apuestas grande.

**4. El drawdown también es retrospectivo.** Que tu máxima caída histórica haya
sido del 20% no significa que 20% sea tu máximo. Significa que aún no has vivido
el escenario que te haría caer un 45%. Todo récord de mínima pérdida es un récord
hasta que deja de serlo, y confiar en él es exactamente el error que describe
Minsky.

**5. Sortino y las medidas asimétricas no resuelven el problema de fondo.**
Corrigen la simetría, pero siguen siendo estimaciones retrospectivas sobre una
distribución desconocida, y con menos datos que la desviación típica —porque solo
usan la mitad de las observaciones—, lo que las hace más ruidosas. Es una mejora
conceptual con un coste estadístico.

**6. Nada de esto te dice cuánto riesgo *deberías* asumir.** Esta sesión es
descriptiva: explica qué es el riesgo y cómo se mide mal. Cuánto te conviene
asumir depende de tu horizonte, tus ingresos, tus obligaciones y tu tolerancia
real —que casi nunca coincide con la declarada—. Ese cálculo es tuyo, y el curso
te dará las herramientas en la sesión 46 sin decidirlo por ti.
