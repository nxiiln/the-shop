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

const BreadCrumbsLeft = styled.div`
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

const BreadCrumbsRight = styled(BreadCrumbsLeft)`
  &:hover {text-decoration: underline}

  > a {margin: 0}

  > span {
    &:hover {cursor: pointer}
  }
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
      <BreadCrumbsLeft>{props.link}</BreadCrumbsLeft>
      <BreadCrumbsRight>
        <span>❮</span>
        <a href={props.return}>Return to Previous Page</a>
      </BreadCrumbsRight>
    </BreadCrumbsWrapper>
  </Wrapper>
);


export default BreadCrumbs;
