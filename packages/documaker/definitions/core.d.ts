declare module 'content/Divider/types' {
	import WhaleTypes from 'types'; namespace DividerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        vertical?: boolean;
	        dash?: number;
	        gap?: number;
	        color?: WhaleTypes.ColorProp;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default DividerTypes;

}
declare module 'misc/utils/callProp' {
	 const _default: <P, L>(prop: P, lib: L) => Exclude<P, Function>;
	export default _default;

}
declare module 'content/Divider/styles' {
	import WhaleTypes from 'types';
	import Types from 'content/Divider/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'content/Divider' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'content/Divider/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/icons/types' {
	 namespace IconsetTypes {
	    type Filled = {
	        activity: React.ReactElement;
	        alertCircle: React.ReactElement;
	        alertTriangle: React.ReactElement;
	        archive: React.ReactElement;
	        arrowBack: React.ReactElement;
	        arrowCircleDown: React.ReactElement;
	        arrowCircleLeft: React.ReactElement;
	        arrowCircleRight: React.ReactElement;
	        arrowCircleUp: React.ReactElement;
	        arrowDown: React.ReactElement;
	        arrowDownward: React.ReactElement;
	        arrowForward: React.ReactElement;
	        arrowIosBack: React.ReactElement;
	        arrowIosDownward: React.ReactElement;
	        arrowIosForward: React.ReactElement;
	        arrowIosUpward: React.ReactElement;
	        arrowLeft: React.ReactElement;
	        arrowRight: React.ReactElement;
	        arrowUp: React.ReactElement;
	        arrowUpward: React.ReactElement;
	        arrowheadDown: React.ReactElement;
	        arrowheadLeft: React.ReactElement;
	        arrowheadRight: React.ReactElement;
	        arrowheadUp: React.ReactElement;
	        at: React.ReactElement;
	        attach2: React.ReactElement;
	        attach: React.ReactElement;
	        award: React.ReactElement;
	        backspace: React.ReactElement;
	        barChart2: React.ReactElement;
	        barChart: React.ReactElement;
	        battery: React.ReactElement;
	        behance: React.ReactElement;
	        bellOff: React.ReactElement;
	        bell: React.ReactElement;
	        bluetooth: React.ReactElement;
	        bookOpen: React.ReactElement;
	        book: React.ReactElement;
	        bookmark: React.ReactElement;
	        briefcase: React.ReactElement;
	        browser: React.ReactElement;
	        brush: React.ReactElement;
	        bulb: React.ReactElement;
	        calendar: React.ReactElement;
	        camera: React.ReactElement;
	        car: React.ReactElement;
	        cast: React.ReactElement;
	        charging: React.ReactElement;
	        checkmarkCircle2: React.ReactElement;
	        checkmarkCircle: React.ReactElement;
	        checkmarkSquare2: React.ReactElement;
	        checkmarkSquare: React.ReactElement;
	        checkmark: React.ReactElement;
	        chevronDown: React.ReactElement;
	        chevronLeft: React.ReactElement;
	        chevronRight: React.ReactElement;
	        chevronUp: React.ReactElement;
	        clipboard: React.ReactElement;
	        clock: React.ReactElement;
	        closeCircle: React.ReactElement;
	        closeSquare: React.ReactElement;
	        close: React.ReactElement;
	        cloudDownload: React.ReactElement;
	        cloudUpload: React.ReactElement;
	        codeDownload: React.ReactElement;
	        code: React.ReactElement;
	        collapse: React.ReactElement;
	        colorPalette: React.ReactElement;
	        colorPicker: React.ReactElement;
	        compass: React.ReactElement;
	        copy: React.ReactElement;
	        cornerDownLeft: React.ReactElement;
	        cornerDownRight: React.ReactElement;
	        cornerLeftDown: React.ReactElement;
	        cornerLeftUp: React.ReactElement;
	        cornerRightDown: React.ReactElement;
	        cornerRightUp: React.ReactElement;
	        cornerUpLeft: React.ReactElement;
	        cornerUpRight: React.ReactElement;
	        creditCard: React.ReactElement;
	        crop: React.ReactElement;
	        cube: React.ReactElement;
	        diagonalArrowLeftDown: React.ReactElement;
	        diagonalArrowLeftUp: React.ReactElement;
	        diagonalArrowRightDown: React.ReactElement;
	        diagonalArrowRightUp: React.ReactElement;
	        doneAll: React.ReactElement;
	        download: React.ReactElement;
	        dropletOff: React.ReactElement;
	        droplet: React.ReactElement;
	        edit2: React.ReactElement;
	        edit: React.ReactElement;
	        email: React.ReactElement;
	        expand: React.ReactElement;
	        externalLink: React.ReactElement;
	        eyeOff2: React.ReactElement;
	        eyeOff: React.ReactElement;
	        eye: React.ReactElement;
	        facebook: React.ReactElement;
	        fileAdd: React.ReactElement;
	        fileRemove: React.ReactElement;
	        fileText: React.ReactElement;
	        file: React.ReactElement;
	        film: React.ReactElement;
	        flag: React.ReactElement;
	        flashOff: React.ReactElement;
	        flash: React.ReactElement;
	        flip2: React.ReactElement;
	        flip: React.ReactElement;
	        folderAdd: React.ReactElement;
	        folderRemove: React.ReactElement;
	        folder: React.ReactElement;
	        funnel: React.ReactElement;
	        gift: React.ReactElement;
	        github: React.ReactElement;
	        globe2: React.ReactElement;
	        globe3: React.ReactElement;
	        globe: React.ReactElement;
	        google: React.ReactElement;
	        grid: React.ReactElement;
	        hardDrive: React.ReactElement;
	        hash: React.ReactElement;
	        headphones: React.ReactElement;
	        heart: React.ReactElement;
	        home: React.ReactElement;
	        image2: React.ReactElement;
	        image: React.ReactElement;
	        inbox: React.ReactElement;
	        info: React.ReactElement;
	        keypad: React.ReactElement;
	        layers: React.ReactElement;
	        layout: React.ReactElement;
	        link2: React.ReactElement;
	        link: React.ReactElement;
	        linkedin: React.ReactElement;
	        list: React.ReactElement;
	        lock: React.ReactElement;
	        logIn: React.ReactElement;
	        logOut: React.ReactElement;
	        map: React.ReactElement;
	        maximize: React.ReactElement;
	        menu2: React.ReactElement;
	        menuArrow: React.ReactElement;
	        menu: React.ReactElement;
	        messageCircle: React.ReactElement;
	        messageSquare: React.ReactElement;
	        micOff: React.ReactElement;
	        mic: React.ReactElement;
	        minimize: React.ReactElement;
	        minusCircle: React.ReactElement;
	        minusSquare: React.ReactElement;
	        minus: React.ReactElement;
	        monitor: React.ReactElement;
	        moon: React.ReactElement;
	        moreHorizontal: React.ReactElement;
	        moreVertical: React.ReactElement;
	        move: React.ReactElement;
	        music: React.ReactElement;
	        navigation2: React.ReactElement;
	        navigation: React.ReactElement;
	        npm: React.ReactElement;
	        options2: React.ReactElement;
	        options: React.ReactElement;
	        pantone: React.ReactElement;
	        paperPlane: React.ReactElement;
	        pauseCircle: React.ReactElement;
	        people: React.ReactElement;
	        percent: React.ReactElement;
	        personAdd: React.ReactElement;
	        personDelete: React.ReactElement;
	        personDone: React.ReactElement;
	        personRemove: React.ReactElement;
	        person: React.ReactElement;
	        phoneCall: React.ReactElement;
	        phoneMissed: React.ReactElement;
	        phoneOff: React.ReactElement;
	        phone: React.ReactElement;
	        pieChart2: React.ReactElement;
	        pieChart: React.ReactElement;
	        pin: React.ReactElement;
	        playCircle: React.ReactElement;
	        plusCircle: React.ReactElement;
	        plusSquare: React.ReactElement;
	        plus: React.ReactElement;
	        power: React.ReactElement;
	        pricetags: React.ReactElement;
	        printer: React.ReactElement;
	        questionMarkCircle: React.ReactElement;
	        questionMark: React.ReactElement;
	        radioButtonOff: React.ReactElement;
	        radioButtonOn: React.ReactElement;
	        radio: React.ReactElement;
	        recording: React.ReactElement;
	        refresh: React.ReactElement;
	        repeat: React.ReactElement;
	        rewindLeft: React.ReactElement;
	        rewindRight: React.ReactElement;
	        save: React.ReactElement;
	        scissors: React.ReactElement;
	        search: React.ReactElement;
	        settings2: React.ReactElement;
	        settings: React.ReactElement;
	        shake: React.ReactElement;
	        share: React.ReactElement;
	        shieldOff: React.ReactElement;
	        shield: React.ReactElement;
	        shoppingBag: React.ReactElement;
	        shoppingCart: React.ReactElement;
	        shuffle2: React.ReactElement;
	        shuffle: React.ReactElement;
	        skipBack: React.ReactElement;
	        skipForward: React.ReactElement;
	        slash: React.ReactElement;
	        smartphone: React.ReactElement;
	        speaker: React.ReactElement;
	        square: React.ReactElement;
	        star: React.ReactElement;
	        stopCircle: React.ReactElement;
	        sun: React.ReactElement;
	        swap: React.ReactElement;
	        sync: React.ReactElement;
	        text: React.ReactElement;
	        thermometerMinus: React.ReactElement;
	        thermometerPlus: React.ReactElement;
	        thermometer: React.ReactElement;
	        toggleLeft: React.ReactElement;
	        toggleRight: React.ReactElement;
	        trash2: React.ReactElement;
	        trash: React.ReactElement;
	        trendingDown: React.ReactElement;
	        trendingUp: React.ReactElement;
	        tv: React.ReactElement;
	        twitter: React.ReactElement;
	        umbrella: React.ReactElement;
	        undo: React.ReactElement;
	        unlock: React.ReactElement;
	        upload: React.ReactElement;
	        videoOff: React.ReactElement;
	        video: React.ReactElement;
	        volumeDown: React.ReactElement;
	        volumeMute: React.ReactElement;
	        volumeOff: React.ReactElement;
	        volumeUp: React.ReactElement;
	        wifiOff: React.ReactElement;
	        wifi: React.ReactElement;
	    };
	    type Outline = {
	        activity: React.ReactElement;
	        alertCircle: React.ReactElement;
	        alertTriangle: React.ReactElement;
	        archive: React.ReactElement;
	        arrowBack: React.ReactElement;
	        arrowCircleDown: React.ReactElement;
	        arrowCircleLeft: React.ReactElement;
	        arrowCircleRight: React.ReactElement;
	        arrowCircleUp: React.ReactElement;
	        arrowDown: React.ReactElement;
	        arrowDownward: React.ReactElement;
	        arrowForward: React.ReactElement;
	        arrowIosBack: React.ReactElement;
	        arrowIosDownward: React.ReactElement;
	        arrowIosForward: React.ReactElement;
	        arrowIosUpward: React.ReactElement;
	        arrowLeft: React.ReactElement;
	        arrowRight: React.ReactElement;
	        arrowUp: React.ReactElement;
	        arrowUpward: React.ReactElement;
	        arrowheadDown: React.ReactElement;
	        arrowheadLeft: React.ReactElement;
	        arrowheadRight: React.ReactElement;
	        arrowheadUp: React.ReactElement;
	        at: React.ReactElement;
	        attach2: React.ReactElement;
	        attach: React.ReactElement;
	        award: React.ReactElement;
	        backspace: React.ReactElement;
	        barChart2: React.ReactElement;
	        barChart: React.ReactElement;
	        battery: React.ReactElement;
	        behance: React.ReactElement;
	        bellOff: React.ReactElement;
	        bell: React.ReactElement;
	        bluetooth: React.ReactElement;
	        bookOpen: React.ReactElement;
	        book: React.ReactElement;
	        bookmark: React.ReactElement;
	        briefcase: React.ReactElement;
	        browser: React.ReactElement;
	        brush: React.ReactElement;
	        bulb: React.ReactElement;
	        calendar: React.ReactElement;
	        camera: React.ReactElement;
	        car: React.ReactElement;
	        cast: React.ReactElement;
	        charging: React.ReactElement;
	        checkmarkCircle2: React.ReactElement;
	        checkmarkCircle: React.ReactElement;
	        checkmark: React.ReactElement;
	        checkmarkSquare2: React.ReactElement;
	        checkmarkSquare: React.ReactElement;
	        chevronDown: React.ReactElement;
	        chevronLeft: React.ReactElement;
	        chevronRight: React.ReactElement;
	        chevronUp: React.ReactElement;
	        clipboard: React.ReactElement;
	        clock: React.ReactElement;
	        closeCircle: React.ReactElement;
	        close: React.ReactElement;
	        closeSquare: React.ReactElement;
	        cloudDownload: React.ReactElement;
	        cloudUpload: React.ReactElement;
	        codeDownload: React.ReactElement;
	        code: React.ReactElement;
	        collapse: React.ReactElement;
	        colorPalette: React.ReactElement;
	        colorPicker: React.ReactElement;
	        compass: React.ReactElement;
	        copy: React.ReactElement;
	        cornerDownLeft: React.ReactElement;
	        cornerDownRight: React.ReactElement;
	        cornerLeftDown: React.ReactElement;
	        cornerLeftUp: React.ReactElement;
	        cornerRightDown: React.ReactElement;
	        cornerRightUp: React.ReactElement;
	        cornerUpLeft: React.ReactElement;
	        cornerUpRight: React.ReactElement;
	        creditCard: React.ReactElement;
	        crop: React.ReactElement;
	        cube: React.ReactElement;
	        diagonalArrowLeftDown: React.ReactElement;
	        diagonalArrowLeftUp: React.ReactElement;
	        diagonalArrowRightDown: React.ReactElement;
	        diagonalArrowRightUp: React.ReactElement;
	        doneAll: React.ReactElement;
	        download: React.ReactElement;
	        dropletOff: React.ReactElement;
	        droplet: React.ReactElement;
	        edit2: React.ReactElement;
	        edit: React.ReactElement;
	        email: React.ReactElement;
	        expand: React.ReactElement;
	        externalLink: React.ReactElement;
	        eyeOff2: React.ReactElement;
	        eyeOff: React.ReactElement;
	        eye: React.ReactElement;
	        facebook: React.ReactElement;
	        fileAdd: React.ReactElement;
	        file: React.ReactElement;
	        fileRemove: React.ReactElement;
	        fileText: React.ReactElement;
	        film: React.ReactElement;
	        flag: React.ReactElement;
	        flashOff: React.ReactElement;
	        flash: React.ReactElement;
	        flip2: React.ReactElement;
	        flip: React.ReactElement;
	        folderAdd: React.ReactElement;
	        folder: React.ReactElement;
	        folderRemove: React.ReactElement;
	        funnel: React.ReactElement;
	        gift: React.ReactElement;
	        github: React.ReactElement;
	        globe2: React.ReactElement;
	        globe: React.ReactElement;
	        google: React.ReactElement;
	        grid: React.ReactElement;
	        hardDrive: React.ReactElement;
	        hash: React.ReactElement;
	        headphones: React.ReactElement;
	        heart: React.ReactElement;
	        home: React.ReactElement;
	        image: React.ReactElement;
	        inbox: React.ReactElement;
	        info: React.ReactElement;
	        keypad: React.ReactElement;
	        layers: React.ReactElement;
	        layout: React.ReactElement;
	        link2: React.ReactElement;
	        link: React.ReactElement;
	        linkedin: React.ReactElement;
	        list: React.ReactElement;
	        loader: React.ReactElement;
	        lock: React.ReactElement;
	        logIn: React.ReactElement;
	        logOut: React.ReactElement;
	        map: React.ReactElement;
	        maximize: React.ReactElement;
	        menu2: React.ReactElement;
	        menuArrow: React.ReactElement;
	        menu: React.ReactElement;
	        messageCircle: React.ReactElement;
	        messageSquare: React.ReactElement;
	        micOff: React.ReactElement;
	        mic: React.ReactElement;
	        minimize: React.ReactElement;
	        minusCircle: React.ReactElement;
	        minus: React.ReactElement;
	        minusSquare: React.ReactElement;
	        monitor: React.ReactElement;
	        moon: React.ReactElement;
	        moreHorizontal: React.ReactElement;
	        moreVertical: React.ReactElement;
	        move: React.ReactElement;
	        music: React.ReactElement;
	        navigation2: React.ReactElement;
	        navigation: React.ReactElement;
	        npm: React.ReactElement;
	        options2: React.ReactElement;
	        options: React.ReactElement;
	        pantone: React.ReactElement;
	        paperPlane: React.ReactElement;
	        pauseCircle: React.ReactElement;
	        people: React.ReactElement;
	        percent: React.ReactElement;
	        personAdd: React.ReactElement;
	        personDelete: React.ReactElement;
	        personDone: React.ReactElement;
	        person: React.ReactElement;
	        personRemove: React.ReactElement;
	        phoneCall: React.ReactElement;
	        phoneMissed: React.ReactElement;
	        phoneOff: React.ReactElement;
	        phone: React.ReactElement;
	        pieChart: React.ReactElement;
	        pin: React.ReactElement;
	        playCircle: React.ReactElement;
	        plusCircle: React.ReactElement;
	        plus: React.ReactElement;
	        plusSquare: React.ReactElement;
	        power: React.ReactElement;
	        pricetags: React.ReactElement;
	        printer: React.ReactElement;
	        questionMarkCircle: React.ReactElement;
	        questionMark: React.ReactElement;
	        radioButtonOff: React.ReactElement;
	        radioButtonOn: React.ReactElement;
	        radio: React.ReactElement;
	        recording: React.ReactElement;
	        refresh: React.ReactElement;
	        repeat: React.ReactElement;
	        rewindLeft: React.ReactElement;
	        rewindRight: React.ReactElement;
	        save: React.ReactElement;
	        scissors: React.ReactElement;
	        search: React.ReactElement;
	        settings2: React.ReactElement;
	        settings: React.ReactElement;
	        shake: React.ReactElement;
	        share: React.ReactElement;
	        shieldOff: React.ReactElement;
	        shield: React.ReactElement;
	        shoppingBag: React.ReactElement;
	        shoppingCart: React.ReactElement;
	        shuffle2: React.ReactElement;
	        shuffle: React.ReactElement;
	        skipBack: React.ReactElement;
	        skipForward: React.ReactElement;
	        slash: React.ReactElement;
	        smartphone: React.ReactElement;
	        speaker: React.ReactElement;
	        square: React.ReactElement;
	        star: React.ReactElement;
	        stopCircle: React.ReactElement;
	        sun: React.ReactElement;
	        swap: React.ReactElement;
	        sync: React.ReactElement;
	        text: React.ReactElement;
	        thermometerMinus: React.ReactElement;
	        thermometer: React.ReactElement;
	        thermometerPlus: React.ReactElement;
	        toggleLeft: React.ReactElement;
	        toggleRight: React.ReactElement;
	        trash2: React.ReactElement;
	        trash: React.ReactElement;
	        trendingDown: React.ReactElement;
	        trendingUp: React.ReactElement;
	        tv: React.ReactElement;
	        twitter: React.ReactElement;
	        umbrella: React.ReactElement;
	        undo: React.ReactElement;
	        unlock: React.ReactElement;
	        upload: React.ReactElement;
	        videoOff: React.ReactElement;
	        video: React.ReactElement;
	        volumeDown: React.ReactElement;
	        volumeMute: React.ReactElement;
	        volumeOff: React.ReactElement;
	        volumeUp: React.ReactElement;
	        wifiOff: React.ReactElement;
	        wifi: React.ReactElement;
	    };
	    interface Index {
	        filled: Filled;
	        outline: Outline;
	    }
	}
	export default IconsetTypes;

}
declare module 'misc/icons/filled' {
	import IconTypes from 'misc/icons/types'; const filled: IconTypes.Filled;
	export default filled;

}
declare module 'misc/icons/outline' {
	import IconTypes from 'misc/icons/types'; const outline: IconTypes.Outline;
	export default outline;

}
declare module 'misc/icons' {
	export { default as filled } from 'misc/icons/filled';
	export { default as outline } from 'misc/icons/outline';

}
declare module 'content/Icon/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import IconsetTypes from '@flow-ui/core/misc/icons/types';
	import CSS from 'csstype'; namespace IconTypes {
	    /**
	     * TODO: circle и oval добавляют только padding
	     * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	     */
	    type Shapes = 'circle' | 'oval' | 'square';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        type: ((icons: IconsetTypes.Index) => React.ReactElement) | React.ReactElement;
	        shape?: Shapes;
	        size?: CSS.Properties['fontSize'];
	        color?: WhaleTypes.ColorProp;
	        background?: WhaleTypes.ColorProp;
	    }
	    interface Overrides {
	        container: void;
	        icon: void;
	    }
	}
	export default IconTypes;

}
declare module 'content/Icon/styles' {
	import WhaleTypes from 'types';
	import Types from 'content/Icon/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'content/Icon' {
	import React from 'react';
	import Types from 'content/Icon/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Spinner/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace SpinnerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactElement;
	        shape?: 'square' | 'rounded' | 'round';
	        duration?: number;
	        count?: number;
	        size?: string;
	    }
	    interface Overrides {
	        container: void;
	        children: void;
	    }
	}
	export default SpinnerTypes;

}
declare module 'content/Spinner/styles' {
	import WhaleTypes from 'types';
	import Types from 'content/Spinner/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'content/Spinner' {
	import React from 'react';
	import Types from 'content/Spinner/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Typography/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import CSS from 'csstype'; namespace TypographyTypes {
	    interface AnchorProps extends Props {
	        download?: any;
	        href?: string;
	        hrefLang?: string;
	        media?: string;
	        ping?: string;
	        rel?: string;
	        target?: string;
	        type?: string;
	        referrerPolicy?: string;
	        onEnter?: () => void;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        ellipsis?: boolean;
	        decoration?: CSS.Properties['textDecoration'];
	        children?: React.ReactNode;
	        color?: WhaleTypes.ColorProp;
	        background?: WhaleTypes.ColorProp;
	        align?: CSS.Properties['textAlign'];
	        weight?: CSS.Properties['fontWeight'];
	        size?: WhaleTypes.Size;
	        lineHeight?: CSS.Properties['lineHeight'];
	        transform?: CSS.Properties['textTransform'];
	    }
	    interface Overrides<T extends {
	        [T in keyof Overrides]?: Object;
	    } = {}> {
	        container: T['container'];
	    }
	    interface PrivateProps extends AnchorProps {
	        tag: string;
	        sizesOf: keyof WhaleTypes.Theme['typography'];
	        specificStyles?: any;
	    }
	}
	export default TypographyTypes;

}
declare module 'misc/hocs/Typography/styles' {
	import WhaleTypes from 'types';
	import Types from 'misc/hocs/Typography/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps>;
	export default styles;

}
declare module 'misc/hocs/Typography' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'misc/hocs/Typography/types'; type RefTag = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement; const _default: import("react").ForwardRefExoticComponent<Types.PrivateProps & import("react").RefAttributes<RefTag>>;
	export default _default;

}
declare module 'content/Header' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Display' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Paragraph' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export default _default;

}
declare module 'content/Text' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Anchor' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.AnchorProps & React.RefAttributes<HTMLAnchorElement>>;
	export default _default;

}
declare module 'control/Button/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace ButtonTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLButtonElement, Overrides> {
	        autoFocus?: boolean;
	        disabled?: boolean;
	        form?: string;
	        formAction?: string;
	        /**
	         * The formenctype attribute specifies how form-data should be encoded
	         * before sending it to a server. This attribute overrides the form's
	         * enctype attribute.
	         * The formenctype attribute is only used for buttons with type="submit".
	         */
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        name?: string;
	        type?: 'submit' | 'reset' | 'button';
	        value?: string | string[] | number;
	        size?: WhaleTypes.Size;
	        decoration?: 'filled' | 'outline' | 'text' | 'plain';
	        shape?: 'square' | 'rounded' | 'round';
	        uppercase?: boolean;
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactNode;
	    }
	    interface Overrides {
	        container: {
	            decoration: Props['decoration'];
	            shape: Props['shape'];
	            size: Props['size'];
	        };
	    }
	}
	export default ButtonTypes;

}
declare module 'control/Button/styles' {
	import Types from 'control/Button/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Button' {
	import React from 'react';
	import Types from 'control/Button/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLButtonElement>>;
	export default _default;

}
declare module 'layout/Flexbox/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import CSS from 'csstype'; namespace FlexboxTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        column?: boolean;
	        inline?: boolean;
	        alignItems?: CSS.Properties['alignItems'];
	        alignContent?: CSS.Properties['alignContent'];
	        justifyContent?: CSS.Properties['justifyContent'];
	        justifyItems?: CSS.Properties['justifyItems'];
	        direction?: CSS.Properties['flexDirection'];
	        wrap?: CSS.Properties['flexWrap'];
	        flow?: CSS.Properties['flexFlow'];
	        children?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default FlexboxTypes;

}
declare module 'layout/Flexbox/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Flexbox/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Flexbox' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Flexbox/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Grid/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import CSS from 'csstype'; namespace GridTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        inline?: boolean;
	        children?: React.ReactNode;
	        templateColumns?: CSS.Properties['gridTemplateColumns'];
	        templateRows?: CSS.Properties['gridTemplateRows'];
	        templateAreas?: CSS.Properties['gridTemplateAreas'];
	        columnGap?: CSS.Properties['gridColumnGap'];
	        rowGap?: CSS.Properties['gridRowGap'];
	        gap?: CSS.Properties['gridGap'];
	        autoColumns?: CSS.Properties['gridAutoColumns'];
	        autoRows?: CSS.Properties['gridAutoRows'];
	        autoFlow?: CSS.Properties['gridAutoFlow'];
	        alignItems?: CSS.Properties['alignItems'];
	        alignContent?: CSS.Properties['alignContent'];
	        justifyContent?: CSS.Properties['justifyContent'];
	        justifyItems?: CSS.Properties['justifyItems'];
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default GridTypes;

}
declare module 'layout/Grid/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Grid/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Grid' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Grid/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Field/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace FieldTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLInputElement, Overrides>, 'onChange'> {
	        label?: React.ReactNode;
	        hint?: React.ReactNode;
	        size?: WhaleTypes.Size;
	        decoration?: 'none' | 'filled' | 'underline' | 'outline';
	        color?: WhaleTypes.ColorProp;
	        shape?: 'round' | 'rounded' | 'square';
	        disabled?: boolean;
	        rightChild?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        clearable?: boolean;
	        onEnter?: () => void;
	        onClear?: () => void;
	    }
	    interface State {
	        disabled: Props['disabled'];
	        focus: boolean;
	        shape: Props['shape'];
	        size: Props['size'];
	        decoration: Props['decoration'];
	        isLabelOutside: boolean;
	        isLabelOverlay: boolean;
	    }
	    interface Overrides<T extends {
	        [T in keyof Overrides]?: Object;
	    } = {}> {
	        container: State & T['container'];
	        field: State & T['field'];
	        content: State & T['content'];
	        label: State & T['label'];
	        child: {
	            align: 'right' | 'left';
	        } & State & T['child'];
	        hint: State & T['hint'];
	    }
	    interface PrivateProps extends Props {
	        focus: boolean;
	        isLabelOutside: boolean;
	        isLabelOverlay: boolean;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        state?: Object;
	        labelName?: string;
	        attributes?: any;
	        events?: any;
	        children?: React.ReactNode;
	    }
	}
	export default FieldTypes;

}
declare module 'control/Calendar/types' {
	import WhaleTypes from 'types';
	import { Moment } from 'moment';
	import { CSSProperties } from 'react'; namespace CalendarTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        /**
	         * Type for Calendar
	         * @default day
	         */
	        type?: GridType;
	        /**
	         * Property value could be a string
	         * if you pass format property aswell
	         * otherwise value should be instance of Date
	         */
	        value?: Moment | Date;
	        defaultValue?: Moment | Date;
	        /**
	         * Min datetime that could be selected
	         */
	        minValue?: Moment | Date;
	        /**
	         * Max datetime that could be selected
	         */
	        maxValue?: Moment | Date;
	        /**
	         * Callback function will with Date object
	         */
	        onChange?: (moment: Moment) => void;
	        /**
	         * @default ru
	         */
	        locale?: Locale;
	        /**
	         * Hide today button
	         */
	        hideToday?: boolean;
	    }
	    interface DateGridProps {
	        attributes: any;
	        hideToday: boolean;
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        onChange: (date: Moment) => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        type: GridType;
	    }
	    interface DateGridCalendarProps {
	        value: Moment;
	        tmp: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        active: Moment;
	        onClick?: () => void;
	        style?: CSSProperties;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface DateGridTitleProps {
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        gridType: GridType;
	        onNext: () => void;
	        onPrevious: () => void;
	        onGridTypeChange: (type: GridType) => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        dateGrind: void;
	        weekDay: void;
	        title: void;
	        gridBlock: {
	            isActive: Boolean;
	            isCurrent: boolean;
	            isDisabled: boolean;
	            isCurrentMonth: boolean;
	        };
	    }
	}
	export default CalendarTypes;

}
declare module 'control/Calendar/DateGridDay' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridDay: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridDay;

}
declare module 'control/Calendar/DateGridMonth' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridMonth: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridMonth;

}
declare module 'control/Calendar/DateGridTitle' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridTitle: (props: CalendarTypes.DateGridTitleProps) => JSX.Element;
	export default DateGridTitle;

}
declare module 'control/Calendar/DateGridYear' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridYear: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridYear;

}
declare module 'control/Calendar/DateGrid' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/Calendar/types'; const DateGrid: (props: DatePickerTypes.DateGridProps) => JSX.Element;
	export default DateGrid;

}
declare module 'control/Calendar/styles' {
	import WhaleTypes from 'types';
	import Types from 'control/Calendar/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Calendar' {
	import React from 'react';
	import Types from 'control/Calendar/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Block/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import CSS from 'csstype'; namespace BlockTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';
	        surface?: 'major' | 'medium' | 'minor';
	        hoverSurface?: 'major' | 'medium' | 'minor';
	        children?: React.ReactNode;
	        background?: WhaleTypes.ColorProp;
	        color?: WhaleTypes.ColorProp;
	        overflow?: CSS.Properties['overflow'];
	    }
	    interface Overrides {
	        container: {
	            surface: Props['surface'];
	            hoverSurface: Props['hoverSurface'];
	        };
	    }
	}
	export default BlockTypes;

}
declare module 'layout/Block/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Block/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Block' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Block/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Check/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace CheckTypes {
	    type CheckType = 'checkbox' | 'radio' | 'switch';
	    interface Props extends WhaleTypes.AllProps<HTMLInputElement, Overrides> {
	        label?: string;
	        labelColor?: WhaleTypes.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: WhaleTypes.Size;
	    }
	    interface PrivateProps extends Props {
	        children: (checked: boolean, focus: boolean) => React.ReactElement;
	        type?: CheckType;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        container: {
	            disabled: Props['disabled'];
	            animated: Props['animated'];
	        };
	        label: {
	            disabled: Props['disabled'];
	            size: Props['size'];
	            uppercase: Props['uppercase'];
	            animated: Props['animated'];
	        };
	    }
	}
	export default CheckTypes;

}
declare module 'misc/hocs/Check' {
	import React from 'react';
	import CheckTypes from 'misc/hocs/Check/types'; const _default: React.ForwardRefExoticComponent<CheckTypes.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Checkbox/types' {
	import CheckTypes from 'misc/hocs/Check/types'; namespace CheckboxTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Overrides extends CheckTypes.Overrides {
	        check: {
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	            focus: boolean;
	        };
	        icon: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default CheckboxTypes;

}
declare module 'misc/hocs/Check/styles' {
	import WhaleTypes from 'types';
	import Types from 'misc/hocs/Check/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox/styles' {
	import Types from 'control/Checkbox/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox' {
	import React from 'react';
	import Types from 'control/Checkbox/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Drop/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace DropTypes {
	    interface TargetCoordinates {
	        top: number;
	        bottom: number;
	        left: number;
	        right: number;
	    }
	    interface Props extends WhaleTypes.AttributeProps, WhaleTypes.EventProps<HTMLDivElement>, WhaleTypes.CoreProps<Overrides>, WhaleTypes.ColorProps, WhaleTypes.BorderProps, WhaleTypes.PaddingProps, WhaleTypes.LayoutProps {
	        target: any;
	        align?: 'top' | 'bottom' | 'left' | 'right';
	        justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside';
	        stretchWidth?: boolean;
	        stretchHeight?: boolean;
	        spacing?: number;
	        onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void;
	        onEsc?: () => void;
	        children?: React.ReactNode;
	    }
	    interface Ref extends Partial<HTMLDivElement> {
	        updatePosition: () => void;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default DropTypes;

}
declare module 'layout/Drop/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Drop/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Drop' {
	import React from 'react';
	import Types from 'layout/Drop/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Popover/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types';
	import CSS from 'csstype'; namespace PopoverTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'none';
	        background?: WhaleTypes.ColorProp;
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactNode;
	        arrowWidth?: CSS.Properties['width'];
	        arrowHeight?: CSS.Properties['height'];
	    }
	    interface Overrides {
	        container: void;
	        arrow: {
	            align: Props['align'];
	        };
	    }
	}
	export default PopoverTypes;

}
declare module 'layout/Popover/styles' {
	import Types from 'layout/Popover/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Popover' {
	import React from 'react';
	import Types from 'layout/Popover/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Field' {
	import React from 'react';
	import Types from 'misc/hocs/Field/types'; const _default: React.ForwardRefExoticComponent<Types.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/utils/createID' {
	 const _default: () => string;
	export default _default;

}
declare module 'misc/hooks/useMask' {
	import IMask from 'imask'; const _default: (ref: any, masked: any) => IMask.InputMask<IMask.AnyMaskedOptions>;
	export default _default;

}
declare module 'control/DatePicker/mask' {
	import moment from 'moment'; const _default: (format: string, min: moment.Moment, max: moment.Moment) => any;
	export default _default;

}
declare module 'misc/hocs/Field/styles' {
	import WhaleTypes from 'types';
	import Types from 'misc/hocs/Field/types'; type ExtractFunction<T> = {
	    [K in keyof T]: Extract<T[K], Function>;
	}; const fieldStyles: <T extends Types.Overrides<{}>>(props: Pick<Types.Props, "alignSelf" | "backgroundColor" | "color" | "display" | "flexBasis" | "flexGrow" | "flexShrink" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "justifySelf" | "visibility" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "flex" | "gridArea" | "gridColumn" | "gridRow" | "placeSelf" | "size" | "style" | "disabled" | "label" | "p" | "className" | "id" | "tabIndex" | "role" | "draggable" | "attrs" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "styles" | "animated" | "textColor" | "px" | "py" | "pr" | "pl" | "pt" | "pb" | "w" | "h" | "m" | "mx" | "my" | "mr" | "ml" | "mt" | "mb" | "shape" | "onEnter" | "decoration" | "hint" | "rightChild" | "leftChild" | "clearable" | "onClear">, theme: WhaleTypes.Theme<{}>, params?: {
	    manyLines?: boolean | undefined;
	    additionalPadding?: string | undefined;
	    labelOverlayPosition?: "top" | "center" | undefined;
	    overrides?: Partial<ExtractFunction<WhaleTypes.Styles<T>>> | undefined;
	}) => WhaleTypes.Styles<Types.Overrides<{}>>;
	export default fieldStyles;

}
declare module 'control/DatePicker/types' {
	import { Moment } from 'moment';
	import FieldTypes from 'misc/hocs/Field/types'; namespace DatePickerTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends Omit<FieldTypes.Props, 'onChange'>, InputProps {
	        /**
	         * Type for DatePicker
	         * @default day
	         */
	        type?: GridType;
	        /**
	         * Property value could be a string
	         * if you pass format property aswell
	         * otherwise value should be instance of Date
	         */
	        value?: Moment | Date | string;
	        defaultValue?: Moment | Date | string;
	        /**
	         * Format moment YYYY-MM-DD
	         * @default YYYY-MM-DD
	         */
	        format?: string;
	        /**
	         * Min datetime that could be selected
	         */
	        minValue?: Moment | Date | string;
	        /**
	         * Max datetime that could be selected
	         */
	        maxValue?: Moment | Date | string;
	        /**
	         * Callback function will with Date object
	         * or string if format property was passed.
	         */
	        onChange?: (moment: Moment, value: string) => void;
	        /**
	         * Do not close datepicker on change
	         * latest value
	         */
	        stayOpen?: boolean;
	        /**
	         * Enable mask input
	         */
	        masked?: boolean;
	        /**
	         * @default ru
	         */
	        locale?: Locale;
	        /**
	         * Hide today button
	         */
	        hideToday?: boolean;
	    }
	    interface InputProps {
	        autoComplete?: string;
	        autoFocus?: boolean;
	        list?: string;
	        name?: string;
	        placeholder?: string;
	        pattern?: string;
	        readOnly?: boolean;
	        required?: boolean;
	        form?: string;
	        formAction?: string;
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	    }
	    interface Overrides extends FieldTypes.Overrides {
	        drop: {
	            isActive: boolean;
	        };
	        input: {
	            isLabelOverlay: boolean;
	        };
	    }
	}
	export default DatePickerTypes;

}
declare module 'control/DatePicker/styles' {
	import WhaleTypes from 'types';
	import Types from 'control/DatePicker/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/DatePicker' {
	import React from 'react';
	import Types from 'control/DatePicker/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace MenuTypes {
	    type Value = string | number;
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        defaultValue?: Value;
	        value?: Value;
	        onChange?: (value: Value) => void;
	        items: Item[];
	        size?: WhaleTypes.Size;
	        decoration?: 'filled' | 'outline' | 'color' | 'underline' | 'tab' | 'filled-underline';
	        flip?: boolean;
	        spacing?: string;
	        direction?: 'row' | 'column';
	        shape?: 'square' | 'rounded' | 'round';
	        border?: 'none' | 'narrow' | 'wide';
	        align?: 'start' | 'center' | 'end';
	        separator?: React.ReactElement;
	        color?: WhaleTypes.ColorProp;
	        disabled?: boolean;
	    }
	    interface Item extends Partial<Omit<WhaleTypes.EventProps<HTMLDivElement>, 'onChange'>>, Partial<Props> {
	        content: React.ReactNode;
	        value: Value;
	        disabled?: boolean;
	    }
	    interface ItemProps extends Item {
	        active: boolean;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        container: {
	            size: Props['size'];
	            flip: Props['flip'];
	            border: Props['border'];
	        };
	        item: {
	            shape: Props['shape'];
	            disabled: boolean;
	            active: boolean;
	            size: Props['size'];
	            decoration: Props['decoration'];
	        };
	        separator: void;
	    }
	}
	export default MenuTypes;

}
declare module 'control/Menu/Item' {
	import { RefForwardingComponent } from 'react';
	import Types from 'control/Menu/types'; const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps>;
	export default Item;

}
declare module 'control/Menu/styles' {
	import WhaleTypes from 'types';
	import Types from 'control/Menu/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Menu' {
	import React from 'react';
	import Types from 'control/Menu/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Radio/types' {
	import CheckTypes from 'misc/hocs/Check/types'; namespace RadioTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Overrides extends CheckTypes.Overrides {
	        check: {
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	        radio: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default RadioTypes;

}
declare module 'control/Radio/styles' {
	import Types from 'control/Radio/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Radio' {
	import React from 'react';
	import Types from 'control/Radio/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Range/types' {
	import WhaleTypes from 'types'; namespace RangeTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        min?: number;
	        max?: number;
	        defaultValue?: number;
	        value?: number;
	        onChange?: (value: number) => void;
	        mode?: 'single' | 'range';
	        className?: string;
	    }
	    interface Overrides {
	        container: void;
	        rail: void;
	        track: void;
	        thumb: void;
	    }
	}
	export default RangeTypes;

}
declare module 'control/Range/styles' {
	import Types from 'control/Range/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Range' {
	import React from 'react';
	import Types from 'control/Range/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Pageswitch/types' {
	import WhaleTypes from 'types'; namespace PageswitchTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        length: number;
	        onChange?: (pageNumber: number, startIndex: number) => void;
	        options?: Options;
	        value?: number;
	        defaultValue?: number;
	    }
	    interface Options {
	        pageSize?: number;
	    }
	    interface Overrides {
	        container: void;
	        arrowButton: {
	            disabled: boolean;
	        };
	    }
	}
	export default PageswitchTypes;

}
declare module 'control/Pageswitch/styles' {
	import WhaleTypes from 'types';
	import Types from 'control/Pageswitch/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Pageswitch' {
	import React from 'react';
	import Types from 'control/Pageswitch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Select/types' {
	import FieldTypes from 'misc/hocs/Field/types';
	import WhaleTypes from 'types'; namespace SelectTypes {
	    interface Option {
	        text: string;
	        value: any;
	    }
	    interface Props extends Omit<FieldTypes.Props, 'onChange'> {
	        placeholder?: string;
	        options: Option[];
	        multiselect?: boolean;
	        searchable?: boolean;
	        values?: Option[];
	        defaultValues?: Option[];
	        onChange?: (values: Option[], changedValue?: Option) => void;
	    }
	    type Actions = {
	        type: 'setSelectedOptions';
	        payload: Option[];
	    } | {
	        type: 'toggleOpen';
	        payload: boolean;
	    } | {
	        type: 'search';
	        payload: string;
	    } | {
	        type: 'setCursor';
	        payload: number;
	    } | {
	        type: 'clear';
	    };
	    type State = {
	        selectedOptions: Option[];
	        open: boolean;
	        searchValue: string;
	        empty: boolean;
	        cursor: number;
	    };
	    interface OptionsProps extends SearchProps {
	        selected: SelectTypes.Option[];
	        onClose: (option: any) => void;
	        searchable?: boolean;
	    }
	    interface SearchProps {
	        searchValue: string;
	        onSearch: (searchValue: string) => void;
	        size?: number;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        placeholder?: string;
	        defaultValue?: string;
	        disabled?: boolean;
	    }
	    interface Overrides extends FieldTypes.Overrides<{
	        field: {
	            open: boolean;
	        };
	    }> {
	        placeholder: void;
	        input: void;
	        options: void;
	        optionItem: void;
	        optionItemText: void;
	        dropMenu: {
	            open: boolean;
	            shape: Props['shape'];
	            decoration: Props['decoration'];
	            focus: boolean;
	        };
	        dropItem: {
	            size: Props['size'];
	            underCursor: boolean;
	        };
	    }
	}
	export default SelectTypes;

}
declare module 'control/Select/reducer' {
	import Types from 'control/Select/types'; const _default: (state: Types.State, action: Types.Actions) => {
	    selectedOptions: Types.Option[];
	    empty: boolean;
	    searchValue: string;
	    cursor: number;
	    open: boolean;
	};
	export default _default;

}
declare module 'misc/utils/variant' {
	 const _default: <T>(prop: any, variant: { [K in T]?: any; }) => any;
	export default _default;

}
declare module 'control/Select/styles' {
	import Types from 'control/Select/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Select' {
	import React from 'react';
	import Types from 'control/Select/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Switch/types' {
	import CheckTypes from 'misc/hocs/Check/types'; namespace SwitchTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Overrides extends CheckTypes.Overrides {
	        check: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	        switch: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default SwitchTypes;

}
declare module 'control/Switch/styles' {
	import Types from 'control/Switch/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Switch' {
	import React from 'react';
	import Types from 'control/Switch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/TextField/types' {
	import { ChangeEventHandler } from 'react';
	import IMask from 'imask';
	import FieldTypes from 'misc/hocs/Field/types'; namespace TextFieldTypes {
	    type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
	    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
	        defaultValue?: string | number;
	        align?: 'left' | 'right';
	        multiline?: boolean;
	        masked?: IMask.AnyMaskedOptions;
	        onChange?: ChangeEventHandler<HTMLInputElement>;
	    }
	    interface InputProps {
	        autoComplete?: string;
	        autoFocus?: boolean;
	        list?: string;
	        name?: string;
	        placeholder?: string;
	        pattern?: string;
	        readOnly?: boolean;
	        required?: boolean;
	        type?: InputTypes;
	        value?: string | number;
	        form?: string;
	        formAction?: string;
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        max?: number | string;
	        maxLength?: number;
	        min?: number | string;
	        minLength?: number;
	        step?: number | string;
	        width?: number | string;
	    }
	    interface TextAreaProps {
	        cols?: number;
	        rows?: number;
	        wrap?: string;
	    }
	    interface Overrides extends FieldTypes.Overrides {
	        input: {
	            isLabelOverlay: boolean;
	        };
	    }
	}
	export default TextFieldTypes;

}
declare module 'control/TextField/styles' {
	import Types from 'control/TextField/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/TextField' {
	import React from 'react';
	import Types from 'control/TextField/types'; type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<RefTypes>>;
	export default _default;

}
declare module 'data/Meter/types' {
	import WhaleTypes from 'types'; namespace MeterTypes {
	    type MeterType = 'line' | 'circle';
	    type MeterDecoration = 'filled' | 'outline';
	    type MeterShape = 'square' | 'round';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        percent: number;
	        size?: WhaleTypes.Size;
	        /**
	         * @default line
	         */
	        type?: MeterType;
	        decoration?: MeterDecoration;
	        shape?: MeterShape;
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: boolean;
	    }
	    interface Overrides {
	        container: {
	            shape: MeterShape;
	            size: WhaleTypes.Size;
	            decoration: MeterDecoration;
	        };
	        thumb: {
	            shape: MeterShape;
	            size: WhaleTypes.Size;
	        };
	    }
	}
	export default MeterTypes;

}
declare module 'data/Meter/styles' {
	import WhaleTypes from 'types';
	import Types from 'data/Meter/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/Meter' {
	import React from 'react';
	import Types from 'data/Meter/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module '@flow-ui/core/data/Table/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace TableTypes {
	    type TableCellKey = number | string;
	    type TableSortType = 'ASC' | 'DESC';
	    type TableSortObject = {
	        key: TableCellKey;
	        sort: TableSortType;
	    };
	    type TablePaginationOptions = {
	        pageSize: number;
	        alwaysVisible?: boolean;
	    };
	    interface TableCellContext {
	        /**
	         * Current cell key
	         */
	        key: TableCellKey;
	        /**
	         * Current row index
	         */
	        index: number;
	        /**
	         * Current row data
	         */
	        row: Object;
	        /**
	         * Link on column configuration
	         */
	        column: TableColumn | null;
	        /**
	         * Raw data of cell
	         */
	        value?: React.ReactNode | string | number | null;
	        /**
	         * Is current cell in modify mode
	         */
	        isModify: boolean;
	        /**
	         * Is current row expanded
	         */
	        isExpand: boolean;
	        /**
	         * If row visible on screen
	         */
	        isVisible: boolean;
	        /**
	         * Set expanded ReactNode below current row
	         */
	        setExpand: (el: React.ReactNode | null) => boolean;
	        /**
	         * Set modify mode for this cell
	         */
	        setModify: (modify: boolean, key?: TableCellKey) => boolean;
	        /**
	         * Reload all data in table
	         */
	        reloadData: () => void;
	    }
	    type DataCollection = {
	        row: Object;
	        isExpand: boolean;
	        isVisible: boolean;
	        isCellModify: {
	            [key: string]: boolean;
	        };
	        setModifyState: {
	            [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
	        };
	        setExpandComponent?: React.Dispatch<React.SetStateAction<React.ReactNode>>;
	    };
	    interface Ref extends TableRef, HTMLTableElement {
	    }
	    interface TableRef {
	        /**
	         * Get context for specific cell
	         */
	        getCellContext: (index: number, key: TableCellKey) => TableCellContext | null;
	        /**
	         * Set expanded ReactNode below row index
	         * @returns true if success
	         */
	        setExpand: (index: number, content: React.ReactNode | null) => boolean;
	        /**
	         * Set modify mode for specific row or cell
	         * @returns true if success
	         */
	        setModify: (modify: boolean, index: number, key?: TableCellKey) => boolean;
	    }
	    interface TableColumn {
	        key: TableCellKey;
	        title?: string;
	        width?: number | string;
	        render?: (cellContext: TableCellContext, index: number) => void;
	        sort?: TableSortType;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        data: Object[];
	        columns: TableColumn[];
	        pagination?: TablePaginationOptions;
	    }
	    interface HeadCellProps {
	        column: TableColumn;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        setSort: React.Dispatch<React.SetStateAction<TableSortObject>>;
	    }
	    interface CellProps {
	        dcItem: DataCollection;
	        column: TableColumn;
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        getCellContext: TableRef['getCellContext'];
	    }
	    interface RowProps {
	        dcItem: DataCollection;
	        columns: TableColumn[];
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        getCellContext: TableRef['getCellContext'];
	    }
	    interface FootProps {
	        dc: DataCollection[];
	        columns: TableColumn[];
	        pagination?: TablePaginationOptions;
	        onPageChange: (pageNumber: number) => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        container: void;
	        headCell: {
	            sort: boolean;
	        };
	        row: void;
	        rowCell: void;
	        expandContainer: void;
	        footer: void;
	    }
	}
	export default TableTypes;

}
declare module 'data/Table/styles' {
	import Types from '@flow-ui/core/data/Table/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/Table/TableCell' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.CellProps & React.RefAttributes<HTMLTableDataCellElement>>;
	export default _default;

}
declare module 'data/Table/TableRow' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.RowProps & React.RefAttributes<HTMLTableRowElement>>;
	export default _default;

}
declare module 'data/Table/TableHeadCell' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.HeadCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
	export default _default;

}
declare module 'data/Table/TableFoot' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.FootProps & React.RefAttributes<HTMLTableCellElement>>;
	export default _default;

}
declare module 'data/Table' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.TableRef>>;
	export default _default;

}
declare module 'layout/Badge/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace BadgeTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        content: React.ReactNode;
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
	        children?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	        holder: {
	            align: Props['align'];
	        };
	    }
	}
	export default BadgeTypes;

}
declare module 'layout/Badge/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Badge/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Badge' {
	import React from 'react';
	import Types from 'layout/Badge/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module '@flow-ui/core/layout/Modal/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace ModalTypes {
	    type ExtentedProps = WhaleTypes.AttributeProps & WhaleTypes.EventProps<HTMLDivElement> & WhaleTypes.CoreProps<Overrides> & WhaleTypes.ColorProps & WhaleTypes.BorderProps & WhaleTypes.PaddingProps & WhaleTypes.LayoutProps;
	    interface Ref {
	        open: (customContent?: React.ReactElement | null) => void;
	        close: (didClose?: () => void) => void;
	        setTitle: (title: string) => void;
	        setSubtitle: (subtitle: string) => void;
	        setCenter: (center: boolean) => void;
	        setCustomContent: (customContent: React.ReactElement | null) => void;
	        title?: string;
	        subtitle?: string;
	        center: boolean;
	        customContent: React.ReactElement | null;
	        overlay: any;
	        window: any;
	    }
	    interface Props extends ExtentedProps {
	        title?: string;
	        subtitle?: string;
	        fullSize?: boolean;
	        children?: any;
	        opened?: boolean;
	        hideHeader?: boolean;
	        onClose?: () => void;
	        didClose?: () => void;
	        onOpen?: () => void;
	        didOpen?: () => void;
	    }
	    interface InnerProps extends Props {
	        innerRef: any;
	    }
	    interface StyleProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	    }
	    interface ModalOverlayProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        children?: any;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface ModalWindowProps {
	        title?: string;
	        subtitle?: string;
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        hideHeader?: boolean;
	        children?: any;
	        containerAttr?: ExtentedProps;
	        containerEvents?: any;
	        onClosePressed: () => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface ModalHeaderProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        onClosePressed: () => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        overlay: {
	            visible?: boolean;
	            center?: boolean;
	        };
	        window: {
	            visible?: boolean;
	            fullSizeCenter?: boolean;
	        };
	        header: void;
	        cross: void;
	    }
	}
	export default ModalTypes;

}
declare module 'layout/Modal/ModalOverlay' {
	import React from 'react';
	import ModalTypes from '@flow-ui/core/layout/Modal/types'; const ModalOverlay: React.ForwardRefExoticComponent<ModalTypes.ModalOverlayProps & React.RefAttributes<unknown>>;
	export default ModalOverlay;

}
declare module 'layout/Modal/ModalPortal' {
	 const _default: (props: any) => import("react").ReactPortal;
	export default _default;

}
declare module 'layout/Modal/ModalHeader' {
	/// <reference types="react" />
	import ModalTypes from '@flow-ui/core/layout/Modal/types'; const ModalHeader: (props: ModalTypes.ModalHeaderProps) => JSX.Element | null;
	export default ModalHeader;

}
declare module 'layout/Modal/ModalWindow' {
	import ModalTypes from '@flow-ui/core/layout/Modal/types';
	import React from 'react'; const ModalWindow: React.ForwardRefExoticComponent<ModalTypes.ModalWindowProps & React.RefAttributes<unknown>>;
	export default ModalWindow;

}
declare module 'layout/Modal/styles' {
	import WhaleTypes from 'types';
	import Types from '@flow-ui/core/layout/Modal/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Modal' {
	import React from 'react';
	import Types from '@flow-ui/core/layout/Modal/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Notification/types' {
	 namespace NotificationTypes {
	    interface Props {
	        children?: React.ReactNode;
	        onClick?: () => void;
	    }
	    interface NotifyOptions {
	        /**
	         * Title of notification
	         */
	        title: string;
	        /**
	         * Message of notification
	         */
	        message: string;
	        /**
	         * Notification will be removed after timeout
	         * value in milisecods
	         */
	        timeout?: number;
	        /**
	         * Will call on notificaion click
	         */
	        onClick?: () => void;
	        /**
	         * if custom content filled then title and message will be ignored
	         */
	        customContent?: React.ReactElement;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default NotificationTypes;

}
declare module 'layout/Notification/styles' {
	import WhaleTypes from 'types';
	import Types from 'layout/Notification/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Notification' {
	import React from 'react';
	import Types from 'layout/Notification/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Tree/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace TreeTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        label?: React.ReactNode | string | ((isOpen: boolean) => React.ReactNode);
	        children?: React.ReactNode;
	        decoration?: 'flat' | 'drop' | 'inline';
	        alwaysOpen?: boolean;
	        defaultOpen?: boolean;
	        indent?: boolean;
	    }
	    interface Overrides {
	        container: {
	            decoration: Props['decoration'];
	            needIndent: boolean;
	        };
	        label: void;
	        icon: {
	            decoration: Props['decoration'];
	            disabled: boolean;
	        };
	        child: {
	            isOpen: boolean;
	        };
	    }
	}
	export default TreeTypes;

}
declare module 'layout/Tree/styles' {
	import Types from 'layout/Tree/types';
	import WhaleTypes from 'types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Tree' {
	import React from 'react';
	import Types from 'layout/Tree/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/themes/light' {
	import WhaleTypes from 'types'; const _default: WhaleTypes.Theme<{}>;
	export default _default;

}
declare module 'misc/themes/dark' {
	 const dark: import("types").default.Theme<{}>;
	export default dark;

}
declare module 'misc/themes' {
	export { default as light } from 'misc/themes/light';
	export { default as dark } from 'misc/themes/dark';

}
declare module 'layout/Viewport/types' {
	/// <reference types="react" />
	import WhaleTypes from 'types'; namespace ViewportTypes {
	    interface Themes {
	        light: WhaleTypes.Theme;
	        dark: WhaleTypes.Theme;
	    }
	    interface Props {
	        wrapper?: boolean;
	        className?: string;
	        id?: string;
	        theme?: ((theme: Themes) => WhaleTypes.Theme) | WhaleTypes.Theme;
	        children?: React.ReactNode;
	    }
	    interface MountArea {
	        className?: string;
	    }
	    interface MountAreaElement {
	        key: string;
	        children: React.ReactElement;
	    }
	    interface Context {
	        theme: WhaleTypes.Theme;
	    }
	    interface DialogOptions {
	        /**
	         * Title of modal window header
	         */
	        title?: string;
	        /**
	         * Subtitle of modal window header
	         */
	        subtitle?: string;
	        /**
	         * Message of dialog
	         */
	        message?: string;
	        /**
	         * Button text
	         */
	        buttonText?: string;
	        /**
	         * Hides modal window header
	         */
	        hideHeader?: boolean;
	        /**
	         * if custom content filled then message and buttonText will be ignored
	         */
	        customContent?: React.ReactElement;
	    }
	}
	export default ViewportTypes;

}
declare module 'layout/Viewport/MountArea' {
	import React, { FC } from 'react';
	import ViewportTypes from 'layout/Viewport/types';
	export let addElement: (children: React.ReactElement, key?: string) => string;
	export let removeElement: (key: string) => void; const MountArea: FC<ViewportTypes.MountArea>;
	export default MountArea;

}
declare module 'layout/Viewport/styles' {
	 const _default: (theme: any, wrapper: any) => {
	    global: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'layout/Viewport' {
	import { RefForwardingComponent } from 'react';
	import Types from 'layout/Viewport/types'; const Viewport: RefForwardingComponent<{}, Types.Props>;
	export default Viewport;

}
declare module 'misc/utils/dialog' {
	import ViewportTypes from 'layout/Viewport/types'; const _default: (options: ViewportTypes.DialogOptions) => void;
	export default _default;

}
declare module 'misc/utils/notify' {
	import NotificationType from 'layout/Notification/types'; const _default: (options: NotificationType.NotifyOptions) => void;
	export default _default;

}
declare module 'misc/hooks/useBrowser' {
	 const _default: () => {
	    height: number;
	    width: number;
	    isDesktop: boolean;
	    isTablet: boolean;
	    isMobile: boolean;
	    tableMinWidth: number;
	    resolutionMobileMinimum: number;
	    resolutionTabletMinimum: number;
	    resolutionDesktopMinimum: number;
	    info: {
	        vendor: string;
	        name: string;
	        version: string;
	        language: string;
	        geolocation: Geolocation;
	    };
	};
	export default _default;

}
declare module '@flow-ui/core' {
	/**
	 * Content
	 */
	export { default as Divider } from 'content/Divider';
	export { default as Icon } from 'content/Icon';
	export { default as Spinner } from 'content/Spinner';
	export { default as Header } from 'content/Header';
	export { default as Display } from 'content/Display';
	export { default as Paragraph } from 'content/Paragraph';
	export { default as Text } from 'content/Text';
	export { default as Anchor } from 'content/Anchor';
	/**
	 * Control
	 */
	export { default as Button } from 'control/Button';
	export { default as Calendar } from 'control/Calendar';
	export { default as Checkbox } from 'control/Checkbox';
	export { default as DatePicker } from 'control/DatePicker';
	export { default as Menu } from 'control/Menu';
	export { default as Radio } from 'control/Radio';
	export { default as Range } from 'control/Range';
	export { default as Pageswitch } from 'control/Pageswitch';
	export { default as Select } from 'control/Select';
	export { default as Switch } from 'control/Switch';
	export { default as TextField } from 'control/TextField';
	/**
	 * Data
	 */
	export { default as Meter } from 'data/Meter';
	export { default as Table } from 'data/Table';
	/**
	 * Layout
	 */
	export { default as Badge } from 'layout/Badge';
	export { default as Block } from 'layout/Block';
	export { default as Drop } from 'layout/Drop';
	export { default as Flexbox } from 'layout/Flexbox';
	export { default as Grid } from 'layout/Grid';
	export { default as Modal } from 'layout/Modal';
	export { default as Notification } from 'layout/Notification';
	export { default as Popover } from 'layout/Popover';
	export { default as Tree } from 'layout/Tree';
	export { default as Viewport } from 'layout/Viewport';
	/**
	 * Utils
	 */
	export { default as dialog } from 'misc/utils/dialog';
	export { default as notify } from 'misc/utils/notify';
	/**
	 * Misc
	 */
	export { default as useBrowser } from 'misc/hooks/useBrowser';
	export { useTheme as useTheme } from '@flow-ui/whale';
	export function transformImports(importName: any, matches: any): "@flow-ui/core/content/Divider" | "@flow-ui/core/content/Icon" | "@flow-ui/core/content/Spinner" | "@flow-ui/core/content/Header" | "@flow-ui/core/content/Display" | "@flow-ui/core/content/Paragraph" | "@flow-ui/core/content/Text" | "@flow-ui/core/content/Anchor" | "@flow-ui/core/control/Button" | "@flow-ui/core/control/Checkbox" | "@flow-ui/core/control/DatePicker" | "@flow-ui/core/control/Menu" | "@flow-ui/core/control/Radio" | "@flow-ui/core/control/Range" | "@flow-ui/core/control/Select" | "@flow-ui/core/control/Switch" | "@flow-ui/core/control/TextField" | "@flow-ui/core/data/Meter" | "@flow-ui/core/data/Table" | "@flow-ui/core/layout/Badge" | "@flow-ui/core/layout/Block" | "@flow-ui/core/layout/Drop" | "@flow-ui/core/layout/Flexbox" | "@flow-ui/core/layout/Grid" | "@flow-ui/core/layout/Modal" | "@flow-ui/core/layout/Notification" | "@flow-ui/core/layout/Popover" | "@flow-ui/core/layout/Tree" | "@flow-ui/core/layout/Viewport" | "@flow-ui/core/misc/utils/dialog" | "@flow-ui/core/misc/utils/notify" | "@flow-ui/core/misc/hooks/useBrowser" | "/";

}
declare module 'misc/hooks/useSharedObject' {
	 const useMemoEffect: <T>(createObject: () => T) => T | null;
	export default useMemoEffect;

}
declare module 'misc/utils/mergeObjects' {
	export default function mergeObjects(target?: Object, source?: Object, modify?: (value: any) => any): Object;

}
declare module 'misc/utils/validate' {
	export interface ValidateObject {
	    error?: string;
	    regex: RegExp;
	    isMatch?: boolean;
	}

}
