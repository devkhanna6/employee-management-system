// localStorage.clear()

const employees = [
{
id:1,
firstName:"Rahul",
email:"employee1@company.com",
password:"123",
taskNumbers:{active:2,newTask:1,completed:2,failed:1},
tasks:[
{id:101,title:"Prepare sales report",description:"Create monthly sales report for management",date:"2026-01-20",category:"Reports",priority:"High",active:true,newTask:true,completed:false,failed:false},
{id:102,title:"Client follow-up",description:"Call client regarding contract renewal",date:"2026-01-18",category:"Client",priority:"Medium",active:false,newTask:false,completed:true,failed:false},
{id:103,title:"Team meeting",description:"Attend weekly team sync meeting",date:"2026-01-17",category:"Meeting",priority:"Low",active:false,newTask:false,completed:true,failed:false},
{id:104,title:"Update CRM",description:"Update customer details in CRM",date:"2026-01-19",category:"Admin",priority:"High",active:true,newTask:false,completed:false,failed:false},
{id:105,title:"Training module",description:"Complete onboarding training module",date:"2026-01-15",category:"Training",priority:"Medium",active:false,newTask:false,completed:false,failed:true}
]
},

{
id:2,
firstName:"Amit",
email:"employee2@company.com",
password:"123",
taskNumbers:{active:2,newTask:1,completed:2,failed:1},
tasks:[
{id:201,title:"Design landing page",description:"Create UI for new product landing page",date:"2026-01-22",category:"Design",priority:"High",active:true,newTask:true,completed:false,failed:false},
{id:202,title:"Fix navbar bug",description:"Resolve navbar responsiveness issue",date:"2026-01-16",category:"Bugfix",priority:"High",active:false,newTask:false,completed:true,failed:false},
{id:203,title:"Code review",description:"Review PRs from teammates",date:"2026-01-18",category:"Development",priority:"Medium",active:true,newTask:false,completed:false,failed:false},
{id:204,title:"Deploy update",description:"Deploy latest build to staging",date:"2026-01-19",category:"Deployment",priority:"Medium",active:false,newTask:false,completed:true,failed:false},
{id:205,title:"Documentation",description:"Update component documentation",date:"2026-01-14",category:"Docs",priority:"Low",active:false,newTask:false,completed:false,failed:true}
]
},

{
id:3,
firstName:"Priya",
email:"employee3@company.com",
password:"123",
taskNumbers:{active:2,newTask:1,completed:2,failed:1},
tasks:[
{id:301,title:"Database backup",description:"Perform weekly database backup",date:"2026-01-20",category:"Database",priority:"High",active:true,newTask:true,completed:false,failed:false},
{id:302,title:"Optimize queries",description:"Improve slow SQL queries",date:"2026-01-17",category:"Performance",priority:"High",active:true,newTask:false,completed:false,failed:false},
{id:303,title:"Server monitoring",description:"Check server health logs",date:"2026-01-16",category:"Infrastructure",priority:"Medium",active:false,newTask:false,completed:true,failed:false},
{id:304,title:"Security audit",description:"Run vulnerability scan",date:"2026-01-14",category:"Security",priority:"High",active:false,newTask:false,completed:false,failed:true},
{id:305,title:"Backup verification",description:"Verify backup integrity",date:"2026-01-18",category:"Database",priority:"Low",active:false,newTask:false,completed:true,failed:false}
]
},

{
id:4,
firstName:"Neha",
email:"employee4@company.com",
password:"123",
taskNumbers:{active:2,newTask:1,completed:2,failed:1},
tasks:[
{id:401,title:"Social media post",description:"Create Instagram campaign post",date:"2026-01-21",category:"Marketing",priority:"High",active:true,newTask:true,completed:false,failed:false},
{id:402,title:"Ad performance review",description:"Analyze Google Ads performance",date:"2026-01-18",category:"Marketing",priority:"Medium",active:false,newTask:false,completed:true,failed:false},
{id:403,title:"Email campaign",description:"Design email newsletter",date:"2026-01-19",category:"Email",priority:"High",active:true,newTask:false,completed:false,failed:false},
{id:404,title:"Content calendar",description:"Plan next month content calendar",date:"2026-01-15",category:"Planning",priority:"Low",active:false,newTask:false,completed:true,failed:false},
{id:405,title:"Market research",description:"Research competitor strategies",date:"2026-01-14",category:"Research",priority:"Medium",active:false,newTask:false,completed:false,failed:true}
]
},

{
id:5,
firstName:"Suresh",
email:"employee5@company.com",
password:"123",
taskNumbers:{active:2,newTask:1,completed:2,failed:1},
tasks:[
{id:501,title:"Customer support tickets",description:"Resolve pending support tickets",date:"2026-01-20",category:"Support",priority:"High",active:true,newTask:true,completed:false,failed:false},
{id:502,title:"Refund processing",description:"Process refund requests",date:"2026-01-18",category:"Finance",priority:"Medium",active:false,newTask:false,completed:true,failed:false},
{id:503,title:"User feedback review",description:"Analyze user feedback reports",date:"2026-01-17",category:"Feedback",priority:"Medium",active:true,newTask:false,completed:false,failed:false},
{id:504,title:"System testing",description:"Test new system features",date:"2026-01-15",category:"Testing",priority:"High",active:false,newTask:false,completed:false,failed:true},
{id:505,title:"Daily report",description:"Submit end-of-day report",date:"2026-01-19",category:"Reporting",priority:"Low",active:false,newTask:false,completed:true,failed:false}
]
}
]

const admin=[{id:101,email:"admin@company.com",password:"123",firstName:"Dev"}]

export const setLocalStorage=()=>{
if(!localStorage.getItem("employees")){
localStorage.setItem("employees",JSON.stringify(employees))
}
if(!localStorage.getItem("admin")){
localStorage.setItem("admin",JSON.stringify(admin))
}
}

export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem("employees"))
const admin=JSON.parse(localStorage.getItem("admin"))
return{employees,admin}
}
