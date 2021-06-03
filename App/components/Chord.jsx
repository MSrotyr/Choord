import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Number from "./Number";
import X from "./X";
import O from "./O";
import FretNumber from "./FretNumber";
import Barre from "./Barre";
import { mintcream } from "../colours";

const padding = 9;
const paddingLeft = 24;
const margin = 8.2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: mintcream,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  topBar: {
    backgroundColor: "black",
    position: "absolute",
  },
  line: {
    backgroundColor: "black",
    position: "absolute",
  },
});

function extraIconFunc(data, scale) {
  const finished = [];
  const components = [];
  for (let i = 0; i < 6; i++) {
    if (finished.includes(data.fingers[i])) continue;

    const restRev = data.fingers.slice(i + 1).reverse();
    const lastIndex = 6 - 1 - restRev.indexOf(data.fingers[i]);

    if (data.frets[i] === -1)
      components.push(<X scale={scale} key={i} stringNum={i} />);
    else if (data.frets[i] === 0)
      components.push(<O scale={scale} key={i} stringNum={i} />);
    else if (lastIndex !== 6) {
      // barre chord
      components.push(
        <Barre
          scale={scale}
          startStringNum={i}
          endStringNum={lastIndex}
          fretNum={data.frets[i] - 1}
          fingerNum={data.fingers[i]}
          key={i}
        />
      );
      finished.push(data.fingers[i]);
    } else {
      components.push(
        <Number
          scale={scale}
          key={i}
          stringNum={i}
          fretNum={data.frets[i] - 1}
          fingerNum={data.fingers[i]}
        />
      );
    }
  }
  components.push(
    <FretNumber scale={scale} key="key" fretNum={data.baseFret} />
  );
  return components;
}

function topBar(scale) {
  return (
    <View
      style={[
        styles.topBar,
        {
          width: 102 * scale,
          height: 7 * scale,
        },
      ]}
    />
  );
}

function horizontalLines(scale) {
  const ysep = 30 * scale;
  const startY = 34 * scale;
  const components = [];
  for (let i = 0; i < 4; i++) {
    components.push(
      <View
        key={i}
        style={[
          styles.line,
          {
            top: startY + ysep * i,
            width: 102 * scale,
            height: 3 * scale,
          },
        ]}
      />
    );
  }
  return components;
}

function verticalLines(scale) {
  const xsep = 20 * scale;
  const components = [];
  for (let i = 0; i < 6; i++) {
    components.push(
      <View
        key={i}
        style={[
          styles.line,
          {
            left: xsep * i,
            width: 2 * scale,
            height: 127 * scale,
          },
        ]}
      />
    );
  }
  return components;
}

function genChord(chordData, scale, title) {
  return (
    <View>
      <Text style={{ fontSize: 16 * scale, marginBottom: 14 * scale }}>
        {title}
      </Text>
      <View>
        {topBar(scale)}
        {horizontalLines(scale)}
        {verticalLines(scale)}
        {extraIconFunc(chordData, scale)}
        <View style={{ width: 102 * scale, height: 127 * scale }} />
      </View>
    </View>
  );
}

export default function Chord({ chordData, scale, goToChord, isButton }) {
  let title;
  if (chordData.suffix === "major" || chordData.suffix === "minor") {
    title = `${chordData.key} ${chordData.suffix}`;
  } else title = chordData.key + chordData.suffix;
  if (isButton) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (goToChord) {
            goToChord(chordData, title);
          }
        }}
        style={[
          styles.container,
          {
            margin: margin * scale,
            padding: padding * scale,
            paddingLeft: paddingLeft * scale,
          },
        ]}
      >
        {genChord(chordData, scale, title)}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        styles.container,
        {
          margin: margin * scale,
          padding: padding * scale,
          paddingLeft: paddingLeft * scale,
        },
      ]}
    >
      {genChord(chordData, scale, title)}
    </View>
  );
}
