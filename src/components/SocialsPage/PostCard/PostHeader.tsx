import React from 'react';
import { Avatar, Box, Button, Text } from 'grommet';
import { FiBookmark, FiMessageSquare, FiHeart } from 'react-icons/fi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface IProps {
  favoriteCount: number;
  commentCount: number;
  createAt: string;
  showActionPanel: boolean;
}

const PostHeader: React.FC<IProps> = ({
  favoriteCount,
  commentCount,
  createAt,
  showActionPanel,
}) => {
  const avatarSrc =
    '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  const postedBy = 'Alex Kindirk';
  const timeAgo = dayjs().from(dayjs(createAt), true);

  return (
    <Box
      direction="row"
      justify="between"
      border={{ color: 'lightGrey1', side: 'bottom' }}
      pad={{ bottom: 'xsmall' }}
    >
      <Box align="center" direction="row" gap="small">
        <Avatar src={avatarSrc} size="small" />
        <Text size="medium">{postedBy}</Text>
        <Text color="grey1" size="medium">
          · {timeAgo} ago
        </Text>
      </Box>
      {showActionPanel ? (
        <Box direction="row" gap="medium">
          <Box align="center" direction="row" gap="xsmall">
            <Text color="grey1" size="small">
              {favoriteCount}
            </Text>
            <Button plain>
              <FiHeart color="grey1" />
            </Button>
          </Box>

          <Box align="center" direction="row" gap="xsmall">
            <Text color="grey1" size="small">
              {commentCount}
            </Text>
            <Button plain>
              <FiMessageSquare color="grey1" />
            </Button>
          </Box>
          <Box align="center" direction="row" gap="xsmall">
            <Button plain>
              <FiBookmark color="grey1" />
            </Button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default PostHeader;
