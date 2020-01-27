declare module 'content/Divider/types' {
	import Shared from '@flow-ui/whale/types'; namespace DividerTypes {
	    interface Props extends Shared.AllProps {
	        vertical?: boolean;
	        dash?: number;
	        gap?: number;
	        color?: Shared.ColorProp;
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
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'content/Divider/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
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
declare module 'content/Spinner/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace SpinnerTypes {
	    interface Props extends Shared.AllProps {
	        color?: Shared.ColorProp;
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
declare module 'control/Button/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace ButtonTypes {
	    interface Props extends Shared.AllProps {
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
	        size?: Shared.Size;
	        decoration?: 'filled' | 'outline' | 'text' | 'plain';
	        shape?: 'square' | 'rounded' | 'round';
	        uppercase?: boolean;
	        color?: Shared.ColorProp;
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
declare module 'misc/hocs/Check/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace CheckTypes {
	    type CheckType = 'checkbox' | 'radio' | 'switch';
	    interface Props extends Shared.AllProps {
	        label?: string;
	        labelColor?: Shared.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        onChange?: (checked: boolean) => void;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: Shared.Size;
	    }
	    interface PrivateProps extends Props {
	        children: (checked: boolean, focus: boolean) => React.ReactElement;
	        type?: CheckType;
	        styles: Shared.FlowStyles<Overrides>;
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
declare module 'misc/hocs/Field/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace FieldTypes {
	    interface Props extends Shared.AllProps {
	        label?: React.ReactNode;
	        hint?: React.ReactNode;
	        size?: Shared.Size;
	        decoration?: 'none' | 'filled' | 'underline' | 'outline';
	        color?: Shared.ColorProp;
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
	        styles: Shared.FlowStyles<Overrides>;
	        state?: Object;
	        labelName?: string;
	        attributes?: Object;
	        children?: React.ReactNode;
	    }
	}
	export default FieldTypes;

}
declare module 'control/DatePicker/types' {
	import { Moment } from 'moment';
	import FieldTypes from 'misc/hocs/Field/types'; namespace DatePickerTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends FieldTypes.Props, InputProps {
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
declare module 'control/Menu/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace MenuTypes {
	    type Value = string | number;
	    interface Props extends Shared.AllProps {
	        defaultValue?: Value;
	        value?: Value;
	        onChange?: (value: Value) => void;
	        items: Item[];
	        size?: Shared.Size;
	        decoration?: 'filled' | 'outline' | 'color' | 'underline' | 'tab' | 'filled-underline';
	        flip?: boolean;
	        distance?: string;
	        direction?: 'row' | 'column';
	        shape?: 'square' | 'rounded' | 'round';
	        border?: 'none' | 'narrow' | 'wide';
	        align?: 'start' | 'center' | 'end';
	        separator?: React.ReactElement;
	        color?: Shared.ColorProp;
	        disabled?: boolean;
	    }
	    interface Item extends Partial<Shared.EventProps>, Partial<Props> {
	        content: React.ReactNode;
	        value: Value;
	        disabled?: boolean;
	    }
	    interface ItemProps extends Item {
	        active: boolean;
	        styles: Shared.FlowStyles<Overrides>;
	        onEnter: () => void;
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
declare module 'control/Range/types' {
	import Shared from '@flow-ui/whale/types'; namespace RangeTypes {
	    interface Props extends Shared.AllProps {
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
declare module 'control/Select/types' {
	import FieldTypes from 'misc/hocs/Field/types';
	import Shared from '@flow-ui/whale/types'; namespace SelectTypes {
	    interface Option {
	        text: string;
	        value: any;
	    }
	    interface Props extends FieldTypes.Props {
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
	        styles: Shared.FlowStyles<Overrides>;
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
declare module 'data/Meter/types' {
	import Shared from '@flow-ui/whale/types'; namespace MeterTypes {
	    type MeterType = 'line' | 'circle';
	    type MeterDecoration = 'filled' | 'outline';
	    type MeterShape = 'square' | 'round';
	    interface Props extends Shared.AllProps {
	        percent: number;
	        size?: Shared.Size;
	        /**
	         * @default line
	         */
	        type?: MeterType;
	        decoration?: MeterDecoration;
	        shape?: MeterShape;
	        color?: Shared.ColorProp;
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: boolean;
	    }
	    interface Overrides {
	        container: {
	            shape: MeterShape;
	            size: Shared.Size;
	            decoration: MeterDecoration;
	        };
	        thumb: {
	            shape: MeterShape;
	            size: Shared.Size;
	        };
	    }
	}
	export default MeterTypes;

}
declare module 'data/Table/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace TableTypes {
	    interface TableColumn {
	        title?: string;
	        dataIndex: string;
	        width?: number;
	        render?: (row: any, value: any) => void;
	    }
	    interface TableActions {
	        label: string;
	        className?: string;
	        onAction: (row: any) => void;
	    }
	    interface TableForm {
	        key?: string | number;
	        defaultData?: {
	            [key: string]: any;
	        };
	        render: any;
	        dismiss?: () => void;
	    }
	    interface Props extends Shared.AllProps {
	        data: Object[];
	        columns: TableColumn[];
	        form?: TableForm;
	        actions?: TableActions[];
	        border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
	        indexKey?: string;
	        scope?: any;
	        pagination?: TablePagination;
	        noDataLabel?: string;
	        children?: React.ReactElement;
	        onRowClick?: (row: any) => void;
	        search?: boolean;
	        onSearch?: (value: any) => void;
	        hideHeaders?: boolean;
	        className?: string;
	    }
	    interface RowProps {
	        row: any;
	        columns: TableColumn[];
	        isSelected?: boolean;
	        isExpanding?: boolean;
	        isBlur?: boolean;
	        actions?: any;
	        border?: any;
	        scope?: any;
	        form?: any;
	        style?: any;
	        children?: any;
	        onRowClick?: (row: any) => void;
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface ColumnProps {
	        row: any;
	        columns: TableColumn[];
	        scope?: any;
	        children?: any;
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface ActionsProps {
	        actions: any[];
	        data: any;
	        children?: any;
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface FormProps {
	        data: any;
	        styles: any;
	        dismiss?: () => void;
	        columns: TableColumn[];
	        Form: any;
	        children?: any;
	    }
	    interface InjectForm {
	        data: {
	            [key: string]: any;
	        };
	        columns: TableColumn[];
	        setData: (key: string, value: any) => void;
	        dismiss?: () => void;
	    }
	    interface TablePagination {
	        pageSize: number;
	        pageTotalSize?: number;
	        async?: (page: number) => boolean;
	    }
	    interface PaginationProps {
	        pagination: TablePagination;
	        page: number;
	        searchActive: boolean;
	        search?: boolean;
	        data: {
	            [key: string]: any;
	        }[];
	        onChange: (page: number, searchBar: boolean) => void;
	        children?: any;
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface Overrides {
	        container: void;
	        content: void;
	        headRow: void;
	        headColumn: void;
	        search: void;
	        body: void;
	        pagination: void;
	        paginationButton: {
	            active: boolean;
	        };
	        row: {
	            edited: boolean;
	            withActions: boolean;
	        };
	        subrow: void;
	        column: void;
	        more: void;
	        actions: void;
	        actionButtons: void;
	        actionButtonsEdit: void;
	    }
	}
	export default TableTypes;

}
declare module 'layout/Badge/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace BadgeTypes {
	    interface Props extends Shared.AllProps {
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
declare module 'layout/Block/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace BlockTypes {
	    interface Props extends Shared.AllProps {
	        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';
	        surface?: 'major' | 'medium' | 'minor';
	        hoverSurface?: 'major' | 'medium' | 'minor';
	        children?: React.ReactNode;
	        background?: Shared.ColorProp;
	        color?: Shared.ColorProp;
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
declare module 'layout/Drop/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace DropTypes {
	    interface TargetCoordinates {
	        top: number;
	        bottom: number;
	        left: number;
	        right: number;
	    }
	    interface Props extends Shared.SelfProps, Shared.AttributeProps, Shared.EventProps {
	        target: any;
	        align?: 'top' | 'bottom' | 'left' | 'right';
	        justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside';
	        stretchWidth?: boolean;
	        stretchHeight?: boolean;
	        distance?: number;
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
declare module 'layout/Flexbox/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace FlexboxTypes {
	    interface Props extends Shared.AllProps {
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
declare module 'layout/Grid/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace GridTypes {
	    interface Props extends Shared.AllProps {
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
declare module '@flow-ui/core/layout/Modal/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace ModalTypes {
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
	    interface Props extends Shared.SelfProps {
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
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface ModalWindowProps {
	        title?: string;
	        subtitle?: string;
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        hideHeader?: boolean;
	        children?: any;
	        containerAttr?: React.HTMLAttributes<HTMLElement> & Shared.SelfProps;
	        onClosePressed: () => void;
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface ModalHeaderProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        onClosePressed: () => void;
	        styles: Shared.FlowStyles<Overrides>;
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
declare module 'layout/Popover/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace PopoverTypes {
	    interface Props extends Shared.AllProps {
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'none';
	        background?: Shared.ColorProp;
	        color?: Shared.ColorProp;
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
declare module 'layout/Tree/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types'; namespace TreeTypes {
	    interface Props extends Shared.AllProps {
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
declare module 'misc/themes/types' {
	import { ObjectInterpolation } from '@emotion/core';
	import Shared from '@flow-ui/whale/types';
	import chroma from 'chroma-js';
	/**
	 * Content
	 */
	import DividerTypes from 'content/Divider/types';
	import IconTypes from 'content/Icon/types';
	import SpinnerTypes from 'content/Spinner/types';
	/**
	 * Control
	 */
	import ButtonTypes from 'control/Button/types';
	import CheckboxTypes from 'control/Checkbox/types';
	import DatePickerTypes from 'control/DatePicker/types';
	import MenuTypes from 'control/Menu/types';
	import RadioTypes from 'control/Radio/types';
	import RangeTypes from 'control/Range/types';
	import SelectTypes from 'control/Select/types';
	import SwitchTypes from 'control/Switch/types';
	import TextFieldTypes from 'control/TextField/types';
	/**
	 * Data
	 */
	import MeterTypes from 'data/Meter/types';
	import TableTypes from 'data/Table/types';
	/**
	 * Layout
	 */
	import BadgeTypes from 'layout/Badge/types';
	import BlockTypes from 'layout/Block/types';
	import DropTypes from 'layout/Drop/types';
	import FlexboxTypes from 'layout/Flexbox/types';
	import GridTypes from 'layout/Grid/types';
	import ModalTypes from '@flow-ui/core/layout/Modal/types';
	import NotificationTypes from 'layout/Notification/types';
	import PopoverTypes from 'layout/Popover/types';
	import TreeTypes from 'layout/Tree/types'; namespace ThemeTypes {
	    type SourceColor = [number, number, number, number?];
	    interface Index extends Variables<chroma.Color> {
	        assets: Assets;
	        overrides: Overrides;
	        replace: Replace;
	    }
	    interface SourceTheme {
	        main: Variables<SourceColor>;
	        assets: (theme: ThemeTypes.Index) => ThemeTypes.Assets;
	        overrides: Overrides;
	    }
	    type Replace = (theme: ReplaceTheme) => Index;
	    interface ReplaceTheme {
	        main: DeepPartial<Variables<SourceColor>>;
	        assets?: (theme: ThemeTypes.Index) => DeepPartial<ThemeTypes.Assets>;
	        overrides?: Overrides;
	    }
	    interface Variables<T = SourceColor> {
	        name: string;
	        color: Colors<T>;
	        radius: Radius;
	        distance: Distance;
	        typography: Typography;
	    }
	    interface Assets {
	        global?: ObjectInterpolation<undefined>;
	        border: {
	            width: string;
	            style: string;
	            color: string;
	        };
	        shadow: {
	            default: string;
	            short: string;
	            long: string;
	        };
	        focus: ObjectInterpolation<undefined>;
	        fieldHeight: {
	            xsmall: string;
	            small: string;
	            medium: string;
	            large: string;
	            xlarge: string;
	        };
	    }
	    interface Overrides {
	        Divider?: Shared.OverridesStyle<DividerTypes.Overrides>;
	        Icon?: Shared.OverridesStyle<IconTypes.Overrides>;
	        Spinner?: Shared.OverridesStyle<SpinnerTypes.Overrides>;
	        Button?: Shared.OverridesStyle<ButtonTypes.Overrides>;
	        Checkbox?: Shared.OverridesStyle<CheckboxTypes.Overrides>;
	        DatePicker?: Shared.OverridesStyle<DatePickerTypes.Overrides>;
	        Menu?: Shared.OverridesStyle<MenuTypes.Overrides>;
	        Radio?: Shared.OverridesStyle<RadioTypes.Overrides>;
	        Range?: Shared.OverridesStyle<RangeTypes.Overrides>;
	        Select?: Shared.OverridesStyle<SelectTypes.Overrides>;
	        Switch?: Shared.OverridesStyle<SwitchTypes.Overrides>;
	        TextField?: Shared.OverridesStyle<TextFieldTypes.Overrides>;
	        Meter?: Shared.OverridesStyle<MeterTypes.Overrides>;
	        Table?: Shared.OverridesStyle<TableTypes.Overrides>;
	        Badge?: Shared.OverridesStyle<BadgeTypes.Overrides>;
	        Block?: Shared.OverridesStyle<BlockTypes.Overrides>;
	        Drop?: Shared.OverridesStyle<DropTypes.Overrides>;
	        Flexbox?: Shared.OverridesStyle<FlexboxTypes.Overrides>;
	        Grid?: Shared.OverridesStyle<GridTypes.Overrides>;
	        Modal?: Shared.OverridesStyle<ModalTypes.Overrides>;
	        Notification?: Shared.OverridesStyle<NotificationTypes.Overrides>;
	        Popover?: Shared.OverridesStyle<PopoverTypes.Overrides>;
	        Tree?: Shared.OverridesStyle<TreeTypes.Overrides>;
	    }
	    type Colors<T> = {
	        background: T;
	        backgroundVariant: T;
	        surface: T;
	        surfaceVariant: T;
	        primary: T;
	        secondary: T;
	        onBackground: T;
	        onSurface: T;
	        onPrimary: T;
	        onSecondary: T;
	        lightest: T;
	        light: T;
	        hard: T;
	        hardest: T;
	        accent: {
	            red: T;
	            green: T;
	            blue: T;
	            orange: T;
	        };
	    };
	    type Radius = {
	        default: string;
	        narrow: string;
	        wide: string;
	    };
	    interface Distance {
	        xsmall: string;
	        small: string;
	        medium: string;
	        large: string;
	        xlarge: string;
	    }
	    interface Typography {
	        header: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        text: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        display: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        paragraph: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	    }
	    type DeepPartial<T> = {
	        [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
	    };
	}
	export default ThemeTypes;

}
declare module 'types' {
	/// <reference types="react" />
	import ThemeTypes from 'misc/themes/types';
	import IconsetTypes from 'misc/icons/types';
	import chroma from 'chroma-js';
	import CSS from 'csstype';
	import { Interpolation, SerializedStyles } from '@emotion/core'; module 'csstype' {
	    interface Properties {
	        display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid';
	        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';
	        alignSelf?: 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherid' | 'initial' | 'left' | 'normal' | 'right' | 'safe' | 'safe-end' | 'safe-start' | 'start' | 'stretch' | 'unsafe' | 'unset';
	        justifySelf?: 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherid' | 'initial' | 'left' | 'normal' | 'right' | 'safe' | 'safe-end' | 'safe-start' | 'start' | 'stretch' | 'unsafe' | 'unset';
	    }
	} namespace Shared {
	    type EventProp<T> = (event: T) => void;
	    type FunctionalProp<T, R> = ((lib: T) => R) | R;
	    type ColorProp = FunctionalProp<ThemeTypes.Colors<chroma.Color>, CSS.Properties['color']>;
	    type IconProp = FunctionalProp<IconsetTypes.Index, string>;
	    type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
	    type EmotionStyles = Array<Interpolation>;
	    type Variants<T> = Partial<{
	        [K in keyof T]: Partial<Record<Extract<T[K], string>, EmotionStyles>>;
	    }>;
	    type Variant<V> = (variants: Variants<V>) => EmotionStyles;
	    type FlowStyle<V> = V extends Object ? (state: V) => SerializedStyles : SerializedStyles;
	    type ComponentStyle<V> = V extends {} ? ((variant: Variant<V>) => EmotionStyles) : EmotionStyles;
	    type FlowStyles<S> = {
	        [O in keyof S]: FlowStyle<S[O]>;
	    };
	    type ComponentStyles<S> = {
	        [O in keyof S]: ComponentStyle<S[O]>;
	    };
	    type FunctionalComponentStyles<S, P = {}> = ((props: P, theme: ThemeTypes.Index) => {
	        [O in keyof S]: ComponentStyle<S[O]>;
	    });
	    type OverridesStyle<S> = Partial<{
	        [O in keyof S]: ComponentStyle<S[O]>;
	    }>;
	    /**
	     * Styles inside the component. Paddings, layout, border and color props
	     * @name All
	     * @weight 400
	     */
	    interface AllProps<S = {}> extends AttributeProps, EventProps, SelfProps, FlowProps {
	        overrides?: ComponentStyles<S>;
	    }
	    /**
	     * Styles inside the component. Paddings, layout, border and color props
	     * @name Self
	     * @weight 400
	     */
	    interface SelfProps extends ColorProps, BorderProps, PaddingProps, LayoutProps {
	    }
	    /**
	     * Style outsize the component. Margins, flex, grid
	     * @name Flow
	     * @weight 300
	     */
	    interface FlowProps extends MarginProps, FlexProps, GridProps {
	    }
	    /**
	     * Default attributes
	     * @name Attribute
	     * @weight 200
	     */
	    interface AttributeProps extends React.AriaAttributes {
	        className?: string;
	        id?: string;
	        style?: React.CSSProperties;
	        tabIndex?: number;
	        role?: string;
	        attrs?: Object;
	        draggable?: boolean;
	    }
	    /**
	     * Default events
	     * @name Event
	     * @weight 500
	     */
	    interface EventProps {
	        /**
	         * An element receives a click event when a pointing
	         * device button (such as a mouse's primary mouse button)
	         * is both pressed and released while the pointer is
	         * located inside the element.
	         */
	        onClick?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event fires when an element has received focus.
	         * The main difference between this event and focusin
	         * is that focusin bubbles while focus does not.
	         */
	        onFocus?: EventProp<React.FocusEvent<HTMLElement>>;
	        /**
	         * Event fires when an element has lost focus.
	         * The main difference between this event and
	         * focusout is that focusout bubbles while blur
	         * does not.
	         */
	        onBlur?: EventProp<React.FocusEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a pointing
	         * device button is pressed while the pointer is
	         * inside the element.
	         */
	        onMouseDown?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a button on
	         * a pointing device (such as a mouse or trackpad)
	         * is released while the pointer is located inside it.
	         * mouseup events are the counterpoint to onMouseDown events.
	         */
	        onMouseUp?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a pointing
	         * device (usually a mouse) is initially moved so
	         * that its hotspot is within the element at which
	         * the event was fired.
	         */
	        onMouseEnter?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when the cursor of a
	         * pointing device (usually a mouse) is moved out of it.
	         */
	        onMouseLeave?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired on context menu.
	         */
	        onContextMenu?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired when one or more touch points are
	         * placed on the touch surface.
	         */
	        onTouchStart?: EventProp<React.TouchEvent<HTMLElement>>;
	        /**
	         * Event fires when one or more touch points are
	         * removed from the touch surface.
	         */
	        onTouchEnd?: EventProp<React.TouchEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key that produces a character
	         * value is pressed down. Examples of keys that produce a
	         * character value are alphabetic, numeric, and punctuation keys.
	         * @deprecated This feature is no longer recommended.
	         */
	        onKeyPress?: EventProp<React.KeyboardEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key is pressed.
	         */
	        onKeyDown?: EventProp<React.KeyboardEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key is released.
	         */
	        onKeyUp?: EventProp<React.KeyboardEvent<HTMLElement>>;
	        onDrag?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragEnd?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragEnter?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragExit?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragLeave?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragOver?: EventProp<React.DragEvent<HTMLElement>>;
	        onDragStart?: EventProp<React.DragEvent<HTMLElement>>;
	        onDrop?: EventProp<React.DragEvent<HTMLElement>>;
	    }
	    /**
	     * Color props
	     * @name Color
	     * @weight 400
	     */
	    interface ColorProps {
	        textColor?: ColorProp;
	        backgroundColor?: ColorProp;
	    }
	    /**
	     * Border props
	     * @name Border
	     * @weight 400
	     */
	    interface BorderProps {
	        borderWidth?: CSS.Properties['borderWidth'];
	        borderStyle?: CSS.Properties['borderStyle'];
	        borderColor?: ColorProp;
	        borderRadius?: CSS.Properties['borderRadius'];
	    }
	    /**
	     * Layout props
	     * @name Layout
	     * @weight 400
	     */
	    interface LayoutProps {
	        /**
	         * Width alias
	         */
	        w?: CSS.Properties['width'];
	        /**
	         * Heigth alias
	         */
	        h?: CSS.Properties['height'];
	        /**
	         * Shows or hides an element without changing the layout
	         * of a document.
	         */
	        visibility?: CSS.Properties['visibility'];
	        /**
	         * Sets whether an element is treated as a block or
	         * inline element and the layout used for its children,
	         * such as flow layout, grid or flex.
	         */
	        display?: CSS.Properties['display'];
	        /**
	         * Enables transition animation
	         */
	        animated?: boolean;
	    }
	    /**
	     * Padding props
	     * @name Padding
	     * @weight 400
	     */
	    interface PaddingProps {
	        /**
	         * Padding alias
	         */
	        p?: CSS.Properties['padding'];
	        /**
	         * Padding horizontal alias
	         */
	        px?: CSS.Properties['padding'];
	        /**
	         * Padding vertical alias
	         */
	        py?: CSS.Properties['padding'];
	        /**
	         * PaddingRight alias
	         */
	        pr?: CSS.Properties['paddingRight'];
	        /**
	         * PaddingLeft alias
	         */
	        pl?: CSS.Properties['paddingLeft'];
	        /**
	         * PaddingTop alias
	         */
	        pt?: CSS.Properties['paddingTop'];
	        /**
	         * PaddingBottom alias
	         */
	        pb?: CSS.Properties['paddingBottom'];
	    }
	    /**
	     * Grid children props
	     * @name Margin
	     * @weight 400
	     */
	    interface MarginProps {
	        /**
	         * Margin alias
	         */
	        m?: CSS.Properties['margin'];
	        /**
	         * Margin horizontal alias
	         */
	        mx?: CSS.Properties['margin'];
	        /**
	         * Margin vertical alias
	         */
	        my?: CSS.Properties['margin'];
	        /**
	         * MarginRight alias
	         */
	        mr?: CSS.Properties['marginRight'];
	        /**
	         * MarginLeft alias
	         */
	        ml?: CSS.Properties['marginLeft'];
	        /**
	         * MarginTop alias
	         */
	        mt?: CSS.Properties['marginTop'];
	        /**
	         * MarginBottom alias
	         */
	        mb?: CSS.Properties['marginBottom'];
	    }
	    /**
	     * Flexbox children props
	     * @name Flex
	     * @weight 400
	     */
	    interface FlexProps {
	        /**
	         * Sets how a flex item will grow or shrink to fit the
	         * space available in its flex container.
	         */
	        flex?: CSS.Properties['flex'];
	        /**
	         * Sets the initial main size of a flex item. It sets the
	         * size of the content box unless otherwise set with box-sizing.
	         */
	        flexBasis?: CSS.Properties['flexBasis'];
	        /**
	         * Sets the flex grow factor of a flex item main size.
	         * It specifies how much of the remaining space in the
	         * flex container should be assigned to the item
	         * (the flex grow factor).
	         */
	        flexGrow?: CSS.Properties['flexGrow'];
	        /**
	         * Sets the flex shrink factor of a flex item.
	         * If the size of all flex items is larger than
	         * the flex container, items shrink to fit
	         * according to flex-shrink.
	         */
	        flexShrink?: CSS.Properties['flexShrink'];
	        /**
	         * Property overrides a grid or flex item's
	         * align-items value. In Grid, it aligns the
	         * item inside the grid area. In Flexbox,
	         * it aligns the item on the cross axis.
	         */
	        alignSelf?: CSS.Properties['alignSelf'];
	        /**
	         * Sets the way a box is justified inside its
	         * alignment container along the appropriate axis.
	         */
	        justifySelf?: CSS.Properties['justifySelf'];
	    }
	    /**
	     * Grid children props
	     * @name Grid
	     * @weight 400
	     */
	    interface GridProps {
	        /**
	         * Specifies a grid item’s start position within
	         * the grid column by contributing a line, a span,
	         * or nothing (automatic) to its grid placement.
	         * This start position defines the block-start edge
	         * of the grid area.
	         */
	        gridColumnStart?: CSS.Properties['gridColumnStart'];
	        /**
	         * Specifies a grid item’s end position within the
	         * grid column by contributing a line, a span, or
	         * nothing (automatic) to its grid placement, thereby
	         * specifying the block-end edge of its grid area.
	         */
	        gridColumnEnd?: CSS.Properties['gridColumnEnd'];
	        /**
	         * Specifies a grid item’s start position within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start edge of its grid area.
	         */
	        gridRowStart?: CSS.Properties['gridRowStart'];
	        /**
	         * Specifies a grid item’s end position within the grid
	         * row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby
	         * specifying the inline-end edge of its grid area.
	         */
	        gridRowEnd?: CSS.Properties['gridRowEnd'];
	        /**
	         * Shorthand property for grid-column-start and
	         * grid-column-end specifying a grid item's size
	         * and location within the grid column by contributing
	         * a line, a span, or nothing (automatic) to its grid
	         * placement, thereby specifying the inline-start and
	         * inline-end edge of its grid area.
	         */
	        gridColumn?: CSS.Properties['gridColumn'];
	        /**
	         * Shorthand property for grid-row-start and grid-row-end
	         * specifying a grid item’s size and location within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start and inline-end edge of its grid area.
	         */
	        gridRow?: CSS.Properties['gridRow'];
	        /**
	         * Shorthand property for grid-row-start, grid-column-start,
	         * grid-row-end and grid-column-end, specifying a grid item’s
	         * size and location within the grid by contributing a line, a
	         * span, or nothing (automatic) to its grid placement, thereby
	         * specifying the edges of its grid area.
	         */
	        gridArea?: CSS.Properties['gridArea'];
	        /**
	         * Shorthand property sets both the align-self and justify-self
	         * properties. The first value is the align-self property value,
	         * the second the justify-self one. If the second value is not
	         * present, the first value is also used for it.
	         */
	        placeSelf?: CSS.Properties['placeSelf'];
	    }
	}
	export default Shared;

}
declare module 'content/Icon/types' {
	import Shared from '@flow-ui/whale/types';
	import DeprecatedShared from 'types';
	import CSS from 'csstype'; namespace IconTypes {
	    /**
	     * TODO: circle и oval добавляют только padding
	     * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	     */
	    type Shapes = 'circle' | 'oval' | 'square';
	    interface Props extends Shared.AllProps {
	        type: DeprecatedShared.IconProp;
	        shape?: Shapes;
	        size?: CSS.Properties['fontSize'];
	        color?: Shared.ColorProp;
	        background?: Shared.ColorProp;
	    }
	    interface Overrides {
	        container: void;
	        icon: void;
	    }
	}
	export default IconTypes;

}
declare module 'content/Icon/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'content/Icon/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'content/Icon' {
	import React from 'react';
	import Types from 'content/Icon/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Spinner/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'content/Spinner/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'content/Spinner' {
	import React from 'react';
	import Types from 'content/Spinner/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Typography/types' {
	/// <reference types="react" />
	import Shared from '@flow-ui/whale/types';
	import CSS from 'csstype';
	import ThemeTypes from 'misc/themes/types'; namespace TypographyTypes {
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
	    interface Props extends Shared.AllProps {
	        ellipsis?: boolean;
	        decoration?: CSS.Properties['textDecoration'];
	        children?: React.ReactNode;
	        color?: Shared.ColorProp;
	        background?: Shared.ColorProp;
	        align?: CSS.Properties['textAlign'];
	        weight?: CSS.Properties['fontWeight'];
	        size?: CSS.Properties['fontSize'] | number;
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
	        sizesOf: keyof ThemeTypes.Typography;
	        specificStyles?: any;
	    }
	}
	export default TypographyTypes;

}
declare module 'misc/hocs/Typography/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Typography/types'; const styles: StyleObject<Types.Overrides, Types.PrivateProps>;
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
declare module 'control/Button/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'control/Button/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Button' {
	import React from 'react';
	import Types from 'control/Button/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLButtonElement>>;
	export default _default;

}
declare module 'layout/Flexbox/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Flexbox/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Flexbox' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Flexbox/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Grid/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Grid/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Grid' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Grid/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Calendar/types' {
	import Shared from '@flow-ui/whale/types';
	import { Moment } from 'moment';
	import { CSSProperties } from 'react'; namespace CalendarTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends Shared.AllProps {
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
	        styles: Shared.FlowStyles<Overrides>;
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
	        styles: Shared.FlowStyles<Overrides>;
	    }
	    interface DateGridTitleProps {
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        gridType: GridType;
	        onNext: () => void;
	        onPrevious: () => void;
	        onGridTypeChange: (type: GridType) => void;
	        styles: Shared.FlowStyles<Overrides>;
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
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'control/Calendar/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Calendar' {
	import React from 'react';
	import Types from 'control/Calendar/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Block/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Block/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Block' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Block/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Check' {
	import React from 'react';
	import CheckTypes from 'misc/hocs/Check/types'; const _default: React.ForwardRefExoticComponent<CheckTypes.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Check/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Check/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox/styles' {
	import Types from 'control/Checkbox/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox' {
	import React from 'react';
	import Types from 'control/Checkbox/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Drop/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Drop/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Drop' {
	import React from 'react';
	import Types from 'layout/Drop/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Popover/styles' {
	import Types from 'layout/Popover/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
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
	import Shared from '@flow-ui/whale/types';
	import { InjectedStyleProps } from '@flow-ui/whale/utils/styleProps';
	import ThemeTypes from 'misc/themes/types';
	import Types from 'misc/hocs/Field/types'; const fieldStyles: <T extends Types.Overrides<{}>>(props: Types.Props, theme: ThemeTypes.Index, styleProps: InjectedStyleProps, params?: {
	    manyLines?: boolean | undefined;
	    additionalPadding?: string | undefined;
	    labelOverlayPosition?: "top" | "center" | undefined;
	    overrides?: Partial<Shared.ComponentStyles<T>> | undefined;
	}) => Shared.ComponentStyles<Types.Overrides<{}>>;
	export default fieldStyles;

}
declare module 'control/DatePicker/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'control/DatePicker/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/DatePicker' {
	import React from 'react';
	import Types from 'control/DatePicker/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/Item' {
	import { RefForwardingComponent } from 'react';
	import Types from 'control/Menu/types'; const Item: RefForwardingComponent<HTMLDivElement, Types.ItemProps>;
	export default Item;

}
declare module 'control/Menu/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'control/Menu/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Menu' {
	import React from 'react';
	import Types from 'control/Menu/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Radio/styles' {
	import Types from 'control/Radio/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Radio' {
	import React from 'react';
	import Types from 'control/Radio/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Range/styles' {
	import Types from 'control/Range/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Range' {
	import React from 'react';
	import Types from 'control/Range/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

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
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Select' {
	import React from 'react';
	import Types from 'control/Select/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Switch/styles' {
	import Types from 'control/Switch/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Switch' {
	import React from 'react';
	import Types from 'control/Switch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/TextField/styles' {
	import Types from 'control/TextField/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/TextField' {
	import React from 'react';
	import Types from 'control/TextField/types'; type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<RefTypes>>;
	export default _default;

}
declare module 'data/Meter/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'data/Meter/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/Meter' {
	import React from 'react';
	import Types from 'data/Meter/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'data/Table/styles' {
	import Types from 'data/Table/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/Table/TableForm' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types';
	interface TableFormHOCProps {
	    Form: TableTypes.InjectForm;
	    styles: any;
	    dismiss?: () => void;
	    columns: TableTypes.TableColumn[];
	    row?: {
	        [key: string]: any;
	    };
	    defaultData?: {
	        [key: string]: any;
	    };
	} const TableFormHOC: (props: TableFormHOCProps) => JSX.Element;
	export default TableFormHOC;

}
declare module 'data/Table/TablePagination' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TablePagination: (props: TableTypes.PaginationProps) => JSX.Element | null;
	export default TablePagination;

}
declare module 'data/Table/TableColumns' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableColumns: (props: TableTypes.ColumnProps) => JSX.Element;
	export default TableColumns;

}
declare module 'data/Table/TableActions' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableActions: (props: TableTypes.ActionsProps) => JSX.Element;
	export default TableActions;

}
declare module 'data/Table/TableRow' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableRow: (props: TableTypes.RowProps) => JSX.Element;
	export default TableRow;

}
declare module 'data/Table' {
	import React from 'react';
	import Types from 'data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Badge/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Badge/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Badge' {
	import React from 'react';
	import Types from 'layout/Badge/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

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
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from '@flow-ui/core/layout/Modal/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Modal' {
	import React from 'react';
	import Types from '@flow-ui/core/layout/Modal/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Notification/styles' {
	import { StyleObject } from '@flow-ui/whale/types';
	import Types from 'layout/Notification/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Notification' {
	import React from 'react';
	import Types from 'layout/Notification/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Tree/styles' {
	import Types from 'layout/Tree/types';
	import { StyleObject } from '@flow-ui/whale/types'; const styles: StyleObject<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Tree' {
	import React from 'react';
	import Types from 'layout/Tree/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/utils/mergeObjects' {
	export default function mergeObjects(target?: Object, source?: Object, modify?: (value: any) => any): Object;

}
declare module 'misc/utils/createTheme' {
	import ThemeTypes from 'misc/themes/types';
	export type CreateTheme = (theme: ThemeTypes.SourceTheme) => ThemeTypes.Index; const createTheme: CreateTheme;
	export default createTheme;

}
declare module 'misc/themes/light' {
	import Theme from 'misc/themes/types'; const _default: Theme.Index;
	export default _default;

}
declare module 'misc/themes/dark' {
	 const dark: import("./types").default.Index;
	export default dark;

}
declare module 'misc/themes' {
	export { default as light } from 'misc/themes/light';
	export { default as dark } from 'misc/themes/dark';

}
declare module 'layout/Viewport/types' {
	/// <reference types="react" />
	import ThemeType from 'misc/themes/types';
	import Shared from '@flow-ui/whale/types';
	import ThemeTypes from 'misc/themes/types'; namespace ViewportTypes {
	    interface Themes {
	        light: ThemeTypes.Index;
	        dark: ThemeTypes.Index;
	    }
	    interface Props {
	        wrapper?: boolean;
	        className?: string;
	        id?: string;
	        theme?: Shared.FunctionalProp<Themes, ThemeType.Index>;
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
	        theme: ThemeType.Index;
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
declare module 'misc/deprecated' {
	import React from 'react';
	import Types from 'misc/hocs/Typography/types';
	/**
	 * ANCHOR
	 */
	export const A: React.ForwardRefExoticComponent<Types.AnchorProps & React.RefAttributes<HTMLAnchorElement>>;
	/**
	 * CAPTIONS
	 */
	export const C1: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const C2: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const C3: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const C4: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	/**
	 * DISPLAYS
	 */
	export const D1: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const D2: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const D3: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const D4: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	/**
	 * HEADERS
	 */
	export const H1: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const H2: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const H3: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export const H4: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	/**
	 * TEXTS
	 */
	export const T1: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export const T2: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export const T3: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export const T4: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;

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
	/**
	 * Deprecated
	 */
	export { H1, H2, H3, H4, D1, D2, D3, D4, T1, T2, T3, T4, C1, C2, C3, C4, A } from 'misc/deprecated';
	export function transformImports(importName: any, matches: any): "@flow-ui/core/content/Divider" | "@flow-ui/core/content/Icon" | "@flow-ui/core/content/Spinner" | "@flow-ui/core/content/Header" | "@flow-ui/core/content/Display" | "@flow-ui/core/content/Paragraph" | "@flow-ui/core/content/Text" | "@flow-ui/core/content/Anchor" | "@flow-ui/core/control/Button" | "@flow-ui/core/control/Checkbox" | "@flow-ui/core/control/DatePicker" | "@flow-ui/core/control/Menu" | "@flow-ui/core/control/Radio" | "@flow-ui/core/control/Range" | "@flow-ui/core/control/Select" | "@flow-ui/core/control/Switch" | "@flow-ui/core/control/TextField" | "@flow-ui/core/data/Meter" | "@flow-ui/core/data/Table" | "@flow-ui/core/layout/Badge" | "@flow-ui/core/layout/Block" | "@flow-ui/core/layout/Drop" | "@flow-ui/core/layout/Flexbox" | "@flow-ui/core/layout/Grid" | "@flow-ui/core/layout/Modal" | "@flow-ui/core/layout/Notification" | "@flow-ui/core/layout/Popover" | "@flow-ui/core/layout/Tree" | "@flow-ui/core/layout/Viewport" | "@flow-ui/core/misc/utils/dialog" | "@flow-ui/core/misc/utils/notify" | "@flow-ui/core/misc/hooks/useBrowser" | "/";

}
declare module 'misc/hooks/useSharedObject' {
	 const useMemoEffect: <T>(createObject: () => T) => T | null;
	export default useMemoEffect;

}
declare module 'misc/utils/validate' {
	export interface ValidateObject {
	    error?: string;
	    regex: RegExp;
	    isMatch?: boolean;
	}

}
