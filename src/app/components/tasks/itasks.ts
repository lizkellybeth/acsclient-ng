export interface TaskWrapper {
    name: string;
    complete: boolean;
    id: number;
    parameters: string;
}

export interface TaskListWrapper {
    tasks: TaskWrapper[];
}
