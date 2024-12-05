import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { UserProfileWithLoading } from './HOC';
import { AdminProtectedHOC, GuestProtectedHOC, UserProtectedHOC } from './ProtectedHOC';

export default function PatternsScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        username: 'john_doe',
        email: 'john@example.com'
    });

    // Simulate loading data
    const loadData = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setUserData({
                username: 'jane_doe',
                email: 'jane@example.com'
            });
            setIsLoading(false);
        }, 2000);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Using our HOC-wrapped component */}
            <UserProfileWithLoading
                username={userData.username}
                email={userData.email}
                isLoading={isLoading}
            />

            <AdminProtectedHOC roles={["admin", "guest" , "user"]} />
            <GuestProtectedHOC roles={["guest" , "user"]} />
            <UserProtectedHOC roles={[""]} />
            <Button
                title="Reload Data"
                onPress={loadData}
            />
        </View>
    );
}