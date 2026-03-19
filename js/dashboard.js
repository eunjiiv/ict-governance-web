document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cybercrime Cases', 'Active Projects', 'Free Wi-Fi Points'],
            datasets: [{
                label: 'National ICT Statistics (2026)',
                data: [15420, 42, 12800],
                backgroundColor: [
                    'rgba(0, 51, 102, 0.8)',  
                    'rgba(0, 89, 179, 0.8)',  
                    'rgba(0, 128, 255, 0.8)'  
                ],
                borderColor: [
                    '#003366',
                    '#0059b3',
                    '#0080ff'
                ],
                borderWidth: 1,
                hoverBackgroundColor: '#f0ad4e', 
                hoverBorderColor: '#333'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,      
                easing: 'easeOutQuart' 
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.05)' 
                    }
                },
                x: {
                    grid: {
                        display: false 
                    }
                }
            }
        }
    });
});
