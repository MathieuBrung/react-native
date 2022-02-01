import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const App = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    );
}

const Cafe = () => {
    return (
        <>
            <App name="Munkustrap" />
            <App name="Spot" />
        </>
    );
}

export default Cafe;