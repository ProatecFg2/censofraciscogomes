Chart.register(ChartDataLabels);

Chart.overrides.pie;

const schoolFunctionChart = document.getElementById("schoolFunctionChart");

new Chart(schoolFunctionChart, {
  type: "pie",
  data: {
    labels: [
      "Estudante do 6° Ano",
      "Estudante do 7° Ano",
      "Estudante do 8° Ano",
      "Estudante do 9° Ano",
      "Estudante da 1ª Série do Ensino Médio",
      "Estudante da 2ª Série do Ensino Médio",
      "Estudante da 3ª Série do Ensino Médio",
      "Funcionário",
    ],
    datasets: [
      {
        data: [82, 85, 52, 84, 91, 63, 49, 33],
        backgroundColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(0, 100, 255, 1)",
          "rgba(0, 255, 200)",
        ],
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    // events: [],
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: window.screen.width > 986 ? "right" : "bottom",
        display: true,
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

const genderChart = document.getElementById("genderChart");

new Chart(genderChart, {
  type: "pie",
  data: {
    labels: ["Masculino", "Feminino"],
    datasets: [
      {
        data: [248, 291],
        backgroundColor: ["rgba(255, 159, 64, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
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
        display: true,
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

const orientationChart = document.getElementById("orientationChart");

new Chart(orientationChart, {
  type: "pie",
  data: {
    labels: [
      "Heterossexual",
      "Homossexual",
      "Bissexual",
      "Prefere não responder",
      "Outro",
    ],
    datasets: [
      {
        data: [439, 16, 44, 36, 1],
        backgroundColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
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
        display: true,
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

const ageChart = document.getElementById("ageChart");

new Chart(ageChart, {
  type: "pie",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        data: [0, 31, 67, 65, 77, 85, 80, 72, 20, 5, 3, 0, 0, 1],
        // backgroundColor: [
        //   "rgba(255, 159, 64, 1)",
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(255, 205, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(54, 162, 235, 1)",
        // ],
        borderWidth: 1,
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
        display: true,
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

// let frase;

// for (var i = 24; i < 81; i++) {
//   frase += '"' + i + " " + "anos" + '",' + "\n";
// }

// console.log(frase);

window.addEventListener("resize", () => {

  console.log(window.screen.width);

});