const express=require('express');
const cors=require('cors');
const xlsx=require('xlsx');
const app= express();
const port =8081;
app.use(cors());
app.use(express.json());

app.use(express.static('assets'));
app.get('/api/get_data',(req,res)=>{
     const filepath ='./assets/MEANTest_SourceExcel.xlsx';
     const workbook = xlsx.readFile(filepath);
     const sheet_name_list =workbook.SheetNames;
     const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
     res.json(data);
           
}).listen(port,(error)=>{
       if(!error)
         console.log(`Server is started on http://localhost:${port} successfully.`);
})