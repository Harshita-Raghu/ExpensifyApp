import moment from 'moment'

export default[{
    id:'1',
    description:'Gum',
    note:'',
    amount:89,
    createdAt:moment(0).valueOf()
},{
    id:'2',
    description:'Power bill',
    note:'',
    amount:9030,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Credit card',
    note:'',
    amount:233,
    createdAt:moment(0).add(4,'days').valueOf()
}
]
