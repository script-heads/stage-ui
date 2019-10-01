import { useState } from 'react';

export default () => {
    const [, s] = useState(false);
    return () => s(i => !i);
};