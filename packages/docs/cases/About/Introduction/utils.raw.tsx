import { dialog, notify } from "@flow-ui/core";

const ExampleUtils = () => {
    dialog({
        title: "Error",
        message: "Something went wrong",
        buttonText: 'OK'
    })
    notify({
        title: "Error",
        message: "Something went wrong",
        timeout: 3
    })
}

export default ExampleUtils;