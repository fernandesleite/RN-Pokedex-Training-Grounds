import { Text, View, TextInput, Pressable } from "react-native";
import { FilterIcon, SearchIcon, Pokeball } from '@/components/Icons'
import styles from "./styles";

export function SearchBarHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.title}>
          <Pokeball/>
          <Text style={styles.titleText}>Pokédex</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchPokemon} placeholder="Search"/>
          <SearchIcon style={styles.searchIcon} />
          <View style={styles.filterContainer}>
            <Pressable style={styles.filterButton}></Pressable>
            <FilterIcon style={styles.filterIcon}/>
          </View>
        </View>
      </View>
    )
  }