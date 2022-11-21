import React from "react";
import { Heading, Layout, Text, Icon, Button, Input } from "../../../components/shared";
import Styles from "./favorites.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import TableFooter from '@mui/material/TableFooter';
function createData(Subject, Description, DescriptionSecond, DescriptionThird) {
    return { Subject, Description, DescriptionSecond, DescriptionThird };
}


const Favorites = () => {
    const rows = [
        createData("List Name Example 1 ", "300", "300",),
        createData("List Name Example 2 ", "300", "300",),
        createData("List Name Example 2 ", "300", "300",),
        createData("List Name Example 2 ", "300", "300",),
        createData("List Name Example 2 ", "300", "300",),
        createData("List Name Example 2 ", "300", "300",),

    ];
    return (
        <Layout isFederal={false} isGovSearchProfessional={true}>
            <div className={`${Styles.container} ${"mr50"}`}>
                <div className={`${Styles.heading} ${"alignBetween"}`}>
                    <Heading
                        headingType={"h1"}
                        color="secondary"
                        fontWeight="strong6"
                    >
                        Favorites/List
                    </Heading>
                    <Icon color={"gray06"} type={"pluscircle"} size="icon_xlarge" />
                </div>
                <TableContainer className={`${Styles.tableContainer} ${Styles.scrollBar}`}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow
                                className={`${Styles.tableHead} ${Styles.jusctifyContentSpaceBetween}`}
                            >
                                <TableCell className={Styles.border}>List Names</TableCell>
                                <TableCell className={`${Styles.borderHeadSecond} ${"ml35"}`}>Offices</TableCell>
                                <TableCell className={`${Styles.borderHeadFour} ${"ml50"}`}>Contacts  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={`${Styles.tableBody} ${Styles.scrollBar} ${Styles.scrollWrapper}`}>
                            <TableRow className={` ${Styles.mb12} ${Styles.rowBgMain}`}>
                                <TableCell className={Styles.subjectMain} component="th" scope="row">
                                    <Text className={Styles.starIconMain} variant="mlgText" color="darkGray" strong="strong6">
                                        Favorites  <Icon color={"yellow"} type={"star"} size="icon_xlarge" />
                                    </Text>
                                </TableCell>
                                <TableCell component="th" scope="row" className={` ${Styles.descriptionMain}`}>
                                    <Text variant="smText" strong="strong6" color="gray">
                                        300
                                    </Text>
                                </TableCell>
                                <TableCell component="th" scope="row" className={Styles.favroiteDescriptionSec}>
                                    <Text variant="smText" strong="strong6" color="gray">
                                        300
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
                                        <Icon className={Styles.favoriteMoreIcon} color={"gray02"} type={"straightmore"} size="icon_xlarge" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>

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
                                        <Text variant="smText" strong="strong4" color="gray      ">
                                            {row.Description}
                                        </Text>
                                    </TableCell>
                                    <TableCell component="th" scope="row" className={`${Styles.borderSec} ${Styles.descriptionSec}`}>
                                        <Text variant="smText" strong="strong6" color="gray">
                                            {row.DescriptionSecond}
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
                        <TableFooter className={` ${Styles.mb12} ${Styles.footerBgMain}`}>
                            <TableCell className={Styles.inputCell} component="th" scope="row">
                                <Input className={Styles.inputMain} variant={"grey"} placeholder="New List Name" />
                            </TableCell>
                            <TableCell component="th" scope="row" className={Styles.descriptionSec}>
                                <Button size={"xmd"} color="default">Save</Button>
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
                                    <Icon className={Styles.inputMoreIcon} color={"gray02"} type={"straightmore"} size="icon_xlarge" />
                                </IconButton>
                            </TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </Layout>
    )
}

export default Favorites
