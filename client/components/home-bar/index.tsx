import { Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Label = ({ children }: { children: string }) => (
  <Text
    css={{
      fontFamily: "$title",
      fontWeight: 700,
      fontSize: 24,
      color: "#A1DA74",
    }}
  >
    {children}
  </Text>
);

type BarItem = {
  image: string;
  w: number;
  h: number;
  label: string;
  alt: string;
};

const barItems: BarItem[] = [
  {
    image: "/graph.png",
    h: 90,
    w: 90,
    label: "Os menores preços do mercado",
    alt: "Icone de Gráfico",
  },
  {
    image: "/graph.png",
    h: 90,
    w: 90,
    label: "Os menores preços do mercado",
    alt: "Icone de Gráfico",
  },
  {
    image: "/graph.png",
    h: 90,
    w: 90,
    label: "Os menores preços do mercado",
    alt: "Icone de Gráfico",
  },
];

export const HomeBar = () => (
  <Container
    css={{
      backgroundColor: "$green",
      width: "100%",
    }}
    alignItems="center"
    justify="center"
  >
    <Grid.Container
      justify="center"
      alignContent="center"
      alignItems="center"
      gap={10}
      wrap="nowrap"
    >
      {barItems.map(({ label, h, w, image, alt }) => (
        <Grid
          direction="column"
          alignItems="center"
          css={{ display: "flex" }}
          key={alt}
        >
          <Image src={image} width={w} height={h} alt={alt} layout="fixed" />
          <Label>{label}</Label>
        </Grid>
      ))}
    </Grid.Container>
  </Container>
);
