import React from 'react';
import styled from 'styled-components/macro';


const BlogLabelsWrapper = styled.article`
  width: 276px;
  height: 609px;
  position: absolute;
  top: 280px;
  left: 71.3%;
  border: 1px solid #e4e2e1;
`;

const Labels = styled.h2`
  margin: 20px 0 0 20px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
`;

const LabelsWrapper = styled.div`
  width: 239px;
  height: 525px;
  margin: 20px 0 0 20px;
`;

const Label = styled.span<{size: string}>`
  font-family: Tahoma;
  font-size: ${props => props.size};
  line-height: 24px;
  font-weight: 400;
  color: #000;
`;


const BlogLabels = (): JSX.Element => {
  return(
    <BlogLabelsWrapper>
      <Labels>LABELS</Labels>
      <LabelsWrapper>
        <Label size='10px'>ALAÏA ALEXA </Label>
        <Label size='14px'>CHUNG ALEXANDER </Label>
        <Label size='10px'>WANG BAGS </Label>
        <Label size='18px'>BALENCIAGA </Label>
        <Label size='10px'>BASICS BEAUTY BELTS </Label>
        <Label size='12px'>BLOGGERS BOOTS </Label>
        <Label size='10px'>BRACELETS </Label>
        <Label size='18px'>BRIGHTS BURBERRY </Label>
        <Label size='10px'>BUTTON CAROLINE ISSA </Label>
        <Label size='14px'>CAROLINE </Label>
        <Label size='10px'>CAROLINE </Label>
        <Label size='14px'>CLASSIC CLUTCH </Label>
        <Label size='10px'>CÉLINE </Label>
        <Label size='10px'>DARIA "DASHA" ZHUKOVA </Label>
        <Label size='10px'>DIANE KRUGER DRESS </Label>
        <Label size='14px'>EARRINGS EDITOR </Label>
        <Label size='10px'>STYLE EDITORIALS </Label>
        <Label size='10px'>ELIZABETH + </Label>
        <Label size='10px'>JAMES FLORAL </Label>
        <Label size='10px'>FUR GAIA </Label>
        <Label size='24px'>REPOSSI GIORGIA </Label>
        <Label size='10px'>TORDINI GIOVANNA BATTA-GLIA </Label>
        <Label size='12px'>GIUSEPPE ZANOTTI </Label>
        <Label size='10px'>GIVENCHY </Label>
        <Label size='10px'>GUCCI </Label>
        <Label size='10px'>GUINEVERE VAN </Label>
        <Label size='14px'>SEENUS </Label>
        <Label size='10px'>GWEN STEFANI </Label>
        <Label size='14px'>GÉRALDINE SAGLIO </Label>
        <Label size='10px'>HATS HEELS HOME </Label>
        <Label size='10px'>DESIGN INSPIRATION </Label>
        <Label size='14px'>ISABEL </Label>
        <Label size='10px'>MARANT JACKET/COAT KATE MOSS </Label>
        <Label size='10px'>KATE MOSS </Label>
        <Label size='12px'>ARKUS LUPFER </Label>
        <Label size='10px'>METALLICS MIRANDA </Label>
        <Label size='18px'>KERR </Label>
        <Label size='10px'>MIROSLAV </Label>
        <Label size='10px'>PLAT </Label>
        <Label size='24px'>SCHOULER </Label>
        <Label size='10px'>PYTHON RINGS </Label>
        <Label size='10px'>SNEAKERS </Label>
        <Label size='10px'>STREET STYLE </Label>
        <Label size='14px'>SUNGLASSES SWEATER </Label>
        <Label size='10px'>TEXTILE ELIZABETH </Label>
        <Label size='12px'>+ JAMES </Label>
        <Label size='10px'>THE ROW </Label>
        <Label size='12px'>THEORY </Label>
        <Label size='10px'>THEYSKENS' THEORY </Label>
        <Label size='10px'>TOPS VEST </Label>
      </LabelsWrapper>
    </BlogLabelsWrapper>
  );
}


export default BlogLabels;
