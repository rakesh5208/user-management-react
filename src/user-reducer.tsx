
const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                id: action.user.id,
                name: action.user.name,
                description: action.user.description
            }]

        case 'DELETE_USERS':
            const copied = [...state];
            action.users.forEach((user: any) => {
                const findIdx = copied.findIndex((cu: any) => {
                    return user.id === cu.id;
                })
                if (findIdx !== -1) {
                    copied.splice(findIdx, 1)
                }
            })
            return copied;
        default:
            return [...state];

    }
}

export default userReducer;
