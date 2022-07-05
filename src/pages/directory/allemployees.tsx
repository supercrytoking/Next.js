import React from 'react';
import { Box, TextInput, Select, Text } from 'grommet';
import EmployeeCard from '../../components/PageDirectory/AllEmployees/EmployeeCard';
import { FiSearch, FiList, FiGrid } from 'react-icons/fi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allEmployeesRequestAction } from 'src/store/actions/directory';

import { useState } from 'react';
import filter from 'lodash/filter';
import Spinner from '../../components/Spinner/Spinner';
import { PageWithLayoutProps } from '../../types/common';
import DirectoryLayout from '../../components/PageDirectory/DirectoryLayout';

const AllEmployees: PageWithLayoutProps = () => {
  const dispatch = useDispatch();

  const directoryState = useSelector(
    ({ directory: { allEmployees, isLoading, isFulfilled } }: any) => ({
      allEmployees,
      isLoading,
      isFulfilled,
    })
  );

  const { isLoading, allEmployees, isFulfilled } = directoryState;
  const [employees, setAllEmployees] = useState(allEmployees);

  const userData = useSelector(({ auth: { userData } }: any) => userData);
  const { userId } = userData;

  useEffect(() => {
    dispatch(allEmployeesRequestAction(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (!isLoading && isFulfilled) {
      setAllEmployees(allEmployees);
    }
  }, [isLoading, isFulfilled, allEmployees]);

  const filterWithLetters = (letter: string, employeesData: any) => {
    return filter(employeesData, function (employee) {
      return (
        employee.name.display.split('')[0].toLowerCase() ===
        letter.toLowerCase()
      );
    });
  };

  const filterWithCountry = (country: string, employeesData: any) => {
    return filter(employeesData, function (employee) {
      return employee.addresses[0].country.includes(country);
    });
  };

  const filterWithSearch = (searchText: string, employeesData: any) => {
    return filter(employeesData, function (employee) {
      return employee.name.display
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  };
  const filterBasedOnCriteria = ({
    country,
    startingLetter,
    searchText,
  }: {
    country?: string;
    startingLetter?: string;
    searchText?: string;
  }) => {
    if (searchText) {
      return filterWithSearch(searchText, allEmployees);
    }

    if (country) {
      return filterWithCountry(country, allEmployees);
    }

    if (startingLetter && startingLetter !== 'None')
      return filterWithLetters(startingLetter, allEmployees);

    if (searchText) return filterWithSearch(searchText, allEmployees);

    if (country && startingLetter) {
      const filteredCountryWise = filterWithCountry(country, allEmployees);
      const filteredLetterWise = filterWithLetters(
        startingLetter,
        filteredCountryWise
      );

      return filteredLetterWise;
    }

    if (country && startingLetter && searchText) {
      const filteredCountryWise = filterWithCountry(country, allEmployees);
      const filteredLetterWise = filterWithLetters(
        startingLetter,
        filteredCountryWise
      );

      const filteredWithSearchText = filterWithSearch(
        searchText,
        filteredLetterWise
      );

      return filteredWithSearchText;
    }

    return allEmployees;
  };

  return (
    <Box height={{ min: '100vh' }}>
      {/* Filter section */}
      {isLoading ? (
        <Box height="100vh">
          <Spinner />
        </Box>
      ) : (
        <>
          <Box pad="medium" direction="row" justify="between" align="center">
            <Box margin={{ left: '10px' }} direction="row">
              <TextInput
                width="360px"
                icon={<FiSearch />}
                placeholder="Search"
                onChange={(e) => {
                  if (e.target.value && employees) {
                    const text = e.target.value;
                    setAllEmployees(() => {
                      return filterBasedOnCriteria({ searchText: text });
                    });
                  } else {
                    setAllEmployees(allEmployees);
                  }
                }}
              />
              &nbsp;&nbsp;
              <Box direction="row" width="421px">
                <Text>Sort By: </Text>
                <Select
                  onChange={({ option }) => {
                    if (option !== 'All') {
                      setAllEmployees(
                        filterBasedOnCriteria({ country: option })
                      );
                    } else {
                      setAllEmployees(allEmployees);
                    }
                  }}
                  placeholder="Location"
                  options={[
                    'All',
                    'Australia',
                    'Burkina Faso',
                    'Guyana',
                    'Ireland',
                    'Slovakia (Slovak Republic)',
                    'Ukraine',
                  ]}
                />
              </Box>
              &nbsp;
              <Box direction="row" width="221px;">
                <Select
                  placeholder="A-Z"
                  options={[
                    'None',
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'R',
                    'S',
                    'T',
                    'U',
                    'V',
                    'W',
                    'X',
                    'Y',
                    'Z',
                  ]}
                  onChange={({ option }) => {
                    if (option !== 'All') {
                      setAllEmployees(
                        filterBasedOnCriteria({ startingLetter: option })
                      );
                    } else {
                      setAllEmployees(allEmployees);
                    }
                  }}
                />
              </Box>
            </Box>
            {/* Change View Buttons */}
            <Box direction="row" margin={{ right: '52px' }}>
              <Box round="small" pad="small" border="all">
                <FiList cursor="pointer" opacity={0.5} />
              </Box>
              &nbsp;
              <Box round="small" pad="small" border="all">
                <FiGrid cursor="pointer" />
              </Box>
            </Box>
          </Box>
          {/* Users Grid */}
          <Box direction="row" pad="medium" wrap={true}>
            {employees &&
              employees.map((employee: any, index: number) => {
                return <EmployeeCard key={index} {...employee} />;
              })}
          </Box>
        </>
      )}
    </Box>
  );
};

AllEmployees.getLayout = (page) => <DirectoryLayout>{page}</DirectoryLayout>;

export default AllEmployees;
