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
        data: [81.776, 85.004, 52.186, 83.928, 90.922, 61.87, 48.958, 32.818],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
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
        enabled: false,
      },
      legend: {
        position: "right",
        display: false,
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
        data: [246.942, 291.058],
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
        enabled: false,
      },
      legend: {
        position: "right",
        display: false,
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
    labels: ["10 anos", "11 anos", "12 anos", "13 anos", "14 anos", "15 anos"],
    datasets: [
      {
        data: [246.942, 291.058],
        backgroundColor: ["rgba(255, 159, 64, 1)", "rgba(255, 99, 132, 1)", "#D36135", "#F42C04", "#88A2AA", "#F93943"],
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        position: "right",
        display: false,
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
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
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
        enabled: false,
      },
      legend: {
        position: "right",
        display: false,
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
