import Chart from "../../../../lab/data/Chart";
import React, { Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from "@flow-ui/showcase/src/UI/components/UICaseBlock";
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";


export const tag = "🧪"
export default (props: CaseProps) => {
    const labels = fakeValue('["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]');

    return (
        <Fragment>
            <UICaseBlock
                minHeight="350px"
                title="Chart"
                subtitle={``}
                children={
                    <Chart
                        type="line"
                        labels={labels}
                    
                        data={fakeValue("[[0, 17, 28, 41, 83, 94, 100]]")}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            }
                        }}
                    />
                }
                paths={[
                    `@flow-ui/lab/data/Chart`,
                ]}
            />
            <UICaseBlock
                minHeight="350px"
                title="Advanced case"
                subtitle={``}
                children={
                    <Chart
                        type="verticalBar"
                        labels={labels}
                        data={[{
                            label: "Red line",
                            backgroundColor: "#ff9c9c",
                            data: fakeValue("[0, 17, 28, 41, 83, 94, 100]"),

                        }, {
                            label: "Blue line",
                            backgroundColor: "#9cbfff",
                            data: fakeValue("[0, 10, 18, 34, 78, 88, 94]")
                        }]}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                }
                paths={[
                    `@flow-ui/lab/data/Chart`,
                ]}
            />

            <UICaseBlock
                minHeight="350px"
                title="Pie case"
                subtitle={``}
                children={
                    <Chart
                        labels={fakeValue('["Earth", "Moon", "Mars"]')}
                        type="pie"
                        data={[{
                            label: "Radius",
                            borderWidth: 0,
                            backgroundColor: fakeValue('["#80b1ff", "#c5c5c5", "#ff9f1f"]'),
                            data: fakeValue("[6371, 1737, 3389]")
                        }]}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                }
            />

            <UICaseDocumentation ns="ChartTypes" />
        </Fragment>
    )
}