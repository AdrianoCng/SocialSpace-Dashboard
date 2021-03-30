const getChartData = (chart, entries) => {
    // sort dates from oldest to newest
    const daysSorted = entries.sort((a, b) => {
        a = a.split("/").reverse().join("");
        b = b.split("/").reverse().join("");

        return a.localeCompare(b);
    });

    // filter sorted array to contain only unique elements
    const labels = daysSorted.filter((day, index, arr) => arr.indexOf(day) === index);

    const data = {
        labels
    };

    // fill the data object with the relevant info based on the chart type
    // data.datasets[0].data[] must have the same length as labels[] and every index must be filled with a value 0 so we can increment it when we loop through
    if (chart === "signup") {
        data.datasets = [
            {
                label: "Sign up",
                backgroundColor: "#448CAC",
                hoverBackgroundColor: "#62A3C1",
                data: new Array(labels.length).fill(0)
            }
        ];

        // Since every index in data[] corresponds the same index in labels[] we can
        // 1. loop through our sorted entries
        // 2. for every entry find his index in labels[]
        // 3. increment the value at data[index]
        daysSorted.forEach(day => {
            const index = labels.indexOf(day);

            data.datasets[0].data[index] += 1;
        });
    } else if (chart === "users") {
        data.datasets = [
            {
                label: 'Total Users',
                fill: true,
                backgroundColor: 'rgba(68,140,172, 0.6)',
                borderColor: 'rgb(68,140,172)',
                lineTension: 0,
                pointBorderColor: 'rgba(220,220,220,1)',
                pointBackgroundColor: '#AC6444',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#AC6444',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 2.5,
                pointHitRadius: 10,
                data: new Array(labels.length).fill(0)
            }
        ];

        daysSorted.forEach((user, index) => {
            const labelIndex = labels.indexOf(user);

            // index + 1 to get daysSorted[] length at this time in the loop which give us the total of users untill that day
            data.datasets[0].data[labelIndex] = index + 1;
        });
    }

    return data;
};

export { getChartData };