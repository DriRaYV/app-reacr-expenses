import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
`;

const Head = styled.thead`
  background: #1d3b2e;
  font-weight: bold;
  color: #fff;
`;

const Body = styled.tbody``;

const Row = styled.tr`
  & {
    border: 0.1rem solid #000;
  }
  &:nth-child(2n) {
    background-color: #323232;
  }
`;
const Data = styled.td`
  padding: 1rem 0;
  border: 0.1rem solid #000;
`;
const Col = styled.th`
  padding: 1rem 0;
  border: 0.1rem solid #000;
`;

export { Table, Col, Row, Data, Box, Head, Body };
