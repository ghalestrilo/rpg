import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import {
  List,
  ListItem
} from "react-native-elements";
import Modal from "react-native-modal";
import { colors } from "../styles";

const style = StyleSheet.create({
  picker: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "lightgray"
  },

  pickerTitle: {
    padding: 12,
    color: colors.darkgray,
    fontSize: 24
  }
});

export const PickerModal = ({
  visible, options, pick, title,
  disableItem, badgeLogic,
  reindexed, pickValue
}) =>
  <Modal style={style.picker} isVisible={visible}>
    <Picker
      options={options}
      pick={pick}
      title={title}
      reindexed={reindexed}
      pickValue={pickValue}
      disableItem={disableItem}
      badgeLogic={badgeLogic || (() => null)}
    />
  </Modal>;

export const Picker = ({
  options, pick, title,
  disableItem, badgeLogic,
  reindexed, pickValue
}) =>
  <ScrollView style={style.picker} style={{ flex: 1 }}>
    <Text style={style.pickerTitle}>{title}</Text>
    <List>
      {
        options.map((option, index) =>
          <ListItem
            key={`${option.name}_${index}`}
            title={option.name}
            disabled={disableItem && disableItem(option)}
            onPress={() =>
              (pickValue === true
                ? pick(option)
                : pick(reindexed === true ? option.index : index))
            }
            badge={badgeLogic ? badgeLogic(option) : false}
            avatar={option.avatar}
            hideChevron
          />
        )
      }
    </List>
  </ScrollView>;
