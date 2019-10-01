import { useContext } from 'react';
import { FlowContext } from '../../layout/Viewport';

export default () => {
    return (useContext(FlowContext))
}