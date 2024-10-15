import { gql } from '@apollo/client';

export interface IMeQuery {
  me: {
    id: string;
    karma: number;
  };
}

export const ME_QUERY = gql`
  query User {
    me {
      id
      karma
    }
  }
`;
