import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { celadon, honey, prussian, raspberry } from "../colours";

const startX = -2.5;
const startY = 12;

const xSep = 20;
const ySep = 30;

const initWidth = 27;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    color: "white",
    zIndex: 1,
  },
  text: {
    color: "white",
  },
});

export default function Barre({
  fingerNum,
  fretNum,
  startStringNum,
  endStringNum,
  scale,
}) {
  const width = endStringNum - startStringNum;
  let color;
  if (fingerNum === 1) color = raspberry;
  if (fingerNum === 2) color = prussian;
  if (fingerNum === 3) color = celadon;
  if (fingerNum === 4) color = honey;
  return (
    <View
      style={[
        styles.background,
        {
          height: scale * 17,
          width: scale * (initWidth + xSep * (width - 1)),
          backgroundColor: color,
          position: "absolute",
          top: scale * (startY + ySep * fretNum),
          left: scale * (startX + xSep * startStringNum),
        },
      ]}
    >
      <Text style={[styles.text, { fontSize: 14 * scale }]}>{fingerNum}</Text>
    </View>
  );
}
