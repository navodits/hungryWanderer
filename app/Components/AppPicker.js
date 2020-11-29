import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import colors from "../../config/colors";
import Icon from "./Icon";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import CategoryItemPicker from "./CategoryItemPicker";

function AppPicker({
  icon,
  color,
  placeholder,
  items,
  numberOfColumns,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={20}
              name={icon}
              color={colors.lightGrey}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon name="chevron-down" color={color} />
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.modal}>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            ></Button>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <CategoryItemPicker
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 20,
    height: 40,
    margin: 10,
  },
  icon: {
    alignSelf: "center",
    margin: 10,
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: colors.lightGrey,
    width: "100%",
  },
  modal: {
    borderWidth: 5,
    borderColor: colors.darkGrey,
    backgroundColor: colors.grey,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default AppPicker;
