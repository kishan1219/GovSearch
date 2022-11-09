import React, { useState } from "react";
import { Heading, Layout, Text, Icon } from "../../../components/shared";
import Styles from "./search-history.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
function createData(id,Keyword, FiltersFirst,FiltersSecond,FiltersThird,FiltersFourth, Results) {
    return { id,Keyword, FiltersFirst,FiltersSecond,FiltersThird,FiltersFourth, Results };
}
const SearchHistory = () => {
    const rows = [
        createData('2', 'Keyword 1', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('3', 'Keyword 2', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('4', 'Keyword 3', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('5', 'Keyword 4', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('6', 'Keyword 5', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'More (5)'),
        createData('4', 'Keyword 3', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('5', 'Keyword 4', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)'),
        createData('6', 'Keyword 5', 'Filter Name (#)', 'Filter Name (#)', 'Filter Name (#)', 'More (5)'),
    ];
    const [open, setOpen] = useState(false);
    return (
        <Layout isFederal={false} isGovSearchProfessional={true}>
            <div className={`${Styles.container} ${"mr50"}`}>
                <Heading
                    className={Styles.heading}
                    headingType={"h1"}
                    color="secondary"
                    fontWeight="strong6"
                >
                    Search History
                </Heading>

                <TableContainer className={`${Styles.tableContainer} ${Styles.scrollBar}`}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow
                                className={`${Styles.tableHead} ${Styles.jusctifyContentSpaceBetween}`}
                            >
                                <TableCell className={`${Styles.border}`}>Keyword</TableCell>
                                <TableCell align="right" className={`${Styles.filterBorder} ${Styles.border}`}>Filters</TableCell>
                                <TableCell className={`${Styles.border} ${Styles.resultBorder}`}>Results</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={`${Styles.tableBody}  ${Styles.scrollWrapper}`}>
                        <TableRow
                                    className={` ${Styles.mb12} ${Styles.rowBgMain}`}
                                >
                                    <TableCell className={Styles.subjectMain} component="th" scope="row">
                                        <Text variant="mlgText" color="darkGray" strong="strong6">
                                        “Chief Technology Officer”
                                        </Text>
                                    </TableCell>
                                    <TableCell  align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            Filter Name (#)                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            Filter Name (#)
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            Filter Name (#)                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            Filter Name (#)
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border}`}>
                                        <Text className={Styles.Results} variant="smText" strong="strong4" color="gray">
                                            1000
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
                                            onClick={() => setOpen(!open)}
                                            style={{background: "unset", hover:"unset" }}
                                        >
                                            <Icon color={open ? "gray06" : "gray02"} type={"straightmore"} size="icon_xlarge" />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell
                                        className={Styles.border}
                                        align="right"
                                        component="th"
                                        scope="row"
                                    >

                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <TableCell className={Styles.deleteText}>
                                                <Text variant="xllgText" color="darkGray" strong="strong7">Open </Text>
                                            </TableCell>
                                        </Collapse>
                                    </TableCell>

                                </TableRow>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.Keyword}
                                    className={` ${Styles.mb12} ${Styles.rowBgMain}`}
                                >
                                    <TableCell className={Styles.subjectMain} component="th" scope="row">
                                        <Text variant="mlgText" color="darkGray" strong="strong6">
                                            {row.Keyword}
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor mb10"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersFirst}
                                        </Text>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersFirst}
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor mb10"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersSecond}
                                        </Text>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                        {row.FiltersSecond}
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor mb10"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersThird}
                                        </Text>
                                         <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                         {row.FiltersThird}
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border} ${Styles.descriptionMain}`}>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor mb10"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersFourth}
                                        </Text>
                                        <Text className={`${Styles.filterText} ${"textCenter cursor"}`} variant="smText" strong="strong4" color="gray">
                                            {row.FiltersFourth}
                                        </Text>
                                    </TableCell>
                                    <TableCell align="right" component="th" scope="row" className={`${Styles.border}`}>
                                        <Text className={Styles.Results} variant="smText" strong="strong4" color="gray">
                                            {row.Results}
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
                                            onClick={() => setOpen(!open)}
                                            style={{background: "unset", hover:"unset" }}
                                        >
                                            <Icon color={open ? "gray06" : "gray02"} type={"straightmore"} size="icon_xlarge" />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell
                                        className={Styles.border}
                                        align="right"
                                        component="th"
                                        scope="row"
                                    >

                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <TableCell className={Styles.deleteText}>
                                                <Text variant="xllgText" color="darkGray" strong="strong7">Open </Text>
                                            </TableCell>
                                        </Collapse>
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

export default SearchHistory;
