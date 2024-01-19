declare module "Icon/types" {
    import { ColorProp } from '@stage-ui/system/props/color';
    namespace IconTypes {
        /**
         * TODO: circle и oval добавляют только padding
         */
        type IconShapes = 'circle' | 'oval' | 'square';
        type IconType = 'filled' | 'outline';
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            svg: React.ReactElement;
            shape?: IconShapes;
            size?: Stage.Sizes | (string & {
                T?: string;
            });
            color?: ColorProp;
            hoverColor?: ColorProp;
            background?: ColorProp;
            rotate?: number;
        }
        interface IconProps extends Omit<Props, 'svg'> {
            type?: IconType;
        }
        type Classes = {
            container: {
                shape?: IconShapes;
                size: Stage.Sizes | (string & {
                    T?: string;
                });
            };
            icon: void;
        };
    }
    export default IconTypes;
}
declare module "Icon/styles" {
    import Types from "Icon/types";
    const createClsses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClsses;
}
declare module "Icon/index" {
    import React from 'react';
    import Types from "Icon/types";
    type Icons = {
        filled: React.ReactElement;
        outline: React.ReactElement;
    };
    export const createIcon: (props: Types.IconProps | undefined, ref: React.ForwardedRef<HTMLSpanElement>, icons: Icons) => import("@emotion/react/jsx-runtime").JSX.Element;
    export type Props = Types.IconProps;
}
declare module "lib/Sync" {
    import React from 'react';
    const _default: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default;
}
declare module "lib/Activity" {
    import React from 'react';
    const _default_1: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_1;
}
declare module "lib/AlertCircle" {
    import React from 'react';
    const _default_2: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_2;
}
declare module "lib/AlertTriangle" {
    import React from 'react';
    const _default_3: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_3;
}
declare module "lib/AllDone" {
    import React from 'react';
    const _default_4: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_4;
}
declare module "lib/Appearance" {
    import React from 'react';
    const _default_5: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_5;
}
declare module "lib/Archive" {
    import React from 'react';
    const _default_6: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_6;
}
declare module "lib/ArrowCircleDown" {
    import React from 'react';
    const _default_7: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_7;
}
declare module "lib/ArrowCircleLeft" {
    import React from 'react';
    const _default_8: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_8;
}
declare module "lib/ArrowCircleRight" {
    import React from 'react';
    const _default_9: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_9;
}
declare module "lib/ArrowCircleUp" {
    import React from 'react';
    const _default_10: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_10;
}
declare module "lib/ArrowDown" {
    import React from 'react';
    const _default_11: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_11;
}
declare module "lib/ArrowIosDown" {
    import React from 'react';
    const _default_12: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_12;
}
declare module "lib/ArrowIosLeft" {
    import React from 'react';
    const _default_13: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_13;
}
declare module "lib/ArrowIosRight" {
    import React from 'react';
    const _default_14: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_14;
}
declare module "lib/ArrowIosUp" {
    import React from 'react';
    const _default_15: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_15;
}
declare module "lib/ArrowLeftDown" {
    import React from 'react';
    const _default_16: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_16;
}
declare module "lib/ArrowLeftUp" {
    import React from 'react';
    const _default_17: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_17;
}
declare module "lib/ArrowLeft" {
    import React from 'react';
    const _default_18: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_18;
}
declare module "lib/ArrowRightDown" {
    import React from 'react';
    const _default_19: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_19;
}
declare module "lib/ArrowRightUp" {
    import React from 'react';
    const _default_20: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_20;
}
declare module "lib/ArrowRight" {
    import React from 'react';
    const _default_21: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_21;
}
declare module "lib/ArrowUp" {
    import React from 'react';
    const _default_22: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_22;
}
declare module "lib/ArrowheadDown" {
    import React from 'react';
    const _default_23: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_23;
}
declare module "lib/ArrowheadLeft" {
    import React from 'react';
    const _default_24: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_24;
}
declare module "lib/ArrowheadRight" {
    import React from 'react';
    const _default_25: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_25;
}
declare module "lib/ArrowheadUp" {
    import React from 'react';
    const _default_26: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_26;
}
declare module "lib/At" {
    import React from 'react';
    const _default_27: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_27;
}
declare module "lib/Attach2" {
    import React from 'react';
    const _default_28: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_28;
}
declare module "lib/Attach" {
    import React from 'react';
    const _default_29: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_29;
}
declare module "lib/Award" {
    import React from 'react';
    const _default_30: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_30;
}
declare module "lib/Backspace" {
    import React from 'react';
    const _default_31: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_31;
}
declare module "lib/BarChart2" {
    import React from 'react';
    const _default_32: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_32;
}
declare module "lib/BarChart" {
    import React from 'react';
    const _default_33: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_33;
}
declare module "lib/Battery" {
    import React from 'react';
    const _default_34: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_34;
}
declare module "lib/BattteryCharging" {
    import React from 'react';
    const _default_35: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_35;
}
declare module "lib/Behance" {
    import React from 'react';
    const _default_36: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_36;
}
declare module "lib/BellOff" {
    import React from 'react';
    const _default_37: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_37;
}
declare module "lib/Bell" {
    import React from 'react';
    const _default_38: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_38;
}
declare module "lib/Bluetooth" {
    import React from 'react';
    const _default_39: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_39;
}
declare module "lib/BookOpen" {
    import React from 'react';
    const _default_40: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_40;
}
declare module "lib/Book" {
    import React from 'react';
    const _default_41: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_41;
}
declare module "lib/Bookmark" {
    import React from 'react';
    const _default_42: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_42;
}
declare module "lib/Briefcase" {
    import React from 'react';
    const _default_43: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_43;
}
declare module "lib/Browser" {
    import React from 'react';
    const _default_44: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_44;
}
declare module "lib/Brush" {
    import React from 'react';
    const _default_45: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_45;
}
declare module "lib/Bulb" {
    import React from 'react';
    const _default_46: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_46;
}
declare module "lib/Calendar" {
    import React from 'react';
    const _default_47: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_47;
}
declare module "lib/Camera" {
    import React from 'react';
    const _default_48: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_48;
}
declare module "lib/Car2" {
    import React from 'react';
    const _default_49: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_49;
}
declare module "lib/Car" {
    import React from 'react';
    const _default_50: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_50;
}
declare module "lib/Cast" {
    import React from 'react';
    const _default_51: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_51;
}
declare module "lib/ChatNew" {
    import React from 'react';
    const _default_52: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_52;
}
declare module "lib/CheckmarkCircle2" {
    import React from 'react';
    const _default_53: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_53;
}
declare module "lib/CheckmarkCircle" {
    import React from 'react';
    const _default_54: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_54;
}
declare module "lib/CheckmarkSquare2" {
    import React from 'react';
    const _default_55: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_55;
}
declare module "lib/CheckmarkSquare" {
    import React from 'react';
    const _default_56: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_56;
}
declare module "lib/Checkmark" {
    import React from 'react';
    const _default_57: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_57;
}
declare module "lib/ChevronDown" {
    import React from 'react';
    const _default_58: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_58;
}
declare module "lib/ChevronLeft" {
    import React from 'react';
    const _default_59: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_59;
}
declare module "lib/ChevronRight" {
    import React from 'react';
    const _default_60: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_60;
}
declare module "lib/ChevronUp" {
    import React from 'react';
    const _default_61: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_61;
}
declare module "lib/Clipboard" {
    import React from 'react';
    const _default_62: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_62;
}
declare module "lib/Clock" {
    import React from 'react';
    const _default_63: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_63;
}
declare module "lib/CloseCircle1" {
    import React from 'react';
    const _default_64: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_64;
}
declare module "lib/CloseCircle" {
    import React from 'react';
    const _default_65: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_65;
}
declare module "lib/Close" {
    import React from 'react';
    const _default_66: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_66;
}
declare module "lib/CloudDownload" {
    import React from 'react';
    const _default_67: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_67;
}
declare module "lib/CloudUpload" {
    import React from 'react';
    const _default_68: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_68;
}
declare module "lib/CodeDownload" {
    import React from 'react';
    const _default_69: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_69;
}
declare module "lib/Code" {
    import React from 'react';
    const _default_70: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_70;
}
declare module "lib/Collapse" {
    import React from 'react';
    const _default_71: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_71;
}
declare module "lib/ColorPalette" {
    import React from 'react';
    const _default_72: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_72;
}
declare module "lib/ColorPicker" {
    import React from 'react';
    const _default_73: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_73;
}
declare module "lib/Compass" {
    import React from 'react';
    const _default_74: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_74;
}
declare module "lib/Copy" {
    import React from 'react';
    const _default_75: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_75;
}
declare module "lib/CornerDownLeft" {
    import React from 'react';
    const _default_76: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_76;
}
declare module "lib/CornerDownRight" {
    import React from 'react';
    const _default_77: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_77;
}
declare module "lib/CornerLeftDown" {
    import React from 'react';
    const _default_78: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_78;
}
declare module "lib/CornerLeftUp" {
    import React from 'react';
    const _default_79: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_79;
}
declare module "lib/CornerRightDown" {
    import React from 'react';
    const _default_80: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_80;
}
declare module "lib/CornerRightUp" {
    import React from 'react';
    const _default_81: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_81;
}
declare module "lib/CornerUpLeft" {
    import React from 'react';
    const _default_82: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_82;
}
declare module "lib/CornerUpRight" {
    import React from 'react';
    const _default_83: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_83;
}
declare module "lib/CreditCard" {
    import React from 'react';
    const _default_84: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_84;
}
declare module "lib/Crop" {
    import React from 'react';
    const _default_85: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_85;
}
declare module "lib/Cube" {
    import React from 'react';
    const _default_86: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_86;
}
declare module "lib/CurrencyEur" {
    import React from 'react';
    const _default_87: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_87;
}
declare module "lib/CurrencyGbp" {
    import React from 'react';
    const _default_88: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_88;
}
declare module "lib/CurrencyRub" {
    import React from 'react';
    const _default_89: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_89;
}
declare module "lib/CurrencyUsd" {
    import React from 'react';
    const _default_90: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_90;
}
declare module "lib/Dislike" {
    import React from 'react';
    const _default_91: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_91;
}
declare module "lib/Done" {
    import React from 'react';
    const _default_92: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_92;
}
declare module "lib/Download" {
    import React from 'react';
    const _default_93: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_93;
}
declare module "lib/DropletOff" {
    import React from 'react';
    const _default_94: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_94;
}
declare module "lib/Droplet" {
    import React from 'react';
    const _default_95: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_95;
}
declare module "lib/Edit2" {
    import React from 'react';
    const _default_96: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_96;
}
declare module "lib/Edit" {
    import React from 'react';
    const _default_97: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_97;
}
declare module "lib/Email" {
    import React from 'react';
    const _default_98: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_98;
}
declare module "lib/Expand" {
    import React from 'react';
    const _default_99: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_99;
}
declare module "lib/ExternalLink" {
    import React from 'react';
    const _default_100: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_100;
}
declare module "lib/EyeOff2" {
    import React from 'react';
    const _default_101: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_101;
}
declare module "lib/EyeOff" {
    import React from 'react';
    const _default_102: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_102;
}
declare module "lib/Eye" {
    import React from 'react';
    const _default_103: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_103;
}
declare module "lib/Facebook" {
    import React from 'react';
    const _default_104: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_104;
}
declare module "lib/FileAdd" {
    import React from 'react';
    const _default_105: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_105;
}
declare module "lib/FileRemove" {
    import React from 'react';
    const _default_106: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_106;
}
declare module "lib/FileText" {
    import React from 'react';
    const _default_107: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_107;
}
declare module "lib/File" {
    import React from 'react';
    const _default_108: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_108;
}
declare module "lib/Film" {
    import React from 'react';
    const _default_109: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_109;
}
declare module "lib/Fire" {
    import React from 'react';
    const _default_110: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_110;
}
declare module "lib/Flag" {
    import React from 'react';
    const _default_111: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_111;
}
declare module "lib/FlashOff" {
    import React from 'react';
    const _default_112: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_112;
}
declare module "lib/Flash" {
    import React from 'react';
    const _default_113: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_113;
}
declare module "lib/Flip2" {
    import React from 'react';
    const _default_114: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_114;
}
declare module "lib/Flip" {
    import React from 'react';
    const _default_115: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_115;
}
declare module "lib/FolderAdd" {
    import React from 'react';
    const _default_116: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_116;
}
declare module "lib/FolderRemove" {
    import React from 'react';
    const _default_117: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_117;
}
declare module "lib/Folder" {
    import React from 'react';
    const _default_118: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_118;
}
declare module "lib/Funnel" {
    import React from 'react';
    const _default_119: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_119;
}
declare module "lib/Gift" {
    import React from 'react';
    const _default_120: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_120;
}
declare module "lib/Github" {
    import React from 'react';
    const _default_121: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_121;
}
declare module "lib/Globe2" {
    import React from 'react';
    const _default_122: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_122;
}
declare module "lib/Globe" {
    import React from 'react';
    const _default_123: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_123;
}
declare module "lib/Google" {
    import React from 'react';
    const _default_124: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_124;
}
declare module "lib/Grid" {
    import React from 'react';
    const _default_125: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_125;
}
declare module "lib/Hand" {
    import React from 'react';
    const _default_126: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_126;
}
declare module "lib/HardDrive" {
    import React from 'react';
    const _default_127: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_127;
}
declare module "lib/Hash" {
    import React from 'react';
    const _default_128: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_128;
}
declare module "lib/Headphones" {
    import React from 'react';
    const _default_129: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_129;
}
declare module "lib/Heart" {
    import React from 'react';
    const _default_130: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_130;
}
declare module "lib/Height" {
    import React from 'react';
    const _default_131: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_131;
}
declare module "lib/History" {
    import React from 'react';
    const _default_132: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_132;
}
declare module "lib/Home" {
    import React from 'react';
    const _default_133: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_133;
}
declare module "lib/Image" {
    import React from 'react';
    const _default_134: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_134;
}
declare module "lib/Inbox" {
    import React from 'react';
    const _default_135: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_135;
}
declare module "lib/Info" {
    import React from 'react';
    const _default_136: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_136;
}
declare module "lib/Keypad" {
    import React from 'react';
    const _default_137: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_137;
}
declare module "lib/Layers" {
    import React from 'react';
    const _default_138: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_138;
}
declare module "lib/Layout" {
    import React from 'react';
    const _default_139: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_139;
}
declare module "lib/Like" {
    import React from 'react';
    const _default_140: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_140;
}
declare module "lib/Link2" {
    import React from 'react';
    const _default_141: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_141;
}
declare module "lib/Link" {
    import React from 'react';
    const _default_142: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_142;
}
declare module "lib/Linkedin" {
    import React from 'react';
    const _default_143: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_143;
}
declare module "lib/ListIn" {
    import React from 'react';
    const _default_144: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_144;
}
declare module "lib/ListOut" {
    import React from 'react';
    const _default_145: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_145;
}
declare module "lib/List" {
    import React from 'react';
    const _default_146: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_146;
}
declare module "lib/Loader" {
    import React from 'react';
    const _default_147: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_147;
}
declare module "lib/Lock" {
    import React from 'react';
    const _default_148: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_148;
}
declare module "lib/LogIn" {
    import React from 'react';
    const _default_149: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_149;
}
declare module "lib/LogOut" {
    import React from 'react';
    const _default_150: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_150;
}
declare module "lib/Map" {
    import React from 'react';
    const _default_151: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_151;
}
declare module "lib/Maximize" {
    import React from 'react';
    const _default_152: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_152;
}
declare module "lib/Menu2" {
    import React from 'react';
    const _default_153: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_153;
}
declare module "lib/MenuArrow" {
    import React from 'react';
    const _default_154: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_154;
}
declare module "lib/Menu" {
    import React from 'react';
    const _default_155: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_155;
}
declare module "lib/MessageCircle" {
    import React from 'react';
    const _default_156: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_156;
}
declare module "lib/MessageSend" {
    import React from 'react';
    const _default_157: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_157;
}
declare module "lib/MessageSquare" {
    import React from 'react';
    const _default_158: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_158;
}
declare module "lib/MicOff" {
    import React from 'react';
    const _default_159: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_159;
}
declare module "lib/Mic" {
    import React from 'react';
    const _default_160: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_160;
}
declare module "lib/Minimize" {
    import React from 'react';
    const _default_161: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_161;
}
declare module "lib/MinusCircle" {
    import React from 'react';
    const _default_162: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_162;
}
declare module "lib/MinusSquare" {
    import React from 'react';
    const _default_163: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_163;
}
declare module "lib/Minus" {
    import React from 'react';
    const _default_164: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_164;
}
declare module "lib/Monitor" {
    import React from 'react';
    const _default_165: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_165;
}
declare module "lib/Moon" {
    import React from 'react';
    const _default_166: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_166;
}
declare module "lib/MoreHorizontal" {
    import React from 'react';
    const _default_167: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_167;
}
declare module "lib/MoreVertical" {
    import React from 'react';
    const _default_168: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_168;
}
declare module "lib/Move" {
    import React from 'react';
    const _default_169: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_169;
}
declare module "lib/Music" {
    import React from 'react';
    const _default_170: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_170;
}
declare module "lib/Navigation2" {
    import React from 'react';
    const _default_171: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_171;
}
declare module "lib/Navigation" {
    import React from 'react';
    const _default_172: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_172;
}
declare module "lib/Npm" {
    import React from 'react';
    const _default_173: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_173;
}
declare module "lib/Options2" {
    import React from 'react';
    const _default_174: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_174;
}
declare module "lib/Options" {
    import React from 'react';
    const _default_175: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_175;
}
declare module "lib/Pantone" {
    import React from 'react';
    const _default_176: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_176;
}
declare module "lib/PaperPlane" {
    import React from 'react';
    const _default_177: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_177;
}
declare module "lib/PauseCircle" {
    import React from 'react';
    const _default_178: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_178;
}
declare module "lib/People" {
    import React from 'react';
    const _default_179: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_179;
}
declare module "lib/Percent" {
    import React from 'react';
    const _default_180: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_180;
}
declare module "lib/PersonAdd" {
    import React from 'react';
    const _default_181: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_181;
}
declare module "lib/PersonDelete" {
    import React from 'react';
    const _default_182: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_182;
}
declare module "lib/PersonDone" {
    import React from 'react';
    const _default_183: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_183;
}
declare module "lib/PersonRemove" {
    import React from 'react';
    const _default_184: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_184;
}
declare module "lib/Person" {
    import React from 'react';
    const _default_185: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_185;
}
declare module "lib/PhoneCall" {
    import React from 'react';
    const _default_186: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_186;
}
declare module "lib/PhoneMissed" {
    import React from 'react';
    const _default_187: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_187;
}
declare module "lib/PhoneOff" {
    import React from 'react';
    const _default_188: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_188;
}
declare module "lib/PhonePeople" {
    import React from 'react';
    const _default_189: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_189;
}
declare module "lib/PhoneTruck" {
    import React from 'react';
    const _default_190: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_190;
}
declare module "lib/Phone" {
    import React from 'react';
    const _default_191: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_191;
}
declare module "lib/PieChart" {
    import React from 'react';
    const _default_192: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_192;
}
declare module "lib/Pin" {
    import React from 'react';
    const _default_193: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_193;
}
declare module "lib/PlayCircle" {
    import React from 'react';
    const _default_194: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_194;
}
declare module "lib/PlusCircle" {
    import React from 'react';
    const _default_195: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_195;
}
declare module "lib/PlusSquare" {
    import React from 'react';
    const _default_196: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_196;
}
declare module "lib/Plus" {
    import React from 'react';
    const _default_197: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_197;
}
declare module "lib/Power" {
    import React from 'react';
    const _default_198: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_198;
}
declare module "lib/Pricetag" {
    import React from 'react';
    const _default_199: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_199;
}
declare module "lib/Printer" {
    import React from 'react';
    const _default_200: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_200;
}
declare module "lib/QuestionMarkCircle" {
    import React from 'react';
    const _default_201: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_201;
}
declare module "lib/QuestionMark" {
    import React from 'react';
    const _default_202: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_202;
}
declare module "lib/RadioButtonOff" {
    import React from 'react';
    const _default_203: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_203;
}
declare module "lib/RadioButtonOn" {
    import React from 'react';
    const _default_204: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_204;
}
declare module "lib/Radio" {
    import React from 'react';
    const _default_205: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_205;
}
declare module "lib/Recording" {
    import React from 'react';
    const _default_206: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_206;
}
declare module "lib/Refresh" {
    import React from 'react';
    const _default_207: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_207;
}
declare module "lib/Repeat" {
    import React from 'react';
    const _default_208: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_208;
}
declare module "lib/Report" {
    import React from 'react';
    const _default_209: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_209;
}
declare module "lib/RewindLeft" {
    import React from 'react';
    const _default_210: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_210;
}
declare module "lib/RewindRight" {
    import React from 'react';
    const _default_211: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_211;
}
declare module "lib/Route" {
    import React from 'react';
    const _default_212: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_212;
}
declare module "lib/Save" {
    import React from 'react';
    const _default_213: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_213;
}
declare module "lib/Scan" {
    import React from 'react';
    const _default_214: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_214;
}
declare module "lib/Scissors" {
    import React from 'react';
    const _default_215: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_215;
}
declare module "lib/Search" {
    import React from 'react';
    const _default_216: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_216;
}
declare module "lib/Settings2" {
    import React from 'react';
    const _default_217: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_217;
}
declare module "lib/Settings" {
    import React from 'react';
    const _default_218: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_218;
}
declare module "lib/Shake" {
    import React from 'react';
    const _default_219: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_219;
}
declare module "lib/Share" {
    import React from 'react';
    const _default_220: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_220;
}
declare module "lib/ShieldOff" {
    import React from 'react';
    const _default_221: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_221;
}
declare module "lib/Shield" {
    import React from 'react';
    const _default_222: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_222;
}
declare module "lib/ShoppingCartPlus" {
    import React from 'react';
    const _default_223: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_223;
}
declare module "lib/ShoppingCart" {
    import React from 'react';
    const _default_224: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_224;
}
declare module "lib/Shuffle2" {
    import React from 'react';
    const _default_225: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_225;
}
declare module "lib/Shuffle" {
    import React from 'react';
    const _default_226: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_226;
}
declare module "lib/SkipBack" {
    import React from 'react';
    const _default_227: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_227;
}
declare module "lib/SkipForward" {
    import React from 'react';
    const _default_228: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_228;
}
declare module "lib/Slash" {
    import React from 'react';
    const _default_229: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_229;
}
declare module "lib/Smartphone" {
    import React from 'react';
    const _default_230: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_230;
}
declare module "lib/Smile" {
    import React from 'react';
    const _default_231: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_231;
}
declare module "lib/Speaker" {
    import React from 'react';
    const _default_232: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_232;
}
declare module "lib/Square" {
    import React from 'react';
    const _default_233: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_233;
}
declare module "lib/Star" {
    import React from 'react';
    const _default_234: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_234;
}
declare module "lib/StopCircle" {
    import React from 'react';
    const _default_235: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_235;
}
declare module "lib/Sun" {
    import React from 'react';
    const _default_236: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_236;
}
declare module "lib/Swap" {
    import React from 'react';
    const _default_237: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_237;
}
declare module "lib/Text" {
    import React from 'react';
    const _default_238: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_238;
}
declare module "lib/ThermometerMinus" {
    import React from 'react';
    const _default_239: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_239;
}
declare module "lib/ThermometerPlus" {
    import React from 'react';
    const _default_240: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_240;
}
declare module "lib/Thermometer" {
    import React from 'react';
    const _default_241: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_241;
}
declare module "lib/Ticket" {
    import React from 'react';
    const _default_242: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_242;
}
declare module "lib/Timer" {
    import React from 'react';
    const _default_243: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_243;
}
declare module "lib/ToggleLeft" {
    import React from 'react';
    const _default_244: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_244;
}
declare module "lib/ToggleRight" {
    import React from 'react';
    const _default_245: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_245;
}
declare module "lib/Trash2" {
    import React from 'react';
    const _default_246: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_246;
}
declare module "lib/Trash3" {
    import React from 'react';
    const _default_247: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_247;
}
declare module "lib/Trash" {
    import React from 'react';
    const _default_248: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_248;
}
declare module "lib/TrendingDown" {
    import React from 'react';
    const _default_249: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_249;
}
declare module "lib/TrendingUp" {
    import React from 'react';
    const _default_250: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_250;
}
declare module "lib/TriangleDown" {
    import React from 'react';
    const _default_251: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_251;
}
declare module "lib/TriangleLeft" {
    import React from 'react';
    const _default_252: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_252;
}
declare module "lib/TriangleRight" {
    import React from 'react';
    const _default_253: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_253;
}
declare module "lib/TriangleUp" {
    import React from 'react';
    const _default_254: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_254;
}
declare module "lib/Tv" {
    import React from 'react';
    const _default_255: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_255;
}
declare module "lib/Twitter" {
    import React from 'react';
    const _default_256: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_256;
}
declare module "lib/Umbrella" {
    import React from 'react';
    const _default_257: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_257;
}
declare module "lib/Undo" {
    import React from 'react';
    const _default_258: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_258;
}
declare module "lib/Unlock" {
    import React from 'react';
    const _default_259: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_259;
}
declare module "lib/Upload" {
    import React from 'react';
    const _default_260: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_260;
}
declare module "lib/VideoOff" {
    import React from 'react';
    const _default_261: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_261;
}
declare module "lib/Video" {
    import React from 'react';
    const _default_262: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_262;
}
declare module "lib/VolumeDown" {
    import React from 'react';
    const _default_263: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_263;
}
declare module "lib/VolumeOff" {
    import React from 'react';
    const _default_264: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_264;
}
declare module "lib/VolumeUp" {
    import React from 'react';
    const _default_265: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_265;
}
declare module "lib/Volume" {
    import React from 'react';
    const _default_266: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_266;
}
declare module "lib/Weight" {
    import React from 'react';
    const _default_267: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_267;
}
declare module "lib/WifiOff" {
    import React from 'react';
    const _default_268: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_268;
}
declare module "lib/Wifi" {
    import React from 'react';
    const _default_269: React.ForwardRefExoticComponent<import("Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
    export default _default_269;
}
declare module "index" {
    /**
    version: 0.7.0
    */
    export { default as Sync } from "lib/Sync";
    export { default as Activity } from "lib/Activity";
    export { default as AlertCircle } from "lib/AlertCircle";
    export { default as AlertTriangle } from "lib/AlertTriangle";
    export { default as AllDone } from "lib/AllDone";
    export { default as Appearance } from "lib/Appearance";
    export { default as Archive } from "lib/Archive";
    export { default as ArrowCircleDown } from "lib/ArrowCircleDown";
    export { default as ArrowCircleLeft } from "lib/ArrowCircleLeft";
    export { default as ArrowCircleRight } from "lib/ArrowCircleRight";
    export { default as ArrowCircleUp } from "lib/ArrowCircleUp";
    export { default as ArrowDown } from "lib/ArrowDown";
    export { default as ArrowIosDown } from "lib/ArrowIosDown";
    export { default as ArrowIosLeft } from "lib/ArrowIosLeft";
    export { default as ArrowIosRight } from "lib/ArrowIosRight";
    export { default as ArrowIosUp } from "lib/ArrowIosUp";
    export { default as ArrowLeftDown } from "lib/ArrowLeftDown";
    export { default as ArrowLeftUp } from "lib/ArrowLeftUp";
    export { default as ArrowLeft } from "lib/ArrowLeft";
    export { default as ArrowRightDown } from "lib/ArrowRightDown";
    export { default as ArrowRightUp } from "lib/ArrowRightUp";
    export { default as ArrowRight } from "lib/ArrowRight";
    export { default as ArrowUp } from "lib/ArrowUp";
    export { default as ArrowheadDown } from "lib/ArrowheadDown";
    export { default as ArrowheadLeft } from "lib/ArrowheadLeft";
    export { default as ArrowheadRight } from "lib/ArrowheadRight";
    export { default as ArrowheadUp } from "lib/ArrowheadUp";
    export { default as At } from "lib/At";
    export { default as Attach2 } from "lib/Attach2";
    export { default as Attach } from "lib/Attach";
    export { default as Award } from "lib/Award";
    export { default as Backspace } from "lib/Backspace";
    export { default as BarChart2 } from "lib/BarChart2";
    export { default as BarChart } from "lib/BarChart";
    export { default as Battery } from "lib/Battery";
    export { default as BattteryCharging } from "lib/BattteryCharging";
    export { default as Behance } from "lib/Behance";
    export { default as BellOff } from "lib/BellOff";
    export { default as Bell } from "lib/Bell";
    export { default as Bluetooth } from "lib/Bluetooth";
    export { default as BookOpen } from "lib/BookOpen";
    export { default as Book } from "lib/Book";
    export { default as Bookmark } from "lib/Bookmark";
    export { default as Briefcase } from "lib/Briefcase";
    export { default as Browser } from "lib/Browser";
    export { default as Brush } from "lib/Brush";
    export { default as Bulb } from "lib/Bulb";
    export { default as Calendar } from "lib/Calendar";
    export { default as Camera } from "lib/Camera";
    export { default as Car2 } from "lib/Car2";
    export { default as Car } from "lib/Car";
    export { default as Cast } from "lib/Cast";
    export { default as ChatNew } from "lib/ChatNew";
    export { default as CheckmarkCircle2 } from "lib/CheckmarkCircle2";
    export { default as CheckmarkCircle } from "lib/CheckmarkCircle";
    export { default as CheckmarkSquare2 } from "lib/CheckmarkSquare2";
    export { default as CheckmarkSquare } from "lib/CheckmarkSquare";
    export { default as Checkmark } from "lib/Checkmark";
    export { default as ChevronDown } from "lib/ChevronDown";
    export { default as ChevronLeft } from "lib/ChevronLeft";
    export { default as ChevronRight } from "lib/ChevronRight";
    export { default as ChevronUp } from "lib/ChevronUp";
    export { default as Clipboard } from "lib/Clipboard";
    export { default as Clock } from "lib/Clock";
    export { default as CloseCircle1 } from "lib/CloseCircle1";
    export { default as CloseCircle } from "lib/CloseCircle";
    export { default as Close } from "lib/Close";
    export { default as CloudDownload } from "lib/CloudDownload";
    export { default as CloudUpload } from "lib/CloudUpload";
    export { default as CodeDownload } from "lib/CodeDownload";
    export { default as Code } from "lib/Code";
    export { default as Collapse } from "lib/Collapse";
    export { default as ColorPalette } from "lib/ColorPalette";
    export { default as ColorPicker } from "lib/ColorPicker";
    export { default as Compass } from "lib/Compass";
    export { default as Copy } from "lib/Copy";
    export { default as CornerDownLeft } from "lib/CornerDownLeft";
    export { default as CornerDownRight } from "lib/CornerDownRight";
    export { default as CornerLeftDown } from "lib/CornerLeftDown";
    export { default as CornerLeftUp } from "lib/CornerLeftUp";
    export { default as CornerRightDown } from "lib/CornerRightDown";
    export { default as CornerRightUp } from "lib/CornerRightUp";
    export { default as CornerUpLeft } from "lib/CornerUpLeft";
    export { default as CornerUpRight } from "lib/CornerUpRight";
    export { default as CreditCard } from "lib/CreditCard";
    export { default as Crop } from "lib/Crop";
    export { default as Cube } from "lib/Cube";
    export { default as CurrencyEur } from "lib/CurrencyEur";
    export { default as CurrencyGbp } from "lib/CurrencyGbp";
    export { default as CurrencyRub } from "lib/CurrencyRub";
    export { default as CurrencyUsd } from "lib/CurrencyUsd";
    export { default as Dislike } from "lib/Dislike";
    export { default as Done } from "lib/Done";
    export { default as Download } from "lib/Download";
    export { default as DropletOff } from "lib/DropletOff";
    export { default as Droplet } from "lib/Droplet";
    export { default as Edit2 } from "lib/Edit2";
    export { default as Edit } from "lib/Edit";
    export { default as Email } from "lib/Email";
    export { default as Expand } from "lib/Expand";
    export { default as ExternalLink } from "lib/ExternalLink";
    export { default as EyeOff2 } from "lib/EyeOff2";
    export { default as EyeOff } from "lib/EyeOff";
    export { default as Eye } from "lib/Eye";
    export { default as Facebook } from "lib/Facebook";
    export { default as FileAdd } from "lib/FileAdd";
    export { default as FileRemove } from "lib/FileRemove";
    export { default as FileText } from "lib/FileText";
    export { default as File } from "lib/File";
    export { default as Film } from "lib/Film";
    export { default as Fire } from "lib/Fire";
    export { default as Flag } from "lib/Flag";
    export { default as FlashOff } from "lib/FlashOff";
    export { default as Flash } from "lib/Flash";
    export { default as Flip2 } from "lib/Flip2";
    export { default as Flip } from "lib/Flip";
    export { default as FolderAdd } from "lib/FolderAdd";
    export { default as FolderRemove } from "lib/FolderRemove";
    export { default as Folder } from "lib/Folder";
    export { default as Funnel } from "lib/Funnel";
    export { default as Gift } from "lib/Gift";
    export { default as Github } from "lib/Github";
    export { default as Globe2 } from "lib/Globe2";
    export { default as Globe } from "lib/Globe";
    export { default as Google } from "lib/Google";
    export { default as Grid } from "lib/Grid";
    export { default as Hand } from "lib/Hand";
    export { default as HardDrive } from "lib/HardDrive";
    export { default as Hash } from "lib/Hash";
    export { default as Headphones } from "lib/Headphones";
    export { default as Heart } from "lib/Heart";
    export { default as Height } from "lib/Height";
    export { default as History } from "lib/History";
    export { default as Home } from "lib/Home";
    export { default as Image } from "lib/Image";
    export { default as Inbox } from "lib/Inbox";
    export { default as Info } from "lib/Info";
    export { default as Keypad } from "lib/Keypad";
    export { default as Layers } from "lib/Layers";
    export { default as Layout } from "lib/Layout";
    export { default as Like } from "lib/Like";
    export { default as Link2 } from "lib/Link2";
    export { default as Link } from "lib/Link";
    export { default as Linkedin } from "lib/Linkedin";
    export { default as ListIn } from "lib/ListIn";
    export { default as ListOut } from "lib/ListOut";
    export { default as List } from "lib/List";
    export { default as Loader } from "lib/Loader";
    export { default as Lock } from "lib/Lock";
    export { default as LogIn } from "lib/LogIn";
    export { default as LogOut } from "lib/LogOut";
    export { default as Map } from "lib/Map";
    export { default as Maximize } from "lib/Maximize";
    export { default as Menu2 } from "lib/Menu2";
    export { default as MenuArrow } from "lib/MenuArrow";
    export { default as Menu } from "lib/Menu";
    export { default as MessageCircle } from "lib/MessageCircle";
    export { default as MessageSend } from "lib/MessageSend";
    export { default as MessageSquare } from "lib/MessageSquare";
    export { default as MicOff } from "lib/MicOff";
    export { default as Mic } from "lib/Mic";
    export { default as Minimize } from "lib/Minimize";
    export { default as MinusCircle } from "lib/MinusCircle";
    export { default as MinusSquare } from "lib/MinusSquare";
    export { default as Minus } from "lib/Minus";
    export { default as Monitor } from "lib/Monitor";
    export { default as Moon } from "lib/Moon";
    export { default as MoreHorizontal } from "lib/MoreHorizontal";
    export { default as MoreVertical } from "lib/MoreVertical";
    export { default as Move } from "lib/Move";
    export { default as Music } from "lib/Music";
    export { default as Navigation2 } from "lib/Navigation2";
    export { default as Navigation } from "lib/Navigation";
    export { default as Npm } from "lib/Npm";
    export { default as Options2 } from "lib/Options2";
    export { default as Options } from "lib/Options";
    export { default as Pantone } from "lib/Pantone";
    export { default as PaperPlane } from "lib/PaperPlane";
    export { default as PauseCircle } from "lib/PauseCircle";
    export { default as People } from "lib/People";
    export { default as Percent } from "lib/Percent";
    export { default as PersonAdd } from "lib/PersonAdd";
    export { default as PersonDelete } from "lib/PersonDelete";
    export { default as PersonDone } from "lib/PersonDone";
    export { default as PersonRemove } from "lib/PersonRemove";
    export { default as Person } from "lib/Person";
    export { default as PhoneCall } from "lib/PhoneCall";
    export { default as PhoneMissed } from "lib/PhoneMissed";
    export { default as PhoneOff } from "lib/PhoneOff";
    export { default as PhonePeople } from "lib/PhonePeople";
    export { default as PhoneTruck } from "lib/PhoneTruck";
    export { default as Phone } from "lib/Phone";
    export { default as PieChart } from "lib/PieChart";
    export { default as Pin } from "lib/Pin";
    export { default as PlayCircle } from "lib/PlayCircle";
    export { default as PlusCircle } from "lib/PlusCircle";
    export { default as PlusSquare } from "lib/PlusSquare";
    export { default as Plus } from "lib/Plus";
    export { default as Power } from "lib/Power";
    export { default as Pricetag } from "lib/Pricetag";
    export { default as Printer } from "lib/Printer";
    export { default as QuestionMarkCircle } from "lib/QuestionMarkCircle";
    export { default as QuestionMark } from "lib/QuestionMark";
    export { default as RadioButtonOff } from "lib/RadioButtonOff";
    export { default as RadioButtonOn } from "lib/RadioButtonOn";
    export { default as Radio } from "lib/Radio";
    export { default as Recording } from "lib/Recording";
    export { default as Refresh } from "lib/Refresh";
    export { default as Repeat } from "lib/Repeat";
    export { default as Report } from "lib/Report";
    export { default as RewindLeft } from "lib/RewindLeft";
    export { default as RewindRight } from "lib/RewindRight";
    export { default as Route } from "lib/Route";
    export { default as Save } from "lib/Save";
    export { default as Scan } from "lib/Scan";
    export { default as Scissors } from "lib/Scissors";
    export { default as Search } from "lib/Search";
    export { default as Settings2 } from "lib/Settings2";
    export { default as Settings } from "lib/Settings";
    export { default as Shake } from "lib/Shake";
    export { default as Share } from "lib/Share";
    export { default as ShieldOff } from "lib/ShieldOff";
    export { default as Shield } from "lib/Shield";
    export { default as ShoppingCartPlus } from "lib/ShoppingCartPlus";
    export { default as ShoppingCart } from "lib/ShoppingCart";
    export { default as Shuffle2 } from "lib/Shuffle2";
    export { default as Shuffle } from "lib/Shuffle";
    export { default as SkipBack } from "lib/SkipBack";
    export { default as SkipForward } from "lib/SkipForward";
    export { default as Slash } from "lib/Slash";
    export { default as Smartphone } from "lib/Smartphone";
    export { default as Smile } from "lib/Smile";
    export { default as Speaker } from "lib/Speaker";
    export { default as Square } from "lib/Square";
    export { default as Star } from "lib/Star";
    export { default as StopCircle } from "lib/StopCircle";
    export { default as Sun } from "lib/Sun";
    export { default as Swap } from "lib/Swap";
    export { default as Text } from "lib/Text";
    export { default as ThermometerMinus } from "lib/ThermometerMinus";
    export { default as ThermometerPlus } from "lib/ThermometerPlus";
    export { default as Thermometer } from "lib/Thermometer";
    export { default as Ticket } from "lib/Ticket";
    export { default as Timer } from "lib/Timer";
    export { default as ToggleLeft } from "lib/ToggleLeft";
    export { default as ToggleRight } from "lib/ToggleRight";
    export { default as Trash2 } from "lib/Trash2";
    export { default as Trash3 } from "lib/Trash3";
    export { default as Trash } from "lib/Trash";
    export { default as TrendingDown } from "lib/TrendingDown";
    export { default as TrendingUp } from "lib/TrendingUp";
    export { default as TriangleDown } from "lib/TriangleDown";
    export { default as TriangleLeft } from "lib/TriangleLeft";
    export { default as TriangleRight } from "lib/TriangleRight";
    export { default as TriangleUp } from "lib/TriangleUp";
    export { default as Tv } from "lib/Tv";
    export { default as Twitter } from "lib/Twitter";
    export { default as Umbrella } from "lib/Umbrella";
    export { default as Undo } from "lib/Undo";
    export { default as Unlock } from "lib/Unlock";
    export { default as Upload } from "lib/Upload";
    export { default as VideoOff } from "lib/VideoOff";
    export { default as Video } from "lib/Video";
    export { default as VolumeDown } from "lib/VolumeDown";
    export { default as VolumeOff } from "lib/VolumeOff";
    export { default as VolumeUp } from "lib/VolumeUp";
    export { default as Volume } from "lib/Volume";
    export { default as Weight } from "lib/Weight";
    export { default as WifiOff } from "lib/WifiOff";
    export { default as Wifi } from "lib/Wifi";
}
