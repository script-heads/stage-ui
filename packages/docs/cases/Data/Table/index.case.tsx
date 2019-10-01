import Button from "@flow-ui/core/action/Button";
import { C1 } from "@flow-ui/core/content/Typography/C";
import Table from "@flow-ui/core/data/Table";
import TableTypes from "@flow-ui/core/data/Table/types";
import Flexbox from "@flow-ui/core/layout/Flexbox";
import Fakerator from 'fakerator';
import React, { Fragment, useState } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from "../../../plugins/UICaseBlock";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

var fakerator = Fakerator()


export const tableColumns = [
    { title: '#', dataIndex: 'id', width: 40 },
    { title: 'Fullname', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age', width: 40 },
    { title: 'Passport ID', dataIndex: 'passport' }
]

export const getTableData = (rows: number) => {
    let tableData = [] as any[]
    for (let i = 0; i < rows; i++) {
        tableData.push({
            id: i + 1,
            name: fakerator.names.name(),
            age: fakerator.random.number(16, 50),
            passport: fakerator.random.hex(16),
        })
    }

    return tableData;
}

export default (props: CaseProps) => {

    const [data, setData] = useState<any[]>([])
    const [key, setKey] = useState(-1);

    const Form = (props: TableTypes.InjectForm) => {
        return (
            <Flexbox flex={1} p={'1rem'} justifyContent='space-between' alignItems='center'>
                <C1>Custom form</C1>
                <Button onClick={() => props.dismiss && props.dismiss()}>Close</Button>
            </Flexbox>
        )
    }

    const TableTypes = useState({});

    const fakeData = getTableData(2);

    return (
        <Fragment>
            <UICaseBlock
                minHeight="250px"
                title="Simple case"
                subtitle={`Generic table component, can be used in async mode`}
                scope={{ Table, fakeData, tableColumns }}
                props={{ TableTypes }}
                children={
                    <Table
                        {...TableTypes[0]}
                        data={fakeValue("fakeData")}
                        columns={fakeValue("tableColumns")}
                    />
                }
                paths={[
                    `@flow-ui/core/data/Table`,
                ]}
            />
            <UICaseBlock
                title="Actions case"
                subtitle={``}
                scope={{ Table, fakeData, tableColumns, Form }}
                children={
                    <Table
                        {...TableTypes[0]}
                        data={fakeValue("fakeData")}
                        columns={fakeValue("tableColumns")}
                        actions={[{
                            label: "Edit",
                            onAction: fakeValue("row => console.log('Edit', row)")
                        }, {
                            label: "Delete",
                            onAction: fakeValue("row => console.log('Delete', row)")
                        }]}
                    />
                }
                paths={[
                    `@flow-ui/core/data/Table`,
                ]}
            />
            <UICaseDocumentation ns="TableTypes" />
        </Fragment>
    )
}

/**
 *  actions={[{
                        label: "Action",
                        onAction: (data) => setKey(data.id)
                    }, {
                        label: "Action",
                        onAction: (data) => setKey(data.id)
                    }, {
                        label: "Action",
                        onAction: (data) => setKey(data.id)
                    }]}
                    indexKey='id'
                    form={
                        {
                            key,
                            render: Form,
                            dismiss: () => console.log(1)
                        }
                    }
 */