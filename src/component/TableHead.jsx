import React from 'react';

export const TableHead = () => {
    return (<thead style={{ border: "1px solid", fontWeight: "bold" }}>
        <tr>
            <th> Name</th>
            <th>Created At</th>
            <th>Update At</th>
            <th>Description</th>
            <th>Download</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>);
}