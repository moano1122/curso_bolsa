---
id: "04"
semana: 1
dia: 4
tipo: lab
titulo: "El kit numérico del inversor"
subtitulo: "Laboratorio: probabilidad, valor esperado, y la media que de verdad te importa"
duracion_min: 50
conceptos:
  - valor esperado
  - media geométrica
  - lastre de volatilidad
  - interés compuesto
  - probabilidad implícita
  - actualización bayesiana
glosario:
  - expected value
  - geometric mean
  - volatility drag
  - compounding
  - implied probability
  - base rate
  - odds
requisitos: ["01", "02", "03"]
simuladores:
  - ergodico
  - compuesto
  - drag
---

# LAB · El kit numérico del inversor

## Cómo funciona esta sesión

Hoy no hay narrativa larga. Hay siete bloques, cada uno con una idea corta y
ejercicios que tienes que hacer **antes** de abrir la solución. Los tres
simuladores están embebidos: muévelos, no te limites a leer los resultados.

La honestidad importa aquí más que en ninguna otra sesión: si abres la solución
antes de intentarlo, el test de esta noche te va a cazar y vas a repetir el día.
No hay atajo.

Necesitas papel, o la calculadora del sistema. Nada más.

---

## Bloque 1 · Probabilidad, odds y traducción entre ambas

Vienes de un mundo —cripto, y a juzgar por tus otros proyectos también las
apuestas— donde las cuotas son moneda corriente. Las opciones funcionan con la
misma gramática, así que fijemos la traducción.

Una **probabilidad** es un número entre 0 y 1. Unas **odds** son una razón entre
lo que ganas y lo que arriesgas.

> **Probabilidad implícita = 1 / cuota decimal**

| Cuota decimal | Probabilidad implícita | Interpretación |
|---|---|---|
| 1,50 | 66,7% | El mercado le da dos de cada tres |
| 2,00 | 50,0% | Moneda al aire |
| 4,00 | 25,0% | Uno de cada cuatro |
| 10,00 | 10,0% | Uno de cada diez |

La suma de las probabilidades implícitas de todos los resultados de un mercado
real es **mayor** que 100%. Ese exceso es el margen de la casa (*overround*, o
*vig*). En opciones, el equivalente es el **spread** entre compra y venta más la
prima de riesgo de varianza que veremos en la sesión 18.

### Ejercicios

**1.1** Una opción se paga 1 € y devuelve 5 € si el escenario se cumple.
¿Qué probabilidad implícita hay?

**1.2** Un mercado cotiza tres resultados a cuotas 2,10 / 3,40 / 5,00. ¿Cuál es
el overround?

**1.3** Crees que un escenario tiene un 30% de probabilidad. ¿A partir de qué
cuota decimal te interesa apostar?

<details><summary>Soluciones bloque 1</summary>

**1.1** 1/5 = **20%**.

**1.2** 1/2,10 + 1/3,40 + 1/5,00 = 0,4762 + 0,2941 + 0,2000 = 1,0703 →
**overround del 7,0%**. Ese es el coste de participar antes de acertar nada.

**1.3** Necesitas cuota > 1/0,30 = **3,33**. A 3,33 exactos tu valor esperado es
cero; por encima es positivo. Nótese que "cuota justa" y "cuota rentable" no son
lo mismo: la justa te deja plano, y necesitas margen sobre ella para cubrir
errores de estimación.

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

**2.3** Las dos anteriores tienen EV positivo o negativo. ¿Cuál preferirías
repetir 500 veces, y por qué? ¿Cambia tu respuesta si cada operación compromete
el 30% de tu capital?

<details><summary>Soluciones bloque 2</summary>

**2.1** 0,40 × 300 + 0,60 × (−150) = 120 − 90 = **+30 €**.

**2.2** 0,90 × 20 + 0,10 × (−250) = 18 − 25 = **−7 €**. Negativo, pese a acertar
nueve de cada diez veces. Este es el perfil clásico de "recoger monedas delante
de una apisonadora", y es exactamente la forma de la venta de opciones sin
control de riesgo (sesión 18).

**2.3** Con tamaños pequeños, claramente la 2.1. Pero si cada operación
compromete el 30% del capital, la respuesta cambia por completo: la 2.1 pierde
un 30% con probabilidad 0,6, y una racha de cuatro pérdidas seguidas
—probabilidad 13%, nada extraordinario— te deja en 0,7⁴ = **24% del capital
inicial**. Un EV positivo con tamaño mal calibrado es un camino a la ruina. Esto
es la no ergodicidad de ayer, ahora con números tuyos.

</details>

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

La media geométrica es **siempre menor o igual** que la aritmética, y la
diferencia crece con la volatilidad. Hay una aproximación muy útil:

> **media geométrica ≈ media aritmética − σ²/2**

Ese término `σ²/2` que te resta es el **lastre de volatilidad** (*volatility
drag*). No es una comisión que te cobre nadie: es aritmética pura de la
composición.

### Ejercicios

**3.1** Un activo tiene retorno medio aritmético del 12% anual y volatilidad del
20%. ¿Cuál es su retorno compuesto aproximado?

**3.2** Otro tiene retorno medio del 15% y volatilidad del 45%. ¿Y este?

**3.3** ¿Cuál de los dos te deja más dinero en 20 años? Calcúlalo.

**3.4** Un ETF apalancado 3× sobre un índice con 12% de retorno medio y 20% de
volatilidad: ¿qué retorno compuesto aproximado tiene? (Pista: el
apalancamiento multiplica el retorno medio **y** la volatilidad.)

<details><summary>Soluciones bloque 3</summary>

**3.1** 0,12 − (0,20²/2) = 0,12 − 0,02 = **10,0%**.

**3.2** 0,15 − (0,45²/2) = 0,15 − 0,101 = **4,9%**. La volatilidad se ha comido
dos tercios del retorno.

**3.3** Primero: 1,10²⁰ = **6,7×**. Segundo: 1,049²⁰ = **2,6×**. El activo con
mayor retorno medio deja menos de la mitad de dinero. Esta es la razón por la
que comparar estrategias por retorno medio es un error, y por la que una
estrategia más aburrida gana a largo plazo con enorme frecuencia.

**3.4** Retorno medio 3 × 12% = 36%. Volatilidad 3 × 20% = 60%.
0,36 − (0,60²/2) = 0,36 − 0,18 = **18%**. Compáralo con el 10% del activo sin
apalancar: triplicas la exposición y no llegas a duplicar el retorno compuesto,
mientras tu drawdown se dispara. Y esto asume rebalanceo diario perfecto y coste
cero. Con costes reales, el resultado empeora. Sesión 43.

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

1. Con `fraccion = 100` (apuestas todo tu capital cada vez), mira la **media**
   del conjunto y la **mediana**. La media es enorme y positiva. La mediana está
   cerca de cero. Ese abismo entre media y mediana es la no ergodicidad hecha
   visible.
2. Fíjate en cuántas trayectorias acaban por encima del capital inicial. Es un
   porcentaje muy pequeño, y son las que arrastran la media.
3. Baja `fraccion` a 50, luego a 25, luego a 10. Observa qué le pasa a la
   mediana.
4. Encuentra a ojo la fracción que maximiza la mediana. Anótala. Mañana no, pero
   en la sesión 46 vas a descubrir que ese número tiene nombre y fórmula: es el
   criterio de Kelly.

**Pregunta para el test:** ¿por qué la media del conjunto sigue siendo positiva
incluso cuando casi todas las trayectorias van a cero?

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

**5.4** ¿Cuántos años de rentabilidad equivale eso?

<details><summary>Soluciones bloque 5</summary>

**5.1** 100.000 × 1,08³⁰ = **1.006.266 €**. Beneficio: 906.266 €.

**5.2** 100.000 × 1,065³⁰ = **661.437 €**. Beneficio: 561.437 €.

**5.3** Diferencia de beneficio: 906.266 − 561.437 = 344.829 €.
344.829 / 906.266 = **38,0% del beneficio**.

Una comisión que se anuncia como "1,5%" se lleva casi cuatro de cada diez euros
que habrías ganado. Y no lo hace porque sea abusiva: lo hace porque se compone
igual que el capital, en dirección contraria. Es la misma matemática de la
sesión 02, con el signo cambiado.

**5.4** A un 8% anual, recuperar 344.829 € sobre el capital final requiere del
orden de 5 años adicionales. Has trabajado treinta años y el resultado es el de
veinticinco.

</details>

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

**Lo que estás viendo:** dos activos con **idéntico retorno medio** dejan
cantidades de dinero radicalmente distintas según su volatilidad. Esto significa
que la volatilidad **sí** afecta a tu resultado final, y de forma medible, aunque
ayer dijéramos que no es lo mismo que el riesgo.

Las dos afirmaciones conviven sin contradicción, y conviene tenerlas juntas:

- La volatilidad **no es** una buena medida del riesgo de perder tu dinero de
  forma permanente (sesión 03).
- La volatilidad **sí** reduce mecánicamente tu retorno compuesto (esta sesión).

---

## Bloque 7 · Bayes sobre una tesis

Última pieza del kit. Tienes una creencia previa, llega evidencia, actualizas.

> P(tesis | evidencia) = P(evidencia | tesis) × P(tesis) / P(evidencia)

El error habitual no es el cálculo: es olvidar la **tasa base** (*base rate*).

### Ejercicio

**7.1** Crees que una empresa está manipulando sus cuentas. Tu prior, sin más
información, es la tasa base del mercado: alrededor del 2% de las empresas
cotizadas tienen irregularidades contables materiales en un año dado.

Aplicas un test forense que detecta el 80% de los fraudes reales, pero también
marca en positivo al 10% de las empresas honestas (falsos positivos).

El test da **positivo** en tu empresa. ¿Cuál es la probabilidad de que
efectivamente esté manipulando?

<details><summary>Solución bloque 7</summary>

De 1.000 empresas:

- 20 manipulan. El test caza 80% → **16 positivos verdaderos**.
- 980 son honestas. El test marca 10% → **98 positivos falsos**.
- Total de positivos: 114.

P(fraude | positivo) = 16 / 114 = **14,0%**.

Un test con 80% de sensibilidad, dando positivo, y aun así hay un 86% de
probabilidad de que la empresa sea honesta. La razón es la tasa base: el fraude
es raro, y cuando el evento base es raro, los falsos positivos dominan.

Esto se aplica sin ningún cambio a las señales de trading. Una señal que "acierta
el 80% de los techos de mercado" es prácticamente inútil si los techos de mercado
ocurren el 2% de los días, porque generará muchísimas más falsas alarmas que
aciertos. Cualquiera que te presente una señal con su tasa de acierto y sin su
tasa de falsos positivos te está ocultando la mitad que importa. Volveremos a
ello en la sesión 09.

</details>

---

## Cierre: qué te llevas

Cinco herramientas que vas a usar durante los tres meses:

1. **Traducir entre probabilidad, odds y precio.** Toda opción es una apuesta con
   cuota, y saber leerla así es medio camino andado para la semana 4.
2. **Calcular EV, y saber que no basta.** El EV es condición necesaria y no
   suficiente.
3. **Usar la media geométrica.** Es la única que describe tu dinero.
4. **Estimar el lastre de volatilidad** con `σ²/2` mentalmente.
5. **Preguntar siempre por la tasa base.** Ante cualquier estadística de acierto.

---

## Fallos conocidos: dónde esto te va a engañar

**1. La aproximación `μ − σ²/2` es solo una aproximación.** Funciona bien con
volatilidades moderadas y se degrada con volatilidades muy altas o
distribuciones muy asimétricas. Para estimaciones de servilleta es excelente;
para un modelo formal, no la uses.

**2. Los simuladores usan distribuciones que la realidad no respeta.** El
simulador de ergodicidad usa una moneda —dos resultados— y el de volatilidad usa
retornos normales. Ayer vimos que los retornos reales tienen colas gordas, lo que
significa que **estos simuladores subestiman los escenarios malos**. Están para
enseñar el mecanismo, no para dimensionar tu riesgo.

**3. Bayes exige un prior, y el prior te lo inventas.** El cálculo es impecable y
depende por completo de un número que has elegido tú. Con un prior mal calibrado,
Bayes te da una respuesta precisa y equivocada. La disciplina útil no es calcular
mejor, es buscar tasas base reales antes de estimar.

**4. Todo esto asume que conoces las probabilidades.** Es la crítica de Knight de
ayer, y aplica entera a este laboratorio. En el mercado no conoces P(éxito) de tu
tesis: la estimas, con un error que probablemente sea mayor que las diferencias
que estás calculando. Sirve para ordenar el pensamiento y para descartar
decisiones claramente malas, no para producir precisión.

**5. El ejercicio del ETF apalancado simplifica de más.** El resultado del
bloque 3.4 es cualitativamente correcto —el apalancamiento diario erosiona el
retorno compuesto— pero el cálculo real depende de la secuencia concreta de
retornos, no solo de la media y la varianza. En mercados en tendencia sostenida,
un ETF apalancado puede batir a 3× el índice durante periodos largos. La sesión
43 lo trata en serio.
