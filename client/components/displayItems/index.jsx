import ItemCard from "../itemCard/index";
import manteiga from "../../public/manteiga.png";
import amendoim from "../../public/amendoim.png";
import queijo from "../../public/queijo.png";

import { Grid, Container, Image, Button } from "@nextui-org/react";

export default function displayItems() {
  const items = [
    {
      img: manteiga,
      title: "Manteiga de Coco Sabor Manteiga Com Sal QualiCoco 200g",
      starNum: 4,
      price: 13.99,
    },
    {
      img: amendoim,
      title: "Pasta de Amendoim e Chocolate 70% We Nutz 450g",
      starNum: 5,
      price: 17.99,
    },
    {
      img: queijo,
      title: "Queijo Ralado Parmesão Vegetal Sora 50g",
      starNum: 3,
      price: 8.99,
    },
  ];
  return (
    <Container
      css={{ display: "flex", marginTop: "32px", marginBottom: "32px" }}
    >
      {items.map((item) => (
        <ItemCard
          img={item.img}
          title={item.title}
          starNum={item.starNum}
          price={item.price}
        />
      ))}
    </Container>
  );
}
