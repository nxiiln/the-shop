import styled from 'styled-components/macro';


const Wrapper = styled.article<{gridArea: string}>`
  width: 275px;
  height: max-content;
  padding-bottom: 20px;
  grid-area: ${props => props.gridArea};
  justify-self: end;
  border: 1px solid var(--color-border);
`;

const Title = styled.h2`
  margin: 20px 0 0 20px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const LabelsWrapper = styled.div`
  width: 240px;
  margin: 20px 0 0 20px;
`;

const Label = styled.span<{fontSize: string}>`
  font-family: var(--font-regular);
  font-size: ${props => props.fontSize};
  line-height: 24px;
  font-weight: 400;
  color: var(--color-text-main);
  cursor: pointer;

  &:hover {text-decoration: underline}
`;


const labels: {fontSize: string, label: string}[] = [
  {fontSize: '10px', label: 'ALAÏA ALEXA '},
  {fontSize: '14px', label: 'CHUNG ALEXANDER '},
  {fontSize: '10px', label: 'WANG BAGS '},
  {fontSize: '18px', label: 'BALENCIAGA '},
  {fontSize: '10px', label: 'BASICS BEAUTY BELTS '},
  {fontSize: '12px', label: 'BLOGGERS BOOTS '},
  {fontSize: '10px', label: 'BRACELETS '},
  {fontSize: '18px', label: 'BRIGHTS BURBERRY '},
  {fontSize: '10px', label: 'BUTTON CAROLINE ISSA '},
  {fontSize: '14px', label: 'CAROLINE '},
  {fontSize: '14px', label: 'CLASSIC CLUTCH '},
  {fontSize: '10px', label: 'CÉLINE '},
  {fontSize: '10px', label: 'DARIA "DASHA" ZHUKOVA '},
  {fontSize: '10px', label: 'DIANE KRUGER DRESS '},
  {fontSize: '14px', label: 'EARRINGS EDITOR '},
  {fontSize: '10px', label: 'STYLE EDITORIALS '},
  {fontSize: '10px', label: 'ELIZABETH + '},
  {fontSize: '10px', label: 'JAMES FLORAL '},
  {fontSize: '10px', label: 'FUR GAIA '},
  {fontSize: '24px', label: 'REPOSSI GIORGIA '},
  {fontSize: '10px', label: 'TORDINI GIOVANNA BATTA-GLIA '},
  {fontSize: '12px', label: 'GIUSEPPE ZANOTTI '},
  {fontSize: '10px', label: 'GIVENCHY '},
  {fontSize: '10px', label: 'GUCCI '},
  {fontSize: '10px', label: 'GUINEVERE VAN '},
  {fontSize: '14px', label: 'SEENUS '},
  {fontSize: '10px', label: 'GWEN STEFANI '},
  {fontSize: '14px', label: 'GÉRALDINE SAGLIO '},
  {fontSize: '10px', label: 'HATS HEELS HOME '},
  {fontSize: '10px', label: 'DESIGN INSPIRATION '},
  {fontSize: '14px', label: 'ISABEL '},
  {fontSize: '10px', label: 'MARANT JACKET/COAT KATE MOSS '},
  {fontSize: '10px', label: 'KATE MOSS '},
  {fontSize: '12px', label: 'ARKUS LUPFER '},
  {fontSize: '10px', label: 'METALLICS MIRANDA '},
  {fontSize: '18px', label: 'KERR '},
  {fontSize: '10px', label: 'MIROSLAV '},
  {fontSize: '10px', label: 'PLAT '},
  {fontSize: '24px', label: 'SCHOULER '},
  {fontSize: '10px', label: 'PYTHON RINGS '},
  {fontSize: '10px', label: 'SNEAKERS '},
  {fontSize: '10px', label: 'STREET STYLE '},
  {fontSize: '14px', label: 'SUNGLASSES SWEATER '},
  {fontSize: '10px', label: 'TEXTILE ELIZABETH '},
  {fontSize: '12px', label: '+ JAMES '},
  {fontSize: '10px', label: 'THE ROW '},
  {fontSize: '12px', label: 'THEORY '},
  {fontSize: '10px', label: 'THEYSKENS THEORY '},
  {fontSize: '10px', label: 'TOPS VEST '},
];


const BlogLabels = ({gridArea}: {gridArea: string}): JSX.Element => (
  <Wrapper gridArea={gridArea}>
    <Title>LABELS</Title>
    <LabelsWrapper>
      {labels.map((label: {fontSize: string, label: string}): JSX.Element =>
        <Label key={label.label} fontSize={label.fontSize}>{label.label}</Label>
      )}
    </LabelsWrapper>
  </Wrapper>
);


export default BlogLabels;
