import React from "react";
import { Heading, Layout, Text, Icon } from "../../../components/shared";
import Styles from "./download.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
function createData(Subject, Description, DescriptionSecond, DescriptionThird) {
    return { Subject, Description, DescriptionSecond, DescriptionThird };
}

const Download = () => {
    const rows = [
        createData(
            "CompayName_User_DateNums",
            "06/06/2022 11:30AM ET ",
            "1000",
            "CSV"
        ),
        createData(
            "Keyword 1",
            "Keyword 1"
        ),
        createData(
            "Keyword 2",
            "Keyword 2"
        ),
        createData("Keyword 3", "Keyword 3"),
        createData("Keyword 4", "Keyword 4"),
        createData("Keyword 5", "Keyword 5"),
        createData("Keyword 3", "Keyword 3"),
        createData("Keyword 4", "Keyword 4"),
        createData("Keyword 5", "Keyword 5"),
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
                    Downloads
                </Heading>

                <TableContainer className={`${Styles.tableContainer} ${Styles.scrollBar}`}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow
                                className={`${Styles.tableHead} ${Styles.jusctifyContentSpaceBetween}`}
                            >
                                <TableCell className={Styles.border}>File Name</TableCell>
                                <TableCell className={`${Styles.borderHeadSecond} ${"ml35"}`}>Date / TIme</TableCell>
                                <TableCell className={`${Styles.borderHeadThird} ${"ml35"}`}>Records</TableCell>
                                <TableCell className={`${Styles.borderHeadFour} ${"ml50"}`}>Type</TableCell>
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
                                        <Text variant="mlgText" strong="strong6" color="darkGray">
                                            {row.Description}
                                        </Text>
                                    </TableCell>
                                    <TableCell component="th" scope="row" className={`${Styles.borderSec} ${Styles.descriptionSec}`}>
                                        <Text variant="smText" strong="strong6" color="gray">
                                            {row.DescriptionSecond}
                                        </Text>
                                    </TableCell>
                                    <TableCell component="th" scope="row" className={`${Styles.border} ${Styles.descriptionSec}`}>
                                        <Text variant="smText" strong="strong6" color="gray">
                                            {row.DescriptionThird}
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
                                            <Icon color={"gray02"} type={"straightmore"} size="icon_xlarge" />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell
                                        className={Styles.border}
                                        align="right"
                                        component="th"
                                        scope="row"
                                    >
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Layout>
    )
}

export default Download
