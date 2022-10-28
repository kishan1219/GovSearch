import { Grid } from '@mui/material'
import React from 'react'
import Styles from './stats.module.scss'
import { Card, Heading, Layout, Text } from '../../../components/shared'
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from "chart.js/auto"
import ChartDataLabels from "chartjs-plugin-datalabels";
const stats = () => {
    const blue = {
        500: '#5286FF',
    };

    const grey = {

        500: '#5286FF',

    };

    const Root = styled('span')(
        ({ theme }) => `
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 15px;
        margin: 10px;
        cursor: pointer;
      
        & .${switchUnstyledClasses.track} {
          background: ${theme.palette.mode === 'dark' ? grey[500] : grey[500]};
          border-radius: 16px;
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      
        & .${switchUnstyledClasses.thumb} {
          display: block;
          width: 12px;
          height: 12px;
          top: 1px;
          left: 1px;
          border-radius: 16px;
          background-color: #fff;
          position: relative;
          
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 120ms;
        }
      
        &.${switchUnstyledClasses.checked} {
          .${switchUnstyledClasses.thumb} {
            left: 26px;
            top: 1px;
            background-color: #fff;
          }
      
          .${switchUnstyledClasses.track} {
            background: ${blue[500]};
          }
        }
      
        & .${switchUnstyledClasses.input} {
          cursor: inherit;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          margin: 0;
        }
        `,
    );
    const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };
    const userData = {

        labels: ['Defence', 'Civilians', 'Vendor', 'SLED'],
        datasets: [{

            data: [1000, 1000, 1000, 1000],

            backgroundColor: [
                '#C6D2E2',
                '#306BE8',
                '#3267B1',
                '#242450',
            ],
            borderColor: [
                '#EBEBEB',
            ],
            fill: false,
        },

        ],
    }
    const axis = {
        responsive: true,
        scales: {
            x: {
                barPercentage: 0.1,
                stacked: true,
                ticks: {
                    color: '#000000',
                    fontSize: 18,
                },
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false,
                }
            },
            y: {
                ticks: {
                    display: false,
                    color: '#F5F5F5',
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false,
                    zeroLineColor: 'white',
                    color: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                anchor: "end",
                align: "end",
                offset: -20,
                color: "#000000",
                font: { size: 18 }
            },
        },

    };
    return (
        <Layout isSearch={true} isFederal={false}>
            <div className={Styles.container}>
                <Heading headingType={"h4"} color="secondary">Stats</Heading>
                <div className='dFlex jusctifyContentSpaceBetween mT44 ml10'>
                    <Text className={Styles.statsText} variant={"smText"} color="gray">These stats help you and our users understand what is being updated, added, and track drastic changes that may have occured accross defense civiliand SLM and vendor groups.</Text>
                    <div>
                        <div className={`${'dFlex jusctifyContentSpaceBetween'} ${Styles.toggleMonth}`}>
                            <Text className={"mr12"} variant={"smText"} color="black">Monthly</Text>
                            <Text variant={"smText"} color="black">Quaterly</Text>
                        </div>
                        <div className='ml18 textCenter'>
                            <SwitchUnstyled className={Styles.toggleSwitch} component={Root} {...label} />
                        </div>
                    </div>
                </div>
                <Grid lg={12} container spacing={4}>
                    <Grid item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Contacts</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar className={Styles.statsChart} plugins={[ChartDataLabels]} data={userData} options={axis} />

                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Positions</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar className={Styles.statsChart} plugins={[ChartDataLabels]} data={userData} options={axis} />

                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Offices</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar className={Styles.statsChart} plugins={[ChartDataLabels]} data={userData} options={axis} />

                        </Card>
                    </Grid>

                </Grid>
            </div>
        </Layout>
    )
}

export default stats
