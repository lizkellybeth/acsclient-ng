export interface ITask {
    name: string;
    complete: boolean;
    id: number;
    startTime: number;
    parameters: string;
    exception: string;
    hasResult: boolean;
}

