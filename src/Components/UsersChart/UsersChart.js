import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

// Firestore
import db from "../../Services/Firebase/firebase.config";
// Utils
import { getChartData } from "../../Utils/utils";

const options = {
    scales: {
        yAxes: [{ ticks: { beginAtZero: true, suggestedMax: 25, stepSize: 5 } }]
    }
};

const UsersChart = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.collection("users").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                setUsers(prev => [...prev, doc.data().signupDate])
            })
        })
    }, []);

    const data = getChartData("users", users);

    return <Line data={data} options={options} />
};

export default UsersChart;