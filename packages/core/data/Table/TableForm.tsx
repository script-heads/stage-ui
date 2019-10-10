import React, { useState } from 'react';
import TableTypes from './types';
import createStyles from './styles'

interface TableFormHOCProps {
    Form: TableTypes.InjectForm
    dismiss?: () => void
    columns: TableTypes.TableColumn[]
    row?: { [key: string]: any }
    defaultData?: { [key: string]: any }
}

const TableForm = (props: TableTypes.FormProps) => {
    const { Form, columns, dismiss } = props;
    const styles = createStyles(props);
    const initialData = props.data ? JSON.parse(JSON.stringify(props.data)) : {};
    const [data, setData] = useState<{ [key: string]: string }>(initialData);

    const _setData = (key: string, value: any) => {
        setData({
            ...data,
            [key]: value
        });
    }

    return (
        <div css={styles.row(true, false)}>
            <Form
                data={data}
                columns={columns}
                setData={_setData}
                dismiss={dismiss}
            />
        </div>
    )
}

const TableFormHOC = (props: TableFormHOCProps) => {
    return <TableForm data={props.row} {...props} />
}

export default TableFormHOC;