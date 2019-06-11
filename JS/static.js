console.group('currency');
                var formatter = new Intl.NumberFormat('en-US', 
                {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
                useGrouping: true,
                }).format(result2);