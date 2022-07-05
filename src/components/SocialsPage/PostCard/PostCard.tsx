import React from 'react';
import { Box, Text, Card } from 'grommet';
import PostHeader from './PostHeader';
import styled from 'styled-components';

export const StyledPostCardWithShadow = styled(Card)`
  box-shadow: 0 5px 10px rgba(58, 89, 124, 0.1);
`;

type Post = {
  id: number;
  lang: string;
  text: string;
  url: string;
  userId: number;
  link: string;
  favoriteCount: number;
  commentCount: number;
  createAt: string;
};

interface IProps {
  data: Post;
  showActionPanel?: boolean;
}

const PostCard: React.FC<IProps> = ({ data, showActionPanel = true }) => {
  return (
    <StyledPostCardWithShadow
      round="xsmall"
      pad="small"
      gap="small"
      margin={{ vertical: 'small' }}
      height={{ min: 'xsmall' }}
    >
      <PostHeader
        favoriteCount={data.favoriteCount}
        commentCount={data.commentCount}
        createAt={data.createAt}
        showActionPanel={showActionPanel}
      />
      <Box>
        <Text>{data.text}</Text>
      </Box>
    </StyledPostCardWithShadow>
  );
};

export default PostCard;
