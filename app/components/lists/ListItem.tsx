import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";
import AppText from "../AppText";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

interface IListItemProps {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: () => JSX.Element;
  IconComponent?: JSX.Element;
}

function ListItem({
  title,
  subTitle = undefined,
  image = undefined,
  IconComponent = undefined,
  onPress = undefined,
  renderRightActions = undefined,
}: IListItemProps) {
  return (
    // android needs to wrap the gesture handler in a gesture handler root view
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
