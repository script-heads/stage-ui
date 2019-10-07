import { Button } from '@flow-ui/core';

// import * as monaco from 'monaco-editor';

// export class playground extends React.Component {

//     constructor(props: any) {
//         super(props);
//     }
//     async componentDidMount() {
//         window.monaco = monaco
  
//         const defineLib = async (path: string) => {
//             const data = await fetch(path);
//             const text = await data.text();
//             monaco.languages.typescript.typescriptDefaults.addExtraLib(
//                 text,
//                 'http://localhost:9050/' + path
//             );
//         }
//         defineLib('core/dist/control/Button/index.d.ts')
//         // defineLib('/core/index.ts')

//         const model = monaco.editor.createModel(
//             `
// import Button from 'core/dist/control/Button'
           
// const app = () => {
//     return (
//         <Button />  
//     )
// }`,
//             'typescript',
//             monaco.Uri.parse('http://localhost:9050/main.tsx')
//         );
//         monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
//             jsx: monaco.languages.typescript.JsxEmit.React,
//             jsxFactory: 'React.createElement',
//             reactNamespace: 'React',
//             allowNonTsExtensions: true,
//             allowJs: true,
//             target: monaco.languages.typescript.ScriptTarget.Latest,
//           });
//         monaco.editor.create(document.getElementById('editor'), { 
//             model, 
//             theme:'dark'
//         });
//     }
//     render() {

//         return (
//             <div id="editor" css={{ height: "90vh" }} />
//             // <Editor
//             // theme="dark"
//             // height="90vh" 
//             //     language="javascript"
//             //     value={``} 
//             // />
//         );
//     }
// }


import Icon from '@flow-ui/core/content/Icon';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";

export default (props: CaseProps) => {

    const ButtonTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Button"
                scope={{ Button }}
                props={{ ButtonTypes }}
                filter={["type", "formNoValidate"]}
                customProps={[
                    {
                        name: "color",
                        values: ["#ff0000"]
                    }
                ]}
                children={
                    <Button
                        color={c => c.primary.css()}
                        {...ButtonTypes[0]}
                        children="Simple button"
                    />
                }
                paths={[
                    `@flow-ui/core/control/Button`,
                ]}
            />
            <UICaseBlock
                title="With icon"
                scope={{ Flexbox, Button, Icon }}
                children={
                    <Flexbox>
                        <Button
                            color={c => c.primary.css()}
                        >
                            <Icon size={"1rem"} pr={"0.5rem"} type={t => t.outline.compass} />
                            Compas
                        </Button>
                        <Button
                            ml={"0.5rem"}
                            color={c => c.primary.css()}
                        >
                            Next
                            <Icon size={"1rem"} pl={"0.5rem"} type={t => t.outline.arrowRight} />
                        </Button>
                    </Flexbox>
                }
                paths={[
                    `@flow-ui/core/control/Button`,
                ]}
            />
            <UICaseDocumentation ns="ButtonTypes" />
        </Fragment>
    )
}