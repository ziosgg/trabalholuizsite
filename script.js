document.addEventListener('DOMContentLoaded', function() {
  const data = [{
    x: ['1 hora', '2 horas', '3 horas', '4 horas', '5 horas', '6 horas', '7 horas ou mais'],
    y: [17, 18, 32, 12, 21, 39, 11],
    type: 'bar',
    marker: {
      color: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f40', '#c9cbcf']
    }
  }];

  const layout = {
    title: 'Tempo de Uso do Celular pelos Alunos',
    xaxis: {
      title: 'Horas de Uso do Celular'
    },
    yaxis: {
      title: 'Número de Alunos'
    }
  };

  Plotly.newPlot('cellphoneUsageChart', data, layout);
});
