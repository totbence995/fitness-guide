import { GenderEnum } from 'src/app/users/interfaces/gender.enum';

const Users = [
    {
        id: '4533asfst34g',
        name: 'Bence',
        weight: 75,
        height: 181,
        bodyFatPercentage: 15,
        muscleRate: 47,
        age: 24,
        gender: GenderEnum.MALE,
    },
    {
        id: '4533t34sdfg',
        name: 'Bálint',
        weight: 85,
        height: 189,
        bodyFatPercentage: 16,
        muscleRate: 47,
        age: 22,
        gender: GenderEnum.MALE,
    },
    {
        id: '4533t3dsf4g',
        name: 'Gabi',
        weight: 55,
        height: 167,
        bodyFatPercentage: 21,
        muscleRate: 35,
        age: 23,
        gender: GenderEnum.FEMALE,
    }
];

export default Users;