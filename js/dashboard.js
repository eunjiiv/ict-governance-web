document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cybercrime', 'Active Projects', 'Free Wi-Fi'],
            datasets: [{
                label: 'National ICT Stats',
                data: [15420, 42, 12800],
                backgroundColor: ['#003366', '#004080', '#0059b3']
            }]
        }
    });
});
