import React, { useState } from "react";
import { Heading, Layout, Text, Icon } from "../../../components/shared";
import Styles from "./notification.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
function createData(Subject, Description) {
  return { Subject, Description };
}
const Notification = () => {
  const rows = [
    createData(
      "TechnoMile Schedule Upgrade",
      "GovSearch will be down for 5 hours from 3pm to 8pm of Saturday on March the 12th 2022 for scheduled maintance and upgrades. "
    ),
    createData(
      "Training Webinar",
      "TechnoMile will be hosting a webinar on 12th of March for GovSearch."
    ),
    createData(
      "Build Out Profile",
      "To get the most out of your GovSearch investment make sure to populate your profile for your account and profile."
    ),
    createData("Subject 1", "Description"),
    createData("Subject 2", "Description"),
    createData("Subject 3", "Description"),
    createData("Subject 1", "Description"),
    createData("Subject 2", "Description"),
    createData("Subject 3", "Description"),
    createData("Subject 1", "Description"),
    createData("Subject 2", "Description"),
    createData("Subject 3", "Description"),
  ];
  return (
    <Layout isFederal={false} isGovSearchProfessional={true}>
      <div className={`${Styles.container} ${"mr50"}`}>
        <Heading
          className={Styles.heading}
          headingType={"h1"}
          color="secondary"
          fontWeight="strong6"
        >
          Notifications/Alerts
        </Heading>

        <TableContainer className={`${Styles.tableContainer} ${Styles.scrollBar}`}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow
                className={`${Styles.tableHead} ${Styles.jusctifyContentSpaceBetween}`}
              >
                <TableCell className={Styles.border}>Subject</TableCell>
                <TableCell className={`${Styles.border} ${"ml35"}`}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={`${Styles.tableBody} ${Styles.scrollBar} ${Styles.scrollWrapper}`}>
              {rows.map((row) => (
                <TableRow
                  key={row.Subject}
                  className={` ${Styles.mb12} ${Styles.rowBgMain}`}
                >
                  <TableCell className={Styles.subjectMain} component="th" scope="row">
                    <Text variant="mlgText" color="darkGray" strong="strong6">
                      {row.Subject}
                    </Text>
                  </TableCell>
                  <TableCell component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                    <Text variant="smText" strong="strong4" color="gray">
                      {row.Description}
                    </Text>
                  </TableCell>
                  <TableCell
                    className={Styles.border}
                    align="right"
                    component="th"
                    scope="row"
                  >

                    <IconButton
                      aria-label="expand row"
                      size="small"
                    >
                      <Icon color={ "gray06"} type={"straightmore"} size="icon_xlarge" />
                    </IconButton>
                    </TableCell>
                    <TableCell
                    className={Styles.border}
                    align="right"
                    component="th"
                    scope="row"
                  >
                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                      <TableCell className={Styles.deleteText}>
                        <Text variant="xllgText" color="darkGray" strong="strong7">Delete</Text>
                      </TableCell>
                    </Collapse> */}
                    </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>

  );
};

export default Notification;
