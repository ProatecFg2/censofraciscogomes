// -------------------- INITIAL CONFIGS ----------------------

Chart.register(ChartDataLabels);

Chart.overrides.pie;

let bgColors = ["#37a3eb", "#fe6385", "#4ac0c1", "#ff9e41", "#9867ff", "#ffcc57", "#c8cbce"];

let counter = 1;

let borderWidth = 2;

// -----------------------------------------------------------

// -------------------- School Function Chart ----------------------

let data = [82, 85, 52, 84, 91, 63, 49, 33];

let labels = ["Estudante do 6° Ano", "Estudante do 7° Ano", "Estudante do 8° Ano", "Estudante do 9° Ano", "Estudante da 1ª Série do Ensino Médio", "Estudante da 2ª Série do Ensino Médio", "Estudante da 3ª Série do Ensino Médio", "Funcionário"];

const schoolFunctionChart = document.getElementById("schoolFunctionChart");

new Chart(schoolFunctionChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='schoolFunctionChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='schoolFunctionChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------------------

// -------------------- Gender Chart ----------------------

data = [248, 291];

labels = ["Masculino", "Feminino"];

const genderChart = document.getElementById("genderChart");

new Chart(genderChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: [248, 291],
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='genderChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='genderChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// --------------------------------------------------------

// -------------------- Orientation Chart ----------------------

data = [439, 16, 44, 36, 1];

labels = ["Heterossexual", "Homossexual", "Bissexual", "Prefere não responder", "Outro"];

const orientationChart = document.getElementById("orientationChart");

new Chart(orientationChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='orientationChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='orientationChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -------------------------------------------------------------

// -------------------- Age Chart ----------------------

data = [0, 31, 67, 65, 77, 85, 80, 72, 20, 5, 3, 0, 0, 1];

labels = [
  "10 anos",
  "11 anos",
  "12 anos",
  "13 anos",
  "14 anos",
  "15 anos",
  "16 anos",
  "17 anos",
  "18 anos",
  "19 anos",
  "20 anos",
  "21 anos",
  "22 anos",
  "23 anos",
  // "24 anos",
  // "25 anos",
  // "26 anos",
  // "27 anos",
  // "28 anos",
  // "29 anos",
  // "30 anos",
  // "31 anos",
  // "32 anos",
  // "33 anos",
  // "34 anos",
  // "35 anos",
  // "36 anos",
  // "37 anos",
  // "38 anos",
  // "39 anos",
  // "40 anos",
  // "41 anos",
  // "42 anos",
  // "43 anos",
  // "44 anos",
  // "45 anos",
  // "46 anos",
  // "47 anos",
  // "48 anos",
  // "49 anos",
  // "50 anos",
  // "51 anos",
  // "52 anos",
  // "53 anos",
  // "54 anos",
  // "55 anos",
  // "56 anos",
  // "57 anos",
  // "58 anos",
  // "59 anos",
  // "60 anos",
  // "61 anos",
  // "62 anos",
  // "63 anos",
  // "64 anos",
  // "65 anos",
  // "66 anos",
  // "67 anos",
  // "68 anos",
  // "69 anos",
  // "70 anos",
  // "71 anos",
  // "72 anos",
  // "73 anos",
  // "74 anos",
  // "75 anos",
  // "76 anos",
  // "77 anos",
  // "78 anos",
  // "79 anos",
  // "80 anos",
  // "+ de 80 anos",
];

const ageChart = document.getElementById("ageChart");

new Chart(ageChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='ageChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='ageChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Race Chart ----------------------

data = [292, 60, 13, 163, 8, 1, 1];

labels = ["Branca", "Preta", "Amarela", "Parda", "Indígena", "Mulata", "Não se identifica com nenhum"];

const raceChart = document.getElementById("raceChart");

new Chart(raceChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='raceChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='raceChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Religion Chart ----------------------

data = [230, 148, 17, 19, 1, 1, 3, 37, 45];

labels = ["Católica", "Evangélica", "Espírita", "Umbanda", "Candomblé", "Judaica", "Budista", "Ateu", "Não tem"];

const religionChart = document.getElementById("religionChart");

new Chart(religionChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='religionChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='religionChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Education Chart ----------------------

data = [263, 43, 191, 12, 1, 14, 9, 4, 2];

labels = ["Ensino Fundamental Incompleto", "Ensino Fundamental Completo", "Ensino Médio Incompleto", "Ensino Médio Completo", "Graduação Incompleta", "Graduação Completa", "Pós Graduação (Especialização)", "Pós Graduação (Mestrado)", "Pós Graduação (Doutorado)"];

const educationChart = document.getElementById("educationChart");

new Chart(educationChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='educationChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='educationChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Period Chart ----------------------

data = [270, 189, 4, 76];

labels = ["Matutino", "Vespertino", "Noite", "Período Integral"];

const periodChart = document.getElementById("periodChart");

new Chart(periodChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='periodChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='periodChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- City Chart ----------------------

data = [520, 16, 0, 2, 0, 1];

labels = ["Cravinhos/SP", "Ribeirão Preto/SP", "Serrana/SP", "Brodowski/SP", "São Simão/SP", "Bonfim paulista"];

const cityChart = document.getElementById("cityChart");

new Chart(cityChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='cityChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='cityChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- District Chart ----------------------

data = [6, 15, 29, 7, 0, 10, 19, 3, 9, 182, 3, 58, 9, 11, 1, 1, 1, 38, 1, 12, 17, 10, 0, 3, 26, 23, 0, 9, 4, 8];

labels = ["Alto das Acácias", "Bella Cravinhos", "Centro", "COHAB Francisco Castilho", "COHAB Francisco Castilho II", "COHAB Itamarati", "COHAB João Berbel", "COHAB Osvaldo Luís Netto", "COHAB Trajano Stella", "Jardim Alvorada", "Jardim Anhanguera", "Jardim Bela Vista", "Jardim Bothânico", "Jardim das Acácias", "Jardim Independência", "Jardim Itapuã", "Jardim Julia", "Jardim Nova Aliança", "Jardim Paulista", "Jardim Primavera", "Jardim Santa Cruz", "Nova Cravinhos", "Parque industrial Alvorada", "Parque São Francisco", "Parque São José", "Residencial Jardim Santana", "Sumaré", "Vila Claudia", "Vila Pio XII", "Vila Santa Cecília", "Vila Viegas", "Zona Rural"];

const districtChart = document.getElementById("districtChart");

new Chart(districtChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='districtChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='districtChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Money Chart ----------------------

data = [9, 36, 82, 129, 148, 104, 26, 5];

labels = ["R$1,00 a R$500,00", "R$501,00 a R$1.000,00", "R$1.001,00 a R$2.000,00", "R$2.001,00 a R$3.000,00", "R$3.001,00 a R$5.000,00", "R$5.001,00 a R$10.000,00", "R$10.001,00 a R$20.000,00", "R$20.001,00 a R$100.000,00"];

const moneyChart = document.getElementById("moneyChart");

new Chart(moneyChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='moneyChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='moneyChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Family Money Chart ----------------------

data = [124, 239, 123, 38, 11, 4];

labels = ["1", "2", "3", "4", "5", "6 ou mais"];

const familyMoneyChart = document.getElementById("familyMoneyChart");

new Chart(familyMoneyChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='familyMoneyChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='familyMoneyChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------

// -------------------- Family Live Chart ----------------------

data = [11, 38, 152, 190, 94, 35, 11, 3, 3, 2];

labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10 ou mais"];

const familyLiveChart = document.getElementById("familyLiveChart");

new Chart(familyLiveChart, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bgColors,
        borderWidth: borderWidth,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: false,
        align: "left",
      },
      title: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
    layout: {
      padding: 15,
    },
  },
});

document.querySelector("[data-js='familyLiveChart'] .page-graph-options").innerHTML = "";

counter = 1;

labels.forEach((l) => {
  counter > 7 ? (counter = 1) : (counter = counter);

  document.querySelector("[data-js='familyLiveChart'] .page-graph-options").innerHTML += `
  
    <span class="single-graph-option">
      <div style="background-color: var(--graph-${counter});"></div>
      ${l}
    </span>
  
  `;

  counter++;
});

// -----------------------------------------------------
