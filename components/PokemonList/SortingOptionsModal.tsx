import { View, Modal } from "react-native";
import styles from "./style";
import { PokedexLayoutWrapper } from "../Layout";
import RadioGroup from 'react-native-radio-buttons-group'
import { GenericHeader } from "../Header";
import { useMemo } from "react";
import { Colors } from "@/utils/constants";

interface SortingOptionsProps {
  filterVisibility: boolean;
  setFilterVisibility: (filterVisibility: boolean) => void;
  selectedSort: string | undefined;
  setSelectedSort: (selectedSort: string) => void;
}

export const SortingOptionsModal = ({
  filterVisibility,
  setFilterVisibility,
  selectedSort,
  setSelectedSort }: SortingOptionsProps) => {

  const sortingOptions = useMemo(() => ([
    {
      id: '1',
      label: 'id',
      value: "ID",
      labelStyle: styles.radiobutton,
      borderColor: Colors.redpokedex,
      color: Colors.redpokedex,
      containerStyle: styles.radioButtonContainer,
    },
    {
      id: '2',
      label: 'Name',
      value: "NAME",
      labelStyle: styles.radiobutton,
      borderColor: Colors.redpokedex,
      color: Colors.redpokedex,
      containerStyle: styles.radioButtonContainer,
    }
  ]), [])

  return (
    <Modal transparent={true}
      visible={filterVisibility}
      onRequestClose={() => setFilterVisibility(false)}>
      <View style={styles.modal} >
        <PokedexLayoutWrapper
          Header={GenericHeader}
          headerProps={{ title: "Sort by" }}>
          <RadioGroup
            containerStyle={styles.radioGroupContainer}
            layout={"column"}
            radioButtons={sortingOptions}
            selectedId={selectedSort}
            onPress={(selectedSort) => {
              setSelectedSort(selectedSort);
              setFilterVisibility(false)
            }} />
        </PokedexLayoutWrapper>
      </View>
    </Modal>
  )
}