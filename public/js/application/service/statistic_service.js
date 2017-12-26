/**
 * Provides statistics about player usage
 *
 * @constructor
 */
function StatisticService() {
    this.gameRepository = new GameRepository();
    this._chart = null;
}

StatisticService.prototype.generateStatistics = function () {
    var context = document.getElementById("chart").getContext('2d');
    this._chart = new Chart(context, {
        type: 'bar',
        data: {
            labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: 'Attempts',
                data: [1, 3, 2, 5, 9, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    this.update();
};

/**
 * Updates to data in the chart based on data from the server
 *
 * @param event {DocumentEvent=} Event that fires the update
 */
StatisticService.prototype.update = function (event) {
    var _this = this;
    if (event)
        _this = event.data;
    $.when(_this.gameRepository.getAll()).done(function (data, textStatus, jqXHR) {
        _this._chart.data.datasets[0].data[5] = data.length;
        _this._chart.update();
    });
};