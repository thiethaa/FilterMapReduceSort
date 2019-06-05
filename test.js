const companies = [
    {name: "Company Ross", product: "Jewerly", start: 2005, end: 2017},
    {name: "Company Jasmine", product: "Shoes and bags", start: 2002, end: 2008},
    {name: "Company Casablanca", product: "clothes", start: 1999, end: 2007},
    {name: "Company Tulip", product: "Shoes and bags", start: 1989, end: 2010},
    {name: "Company Lavender", product: "purses", start: 2009, end: 2014},
    {name: "Company Greentea", product: "Jewerly", start: 2000, end: 2016},
    {name: "Company SunFlower", product: "clothes", start: 1996, end: 1999},
    {name: "Company Blossom", product: "purses", start: 2011, end: 2016},
    {name: "Company Orchid", product: "Shoes and bags", start: 1989, end: 2005}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//------FOR LOOP------//
  for(let i=0;i<companies.length;i++){
      console.log(companies [i]);
  }

//------forEach------//
companies.forEach(function(i){
    console.log(i);
});

//------forEach with arrow function 'ecma6'------//
companies.forEach(i => {
    console.log(i.name)
});

companies.forEach(companies=>{
    console.log(companies.name)
});

companies.forEach(companies=>{
    console.log(companies.product)
});

companies.forEach(i=>{
    console.log(i.start)
});

//------filter-----//
const adult= ages.filter(age=>age >= 21);
console.log(adult);

const underage= ages.filter(age=> age <= 14);
console.log(underage);

//------filter companies product-----//

const jewerlycompanies = companies.filter (company => company.product === 'Jewerly');
console.log(jewerlycompanies);

const pursesCompanies = companies.filter ( company => company.product === 'purses');
console.log (pursesCompanies);

//------filter companies start/last 10 year----//
const tenYoCompanies = companies.filter (company => company.start >= 2000 && company.start <= 2010);
console.log(tenYoCompanies);

const less5yearCompany = companies.filter (company => company.end - company.start <= 5);
console.log (less5yearCompany);

//------map-----//
// ------create new array for company name,product and age-----//
const companyName = companies.map (company => {
    return company.name;
});
console.log (companyName);

// --------without return method-------//
const companyProduct = companies.map (company => company.product);
console.log (companyProduct);

const companyAge = companies.map ( company =>(company.end - company.start));
console.log (companyAge);

const companyAgeName = companies.map ( company =>`${company.name} [${company.start} - ${company.end}]`); 
console.log (companyAgeName);

const companyDetail = companies.map (company =>`${company.name} ${(company.end - company.start)} years`);
console.log (companyDetail);

//-------math Map--------//
const ageTimesTwo = ages.map (age => age * 2);
console.log (ageTimesTwo);

const agePlusFive = ages.map (age => age + 5);
console.log (agePlusFive);

const ageSuper = ages
                .map (age => age * 2)
                .map (age => age + 5);
console.log (ageSuper);

//-------Sort--------//
//-------Sort company by start year--------//
const companySort = companies.sort ((a,b) => (a.start > b.start ? 1:-1));
console.log (companySort);
//-------Sort number age from low to high and vise versa--------//
const agesSort = ages.sort ((a,b) => a - b);
console.log (agesSort);

const agesSortBig = ages.sort ((a,b) => b - a);
console.log (agesSortBig);

//-------Reduce--------//
//-------reduce total age all company--------//
const comapanyReduce = companies.reduce ((total , company)=> total + (company.end - company.start),0);
console.log (comapanyReduce);

const ageReduce = ages.reduce((total,age) => total + age,0);
console.log (ageReduce);

//-------Combination Method--------//

const combine = ages
  .map (age => age * 2)
  .filter (age => age <= 40)
  .sort ((a,b) => a-b)
  .reduce((a,b)=> a + b,0);

  console.log (combine);