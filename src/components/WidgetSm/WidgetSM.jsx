import React from 'react';
import './WidgetSm.css'; 

const users = [
    { id: 1, name: 'John Doe', lastVisit: '2024-5-01 14:30' },
    { id: 2, name: 'Jane Smith', lastVisit: '2023-10-01 13:20' },
    { id: 3, name: 'Alice Johnson', lastVisit: '2022-8-01 12:15' },
    { id: 4, name: 'Bob Brown', lastVisit: '2023-9-01 11:00' },
    { id: 5, name: 'Charlie Davis', lastVisit: '2023-09-30 16:45' },
    { id: 6, name: 'Diana Prince', lastVisit: '2022-09-20 15:30' },
];

const Widget = () => {
    return (
        <div className="widget">
            <h2>Added User Recently</h2>
            <div className="user-list">
                {users.map(user => (
                    <div className="user-item" key={user.id}>
                        <div className="user-info">
                            <p className="user-name">{user.name}</p>
                            <p className="last-visit">{user.lastVisit}</p>
                        </div>
                        <button className="view-button" onClick={() => handleViewUser(user.id)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Widget;