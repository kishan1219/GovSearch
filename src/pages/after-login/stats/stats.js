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
    const data = {

        labels: ['Defence', 'Civilians', 'Vendor', 'SLED'],
        datasets: [{
            label: 'bar chart',
            data: [1000, 1000, 700, 1000],

            backgroundColor: [
                '#C6D2E2',
                '#306BE8',
                '#3267B1',
                '#242450',
            ],
            borderColor: [
                '#EBEBEB',
            ],
            borderWidth: 1,
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
                    padding: 10,
                    color: '#000000',
                    fontSize: 18,
                    font: function (context) {
                        var w = context.chart.width;
                        return {
                            size: w < 400 ? 12 : 14,
                            weight: 'bold',
                        };
                    },
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false,
                    color: 'transparent'
                }
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false,
                    color: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                anchor: 'end',
                color: '#000000',
                align: 'top',
                font: function (context) {
                    var w = context.chart.width;
                    return {
                        size: w < 512 ? 14 : 16,
                        weight: 'bold',
                    };
                },
            },
            title: {
                display: true,
                
            },
        },


    };
    return (
        <Layout isGovSearchProfessional={true} isSidebar={true} isSearch={true} isFederal={false}>
            <div className={Styles.container}>
                <Heading className={Styles.statsHeading} headingType={"h4"} color="secondary">Stats</Heading>
                <div className={`${'dFlex jusctifyContentSpaceBetween mT44 ml10'} ${Styles.statsContent}`}>
                    <Text className={Styles.statsText} variant={"smText"} color="gray">These stats help you and our users understand what is being updated, added, and track drastic changes that may have occured accross defense civiliand SLM and vendor groups.</Text>
                    <div className={Styles.toggleMonth}>
                        <div className={`${'dFlex jusctifyContentSpaceBetween'}`}>
                            <Text className={"mr12"} variant={"smText"} color="black">Monthly</Text>
                            <Text variant={"smText"} color="black">Quaterly</Text>
                        </div>
                        <div className='textCenter'>
                            <SwitchUnstyled className={Styles.toggleSwitch} component={Root} {...label} />
                        </div>
                    </div>
                </div>
                <Grid container spacing={4}>
                    <Grid className={Styles.cardStyles} item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Contacts</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar height={"200"} className={Styles.statsChart} plugins={[ChartDataLabels]} data={data} options={axis} />

                        </Card>
                    </Grid>
                    <Grid className={Styles.cardStyles} item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Positions</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar height={"200"} className={Styles.statsChart} plugins={[ChartDataLabels]} data={data} options={axis} />

                        </Card>
                    </Grid>
                    <Grid className={Styles.cardStyles} item lg={4} sm={4} xs={12} >
                        <Heading className={"ml25 mT44 mB28"} headingTy pe={"h4"} color="secondary">Offices</Heading>
                        <Card className={Styles.statsCard} >
                            <Bar height={"200"} className={Styles.statsChart} plugins={[ChartDataLabels]} data={data} options={axis} />

                        </Card>
                    </Grid>

                </Grid>
            </div>
        </Layout>
    )
}

export default stats
