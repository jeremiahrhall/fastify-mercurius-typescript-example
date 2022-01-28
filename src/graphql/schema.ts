// Using this fake "gql" gives tooling support for
// "prettier formatting" and "IDE syntax highlighting".
// It's optional and does no special transform.
function gql(chunks: TemplateStringsArray, ...variables: any[]) {
  return chunks.reduce(
    (accumulator, chunk, index) => `${accumulator}${chunk}${index in variables ? variables[index] : ''}`,
    ''
  );
}
export const schema = gql`
  type Query {
    hello(name: String!): HelloResponse!
  }

  type HelloResponse {
    message: String!
    anotherField: String
  }
`;
