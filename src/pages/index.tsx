import React, { ReactNode } from 'react';
import PostCard from '../components/SocialsPage/PostCard';
import { Box } from 'grommet';
import AppLayout from '../components/AppLayout';
import { DUMMY_POSTS_LIST } from '../store/constants';
import WithAuth from '../components/WithAuth';

interface NewsFeedProps extends React.FC<Record<string, unknown>> {
  getLayout: React.FC<{ children: ReactNode }>;
}

const NewsFeed: NewsFeedProps = () => {
  return (
    <WithAuth>
      <Box fill height="medium">
        <Box fill pad={{ horizontal: 'xxsmall' }}>
          {DUMMY_POSTS_LIST.map((post, index) => (
            <PostCard key={index} data={post} />
          ))}
        </Box>
      </Box>
    </WithAuth>
  );
};

NewsFeed.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default NewsFeed;
