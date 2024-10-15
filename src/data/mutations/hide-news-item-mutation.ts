import { gql } from '@apollo/client';

export const HIDE_NEWS_ITEM_MUTATION = gql`
  mutation HideNewsItem($id: Int!) {
    hideNewsItem(id: $id) {
      id
      hidden
    }
  }
`;
