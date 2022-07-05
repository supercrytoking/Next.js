import React, { ReactNode } from 'react';
import NavBar from 'src/components/NavBar';
import { Box, Image, Text } from 'grommet';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../components/Spinner';

import { appsFetchAllRequestAction } from '../store/actions/apps';
import useDidMountEffect from '../hooks/useDidMountEffect';
import { ReduxState } from '../types/common';
import { Application } from '../types/applications';
import AppLayout from '../components/AppLayout';
import WithAuth from '../components/WithAuth';
import { GetServerSidePropsContext } from 'next';

interface AppsProps extends React.FC<Record<string, unknown>> {
  getLayout: React.FC<{ children: ReactNode }>;
}

const Apps: AppsProps = () => {
  const dispatch = useDispatch();

  const { data, isFulfilled, isLoading } = useSelector(
    ({ apps }: ReduxState) => apps.applications
  );

  useDidMountEffect(() => {
    dispatch(appsFetchAllRequestAction());
  });

  return (
    <WithAuth>
      <Box height={{ min: '100vh' }}>
        <NavBar />

        {isLoading && <Spinner />}
        {isFulfilled && (
          <Box pad="small" align="center" direction="row" gap="small" wrap>
            {data.items.map((app: Application, index: number) => (
              <Box
                height="200px"
                width="300px"
                key={index}
                pad="small"
                round="xsmall"
                elevation="medium"
                onClick={() => {
                  window.open(app.signOnUrl, '_blank');
                }}
              >
                <Box flex width="large" pad="small">
                  <Image fit="contain" src={app.photo} alt="" />
                  <Box pad={{ top: 'medium' }}>
                    <Text size="large" textAlign="center">
                      {app.name}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </WithAuth>
  );
};

Apps.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    await ctx.res.writeHead(302, { Location: 'https://lyonl.com/apps' });
    ctx.res.end();
  }
  return { props: {} };
}

export default Apps;
