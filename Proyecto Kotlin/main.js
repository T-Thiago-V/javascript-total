let estudiantes = [];
let notas = [];

fetch('estudiantes.json')
  .then(res => res.json())
  .then(data => {
    estudiantes = data;
  });

function pedirNota(nombre) {
  let n;
  do {
    n = prompt('Nota de ' + nombre + ' (0-100):');
    n = parseInt(n);
  } while (isNaN(n) || n < 0 || n > 100);
  return n;
}

function obtenerClasificacion(nota) {
  if (nota >= 90) return "Excelente";
  if (nota >= 80) return "Buena";
  if (nota >= 70) return "Aprobada";
  return "Reprobada";
}

function registrarNotas() {
  notas = [];
  for (let i = 0; i < estudiantes.length; i++) {
    let n = pedirNota(estudiantes[i]);
    let c = obtenerClasificacion(n);
    notas.push({ nombre: estudiantes[i], nota: n, clasificacion: c });
  }
  mostrarNotas();
}

function mostrarNotas() {
  let lista = document.getElementById('lista');
  lista.innerHTML = '';
  for (let i = 0; i < notas.length; i++) {
    let clase = notas[i].nota >= 70 ? 'aprobado' : 'reprobado';
    lista.innerHTML += '<div class="' + clase + '"><b>' + notas[i].nombre + '</b> - Nota: ' + notas[i].nota + ' - ' + notas[i].clasificacion + '</div>';
  }
}

function generarResumen() {
  if (notas.length === 0) return;
  let aprobados = 0;
  let reprobados = 0;
  let suma = 0;
  let max = notas[0].nota;
  let min = notas[0].nota;

  for (let i = 0; i < notas.length; i++) {
    let n = notas[i].nota;
    suma += n;
    if (n >= 70) aprobados++;
    else reprobados++;
    if (n > max) max = n;
    if (n < min) min = n;
  }

  let promedio = (suma / notas.length).toFixed(2);

  let res = document.getElementById('resumen');
  res.innerHTML = '<h2>Resumen</h2>' +
                  '<p>Aprobados: ' + aprobados + '</p>' +
                  '<p>Reprobados: ' + reprobados + '</p>' +
                  '<p>Promedio: ' + promedio + '</p>' +
                  '<p>Máxima nota: ' + max + '</p>' +
                  '<p>Mínima nota: ' + min + '</p>';
}
