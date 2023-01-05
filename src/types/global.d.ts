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

type BrandingDataType = {
    logo: {
        light: string;
        dark: string;
        title: string;
        height: string;
    };
}

type LandingSettings = {
    branding: {
        background: string;
        logo?: {
            light?: string;
            dark: string;
        };
        main: {
            title: string;
            subtitle: string;
        };
        footer: {
            title: string;
            subtitle: string;
        }
    };
    content: {
        copyright: {
            statement: string;
            terms: string;
        }
    };
};
