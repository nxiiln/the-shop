import styled from 'styled-components/macro';


const Wrapper = styled.article<{gridArea?: string}>`
  grid-area: ${props => props.gridArea};
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: var(--color-border);
`;

const BreadCrumbsWrapper = styled.div<{marginBottom?: string}>`
  width: 100%;
  margin-bottom: ${props => props.marginBottom};
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const BreadCrumbsLink = styled.div`
  font-family: var(--font-regular);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-regular);
  user-select: none;

  > a {
    margin-right: 5px;
    font-family: var(--font-regular);
    font-size: 10px;
    font-weight: 400;
    color: var(--color-text-regular);
    text-decoration: none;
    
    &:hover {text-decoration: underline}
  }

  > span {margin-right: 5px}
`;


interface Props {
  link: JSX.Element;
  return: string;
  marginBottom?: string;
  gridArea?: string;
}

const BreadCrumbs = (props: Props): JSX.Element => (
  <Wrapper gridArea={props.gridArea}>
    <Line />
    <BreadCrumbsWrapper
      marginBottom={props.marginBottom}
    >
      <BreadCrumbsLink>{props.link}</BreadCrumbsLink>
    </BreadCrumbsWrapper>
  </Wrapper>
);


export default BreadCrumbs;
