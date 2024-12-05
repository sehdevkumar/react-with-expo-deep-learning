import { Text, View } from "react-native";

export type WithRolesProps = {
        roles: Array<"admin" | "user" | "guest" | "">;
    };
const withProtectedHOC = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P & WithRolesProps) => {   
        // Add your authentication logic here       
    const {roles} = props;
    
    if(roles.includes('admin') || roles.includes('user') || roles.includes('guest')){
        return <Component {...props} />;
    }
     return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Access Denied {Component.name}</Text>
      </View>
    );
};
};  

export default withProtectedHOC;

const AdminCard = () => (
  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Admin</Text>
  </View>
);

const UserCard = () => (
  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User</Text>
  </View>
);

const GuestCard = () => (
  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Guest</Text>
  </View>
);

const AdminProtectedHOC = withProtectedHOC(AdminCard);
const UserProtectedHOC = withProtectedHOC(UserCard);
const GuestProtectedHOC = withProtectedHOC(GuestCard);


export { AdminProtectedHOC, UserProtectedHOC, GuestProtectedHOC };