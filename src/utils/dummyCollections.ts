import { ICollection } from "../types/Collection";

export const dummyCollections: ICollection[] = [
    {
        id: '1',
        name: 'My bank',
        fields: [
            {
                id: '1',
                name: 'ID',
                value: 'something',
                hidden: false
            },
            {
                id: '2',
                name: 'Password',
                value: 'jcjcdbcdsdcnds',
                hidden: true
            }
        ],
        createdAt: '2022-01-07T19:29:09.700Z',
        updatedAt: '2022-01-07T19:29:09.700Z',
        favorite: true
    },
    {
        id: '2',
        name: 'My Streaming service',
        fields: [
            {
                id: '1',
                name: 'Password',
                value: 'dgcdsjcds',
                hidden: true
            }
        ],
        createdAt: '2022-01-07T13:16:09.700Z',
        updatedAt: '2022-01-07T13:16:09.700Z',
        favorite: false
    },
    {
        id: '3',
        name: 'My Antivirus',
        fields: [
            {
                id: '1',
                name: 'ID',
                value: 'sandyAntiVirus',
                hidden: false
            },
            {
                id: '2',
                name: 'Password',
                value: 'kjkjlkj',
                hidden: true
            }
        ],
        createdAt: '2022-01-06T21:16:09.700Z',
        updatedAt: '2022-01-07T13:19:09.700Z',
        favorite: false
    }
]