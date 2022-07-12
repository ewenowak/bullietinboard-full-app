const initialState = {
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
   
    posts: [
        {
            id: '1',
            title: 'Astrology experts reading',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            publishedDate: new Date('06-08-2022'),
            actualizationDate: new Date('06-10-2022'),
            image: 'https://images.pexels.com/photos/7222056/pexels-photo-7222056.jpeg?auto=compress&cs=tinysrgb&w=1600',
            price: 100,
            location: 'All Poland',
            user : 'user-1',
        },
        {
            id: '2',
            title: 'Cleaning places from bad energy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            publishedDate: new Date('06-14-2022'),
            actualizationDate: new Date('06-18-2022'),
            image: 'https://images.pexels.com/photos/6998253/pexels-photo-6998253.jpeg?auto=compress&cs=tinysrgb&w=1600',
            price: 200,
            location: 'Wroclaw',
            user : 'user-2',

        },
        {
            id: '3',
            title: 'Experts tarot reading',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            publishedDate: new Date('06-20-2022'),
            actualizationDate: new Date('06-22-2022'),
            image: 'https://images.pexels.com/photos/3088369/pexels-photo-3088369.jpeg?auto=compress&cs=tinysrgb&w=1600',
            price: 180,
            location: 'Warszawa',
            author : 'user-3',
        },
        {
            id: '4',
            title: 'Kambo ceremony ',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            publishedDate: new Date('06-24-2022'),
            actualizationDate: new Date('06-26-2022'),
            image: 'https://images.pexels.com/photos/36020/frog-terrarium-amphibians.jpg?auto=compress&cs=tinysrgb&w=1600',
            price: 200,
            location: 'Poznan',
            author : 'user-4',
        },
    ],  
    
};
export default initialState;