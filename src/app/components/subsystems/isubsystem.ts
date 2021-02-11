export interface SubsystemWrapper {
    name: string;
    master: ComponentWrapper;
    components: ComponentWrapper[];
}

export interface ComponentWrapper {
    name: string;
    idx: number;
    master: boolean; 
}
