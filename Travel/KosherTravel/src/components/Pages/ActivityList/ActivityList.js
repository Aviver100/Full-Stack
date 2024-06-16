import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const activities = await getActivities();
                setActivities(activities);
            } catch (error) {
                console.error('Error fetching activities', error);
            }
        };

        fetchActivities();
    }, []);

    return (
        <div>
            <h1>Activities</h1>
            <ul>
                {activities.map(activity => (
                    <li key={activity._id}>{activity.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;
