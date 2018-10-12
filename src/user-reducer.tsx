
const userReducer = (state:any, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                id: action.user.id,
                name: action.user.name,
                description: action.user.description
            }]

        case 'DELETE_USERS':
            const copied = [...state];
            action.ids.forEach((id:any) => {
                const findIdx = copied.findIndex((user: any) => {
                    return user.id === id;
                })
                if (findIdx !== -1) {
                    copied.splice(findIdx,1)
                }
            });
            return copied;
        default:
            return [...state];

    }
}

export default userReducer;
