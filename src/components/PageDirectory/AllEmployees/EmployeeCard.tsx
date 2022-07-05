import React from 'react';
import { Box, Text, Button } from 'grommet';
import { FiBookmark } from 'react-icons/fi';
import { ProfileImage, StatusText } from './Employee.styled';

export interface EmployeeInformation {
  addresses: [
    {
      city: string;
      country: string;
      line1: string;
      line2: string;
      line3: string;
      state: string;
      zipcode: string;
    }
  ];
  emailAddresses: [{ type: string; value: string }];
  name: {
    first: string;
    last: string;
    middle: string;
    display: string;
  };
  organisation: string;
  phoneNumbers: [{ type: string; value: string }];
  photo: string;
  title: string;
  url: string;
  userId: number;
}

function EmployeeCard({
  addresses,
  emailAddresses,
  name,
  organisation,
  phoneNumbers,
  photo,
  title,
  url,
  userId,
}: EmployeeInformation) {
  return (
    <Box
      border={{ color: '#E0E1E7' }}
      round="xsmall"
      // height={{ max: '376px' }}
      width={{ min: '242px', max: '242px' }}
      margin="small"
    >
      <Box style={{ position: 'relative' }}>
        <ProfileImage
          style={{
            backgroundImage: `url(${photo}) `,
          }}
          height="140px;"
        />

        <StatusText size="8px" color="white">
          Online
        </StatusText>
      </Box>

      <Box justify="center" align="center" pad="xsmall" wrap={true}>
        <Text margin={{ top: '8px' }} weight={600} color="#000" size="16px">
          {name.display}
        </Text>
        <Text color="#B4B7C3" size="12px">
          {title}
        </Text>

        <Text
          size="12px"
          weight={600}
          color="#27AE60"
          margin="10px"
        >{`(Team Sparo)`}</Text>

        <Box pad="xsmall">
          {emailAddresses.map((email) => {
            return (
              <Text
                key={email.value}
                wordBreak="break-word"
                margin={{ bottom: '5px' }}
                weight={600}
                size="16px"
              >
                {email.value}
              </Text>
            );
          })}
        </Box>

        {phoneNumbers.map((phone, index) => {
          return (
            <Text
              key={index}
              margin={{ bottom: '10px' }}
              weight={600}
              size="16px"
            >
              {phone.value}
            </Text>
          );
        })}

        {addresses.map((address) => {
          return (
            <>
              <Text textAlign="center" size="12px" color="#B4B7C3">
                {address.city} {address.country}, {address.line1}
              </Text>
              {address.state && (
                <Text size="12px" color="#B4B7C3">{`(${address.state})`}</Text>
              )}
            </>
          );
        })}
      </Box>

      <Box margin="xsmall" direction="row" justify="end">
        <Button>
          <FiBookmark />
        </Button>
      </Box>
    </Box>
  );
}

export default EmployeeCard;
