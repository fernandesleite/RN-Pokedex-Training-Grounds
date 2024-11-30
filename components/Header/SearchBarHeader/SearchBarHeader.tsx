import { Text, View, TextInput, Pressable } from "react-native";
import { FilterIcon, SearchIcon, Pokeball } from '@/components/Icons'
import styles from "./styles";

export interface SearchBarHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterVisibility: boolean;
  setFilterVisibility: (filterVisibility: boolean) => void;
}

export function SearchBarHeader({
  searchQuery,
  setSearchQuery,
  filterVisibility,
  setFilterVisibility }: SearchBarHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Pokeball />
        <Text style={styles.titleText}>Pokédex</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchPokemon}
          placeholder="Search"
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery} />
        <SearchIcon style={styles.searchIcon} />
        <View style={styles.filterContainer}>
          <Pressable
            style={styles.filterButton}
            onPress={() => setFilterVisibility(!filterVisibility)}>
            <FilterIcon style={styles.filterIcon} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}