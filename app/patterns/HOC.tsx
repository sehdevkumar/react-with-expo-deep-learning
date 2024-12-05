import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// Define props interface for the HOC
interface WithLoadingProps {
    isLoading: boolean;
}

// Updated HOC implementation
export const withLoading = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    // Use a more precise type definition
    return (props: P & WithLoadingProps) => {
        const { isLoading, ...otherProps } = props;

        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                    <Text style={{ marginTop: 10, color: '#FFFFFF' }}>Loading...</Text>
                </View>
            );
        }

        // Type-safe spread of props
        return <WrappedComponent {...otherProps as P} />;
    };
};
// Example component that will be wrapped
interface UserProfileProps {
    username: string;
    email: string;
}

export const UserProfile = ({ username, email }: UserProfileProps) => {
    return (
        <View style={{ padding: 20, backgroundColor: '#000000' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' }}>User Profile</Text>
            <Text style={{ color: '#FFFFFF' }}>Username: {username}</Text>
            <Text style={{ color: '#FFFFFF' }}>Email: {email}</Text>
        </View>
    );
};

// Create an enhanced component with loading functionality
export const UserProfileWithLoading = withLoading(UserProfile);