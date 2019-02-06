const data = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];

const mostProfitableDepartment = (data) => {
    let department = {};

    data.forEach(element => {
        let mostProDep = element.department;
        let sales = element.sales;

        if(department[mostProDep] == undefined) {
            department[mostProDep] = sales;
        } else {
            department[mostProDep] = department[mostProDep] + sales;
        }
    });
    
    return getHigest(department);
};

const mostProfitableDay = (data) => {
    let day = {};

    data.forEach(x => {
        let sales = x.sales;
        if(day[x.day] == undefined) {
            day[x.day] = sales;
        } else {
            day[x.day] = day[x.day] + sales;
        }
    })

    return getHigest(day);
};


function getHigest(params) {
    let bigVal = 0, profitableDay = "";
    for(key in params) {
        if(params[key] >= bigVal) {
            bigVal = params[key];
            profitableDay = key;
        } else {
            bigVal = bigVal;
        }
    }
    return profitableDay;
}