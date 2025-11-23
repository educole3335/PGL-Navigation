import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

type Player = {
  id: string;
  name: string;
  category: string;
  price: number;
  marked: boolean;
  team?: string;
};

const DEFAULT_PLAYERS: Player[] = [
  {
    id: "1",
    name: "Lionel Messi",
    category: "del",
    price: 120000000,
    marked: false,
    team: "Inter Miami",
  },
  {
    id: "2",
    name: "Kevin De Bruyne",
    category: "mc",
    price: 90000000,
    marked: true,
    team: "Manchester City",
  },
  {
    id: "3",
    name: "Virgil van Dijk",
    category: "def",
    price: 75000000,
    marked: false,
    team: "Liverpool",
  },
  {
    id: "4",
    name: "Thibaut Courtois",
    category: "gk",
    price: 50000000,
    marked: false,
    team: "Real Madrid",
  },
];

export default function MyList() {
  const [players, setPlayers] = useState<Player[]>(DEFAULT_PLAYERS);

  const totals = useMemo(() => {
    const totalCount = players.length;
    const marked = players.filter((p) => p.marked);
    const markedCount = marked.length;
    const markedSum = marked.reduce((s, p) => s + Number(p.price || 0), 0);
    return { totalCount, markedCount, markedSum };
  }, [players]);

  function toggle(id: string) {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, marked: !p.marked } : p))
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My List - Football (reciclada)</Text>

      <View style={styles.counters}>
        <Text>Total jugadores: {totals.totalCount}</Text>
        <Text>Seleccionados: {totals.markedCount}</Text>
        <Text>Valor total: €{totals.markedSum.toFixed(2)}</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>
                {item.team} • €{item.price}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.btn, item.marked && styles.btnMarked]}
              onPress={() => toggle(item.id)}
            >
              <Text style={styles.btnText}>{item.marked ? "✓" : "Marcar"}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  counters: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginBottom: 12,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: { fontWeight: "600" },
  meta: { color: "#666" },
  btn: {
    backgroundColor: "#2196f3",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnMarked: { backgroundColor: "#4caf50" },
  btnText: { color: "#fff", fontWeight: "700" },
});
