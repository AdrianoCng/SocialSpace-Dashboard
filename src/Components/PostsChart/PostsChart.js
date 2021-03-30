import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Firestore
import db from "../../Services/Firebase/firebase.config";

const options = {
    scales: {
        yAxes: [{ ticks: { beginAtZero: true } }]
    }
};

const PostsChart = () => {
    const [totalComments, setTotalComments] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        db.collection("posts").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                setTotalComments(prev => prev += doc.data().comments)
                setTotalLikes(prev => prev += doc.data().likes)
            })
        })
    }, [])

    const data = {
        labels: ["Total"],
        datasets: [
            {
                label: "Comments",
                barPercentage: 0.5,
                backgroundColor: "#58AC44",
                data: [totalComments]
            },
            {
                label: "Likes",
                barPercentage: 0.5,
                backgroundColor: "#AC6544",
                data: [totalLikes]
            }
        ]
    };

    return <Bar data={data} options={options} />
}

export default PostsChart;