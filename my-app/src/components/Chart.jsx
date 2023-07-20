import { Box, styled, useTheme } from '@mui/material';
import SimpleCard from '../component/SimpleCard';
import LineChart from './LineChart';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px'
  },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px'
    }
  }
}));

const AppEchart = () => {
  const theme = useTheme();
  return (
    <Container>

      <SimpleCard title="Line Chart">
        <LineChart
          height="350px"
          color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </SimpleCard>

    </Container>
  );
};

export default AppEchart;
