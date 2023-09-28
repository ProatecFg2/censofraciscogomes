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
        data: [12, 19, 3, 5, 2, 3, 4, 6],
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
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
      title: {
        display: false,
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
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
      title: {
        display: false,
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
      legend: {
        position: "right",
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: 15,
    },
  },
});
