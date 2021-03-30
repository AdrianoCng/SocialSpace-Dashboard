import React, { useEffect, useState } from "react";
import { Grid } from "gridjs-react";

// Firestore
import db from "../../Services/Firebase/firebase.config";

const UsersTable = () => {
    const [usersTableData, setUsersTableData] = useState([]);

    useEffect(() => {
        db.collection("users").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                setUsersTableData(prev => [...prev, doc.data()])
            })
        });
    }, [])

    return (
        <Grid
            columns={["Full Name", "Email", "Signup Date"]}
            sort
            search
            data={usersTableData}
            pagination={{ limit: 10 }}
            className={{ paginationSummary: "d-none d-sm-inline" }}
        />
    )
}

export default UsersTable;