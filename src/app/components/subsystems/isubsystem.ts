export interface MasterComponentWrapper {
    name: string;
    clazz: string;
}

export interface MasterComponent {
    MasterComponentWrapper: MasterComponentWrapper;
}

export interface SubsystemWrapper {
    name: string;
    clazz: string;
    components: any[];
    masterComponent: MasterComponent;
}


