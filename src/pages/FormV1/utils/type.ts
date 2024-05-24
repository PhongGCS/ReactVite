export type ContextType = {
    dataSource: {
        message: string;
        users: User[];
    },
    selected: {
        name: string;
        location: string;
    },
    actions: {
        onChangeName: (name: string) => void;
        onChangeLocation: (location: string) => void;
        onSubmit: () => void;
    }
}
export type User = {
    name: string,
    old: number
}

export type SelectType = ContextType['selected'];