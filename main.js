import "https://cdn.jsdelivr.net/npm/chart.js";

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const trendChart = document.getElementById("trendChart");
// const data = [{x:"2月",y:28}]

new Chart(trendChart, {
  type: "line",
  data: {
    labels: ["2月", "3月", "4月", "5月", "6月", "7月"],
    datasets: [
      {
        label: "",
        data: [27, 28, 29, 28, 32, 31],
        fill: false,
        borderColor: "#f37998",
        tension: 0.1,
        pointStyle: "circle",
        pointRadius: 7,
        backgroundColor: "#f37998",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        position: "right",
        suggestedMax: 45
      },
      x: {
        border: {
          display: false,
        },
      },
    },
  },
});
