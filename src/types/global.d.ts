type ContentSettingsDataType = {
    breadcrumb: boolean;
    footer: {
        logo: {
            enabled: boolean;
            dark: string;
            light: string;
        };
        right?: any;
        text?: string;
    };
}

type BradingDataType = {
    logo: {
        light: string;
        dark: string;
        title: string;
        height: string;
    };
}
