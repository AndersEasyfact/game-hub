import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xlarge">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
