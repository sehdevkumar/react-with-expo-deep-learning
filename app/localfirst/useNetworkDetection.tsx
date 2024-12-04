import { useEffect } from "react";
import { addNetworkStateListener, useNetworkState } from "expo-network";

const useNetworkDetection = (cb : (type: any, isConnected: any, isInternetReachable: any ) => void) => {
    useEffect (() => {    
        const subscription = addNetworkStateListener(({ type, isConnected, isInternetReachable }) => {
            cb(type, isConnected, isInternetReachable);
          });
          return  () => {   
            subscription.remove();
          }
    }, [cb])      
};


export default useNetworkDetection

