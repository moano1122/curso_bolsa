---
id: "02"
semana: 1
dia: 2
tipo: teoria
titulo: "El tipo de interés como gravedad"
subtitulo: "Cómo se convierte el futuro en presente, y por qué un cuarto de punto reprecia el planeta"
duracion_min: 38
conceptos:
  - valor temporal del dinero
  - descuento y capitalización
  - perpetuidad y modelo de Gordon
  - duración
  - tipo real vs nominal
  - tasa libre de riesgo
  - DCF inverso
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
  - reverse DCF
  - TINA
  - rule of 72
requisitos: ["01"]
simuladores:
  - descuento
---

# El tipo de interés como gravedad

## La pregunta de ayer que quedó abierta

Ayer terminamos con una acción que cae un 8% el día que la Reserva Federal sube
tipos, pese a que la empresa no tiene ni un euro de deuda. Ningún flujo de caja
de esa compañía ha cambiado. Ningún cliente ha cancelado nada. Ningún competidor
ha hecho nada. Y sin embargo el precio se mueve, y se mueve mucho.

La explicación completa está en esta sesión, y no es una curiosidad técnica: es
probablemente el mecanismo más importante de todo el mercado. Buffett lo ha
formulado en varias ocasiones diciendo que los tipos de interés actúan sobre las
valoraciones financieras como la gravedad actúa sobre la materia. Es una
metáfora buena, y como toda metáfora buena se puede repetir sin entenderla. Al
final de la sesión vas a poder decir exactamente qué significa en aritmética, y
vas a poder calcular su efecto en una servilleta.

La cadena lógica es corta y no tiene escapatoria:

1. El valor de un activo es lo que produce en el futuro (sesión 01).
2. El futuro hay que traerlo al presente para poder compararlo con un precio de
   hoy.
3. Esa conversión se hace con una tasa.
4. Esa tasa está anclada al tipo de interés.
5. Luego si el tipo de interés se mueve, **el valor de todo se mueve a la vez**,
   sin que haya pasado nada en ningún negocio concreto.

El punto 5 es la gravedad. Y como la gravedad, no actúa sobre un objeto: actúa
sobre todos simultáneamente, con intensidad proporcional a una propiedad de cada
uno. En física esa propiedad es la masa. Aquí es algo que se llama duración, y
llegaremos a ello a mitad de sesión.

---

## Por qué 100 euros de hoy no son 100 euros del año que viene

Empecemos por la intuición, que aquí es sólida y no engaña.

Si te doy a elegir entre 100 euros ahora o 100 euros dentro de un año, eliges
ahora. Todo el mundo elige ahora. Pero conviene tener claro **por qué**, porque
las tres razones son distintas y cada una reaparece más adelante en el curso.

**Preferencia temporal.** Prefieres consumir antes que después. Es una
característica de las personas, no de los mercados, y existiría aunque no
hubiese inflación ni riesgo alguno.

**Coste de oportunidad.** Con esos 100 euros hoy puedes hacer algo: letras del
Tesoro, un depósito, un negocio. Si esperas un año, renuncias a eso. Este es el
componente que conecta con el mercado, y el que se mueve cuando el banco central
actúa.

**Riesgo.** El dinero futuro es una promesa, y las promesas se incumplen.

Cuando juntas las tres aparece un número: **la tasa a la que estás dispuesto a
cambiar dinero futuro por dinero presente**. Eso es un tipo de interés. No es un
invento de los bancos ni una imposición del banco central: es el precio del
tiempo, y existe desde que existe el crédito.

```anecdota
El interés es más antiguo que la moneda
En las tablillas de arcilla de Mesopotamia, tres mil años antes de que existiera ningún banco central, ya aparecen préstamos de grano y de plata con tipos de interés especificados. El Código de Hammurabi, hacia 1750 a.C., no inventa el interés: lo **regula**, fijando máximos legales —en torno al 33% para el grano y al 20% para la plata— porque ya existía y ya generaba abusos.

Curiosamente, la palabra sumeria para interés era *mash*, que significaba "cría de ganado". La lógica era literal y hermosa: si te presto una vaca, al cabo de un año me devuelves la vaca y además su ternero, porque la vaca ha estado produciendo mientras la tenías tú. El interés no era un cobro abusivo, era la parte del rendimiento que correspondía al dueño del capital.

Esa intuición ganadera es exactamente la que necesitas para el resto de la sesión: el dinero prestado trabaja, y el interés es lo que produce mientras trabaja.
```

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
porque la primera la usamos a diario —un depósito, una hipoteca— y la segunda es
la que hace falta para valorar.

La tasa `r` que usas para descontar tiene nombre: **tasa de descuento**
(*discount rate*). Y contiene dos cosas apiladas:

```clave
La anatomía de una tasa de descuento
**tasa de descuento = tipo libre de riesgo + prima de riesgo**

El primer sumando es lo que te paga el Estado por prestarle dinero sin riesgo de impago apreciable. El segundo es lo que exiges **de más** por asumir la incertidumbre de un negocio concreto.

De la primera se ocupa esta sesión: es observable, la publica el mercado cada segundo. De la segunda se ocupan las sesiones 27 y 48, y ahí está el problema: **no es observable**. Te la inventas tú, con métodos discutibles. Toda valoración por descuento arrastra esa arbitrariedad.
```

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
idénticos. **El descuento pesa el futuro cada vez menos**, y lo hace de forma
acelerada.

Sube ahora la tasa del 8% al 10% y repite: el total pasa de 39,93 a 37,91, un 5%
menos. Nadie ha tocado los flujos. Solo hemos cambiado el precio del tiempo.

Ese 5% es la gravedad, en pequeño. Ahora vamos a ver por qué en la realidad es
mucho mayor.

### Un atajo mental que vale la pena tener

```clave
La regla del 72
Divide 72 entre el tipo de interés y obtienes, aproximadamente, los años que tarda tu dinero en **duplicarse**.

Al 6% → 72/6 = **12 años**. Al 9% → 8 años. Al 3% → 24 años.

Funciona igual al revés: al 6% de inflación, tu poder adquisitivo se **reduce a la mitad** en 12 años. Y con comisiones: un 1,5% anual de coste consume la mitad de... bueno, eso lo calcularás tú mismo en el laboratorio del jueves, y el número te va a molestar.

Es una aproximación, no una identidad, pero para estimaciones de cabeza es excelente y no necesitas calculadora. Es de las pocas cosas de este curso que conviene memorizar literalmente.
```

---

## El interés compuesto: la fuerza que no se ve venir

Antes de seguir con la valoración, conviene detenerse en lo que la capitalización
hace con el tiempo, porque el efecto es genuinamente contraintuitivo para el
cerebro humano y esa es la razón de que tanta gente lo subestime.

Nuestra intuición es lineal. Si te digo que algo crece un 10% al año durante 30
años, tu cabeza estima algo así como "un 300%, o sea cuatro veces". La respuesta
real es **17,4 veces**. No estás un poco equivocado: estás equivocado en un
factor de cuatro.

```grafico
tipo: lineas
titulo: Lo que hace un 10% anual, frente a lo que tu cabeza estima
x: 0, 5, 10, 15, 20, 25, 30
serie: Crecimiento compuesto | 100, 161, 259, 418, 673, 1083, 1745
serie: Lo que estima la intuición lineal | 100, 150, 200, 250, 300, 350, 400
formato: 
etiqueta_x: años
nota: Las dos curvas parten juntas y son casi indistinguibles los primeros años. Eso es precisamente lo que engaña: la composición no se nota al principio, y cuando se nota ya es abrumadora.
```

Fíjate en la forma de la curva, porque contiene tres lecciones prácticas.

**La primera: al principio no se nota.** Durante los primeros cinco años, la
curva compuesta y la lineal casi coinciden. Eso significa que quien empieza a
invertir y no ve resultados espectaculares en tres años no está haciendo nada
mal: está en el tramo plano de una curva que todavía no ha despegado. La mayoría
de la gente abandona ahí.

**La segunda: casi todo el resultado está al final.** De los 1.645 puntos de
ganancia del ejemplo, más de la mitad se producen en los últimos ocho años. El
tiempo no es un ingrediente más: es el ingrediente dominante, y es el único que
no puedes comprar.

**La tercera, y es la que se usa mal:** este mismo mecanismo funciona en tu
contra con la misma violencia. Una comisión, un impuesto recurrente, una fuga
constante de rentabilidad: todo eso se compone igual, en dirección opuesta. Lo
calcularás tú mismo en el laboratorio del jueves.

```anecdota
Los 24 dólares de Manhattan, y por qué la anécdota está mal contada
Es probablemente la ilustración más repetida del interés compuesto: en 1626, Peter Minuit compró la isla de Manhattan a sus habitantes nativos por mercancías valoradas —según una carta de la época— en 60 florines. Un historiador del siglo XIX convirtió esa cifra a unos 24 dólares, y la cifra se hizo famosa.

El argumento habitual es: si aquellos 24 dólares se hubieran invertido al 8% anual, hoy valdrían billones, muchísimo más que todo el suelo de Manhattan. Conclusión: fue un gran negocio... para los vendedores.

El cálculo es correcto y la anécdota tiene tres problemas que la hacen más interesante que la versión simple. **Uno**, la conversión a 24 dólares es una estimación decimonónica bastante arbitraria. **Dos**, no existía en 1626 ningún vehículo que pagase un 8% sostenido durante cuatro siglos: la mayor parte de los activos disponibles entonces —imperios, monedas, compañías— desaparecieron. **Y tres**, el pueblo lenape probablemente no entendía la transacción como una venta de propiedad en el sentido europeo.

Lo que sí demuestra sin discusión es la brutalidad aritmética de cuatrocientos años de composición, y la fragilidad del supuesto de que puedes componer sin interrupción. Ambas cosas importan, y la segunda es la que se olvida siempre: **el interés compuesto exige supervivencia**, y esa es la lección de pasado mañana.
```

---

## La perpetuidad: donde el mecanismo se vuelve brutal

Una acción no vence (sesión 01). Sus flujos no paran en el año 5: siguen
indefinidamente. Y cuando sumas infinitos flujos descontados, la serie converge
a algo asombrosamente simple:

> **VP = C / r**

Un flujo constante `C` a perpetuidad, descontado a `r`. Con 10 € al año al 8%:
10 / 0,08 = **125 €**.

Fíjate en lo que acaba de pasar. El mismo flujo de 10 € que valía 39,93 € si
duraba cinco años, vale 125 € si dura para siempre. **La duración del flujo
importa enormemente**, y esta es la primera pista de lo que viene.

Y ahora la versión que de verdad usamos, porque los negocios crecen. Si el flujo
crece a una tasa `g` constante:

> **VP = C / (r − g)**

Esto es el **modelo de Gordon**, y es el esqueleto matemático que hay debajo de
absolutamente todo lo que verás en la semana 6. Toma esa resta del denominador y
mírala fijamente, porque es donde vive el peligro.

```grafico
tipo: lineas
titulo: Cuánto vale un flujo de 10 € según el crecimiento que le supongas (tasa fija del 8%)
x: 0%, 2%, 4%, 5%, 6%, 7%, 7.5%
serie: Valor (Gordon) | 125, 167, 250, 333, 500, 1000, 2000
formato: eur
etiqueta_x: crecimiento a perpetuidad supuesto
nota: Entre un 7% y un 7,5% de crecimiento supuesto —medio punto— el valor se duplica. Nadie sabe estimar el crecimiento a perpetuidad con medio punto de precisión. Esta curva es la razón de que las valoraciones de empresas de crecimiento sean tan volátiles.
```

Con C = 10, en tabla:

| r | g | r − g | Valor | Múltiplo sobre flujo |
|---|---|---|---|---|
| 8% | 0% | 8,0% | 125 | 12,5× |
| 8% | 3% | 5,0% | 200 | 20,0× |
| 8% | 5% | 3,0% | 333 | 33,3× |
| 8% | 6% | 2,0% | 500 | 50,0× |
| 8% | 7% | 1,0% | 1.000 | 100,0× |
| 8% | 7,5% | 0,5% | 2.000 | 200,0× |

Tres conclusiones que vale la pena grabar:

**1. Cuando `r` y `g` se acercan, el valor explota.** Esto es matemáticamente
cierto y económicamente falso: ninguna empresa crece para siempre por encima de
la economía, porque acabaría *siendo* la economía. Cualquier modelo con `g`
cercano a `r` está roto, aunque los números salgan.

**2. Los múltiplos altos no son irracionales por sí mismos.** Un PER de 50 puede
ser perfectamente coherente con tipos bajos y crecimiento alto. Que sea coherente
no significa que sea correcto: significa que estás apostando fuerte a dos números
que no controlas y que no puedes estimar con precisión.

**3. La sensibilidad es no lineal.** Cuando `r − g` es grande, mover los inputs
cambia poco. Cuando es pequeño, cambia todo. Y en 2020-2021, `r − g` estaba en
mínimos históricos para media bolsa.

---

## La misma fórmula que ya usas sin saberlo

Antes de seguir, una comprobación de que esto no es teoría abstracta: la
maquinaria de descuento que acabas de aprender es exactamente la que hay detrás
de productos que ya conoces.

**Tu hipoteca.** Un préstamo es una serie de pagos futuros. El banco calcula la
cuota de forma que el valor presente de todas tus cuotas, descontado al tipo del
préstamo, sea igual al dinero que te presta hoy. Ni más ni menos. La fórmula de
la anualidad es literalmente la suma de la tabla que hiciste hace dos secciones.

De ahí sale algo que sorprende a mucha gente: al principio de una hipoteca, casi
toda la cuota son intereses y casi nada amortiza el principal. No es un abuso del
banco: es aritmética del descuento. El interés se cobra sobre el saldo pendiente,
que al principio es todo.

**Un plan de pensiones o una renta vitalicia.** Te prometen X al año durante tu
jubilación. Lo que la aseguradora hace es calcular el valor presente de esa
promesa, con una tasa y una tabla de mortalidad, y eso determina lo que te cobra.

**El precio de un bono.** Un bono es una serie de cupones más el principal al
final. Su precio es el valor presente de esa serie. Y cuando el tipo de mercado
sube, el valor presente de esos pagos fijos baja: por eso el precio de los bonos
cae cuando suben los tipos. Es la misma tabla, sin ningún ingrediente adicional.

```clave
Todo lo que promete pagos futuros se valora igual
Hipoteca, bono, pensión, seguro, acción, empresa entera, proyecto industrial: el mecanismo es idéntico. Traer los flujos al presente con una tasa.

Lo único que cambia entre ellos es **cuán seguros son esos flujos** —lo que se refleja en la prima de riesgo de la tasa— y **cuán lejos están** —lo que se refleja en la duración—.

Si retienes esto, acabas de aprender el 80% de la valoración de cualquier instrumento financiero que existe. El 20% restante son los detalles, y ocupan el resto del curso.
```

### Tres errores frecuentes al descontar

**Error 1: descontar flujos nominales con una tasa real, o al revés.** Si tus
flujos proyectados incluyen inflación —son nominales—, la tasa debe ser nominal.
Si los has proyectado en términos constantes, la tasa debe ser real. Mezclarlos
produce errores enormes y es sorprendentemente común en modelos hechos con prisa.

**Error 2: usar una tasa que no corresponde al riesgo del flujo.** Cada flujo
tiene su propio riesgo. Descontar los ingresos contratados a largo plazo de una
concesionaria y los ingresos especulativos de una división nueva con la misma
tasa es tratar como iguales dos cosas que no lo son.

**Error 3: proyectar con detalle diez años y despachar el resto con una línea.**
Como verás en el simulador de dentro de un momento, el valor terminal suele ser
la mayor parte del total. Dedicar el 90% del esfuerzo al 30% del valor es una
distribución de esfuerzo llamativamente mala, y es la norma en la mayoría de
informes de analista.

---

## Duración: por qué unos activos se mueven más que otros

Ahora llegamos a la respuesta de la pregunta inicial, y al concepto central de
la sesión.

Toma 100 € que vas a cobrar dentro de 1 año, dentro de 10 y dentro de 30. Mira
qué le pasa a su valor presente cuando la tasa sube del 4% al 5%:

```grafico
tipo: barras
titulo: Efecto de UNA subida de tipos del 4% al 5% sobre tres flujos idénticos
etiquetas: Cobras / en 1 año, Cobras / en 10 años, Cobras / en 30 años
valores: -0.9, -9.1, -24.9
formato: %
nota: Los tres flujos son de 100 €. La subida de tipos es la misma. La única diferencia entre ellos es CUÁNDO llega el dinero. Uno pierde un 0,9% y otro un 25%.
```

Esa sensibilidad tiene nombre: **duración** (*duration*). Formalmente se define
en renta fija y la veremos con rigor en la sesión 31, pero el concepto es
general y aplica a cualquier cosa que genere flujos:

```clave
La regla que explica media bolsa
**Cuanto más lejos en el futuro está el dinero, más sensible es su valor presente a la tasa de descuento.**

No es una tendencia ni una regularidad estadística: es aritmética. El divisor (1+r) se aplica n veces, así que un cambio en r se amplifica exponencialmente con n.
```

### Growth y value son, en gran medida, dos duraciones

Aplícalo ahora a acciones. Dos empresas:

- **Empresa A:** una eléctrica regulada. Gana dinero hoy, lo reparte hoy, apenas
  crece. La mayor parte de su valor está en flujos de los próximos 10 años.
- **Empresa B:** una tecnológica que reinvierte todo, apenas tiene beneficio hoy
  y su tesis es que dominará un mercado enorme en 2040. Casi todo su valor está
  en flujos a más de 15 años vista.

La empresa B tiene **duración de equity** mucho mayor. Cuando los tipos suben, B
cae mucho más que A, y no porque su negocio haya empeorado, sino porque su dinero
está más lejos.

```clave
"Growth" y "value" no son dos filosofías enfrentadas
Son, en buena medida, **dos posiciones distintas en la curva de duración**. Comprar growth es, entre otras cosas, estar largo de duración: una apuesta apalancada a que los tipos no suban.

Mucha gente que se define por su "estilo de inversión" está en realidad tomando una posición macro sin saberlo. Y una posición macro que no sabes que tienes es una posición que no puedes gestionar.
```

### El experimento natural de 2022

Esto se vio con una claridad casi de laboratorio. El bono del Tesoro americano a
10 años pasó de rendir alrededor del 1,5% a cerca del 3,9% en un solo año.

```grafico
tipo: barras
titulo: 2022: qué cayó y cuánto, sin recesión y sin colapso de beneficios
etiquetas: Bono del Tesoro / 10 años (rentabilidad), S&P 500, Nasdaq 100, Bonos largos / del Tesoro
valores: 240, -19.4, -33, -31
formato: %
nota: La primera barra es la subida de la rentabilidad del bono (de ~1,5% a ~3,9%), no una caída. Las otras tres son caídas de precio. Obsérvese que los bonos del Tesoro a largo plazo cayeron casi tanto como el Nasdaq: misma causa, misma duración alta.
```

No hubo recesión en 2022. No hubo colapso de beneficios. Lo que hubo fue una
repreciación del **denominador**, y golpeó proporcionalmente más a lo que tenía
el dinero más lejos: tecnología de crecimiento y bonos de largo plazo, dos cosas
que en teoría no tienen nada que ver y que aquel año se comportaron como
hermanas. Es la demostración más limpia de las últimas décadas de que la
duración, y no el sector, es lo que manda cuando se mueve la tasa.

---

## La gravedad no cae igual sobre todo

Una subida de tipos no afecta a todos los activos con la misma intensidad ni
siquiera con el mismo signo. Merece la pena recorrer el mapa, porque te da un
marco para leer cualquier movimiento de mercado.

**Bonos largos.** Los más golpeados en términos puros de duración. Flujos fijos y
lejanos: no hay nada que compense la subida del denominador.

**Bonos cortos.** Apenas se mueven, y además reinvierten pronto al tipo nuevo.
Por eso el efectivo y las letras se convierten en refugio cuando los tipos suben:
no solo no sufren, sino que empiezan a rendir.

**Acciones de crecimiento.** Muy golpeadas, por lo que hemos visto: son bonos
largos disfrazados de empresas.

**Acciones de valor con caja presente.** Sufren menos. Su dinero está cerca, y si
tienen poder de fijación de precios, su numerador puede crecer con la inflación
que a menudo acompaña a la subida.

**Bancos.** Caso peculiar y a menudo malinterpretado. Ganan con la pendiente de
la curva —se financian corto y prestan largo—, así que una subida puede
beneficiarles. Pero si suben mucho y rápido, el valor de los bonos que tienen en
balance se hunde, y ahí es donde aparecen los problemas. Eso es literalmente lo
que ocurrió con varias entidades regionales estadounidenses en 2023: no fue un
problema de crédito, fue un problema de duración.

**Inmobiliario.** Doblemente golpeado: es un activo de larga duración *y*
depende del crédito para que existan compradores.

**Activos sin flujo.** Sin numerador que descontar, el efecto llega por otra vía:
el coste de oportunidad. Cuando el efectivo rinde 5%, mantener algo que no rinde
nada tiene un coste explícito que antes no existía.

```clave
Tres preguntas para situar cualquier activo bajo la gravedad
**¿Cuándo llega su dinero?** Cuanto más tarde, más sufre.
**¿Su numerador se mueve con la inflación?** Si sí, se compensa parcialmente.
**¿Depende del crédito para existir su demanda?** Si sí, sufre dos veces.

Con esas tres preguntas puedes situar casi cualquier cosa —una acción, un piso, un bono, una empresa privada— sin necesidad de ningún modelo.
```

```anecdota
El hombre que subió los tipos al 20% y aceptó la recesión
Cuando Paul Volcker llegó a la presidencia de la Reserva Federal en 1979, la inflación estadounidense superaba el 13% y llevaba una década resistiéndose a todos los intentos de contenerla. Los tres presidentes anteriores lo habían intentado y habían cedido en cuanto el desempleo subía.

Volcker hizo algo distinto: subió el tipo de intervención hasta cerca del 20%, un nivel que hoy parece inconcebible, y lo mantuvo pese a que la economía entró en una recesión severa y el desempleo superó el 10%. Recibió amenazas de muerte. Constructores de viviendas arruinados le enviaron por correo tablones de madera que no habían podido vender, y concesionarios le mandaron llaves de coches sin comprador.

Aguantó. La inflación bajó del 13% al 3% en tres años, y ese episodio inauguró el mayor mercado alcista de bonos de la historia: cuarenta años de tipos descendentes que, por todo lo que has visto hoy, fueron simultáneamente cuarenta años de viento de cola para prácticamente todos los activos financieros del planeta.

Aquí está la lección incómoda: **buena parte de la rentabilidad que los inversores de las últimas cuatro décadas atribuyeron a su habilidad fue en realidad la caída secular de la tasa de descuento.** Un factor que actuó sobre todos por igual, y que por definición no puede repetirse indefinidamente, porque los tipos no pueden caer para siempre.
```

---

## Nominal, real y la trampa de Fisher

Hasta ahora hemos hablado de "el tipo" como si fuera uno. Hay dos, y
confundirlos es un error caro.

- **Tipo nominal:** el que ves publicado. El bono paga 5%.
- **Tipo real:** lo que ganas en poder adquisitivo, una vez descontada la
  inflación.

La relación aproximada es la **ecuación de Fisher**:

> tipo nominal ≈ tipo real + inflación esperada

Si el bono paga 5% y la inflación esperada es 3%, tu tipo real es
aproximadamente 2%. Si el bono paga 5% y la inflación es 6%, tu tipo real es
**−1%**: estás pagando por prestar dinero, medido en lo que puedes comprar.

```anecdota
El economista que dio nombre a la ecuación y se arruinó en el 29
Irving Fisher fue probablemente el mejor economista estadounidense de su generación. Formalizó la relación entre tipos nominales, reales e inflación que hoy lleva su nombre, y su trabajo sobre el valor del dinero en el tiempo es la base de todo lo que has leído hoy.

El 15 de octubre de 1929, a dos semanas del crash, declaró públicamente que las acciones habían alcanzado "lo que parece ser una meseta permanentemente elevada". Perdió su fortuna personal en el desplome, unos 10 millones de dólares de la época, y con ella su reputación pública. Pasó el resto de su vida endeudado, sostenido por su universidad.

Lo notable es lo que hizo después: en lugar de callarse, dedicó los años siguientes a entender qué había fallado, y en 1933 publicó su teoría de la deflación por endeudamiento, que explica cómo una espiral de deuda y caída de precios se retroalimenta. Es uno de los trabajos más influyentes sobre crisis financieras jamás escritos, y Ben Bernanke lo citaría décadas después al gestionar 2008.

La lección doble: entender el mecanismo con precisión no te protege de equivocarte con el momento, y el mejor trabajo de alguien puede salir de haberse equivocado espectacularmente.
```

Dos consecuencias importantes:

**Primera: lo que descuenta los flujos reales es el tipo real.** Si los flujos de
una empresa crecen con la inflación —porque puede subir precios—, entonces la
inflación está en el numerador y en el denominador a la vez y se cancela
parcialmente. Por eso una empresa con poder de fijación de precios sufre menos
con la inflación: no es magia de gestión, es que su numerador se mueve con el
denominador.

**Segunda: los tipos reales negativos distorsionan todo.**

```grafico
tipo: lineas
titulo: Tipo real a 10 años en EE.UU.: la década rara y su final
x: 2018, 2019, 2020, 2021, 2022, 2023
serie: Tipo real aprox. | 0.8, 0.2, -0.9, -1.0, 1.5, 1.8
formato: %
etiqueta_x: aproximación del tipo real de los bonos ligados a inflación
nota: Con tipo real negativo, mantener efectivo o bonos garantiza perder poder adquisitivo. No es que el riesgo se volviera atractivo: es que la alternativa se volvió una pérdida segura. En 2022 el signo cambió, y con él la asignación de capital de medio planeta.
```

Ese fenómeno tiene nombre en el argot: **TINA**, *there is no alternative*. Y
explica buena parte de las valoraciones de 2020-2021 mucho mejor que cualquier
relato sobre la locura de los inversores. Explica también, simétricamente, qué
pasó cuando los tipos reales volvieron a territorio positivo: de repente **sí**
había alternativa, y el dinero se recolocó.

```clave
Cuando alguien te diga que un periodo fue "irracional", desconfía
Casi siempre hay un mecanismo suficiente. Atribuir a la locura colectiva lo que se explica con una tasa de descuento negativa es renunciar al análisis y quedarse con la moraleja.

Esto no significa que no existan las burbujas —la semana 3 va entera de eso—. Significa que el orden correcto es: primero busca el mecanismo, y solo si no lo encuentras, recurre a la psicología.
```

---

## La tasa libre de riesgo: el ancla de todo

Hay un número que sirve de referencia para todo lo demás: la rentabilidad del
bono del Tesoro estadounidense a 10 años. Se le llama **tasa libre de riesgo**
(*risk-free rate*), aunque el nombre es una convención discutible: no está libre
de riesgo de inflación, ni de riesgo de tipo si vendes antes de vencimiento. En
2022 quien tenía bonos del Tesoro a largo plazo perdió alrededor de un 30%, lo
cual pone el adjetivo "libre de riesgo" en su sitio.

Su papel es de ancla. Es el suelo contra el que se compara cualquier otra
inversión. Si el Tesoro te paga un 4,5% sin esfuerzo, cualquier cosa con riesgo
tiene que ofrecerte más, y la diferencia es la **prima de riesgo**.

Por eso, cuando ese número se mueve, se mueve todo lo que se compara con él:
bonos corporativos, acciones, inmuebles, capital riesgo, y sí, también los
activos del cajón 2 de ayer. Ese es el sentido literal de la gravedad: no es una
fuerza sobre un objeto, es un campo que actúa sobre todos a la vez, con
intensidad proporcional a su duración.

### Qué reprecia exactamente un cuarto de punto

Un **punto básico** (*basis point*, "bp") es una centésima de punto porcentual.
25 bp = 0,25%. Suena a nada.

Vamos a ponerle números con Gordon. Un activo con flujo de 10, tasa de descuento
8% y crecimiento 5%:

- Antes: 10 / (0,08 − 0,05) = **333**
- La tasa sube 25 bp → 10 / (0,0825 − 0,05) = **308**

**−7,7%** por un cuarto de punto. Y si el activo fuera de mayor duración
(g = 6%): pasa de 500 a 444, un **−11,1%**.

```grafico
tipo: barras
titulo: Lo que hace una subida de 25 puntos básicos según la duración del activo
etiquetas: Duración baja / (g=0%), Media / (g=3%), Alta / (g=5%), Muy alta / (g=6%)
valores: -3.0, -4.8, -7.7, -11.1
formato: %
resaltar: 3
nota: Un cuarto de punto. La misma subida produce efectos que difieren en casi cuatro veces según dónde esté el dinero en el tiempo. Por esto los mercados enteros se detienen a escuchar a un banquero central durante cuarenta minutos.
```

Ahora entiendes por qué un cambio de una sola palabra en un comunicado mueve
billones. Los participantes no están reaccionando a política monetaria en
abstracto: están recalculando el denominador de todos los activos del planeta
simultáneamente.

---

## SIMULADOR · Mueve la tasa y mira qué se rompe

```sim:descuento
titulo: Valor presente y duración
descripcion: Un flujo anual creciente durante N años más un valor terminal. Mueve la tasa de descuento y el crecimiento, y observa dos cosas: cuánto cambia el valor total, y qué porcentaje del valor está en el tramo lejano.
parametros:
  flujo: 10
  tasa: 8
  crecimiento: 4
  anios: 20
```

**Qué tienes que observar, en este orden:**

1. Con los valores por defecto, fíjate en **qué porcentaje del valor total está
   en el valor terminal**. Suele superar el 60%. Eso significa que la mayoría de
   tu valoración depende de lo que pasa *después* del periodo que has
   proyectado con cuidado.
2. Sube la tasa un punto. Mira cuánto cae el valor total y compáralo con cuánto
   cae el valor de los primeros cinco años. La diferencia es duración.
3. Acerca el crecimiento a la tasa: pon crecimiento 7 con tasa 8. Observa la
   explosión.
4. Ahora baja los años de 20 a 5. El valor cae mucho, aunque el flujo anual sea
   idéntico. Ese es el efecto de la perpetuidad de la sesión 01.

---

## La herramienta más honesta del análisis: el DCF inverso

Antes de cerrar, quiero darte una aplicación práctica que puedes usar desde hoy
y que, en mi opinión, es más útil que cualquier valoración que te vayan a
enseñar en la semana 6.

Un DCF normal funciona así: metes supuestos, sale un valor, lo comparas con el
precio. El problema es que los supuestos los eliges tú, y como sabes qué
respuesta te gustaría, hay un sesgo que ningún analista honesto consigue
eliminar del todo.

El **DCF inverso** (*reverse DCF*) le da la vuelta: toma el precio de mercado
como dado y **despeja qué tendría que ser cierto** para justificarlo.

Con Gordon se hace mentalmente. Si una acción cotiza a 60 veces su flujo de caja
y usas una tasa del 9%:

> P/C = 1/(r − g) → 60 = 1/(0,09 − g) → r − g = 1/60 = 0,0167 → **g = 7,3%**

El mercado está diciendo que esa empresa crecerá un 7,3% **a perpetuidad**. No
diez años: siempre. Y como el crecimiento nominal de la economía a largo plazo
ronda cifras bastante menores, acabas de descubrir que el precio implica que esa
empresa crecerá indefinidamente más rápido que el mundo entero.

```clave
Cambia la pregunta y mejorarás las respuestas
En lugar de "¿cuánto vale esto?", que exige que aciertes el futuro, pregunta **"¿qué tendría que ser cierto para que este precio tenga sentido?"**

La primera pregunta produce un número falsamente preciso que puedes manipular sin darte cuenta. La segunda produce una afirmación concreta y falsable sobre el mundo, que puedes evaluar con lo que sabes del sector.

Es la misma herramienta, girada 180 grados, y la diferencia en calidad de juicio es enorme.
```

---

## Quién fija los tipos en realidad

Hay una confusión muy extendida que conviene deshacer, porque afecta a cómo se
interpretan las noticias.

Se dice "la Fed sube los tipos" como si un comité fijara el precio del dinero en
toda la economía. No es así. Lo que un banco central fija directamente es un
tipo muy concreto y muy corto: el de los préstamos a un día entre bancos. Es una
palanca minúscula en un extremo del sistema.

Todos los demás tipos —el del bono a 2 años, a 10, a 30, el de tu hipoteca, el
de la deuda corporativa— los fija **el mercado**, comprando y vendiendo. Y lo
que el mercado hace es una cosa muy concreta: **anticipar** qué hará el banco
central durante los próximos años, y añadirle una prima por el riesgo de
equivocarse.

```clave
El bono a 10 años no es la Fed: es la opinión del mercado sobre la Fed
Cuando el bono a 10 años se mueve sin que el banco central haya hecho nada, lo que ha cambiado es la **expectativa**. Por eso los mercados reaccionan a las palabras y no solo a las decisiones: la decisión de hoy ya estaba descontada, lo que se reprecia es la trayectoria futura.

Consecuencia práctica y contraintuitiva: es perfectamente posible que un banco central baje tipos y que el bono a 10 años **suba**, si el mercado interpreta que esa bajada generará inflación. Ha ocurrido varias veces. Quien opera pensando que "bajan tipos = baja todo el tramo de la curva" se lleva sorpresas caras.
```

Esto explica también algo que confunde a mucha gente: por qué a veces las
hipotecas se encarecen antes de que el banco central haya movido nada. Las
hipotecas a tipo fijo se financian con referencias de largo plazo, y esas
referencias se mueven con las expectativas, no con las reuniones.

La sesión 32 dedica una hora entera a la curva de tipos, que es el mapa completo
de esas expectativas. De momento quédate con la jerarquía: el banco central fija
un punto, el mercado dibuja el resto de la curva, y lo que descuenta tus activos
es la curva, no el punto.

---

## El mismo número, visto desde la empresa

Hasta ahora hemos mirado la tasa desde el lado del inversor: lo que exiges. Mira
ahora lo mismo desde el otro lado de la mesa, porque es literalmente el mismo
número con otro nombre.

Lo que tú exiges como rentabilidad **es lo que la empresa paga como coste de
capital**. Si los inversores exigen un 9% para financiar una empresa, esa
empresa necesita que sus proyectos rindan más de un 9% para crear valor. Un
proyecto que rinde el 7% destruye valor aunque sea rentable en términos
contables, porque el capital que consume podría estar rindiendo 9% en otro sitio.

De ahí sale una cadena que conviene ver completa:

1. Suben los tipos.
2. Sube el coste de capital de todas las empresas.
3. Proyectos que antes creaban valor pasan a destruirlo.
4. Las empresas cancelan inversiones.
5. Cae la inversión agregada, y con ella el crecimiento futuro.

```clave
Los tipos no solo cambian el descuento: cambian el negocio
El efecto de la sesión de hoy es puramente de denominador: mismos flujos, distinto valor presente. Pero existe un segundo efecto, más lento y más profundo, que actúa sobre el **numerador**: con capital más caro, las empresas invierten menos y crecen menos.

El primero es inmediato y visible en el precio. El segundo tarda entre uno y dos años en aparecer en los resultados. Cuando la gente dice que la política monetaria actúa "con retardos largos y variables" —la frase es de Milton Friedman— se refiere exactamente a esto.

Por eso una subida de tipos duele dos veces: primero al descuento, después al negocio.
```

Este mecanismo tiene una consecuencia útil para leer resultados empresariales:
cuando una compañía anuncia que recorta su plan de inversiones, no siempre es
mala señal. Puede ser exactamente lo correcto si el coste de capital ha subido y
esos proyectos ya no superan el listón. Distinguir "recorta porque va mal" de
"recorta porque hace bien sus cuentas" es una de las habilidades que trabajaremos
en la sesión 28.

---

## Lo que esto te da a partir de hoy

Tres lecturas nuevas que antes no tenías:

**1. Distinguir un movimiento de numerador de uno de denominador.** Cuando el
mercado cae, la pregunta útil no es "¿cuánto?" sino "¿han caído los flujos
esperados o ha subido la tasa de descuento?". Son dos mundos distintos: el
primero es un problema del negocio, el segundo es una repreciación. La respuesta
cambia por completo qué significa la caída.

**2. Saber qué estás asumiendo cuando compras algo caro.** Un múltiplo alto es
una afirmación implícita sobre `r` y `g`. Ahora sabes despejarla.

**3. Entender la duración de tu propia cartera.** Si todo lo que tienes son
activos de larga duración —tecnología de crecimiento, empresas sin beneficios
hoy, bonos largos, cripto— entonces no tienes una cartera diversificada: tienes
una apuesta apalancada al tipo de interés, aunque los nombres sean muy
distintos. Esto reaparece en la sesión 47.

---

## Glosario de la sesión

| Término | Qué es |
|---|---|
| **Discount rate** | Tasa con la que traes dinero futuro al presente. Libre de riesgo + prima de riesgo. |
| **Present value (PV)** | Valor hoy de un flujo futuro. |
| **Terminal value** | Valor de todos los flujos más allá del horizonte proyectado. Suele ser la mayor parte del total. |
| **Basis point (bp)** | Centésima de punto porcentual. 100 bp = 1%. |
| **Risk-free rate** | Rentabilidad del bono soberano de referencia. El ancla contra la que se compara todo. |
| **Real rate** | Tipo nominal menos inflación. Lo que ganas en poder adquisitivo. |
| **Fisher equation** | nominal ≈ real + inflación esperada. |
| **Duration** | Sensibilidad del valor presente a cambios en la tasa. A más lejos el dinero, más duración. |
| **Equity duration** | Lo mismo aplicado a acciones: growth es larga duración, value corta. |
| **Reverse DCF** | Despejar qué crecimiento está descontando el precio actual, en lugar de estimar un valor. |
| **TINA** | *There is no alternative*: con tipos reales negativos, el capital se ve empujado al riesgo. |
| **Rule of 72** | 72 dividido entre el tipo ≈ años para duplicar el capital. |

---

## Fallos conocidos: dónde esto te va a engañar

**1. La fórmula de Gordon es una bomba en manos inexpertas.** Su sensibilidad a
`g` es tan extrema que puedes justificar casi cualquier valoración eligiendo el
crecimiento adecuado, y hacerlo sin mala fe, simplemente porque el número que
sale te parece razonable. Regla de higiene: si tu `g` a perpetuidad supera el
crecimiento nominal esperado de la economía, tu modelo dice que la empresa
acabará siendo el PIB mundial. Está mal.

**2. La tasa de descuento no es observable.** Puedes mirar el bono a 10 años,
pero la prima de riesgo que le sumas encima te la inventas tú, con métodos que
verás en la sesión 27 y que son todos discutibles. Dos analistas competentes
pueden usar 8% y 11% y ambos defenderlo. Eso significa que cualquier valoración
por descuento tiene un **rango**, no un punto, y presentarla como un punto es
falsa precisión.

**3. Los tipos no son la única variable, aunque hoy lo parezca.** Esta sesión te
da un martillo muy potente y existe el riesgo real de ver clavos en todas
partes. Hay caídas que son de numerador —el negocio se ha roto— y explicarlas por
tipos es engañarse. La descomposición honesta suele ser un reparto, no un
culpable único.

**4. La relación tipos-acciones no tiene un signo fijo.** En la teoría de esta
sesión, tipos arriba implica valoraciones abajo. En los datos históricos hay
periodos largos en que tipos y bolsa subieron a la vez, porque los tipos subían
por crecimiento fuerte y el numerador crecía más rápido que el denominador. **Lo
que importa es por qué se mueven los tipos**, no solo que se muevan. Un alza por
crecimiento y un alza por inflación tienen efectos opuestos sobre la renta
variable, y confundirlas es de los errores macro más caros que existen.

**5. Duración es un concepto de primer orden, y la realidad tiene segundo
orden.** La aproximación por duración falla para movimientos grandes de tipos;
ahí entra la convexidad (sesión 31). Para 25 puntos básicos es excelente. Para un
salto de 300 se desvía de forma significativa y siempre en la misma dirección.

**6. La ecuación de Fisher usa inflación *esperada*, que no es observable.** En
la práctica se aproxima con los bonos ligados a inflación o con encuestas, y
ambas son medidas imperfectas de lo que la gente realmente espera. El tipo real
que calculas es, otra vez, una estimación con error.

**7. Nada de esto predice tipos.** Toda la sesión explica el efecto de un cambio
de tipos sobre las valoraciones. Ni una línea explica cómo saber si van a subir o
a bajar, porque nadie lo sabe de forma fiable —incluidos los propios bancos
centrales, cuyas proyecciones publicadas fallan de forma sistemática—. Entender
el mecanismo no es poder anticipar el input, y confundir ambas cosas es la vía
rápida a construir una tesis macro que no puedes sostener. La sesión 33 insiste
en esto con datos, e Irving Fisher lo demostró con su patrimonio.
