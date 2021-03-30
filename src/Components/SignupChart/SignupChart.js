import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Firestore
import db from "../../Services/Firebase/firebase.config";
// Utils
import { getChartData } from "../../Utils/utils";

const options = {
    scales: {
        yAxes: [{ ticks: { beginAtZero: true, suggestedMax: 5, stepSize: 1 } }]
    }
};

const SignupChart = () => {
    const [signupDates, setSignupDates] = useState([]);

    useEffect(() => {
        db.collection("users").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                setSignupDates(prev => [...prev, doc.data().signupDate]);
            })
        })
    }, []);

    const data = getChartData("signup", signupDates);

    return <Bar data={data} options={options} />
}

export default SignupChart;