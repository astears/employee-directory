export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  region: string;
  department: string;
  lineOfBusiness: string;
  title: string;
  imgUrl?: string;
}

/*
JSON Generator: https://www.json-generator.com/
[
  '{{repeat(0, 100)}}',
  {
    id: '{{guid()}}',
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    email: '{{email()}}',
    phone: '{{phone()}}',
    state: '{{state()}}',
    city: '{{city()}}',
    region: '{{random("North", "East", "South", "West")}}',
    department: '{{random("Underwriting", "Finance", "HR", "Specialty", "Opus Management", "Personal Lines", "Claims", "Compliance")}}',
    lineOfBusiness: '{{random("Surety", "Marine", "Auto", "Healthcare", "Programs", "E&S", "Cyber", "H.S.I")}}',
    title: '{{random("Intern", "Manager", "Trainee", "Executive Underwriter", "AVP Underwriter", "Underwriter")}}'

  }
]

*/
