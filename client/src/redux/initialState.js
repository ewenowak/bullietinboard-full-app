const initialState = {

    posts: [],

      users: [
        {
            id: 'user-1',
            name: 'Ewelina Nowak',
            login: 'ewenowak',
            password: 'Bali2022',
            avatar: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600',
            phone: '634256781',
            email: 'e.nowak@gmail.com',
            role: 'user',
            logged: true,
        },
        {   
            id: 'user-2',
            name: 'Arianna Buss',
            login: 'a.bus01',
            password: 'abus123',
            avatar: 'https://images.pexels.com/photos/6958172/pexels-photo-6958172.jpeg?auto=compress&cs=tinysrgb&w=1600',
            phone: '874236387',
            role: 'user',
            logged: false,
        },
        {   
            id: 'user-3',
            name: 'Maria Czyz',
            login: 'maria_witch',
            password: 'maria1978',
            avatar: 'https://images.pexels.com/photos/39018/cards-jass-cards-card-game-strategy-39018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            phone: '624561892',
            role: 'admin',
            logged: false,
        },
        {   
            id: 'user-4',
            name: 'Maria Czyz',
            login: 'maria_witch',
            password: 'maria1978',
            avatar: 'https://images.pexels.com/photos/39018/cards-jass-cards-card-game-strategy-39018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            phone: '624561892',
            logged: false,
        },
    ],

    
};
export default initialState;