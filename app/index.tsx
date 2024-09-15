import PasswordGenerator from "@/components/PasswordGenerator";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, 
      padding : 20,
      backgroundColor : "#3B3B98"  
    }}>
      <PasswordGenerator />
    </SafeAreaView>
  );
}
