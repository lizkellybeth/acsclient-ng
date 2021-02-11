export interface ISubsystem {
    name: string;
    masterComponent: IComponent;
    components: IComponent[];
}

export interface IComponent {
    name: string;
    idx: number;
    master: boolean; 
}
