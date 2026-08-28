---
id: "03"
semana: 1
dia: 3
tipo: teoria
titulo: "Riesgo no es volatilidad"
subtitulo: "Tres cosas distintas con el mismo nombre, y la única que puede eliminarte"
duracion_min: 35
conceptos:
  - incertidumbre knightiana
  - colas gordas
  - asimetría del drawdown
  - ergodicidad
  - riesgo de ruina
  - convexidad negativa
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
  - short convexity
  - underwater curve
requisitos: ["01", "02"]
---

# Riesgo no es volatilidad

## Un error de traducción con consecuencias

En finanzas, la palabra "riesgo" se usa para nombrar al menos tres cosas
distintas. La industria las ha fundido en una sola porque una de ellas —la menos
importante— es la única fácil de calcular. Y como es la única que se calcula, es
la única que se gestiona.

Esta sesión trata de separarlas otra vez. Es probablemente la que más va a
cambiar tu forma de decidir, más que ninguna herramienta técnica del curso,
porque **casi todas las ruinas de mercado se explican por haber medido una cosa
y haberse expuesto a otra**.

Las tres son:

**1. Variabilidad.** El precio se mueve mucho. Sube, baja, sube. Esto es
volatilidad.

**2. Pérdida permanente.** El dinero no vuelve. La empresa quiebra, la tesis era
falsa, el activo no era lo que creías. Esto no tiene por qué venir acompañado de
volatilidad: hay activos que bajan tranquilamente hasta cero, sin sobresaltos.

**3. Ruina.** Te quedas sin capital, o sin la capacidad de seguir jugando. Es un
estado absorbente: una vez dentro no hay recuperación posible, por buena que
fuera tu estrategia.

```clave
La jerarquía que casi nadie ordena bien
La variabilidad es una **molestia**. La pérdida permanente es un **coste**. La ruina es un **estado absorbente**.

La industria financiera mide obsesivamente la primera. La que te hace daño de verdad es la segunda. La que te elimina del juego es la tercera. Y las tres se llaman igual.
```

Un caso que separa las tres de un tajo: un activo que cae lentamente durante tres
años, con volatilidad bajísima, hasta valer el 15% de lo que valía. Volatilidad
casi nula. Destrucción casi total del capital. Cualquier medida de riesgo basada
en volatilidad habría dicho que era una posición tranquila hasta el final.

---

## Knight, 1921: riesgo e incertidumbre no son lo mismo

En 1921, el economista Frank Knight publicó *Risk, Uncertainty and Profit* y
trazó una distinción que sigue siendo la más útil que existe sobre este tema.

**Riesgo** es cuando no sabes qué va a pasar, pero **conoces la distribución de
probabilidad**. Una ruleta: no sabes qué número saldrá, pero sabes exactamente
que hay 37 casillas y qué probabilidad tiene cada una. Puedes calcular. Puedes
asegurar. Puedes fijar un precio justo.

**Incertidumbre** es cuando ni siquiera conoces la distribución. No sabes qué
puede pasar, no sabes cuántos resultados posibles hay, y no puedes asignar
probabilidades con fundamento. La aparición de una tecnología, una guerra, un
cambio regulatorio, un fraude que nadie había detectado.

```clave
El mercado es incertidumbre disfrazada de riesgo
Calculamos volatilidades, VaR, betas y correlaciones con cuatro decimales, y esos números presuponen que conocemos la distribución. **No la conocemos.** La estamos estimando a partir de una muestra del pasado, en un sistema que cambia, con participantes que reaccionan al hecho mismo de que estemos midiendo.

Esto no significa que medir sea inútil. Significa saber qué haces cuando mides: estás poniendo un número a una cosa que no es un número. La precisión del cálculo **no se transfiere** a la realidad que describe.
```

Y de la distinción de Knight sale una consecuencia operativa inmediata, que no
es filosófica en absoluto: si conocieras la distribución, el tamaño óptimo de tus
posiciones sería calculable. Como no la conoces, **cualquier óptimo que calcules
está sobreestimado**. Esa es una de las razones del medio-Kelly que veremos en
la sesión 46.

```anecdota
El pavo que era un experto en estadística
Nassim Taleb popularizó una parábola que Bertrand Russell había planteado antes con un pollo. Un pavo es alimentado todos los días por el granjero. Cada día que pasa, la evidencia empírica a favor de la hipótesis "el granjero me quiere" se acumula. Al día 1.000, la confianza estadística del pavo en su bienestar está en máximos históricos: mil observaciones consecutivas, ningún contraejemplo, varianza cero.

Es el día anterior a Acción de Gracias.

El punto no es que el pavo fuera tonto. Es que **su modelo era correcto respecto a los datos disponibles** y aun así catastróficamente equivocado, porque el suceso relevante no estaba en la muestra. Ninguna cantidad de observaciones del pasado le habría avisado.

Guarda esto para la sesión 09, cuando construyas un backtest tramposo. La mayoría de las estrategias que "llevan años funcionando" son pavos con hoja de cálculo.
```

---

## Por qué se impuso la desviación típica

Si la volatilidad mide mal el riesgo, ¿por qué está en todas partes?

La respuesta es histórica y bastante honesta: **porque era lo que se podía
calcular**. En 1952 Harry Markowitz publicó *Portfolio Selection*, el artículo
que funda la teoría moderna de carteras. Necesitaba una medida de riesgo que
fuera un número, que se pudiera sumar entre activos y que permitiera optimizar.
La desviación típica de los retornos cumplía las tres cosas, y ninguna otra
candidata lo hacía. Con las herramientas de 1952 —a mano, con tablas de
logaritmos— cualquier medida más sofisticada era sencillamente impracticable.

Hay que reconocerle lo que mide bien:

- Es objetiva y reproducible: dos personas con los mismos datos obtienen el
  mismo número.
- Captura razonablemente la dispersión histórica en condiciones normales.
- Se combina limpiamente entre activos mediante covarianzas, y eso es lo que
  hace posible toda la teoría de carteras.

Y ahora lo que mide mal, que es lo que nos importa.

**Trata igual las subidas y las bajadas.** Una acción que sube un 30% en un mes
aporta exactamente la misma "volatilidad" que una que cae un 30%. Para cualquier
inversor real esas dos cosas no son remotamente equivalentes. Existen medidas
que corrigen esto —la semidesviación, y el **ratio de Sortino** que la usa— pero
la industria sigue reportando desviación típica y Sharpe.

**Asume implícitamente una distribución normal.** Y los retornos financieros no
son normales. Ni de lejos. Esto merece su propia sección.

**Es retrospectiva, y de forma traicionera.** La volatilidad tiene una propiedad
venenosa: **es baja justo antes de los episodios más peligrosos**.

```grafico
tipo: lineas
titulo: El patrón que se repite: calma prolongada, después el golpe
x: t-24m, t-18m, t-12m, t-6m, t-3m, t-1m, t, t+1m
serie: Volatilidad | 14, 12, 11, 10, 9, 11, 62, 40
serie: Apalancamiento del sistema | 40, 52, 63, 75, 88, 95, 55, 30
formato: 
etiqueta_x: meses respecto al episodio
nota: Esquema conceptual del mecanismo, no una serie histórica concreta. Si el riesgo se mide con volatilidad reciente y esta es baja, todos los sistemas de control permiten más exposición. La calma fabrica el apalancamiento que produce el siguiente episodio.
```

```clave
La estabilidad genera inestabilidad
Es la hipótesis de inestabilidad financiera de Hyman Minsky, y la veremos en detalle en la sesión 14.

Su versión corta: cuando nada malo pasa durante mucho tiempo, la gente concluye —razonablemente, según los datos— que el entorno es seguro, y asume más riesgo. Ese riesgo adicional es lo que convierte el siguiente shock, que habría sido menor, en un desastre.

Las medidas de riesgo basadas en el pasado reciente no solo fallan en predecir la crisis: **contribuyen a causarla**, porque autorizan el apalancamiento en el peor momento posible.
```

---

## Colas gordas: por qué la campana miente donde más duele

Vamos al dato que mejor ilustra esto.

El 19 de octubre de 1987, el Dow Jones cayó un **22,6% en una sola sesión**. El
S&P 500 cayó alrededor de un 20,5%.

La volatilidad diaria típica de un índice así ronda el 1%. Aquel día fue, por
tanto, un movimiento de aproximadamente **veinte desviaciones típicas**.

Bajo una distribución normal, un evento de 20 sigmas tiene una probabilidad tan
absurdamente pequeña que no debería haber ocurrido ni una sola vez en la
historia del universo, aunque los mercados llevaran abiertos desde el Big Bang y
cotizaran todos los días. No es que fuera improbable: **el modelo lo declara
imposible**.

Ocurrió. Y no fue aislado: hubo un lunes negro en 1929, varios días de doble
dígito en octubre de 2008, y una caída del 12% en una sesión en marzo de 2020.

```grafico
tipo: barras
titulo: Días con caídas extremas: lo que predice la campana frente a lo que pasó
etiquetas: Caídas > 3% / predicho, Caídas > 3% / observado, Caídas > 5% / predicho, Caídas > 5% / observado
valores: 1, 8, 0.02, 2.5
formato: 
resaltar: 3
nota: Número aproximado de sesiones por década, órdenes de magnitud. Los eventos moderadamente extremos son varias veces más frecuentes de lo que dice la normal; los muy extremos lo son en varios órdenes de magnitud. La discrepancia crece justo donde más daño hace.
```

La conclusión técnica es que los retornos tienen **colas gordas** (*fat tails*).
Y esto tiene tres consecuencias prácticas duras.

**Primera: los modelos de riesgo subestiman sistemáticamente el peligro.**

```anecdota
El informe de las 4:15 que se convirtió en estándar mundial
A principios de los noventa, Dennis Weatherstone, presidente de JP Morgan, hizo una petición sencilla a sus equipos: quería un único folio, en su mesa a las 16:15 cada día, quince minutos después del cierre, que le dijera cuánto podía perder el banco entero.

De esa exigencia nació el **VaR** tal como lo conocemos, y en 1994 JP Morgan publicó la metodología —RiskMetrics— gratuitamente. Se convirtió en el estándar global y acabó incorporado a la regulación bancaria internacional.

La intención era impecable y el resultado fue ambiguo. El VaR al 95% responde a "¿cuánto puedo perder en el 95% de los casos?", lo que significa que **deja fuera por construcción el 5% que te mata**. Te dice dónde está la puerta, no qué hay detrás. Un VaR bien calculado da mucha información sobre los días normales y ninguna sobre el día que importa.

Cuando llegó 2008, los bancos tenían VaR excelentes. Y aun así ocurrió lo que ocurrió.
```

**Segunda: los promedios no describen la experiencia.** Buena parte del retorno
de largo plazo de la renta variable se concentra en un puñado muy pequeño de
sesiones. Lo mismo, simétricamente, con las pérdidas. Vivir del promedio es vivir
de una ficción estadística.

**Tercera: la cola izquierda importa más que la derecha.** Un evento extremo al
alza te hace ganar dinero. Uno a la baja puede eliminarte del juego. **La
asimetría no está en la distribución, está en las consecuencias.** A eso nos
referimos con **left tail**.

Taleb popularizó el término *black swan* para estos eventos: altamente
improbables según el modelo vigente, de impacto desproporcionado, y racionalizados
a posteriori como si hubieran sido predecibles. La tercera parte de la definición
es la más incómoda y la que menos se cita.

---

## La aritmética asimétrica de las pérdidas

Aquí hay una tabla que merece la pena tener memorizada. Es aritmética de primaria
y explica más sobre gestión del riesgo que la mayoría de los libros sobre gestión
del riesgo.

```grafico
tipo: barras
titulo: Lo que necesitas ganar para volver al punto de partida
etiquetas: Pierdes / 10%, Pierdes / 30%, Pierdes / 50%, Pierdes / 70%, Pierdes / 90%
valores: 11.1, 42.9, 100, 233.3, 900
formato: %
resaltar: 4
nota: Ganancias y pérdidas no son simétricas porque se componen multiplicativamente. Perder el 50% y ganar después el 50% no te deja donde estabas: te deja un 25% por debajo.
```

| Si pierdes... | Necesitas ganar... |
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

La consecuencia práctica es que **el riesgo no escala linealmente con el
tamaño**. Una pérdida del 20% es un mal año del que se sale. Una del 60% es un
agujero del que probablemente no salgas nunca, y no por matemáticas sino por
psicología: casi nadie mantiene la disciplina durante los años que requiere un
+150%.

Por eso al **drawdown** —la caída desde el máximo anterior— se le da tanta
importancia. No es una medida de dispersión: es una medida de daño acumulado. Y
su compañera, la **underwater curve**, mide algo aún más relevante: cuánto
tiempo pasas por debajo de tu máximo anterior. Hay estrategias con drawdowns
moderados que te tienen ocho años bajo el agua, y ocho años es más de lo que casi
nadie aguanta sin abandonar.

---

## Los cuatro caminos hacia la pérdida permanente

Hemos dicho que la pérdida permanente es el riesgo que de verdad te cuesta
dinero. Conviene entonces saber por dónde llega, porque son cuatro rutas
distintas y cada una se previene de forma diferente.

**1. El negocio se deteriora de forma irreversible.** La empresa pierde su
ventaja competitiva, su producto queda obsoleto, su sector desaparece. El valor
no vuelve porque no hay nada que vuelva. Se previene con análisis del negocio, y
es de lo que trata todo el mes 2.

**2. La estructura de capital te barre.** El negocio sobrevive pero tú no. La
empresa se reestructura, los acreedores se quedan con el control y los
accionistas —últimos en la cola— son diluidos hasta la irrelevancia o
directamente eliminados. Ocurrió masivamente en 2008 y 2020 con empresas que hoy
siguen operando perfectamente. Se previene mirando la deuda, no solo el negocio.

**3. Pagaste demasiado.** El negocio va bien, crece, cumple. Pero pagaste un
precio que descontaba una perfección aún mayor. Puedes acertar completamente con
la empresa y perder dinero durante una década. Se previene con valoración, mes 2.

**4. Te obligaron a vender.** El activo se recupera, pero tú no estabas ahí
cuando ocurrió, porque una llamada de margen, una necesidad de liquidez o el
agotamiento psicológico te sacaron antes. Esta es la más cruel porque no depende
del activo en absoluto: depende de tu estructura y de tu cabeza.

```clave
La cuarta ruta es la única enteramente tuya
Las tres primeras dependen del activo y del precio. La cuarta depende **solo de ti**: de cuánto apalancamiento usas, de qué parte de tu patrimonio comprometes, de qué horizonte real tienes frente al que dices tener.

Y es, con diferencia, la más frecuente entre inversores particulares con buen criterio. Mucha gente que tenía razón sobre un activo no cobró por tenerla, simplemente porque su posición era demasiado grande para aguantar el camino.

Es la única ruta que puedes cerrar por completo con una decisión que está enteramente en tu mano: el tamaño.
```

---

## Coberturas: qué compras realmente cuando compras protección

Ya que hemos hablado de las colas, conviene aclarar qué se puede hacer con
ellas, porque hay bastante confusión y esto prepara la semana 4.

Una cobertura es un contrato que te paga precisamente en los escenarios que te
harían daño. La forma más habitual es comprar una opción put: te da derecho a
vender a un precio fijo, así que si el activo se desploma, tu pérdida está
acotada.

Suena a solución perfecta. No lo es, por una razón sencilla: **cuesta dinero, y
lo cuesta todo el tiempo**.

Piénsalo como el seguro del coche. Pagas todos los años. La mayoría de los años
no cobras nada, y eso no significa que el seguro fuera un error: significa que no
tuviste un accidente. Pero en una cartera de inversión ese coste continuo se
compone en tu contra, exactamente igual que la comisión que calcularás mañana.

```grafico
tipo: lineas
titulo: Coste acumulado de una cobertura permanente frente al activo sin cubrir
x: año 1, año 3, año 5, año 7, año 9, crisis
serie: Cartera sin cubrir | 108, 126, 147, 171, 200, 130
serie: Cartera cubierta | 105, 116, 128, 141, 156, 140
formato: 
etiqueta_x: la crisis llega en el año 10
nota: Ilustración conceptual. La cobertura cuesta rentabilidad todos los años y solo compensa si la crisis llega pronto y es lo bastante severa. Cuanto más tardes en necesitarla, peor el balance. Por eso la cobertura sistemática es una decisión mucho menos obvia de lo que parece.
```

Existen tres respuestas razonables al problema de las colas, y conviene conocer
las tres:

**Cubrirse explícitamente**, comprando protección. Cuesta rentabilidad de forma
continua y garantiza que sobrevives al episodio.

**Reducir el tamaño.** Menos exposición significa que el evento extremo duele
menos. Es gratis en comisiones y cuesta rentabilidad esperada. Es la que usa la
mayoría de la gente sensata.

**Estructurar la posición para que la cola te beneficie.** En lugar de estar
corto de convexidad como Niederhoffer, estar largo: perder poco muchas veces y
ganar mucho de vez en cuando. Es psicológicamente muy difícil de sostener y es
lo que hacen los fondos de trend following que veremos en la sesión 51.

```clave
No existe la opción de eliminar el riesgo, solo de elegir su forma
Puedes tener pérdidas pequeñas y frecuentes con una gran ganancia ocasional, o ganancias pequeñas y frecuentes con una gran pérdida ocasional. Puedes reducir el tamaño de todo. Lo que no puedes es tener rentabilidad sin exposición.

La pregunta útil no es "¿cómo elimino el riesgo?" sino **"¿qué forma de riesgo puedo sostener durante los años que hagan falta?"**. Y la respuesta es tan psicológica como matemática.
```

---

## Ergodicidad: el concepto que casi nadie te explica

Esta es la parte más importante de la sesión y la que casi ningún curso incluye.

Considera este juego. Lanzas una moneda:

- Cara: tu capital sube un **50%**.
- Cruz: tu capital baja un **40%**.

El valor esperado de una tirada es 0,5 × (+50%) + 0,5 × (−40%) = **+5%**.
Positivo. Es un juego favorable según la métrica que todo el mundo usa.
¿Deberías jugarlo con todo tu capital, repetidamente?

Simulemos. Empiezas con 100 € y sale cara y luego cruz:

- 100 × 1,50 = 150
- 150 × 0,60 = **90**

Has perdido dinero. En el otro orden: 100 × 0,60 = 60, y 60 × 1,50 = **90**. Lo
mismo, porque la multiplicación es conmutativa. Cada par cara-cruz multiplica tu
capital por 1,50 × 0,60 = **0,90**.

Es decir: en un juego con valor esperado de **+5% por tirada**, tu capital se
reduce un **10% cada dos tiradas**. Repítelo cien veces y estás prácticamente en
cero, con probabilidad que tiende a 1.

```grafico
tipo: lineas
titulo: El mismo juego favorable, dos formas de mirarlo
x: 0, 20, 40, 60, 80, 100
serie: Media del conjunto | 1, 2.7, 7.0, 18.7, 49.6, 131.5
serie: Trayectoria típica (mediana) | 1, 0.81, 0.66, 0.53, 0.43, 0.35
formato: x
etiqueta_x: número de tiradas
nota: La media sube porque unas poquísimas trayectorias ganan cantidades enormes y arrastran el promedio. La mediana —lo que le pasa a una persona normal— cae hacia cero. Ambas cifras son correctas y describen cosas distintas.
```

¿Dónde está el truco? En que hay **dos promedios distintos** y no son el mismo:

- **El promedio del conjunto** (*ensemble average*): si mil personas juegan una
  tirada cada una, la media del grupo sube un 5%. Cierto.
- **El promedio temporal** (*time average*): si **una** persona juega mil
  tiradas, su capital tiende a cero. También cierto.

Un proceso en el que ambos coinciden se llama **ergódico**. La multiplicación de
capital **no es ergódica**.

```clave
Tú no eres un conjunto. Eres una trayectoria
Casi toda la teoría financiera clásica está construida sobre valores esperados, es decir, sobre promedios de conjunto. Pero tú vives una única secuencia de resultados, en orden, sin poder promediarte con nadie.

**Un valor esperado positivo no basta.** Si el tamaño de tu apuesta es demasiado grande, un juego favorable te lleva igualmente a la ruina.

Esto reformula el papel del *sizing*: no es un ajuste fino que se hace al final para optimizar. Es lo que determina si un juego favorable te enriquece o te arruina. La sesión 46 entera va de esto, y el laboratorio de mañana te lo hará ver con tus propias manos.
```

El economista Ole Peters ha construido buena parte de un programa de
investigación sobre esta distinción, y conecta directamente con el criterio de
Kelly. Pero la conclusión operativa ya la tienes.

---

## Convexidad negativa: el perfil que parece genial hasta que no

Hay una forma concreta de exposición al riesgo que merece nombre propio porque
es donde más gente competente se ha arruinado: **ganar poco muy a menudo y
perder muchísimo muy de vez en cuando**.

Se llama **convexidad negativa** (*short convexity*), y en el argot del oficio
tiene una descripción más gráfica: recoger monedas delante de una apisonadora.

El problema es que este perfil produce, durante mucho tiempo, exactamente las
señales que interpretamos como calidad:

- Alta tasa de acierto: ganas el 90% de los meses.
- Baja volatilidad: los resultados son consistentes.
- Curva de resultados casi recta y ascendente.
- Sharpe elevadísimo.

Y todas esas señales son **consecuencias mecánicas del perfil**, no evidencia de
habilidad. La pérdida no ha ocurrido todavía; eso es todo.

```anecdota
El hombre que quebró dos veces con el mismo error
Victor Niederhoffer no era un aficionado. Doctor por Chicago, campeón nacional de squash, socio de George Soros, autor de un libro celebrado sobre especulación, y nombrado el mejor gestor de fondos de futuros del mundo en 1996 por una publicación del sector.

Su estrategia incluía vender opciones put sobre el S&P 500 muy fuera de dinero: cobras una prima pequeña a cambio de asegurar a otro contra una caída grande. Mientras el mercado no se desplome, cobras todos los meses. Funcionó durante años.

El 27 de octubre de 1997, el contagio de la crisis asiática hizo caer el S&P alrededor de un 7% en una sesión. Sus puts, que valían casi nada, pasaron a valer una fortuna. No pudo cubrir las llamadas de margen. Su fondo fue liquidado y perdió el patrimonio de sus clientes y el suyo propio, incluida su colección de plata, que tuvo que vender.

Volvió. Levantó un nuevo fondo, con excelentes resultados durante varios años. Y en 2007, con el estallido de la crisis financiera, volvió a quebrar.

La lección no es que fuera imprudente por ignorancia: sabía más estadística que la mayoría. Es que **el perfil de convexidad negativa produce, hasta el día del desastre, exactamente las mismas señales que la excelencia.** No hay forma de distinguirlos mirando la curva de resultados.
```

Este caso vuelve en el examen del viernes. Y vuelve en la sesión 18, cuando
veamos por qué vender opciones es estructuralmente rentable y aun así arruina a
tanta gente, y en la 58, cuando aprendas a detectar este perfil en el track
record de un fondo antes de que reviente.

---

## Los riesgos que no aparecen en ningún modelo

Hay dos que merecen mención propia porque son invisibles en las medidas
estándar y son responsables de una parte desproporcionada de los desastres.

### Riesgo de liquidez

Un activo puede tener un precio y no tener comprador. Son cosas distintas, y la
diferencia solo se manifiesta cuando intentas vender.

En condiciones normales, la diferencia entre el precio al que puedes comprar y
al que puedes vender es pequeña. Pero esa diferencia **no es una constante**:
se ensancha exactamente cuando todo el mundo quiere lo mismo que tú. En marzo
de 2020 hubo momentos en que bonos corporativos de máxima calidad —y hasta
algunos bonos del Tesoro— tenían horquillas absurdas o directamente no se podían
vender en tamaño.

La trampa es que el riesgo de liquidez **no aparece en la volatilidad histórica**
mientras hay liquidez. Un activo poco líquido incluso parece *menos* volátil,
porque cotiza poco y sus precios se actualizan con retraso. Los inmuebles, el
capital riesgo y los fondos que valoran sus posiciones internamente exhiben
volatilidades bajísimas que son en buena medida un artefacto de medición.

```clave
Volatilidad baja por iliquidez no es tranquilidad: es información retrasada
Si un activo no cotiza, no puede mostrar volatilidad. Eso no significa que su valor no se esté moviendo; significa que no lo estás viendo.

Cuando llegues a la sesión 58 y aprendas a leer el track record de un fondo, esto será una de las primeras banderas rojas: una curva de resultados demasiado suave suele indicar valoración interna, no habilidad.
```

### Riesgo de correlación

El segundo invisible: tus posiciones parecen independientes hasta que dejan de
serlo.

Las correlaciones históricas se calculan sobre periodos normales, que son la
mayoría de los datos. Pero en los episodios de estrés las correlaciones **suben
hacia 1**: todo cae a la vez, porque lo que mueve el precio ya no son los
fundamentales de cada activo sino la necesidad de liquidez de los mismos
tenedores, que venden lo que pueden, no lo que quieren.

Es decir: la diversificación funciona todos los días excepto el día que la
necesitas. La sesión 47 va entera de esto, con datos de 2008 y 2020.

---

## Riesgo de secuencia: el mismo resultado, distinto desenlace

Este concepto es poco conocido y afecta a cualquiera que aporte o retire dinero
de forma periódica, que es casi todo el mundo.

Imagina dos personas con la misma cartera, el mismo retorno medio y el mismo
número de años. La única diferencia es **el orden en que ocurren los buenos y los
malos años**. Si no aportan ni retiran nada, terminan exactamente igual: la
multiplicación es conmutativa, como vimos.

Pero si están retirando dinero para vivir, el resultado cambia radicalmente.
Sufrir las caídas fuertes al principio, mientras el capital todavía es grande y
además estás retirando, deja un capital reducido que ya no puede recuperarse en
los años buenos posteriores.

| | Caídas al principio | Caídas al final |
|---|---|---|
| Retorno medio | idéntico | idéntico |
| Orden de los años | malo → bueno | bueno → malo |
| Capital final retirando dinero | muy reducido | conservado |

```clave
El promedio no basta cuando hay flujos de entrada o salida
Con la cartera quieta, solo importa la media geométrica. En cuanto aportas o retiras periódicamente, **el orden importa**, y puede ser la diferencia entre llegar y no llegar.

Es otra manifestación de la misma idea de hoy: tú vives una secuencia concreta, no una distribución. Los promedios describen conjuntos; las trayectorias tienen orden.
```

---

## Cómo mide la industria, y por qué conviene desconfiar

Un apunte sobre la métrica que más vas a encontrar: el **ratio de Sharpe**.
Mide el exceso de retorno sobre el activo sin riesgo, dividido por la volatilidad.
Es decir: rentabilidad por unidad de variabilidad.

Es útil y tiene cuatro problemas que debes conocer desde ahora, porque volverás
a ellos en la sesión 58:

**Usa volatilidad como denominador**, con todo lo que hemos visto hoy: castiga
las subidas igual que las bajadas y presupone una distribución que no se cumple.

**Premia la convexidad negativa.** Una estrategia que gana poco casi siempre y
pierde mucho rara vez tiene volatilidad baja mientras no ocurre el desastre, y
por tanto un Sharpe altísimo. El Sharpe de Niederhoffer antes de 1997 era
excelente. Es una métrica que **no puede ver** el riesgo que más importa.

**Es muy sensible al periodo elegido.** Cambia la fecha de inicio unos meses y el
Sharpe de casi cualquier estrategia se mueve de forma sustancial.

**Necesita muchos datos para significar algo.** Con tres años de historia, el
error de estimación del Sharpe es tan grande que no distingue entre una
estrategia buena y una mediocre.

```clave
Ninguna métrica de una sola cifra puede resumir el riesgo
Y sin embargo la industria entera funciona a base de cifras únicas, porque hay que comparar miles de productos y las tablas necesitan una columna.

La defensa no es rechazar las métricas: es **mirar siempre la forma de la distribución**, no solo su resumen. Dos estrategias con el mismo Sharpe pueden tener perfiles de riesgo opuestos, y la diferencia solo se ve al mirar los peores meses, la duración de los drawdowns y qué pasó en los episodios de estrés conocidos.
```

---

## La ruina no es un riesgo más: es una restricción

De todo lo anterior sale la jerarquía correcta.

La ruina es **un estado absorbente**: no hay retorno desde ahí. Y eso la saca de
la categoría de "variable a optimizar" y la mete en la de "restricción".

La diferencia importa mucho en la práctica. Una variable a optimizar admite
compensaciones: acepto un poco más de esto a cambio de un poco más de aquello.
Una restricción no: se cumple o no se cumple.

Considera una estrategia con un 99% de probabilidad de rendir un 40% anual y un
1% de arruinarte, cada año. Suena excelente. Haz el cálculo:

| Horizonte | Probabilidad de seguir vivo |
|---|---|
| 10 años | 90% |
| 20 años | 82% |
| 30 años | 74% |
| 50 años | 61% |
| 100 años | 37% |

No es una estrategia excelente con un pequeño defecto. Es una estrategia que,
repetida el tiempo suficiente, termina en cero.

```clave
Para terminar primero, primero hay que terminar
La frase viene del automovilismo —Rick Mears la hizo famosa, y Buffett la ha citado más de una vez— y resume esto mejor que cualquier fórmula.

El objetivo no es maximizar el retorno esperado. Es **maximizar el retorno compuesto sujeto a no salir del juego**. Son problemas de optimización distintos, con soluciones distintas, y el segundo es el que corresponde a tu situación real.

La supervivencia no compite con el retorno: es su precondición.
```

---

```anecdota
Dos premios Nobel, apalancamiento 25 a 1, y cuatro meses
Long-Term Capital Management se fundó en 1994 con el equipo más impresionante que ha reunido nunca un fondo: John Meriwether, la leyenda de la mesa de bonos de Salomon Brothers, y en el consejo Myron Scholes y Robert Merton, que recibirían el Nobel de Economía en 1997 por el modelo de valoración de opciones que estudiarás en la sesión 37.

Su estrategia era intelectualmente impecable: detectar pequeñas desviaciones de precio entre activos casi idénticos —como la anomalía de Royal Dutch/Shell que viste el lunes— y apostar a que convergerían. Cada operación tenía una ventaja diminuta y un riesgo aparentemente ínfimo. Para que esas migajas fueran un negocio, había que apalancarse mucho: llegaron a operar con un balance del orden de 25 veces su capital, y una exposición nocional en derivados muchísimo mayor.

Sus modelos de riesgo decían que la probabilidad de perder todo el capital en un año era prácticamente nula. Estaban calibrados con datos de los años anteriores.

En agosto de 1998, Rusia suspendió pagos de su deuda interna. Los inversores de todo el mundo huyeron simultáneamente hacia lo más seguro y líquido. Las desviaciones que LTCM esperaba que se cerraran se **ampliaron**, todas a la vez, porque estaban correlacionadas por un factor que no aparecía en ningún modelo: quién las tenía. En cuatro meses perdieron alrededor del 90% del capital. La Reserva Federal de Nueva York tuvo que coordinar un rescate entre catorce bancos por temor a que la liquidación desordenada arrastrara al sistema.

Aquí están casi todas las lecciones de la sesión, juntas: colas gordas, correlaciones que van a 1 cuando importa, riesgo de liquidez, volatilidad baja que autoriza apalancamiento, y una restricción de ruina tratada como si fuera una variable a optimizar.

Y una lección adicional, más incómoda: **tenían razón**. Casi todas sus posiciones acabaron convergiendo, tal como predecían sus modelos. Simplemente ocurrió después de que se quedaran sin capital para sostenerlas. Volveremos a este caso con detalle en la sesión 12.
```

---

## El riesgo que introduces tú

Todo lo anterior trata de riesgos que están en los activos. Falta el que aportas
tú, y que en la práctica es el mayor de todos para un inversor particular.

No hablo de "falta de disciplina" en abstracto. Hablo de tres mecanismos
concretos y medibles, que veremos con datos en la sesión 49:

**Vender lo que sube y aguantar lo que baja.** Está documentado en millones de
cuentas reales y tiene nombre: efecto de disposición. Realizar ganancias
pequeñas se siente como acertar; realizar pérdidas se siente como admitir un
error. El resultado agregado es cortar las ganadoras y acumular las perdedoras,
que es exactamente lo contrario de lo que haría un sistema con expectativa
positiva.

**Aumentar el tamaño después de una racha buena.** Justo cuando la volatilidad
medida es baja y tu confianza es alta, que suele ser el peor momento posible. Es
Minsky aplicado a una sola persona.

**Abandonar una estrategia durante su peor racha.** Toda estrategia con ventaja
real atraviesa periodos largos de resultados malos. Si abandonas en ellos,
capturas todos los drawdowns y ninguna de las recuperaciones. La rentabilidad de
tu estrategia y la rentabilidad que tú obtienes de ella son cifras distintas, y
la diferencia tiene nombre: *behavior gap*.

```clave
La restricción real no es cuánto riesgo soportas: es cuánto soportas durante cuánto tiempo
Casi todo el mundo declara una tolerancia al riesgo mayor que la que demuestra. No por mentir: porque imaginar un −40% y vivirlo durante dieciocho meses, con noticias diarias y opiniones de todo el mundo alrededor, son experiencias distintas.

El diseño honesto de una cartera parte de la tolerancia **demostrada**, no de la declarada. Y si no tienes historial suficiente para conocerla, la decisión prudente es asumir que es menor de lo que crees.
```

```anecdota
El operador de 28 años que hundió un banco de 233 años
Barings era el banco mercantil más antiguo de Inglaterra. Había financiado las guerras napoleónicas y la compra de Luisiana. La reina era clienta.

En su oficina de Singapur, Nick Leeson operaba arbitraje entre futuros del índice Nikkei en dos mercados: una estrategia de bajo riesgo que aprovecha diferencias mínimas de precio. Pero Leeson controlaba a la vez la mesa de operaciones y la oficina de liquidación, lo que le permitía registrar sus propias operaciones. Cuando empezó a perder, escondió las pérdidas en una cuenta de errores —la célebre cuenta 88888— y, en lugar de cerrar posiciones, las aumentó para intentar recuperar.

Su apuesta final fue una posición corta en volatilidad sobre el Nikkei: ganaría si el índice se mantenía estable. El 17 de enero de 1995, un terremoto devastó Kobe. El Nikkei se desplomó. Leeson dobló la apuesta intentando sostener el índice con su propio volumen de compra.

Perdió unos 827 millones de libras, más del doble del capital del banco. Barings fue vendido por una libra simbólica.

Están casi todos los conceptos de la sesión: convexidad negativa —vender volatilidad—, un evento de cola imposible de anticipar, una medida de riesgo que no veía nada porque los controles habían sido burlados, y sobre todo el comportamiento humano de doblar la apuesta para no admitir la pérdida. Ningún modelo estadístico habría capturado el elemento decisivo: que la misma persona hacía las operaciones y las contabilizaba.
```

---

## Cómo pensar el riesgo a partir de hoy

Cuatro preguntas que sustituyen con ventaja a "¿cuál es la volatilidad de esto?":

1. **¿Qué tendría que pasar para que esto valga cero?** Y después: ¿qué
   probabilidad razonable le doy, sabiendo que voy a subestimarla?
2. **¿Cuál es la peor secuencia, no el peor resultado?** No es lo mismo perder un
   40% de golpe que perder un 8% durante seis años seguidos. La segunda te saca
   por agotamiento aunque el número final sea mejor.
3. **¿Estoy expuesto a algo que no sabía que existía?** Es la pregunta de Knight
   y no tiene respuesta completa. Pero formularla ya cambia el tamaño de la
   posición.
4. **Si esto sale mal, ¿sigo en el juego?** Si la respuesta es no, ninguna otra
   consideración importa.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Volatility** | Cuánto se mueve un precio. Habitualmente, la desviación típica de sus retornos. |
| **Standard deviation** | Medida de dispersión. Simétrica: castiga igual subir que bajar. |
| **Drawdown** | Caída desde el máximo anterior. Mide daño, no dispersión. |
| **Underwater curve** | Cuánto tiempo llevas por debajo de tu máximo anterior. Lo que de verdad agota. |
| **Fat tails** | Eventos extremos mucho más frecuentes de lo que predice una distribución normal. |
| **Left tail** | La cola de las pérdidas extremas. Asimétricamente importante: puede eliminarte. |
| **Black swan** | Evento improbable según el modelo vigente, de gran impacto, racionalizado a posteriori. |
| **Knightian uncertainty** | No conocer la distribución, no solo el resultado. La situación real del mercado. |
| **VaR** | Pérdida máxima con un nivel de confianza dado. Excluye por construcción el escenario que te mata. |
| **Ergodicity** | Coincidencia entre promedio del conjunto y promedio temporal. El capital compuesto no la cumple. |
| **Risk of ruin** | Probabilidad de perder la capacidad de seguir operando. Restricción, no variable. |
| **Sortino ratio** | Como el Sharpe, pero penalizando solo la volatilidad a la baja. |
| **Short convexity** | Ganar poco a menudo y perder mucho rara vez. Produce las señales de la excelencia hasta que revienta. |

---

## Fallos conocidos: dónde esto te va a engañar

**1. "La volatilidad no es riesgo" se ha convertido en una excusa.** La frase es
correcta y se usa constantemente para justificar no vender algo que cae. Pero un
activo que cae mucho puede estar diciéndote que tu tesis es falsa. Distinguir
"ruido que ignoro" de "información que rechazo" es genuinamente difícil, y la
frase de hoy no te ayuda a hacerlo: solo te da un argumento cómodo para no
intentarlo. La única defensa real es haber escrito **de antemano** qué evidencia
invalidaría tu tesis. Sesión 59.

**2. Las colas gordas no te dicen qué hacer.** Saber que los eventos extremos son
más frecuentes de lo que dice la campana es cierto y poco accionable por sí solo.
Protegerse cuesta dinero de forma continua, y la mayoría de los años ese dinero
se pierde. Las estrategias de cobertura de cola sistemática tienen históricos con
periodos muy largos de sangrado. Estar en lo cierto sobre la existencia de las
colas no implica que cubrirlas sea rentable.

**3. La ergodicidad se ha convertido en muletilla.** El argumento es correcto y
potente en su dominio —procesos multiplicativos de capital sin reposición— y se
está usando para descartar cualquier análisis basado en valor esperado, lo cual
es excesivo. Si tus apuestas son pequeñas respecto a tu capital total y tienes
ingresos externos, el problema se atenúa mucho. El concepto importa exactamente
en la medida en que apuestas grande.

**4. El drawdown también es retrospectivo.** Que tu máxima caída histórica haya
sido del 20% no significa que 20% sea tu máximo. Significa que **aún no has
vivido** el escenario que te haría caer un 45%. Todo récord de mínima pérdida es
un récord hasta que deja de serlo, y confiar en él es exactamente el error de
Minsky y del pavo.

**5. Sortino y las medidas asimétricas no resuelven el problema de fondo.**
Corrigen la simetría, pero siguen siendo estimaciones retrospectivas sobre una
distribución desconocida, y con **menos datos** que la desviación típica —solo
usan la mitad de las observaciones—, lo que las hace más ruidosas. Es una mejora
conceptual con un coste estadístico.

**6. Identificar la convexidad negativa no te dice cuándo saldrá mal.**
Niederhoffer habría estado "equivocado" durante años si alguien hubiera dicho en
1993 que su estrategia iba a reventar. El diagnóstico es sobre la *forma* de la
exposición, no sobre el *momento*. Sirve para dimensionar la posición, no para
elegir el instante de salir.

**7. Nada de esto te dice cuánto riesgo *deberías* asumir.** Esta sesión es
descriptiva: explica qué es el riesgo y cómo se mide mal. Cuánto te conviene
asumir depende de tu horizonte, tus ingresos, tus obligaciones y tu tolerancia
real —que casi nunca coincide con la declarada—. Ese cálculo es tuyo, y el curso
te dará las herramientas en la sesión 46 sin decidirlo por ti.
