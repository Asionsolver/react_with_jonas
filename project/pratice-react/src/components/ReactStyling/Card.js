import React from "react";
import {  H1, P, Tag, Image } from "./styles/Elements";
import { CardContainer, ContentContainer, ButtonContainer} from "./styles/Container.styles";
import Button from "./Button";
import nerdImage from '../../assets/images/illustration.png'
import { StyleTitle } from "./styles/Custom.styles";


export default function Card() {
  return (
   
      <CardContainer>
        <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1><StyleTitle text='React Styled Components' color='#e1a63a'/></H1>
        <P color="#d1cccc">Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.</P>

        <ButtonContainer className="buttons">
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>

        <Image src={nerdImage} alt="Nerd" width="300px" />
        </ContentContainer>
      </CardContainer>
   
  );
}
