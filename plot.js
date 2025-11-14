const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["RED", "YELLOW", "BLUE"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "right",
      labels: { font: { size: 14, weight: "bold" }, color: "#333" },
    },
    plugins: {
      title: {
        display: true,
        text: "Custom Chart Subtitle",
      },
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
      datalabels: {
        color: "#fff", // màu chữ
        font: {
          size: 16, // cỡ chữ
          weight: "bold", // in đậm
          family: "Arial, sans-serif", // font chữ
        },
        formatter: (value, context) => {
          let total = 0;
          context.chart.data.datasets[0].data.forEach((item) => {
            total += item;
          });

          let percent = ((value / total) * 100).toFixed(1) + "%";
          return percent;
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
